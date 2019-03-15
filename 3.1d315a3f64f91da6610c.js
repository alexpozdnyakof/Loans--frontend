(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./src/app/application/kanban/board/board-routing.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/application/kanban/board/board-routing.module.ts ***!
  \******************************************************************/
/*! exports provided: BoardRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoardRoutingModule", function() { return BoardRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _board_board_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./board/board.component */ "./src/app/application/kanban/board/board/board.component.ts");


var routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: _board_board_component__WEBPACK_IMPORTED_MODULE_1__["BoardComponent"],
            }
        ]
    }
];
var BoardRoutingModule = /** @class */ (function () {
    function BoardRoutingModule() {
    }
    return BoardRoutingModule;
}());



/***/ }),

/***/ "./src/app/application/kanban/board/board.module.ngfactory.js":
/*!********************************************************************!*\
  !*** ./src/app/application/kanban/board/board.module.ngfactory.js ***!
  \********************************************************************/
/*! exports provided: BoardModuleNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoardModuleNgFactory", function() { return BoardModuleNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _board_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./board.module */ "./src/app/application/kanban/board/board.module.ts");
/* harmony import */ var _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/@angular/router/router.ngfactory */ "./node_modules/@angular/router/router.ngfactory.js");
/* harmony import */ var _board_board_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./board/board.component.ngfactory */ "./src/app/application/kanban/board/board/board.component.ngfactory.js");
/* harmony import */ var _modules_forms_datepicker_datepicker_datepicker_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../modules/forms/datepicker/datepicker/datepicker.component.ngfactory */ "./src/app/modules/forms/datepicker/datepicker/datepicker.component.ngfactory.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm5/scrolling.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _board_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./board-routing.module */ "./src/app/application/kanban/board/board-routing.module.ts");
/* harmony import */ var _modules_content_card_card_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../modules/content/card/card.module */ "./src/app/modules/content/card/card.module.ts");
/* harmony import */ var _modules_content_userpic_userpic_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../modules/content/userpic/userpic.module */ "./src/app/modules/content/userpic/userpic.module.ts");
/* harmony import */ var _modules_content_task_task_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../modules/content/task/task.module */ "./src/app/modules/content/task/task.module.ts");
/* harmony import */ var _modules_content_content_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../modules/content/content.module */ "./src/app/modules/content/content.module.ts");
/* harmony import */ var _modules_forms_card_card_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../modules/forms/card/card.module */ "./src/app/modules/forms/card/card.module.ts");
/* harmony import */ var _modules_forms_form_shared_form_shared_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../modules/forms/form-shared/form-shared.module */ "./src/app/modules/forms/form-shared/form-shared.module.ts");
/* harmony import */ var _modules_forms_checkbox_checkbox_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../modules/forms/checkbox/checkbox.module */ "./src/app/modules/forms/checkbox/checkbox.module.ts");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/cdk/bidi */ "./node_modules/@angular/cdk/esm5/bidi.es5.js");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/cdk/platform */ "./node_modules/@angular/cdk/esm5/platform.es5.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var ngx_scrollbar__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ngx-scrollbar */ "./node_modules/ngx-scrollbar/fesm5/ngx-scrollbar.js");
/* harmony import */ var _modules_forms_dropdown_dropdown_module__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../modules/forms/dropdown/dropdown.module */ "./src/app/modules/forms/dropdown/dropdown.module.ts");
/* harmony import */ var _modules_forms_form_layout_form_layout_module__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../../modules/forms/form-layout/form-layout.module */ "./src/app/modules/forms/form-layout/form-layout.module.ts");
/* harmony import */ var _modules_forms_hint_hint_module__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../../modules/forms/hint/hint.module */ "./src/app/modules/forms/hint/hint.module.ts");
/* harmony import */ var angular2_text_mask__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! angular2-text-mask */ "./node_modules/angular2-text-mask/dist/angular2TextMask.js");
/* harmony import */ var angular2_text_mask__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(angular2_text_mask__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var _modules_forms_input_input_module__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../../modules/forms/input/input.module */ "./src/app/modules/forms/input/input.module.ts");
/* harmony import */ var _modules_forms_label_label_module__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../../modules/forms/label/label.module */ "./src/app/modules/forms/label/label.module.ts");
/* harmony import */ var _modules_forms_radio_radio_module__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../../../modules/forms/radio/radio.module */ "./src/app/modules/forms/radio/radio.module.ts");
/* harmony import */ var _modules_forms_select_select_module__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../../../modules/forms/select/select.module */ "./src/app/modules/forms/select/select.module.ts");
/* harmony import */ var _modules_forms_suggest_suggest_module__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../../../modules/forms/suggest/suggest.module */ "./src/app/modules/forms/suggest/suggest.module.ts");
/* harmony import */ var _modules_forms_textarea_textarea_module__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../../../modules/forms/textarea/textarea.module */ "./src/app/modules/forms/textarea/textarea.module.ts");
/* harmony import */ var _modules_forms_number_number_module__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../../../modules/forms/number/number.module */ "./src/app/modules/forms/number/number.module.ts");
/* harmony import */ var _modules_forms_datepicker_datepicker_module__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ../../../modules/forms/datepicker/datepicker.module */ "./src/app/modules/forms/datepicker/datepicker.module.ts");
/* harmony import */ var _modules_forms_switch_switch_module__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ../../../modules/forms/switch/switch.module */ "./src/app/modules/forms/switch/switch.module.ts");
/* harmony import */ var _modules_forms_iconinput_iconinput_module__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ../../../modules/forms/iconinput/iconinput.module */ "./src/app/modules/forms/iconinput/iconinput.module.ts");
/* harmony import */ var _modules_forms_form_module__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ../../../modules/forms/form.module */ "./src/app/modules/forms/form.module.ts");
/* harmony import */ var _board_board_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./board/board.component */ "./src/app/application/kanban/board/board/board.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 






































var BoardModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_board_module__WEBPACK_IMPORTED_MODULE_1__["BoardModule"], [], function (_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, [_node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ɵEmptyOutletComponentNgFactory"], _board_board_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["BoardComponentNgFactory"], _modules_forms_datepicker_datepicker_datepicker_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["DatepickerComponentNgFactory"]]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_common_common_a"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_j"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_j"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_7__["DragDrop"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_7__["DragDrop"], [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_8__["ViewportRuler"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_7__["DragDropRegistry"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"], [[2, _angular_router__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_router_router_a"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _board_routing_module__WEBPACK_IMPORTED_MODULE_10__["BoardRoutingModule"], _board_routing_module__WEBPACK_IMPORTED_MODULE_10__["BoardRoutingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _modules_content_card_card_module__WEBPACK_IMPORTED_MODULE_11__["CardModule"], _modules_content_card_card_module__WEBPACK_IMPORTED_MODULE_11__["CardModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _modules_content_userpic_userpic_module__WEBPACK_IMPORTED_MODULE_12__["UserpicModule"], _modules_content_userpic_userpic_module__WEBPACK_IMPORTED_MODULE_12__["UserpicModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _modules_content_task_task_module__WEBPACK_IMPORTED_MODULE_13__["TaskModule"], _modules_content_task_task_module__WEBPACK_IMPORTED_MODULE_13__["TaskModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _modules_content_content_module__WEBPACK_IMPORTED_MODULE_14__["ContentModule"], _modules_content_content_module__WEBPACK_IMPORTED_MODULE_14__["ContentModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _modules_forms_card_card_module__WEBPACK_IMPORTED_MODULE_15__["CardModule"], _modules_forms_card_card_module__WEBPACK_IMPORTED_MODULE_15__["CardModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_bc"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_bc"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _modules_forms_form_shared_form_shared_module__WEBPACK_IMPORTED_MODULE_16__["FormSharedModule"], _modules_forms_form_shared_form_shared_module__WEBPACK_IMPORTED_MODULE_16__["FormSharedModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _modules_forms_checkbox_checkbox_module__WEBPACK_IMPORTED_MODULE_17__["CheckboxModule"], _modules_forms_checkbox_checkbox_module__WEBPACK_IMPORTED_MODULE_17__["CheckboxModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_18__["BidiModule"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_18__["BidiModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_19__["PlatformModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_19__["PlatformModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_8__["ScrollingModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_8__["ScrollingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_20__["LayoutModule"], _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_20__["LayoutModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ngx_scrollbar__WEBPACK_IMPORTED_MODULE_21__["SmoothScrollModule"], ngx_scrollbar__WEBPACK_IMPORTED_MODULE_21__["SmoothScrollModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ngx_scrollbar__WEBPACK_IMPORTED_MODULE_21__["NgScrollbarModule"], ngx_scrollbar__WEBPACK_IMPORTED_MODULE_21__["NgScrollbarModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _modules_forms_dropdown_dropdown_module__WEBPACK_IMPORTED_MODULE_22__["DropdownModule"], _modules_forms_dropdown_dropdown_module__WEBPACK_IMPORTED_MODULE_22__["DropdownModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _modules_forms_form_layout_form_layout_module__WEBPACK_IMPORTED_MODULE_23__["FormLayoutModule"], _modules_forms_form_layout_form_layout_module__WEBPACK_IMPORTED_MODULE_23__["FormLayoutModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _modules_forms_hint_hint_module__WEBPACK_IMPORTED_MODULE_24__["HintModule"], _modules_forms_hint_hint_module__WEBPACK_IMPORTED_MODULE_24__["HintModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, angular2_text_mask__WEBPACK_IMPORTED_MODULE_25__["TextMaskModule"], angular2_text_mask__WEBPACK_IMPORTED_MODULE_25__["TextMaskModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _modules_forms_input_input_module__WEBPACK_IMPORTED_MODULE_26__["InputModule"], _modules_forms_input_input_module__WEBPACK_IMPORTED_MODULE_26__["InputModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _modules_forms_label_label_module__WEBPACK_IMPORTED_MODULE_27__["LabelModule"], _modules_forms_label_label_module__WEBPACK_IMPORTED_MODULE_27__["LabelModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _modules_forms_radio_radio_module__WEBPACK_IMPORTED_MODULE_28__["RadioModule"], _modules_forms_radio_radio_module__WEBPACK_IMPORTED_MODULE_28__["RadioModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _modules_forms_select_select_module__WEBPACK_IMPORTED_MODULE_29__["SelectModule"], _modules_forms_select_select_module__WEBPACK_IMPORTED_MODULE_29__["SelectModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _modules_forms_suggest_suggest_module__WEBPACK_IMPORTED_MODULE_30__["SuggestModule"], _modules_forms_suggest_suggest_module__WEBPACK_IMPORTED_MODULE_30__["SuggestModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _modules_forms_textarea_textarea_module__WEBPACK_IMPORTED_MODULE_31__["TextareaModule"], _modules_forms_textarea_textarea_module__WEBPACK_IMPORTED_MODULE_31__["TextareaModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _modules_forms_number_number_module__WEBPACK_IMPORTED_MODULE_32__["NumberModule"], _modules_forms_number_number_module__WEBPACK_IMPORTED_MODULE_32__["NumberModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _modules_forms_datepicker_datepicker_module__WEBPACK_IMPORTED_MODULE_33__["DatepickerModule"], _modules_forms_datepicker_datepicker_module__WEBPACK_IMPORTED_MODULE_33__["DatepickerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _modules_forms_switch_switch_module__WEBPACK_IMPORTED_MODULE_34__["SwitchModule"], _modules_forms_switch_switch_module__WEBPACK_IMPORTED_MODULE_34__["SwitchModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _modules_forms_iconinput_iconinput_module__WEBPACK_IMPORTED_MODULE_35__["IconinputModule"], _modules_forms_iconinput_iconinput_module__WEBPACK_IMPORTED_MODULE_35__["IconinputModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _modules_forms_form_module__WEBPACK_IMPORTED_MODULE_36__["FormModule"], _modules_forms_form_module__WEBPACK_IMPORTED_MODULE_36__["FormModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_7__["DragDropModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_7__["DragDropModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _board_module__WEBPACK_IMPORTED_MODULE_1__["BoardModule"], _board_module__WEBPACK_IMPORTED_MODULE_1__["BoardModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_9__["ROUTES"], function () { return [[{ path: "", children: [{ path: "", component: _board_board_component__WEBPACK_IMPORTED_MODULE_37__["BoardComponent"] }] }]]; }, [])]); });



/***/ }),

/***/ "./src/app/application/kanban/board/board.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/application/kanban/board/board.module.ts ***!
  \**********************************************************/
/*! exports provided: BoardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoardModule", function() { return BoardModule; });
var BoardModule = /** @class */ (function () {
    function BoardModule() {
    }
    return BoardModule;
}());



/***/ }),

/***/ "./src/app/application/kanban/board/board/board.component.ngfactory.js":
/*!*****************************************************************************!*\
  !*** ./src/app/application/kanban/board/board/board.component.ngfactory.js ***!
  \*****************************************************************************/
/*! exports provided: RenderType_BoardComponent, View_BoardComponent_0, View_BoardComponent_Host_0, BoardComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_BoardComponent", function() { return RenderType_BoardComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_BoardComponent_0", function() { return View_BoardComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_BoardComponent_Host_0", function() { return View_BoardComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoardComponentNgFactory", function() { return BoardComponentNgFactory; });
/* harmony import */ var _board_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./board.component.scss.shim.ngstyle */ "./src/app/application/kanban/board/board/board.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _modules_content_card_card_card_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../modules/content/card/card/card.component.ngfactory */ "./src/app/modules/content/card/card/card.component.ngfactory.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");
/* harmony import */ var _modules_content_card_card_card_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../modules/content/card/card/card.component */ "./src/app/modules/content/card/card/card.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm5/scrolling.es5.js");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/bidi */ "./node_modules/@angular/cdk/esm5/bidi.es5.js");
/* harmony import */ var _modules_content_task_task_task_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../modules/content/task/task/task.component.ngfactory */ "./src/app/modules/content/task/task/task.component.ngfactory.js");
/* harmony import */ var _modules_content_task_task_task_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../modules/content/task/task/task.component */ "./src/app/modules/content/task/task/task.component.ts");
/* harmony import */ var _board_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./board.component */ "./src/app/application/kanban/board/board/board.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 











var styles_BoardComponent = [_board_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_BoardComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_BoardComponent, data: {} });

function View_BoardComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 16777216, null, null, 8, "rosa-card", [["cdkDrag", ""], ["class", "width_320_fix cdk-drag"]], [[2, "rosa-card", null], [2, "cdk-drag-disabled", null], [2, "cdk-drag-dragging", null]], null, null, _modules_content_card_card_card_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_CardComponent_0"], _modules_content_card_card_card_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_CardComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["ɵb"], null, [_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["CdkDrag"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 114688, null, 0, _modules_content_card_card_card_component__WEBPACK_IMPORTED_MODULE_4__["CardComponent"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 4866048, [[1, 4]], 3, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["CdkDrag"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [3, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["CDK_DROP_LIST"]], _angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_6__["ViewportRuler"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["DragDropRegistry"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["CDK_DRAG_CONFIG"], [2, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__["Directionality"]], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["DragDrop"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 2, { _handles: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 3, { _previewTemplate: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 4, { _placeholderTemplate: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, 0, 1, "rosa-task", [["class", "inner-task"]], null, null, null, _modules_content_task_task_task_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__["View_TaskComponent_0"], _modules_content_task_task_task_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__["RenderType_TaskComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 114688, null, 0, _modules_content_task_task_task_component__WEBPACK_IMPORTED_MODULE_9__["TaskComponent"], [], { title: [0, "title"], description: [1, "description"], duedate: [2, "duedate"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 0))], function (_ck, _v) { _ck(_v, 2, 0); var currVal_3 = ((_v.context.$implicit == null) ? null : _v.context.$implicit.title); var currVal_4 = ((_v.context.$implicit == null) ? null : _v.context.$implicit.description); var currVal_5 = ((_v.context.$implicit == null) ? null : _v.context.$implicit.duedate); _ck(_v, 8, 0, currVal_3, currVal_4, currVal_5); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).cardType; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).disabled; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3)._dragRef.isDragging(); _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2); }); }
function View_BoardComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 16777216, null, null, 8, "rosa-card", [["cdkDrag", ""], ["class", "width_320_fix cdk-drag"]], [[2, "rosa-card", null], [2, "cdk-drag-disabled", null], [2, "cdk-drag-dragging", null]], null, null, _modules_content_card_card_card_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_CardComponent_0"], _modules_content_card_card_card_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_CardComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["ɵb"], null, [_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["CdkDrag"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 114688, null, 0, _modules_content_card_card_card_component__WEBPACK_IMPORTED_MODULE_4__["CardComponent"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 4866048, [[5, 4]], 3, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["CdkDrag"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [3, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["CDK_DROP_LIST"]], _angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_6__["ViewportRuler"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["DragDropRegistry"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["CDK_DRAG_CONFIG"], [2, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__["Directionality"]], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["DragDrop"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 6, { _handles: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 7, { _previewTemplate: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 8, { _placeholderTemplate: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, 0, 1, "rosa-task", [["class", "inner-task"]], null, null, null, _modules_content_task_task_task_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__["View_TaskComponent_0"], _modules_content_task_task_task_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__["RenderType_TaskComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 114688, null, 0, _modules_content_task_task_task_component__WEBPACK_IMPORTED_MODULE_9__["TaskComponent"], [], { title: [0, "title"], description: [1, "description"], duedate: [2, "duedate"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 0))], function (_ck, _v) { _ck(_v, 2, 0); var currVal_3 = ((_v.context.$implicit == null) ? null : _v.context.$implicit.title); var currVal_4 = ((_v.context.$implicit == null) ? null : _v.context.$implicit.description); var currVal_5 = ((_v.context.$implicit == null) ? null : _v.context.$implicit.duedate); _ck(_v, 8, 0, currVal_3, currVal_4, currVal_5); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).cardType; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).disabled; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3)._dragRef.isDragging(); _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2); }); }
function View_BoardComponent_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 16777216, null, null, 8, "rosa-card", [["cdkDrag", ""], ["class", "width_320_fix cdk-drag"]], [[2, "rosa-card", null], [2, "cdk-drag-disabled", null], [2, "cdk-drag-dragging", null]], null, null, _modules_content_card_card_card_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_CardComponent_0"], _modules_content_card_card_card_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_CardComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["ɵb"], null, [_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["CdkDrag"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 114688, null, 0, _modules_content_card_card_card_component__WEBPACK_IMPORTED_MODULE_4__["CardComponent"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 4866048, [[9, 4]], 3, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["CdkDrag"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [3, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["CDK_DROP_LIST"]], _angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_6__["ViewportRuler"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["DragDropRegistry"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["CDK_DRAG_CONFIG"], [2, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__["Directionality"]], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["DragDrop"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 10, { _handles: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 11, { _previewTemplate: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 12, { _placeholderTemplate: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, 0, 1, "rosa-task", [["class", "inner-task"]], null, null, null, _modules_content_task_task_task_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__["View_TaskComponent_0"], _modules_content_task_task_task_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__["RenderType_TaskComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 114688, null, 0, _modules_content_task_task_task_component__WEBPACK_IMPORTED_MODULE_9__["TaskComponent"], [], { title: [0, "title"], description: [1, "description"], duedate: [2, "duedate"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 0))], function (_ck, _v) { _ck(_v, 2, 0); var currVal_3 = ((_v.context.$implicit == null) ? null : _v.context.$implicit.title); var currVal_4 = ((_v.context.$implicit == null) ? null : _v.context.$implicit.description); var currVal_5 = ((_v.context.$implicit == null) ? null : _v.context.$implicit.duedate); _ck(_v, 8, 0, currVal_3, currVal_4, currVal_5); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).cardType; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).disabled; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3)._dragRef.isDragging(); _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2); }); }
function View_BoardComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 40, "div", [["class", "kanban-wrapper"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 2, "div", [["class", "kanban-header"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 1, "h1", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\u041A\u043E\u043C\u0430\u043D\u0434\u043D\u044B\u0439 \u0441\u043F\u0440\u0438\u043D\u0442 13 \u0444\u0435\u0432\u0440. \u2013 24 \u0444\u0435\u0432\u0440."])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 36, "div", [["class", "kanban-workspace"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 14, "div", [["cdkDropList", ""], ["class", "workspace-section cdk-drop-list"]], [[8, "id", 0], [2, "cdk-drop-list-disabled", null], [2, "cdk-drop-list-dragging", null], [2, "cdk-drop-list-receiving", null]], [[null, "cdkDropListDropped"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("cdkDropListDropped" === en)) {
        var pd_0 = (_co.onDrop($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["CDK_DROP_LIST"], null, [_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["CdkDropList"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 1196032, [["backlogList", 4]], 1, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["CdkDropList"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["DragDropRegistry"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__["Directionality"]], [3, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["CdkDropListGroup"]], [2, _angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["DragDrop"]], { connectedTo: [0, "connectedTo"], data: [1, "data"] }, { dropped: "cdkDropListDropped" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 1, { _draggables: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpad"](9, 1), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](256, null, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["CdkDropListGroup"], undefined, []), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 2, "div", [["class", "kanban-workspace_header"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\u0412\u044B\u043F\u043E\u043B\u043D\u044F\u044E\u0442\u0441\u044F"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, null, 3, "rosa-card", [["class", "padding-8"]], [[2, "rosa-card", null]], null, null, _modules_content_card_card_card_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_CardComponent_0"], _modules_content_card_card_card_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_CardComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](15, 114688, null, 0, _modules_content_card_card_card_component__WEBPACK_IMPORTED_MODULE_4__["CardComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, 0, 1, "div", [["class", "card_create-task"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0437\u0430\u0434\u0430\u0447\u0443"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_BoardComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](19, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](20, 0, null, null, 10, "div", [["cdkDropList", ""], ["class", "workspace-section cdk-drop-list"]], [[8, "id", 0], [2, "cdk-drop-list-disabled", null], [2, "cdk-drop-list-dragging", null], [2, "cdk-drop-list-receiving", null]], [[null, "cdkDropListDropped"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("cdkDropListDropped" === en)) {
        var pd_0 = (_co.onDrop($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["CDK_DROP_LIST"], null, [_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["CdkDropList"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](22, 1196032, [["doneList", 4]], 1, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["CdkDropList"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["DragDropRegistry"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__["Directionality"]], [3, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["CdkDropListGroup"]], [2, _angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["DragDrop"]], { connectedTo: [0, "connectedTo"], data: [1, "data"] }, { dropped: "cdkDropListDropped" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 5, { _draggables: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpad"](24, 2), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](256, null, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["CdkDropListGroup"], undefined, []), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](26, 0, null, null, 2, "div", [["class", "kanban-workspace_header"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](27, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\u0411\u044D\u043A\u043B\u043E\u0433 \u0437\u0430\u0434\u0430\u0447"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_BoardComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](30, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](31, 0, null, null, 9, "div", [["cdkDropList", ""], ["class", "workspace-section cdk-drop-list"]], [[8, "id", 0], [2, "cdk-drop-list-disabled", null], [2, "cdk-drop-list-dragging", null], [2, "cdk-drop-list-receiving", null]], [[null, "cdkDropListDropped"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("cdkDropListDropped" === en)) {
        var pd_0 = (_co.onDrop($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["CDK_DROP_LIST"], null, [_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["CdkDropList"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](33, 1196032, [["blockedList", 4]], 1, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["CdkDropList"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["DragDropRegistry"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__["Directionality"]], [3, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["CdkDropListGroup"]], [2, _angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["DragDrop"]], { connectedTo: [0, "connectedTo"], data: [1, "data"] }, { dropped: "cdkDropListDropped" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 9, { _draggables: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](256, null, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["CdkDropListGroup"], undefined, []), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](36, 0, null, null, 2, "div", [["class", "kanban-workspace_header"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](37, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\u0411\u043B\u043E\u043A\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0435 \u0437\u0430\u0434\u0430\u0447\u0438 "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_BoardComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](40, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_4 = _ck(_v, 9, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 22)); var currVal_5 = _co.backlog; _ck(_v, 7, 0, currVal_4, currVal_5); _ck(_v, 15, 0); var currVal_7 = _co.backlog; _ck(_v, 19, 0, currVal_7); var currVal_12 = _ck(_v, 24, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 33)); var currVal_13 = _co.completed; _ck(_v, 22, 0, currVal_12, currVal_13); var currVal_14 = _co.completed; _ck(_v, 30, 0, currVal_14); var currVal_19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 22); var currVal_20 = _co.blocked; _ck(_v, 33, 0, currVal_19, currVal_20); var currVal_21 = _co.blocked; _ck(_v, 40, 0, currVal_21); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).id; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).disabled; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7)._dropListRef.isDragging(); var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7)._dropListRef.isReceiving(); _ck(_v, 5, 0, currVal_0, currVal_1, currVal_2, currVal_3); var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).cardType; _ck(_v, 14, 0, currVal_6); var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 22).id; var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 22).disabled; var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 22)._dropListRef.isDragging(); var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 22)._dropListRef.isReceiving(); _ck(_v, 20, 0, currVal_8, currVal_9, currVal_10, currVal_11); var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 33).id; var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 33).disabled; var currVal_17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 33)._dropListRef.isDragging(); var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 33)._dropListRef.isReceiving(); _ck(_v, 31, 0, currVal_15, currVal_16, currVal_17, currVal_18); }); }
function View_BoardComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "rosa-board", [], null, null, null, View_BoardComponent_0, RenderType_BoardComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _board_component__WEBPACK_IMPORTED_MODULE_10__["BoardComponent"], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var BoardComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("rosa-board", _board_component__WEBPACK_IMPORTED_MODULE_10__["BoardComponent"], View_BoardComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/application/kanban/board/board/board.component.scss.shim.ngstyle.js":
/*!*************************************************************************************!*\
  !*** ./src/app/application/kanban/board/board/board.component.scss.shim.ngstyle.js ***!
  \*************************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = [".kanban-header[_ngcontent-%COMP%] {\n  padding: 32px 32px 24px; }\n  .kanban-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 20px;\n    line-height: 28px;\n    font-weight: 400;\n    color: #1b1b1b;\n    margin: 0; }\n  .kanban-workspace[_ngcontent-%COMP%] {\n  padding: 0 24px 32px;\n  display: flex; }\n  .kanban-workspace_header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 16px;\n  line-height: 32px;\n  font-weight: 500;\n  display: block;\n  margin-bottom: 8px; }\n  .card_create-task[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n  text-align: center;\n  font-size: 13px;\n  line-height: 16px;\n  font-weight: 500;\n  color: #76767c; }\n  .workspace-section[_ngcontent-%COMP%] {\n  width: 320px;\n  margin: 0 12px;\n  box-sizing: border-box; }\n  .width_320_fix[_ngcontent-%COMP%] {\n  max-width: 320px !important; }\n  [_nghost-%COMP%]   .rosa-card[_ngcontent-%COMP%] {\n  margin-bottom: 12px;\n  width: 320px !important; }\n  [_nghost-%COMP%]   .rosa-card[_ngcontent-%COMP%]:not(.cdk-drag-placeholder) {\n    transition: -webkit-transform 250ms cubic-bezier(0, 0, 0.2, 1);\n    transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n    transition: transform 250ms cubic-bezier(0, 0, 0.2, 1), -webkit-transform 250ms cubic-bezier(0, 0, 0.2, 1); }\n  [_nghost-%COMP%]   .rosa-card.cdk-drag-placeholder[_ngcontent-%COMP%]   .inner-task[_ngcontent-%COMP%] {\n    opacity: 0; }\n  [_nghost-%COMP%]   .rosa-card.cdk-drag-placeholder[_ngcontent-%COMP%]   .inner-task[_ngcontent-%COMP%]   rosa-userpic[_ngcontent-%COMP%] {\n      opacity: 0; }\n  [_nghost-%COMP%]   .rosa-card.cdk-drag-placeholder[_ngcontent-%COMP%]   .inner-task[_ngcontent-%COMP%]::before {\n      content: '';\n      background-color: #fafafa;\n      width: 100%;\n      height: 100%; }\n  .cdk-drag-placeholder[_ngcontent-%COMP%] {\n  width: 320px !important; }\n  .padding-8[_ngcontent-%COMP%] {\n  padding: 8px 24px; }\n  .cdk-drag-preview[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow: 0 5px 7px rgba(0, 0, 0, 0.08);\n  border-color: rgba(70, 70, 72, 0.3);\n  -webkit-transform: scale(1.1);\n          transform: scale(1.1);\n  opacity: .9; }\n  .cdk-drag-placeholder[_ngcontent-%COMP%] {\n  opacity: 1;\n  border: 1px solid rgba(70, 70, 72, 0.3);\n  background-color: rgba(70, 70, 72, 0.05);\n  box-shadow: none !important;\n  -webkit-transform: scale(1.05);\n          transform: scale(1.05); }\n  .cdk-drag-placeholder[_nghost-%COMP%]   .inner-task[_ngcontent-%COMP%] {\n    opacity: 0; }\n  .cdk-drag-placeholder[_nghost-%COMP%]   .inner-task[_ngcontent-%COMP%]   rosa-userpic[_ngcontent-%COMP%] {\n      opacity: 0; }\n  .cdk-drag-placeholder[_nghost-%COMP%]   .inner-task[_ngcontent-%COMP%]::before {\n      content: '';\n      background-color: #fafafa;\n      width: 100%;\n      height: 100%; }\n  .cdk-drag-animating[_ngcontent-%COMP%] {\n  transition: -webkit-transform 250ms cubic-bezier(0, 0, 0.2, 1);\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1), -webkit-transform 250ms cubic-bezier(0, 0, 0.2, 1); }"];



/***/ }),

/***/ "./src/app/application/kanban/board/board/board.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/application/kanban/board/board/board.component.ts ***!
  \*******************************************************************/
/*! exports provided: BoardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoardComponent", function() { return BoardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");


var BoardComponent = /** @class */ (function () {
    function BoardComponent() {
        this.backlog = [
            {
                description: "[READ ME] - Instructions for using this template",
                duedate: "2019-12-02",
                userpic: "/assets/userpic/01.jpg",
                title: "Description",
            },
            {
                description: "[EXAMPLE TASK] Interview customers to have them tell their stories on the blog",
                duedate: "2019-12-02",
                userpic: "/assets/userpic/01.jpg",
                title: "Description",
            },
            {
                description: "[EXAMPLE TASK] Should we highlight training material in the app to help users who are confused?",
                duedate: "2019-12-02",
                userpic: "/assets/userpic/01.jpg",
                title: "Description",
            }
        ];
        this.completed = [
            {
                description: "[EXAMPLE TASK] Prepare swag to give out at conference",
                duedate: "2019-12-02",
                userpic: "/assets/userpic/01.jpg",
                title: "Description",
            },
            {
                description: "Should we highlight training material in the app to help users who are confused?",
                duedate: "2019-12-02",
                userpic: "/assets/userpic/01.jpg",
                title: "Description",
            },
            {
                description: "Instructions for using this template",
                duedate: "2019-12-02",
                userpic: "/assets/userpic/01.jpg",
                title: "Description",
            }
        ];
        this.blocked = [
            {
                description: "[READ ME] - Instructions for using this template",
                duedate: "2019-12-02",
                userpic: "/assets/userpic/01.jpg",
                title: "Description",
            },
            {
                description: "[EXAMPLE TASK] Interview customers to have them tell their stories on the blog",
                duedate: "2019-12-02",
                userpic: "/assets/userpic/01.jpg",
                title: "Description",
            },
            {
                description: "[EXAMPLE TASK] Should we highlight training material in the app to help users who are confused?",
                duedate: "2019-12-02",
                userpic: "/assets/userpic/01.jpg",
                title: "Description",
            }
        ];
    }
    BoardComponent.prototype.ngOnInit = function () {
    };
    BoardComponent.prototype.onDrop = function (event) {
        if (event.previousContainer === event.container) {
            Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["moveItemInArray"])(event.container.data, event.previousIndex, event.currentIndex);
        }
        else {
            Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["transferArrayItem"])(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
        }
    };
    return BoardComponent;
}());



/***/ }),

/***/ "./src/app/modules/content/card/card/card.component.ngfactory.js":
/*!***********************************************************************!*\
  !*** ./src/app/modules/content/card/card/card.component.ngfactory.js ***!
  \***********************************************************************/
/*! exports provided: RenderType_CardComponent, View_CardComponent_0, View_CardComponent_Host_0, CardComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_CardComponent", function() { return RenderType_CardComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_CardComponent_0", function() { return View_CardComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_CardComponent_Host_0", function() { return View_CardComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardComponentNgFactory", function() { return CardComponentNgFactory; });
/* harmony import */ var _card_component_scss_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./card.component.scss.ngstyle */ "./src/app/modules/content/card/card/card.component.scss.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./card.component */ "./src/app/modules/content/card/card/card.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 



var styles_CardComponent = [_card_component_scss_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_CardComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 2, styles: styles_CardComponent, data: {} });

function View_CardComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵncd"](null, 0)], null, null); }
function View_CardComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "rosa-card", [], [[2, "rosa-card", null]], null, null, View_CardComponent_0, RenderType_CardComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _card_component__WEBPACK_IMPORTED_MODULE_2__["CardComponent"], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).cardType; _ck(_v, 0, 0, currVal_0); }); }
var CardComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("rosa-card", _card_component__WEBPACK_IMPORTED_MODULE_2__["CardComponent"], View_CardComponent_Host_0, {}, {}, ["*"]);



/***/ }),

/***/ "./src/app/modules/content/card/card/card.component.scss.ngstyle.js":
/*!**************************************************************************!*\
  !*** ./src/app/modules/content/card/card/card.component.scss.ngstyle.js ***!
  \**************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = [".rosa-card {\n  width: 100% !important;\n  position: relative;\n  cursor: move;\n  display: inline-flex;\n  box-shadow: 0 1px 3px rgba(27, 27, 27, 0.15);\n  border-radius: 4px;\n  padding: 16px 20px;\n  background-color: #FFF;\n  border: 1px solid transparent;\n  transition: box-shadow 100ms, opacity 100ms, border-color 100ms, -webkit-transform 100ms;\n  transition: box-shadow 100ms, transform 100ms, opacity 100ms, border-color 100ms;\n  transition: box-shadow 100ms, transform 100ms, opacity 100ms, border-color 100ms, -webkit-transform 100ms; }\n  .rosa-card:hover {\n    box-shadow: 0 3px 5px rgba(0, 0, 0, 0.1);\n    opacity: 0.8;\n    border-color: rgba(70, 70, 72, 0.4);\n    transition: box-shadow 100ms, opacity 100ms, border-color 100ms, -webkit-transform 100ms;\n    transition: box-shadow 100ms, transform 100ms, opacity 100ms, border-color 100ms;\n    transition: box-shadow 100ms, transform 100ms, opacity 100ms, border-color 100ms, -webkit-transform 100ms; }\n"];



/***/ }),

/***/ "./src/app/modules/content/card/card/card.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/modules/content/card/card/card.component.ts ***!
  \*************************************************************/
/*! exports provided: CardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardComponent", function() { return CardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var CardComponent = /** @class */ (function () {
    function CardComponent() {
    }
    Object.defineProperty(CardComponent.prototype, "cardType", {
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    CardComponent.prototype.ngOnInit = function () {
    };
    return CardComponent;
}());



/***/ }),

/***/ "./src/app/modules/content/task/task/task.component.ngfactory.js":
/*!***********************************************************************!*\
  !*** ./src/app/modules/content/task/task/task.component.ngfactory.js ***!
  \***********************************************************************/
/*! exports provided: RenderType_TaskComponent, View_TaskComponent_0, View_TaskComponent_Host_0, TaskComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_TaskComponent", function() { return RenderType_TaskComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_TaskComponent_0", function() { return View_TaskComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_TaskComponent_Host_0", function() { return View_TaskComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskComponentNgFactory", function() { return TaskComponentNgFactory; });
/* harmony import */ var _task_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task.component.scss.shim.ngstyle */ "./src/app/modules/content/task/task/task.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _userpic_userpic_userpic_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../userpic/userpic/userpic.component.ngfactory */ "./src/app/modules/content/userpic/userpic/userpic.component.ngfactory.js");
/* harmony import */ var _userpic_userpic_userpic_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../userpic/userpic/userpic.component */ "./src/app/modules/content/userpic/userpic/userpic.component.ts");
/* harmony import */ var _task_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./task.component */ "./src/app/modules/content/task/task/task.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 






var styles_TaskComponent = [_task_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_TaskComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_TaskComponent, data: {} });

function View_TaskComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 2, "div", [["class", "task-title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](3, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 2, "div", [["class", "task-description"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](6, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 6, "div", [["class", "task-subitem"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 1, "rosa-userpic", [], null, null, null, _userpic_userpic_userpic_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_UserpicComponent_0"], _userpic_userpic_userpic_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_UserpicComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 114688, null, 0, _userpic_userpic_userpic_component__WEBPACK_IMPORTED_MODULE_4__["UserpicComponent"], [], { userpic: [0, "userpic"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 3, "div", [["class", "task-duedate"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 2, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](12, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](13, 2)], function (_ck, _v) { var _co = _v.component; var currVal_2 = _co.userpic; _ck(_v, 9, 0, currVal_2); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.title; _ck(_v, 3, 0, currVal_0); var currVal_1 = _co.description; _ck(_v, 6, 0, currVal_1); var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 12, 0, _ck(_v, 13, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 0), _co.duedate, "dd MMM")); _ck(_v, 12, 0, currVal_3); }); }
function View_TaskComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "rosa-task", [], null, null, null, View_TaskComponent_0, RenderType_TaskComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _task_component__WEBPACK_IMPORTED_MODULE_5__["TaskComponent"], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var TaskComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("rosa-task", _task_component__WEBPACK_IMPORTED_MODULE_5__["TaskComponent"], View_TaskComponent_Host_0, { title: "title", description: "description", userpic: "userpic", duedate: "duedate" }, {}, []);



/***/ }),

/***/ "./src/app/modules/content/task/task/task.component.scss.shim.ngstyle.js":
/*!*******************************************************************************!*\
  !*** ./src/app/modules/content/task/task/task.component.scss.shim.ngstyle.js ***!
  \*******************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = [".task-title[_ngcontent-%COMP%] {\n  margin-bottom: 4px; }\n  .task-title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    display: block;\n    font-size: 14px;\n    line-height: 20px;\n    font-weight: 500;\n    margin-bottom: 4px;\n    color: #1b1b1b; }\n  .task-description[_ngcontent-%COMP%] {\n  margin-bottom: 8px; }\n  .task-description[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-size: 14px;\n    line-height: 20px;\n    color: #464648; }\n  .task-subitem[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center; }\n  .task[_ngcontent-%COMP%] {\n  transition: box-shadow 100ms, opacity 100ms, border-color 100ms, -webkit-transform 100ms;\n  transition: box-shadow 100ms, transform 100ms, opacity 100ms, border-color 100ms;\n  transition: box-shadow 100ms, transform 100ms, opacity 100ms, border-color 100ms, -webkit-transform 100ms; }\n  .task-duedate[_ngcontent-%COMP%] {\n  margin-left: 12px; }\n  .task-duedate[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-size: 12px;\n    line-height: 12px;\n    color: #76767c; }"];



/***/ }),

/***/ "./src/app/modules/content/task/task/task.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/modules/content/task/task/task.component.ts ***!
  \*************************************************************/
/*! exports provided: TaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskComponent", function() { return TaskComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var TaskComponent = /** @class */ (function () {
    function TaskComponent() {
        this.title = "\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435";
    }
    TaskComponent.prototype.ngOnInit = function () {
    };
    return TaskComponent;
}());



/***/ }),

/***/ "./src/app/modules/content/userpic/userpic/userpic.component.ngfactory.js":
/*!********************************************************************************!*\
  !*** ./src/app/modules/content/userpic/userpic/userpic.component.ngfactory.js ***!
  \********************************************************************************/
/*! exports provided: RenderType_UserpicComponent, View_UserpicComponent_0, View_UserpicComponent_Host_0, UserpicComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_UserpicComponent", function() { return RenderType_UserpicComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_UserpicComponent_0", function() { return View_UserpicComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_UserpicComponent_Host_0", function() { return View_UserpicComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserpicComponentNgFactory", function() { return UserpicComponentNgFactory; });
/* harmony import */ var _userpic_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userpic.component.scss.shim.ngstyle */ "./src/app/modules/content/userpic/userpic/userpic.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _userpic_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./userpic.component */ "./src/app/modules/content/userpic/userpic/userpic.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 




var styles_UserpicComponent = [_userpic_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_UserpicComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_UserpicComponent, data: {} });

function View_UserpicComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 0, "img", [], [[8, "src", 4]], null, null, null, null))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", _co.userpic, ""); _ck(_v, 0, 0, currVal_0); }); }
function View_UserpicComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 0, "div", [["class", "empty-pic"]], null, null, null, null, null))], null, null); }
function View_UserpicComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "div", [["class", "userpic"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_UserpicComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_UserpicComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.userpic; _ck(_v, 2, 0, currVal_0); var currVal_1 = !_co.userpic; _ck(_v, 4, 0, currVal_1); }, null); }
function View_UserpicComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "rosa-userpic", [], null, null, null, View_UserpicComponent_0, RenderType_UserpicComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _userpic_component__WEBPACK_IMPORTED_MODULE_3__["UserpicComponent"], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var UserpicComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("rosa-userpic", _userpic_component__WEBPACK_IMPORTED_MODULE_3__["UserpicComponent"], View_UserpicComponent_Host_0, { userpic: "userpic" }, {}, []);



/***/ }),

/***/ "./src/app/modules/content/userpic/userpic/userpic.component.scss.shim.ngstyle.js":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/content/userpic/userpic/userpic.component.scss.shim.ngstyle.js ***!
  \****************************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = [".userpic[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n  border-radius: 50%;\n  overflow: hidden;\n  position: relative; }\n  .userpic[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    -o-object-fit: cover;\n       object-fit: cover; }\n  .empty-pic[_ngcontent-%COMP%] {\n  background-color: #eaeeef;\n  width: 100%;\n  height: 100%;\n  position: absolute; }"];



/***/ }),

/***/ "./src/app/modules/content/userpic/userpic/userpic.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/modules/content/userpic/userpic/userpic.component.ts ***!
  \**********************************************************************/
/*! exports provided: UserpicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserpicComponent", function() { return UserpicComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var UserpicComponent = /** @class */ (function () {
    function UserpicComponent() {
    }
    UserpicComponent.prototype.ngOnInit = function () {
    };
    return UserpicComponent;
}());



/***/ })

}]);