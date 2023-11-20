#!/usr/bin/env python3
from typing import Dict, Union

from dataclass_utils import dataclass_from_dict
from modules.common import modbus
from modules.common.component_state import BatState
from modules.common.component_type import ComponentDescriptor
from modules.common.modbus import ModbusDataType
from modules.common.fault_state import ComponentInfo
from modules.common.store import get_bat_value_store
from modules.devices.good_we.config import GoodWeBatSetup
from modules.devices.good_we.version import GoodWeVersion


class GoodWeBat:
    def __init__(self,
                 modbus_id: int,
                 component_config: Union[Dict, GoodWeBatSetup],
                 tcp_client: modbus.ModbusTcpClient_,
                 version: GoodWeVersion) -> None:
        self.__modbus_id = modbus_id
        self.component_config = dataclass_from_dict(GoodWeBatSetup, component_config)
        self.__tcp_client = tcp_client
        self._version = version
        self.store = get_bat_value_store(self.component_config.id)
        self.component_info = ComponentInfo.from_component_config(self.component_config)

    def update(self) -> None:
        with self.__tcp_client:
            if self._version == GoodWeVersion.V_1_7:
                power = self.__tcp_client.read_holding_registers(35183, ModbusDataType.INT_16, unit=self.__modbus_id)*-1
            elif self._version == GoodWeVersion.V_1_10:
                power = self.__tcp_client.read_holding_registers(
                    35182, ModbusDataType.UINT_32, unit=self.__modbus_id)*-1
            elif self._version == GoodWeVersion.V_1_1:
                # zwei Batterieeingänge
                p_battery_1 = self.__tcp_client.read_holding_registers(
                    35182, ModbusDataType.INT_32, unit=self.__modbus_id)
                p_battery_2 = self.__tcp_client.read_holding_registers(
                    35264, ModbusDataType.UINT_32, unit=self.__modbus_id)
                power = (p_battery_1+p_battery_2)*-1
            soc = self.__tcp_client.read_holding_registers(37007, ModbusDataType.UINT_16, unit=self.__modbus_id)
            imported = self.__tcp_client.read_holding_registers(
                35206, ModbusDataType.UINT_32, unit=self.__modbus_id) * 100
            exported = self.__tcp_client.read_holding_registers(
                35209, ModbusDataType.UINT_32, unit=self.__modbus_id) * 100

        bat_state = BatState(
            power=power,
            soc=soc,
            imported=imported,
            exported=exported
        )
        self.store.set(bat_state)


component_descriptor = ComponentDescriptor(configuration_factory=GoodWeBatSetup)
