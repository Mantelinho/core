import{_ as u,p as o,k as c,l,A as t,L as p,u as m,q as _,x as f}from"./vendor-b2608652.js";import"./vendor-sortablejs-66fb77ae.js";const b={name:"DeviceSolarEdgeInverter",emits:["update:configuration"],props:{configuration:{type:Object,required:!0},deviceId:{default:void 0},componentId:{required:!0}},methods:{updateConfiguration(n,e=void 0){this.$emit("update:configuration",{value:n,object:e})}}},g={class:"device-solaredge-inverter"},v={class:"small"};function h(n,e,a,w,x,i){const s=o("openwb-base-heading"),r=o("openwb-base-number-input");return c(),l("div",g,[t(s,null,{default:p(()=>[m(" Einstellungen für SolarEdge Wechselrichter "),_("span",v,"(Modul: "+f(n.$options.name)+")",1)]),_:1}),t(r,{title:"Modbus ID","model-value":a.configuration.modbus_id,min:"1",max:"255","onUpdate:modelValue":e[0]||(e[0]=d=>i.updateConfiguration(d,"configuration.modbus_id"))},null,8,["model-value"])])}const E=u(b,[["render",h],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/devices/solaredge/inverter.vue"]]);export{E as default};