import{_ as c,u as n,k as d,l as p,D as o,N as a,y as s,x as u,z as l}from"./vendor-f2b8aa6f.js";import"./vendor-sortablejs-2f1828d0.js";const _={name:"DeviceSonnenbatterieBat",emits:["update:configuration"],props:{configuration:{type:Object,required:!0},deviceId:{default:void 0},componentId:{required:!0}},methods:{updateConfiguration(e,t=void 0){this.$emit("update:configuration",{value:e,object:t})}}},f={class:"device-sonnenbatterie-bat"},b={class:"small"};function m(e,t,g,h,v,w){const i=n("openwb-base-heading"),r=n("openwb-base-alert");return d(),p("div",f,[o(i,null,{default:a(()=>[s(" Einstellungen für SonnenBatterie Speicher "),u("span",b,"(Modul: "+l(e.$options.name)+")",1)]),_:1}),o(r,{subtype:"info"},{default:a(()=>[s(" Diese Komponente erfordert keine Einstellungen. ")]),_:1})])}const x=c(_,[["render",m],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/devices/sonnenbatterie/bat.vue"]]);export{x as default};