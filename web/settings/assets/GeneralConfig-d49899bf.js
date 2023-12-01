import{C as S}from"./index-ce01b59e.js";import{_ as T}from"./dynamic-import-helper-be004503.js";import{l as z,R as $,S as C,F as V}from"./vendor-fortawesome-516e0688.js";import{_,p as d,k as s,l as m,y as c,L as r,u as o,x as f,A as t,q as i,a0 as D,a1 as q,G as L,z as h}from"./vendor-9bfbb89c.js";import"./vendor-bootstrap-22b23367.js";import"./vendor-jquery-5e7aea54.js";import"./vendor-axios-7e71c841.js";import"./vendor-sortablejs-8518b3e5.js";const O={name:"WebThemeFallback",emits:["update:configuration"],props:{webTheme:{type:Object,required:!0}},methods:{updateConfiguration(n,e=void 0){this.$emit("update:configuration",{value:n,object:e})}}},x={class:"web-theme-fallback"},E={key:1};function N(n,e,u,w,W,b){const l=d("openwb-base-alert"),p=d("openwb-base-textarea");return s(),m("div",x,[Object.keys(u.webTheme.configuration).length==0?(s(),c(l,{key:0,subtype:"info"},{default:r(()=>[o(' Das Web Theme "'+f(u.webTheme.name)+'" bietet keine Einstellungen. ',1)]),_:1})):(s(),m("div",E,[t(l,{subtype:"warning"},{default:r(()=>[o(' Es wurde keine Konfigurationsseite für das Web Theme "'+f(u.webTheme.name)+'" gefunden. Die Einstellungen können als JSON direkt bearbeitet werden. ',1)]),_:1}),t(p,{title:"Theme Konfiguration",subtype:"json","model-value":u.webTheme.configuration,"onUpdate:modelValue":e[0]||(e[0]=g=>b.updateConfiguration(g,"configuration"))},{help:r(()=>[o(" Bitte prüfen Sie, ob die Eingaben richtig interpretiert werden. ")]),_:1},8,["model-value"]),t(l,{subtype:"info"},{default:r(()=>[i("pre",null,f(JSON.stringify(u.webTheme.configuration,void 0,2)),1)]),_:1})]))])}const F=_(O,[["render",N],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/web_themes/OpenwbWebThemeFallback.vue"]]);z.add($,C);const R={name:"OpenwbWebThemeProxy",emits:["update:configuration"],props:{webTheme:{type:Object,required:!0}},components:{FontAwesomeIcon:V},computed:{myComponent(){return console.debug(`loading web theme: ${this.webTheme.name}`),D({loader:()=>T(Object.assign({}),`./${this.webTheme.type}/webTheme.vue`),errorComponent:F})}},methods:{updateConfiguration(n){this.$emit("update:configuration",n)}}};function P(n,e,u,w,W,b){const l=d("font-awesome-icon"),p=d("openwb-base-alert");return s(),m(L,null,[u.webTheme.official?(s(),c(p,{key:0,subtype:"success"},{default:r(()=>[t(l,{"fixed-width":"",icon:["fas","certificate"]}),o(" Das ausgewählte Theme wird von openWB gepflegt. ")]),_:1})):(s(),c(p,{key:1,subtype:"info"},{default:r(()=>[t(l,{"fixed-width":"",icon:["fas","people-group"]}),o(" Das ausgewählte Theme wird in unserer Community gepflegt. Rückfragen oder Probleme bitte im Forum diskutieren. ")]),_:1})),(s(),c(q(b.myComponent),{webTheme:u.webTheme,"onUpdate:configuration":e[0]||(e[0]=g=>b.updateConfiguration(g))},null,40,["webTheme"]))],64)}const A=_(R,[["render",P],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/web_themes/OpenwbWebThemeProxy.vue"]]),U={name:"OpenwbGeneralConfig",mixins:[S],components:{OpenwbWebThemeProxy:A},data(){return{mqttTopicsToSubscribe:["openWB/general/extern","openWB/general/control_interval","openWB/general/grid_protection_configured","openWB/general/external_buttons_hw","openWB/general/modbus_control","openWB/general/notifications/selected","openWB/general/notifications/configuration","openWB/general/notifications/start_charging","openWB/general/notifications/stop_charging","openWB/general/notifications/plug","openWB/general/notifications/smart_home","openWB/general/price_kwh","openWB/general/range_unit","openWB/general/web_theme","openWB/system/configurable/web_themes"]}},computed:{webThemeList:{get(){return this.$store.state.mqtt["openWB/system/configurable/web_themes"]}},webThemeGroupList:{get(){let n=[{label:"openWB",options:[]},{label:"Community",options:[]}];return this.webThemeList.forEach(e=>{e.official===!0?n[0].options.push(e):n[1].options.push(e)}),n}}},methods:{getWebThemeDefaults(n){const e=this.webThemeList.find(u=>u.value==n);return Object.prototype.hasOwnProperty.call(e,"defaults")?{...JSON.parse(JSON.stringify(e.defaults))}:(console.warn("no default configuration found for web theme type!",n),{})},updateSelectedWebTheme(n){this.updateState("openWB/general/web_theme",this.getWebThemeDefaults(n))},updateConfiguration(n,e){console.debug("updateConfiguration",n,e),this.updateState(n,e.value,e.object)}}},G={class:"generalConfig"},M={name:"generalConfigForm"},j=i("br",null,null,-1),H=i("br",null,null,-1),I=i("br",null,null,-1),J=i("a",{href:"https://openwb.de/main/?page_id=1025",target:"_blank",rel:"noopener noreferrer"}," Homepage ",-1),K=i("a",{href:"https://openwb.de/main/wp-content/uploads/2023/10/ModbusTCP-openWB-series2-Pro-1.pdf",target:"_blank",rel:"noopener noreferrer"}," hier",-1),Z={key:0},Q={key:0},X={key:1},Y=i("br",null,null,-1),ee=i("span",{class:"text-danger"},' Nicht nur die Regelung der PV geführten Ladung, sondern auch die Ladestromänderung, beispielsweise “Stop“ etc., werden dann nur noch in diesem Intervall ausgeführt. Die Regelung wird insgesamt träger. Solange es keinen triftigen Grund gibt, sollte "Normal" gewählt werden. ',-1),ne=i("br",null,null,-1),te=i("span",{class:"text-danger"}," Die Option ist nur aktiv, wenn der EVU-Zähler die Frequenz übermittelt. ",-1),oe={key:0},re={key:1},ae={key:0},se=i("hr",null,null,-1);function ie(n,e,u,w,W,b){const l=d("openwb-base-alert"),p=d("openwb-base-button-group-input"),g=d("openwb-base-card"),B=d("openwb-base-heading"),v=d("openwb-base-select-input"),y=d("openwb-web-theme-proxy"),k=d("openwb-base-submit-buttons");return s(),m("div",G,[i("form",M,[t(g,{title:"Steuerungsmodus"},{default:r(()=>[t(l,{subtype:"info"},{default:r(()=>[o(' Wird für den Steuerungsmodus "primary" gewählt, übernimmt diese openWB die alleinige Regelung und steuert ggf. vorhandene weitere openWB (z.B. externe openWB im Steuermodus secondary, openWB Pro, Satellit u.a.) fern. Sie werden in den Ladepunkt-Einstellungen der primary-openWB hinzugefügt. '),j,H,o(' Wird für den Steuerungsmodus "secondary" gewählt, übernimmt diese openWB keine Regelung und muss von einer anderen primary openWB ferngesteuert werden. Wichtig ist, dass in der secondary-openWB eine "interne openWB" mit der korrekten Bauart (= openWB-Hardwarevariante z.B. "Custom, Standard, Standard+, Duo, Buchse") konfiguriert ist. Bei einer Duo sind zwei "interne openWB" zu konfigurieren. Im "secondary"-Modus bleiben alle ausgeblendeten Einstellungen unbeachtet.'),I,o(" Eine bebilderte Anleitung zur Konfiguration der Ladepunkte findest Du auf der "),J,o(". ")]),_:1}),t(p,{title:"Steuerungsmodus",buttons:[{buttonValue:!1,text:"primary",class:"btn-outline-danger"},{buttonValue:!0,text:"secondary",class:"btn-outline-success"}],"model-value":n.$store.state.mqtt["openWB/general/extern"],"onUpdate:modelValue":e[0]||(e[0]=a=>n.updateState("openWB/general/extern",a))},null,8,["model-value"]),t(p,{title:"Steuerung über Modbus als secondary",buttons:[{buttonValue:!1,text:"Aus",class:"btn-outline-danger"},{buttonValue:!0,text:"An",class:"btn-outline-success"}],"model-value":n.$store.state.mqtt["openWB/general/modbus_control"],"onUpdate:modelValue":e[1]||(e[1]=a=>n.updateState("openWB/general/modbus_control",a))},{help:r(()=>[o(" Im secondary-Modus kann die openWB über die Modbus-Schnittstelle gesteuert werden. Die Register sind "),K,o("dokumentiert. Bei aktivierter Modbus-Schnittstelle darf die openWB nicht von einer primary-openWB gesteuert werden. ")]),_:1},8,["model-value"]),n.$store.state.mqtt["openWB/general/modbus_control"]===!0?(s(),m("div",Z,[t(l,{subtype:"info"},{default:r(()=>[o(' Wenn die Steuerung über Modbus auf "aus" geändert wird, muss danach ein Neustart durchgeführt werden! ')]),_:1})])):h("",!0)]),_:1}),t(g,{title:"Hardware"},{default:r(()=>[n.$store.state.mqtt["openWB/general/extern"]===!0?(s(),m("div",Q,[t(l,{subtype:"info"},{default:r(()=>[o(' Diese Einstellungen sind nicht verfügbar, solange sich diese openWB im Steuerungsmodus "secondary" befindet. ')]),_:1})])):(s(),m("div",X,[t(p,{title:"Geschwindigkeit Regelintervall",buttons:[{buttonValue:10,text:"Normal",class:"btn-outline-success"},{buttonValue:20,text:"Langsam",class:"btn-outline-warning"},{buttonValue:60,text:"Sehr Langsam",class:"btn-outline-danger"}],"model-value":n.$store.state.mqtt["openWB/general/control_interval"],"onUpdate:modelValue":e[2]||(e[2]=a=>n.updateState("openWB/general/control_interval",a))},{help:r(()=>[o(' Sollten Probleme oder Fehlermeldungen auftauchen, stelle bitte zunächst das Regelintervall auf "Normal". Werden Module genutzt, welche z.B. eine Online-API zur Abfrage nutzen (höhere Latenzzeiten) oder möchte man weniger Regeleingriffe, so kann man das Regelintervall auf "Langsam" (20 Sekunden) herabsetzen. Die Einstellung „Sehr Langsam“ führt zu einer Regelzeit von 60 Sekunden.'),Y,ee]),_:1},8,["model-value"]),t(p,{title:"Netzschutz",buttons:[{buttonValue:!1,text:"Aus",class:"btn-outline-danger"},{buttonValue:!0,text:"An",class:"btn-outline-success"}],"model-value":n.$store.state.mqtt["openWB/general/grid_protection_configured"],"onUpdate:modelValue":e[3]||(e[3]=a=>n.updateState("openWB/general/grid_protection_configured",a))},{help:r(()=>[o(' Diese Option ist standardmäßig aktiviert und sollte so belassen werden. Bei Unterschreitung einer kritischen Frequenz des Stromnetzes wird die Ladung nach einer zufälligen Zeit zwischen 1 und 90 Sekunden pausiert. Der Lademodus wechselt auf "Stop". Sobald die Frequenz wieder in einem normalen Bereich ist wird automatisch der zuletzt gewählte Lademodus wieder aktiviert. Ebenso wird die Ladung bei Überschreiten von 51,8 Hz unterbrochen. Dies ist dann der Fall, wenn der Energieversorger Wartungsarbeiten am (Teil-)Netz durchführt und auf einen vorübergehenden Generator-Betrieb umschaltet. Die Erhöhung der Frequenz wird durchgeführt, um die PV Anlagen abzuschalten.'),ne,te]),_:1},8,["model-value"])]))]),_:1}),t(g,{title:"Darstellung"},{default:r(()=>[n.$store.state.mqtt["openWB/general/extern"]===!0?(s(),m("div",oe,[t(l,{subtype:"info"},{default:r(()=>[o(' Diese Einstellungen sind nicht verfügbar, solange sich diese openWB im Steuerungsmodus "secondary" befindet. ')]),_:1})])):(s(),m("div",re,[t(B,{class:"mt-0"},{default:r(()=>[o(" Hauptseite ")]),_:1}),n.$store.state.mqtt["openWB/general/web_theme"]!==void 0?(s(),m("div",ae,[t(v,{class:"mb-2",title:"Theme",groups:b.webThemeGroupList,"model-value":n.$store.state.mqtt["openWB/general/web_theme"].type,"onUpdate:modelValue":e[4]||(e[4]=a=>b.updateSelectedWebTheme(a))},null,8,["groups","model-value"]),n.$store.state.mqtt["openWB/general/web_theme"].type?(s(),c(y,{key:0,webTheme:n.$store.state.mqtt["openWB/general/web_theme"],"onUpdate:configuration":e[5]||(e[5]=a=>b.updateConfiguration("openWB/general/web_theme",a))},null,8,["webTheme"])):h("",!0)])):h("",!0),se,t(B,null,{default:r(()=>[o(" Lade-Log ")]),_:1}),t(p,{title:"Einheit für Entfernungen","model-value":n.$store.state.mqtt["openWB/general/range_unit"],"onUpdate:modelValue":e[6]||(e[6]=a=>n.updateState("openWB/general/range_unit",a)),buttons:[{buttonValue:"km",text:"Kilometer"},{buttonValue:"mi",text:"Meilen"}]},null,8,["model-value"])]))]),_:1}),t(k,{formName:"generalConfigForm",onSave:e[7]||(e[7]=a=>n.$emit("save")),onReset:e[8]||(e[8]=a=>n.$emit("reset")),onDefaults:e[9]||(e[9]=a=>n.$emit("defaults"))})])])}const fe=_(U,[["render",ie],["__file","/opt/openWB-dev/openwb-ui-settings/src/views/GeneralConfig.vue"]]);export{fe as default};
