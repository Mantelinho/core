import{_ as a,p as s,k as p,l as u,A as d}from"./vendor-fa73cf32.js";import"./vendor-sortablejs-22ab5bc4.js";const c={name:"ChargePointOpenwbPro",emits:["update:configuration"],props:{configuration:{type:Object,required:!0},chargePointId:{default:void 0}},methods:{updateConfiguration(o,e=void 0){e&&(e="configuration."+e),this.$emit("update:configuration",{value:o,object:e})}}},_={class:"charge-point-openwbpro"};function l(o,e,t,f,m,n){const i=s("openwb-base-text-input");return p(),u("div",_,[d(i,{title:"IP oder Hostname",subtype:"host",required:"","model-value":t.configuration.ip_address,"onUpdate:modelValue":e[0]||(e[0]=r=>n.updateConfiguration(r,"ip_address"))},null,8,["model-value"])])}const v=a(c,[["render",l],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/charge_points/openwb_pro/chargePoint.vue"]]);export{v as default};
