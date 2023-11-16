import{_ as k,C as $}from"./index-ab50de49.js";import{_ as C}from"./dynamic-import-helper-be004503.js";import{_ as g,p as d,k as s,l as m,y as f,L as i,u as a,x as c,A as o,q as r,a0 as S,a1 as V,z as y}from"./vendor-9bfbb89c.js";import"./vendor-fortawesome-12056596.js";import"./vendor-bootstrap-22b23367.js";import"./vendor-jquery-5e7aea54.js";import"./vendor-axios-7e71c841.js";import"./vendor-sortablejs-8518b3e5.js";const O={name:"DisplayThemeFallback",emits:["update:configuration"],props:{configuration:{type:Object,required:!0},displayThemeType:{type:String}},methods:{updateConfiguration(e,t=void 0){this.$emit("update:configuration",{value:e,object:t})}}},q={class:"display-theme-fallback"},z={key:1};function A(e,t,l,h,v,u){const p=d("openwb-base-alert"),b=d("openwb-base-textarea");return s(),m("div",q,[Object.keys(l.configuration).length==0?(s(),f(p,{key:0,subtype:"info"},{default:i(()=>[a(' Das Display-Theme "'+c(l.displayThemeType)+'" bietet keine Einstellungen. ',1)]),_:1})):(s(),m("div",z,[o(p,{subtype:"warning"},{default:i(()=>[a(' Es wurde keine Konfigurationsseite für das Display-Theme "'+c(l.displayThemeType)+'" gefunden. Die Einstellungen können als JSON direkt bearbeitet werden. ',1)]),_:1}),o(b,{title:"Konfiguration",subtype:"json","model-value":l.configuration,"onUpdate:modelValue":t[0]||(t[0]=_=>u.updateConfiguration(_,"configuration"))},{help:i(()=>[a(" Bitte prüfen Sie, ob die Eingaben richtig interpretiert werden. ")]),_:1},8,["model-value"]),o(p,{subtype:"info"},{default:i(()=>[r("pre",null,c(JSON.stringify(l.configuration,void 0,2)),1)]),_:1})]))])}const F=g(O,[["render",A],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/display_themes/OpenwbDisplayThemeFallback.vue"]]),L={name:"OpenwbDisplayThemeProxy",emits:["update:configuration"],props:{displayThemeType:{type:String,required:!0},configuration:{type:Object,required:!0}},computed:{myComponent(){return console.debug(`loading display theme: ${this.displayThemeType}`),S({loader:()=>C(Object.assign({"./cards/displayTheme.vue":()=>k(()=>import("./displayTheme-257109ca.js"),["assets/displayTheme-257109ca.js","assets/vendor-9bfbb89c.js","assets/vendor-sortablejs-8518b3e5.js","assets/vendor-941e092d.css"])}),`./${this.displayThemeType}/displayTheme.vue`),errorComponent:F})}},methods:{updateConfiguration(e){this.$emit("update:configuration",e)}}};function R(e,t,l,h,v,u){return s(),f(V(u.myComponent),{configuration:l.configuration,displayThemeType:l.displayThemeType,"onUpdate:configuration":t[0]||(t[0]=p=>u.updateConfiguration(p))},null,40,["configuration","displayThemeType"])}const I=g(L,[["render",R],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/display_themes/OpenwbDisplayThemeProxy.vue"]]),N={name:"OpenwbOptionalComponents",mixins:[$],components:{OpenwbDisplayThemeProxy:I},data(){return{mqttTopicsToSubscribe:["openWB/general/extern","openWB/optional/rfid/active","openWB/optional/led/active","ToDo/optional/led/instant_blocked","ToDo/optional/led/pv_blocked","ToDo/optional/led/scheduled_blocked","ToDo/optional/led/standby_blocked","ToDo/optional/led/stop_blocked","ToDo/optional/led/instant","ToDo/optional/led/pv","ToDo/optional/led/scheduled","ToDo/optional/led/standby","ToDo/optional/led/stop","openWB/optional/int_display/active","openWB/optional/int_display/standby","openWB/optional/int_display/rotation","openWB/optional/int_display/on_if_plugged_in","openWB/optional/int_display/pin_active","openWB/optional/int_display/pin_code","openWB/optional/int_display/theme","openWB/optional/int_display/only_local_charge_points","openWB/system/configurable/display_themes","openWB/optional/et/active","openWB/optional/et/config/provider","openWB/optional/et/config/max_price"]}},computed:{displayThemeList:{get(){return this.$store.state.mqtt["openWB/system/configurable/display_themes"]}}},methods:{getDisplayThemeDefaultConfiguration(e){const t=this.displayThemeList.find(l=>l.value==e);return Object.prototype.hasOwnProperty.call(t,"defaults")?{...JSON.parse(JSON.stringify(t.defaults.configuration))}:(console.warn("no default configuration found for display theme type!",e),{})},updateSelectedDisplayTheme(e){this.updateState("openWB/optional/int_display/theme",e,"type"),this.updateState("openWB/optional/int_display/theme",this.getDisplayThemeDefaultConfiguration(e),"configuration")},updateConfiguration(e,t){console.debug("updateConfiguration",e,t),this.updateState(e,t.value,t.object)}}},x={class:"optionalComponents"},E={name:"optionalComponentsForm"},M={key:0},j=r("br",null,null,-1),U=r("br",null,null,-1),H=["innerHTML"],P={key:0},J=r("br",null,null,-1),K=r("hr",null,null,-1),Z={key:1},G=r("hr",null,null,-1),Q={key:2},X=r("hr",null,null,-1),Y=r("hr",null,null,-1),ee={key:0};function te(e,t,l,h,v,u){const p=d("openwb-base-button-group-input"),b=d("openwb-base-alert"),_=d("openwb-base-card"),T=d("openwb-base-heading"),w=d("openwb-base-range-input"),B=d("openwb-base-select-input"),D=d("openwb-display-theme-proxy"),W=d("openwb-base-submit-buttons");return s(),m("div",x,[r("form",E,[o(_,{title:"RFID"},{default:i(()=>[o(p,{title:"RFID aktivieren","model-value":e.$store.state.mqtt["openWB/optional/rfid/active"],"onUpdate:modelValue":t[0]||(t[0]=n=>e.updateState("openWB/optional/rfid/active",n)),buttons:[{buttonValue:!1,text:"Aus",class:"btn-outline-danger"},{buttonValue:!0,text:"An",class:"btn-outline-success"}]},{help:i(()=>[a(" Dies bedingt das Vorhandensein eines RFID-Readers in deiner openWB. Bitte prüfe zuerst die Hardwareausstattung deiner openWB (z.B. Lieferschein). ")]),_:1},8,["model-value"]),e.$store.state.mqtt["openWB/optional/rfid/active"]===!0?(s(),m("div",M,[o(b,{subtype:"info"},{default:i(()=>[a(" Die RFID-Tags, die an dem jeweiligen Ladepunkt gültig sind, müssen in dem Ladepunkt-Profil hinterlegt werden. Der RFID-Tag muss in den Einstellungen des Fahrzeugs diesem zugeordnet werden."),j,a(" Es kann zuerst angesteckt und dann der RFID-Tag gescannt werden oder zuerst der RFID-Tag gescannt werden. Dann muss innerhalb von 5 Minuten ein Auto angesteckt werden, sonst wird der RFID-Tag verworfen. Das Auto wird erst nach dem Anstecken zugeordnet."),U,r("span",{innerHTML:e.$store.state.text.rfidWiki},null,8,H)]),_:1})])):y("",!0)]),_:1}),o(_,{title:"Display (intern oder extern)"},{default:i(()=>[o(p,{title:"Integriertes Display","model-value":e.$store.state.mqtt["openWB/optional/int_display/active"],"onUpdate:modelValue":t[1]||(t[1]=n=>e.updateState("openWB/optional/int_display/active",n)),buttons:[{buttonValue:!1,text:"Nein",class:"btn-outline-danger"},{buttonValue:!0,text:"Ja",class:"btn-outline-success"}]},{help:i(()=>[a(' Je nach Bestellung kann die openWB mit oder ohne Display geliefert worden sein. Auch die Variante "Standalone" bietet beide Optionen. Bitte prüfe zuerst die Hardwareausstattung deiner openWB (z.B. Lieferschein). ')]),_:1},8,["model-value"]),e.$store.state.mqtt["openWB/optional/int_display/active"]==!0?(s(),m("div",P,[o(p,{title:"Orientierung","model-value":e.$store.state.mqtt["openWB/optional/int_display/rotation"],"onUpdate:modelValue":t[2]||(t[2]=n=>e.updateState("openWB/optional/int_display/rotation",n)),buttons:[{buttonValue:0,text:"0°"},{buttonValue:90,text:"90°"},{buttonValue:180,text:"180°"},{buttonValue:270,text:"270°"}]},{help:i(()=>[a(" Mit dieser Einstellung kann das Display im Uhrzeigersinn gedreht werden, falls erforderlich. Nach einer Änderung ist ein Neustart erforderlich!"),J,a(" Diese Einstellung erfordert ein Raspberry Pi Display. Anzeigen, welche über HDMI angeschlossen sind, werden nicht unterstützt. ")]),_:1},8,["model-value"]),K,o(T,null,{default:i(()=>[a(" Display Standby ")]),_:1}),o(w,{title:"Ausschaltzeit",min:0,max:12,step:1,"model-value":e.$store.state.mqtt["openWB/optional/int_display/standby"],"onUpdate:modelValue":t[3]||(t[3]=n=>e.updateState("openWB/optional/int_display/standby",n)),unit:"Sek",labels:[{label:"Immer an",value:0},{label:5,value:5},{label:10,value:10},{label:15,value:15},{label:30,value:30},{label:45,value:45},{label:"1 Min",value:60},{label:"1,5 Min",value:90},{label:"2 Min",value:120},{label:"3 Min",value:180},{label:"4 Min",value:240},{label:"5 Min",value:300},{label:"10 Min",value:600}]},{help:i(()=>[a(" Hier kann eine Zeitspanne angegeben werden, nach der das Display ausgeschaltet wird. ")]),_:1},8,["model-value"])])):y("",!0),e.$store.state.mqtt["openWB/general/extern"]===!0?(s(),m("div",Z,[G,o(b,{subtype:"info"},{default:i(()=>[a(' Weitere Einstellungen sind nicht verfügbar, solange sich diese openWB im Steuerungsmodus "secondary" befindet. ')]),_:1})])):(s(),m("div",Q,[X,o(p,{title:"Ladepunkte auf externen openWB","model-value":e.$store.state.mqtt["openWB/optional/int_display/only_local_charge_points"],"onUpdate:modelValue":t[4]||(t[4]=n=>e.updateState("openWB/optional/int_display/only_local_charge_points",n)),buttons:[{buttonValue:!1,text:"Alle",class:"btn-outline-danger"},{buttonValue:!0,text:"Nur Lokale",class:"btn-outline-success"}]},{help:i(()=>[a(" Hiermit kann festgelegt werden, ob an angebundenen externen openWB alle oder nur die jeweils lokalen Ladepunkte angezeigt werden sollen. ")]),_:1},8,["model-value"]),Y,e.$store.state.mqtt["openWB/optional/int_display/theme"]!==void 0?(s(),m("div",ee,[o(B,{class:"mb-2",title:"Theme des Displays",options:u.displayThemeList,"model-value":e.$store.state.mqtt["openWB/optional/int_display/theme"].type,"onUpdate:modelValue":t[5]||(t[5]=n=>u.updateSelectedDisplayTheme(n))},{help:i(()=>[a(" Hier können unterschiedliche Display-Anzeigen, s.g. Themes, ausgewählt werden. Die Anzahl der Themes wird sich mit zukünftigen Releases erhöhen. ")]),_:1},8,["options","model-value"]),e.$store.state.mqtt["openWB/optional/int_display/theme"].type?(s(),f(D,{key:0,displayThemeType:e.$store.state.mqtt["openWB/optional/int_display/theme"].type,configuration:e.$store.state.mqtt["openWB/optional/int_display/theme"].configuration,"onUpdate:configuration":t[6]||(t[6]=n=>u.updateConfiguration("openWB/optional/int_display/theme",n))},null,8,["displayThemeType","configuration"])):y("",!0)])):y("",!0)]))]),_:1}),o(W,{formName:"optionalComponentsForm",onSave:t[7]||(t[7]=n=>e.$emit("save")),onReset:t[8]||(t[8]=n=>e.$emit("reset")),onDefaults:t[9]||(t[9]=n=>e.$emit("defaults"))})])])}const re=g(N,[["render",te],["__file","/opt/openWB-dev/openwb-ui-settings/src/views/OptionalComponents.vue"]]);export{re as default};
