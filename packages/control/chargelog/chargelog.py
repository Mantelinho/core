import datetime
from enum import Enum
import json
import logging
import math
import pathlib
from typing import Dict, List, Union

from control import data
from dataclass_utils import asdict
from helpermodules.measurement_logging.process_log import CalculationType, analyse_percentage, process_entry
from helpermodules.pub import Pub
from helpermodules import timecheck

# alte Daten: Startzeitpunkt der Ladung, Endzeitpunkt, Geladene Reichweite, Energie, Leistung, Ladedauer, LP-Nummer,
# Lademodus, RFID-Tag
# json-Objekt: {"chargepoint": {"id": 1, "name": "Hof", "rfid": 1234},
# "vehicle": { "id": 1, "name":"Model 3", "chargemode": "pv_charging", "prio": True },
# "time": { "begin":"27.05.2021 07:43", "end": "27.05.2021 07:50", "time_charged": "1:34",
# "data": {"range_charged": 34, "imported_since_mode_switch": 3400, "imported_since_plugged": 5000,
#          "power": 110000, "costs": 3,42} }}

log = logging.getLogger(__name__)


def collect_data(chargepoint):
    """
    Parameter
    ---------
    chargepoint: class
        Ladepunkt, dessen Logdaten gesammelt werden
    """
    try:
        log_data = chargepoint.data.set.log
        charging_ev = chargepoint.data.set.charging_ev_data
        if chargepoint.data.get.plug_state:
            # Zählerstand beim Einschalten merken
            if log_data.imported_at_plugtime == 0:
                log_data.imported_at_plugtime = chargepoint.data.get.imported
                log.debug(f"imported_at_plugtime {chargepoint.data.get.imported}")
            # Bisher geladene Energie ermitteln
            log_data.imported_since_plugged = chargepoint.data.get.imported - log_data.imported_at_plugtime
            if log_data.imported_at_mode_switch == 0:
                log_data.imported_at_mode_switch = chargepoint.data.get.imported
                log.debug(f"imported_at_mode_switch {chargepoint.data.get.imported}")
            # Bei einem Wechsel das Lademodus wird ein neuer Eintrag erstellt.
            if chargepoint.data.get.charge_state:
                if log_data.timestamp_start_charging is None:
                    log_data.timestamp_start_charging = timecheck.create_timestamp()
                    if chargepoint.data.control_parameter.submode == "time_charging":
                        log_data.chargemode_log_entry = "time_charging"
                    else:
                        log_data.chargemode_log_entry = chargepoint.data.control_parameter.chargemode.value
                log_data.imported_since_mode_switch = chargepoint.data.get.imported - log_data.imported_at_mode_switch
                log.debug(f"imported_since_mode_switch {log_data.imported_since_mode_switch} "
                          f"counter {chargepoint.data.get.imported}")
                log_data.range_charged = log_data.imported_since_mode_switch / \
                    charging_ev.ev_template.data.average_consump * 100
                log_data.time_charged, _ = timecheck.get_difference_to_now(log_data.timestamp_start_charging)
            Pub().pub(f"openWB/set/chargepoint/{chargepoint.num}/set/log", asdict(log_data))
    except Exception:
        log.exception("Fehler im Ladelog-Modul")


