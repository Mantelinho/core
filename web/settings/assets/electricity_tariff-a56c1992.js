import{_ as d,p as a,k as p,l as f,A as n,L as o,u as i,q as _,x as m}from"./vendor-9bfbb89c.js";import"./vendor-sortablejs-8518b3e5.js";const b={name:"ElectricityTariffAwattar",emits:["update:configuration"],props:{configuration:{type:Object,required:!0}},data(){return{}},methods:{updateConfiguration(t,e=void 0){this.$emit("update:configuration",{value:t,object:e})}}},g={class:"electricity-tariff-awattar"},h={class:"small"};function w(t,e,r,v,y,s){const c=a("openwb-base-heading"),l=a("openwb-base-select-input");return p(),f("div",g,[n(c,null,{default:o(()=>[i(" Einstellungen für aWATTar Hourly "),_("span",h,"(Modul: "+m(t.$options.name)+")",1)]),_:1}),n(l,{title:"Land",notSelected:"Bitte auswählen",options:[{value:"de",text:"Deutschland"},{value:"at",text:"Österreich"}],"model-value":r.configuration.country,"onUpdate:modelValue":e[0]||(e[0]=u=>s.updateConfiguration(u,"configuration.country"))},{help:o(()=>[i(" Es werden die abgefragten Börsenpreise verwendet, die aWATTar bereitstellt. aWATTar-Gebühren oder Steuern werden nicht berücksichtigt. ")]),_:1},8,["model-value"])])}const B=d(b,[["render",w],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/electricity_tariffs/awattar/electricity_tariff.vue"]]);export{B as default};
