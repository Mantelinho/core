"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkopenwb_ui_settings"] = self["webpackChunkopenwb_ui_settings"] || []).push([["src_components_vehicles_vwid_vehicle_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/vehicles/vwid/vehicle.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/vehicles/vwid/vehicle.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: \"VehicleSocVwid\",\n  emits: [\"update:configuration\"],\n  props: {\n    configuration: {\n      type: Object,\n      required: true\n    },\n    vehicleId: {\n      required: true\n    }\n  },\n  data() {\n    return {};\n  },\n  methods: {\n    updateConfiguration(event, path = undefined) {\n      this.$emit(\"update:configuration\", {\n        value: event,\n        object: path\n      });\n    }\n  }\n});\n\n//# sourceURL=webpack://openwb-ui-settings/./src/components/vehicles/vwid/vehicle.vue?./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use%5B0%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B0%5D.use%5B0%5D");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/vehicles/vwid/vehicle.vue?vue&type=template&id=061509a1":
/*!***********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/vehicles/vwid/vehicle.vue?vue&type=template&id=061509a1 ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": function() { return /* binding */ render; }\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n\nconst _hoisted_1 = {\n  class: \"vehicle-soc-vwid\"\n};\nconst _hoisted_2 = {\n  class: \"small\"\n};\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  const _component_openwb_base_heading = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"openwb-base-heading\");\n  const _component_openwb_base_text_input = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"openwb-base-text-input\");\n  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_openwb_base_heading, null, {\n    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(\" Einstellungen für VW ID SoC \"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"span\", _hoisted_2, \"(Modul: \" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$options.name) + \")\", 1 /* TEXT */)]),\n\n    _: 1 /* STABLE */\n  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_openwb_base_text_input, {\n    title: \"Benutzername\",\n    required: \"\",\n    subtype: \"user\",\n    \"model-value\": $props.configuration.user_id,\n    \"onUpdate:modelValue\": _cache[0] || (_cache[0] = $event => $options.updateConfiguration($event, 'configuration.user_id'))\n  }, {\n    help: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(\" Der Benutzername für die Anmeldung an den VW-Servern. \")]),\n    _: 1 /* STABLE */\n  }, 8 /* PROPS */, [\"model-value\"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_openwb_base_text_input, {\n    title: \"Kennwort\",\n    required: \"\",\n    subtype: \"password\",\n    \"model-value\": $props.configuration.password,\n    \"onUpdate:modelValue\": _cache[1] || (_cache[1] = $event => $options.updateConfiguration($event, 'configuration.password'))\n  }, {\n    help: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(\" Das Passwort für die Anmeldung an den VW-Servern. \")]),\n    _: 1 /* STABLE */\n  }, 8 /* PROPS */, [\"model-value\"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_openwb_base_text_input, {\n    title: \"VIN\",\n    required: \"\",\n    \"model-value\": $props.configuration.vin,\n    \"onUpdate:modelValue\": _cache[2] || (_cache[2] = $event => $options.updateConfiguration($event, 'configuration.vin'))\n  }, {\n    help: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(\" Die Fahrgestellnummer des Fahrzeugs. \")]),\n    _: 1 /* STABLE */\n  }, 8 /* PROPS */, [\"model-value\"])]);\n}\n\n//# sourceURL=webpack://openwb-ui-settings/./src/components/vehicles/vwid/vehicle.vue?./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use%5B0%5D!./node_modules/vue-loader/dist/templateLoader.js??ruleSet%5B1%5D.rules%5B3%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B0%5D.use%5B0%5D");

/***/ }),

/***/ "./src/components/vehicles/vwid/vehicle.vue":
/*!**************************************************!*\
  !*** ./src/components/vehicles/vwid/vehicle.vue ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _vehicle_vue_vue_type_template_id_061509a1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vehicle.vue?vue&type=template&id=061509a1 */ \"./src/components/vehicles/vwid/vehicle.vue?vue&type=template&id=061509a1\");\n/* harmony import */ var _vehicle_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vehicle.vue?vue&type=script&lang=js */ \"./src/components/vehicles/vwid/vehicle.vue?vue&type=script&lang=js\");\n/* harmony import */ var _opt_openWB_dev_openwb_ui_settings_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ \"./node_modules/vue-loader/dist/exportHelper.js\");\n\n\n\n\n;\nconst __exports__ = /*#__PURE__*/(0,_opt_openWB_dev_openwb_ui_settings_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_vehicle_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], [['render',_vehicle_vue_vue_type_template_id_061509a1__WEBPACK_IMPORTED_MODULE_0__.render],['__file',\"src/components/vehicles/vwid/vehicle.vue\"]])\n/* hot reload */\nif (false) {}\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (__exports__);\n\n//# sourceURL=webpack://openwb-ui-settings/./src/components/vehicles/vwid/vehicle.vue?");

/***/ }),

/***/ "./src/components/vehicles/vwid/vehicle.vue?vue&type=script&lang=js":
/*!**************************************************************************!*\
  !*** ./src/components/vehicles/vwid/vehicle.vue?vue&type=script&lang=js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_vehicle_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; }\n/* harmony export */ });\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_vehicle_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./vehicle.vue?vue&type=script&lang=js */ \"./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/vehicles/vwid/vehicle.vue?vue&type=script&lang=js\");\n \n\n//# sourceURL=webpack://openwb-ui-settings/./src/components/vehicles/vwid/vehicle.vue?");

/***/ }),

/***/ "./src/components/vehicles/vwid/vehicle.vue?vue&type=template&id=061509a1":
/*!********************************************************************************!*\
  !*** ./src/components/vehicles/vwid/vehicle.vue?vue&type=template&id=061509a1 ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_vehicle_vue_vue_type_template_id_061509a1__WEBPACK_IMPORTED_MODULE_0__.render; }\n/* harmony export */ });\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_vehicle_vue_vue_type_template_id_061509a1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./vehicle.vue?vue&type=template&id=061509a1 */ \"./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/vehicles/vwid/vehicle.vue?vue&type=template&id=061509a1\");\n\n\n//# sourceURL=webpack://openwb-ui-settings/./src/components/vehicles/vwid/vehicle.vue?");

/***/ })

}]);