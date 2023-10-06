import{l as N,G as q,H as C,c as L,I as S,J as P,K as A,L as V,M as z,F as H}from"./vendor-fortawesome-ad83e535.js";import{C as Z}from"./index-bbf2ec18.js";import{_ as D,p as v,k as r,l as g,z as p,y as u,L as n,G as _,I as w,A as t,u as s,x as m,Q as M,R as E,q as W}from"./vendor-94ac8c48.js";import"./vendor-bootstrap-9f620114.js";import"./vendor-jquery-f7104ff8.js";import"./vendor-axios-dc63434e.js";import"./vendor-sortablejs-dbc23470.js";N.add(q,C,L,S,P,A,V,z);const O={name:"OpenwbStatus",mixins:[Z],components:{FontAwesomeIcon:H},data(){return{mqttTopicsToSubscribe:["openWB/general/extern","openWB/chargepoint/get/power","openWB/chargepoint/get/imported","openWB/chargepoint/get/exported","openWB/chargepoint/get/daily_imported","openWB/chargepoint/get/daily_exported","openWB/chargepoint/+/config","openWB/chargepoint/+/get/+","openWB/chargepoint/+/get/connected_vehicle/info","openWB/chargepoint/+/set/+","openWB/system/device/+/component/+/config","openWB/counter/+/get/+","openWB/pv/get/+","openWB/pv/+/get/+","openWB/bat/get/+","openWB/bat/+/get/+","openWB/vehicle/+/name","openWB/vehicle/+/get/+"],statusLevel:["success","warning","danger"]}},computed:{installedChargePoints:{get(){let e=this.getWildcardTopics("openWB/chargepoint/+/config"),y={};for(const[B,x]of Object.entries(e))(x.type==="internal_openwb"||this.$store.state.mqtt["openWB/general/extern"]===!1)&&(y[B]=x);return y}},numChargePointsInstalled:{get(){return Object.keys(this.installedChargePoints).length}},counterConfigs:{get(){return this.filterComponentsByType(this.getWildcardTopics("openWB/system/device/+/component/+/config"),"counter")}},numInvertersInstalled:{get(){return Object.keys(this.inverterConfigs).length}},inverterConfigs:{get(){return this.filterComponentsByType(this.getWildcardTopics("openWB/system/device/+/component/+/config"),"inverter")}},numBatteriesInstalled:{get(){return Object.keys(this.batteryConfigs).length}},batteryConfigs:{get(){return this.filterComponentsByType(this.getWildcardTopics("openWB/system/device/+/component/+/config"),"bat")}},vehicleNames:{get(){return this.getWildcardTopics("openWB/vehicle/+/name")}}},methods:{filterComponentsByType(e,y){return Object.keys(e).filter(B=>e[B].type.includes(y)).reduce((B,x)=>({...B,[x]:e[x]}),{})},getChargePointIndex(e){return parseInt(e.match(/(?:\/)(\d+)(?=\/)/)[1])},getComponentIndex(e){return parseInt(e.match(/(?:\/)(\d+)(?=\/)/)[1])},getVehicleIndex(e){return parseInt(e.match(/(?:\/)(\d+)(?=\/)/)[1])}}},b=e=>(M("data-v-051028a3"),e=e(),E(),e),j={class:"status"},F=b(()=>W("br",null,null,-1)),G=b(()=>W("br",null,null,-1)),J={key:1},R=b(()=>W("br",null,null,-1)),Q=b(()=>W("br",null,null,-1)),$={key:3},U=b(()=>W("br",null,null,-1)),X={key:5},Y=b(()=>W("br",null,null,-1)),K={key:6},ee=b(()=>W("br",null,null,-1));function te(e,y,B,x,k,o){const d=v("font-awesome-icon"),l=v("openwb-base-text-input"),c=v("openwb-base-heading"),h=v("openwb-base-card"),f=v("openwb-base-alert"),T=v("openwb-base-checkbox-input"),I=v("openwb-base-number-input");return r(),g("div",j,[p(" all charge points "),o.numChargePointsInstalled>1&&e.$store.state.mqtt["openWB/general/extern"]===!1?(r(),u(h,{key:0,subtype:"primary",collapsible:!0,collapsed:!0},{header:n(()=>[t(d,{"fixed-width":"",icon:["fas","charging-station"]}),s(" Alle Ladepunkte ")]),default:n(()=>[t(l,{title:"Leistung",readonly:"",class:"text-right text-monospace",step:"0.001",unit:"kW","model-value":e.formatNumberTopic("openWB/chargepoint/get/power",3,3,.001)},null,8,["model-value"]),t(l,{title:"Zählerstand laden",readonly:"",class:"text-right text-monospace",step:"0.001",unit:"kWh","model-value":e.formatNumberTopic("openWB/chargepoint/get/imported",3,3,.001)},null,8,["model-value"]),t(l,{title:"Zählerstand entladen",readonly:"",class:"text-right text-monospace",step:"0.001",unit:"kWh","model-value":e.formatNumberTopic("openWB/chargepoint/get/exported",3,3,.001)},null,8,["model-value"]),t(c,null,{default:n(()=>[s("Historie")]),_:1}),t(l,{title:"Heute geladen",readonly:"",class:"text-right text-monospace",step:"0.001",unit:"kWh","model-value":e.formatNumberTopic("openWB/chargepoint/get/daily_imported",3,3,.001)},null,8,["model-value"]),t(l,{title:"Heute entladen",readonly:"",class:"text-right text-monospace",step:"0.001",unit:"kWh","model-value":e.formatNumberTopic("openWB/chargepoint/get/daily_exported",3,3,.001)},null,8,["model-value"])]),_:1})):p("v-if",!0),p(" individual charge points "),(r(!0),g(_,null,w(o.installedChargePoints,(a,i)=>(r(),u(h,{key:i,collapsible:!0,collapsed:!0,subtype:"primary"},{header:n(()=>[t(d,{"fixed-width":"",icon:["fas","charging-station"]}),s(" "+m(a.name)+" (ID: "+m(o.getChargePointIndex(i))+") ",1)]),default:n(()=>[t(f,{subtype:k.statusLevel[e.$store.state.mqtt["openWB/chargepoint/"+o.getChargePointIndex(i)+"/get/fault_state"]]},{default:n(()=>[e.$store.state.mqtt["openWB/chargepoint/"+o.getChargePointIndex(i)+"/get/fault_state"]==1?(r(),u(d,{key:0,"fixed-width":"",icon:["fas","exclamation-triangle"]})):e.$store.state.mqtt["openWB/chargepoint/"+o.getChargePointIndex(i)+"/get/fault_state"]==2?(r(),u(d,{key:1,"fixed-width":"",icon:["fas","times-circle"]})):(r(),u(d,{key:2,"fixed-width":"",icon:["fas","check-circle"]})),s(" Modulmeldung:"),F,s(" "+m(e.$store.state.mqtt["openWB/chargepoint/"+o.getChargePointIndex(i)+"/get/fault_str"]),1)]),_:2},1032,["subtype"]),t(f,{subtype:"info"},{default:n(()=>[s(" Statusmeldung:"),G,s(" "+m(e.$store.state.mqtt["openWB/chargepoint/"+o.getChargePointIndex(i)+"/get/state_str"]),1)]),_:2},1024),t(T,{title:"Fahrzeug angesteckt",disabled:"","model-value":e.$store.state.mqtt["openWB/chargepoint/"+o.getChargePointIndex(i)+"/get/plug_state"]==1},null,8,["model-value"]),t(T,{title:"Ladevorgang aktiv",disabled:"","model-value":e.$store.state.mqtt["openWB/chargepoint/"+o.getChargePointIndex(i)+"/get/charge_state"]==1},null,8,["model-value"]),t(l,{title:"Zählerstand laden",readonly:"",class:"text-right text-monospace",step:"0.001",unit:"kWh","model-value":e.formatNumberTopic("openWB/chargepoint/"+o.getChargePointIndex(i)+"/get/imported",3,3,.001)},null,8,["model-value"]),t(l,{title:"Zählerstand entladen",readonly:"",class:"text-right text-monospace",step:"0.001",unit:"kWh","model-value":e.formatNumberTopic("openWB/chargepoint/"+o.getChargePointIndex(i)+"/get/exported",3,3,.001)},null,8,["model-value"]),t(l,{title:"Heute geladen",readonly:"",class:"text-right text-monospace",step:"0.001",unit:"kWh","model-value":e.formatNumberTopic("openWB/chargepoint/"+o.getChargePointIndex(i)+"/get/daily_imported",3,3,.001)},null,8,["model-value"]),t(l,{title:"Heute entladen",readonly:"",class:"text-right text-monospace",step:"0.001",unit:"kWh","model-value":e.formatNumberTopic("openWB/chargepoint/"+o.getChargePointIndex(i)+"/get/daily_exported",3,3,.001)},null,8,["model-value"]),t(l,{title:"Wirkleistung",readonly:"",class:"text-right text-monospace",step:"0.001",unit:"kW","model-value":e.formatNumberTopic("openWB/chargepoint/"+o.getChargePointIndex(i)+"/get/power",3,3,.001)},null,8,["model-value"]),t(l,{title:"Ladestromvorgabe",readonly:"",class:"text-right text-monospace",step:"0.01",unit:"A","model-value":e.formatNumberTopic("openWB/chargepoint/"+o.getChargePointIndex(i)+"/set/current",2)},null,8,["model-value"]),t(l,{title:"Netzfrequenz",readonly:"",class:"text-right text-monospace",step:"0.01",unit:"Hz","model-value":e.formatNumberTopic("openWB/chargepoint/"+o.getChargePointIndex(i)+"/get/frequency",2)},null,8,["model-value"]),t(c,null,{default:n(()=>[s("Werte pro Phase")]),_:1}),t(l,{title:"Spannung",readonly:"",class:"text-right text-monospace",unit:"V","model-value":e.formatPhaseArrayNumberTopic("openWB/chargepoint/"+o.getChargePointIndex(i)+"/get/voltages",1)},null,8,["model-value"]),t(l,{title:"Strom",readonly:"",class:"text-right text-monospace",unit:"A","model-value":e.formatPhaseArrayNumberTopic("openWB/chargepoint/"+o.getChargePointIndex(i)+"/get/currents",2)},null,8,["model-value"]),t(l,{title:"Wirkleistung",readonly:"",class:"text-right text-monospace",unit:"kW","model-value":e.formatPhaseArrayNumberTopic("openWB/chargepoint/"+o.getChargePointIndex(i)+"/get/powers",3,3,.001)},null,8,["model-value"]),t(l,{title:"Leistungsfaktor",readonly:"",class:"text-right text-monospace","model-value":e.formatPhaseArrayNumberTopic("openWB/chargepoint/"+o.getChargePointIndex(i)+"/get/power_factors",2)},null,8,["model-value"]),t(c,null,{default:n(()=>[s("Phasen")]),_:1}),t(l,{title:"Vorgabe",readonly:"",class:"text-right text-monospace","model-value":e.formatNumberTopic("openWB/chargepoint/"+o.getChargePointIndex(i)+"/set/phases_to_use")},null,8,["model-value"]),t(l,{title:"Aktuell",readonly:"",class:"text-right text-monospace","model-value":e.formatNumberTopic("openWB/chargepoint/"+o.getChargePointIndex(i)+"/get/phases_in_use")},null,8,["model-value"])]),_:2},1024))),128)),p(" counters "),e.$store.state.mqtt["openWB/general/extern"]===!1?(r(),g("div",J,[(r(!0),g(_,null,w(o.counterConfigs,a=>(r(),u(h,{key:a.id,title:a.name+" (ID: "+a.id+")",collapsible:!0,collapsed:!0,subtype:"danger"},{header:n(()=>[t(d,{"fixed-width":"",icon:["fas","gauge-high"]}),s(" "+m(a.name)+" (ID: "+m(a.id)+") ",1)]),default:n(()=>[t(f,{subtype:k.statusLevel[e.$store.state.mqtt["openWB/counter/"+a.id+"/get/fault_state"]]},{default:n(()=>[e.$store.state.mqtt["openWB/counter/"+a.id+"/get/fault_state"]==1?(r(),u(d,{key:0,"fixed-width":"",icon:["fas","exclamation-triangle"]})):e.$store.state.mqtt["openWB/counter/"+a.id+"/get/fault_state"]==2?(r(),u(d,{key:1,"fixed-width":"",icon:["fas","times-circle"]})):(r(),u(d,{key:2,"fixed-width":"",icon:["fas","check-circle"]})),s(" Modulmeldung:"),R,s(" "+m(e.$store.state.mqtt["openWB/counter/"+a.id+"/get/fault_str"]),1)]),_:2},1032,["subtype"]),e.$store.state.mqtt["openWB/counter/"+a.id+"/get/state_str"]!=null?(r(),u(f,{key:0,subtype:"info"},{default:n(()=>[s(" Statusmeldung:"),Q,s(" "+m(e.$store.state.mqtt["openWB/counter/"+a.id+"/get/state_str"]),1)]),_:2},1024)):p("v-if",!0),t(c,null,{default:n(()=>[s("Zählerstände")]),_:1}),t(l,{title:"Export",readonly:"",class:"text-right text-monospace",step:"0.001",unit:"kWh","model-value":e.formatNumberTopic("openWB/counter/"+a.id+"/get/exported",3,3,.001)},null,8,["model-value"]),t(l,{title:"Import",readonly:"",class:"text-right text-monospace",step:"0.001",unit:"kWh","model-value":e.formatNumberTopic("openWB/counter/"+a.id+"/get/imported",3,3,.001)},null,8,["model-value"]),t(c,null,{default:n(()=>[s("Saldierte Werte")]),_:1}),t(l,{title:"Wirkleistung",readonly:"",class:"text-right text-monospace",step:"0.001",unit:"kW","model-value":e.formatNumberTopic("openWB/counter/"+a.id+"/get/power",3,3,.001)},null,8,["model-value"]),t(l,{title:"Netzfrequenz",readonly:"",class:"text-right text-monospace",step:"0.001",unit:"Hz","model-value":e.formatNumberTopic("openWB/counter/"+a.id+"/get/frequency",3)},null,8,["model-value"]),t(c,null,{default:n(()=>[s("Werte pro Phase")]),_:1}),t(l,{title:"Spannung",readonly:"",class:"text-right text-monospace",unit:"V","model-value":e.formatPhaseArrayNumberTopic("openWB/counter/"+a.id+"/get/voltages",1)},null,8,["model-value"]),t(l,{title:"Strom",readonly:"",class:"text-right text-monospace",unit:"A","model-value":e.formatPhaseArrayNumberTopic("openWB/counter/"+a.id+"/get/currents",2)},null,8,["model-value"]),t(l,{title:"Wirkleistung",readonly:"",class:"text-right text-monospace",unit:"kW","model-value":e.formatPhaseArrayNumberTopic("openWB/counter/"+a.id+"/get/powers",3,3,.001)},null,8,["model-value"]),t(l,{title:"Leistungsfaktor",readonly:"",class:"text-right text-monospace","model-value":e.formatPhaseArrayNumberTopic("openWB/counter/"+a.id+"/get/power_factors",2)},null,8,["model-value"])]),_:2},1032,["title"]))),128))])):p("v-if",!0),p(" all inverters "),o.numInvertersInstalled>1&&e.$store.state.mqtt["openWB/general/extern"]===!1?(r(),u(h,{key:2,subtype:"success",collapsible:!0,collapsed:!0},{header:n(()=>[t(d,{"fixed-width":"",icon:["fas","solar-panel"]}),s(" Alle Wechselrichter ")]),default:n(()=>[t(l,{title:"Zählerstand",readonly:"",class:"text-right text-monospace",step:"0.001",unit:"kWh","model-value":e.formatNumberTopic("openWB/pv/get/exported",3,3,.001)},null,8,["model-value"]),t(l,{title:"Leistung",readonly:"",class:"text-right text-monospace",step:"0.001",unit:"kW","model-value":e.formatNumberTopic("openWB/pv/get/power",3,3,.001)},null,8,["model-value"]),t(c,null,{default:n(()=>[s("Erträge")]),_:1}),t(l,{title:"Heute",readonly:"",class:"text-right text-monospace",step:"0.001",unit:"kWh","model-value":e.formatNumberTopic("openWB/pv/get/daily_exported",3,3,.001)},null,8,["model-value"]),t(l,{title:"Dieser Monat",readonly:"",class:"text-right text-monospace",step:"0.001",unit:"kWh","model-value":e.formatNumberTopic("openWB/pv/get/monthly_exported",3,3,.001)},null,8,["model-value"]),t(l,{title:"Dieses Jahr",readonly:"",class:"text-right text-monospace",step:"0.001",unit:"kWh","model-value":e.formatNumberTopic("openWB/pv/get/yearly_exported",3,3,.001)},null,8,["model-value"])]),_:1})):p("v-if",!0),p(" individual inverters "),e.$store.state.mqtt["openWB/general/extern"]===!1?(r(),g("div",$,[(r(!0),g(_,null,w(o.inverterConfigs,a=>(r(),u(h,{key:a.id,collapsible:!0,collapsed:!0,subtype:"success"},{header:n(()=>[t(d,{"fixed-width":"",icon:["fas","solar-panel"]}),s(" "+m(a.name)+" (ID: "+m(a.id)+") ",1)]),default:n(()=>[t(f,{subtype:k.statusLevel[e.$store.state.mqtt["openWB/pv/"+a.id+"/get/fault_state"]]},{default:n(()=>[e.$store.state.mqtt["openWB/pv/"+a.id+"/get/fault_state"]==1?(r(),u(d,{key:0,"fixed-width":"",icon:["fas","exclamation-triangle"]})):e.$store.state.mqtt["openWB/pv/"+a.id+"/get/fault_state"]==2?(r(),u(d,{key:1,"fixed-width":"",icon:["fas","times-circle"]})):(r(),u(d,{key:2,"fixed-width":"",icon:["fas","check-circle"]})),s(" Modulmeldung:"),U,s(" "+m(e.$store.state.mqtt["openWB/pv/"+a.id+"/get/fault_str"]),1)]),_:2},1032,["subtype"]),t(l,{title:"Zählerstand",readonly:"",class:"text-right text-monospace",step:"0.001",unit:"kWh","model-value":e.formatNumberTopic("openWB/pv/"+a.id+"/get/exported",3,3,.001)},null,8,["model-value"]),t(l,{title:"Leistung",readonly:"",class:"text-right text-monospace",step:"0.001",unit:"kW","model-value":e.formatNumberTopic("openWB/pv/"+a.id+"/get/power",3,3,.001)},null,8,["model-value"])]),_:2},1024))),128))])):p("v-if",!0),p(" all batteries "),o.numBatteriesInstalled>1&&e.$store.state.mqtt["openWB/general/extern"]===!1?(r(),u(h,{key:4,subtype:"warning",collapsible:!0,collapsed:!0},{header:n(()=>[t(d,{"fixed-width":"",icon:["fas","car-battery"]}),s(" Alle Speicher ")]),default:n(()=>[t(c,null,{default:n(()=>[s("Zählerstände")]),_:1}),t(l,{title:"Ladung",readonly:"",class:"text-right text-monospace",step:"0.001",unit:"kWh","model-value":e.formatNumberTopic("openWB/bat/get/imported",3,3,.001)},null,8,["model-value"]),t(l,{title:"Entladung",readonly:"",class:"text-right text-monospace",step:"0.001",unit:"kWh","model-value":e.formatNumberTopic("openWB/bat/get/exported",3,3,.001)},null,8,["model-value"]),t(c,null,{default:n(()=>[s("Tageswerte")]),_:1}),t(l,{title:"Ladung",readonly:"",class:"text-right text-monospace",step:"0.001",unit:"kWh","model-value":e.formatNumberTopic("openWB/bat/get/daily_imported",3,3,.001)},null,8,["model-value"]),t(l,{title:"Entladung",readonly:"",class:"text-right text-monospace",step:"0.001",unit:"kWh","model-value":e.formatNumberTopic("openWB/bat/get/daily_exported",3,3,.001)},null,8,["model-value"]),t(c,null,{default:n(()=>[s("Saldierte Werte")]),_:1}),t(l,{title:"Leistung",readonly:"",class:"text-right text-monospace",step:"0.001",unit:"kW","model-value":e.formatNumberTopic("openWB/bat/get/power",3,3,.001)},null,8,["model-value"]),t(I,{title:"Ladestand",readonly:"",class:"text-right text-monospace",unit:"%","model-value":e.$store.state.mqtt["openWB/bat/get/soc"]},null,8,["model-value"])]),_:1})):p("v-if",!0),p(" individual batteries "),e.$store.state.mqtt["openWB/general/extern"]===!1?(r(),g("div",X,[(r(!0),g(_,null,w(o.batteryConfigs,a=>(r(),u(h,{key:a.id,collapsible:!0,collapsed:!0,subtype:"warning"},{header:n(()=>[t(d,{"fixed-width":"",icon:["fas","car-battery"]}),s(" "+m(a.name)+" (ID: "+m(a.id)+") ",1)]),default:n(()=>[t(f,{subtype:k.statusLevel[e.$store.state.mqtt["openWB/bat/"+a.id+"/get/fault_state"]]},{default:n(()=>[e.$store.state.mqtt["openWB/bat/"+a.id+"/get/fault_state"]==1?(r(),u(d,{key:0,"fixed-width":"",icon:["fas","exclamation-triangle"]})):e.$store.state.mqtt["openWB/bat/"+a.id+"/get/fault_state"]==2?(r(),u(d,{key:1,"fixed-width":"",icon:["fas","times-circle"]})):(r(),u(d,{key:2,"fixed-width":"",icon:["fas","check-circle"]})),s(" Modulmeldung:"),Y,s(" "+m(e.$store.state.mqtt["openWB/bat/"+a.id+"/get/fault_str"]),1)]),_:2},1032,["subtype"]),t(c,null,{default:n(()=>[s("Aktuelle Werte")]),_:1}),t(l,{title:"Leistung",readonly:"",class:"text-right text-monospace",step:"0.001",unit:"kW","model-value":e.formatNumberTopic("openWB/bat/"+a.id+"/get/power",3,3,.001)},null,8,["model-value"]),t(I,{title:"Ladestand",readonly:"",class:"text-right text-monospace",unit:"%","model-value":e.$store.state.mqtt["openWB/bat/"+a.id+"/get/soc"]},null,8,["model-value"]),t(c,null,{default:n(()=>[s("Zählerstände")]),_:1}),t(l,{title:"Ladung",readonly:"",class:"text-right text-monospace",step:"0.001",unit:"kWh","model-value":e.formatNumberTopic("openWB/bat/"+a.id+"/get/imported",3,3,.001)},null,8,["model-value"]),t(l,{title:"Entladung",readonly:"",class:"text-right text-monospace",step:"0.001",unit:"kWh","model-value":e.formatNumberTopic("openWB/bat/"+a.id+"/get/exported",3,3,.001)},null,8,["model-value"])]),_:2},1024))),128))])):p("v-if",!0),p(" vehicles "),e.$store.state.mqtt["openWB/general/extern"]===!1?(r(),g("div",K,[(r(!0),g(_,null,w(o.vehicleNames,(a,i)=>(r(),u(h,{key:i,collapsible:!0,collapsed:!0,subtype:"info"},{header:n(()=>[t(d,{"fixed-width":"",icon:["fas","car"]}),s(" "+m(a)+" (ID: "+m(o.getVehicleIndex(i))+") ",1)]),default:n(()=>[e.$store.state.mqtt["openWB/vehicle/"+o.getVehicleIndex(i)+"/get/fault_state"]!==void 0?(r(),u(f,{key:0,subtype:k.statusLevel[e.$store.state.mqtt["openWB/vehicle/"+o.getVehicleIndex(i)+"/get/fault_state"]]},{default:n(()=>[e.$store.state.mqtt["openWB/vehicle/"+o.getVehicleIndex(i)+"/get/fault_state"]==1?(r(),u(d,{key:0,"fixed-width":"",icon:["fas","exclamation-triangle"]})):e.$store.state.mqtt["openWB/vehicle/"+o.getVehicleIndex(i)+"/get/fault_state"]==2?(r(),u(d,{key:1,"fixed-width":"",icon:["fas","times-circle"]})):(r(),u(d,{key:2,"fixed-width":"",icon:["fas","check-circle"]})),s(" Modulmeldung:"),ee,s(" "+m(e.$store.state.mqtt["openWB/vehicle/"+o.getVehicleIndex(i)+"/get/fault_str"]),1)]),_:2},1032,["subtype"])):p("v-if",!0),t(c,null,{default:n(()=>[s("Fahrzeugdaten")]),_:1}),t(I,{title:"Ladestand",readonly:"",class:"text-right text-monospace",unit:"%","model-value":e.$store.state.mqtt["openWB/vehicle/"+o.getVehicleIndex(i)+"/get/soc"]},null,8,["model-value"]),t(I,{title:"Reichweite",readonly:"",class:"text-right text-monospace",unit:"km","model-value":Math.round(e.$store.state.mqtt["openWB/vehicle/"+o.getVehicleIndex(i)+"/get/range"])},null,8,["model-value"]),t(l,{title:"Letzter Zeitstempel",readonly:"",class:"text-right text-monospace","model-value":e.$store.state.mqtt["openWB/vehicle/"+o.getVehicleIndex(i)+"/get/soc_timestamp"]},null,8,["model-value"])]),_:2},1024))),128))])):p("v-if",!0)])}const ue=D(O,[["render",te],["__scopeId","data-v-051028a3"],["__file","/opt/openWB-dev/openwb-ui-settings/src/views/Status.vue"]]);export{ue as default};