def save_data(chargepoint, charging_ev, immediately: bool = True, reset: bool = False):
    """ json-Objekt für den Log-Eintrag erstellen, an die Datei anhängen und die Daten, die sich auf den Ladevorgang
    beziehen, löschen.

    Parameter
    ---------
    chargepoint: class
        Ladepunkt
    charging_ev: class
        EV, das an diesem Ladepunkt lädt. (Wird extra übergeben, da es u.U. noch nicht zugewiesen ist und nur die
        Nummer aus dem Broker in der LP-Klasse hinterlegt ist.)
    reset: bool
        Wenn die Daten komplett zurückgesetzt werden, wird nicht der Zwischenzählerstand für
        imported_at_mode_switch notiert. Sonst schon, damit zwischen save_data und dem nächsten collect_data keine
        Daten verloren gehen.
    """
    try:
        log_data = chargepoint.data.set.log
        # Es wurde noch nie ein Auto zugeordnet
        if charging_ev == -1:
            return
        if log_data.timestamp_start_charging is None:
            # Die Daten wurden schon erfasst.
            return
        if not immediately:
            if chargepoint.data.get.power != 0:
                return
        # Daten vor dem Speichern nochmal aktualisieren, auch wenn nicht mehr geladen wird.
        log_data.imported_since_plugged = chargepoint.data.get.imported - log_data.imported_at_plugtime
        log_data.imported_since_mode_switch = chargepoint.data.get.imported - log_data.imported_at_mode_switch
        log_data.range_charged = log_data.imported_since_mode_switch / charging_ev.ev_template.data.average_consump*100
        log_data.time_charged, duration = timecheck.get_difference_to_now(log_data.timestamp_start_charging)
        power = 0
        if duration > 0:
            power = log_data.imported_since_mode_switch / duration
        calculate_charge_cost(chargepoint, True)
        costs = log_data.costs
        new_entry = {
            "chargepoint":
            {
                "id": chargepoint.num,
                "name": chargepoint.data.config.name,
            },
            "vehicle":
            {
                "id": charging_ev.num,
                "name": charging_ev.data.name,
                "chargemode": log_data.chargemode_log_entry,
                "prio": chargepoint.data.control_parameter.prio,
                "rfid": chargepoint.data.set.rfid
            },
            "time":
            {
                "begin": log_data.timestamp_start_charging,
                "end": timecheck.create_timestamp(),
                "time_charged": log_data.time_charged
            },
            "data":
            {
                "range_charged": truncate(log_data.range_charged, 2),
                "imported_since_mode_switch": truncate(log_data.imported_since_mode_switch, 2),
                "imported_since_plugged": truncate(log_data.imported_since_plugged, 2),
                "power": truncate(power, 2),
                "costs": truncate(costs, 2)
            }
        }

        # json-Objekt in Datei einfügen
        (_get_parent_file() / "data"/"charge_log").mkdir(mode=0o755, parents=True, exist_ok=True)
        filepath = str(_get_parent_file() / "data" / "charge_log" /
                       (timecheck.create_timestamp_YYYYMM() + ".json"))
        try:
            with open(filepath, "r", encoding="utf-8") as json_file:
                content = json.load(json_file)
        except FileNotFoundError:
            # with open(filepath, "w", encoding="utf-8") as jsonFile:
            #     json.dump([], jsonFile)
            # with open(filepath, "r", encoding="utf-8") as jsonFile:
            #     content = json.load(jsonFile)
            content = []
        content.append(new_entry)
        with open(filepath, "w", encoding="utf-8") as json_file:
            json.dump(content, json_file)
        log.debug(f"Neuer Ladelog-Eintrag: {new_entry}")

        _reset_data_regarding_chargemode(chargepoint, reset)
        Pub().pub(f"openWB/set/chargepoint/{chargepoint.num}/set/log", asdict(log_data))
    except Exception:
        log.exception("Fehler im Ladelog-Modul")


def get_log_data(request: Dict):
    """ json-Objekt mit gefilterten Logdaten erstellen

    Parameter
    ---------
    request: dict
        Infos zum Request: Monat, Jahr, Filter
    """
    log_data = {"entries": [], "totals": {}}
    try:
        # Datei einlesen
        filepath = str(_get_parent_file() / "data" / "charge_log" /
                       (str(request["year"]) + str(request["month"]) + ".json"))
        try:
            with open(filepath, "r", encoding="utf-8") as json_file:
                charge_log = json.load(json_file)
        except FileNotFoundError:
            log.debug("Kein Ladelog für %s gefunden!" % (str(request)))
            return log_data
        # Liste mit gefilterten Einträgen erstellen
        for entry in charge_log:
            if len(entry) > 0:
                if (
                    "id" in request["filter"]["chargepoint"] and
                    len(request["filter"]["chargepoint"]["id"]) > 0 and
                    entry["chargepoint"]["id"] not in request["filter"]["chargepoint"]["id"]
                ):
                    log.debug(
                        "Verwerfe Eintrag wegen Ladepunkt ID: %s != %s" %
                        (str(entry["chargepoint"]["id"]), str(request["filter"]["chargepoint"]["id"]))
                    )
                    continue
                if (
                    "id" in request["filter"]["vehicle"] and
                    len(request["filter"]["vehicle"]["id"]) > 0 and
                    entry["vehicle"]["id"] not in request["filter"]["vehicle"]["id"]
                ):
                    log.debug(
                        "Verwerfe Eintrag wegen Fahrzeug ID: %s != %s" %
                        (str(entry["vehicle"]["id"]), str(request["filter"]["vehicle"]["id"]))
                    )
                    continue
                if (
                    "rfid" in request["filter"]["vehicle"] and
                    len(request["filter"]["vehicle"]["rfid"]) > 0 and
                    entry["vehicle"]["rfid"] not in request["filter"]["vehicle"]["rfid"]
                ):
                    log.debug(
                        "Verwerfe Eintrag wegen RFID Tag: %s != %s" %
                        (str(entry["vehicle"]["rfid"]), str(request["filter"]["vehicle"]["rfid"]))
                    )
                    continue
                if (
                    "chargemode" in request["filter"]["vehicle"] and
                    len(request["filter"]["vehicle"]["chargemode"]) > 0 and
                    entry["vehicle"]["chargemode"] not in request["filter"]["vehicle"]["chargemode"]
                ):
                    log.debug(
                        "Verwerfe Eintrag wegen Lademodus: %s != %s" %
                        (str(entry["vehicle"]["chargemode"]), str(request["filter"]["vehicle"]["chargemode"]))
                    )
                    continue
                if (
                    "prio" in request["filter"]["vehicle"] and
                    request["filter"]["vehicle"]["prio"] is not entry["vehicle"]["prio"]
                ):
                    log.debug(
                        "Verwerfe Eintrag wegen Priorität: %s != %s" %
                        (str(entry["vehicle"]["prio"]), str(request["filter"]["vehicle"]["prio"]))
                    )
                    continue

                # wenn wir hier ankommen, passt der Eintrag zum Filter
                log_data["entries"].append(entry)

        if len(log_data["entries"]) > 0:
            # Summen bilden
            duration = "00:00"
            range_charged = 0
            mode = 0
            power = 0
            costs = 0
            for entry in log_data["entries"]:
                duration = timecheck.duration_sum(
                    duration, entry["time"]["time_charged"])
                range_charged += entry["data"]["range_charged"]
                mode += entry["data"]["imported_since_mode_switch"]
                power += entry["data"]["power"]
                costs += entry["data"]["costs"]
            power = power / len(log_data["entries"])
            log_data["totals"] = {
                "time_charged": duration,
                "range_charged": range_charged,
                "imported_since_mode_switch": mode,
                "power": power,
                "costs": costs,
            }
    except Exception:
        log.exception("Fehler im Ladelog-Modul")
    return log_data


