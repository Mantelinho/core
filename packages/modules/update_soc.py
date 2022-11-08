import logging
from typing import List, Tuple
import copy
import threading
import time

from control import data
from control.chargepoint import AllChargepoints
from control.ev import Ev
from helpermodules import timecheck
from helpermodules.pub import Pub
from helpermodules.utils import thread_handler

log = logging.getLogger("soc."+__name__)


class UpdateSoc:
    def __init__(self) -> None:
        self.heartbeat = False

    def update(self) -> None:
        delay = 10
        next_time = time.time() + delay
        while True:
            self.heartbeat = True
            time.sleep(max(0, next_time - time.time()))
            try:
                threads_set, threads_update = self._get_threads()
                thread_handler(threads_set)
                thread_handler(threads_update)
            except Exception:
                log.exception("Fehler im Main-Modul")
            # skip tasks if we are behind schedule:
            next_time += (time.time() - next_time) // delay * delay + delay

    def _get_threads(self) -> Tuple[List[threading.Thread], List[threading.Thread]]:
        threads_set, threads_update = [], []
        ev_data = copy.deepcopy(data.data.ev_data)
        # Alle Autos durchgehen
        for ev in ev_data.values():
            try:
                if ev.soc_module is not None:
                    charge_state, plugged_in = self._get_ev_state(ev.num)
                    if (ev.ev_template.soc_interval_expired(charge_state, ev.data.get.soc_timestamp) or
                            ev.data.get.force_soc_update or
                            # Nach Abstecken abfragen, da zB für Zielladen der aktuelle SoC benötigt wird, um zu
                            # entscheiden, ob die Ladung gestartet werden muss.
                            plugged_in):
                        self._reset_force_soc_update(ev)
                        # Es wird ein Zeitstempel gesetzt, unabhängig ob die Abfrage erfolgreich war, da einige
                        # Hersteller bei zu häufigen Abfragen Accounts sperren.
                        Pub().pub(f"openWB/set/vehicle/{ev.num}/get/soc_timestamp", timecheck.create_timestamp())
                        threads_set.append(threading.Thread(target=ev.soc_module.update,
                                                            args=(charge_state,), name=f"soc_ev{ev.num}"))
                        if hasattr(ev.soc_module, "store"):
                            threads_update.append(threading.Thread(target=ev.soc_module.store.update,
                                                                   args=(), name=f"soc_ev{ev.num}"))
            except Exception:
                log.exception("Fehler im Main-Modul")
        return threads_set, threads_update

    def _reset_force_soc_update(self, ev: Ev) -> None:
        if ev.data.get.force_soc_update:
            ev.data.get.force_soc_update = False
            Pub().pub(f"openWB/set/vehicle/{ev.num}/get/force_soc_update", False)

    def _get_ev_state(self, ev_num: int) -> Tuple[bool, bool]:
        cp_data = copy.deepcopy(data.data.cp_data)
        for cp in cp_data.values():
            if not isinstance(cp, AllChargepoints):
                if cp.data.set.charging_ev == ev_num:
                    charge_state = cp.data.get.charge_state
                    plugged_in = cp.data.get.plug_state is True and cp.plug_state_prev is False
                    break
        else:
            charge_state = False
            plugged_in = False
        return charge_state, plugged_in
