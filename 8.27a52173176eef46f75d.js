(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ "./src/app/application/datatables/datatables.module.ngfactory.js":
/*!***********************************************************************!*\
  !*** ./src/app/application/datatables/datatables.module.ngfactory.js ***!
  \***********************************************************************/
/*! exports provided: DatatablesModuleNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatatablesModuleNgFactory", function() { return DatatablesModuleNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _datatables_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./datatables.module */ "./src/app/application/datatables/datatables.module.ts");
/* harmony import */ var _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/@angular/router/router.ngfactory */ "./node_modules/@angular/router/router.ngfactory.js");
/* harmony import */ var _datatable_show_datatable_show_datatable_show_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./datatable-show/datatable-show/datatable-show.component.ngfactory */ "./src/app/application/datatables/datatable-show/datatable-show/datatable-show.component.ngfactory.js");
/* harmony import */ var _datatable_create_datatable_create_datatable_create_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./datatable-create/datatable-create/datatable-create.component.ngfactory */ "./src/app/application/datatables/datatable-create/datatable-create/datatable-create.component.ngfactory.js");
/* harmony import */ var _modules_forms_datepicker_datepicker_datepicker_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../modules/forms/datepicker/datepicker/datepicker.component.ngfactory */ "./src/app/modules/forms/datepicker/datepicker/datepicker.component.ngfactory.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _datatable_show_show_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./datatable-show/show-routing.module */ "./src/app/application/datatables/datatable-show/show-routing.module.ts");
/* harmony import */ var _datatable_show_show_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./datatable-show/show.module */ "./src/app/application/datatables/datatable-show/show.module.ts");
/* harmony import */ var _datatable_create_create_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./datatable-create/create-routing.module */ "./src/app/application/datatables/datatable-create/create-routing.module.ts");
/* harmony import */ var _datatable_create_create_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./datatable-create/create.module */ "./src/app/application/datatables/datatable-create/create.module.ts");
/* harmony import */ var _modules_forms_card_card_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../modules/forms/card/card.module */ "./src/app/modules/forms/card/card.module.ts");
/* harmony import */ var _modules_forms_form_shared_form_shared_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../modules/forms/form-shared/form-shared.module */ "./src/app/modules/forms/form-shared/form-shared.module.ts");
/* harmony import */ var _modules_forms_checkbox_checkbox_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../modules/forms/checkbox/checkbox.module */ "./src/app/modules/forms/checkbox/checkbox.module.ts");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/cdk/bidi */ "./node_modules/@angular/cdk/esm5/bidi.es5.js");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/cdk/platform */ "./node_modules/@angular/cdk/esm5/platform.es5.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm5/scrolling.es5.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var ngx_scrollbar__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ngx-scrollbar */ "./node_modules/ngx-scrollbar/fesm5/ngx-scrollbar.js");
/* harmony import */ var _modules_forms_dropdown_dropdown_module__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../modules/forms/dropdown/dropdown.module */ "./src/app/modules/forms/dropdown/dropdown.module.ts");
/* harmony import */ var _modules_forms_form_layout_form_layout_module__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../modules/forms/form-layout/form-layout.module */ "./src/app/modules/forms/form-layout/form-layout.module.ts");
/* harmony import */ var _modules_forms_hint_hint_module__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../modules/forms/hint/hint.module */ "./src/app/modules/forms/hint/hint.module.ts");
/* harmony import */ var angular2_text_mask__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! angular2-text-mask */ "./node_modules/angular2-text-mask/dist/angular2TextMask.js");
/* harmony import */ var angular2_text_mask__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(angular2_text_mask__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var _modules_forms_input_input_module__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../modules/forms/input/input.module */ "./src/app/modules/forms/input/input.module.ts");
/* harmony import */ var _modules_forms_label_label_module__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../modules/forms/label/label.module */ "./src/app/modules/forms/label/label.module.ts");
/* harmony import */ var _modules_forms_radio_radio_module__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../modules/forms/radio/radio.module */ "./src/app/modules/forms/radio/radio.module.ts");
/* harmony import */ var _modules_forms_select_select_module__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../../modules/forms/select/select.module */ "./src/app/modules/forms/select/select.module.ts");
/* harmony import */ var _modules_forms_suggest_suggest_module__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../../modules/forms/suggest/suggest.module */ "./src/app/modules/forms/suggest/suggest.module.ts");
/* harmony import */ var _modules_forms_textarea_textarea_module__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../../modules/forms/textarea/textarea.module */ "./src/app/modules/forms/textarea/textarea.module.ts");
/* harmony import */ var _modules_forms_number_number_module__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../../modules/forms/number/number.module */ "./src/app/modules/forms/number/number.module.ts");
/* harmony import */ var _modules_forms_datepicker_datepicker_module__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../../modules/forms/datepicker/datepicker.module */ "./src/app/modules/forms/datepicker/datepicker.module.ts");
/* harmony import */ var _modules_forms_switch_switch_module__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ../../modules/forms/switch/switch.module */ "./src/app/modules/forms/switch/switch.module.ts");
/* harmony import */ var _modules_forms_iconinput_iconinput_module__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ../../modules/forms/iconinput/iconinput.module */ "./src/app/modules/forms/iconinput/iconinput.module.ts");
/* harmony import */ var _modules_forms_form_module__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ../../modules/forms/form.module */ "./src/app/modules/forms/form.module.ts");
/* harmony import */ var _datatable_show_datatable_show_datatable_show_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./datatable-show/datatable-show/datatable-show.component */ "./src/app/application/datatables/datatable-show/datatable-show/datatable-show.component.ts");
/* harmony import */ var _datatable_create_datatable_create_datatable_create_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./datatable-create/datatable-create/datatable-create.component */ "./src/app/application/datatables/datatable-create/datatable-create/datatable-create.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 






































var DatatablesModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_datatables_module__WEBPACK_IMPORTED_MODULE_1__["DatatablesModule"], [], function (_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, [_node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ɵEmptyOutletComponentNgFactory"], _datatable_show_datatable_show_datatable_show_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["DatatableShowComponentNgFactory"], _datatable_create_datatable_create_datatable_create_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["DatatableCreateComponentNgFactory"], _modules_forms_datepicker_datepicker_datepicker_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["DatepickerComponentNgFactory"]]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_common_common_a"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_j"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_j"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"], [[2, _angular_router__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_router_router_a"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _datatable_show_show_routing_module__WEBPACK_IMPORTED_MODULE_9__["ShowRoutingModule"], _datatable_show_show_routing_module__WEBPACK_IMPORTED_MODULE_9__["ShowRoutingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _datatable_show_show_module__WEBPACK_IMPORTED_MODULE_10__["ShowModule"], _datatable_show_show_module__WEBPACK_IMPORTED_MODULE_10__["ShowModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _datatable_create_create_routing_module__WEBPACK_IMPORTED_MODULE_11__["CreateRoutingModule"], _datatable_create_create_routing_module__WEBPACK_IMPORTED_MODULE_11__["CreateRoutingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _datatable_create_create_module__WEBPACK_IMPORTED_MODULE_12__["CreateModule"], _datatable_create_create_module__WEBPACK_IMPORTED_MODULE_12__["CreateModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _modules_forms_card_card_module__WEBPACK_IMPORTED_MODULE_13__["CardModule"], _modules_forms_card_card_module__WEBPACK_IMPORTED_MODULE_13__["CardModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_bc"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_bc"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _modules_forms_form_shared_form_shared_module__WEBPACK_IMPORTED_MODULE_14__["FormSharedModule"], _modules_forms_form_shared_form_shared_module__WEBPACK_IMPORTED_MODULE_14__["FormSharedModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _modules_forms_checkbox_checkbox_module__WEBPACK_IMPORTED_MODULE_15__["CheckboxModule"], _modules_forms_checkbox_checkbox_module__WEBPACK_IMPORTED_MODULE_15__["CheckboxModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_16__["BidiModule"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_16__["BidiModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_17__["PlatformModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_17__["PlatformModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_18__["ScrollingModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_18__["ScrollingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_19__["LayoutModule"], _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_19__["LayoutModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ngx_scrollbar__WEBPACK_IMPORTED_MODULE_20__["SmoothScrollModule"], ngx_scrollbar__WEBPACK_IMPORTED_MODULE_20__["SmoothScrollModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ngx_scrollbar__WEBPACK_IMPORTED_MODULE_20__["NgScrollbarModule"], ngx_scrollbar__WEBPACK_IMPORTED_MODULE_20__["NgScrollbarModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _modules_forms_dropdown_dropdown_module__WEBPACK_IMPORTED_MODULE_21__["DropdownModule"], _modules_forms_dropdown_dropdown_module__WEBPACK_IMPORTED_MODULE_21__["DropdownModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _modules_forms_form_layout_form_layout_module__WEBPACK_IMPORTED_MODULE_22__["FormLayoutModule"], _modules_forms_form_layout_form_layout_module__WEBPACK_IMPORTED_MODULE_22__["FormLayoutModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _modules_forms_hint_hint_module__WEBPACK_IMPORTED_MODULE_23__["HintModule"], _modules_forms_hint_hint_module__WEBPACK_IMPORTED_MODULE_23__["HintModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, angular2_text_mask__WEBPACK_IMPORTED_MODULE_24__["TextMaskModule"], angular2_text_mask__WEBPACK_IMPORTED_MODULE_24__["TextMaskModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _modules_forms_input_input_module__WEBPACK_IMPORTED_MODULE_25__["InputModule"], _modules_forms_input_input_module__WEBPACK_IMPORTED_MODULE_25__["InputModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _modules_forms_label_label_module__WEBPACK_IMPORTED_MODULE_26__["LabelModule"], _modules_forms_label_label_module__WEBPACK_IMPORTED_MODULE_26__["LabelModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _modules_forms_radio_radio_module__WEBPACK_IMPORTED_MODULE_27__["RadioModule"], _modules_forms_radio_radio_module__WEBPACK_IMPORTED_MODULE_27__["RadioModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _modules_forms_select_select_module__WEBPACK_IMPORTED_MODULE_28__["SelectModule"], _modules_forms_select_select_module__WEBPACK_IMPORTED_MODULE_28__["SelectModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _modules_forms_suggest_suggest_module__WEBPACK_IMPORTED_MODULE_29__["SuggestModule"], _modules_forms_suggest_suggest_module__WEBPACK_IMPORTED_MODULE_29__["SuggestModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _modules_forms_textarea_textarea_module__WEBPACK_IMPORTED_MODULE_30__["TextareaModule"], _modules_forms_textarea_textarea_module__WEBPACK_IMPORTED_MODULE_30__["TextareaModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _modules_forms_number_number_module__WEBPACK_IMPORTED_MODULE_31__["NumberModule"], _modules_forms_number_number_module__WEBPACK_IMPORTED_MODULE_31__["NumberModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _modules_forms_datepicker_datepicker_module__WEBPACK_IMPORTED_MODULE_32__["DatepickerModule"], _modules_forms_datepicker_datepicker_module__WEBPACK_IMPORTED_MODULE_32__["DatepickerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _modules_forms_switch_switch_module__WEBPACK_IMPORTED_MODULE_33__["SwitchModule"], _modules_forms_switch_switch_module__WEBPACK_IMPORTED_MODULE_33__["SwitchModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _modules_forms_iconinput_iconinput_module__WEBPACK_IMPORTED_MODULE_34__["IconinputModule"], _modules_forms_iconinput_iconinput_module__WEBPACK_IMPORTED_MODULE_34__["IconinputModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _modules_forms_form_module__WEBPACK_IMPORTED_MODULE_35__["FormModule"], _modules_forms_form_module__WEBPACK_IMPORTED_MODULE_35__["FormModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _datatables_module__WEBPACK_IMPORTED_MODULE_1__["DatatablesModule"], _datatables_module__WEBPACK_IMPORTED_MODULE_1__["DatatablesModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_8__["ROUTES"], function () { return [[{ path: "", component: _datatable_show_datatable_show_datatable_show_component__WEBPACK_IMPORTED_MODULE_36__["DatatableShowComponent"], children: [{ path: ":id", component: _datatable_show_datatable_show_datatable_show_component__WEBPACK_IMPORTED_MODULE_36__["DatatableShowComponent"] }] }], [{ path: "", component: _datatable_create_datatable_create_datatable_create_component__WEBPACK_IMPORTED_MODULE_37__["DatatableCreateComponent"], children: [{ path: ":id", component: _datatable_create_datatable_create_datatable_create_component__WEBPACK_IMPORTED_MODULE_37__["DatatableCreateComponent"] }] }]]; }, [])]); });



/***/ }),

/***/ "./src/app/application/datatables/datatables.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/application/datatables/datatables.module.ts ***!
  \*************************************************************/
/*! exports provided: DatatablesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatatablesModule", function() { return DatatablesModule; });
var DatatablesModule = /** @class */ (function () {
    function DatatablesModule() {
    }
    return DatatablesModule;
}());



/***/ })

}]);