def reset_data(chargepoint, charging_ev, immediately: bool = True):
    """nach dem Abstecken Log-Eintrag erstellen und alle Log-Daten zurücksetzen.

    Parameter
    ---------
    chargepoint: class
        Ladepunkt
    charging_ev: class
        EV, das an diesem Ladepunkt lädt. (Wird extra übergeben, da es u.U. noch nicht zugewiesen ist und nur die
        Nummer aus dem Broker in der LP-Klasse hinterlegt ist.)
    immediately: bool
        Soll sofort ein Eintrag erstellt werden oder gewartet werden, bis die Ladung beendet ist.
    """
    try:
        log_data = chargepoint.data.set.log
        if charging_ev == -1:
            # Es wurde noch nie ein Auto zugeordnet.
            return
        if not immediately:
            if chargepoint.data.get.power != 0:
                return
        save_data(chargepoint, charging_ev, immediately, reset=True)

        log_data.imported_at_plugtime = 0
        log_data.imported_since_plugged = 0
        _reset_data_regarding_chargemode(chargepoint, True)
        Pub().pub(f"openWB/set/chargepoint/{chargepoint.num}/set/log", asdict(log_data))
    except Exception:
        log.exception("Fehler im Ladelog-Modul")


def _reset_data_regarding_chargemode(chargepoint, reset: bool = False) -> None:
    log_data = chargepoint.data.set.log
    log_data.timestamp_start_charging = None
    if reset:
        log_data.imported_at_mode_switch = 0
    else:
        log_data.imported_at_mode_switch = chargepoint.data.get.imported
    log_data.chargemode_log_entry = "_"
    log_data.imported_since_mode_switch = 0
    log_data.range_charged = 0
    log_data.time_charged = "00:00"


def truncate(number: Union[int, float], decimals: int = 0):
    """
    Returns a value truncated to a specific number of decimal places.
    """
    try:
        if not isinstance(decimals, int):
            raise TypeError("decimal places must be an integer.")
        elif decimals < 0:
            raise ValueError("decimal places has to be 0 or more.")
        elif decimals == 0:
            return math.trunc(number)

        factor = 10.0 ** decimals
        return math.trunc(number * factor) / factor
    except Exception:
        log.exception("Fehler im Ladelog-Modul")


