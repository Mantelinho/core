import{_ as u,p as o,k as p,l as c,A as n,L as l,u as _,q as f,x as m}from"./vendor-fa73cf32.js";import"./vendor-sortablejs-22ab5bc4.js";const v={name:"DeviceSmartfox",emits:["update:configuration"],props:{configuration:{type:Object,required:!0},deviceId:{default:void 0}},methods:{updateConfiguration(t,e=void 0){this.$emit("update:configuration",{value:t,object:e})}}},b={class:"device-smartfox"},g={class:"small"};function x(t,e,a,h,w,s){const i=o("openwb-base-heading"),d=o("openwb-base-text-input");return p(),c("div",b,[n(i,null,{default:l(()=>[_(" Einstellungen für Smartfox "),f("span",g,"(Modul: "+m(t.$options.name)+")",1)]),_:1}),n(d,{title:"IP oder Hostname",subtype:"host",required:"","model-value":a.configuration.ip_address,"onUpdate:modelValue":e[0]||(e[0]=r=>s.updateConfiguration(r,"configuration.ip_address"))},null,8,["model-value"])])}const V=u(v,[["render",x],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/devices/smartfox/device.vue"]]);export{V as default};