def calculate_charge_cost(cp, create_log_entry: bool = False):
    content = get_todays_daily_log()
    try:
        reference = _get_reference_position(cp, create_log_entry)
        reference_time = get_reference_time(cp, reference)
        reference_entry = _get_reference_entry(content["entries"], reference_time)
        energy_entry = process_entry(reference_entry, content["entries"][-1], CalculationType.ENERGY)
        power_source_entry = analyse_percentage(energy_entry)
        if reference == ReferenceTime.START:
            charged_energy = cp.data.set.log.imported_since_mode_switch
        elif reference == ReferenceTime.MIDDLE:
            # energy_imported in kWh
            charged_energy = (content["entries"][-1]["cp"][f"cp{cp.num}"]["imported"] -
                              power_source_entry["cp"][f"cp{cp.num}"]["energy_imported"]*1000)
        elif reference == ReferenceTime.END:
            reference_start_position = _get_reference_position(cp, False)
            if reference_start_position == ReferenceTime.START:
                charged_energy = cp.data.set.log.imported_since_mode_switch
            else:
                last_considered_entry = _get_reference_entry(
                    content["entries"], timecheck.create_unix_timestamp_current_full_hour())
                charged_energy = cp.data.get.imported - \
                    last_considered_entry["cp"][f"cp{cp.num}"]["energy_imported"]*1000
        else:
            raise TypeError(f"Unbekannter Referenz-Zeitpunkt {reference}")
        cp.data.set.log.costs += _calc(power_source_entry["power_source"],
                                       charged_energy,
                                       (data.data.optional_data.et_module is not None))
    except Exception:
        log.exception(f"Fehler beim Berechnen der Ladekosten für Ladepunkt {cp.num}")


class ReferenceTime(Enum):
    START = 0
    MIDDLE = 1
    END = 2


def _get_reference_position(cp, create_log_entry: bool) -> ReferenceTime:
    # Referenz-Zeitpunkt ermitteln (angesteckt oder letzte volle Stunde)
    # Wurde innerhalb der letzten Stunde angesteckt?
    if create_log_entry:
        # Ladekosten für angefangene Stunde ermitteln
        return ReferenceTime.END
    else:
        one_hour_back = (datetime.datetime.today()-datetime.timedelta(hours=1))
        if (timecheck.get_difference(cp.data.set.log.timestamp_start_charging,
                                     one_hour_back.strftime("%m/%d/%Y, %H:%M:%S")) < 0):
            return ReferenceTime.START
        else:
            return ReferenceTime.MIDDLE


def get_reference_time(cp, reference_position):
    if reference_position == ReferenceTime.START:
        return datetime.datetime.strptime(cp.data.set.log.timestamp_start_charging, "%m/%d/%Y, %H:%M:%S").timestamp()
    elif reference_position == ReferenceTime.MIDDLE:
        return (datetime.datetime.today()-datetime.timedelta(hours=1)).timestamp()
    elif reference_position == ReferenceTime.END:
        return timecheck.create_unix_timestamp_current_full_hour()
    else:
        raise TypeError(f"Unbekannter Referenz-Zeitpunkt {reference_position}")


def _get_reference_entry(entries: List[Dict], reference_time: float) -> Dict:
    for entry in reversed(entries):
        if entry["timestamp"] <= reference_time:
            return entry
    else:
        # Tagesumbruch
        content = _get_yesterdays_daily_log()
        for entry in reversed(content["entries"]):
            if entry["timestamp"] < reference_time:
                return entry
        else:
            return {}


def _get_yesterdays_daily_log():
    return get_daily_log((datetime.datetime.today()-datetime.timedelta(days=1)).strftime("%Y%m%d"))


def get_todays_daily_log():
    return get_daily_log(timecheck.create_timestamp_YYYYMMDD())


def get_daily_log(day):
    filepath = str(_get_parent_file() / "data" / "daily_log" / f"{day}.json")
    try:
        with open(filepath, "r", encoding="utf-8") as json_file:
            return json.load(json_file)
    except FileNotFoundError:
        return []


def _calc(power_source: Dict[str, float], charged_energy_last_hour: float, et_active: bool) -> float:
    prices = data.data.general_data.data.prices

    bat_costs = prices.bat * charged_energy_last_hour * power_source["bat"]
    cp_costs = prices.cp * charged_energy_last_hour * power_source["cp"]
    if et_active:
        grid_costs = data.data.optional_data.et_get_current_price() * charged_energy_last_hour * power_source["grid"]
    else:
        grid_costs = prices.grid * charged_energy_last_hour * power_source["grid"]
    pv_costs = prices.pv * charged_energy_last_hour * power_source["pv"]

    log.debug(
        f'Ladepreis für die letzte Stunde: {bat_costs}€ Speicher ({power_source["bat"]}%), {grid_costs}€ Netz '
        '({power_source["grid"]}%), {pv_costs}€ Pv ({power_source["pv"]}%)')
    return round(bat_costs + cp_costs + grid_costs + pv_costs, 4)


def _get_parent_file() -> pathlib.Path:
    return pathlib.Path(__file__).resolve().parents[3]
