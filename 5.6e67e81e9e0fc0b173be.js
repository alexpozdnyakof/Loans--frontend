(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./node_modules/@angular/forms/fesm5/forms.js":
/*!****************************************************!*\
  !*** ./node_modules/@angular/forms/fesm5/forms.js ***!
  \****************************************************/
/*! exports provided: ɵangular_packages_forms_forms_bc, ɵangular_packages_forms_forms_bb, ɵangular_packages_forms_forms_z, ɵangular_packages_forms_forms_ba, ɵangular_packages_forms_forms_a, ɵangular_packages_forms_forms_b, ɵangular_packages_forms_forms_c, ɵangular_packages_forms_forms_d, ɵangular_packages_forms_forms_e, ɵangular_packages_forms_forms_f, ɵangular_packages_forms_forms_g, ɵangular_packages_forms_forms_h, ɵangular_packages_forms_forms_bh, ɵangular_packages_forms_forms_bd, ɵangular_packages_forms_forms_be, ɵangular_packages_forms_forms_i, ɵangular_packages_forms_forms_j, ɵangular_packages_forms_forms_bf, ɵangular_packages_forms_forms_bg, ɵangular_packages_forms_forms_k, ɵangular_packages_forms_forms_l, ɵangular_packages_forms_forms_m, ɵangular_packages_forms_forms_n, ɵangular_packages_forms_forms_p, ɵangular_packages_forms_forms_o, ɵangular_packages_forms_forms_q, ɵangular_packages_forms_forms_s, ɵangular_packages_forms_forms_r, ɵangular_packages_forms_forms_u, ɵangular_packages_forms_forms_v, ɵangular_packages_forms_forms_x, ɵangular_packages_forms_forms_w, ɵangular_packages_forms_forms_y, ɵangular_packages_forms_forms_t, AbstractControlDirective, AbstractFormGroupDirective, CheckboxControlValueAccessor, ControlContainer, NG_VALUE_ACCESSOR, COMPOSITION_BUFFER_MODE, DefaultValueAccessor, NgControl, NgControlStatus, NgControlStatusGroup, NgForm, NgFormSelectorWarning, NgModel, NgModelGroup, RadioControlValueAccessor, FormControlDirective, FormControlName, FormGroupDirective, FormArrayName, FormGroupName, NgSelectOption, SelectControlValueAccessor, SelectMultipleControlValueAccessor, CheckboxRequiredValidator, EmailValidator, MaxLengthValidator, MinLengthValidator, PatternValidator, RequiredValidator, FormBuilder, AbstractControl, FormArray, FormControl, FormGroup, NG_ASYNC_VALIDATORS, NG_VALIDATORS, Validators, VERSION, FormsModule, ReactiveFormsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_bc", function() { return InternalFormsSharedModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_bb", function() { return REACTIVE_DRIVEN_DIRECTIVES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_z", function() { return SHARED_FORM_DIRECTIVES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_ba", function() { return TEMPLATE_DRIVEN_DIRECTIVES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_a", function() { return CHECKBOX_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_b", function() { return DEFAULT_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_c", function() { return AbstractControlStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_d", function() { return ngControlStatusHost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_e", function() { return formDirectiveProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_f", function() { return NG_FORM_SELECTOR_WARNING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_g", function() { return formControlBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_h", function() { return modelGroupProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_bh", function() { return NgNoValidate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_bd", function() { return NUMBER_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_be", function() { return NumberValueAccessor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_i", function() { return RADIO_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_j", function() { return RadioControlRegistry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_bf", function() { return RANGE_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_bg", function() { return RangeValueAccessor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_k", function() { return NG_MODEL_WITH_FORM_CONTROL_WARNING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_l", function() { return formControlBinding$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_m", function() { return controlNameBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_n", function() { return formDirectiveProvider$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_p", function() { return formArrayNameProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_o", function() { return formGroupNameProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_q", function() { return SELECT_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_s", function() { return NgSelectMultipleOption; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_r", function() { return SELECT_MULTIPLE_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_u", function() { return CHECKBOX_REQUIRED_VALIDATOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_v", function() { return EMAIL_VALIDATOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_x", function() { return MAX_LENGTH_VALIDATOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_w", function() { return MIN_LENGTH_VALIDATOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_y", function() { return PATTERN_VALIDATOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_t", function() { return REQUIRED_VALIDATOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbstractControlDirective", function() { return AbstractControlDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbstractFormGroupDirective", function() { return AbstractFormGroupDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxControlValueAccessor", function() { return CheckboxControlValueAccessor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControlContainer", function() { return ControlContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NG_VALUE_ACCESSOR", function() { return NG_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COMPOSITION_BUFFER_MODE", function() { return COMPOSITION_BUFFER_MODE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultValueAccessor", function() { return DefaultValueAccessor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgControl", function() { return NgControl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgControlStatus", function() { return NgControlStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgControlStatusGroup", function() { return NgControlStatusGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgForm", function() { return NgForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgFormSelectorWarning", function() { return NgFormSelectorWarning; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgModel", function() { return NgModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgModelGroup", function() { return NgModelGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RadioControlValueAccessor", function() { return RadioControlValueAccessor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormControlDirective", function() { return FormControlDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormControlName", function() { return FormControlName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormGroupDirective", function() { return FormGroupDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormArrayName", function() { return FormArrayName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormGroupName", function() { return FormGroupName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgSelectOption", function() { return NgSelectOption; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectControlValueAccessor", function() { return SelectControlValueAccessor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectMultipleControlValueAccessor", function() { return SelectMultipleControlValueAccessor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxRequiredValidator", function() { return CheckboxRequiredValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailValidator", function() { return EmailValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaxLengthValidator", function() { return MaxLengthValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MinLengthValidator", function() { return MinLengthValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatternValidator", function() { return PatternValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequiredValidator", function() { return RequiredValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormBuilder", function() { return FormBuilder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbstractControl", function() { return AbstractControl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormArray", function() { return FormArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormControl", function() { return FormControl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormGroup", function() { return FormGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NG_ASYNC_VALIDATORS", function() { return NG_ASYNC_VALIDATORS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NG_VALIDATORS", function() { return NG_VALIDATORS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Validators", function() { return Validators; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VERSION", function() { return VERSION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormsModule", function() { return FormsModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactiveFormsModule", function() { return ReactiveFormsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/**
 * @license Angular v7.0.0
 * (c) 2010-2018 Google, Inc. https://angular.io/
 * License: MIT
 */







/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @description
 * Base class for control directives.
 *
 * This class is only used internally in the `ReactiveFormsModule` and the `FormsModule`.
 *
 */
var AbstractControlDirective = /** @class */ (function () {
    function AbstractControlDirective() {
    }
    Object.defineProperty(AbstractControlDirective.prototype, "value", {
        /**
         * @description
         * Reports the value of the control if it is present, otherwise null.
         */
        get: function () { return this.control ? this.control.value : null; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControlDirective.prototype, "valid", {
        /**
         * @description
         * Reports whether the control is valid. A control is considered valid if no
         * validation errors exist with the current value.
         * If the control is not present, null is returned.
         */
        get: function () { return this.control ? this.control.valid : null; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControlDirective.prototype, "invalid", {
        /**
         * @description
         * Reports whether the control is invalid, meaning that an error exists in the input value.
         * If the control is not present, null is returned.
         */
        get: function () { return this.control ? this.control.invalid : null; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControlDirective.prototype, "pending", {
        /**
         * @description
         * Reports whether a control is pending, meaning that that async validation is occurring and
         * errors are not yet available for the input value. If the control is not present, null is
         * returned.
         */
        get: function () { return this.control ? this.control.pending : null; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControlDirective.prototype, "disabled", {
        /**
         * @description
         * Reports whether the control is disabled, meaning that the control is disabled
         * in the UI and is exempt from validation checks and excluded from aggregate
         * values of ancestor controls. If the control is not present, null is returned.
         */
        get: function () { return this.control ? this.control.disabled : null; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControlDirective.prototype, "enabled", {
        /**
         * @description
         * Reports whether the control is enabled, meaning that the control is included in ancestor
         * calculations of validity or value. If the control is not present, null is returned.
         */
        get: function () { return this.control ? this.control.enabled : null; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControlDirective.prototype, "errors", {
        /**
         * @description
         * Reports the control's validation errors. If the control is not present, null is returned.
         */
        get: function () { return this.control ? this.control.errors : null; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControlDirective.prototype, "pristine", {
        /**
         * @description
         * Reports whether the control is pristine, meaning that the user has not yet changed
         * the value in the UI. If the control is not present, null is returned.
         */
        get: function () { return this.control ? this.control.pristine : null; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControlDirective.prototype, "dirty", {
        /**
         * @description
         * Reports whether the control is dirty, meaning that the user has changed
         * the value in the UI. If the control is not present, null is returned.
         */
        get: function () { return this.control ? this.control.dirty : null; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControlDirective.prototype, "touched", {
        /**
         * @description
         * Reports whether the control is touched, meaning that the user has triggered
         * a `blur` event on it. If the control is not present, null is returned.
         */
        get: function () { return this.control ? this.control.touched : null; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControlDirective.prototype, "status", {
        /**
         * @description
         * Reports the validation status of the control. Possible values include:
         * 'VALID', 'INVALID', 'DISABLED', and 'PENDING'.
         * If the control is not present, null is returned.
         */
        get: function () { return this.control ? this.control.status : null; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControlDirective.prototype, "untouched", {
        /**
         * @description
         * Reports whether the control is untouched, meaning that the user has not yet triggered
         * a `blur` event on it. If the control is not present, null is returned.
         */
        get: function () { return this.control ? this.control.untouched : null; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControlDirective.prototype, "statusChanges", {
        /**
         * @description
         * Returns a multicasting observable that emits a validation status whenever it is
         * calculated for the control. If the control is not present, null is returned.
         */
        get: function () {
            return this.control ? this.control.statusChanges : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControlDirective.prototype, "valueChanges", {
        /**
         * @description
         * Returns a multicasting observable of value changes for the control that emits every time the
         * value of the control changes in the UI or programmatically.
         * If the control is not present, null is returned.
         */
        get: function () {
            return this.control ? this.control.valueChanges : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControlDirective.prototype, "path", {
        /**
         * @description
         * Returns an array that represents the path from the top-level form to this control.
         * Each index is the string name of the control on that level.
         */
        get: function () { return null; },
        enumerable: true,
        configurable: true
    });
    /**
     * @description
     * Resets the control with the provided value if the control is present.
     */
    AbstractControlDirective.prototype.reset = function (value) {
        if (value === void 0) { value = undefined; }
        if (this.control)
            this.control.reset(value);
    };
    /**
     * @description
     * Reports whether the control with the given path has the error specified.
     * If no path is given, it checks for the error on the present control.
     * If the control is not present, false is returned.
     */
    AbstractControlDirective.prototype.hasError = function (errorCode, path) {
        return this.control ? this.control.hasError(errorCode, path) : false;
    };
    /**
     * @description
     * Reports error data for the control with the given path.
     * If the control is not present, null is returned.
     */
    AbstractControlDirective.prototype.getError = function (errorCode, path) {
        return this.control ? this.control.getError(errorCode, path) : null;
    };
    return AbstractControlDirective;
}());

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @description
 * A base class for directives that contain multiple registered instances of `NgControl`.
 * Only used by the forms module.
 */
var ControlContainer = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ControlContainer, _super);
    function ControlContainer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(ControlContainer.prototype, "formDirective", {
        /**
         * @description
         * The top-level form directive for the control.
         */
        get: function () { return null; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ControlContainer.prototype, "path", {
        /**
         * @description
         * The path to this group.
         */
        get: function () { return null; },
        enumerable: true,
        configurable: true
    });
    return ControlContainer;
}(AbstractControlDirective));

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function isEmptyInputValue(value) {
    // we don't check for string here so it also works with arrays
    return value == null || value.length === 0;
}
/**
 * @description
 * An `InjectionToken` for registering additional synchronous validators used with `AbstractControl`s.
 *
 * @see `NG_ASYNC_VALIDATORS`
 *
 * @usageNotes
 *
 * ### Providing a custom validator
 *
 * The following example registers a custom validator directive. Adding the validator to the
 * existing collection of validators requires the `multi: true` option.
 *
 * ```typescript
 * @Directive({
 *   selector: '[customValidator]',
 *   providers: [{provide: NG_VALIDATORS, useExisting: CustomValidatorDirective, multi: true}]
 * })
 * class CustomValidatorDirective implements Validator {
 *   validate(control: AbstractControl): ValidationErrors | null {
 *     return { 'custom': true };
 *   }
 * }
 * ```
 *
 */
var NG_VALIDATORS = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('NgValidators');
/**
 * @description
 * An `InjectionToken` for registering additional asynchronous validators used with `AbstractControl`s.
 *
 * @see `NG_VALIDATORS`
 *
 */
var NG_ASYNC_VALIDATORS = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('NgAsyncValidators');
var EMAIL_REGEXP = /^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$/;
/**
 * @description
 * Provides a set of built-in validators that can be used by form controls.
 *
 * A validator is a function that processes a `FormControl` or collection of
 * controls and returns an error map or null. A null map means that validation has passed.
 *
 * @see [Form Validation](/guide/form-validation)
 *
 */
var Validators = /** @class */ (function () {
    function Validators() {
    }
    /**
     * @description
     * Validator that requires the control's value to be greater than or equal to the provided number.
     * The validator exists only as a function and not as a directive.
     *
     * @usageNotes
     *
     * ### Validate against a minimum of 3
     *
     * ```typescript
     * const control = new FormControl(2, Validators.min(3));
     *
     * console.log(control.errors); // {min: {min: 3, actual: 2}}
     * ```
     *
     * @returns A validator function that returns an error map with the
     * `min` property if the validation check fails, otherwise `null`.
     *
     */
    Validators.min = function (min) {
        return function (control) {
            if (isEmptyInputValue(control.value) || isEmptyInputValue(min)) {
                return null; // don't validate empty values to allow optional controls
            }
            var value = parseFloat(control.value);
            // Controls with NaN values after parsing should be treated as not having a
            // minimum, per the HTML forms spec: https://www.w3.org/TR/html5/forms.html#attr-input-min
            return !isNaN(value) && value < min ? { 'min': { 'min': min, 'actual': control.value } } : null;
        };
    };
    /**
     * @description
     * Validator that requires the control's value to be less than or equal to the provided number.
     * The validator exists only as a function and not as a directive.
     *
     * @usageNotes
     *
     * ### Validate against a maximum of 15
     *
     * ```typescript
     * const control = new FormControl(16, Validators.max(15));
     *
     * console.log(control.errors); // {max: {max: 15, actual: 16}}
     * ```
     *
     * @returns A validator function that returns an error map with the
     * `max` property if the validation check fails, otherwise `null`.
     *
     */
    Validators.max = function (max) {
        return function (control) {
            if (isEmptyInputValue(control.value) || isEmptyInputValue(max)) {
                return null; // don't validate empty values to allow optional controls
            }
            var value = parseFloat(control.value);
            // Controls with NaN values after parsing should be treated as not having a
            // maximum, per the HTML forms spec: https://www.w3.org/TR/html5/forms.html#attr-input-max
            return !isNaN(value) && value > max ? { 'max': { 'max': max, 'actual': control.value } } : null;
        };
    };
    /**
     * @description
     * Validator that requires the control have a non-empty value.
     *
     * @usageNotes
     *
     * ### Validate that the field is non-empty
     *
     * ```typescript
     * const control = new FormControl('', Validators.required);
     *
     * console.log(control.errors); // {required: true}
     * ```
     *
     * @returns An error map with the `required` property
     * if the validation check fails, otherwise `null`.
     *
     */
    Validators.required = function (control) {
        return isEmptyInputValue(control.value) ? { 'required': true } : null;
    };
    /**
     * @description
     * Validator that requires the control's value be true. This validator is commonly
     * used for required checkboxes.
     *
     * @usageNotes
     *
     * ### Validate that the field value is true
     *
     * ```typescript
     * const control = new FormControl('', Validators.requiredTrue);
     *
     * console.log(control.errors); // {required: true}
     * ```
     *
     * @returns An error map that contains the `required` property
     * set to `true` if the validation check fails, otherwise `null`.
     */
    Validators.requiredTrue = function (control) {
        return control.value === true ? null : { 'required': true };
    };
    /**
     * @description
     * Validator that requires the control's value pass an email validation test.
     *
     * @usageNotes
     *
     * ### Validate that the field matches a valid email pattern
     *
     * ```typescript
     * const control = new FormControl('bad@', Validators.email);
     *
     * console.log(control.errors); // {email: true}
     * ```
     *
     * @returns An error map with the `email` property
     * if the validation check fails, otherwise `null`.
     *
     */
    Validators.email = function (control) {
        if (isEmptyInputValue(control.value)) {
            return null; // don't validate empty values to allow optional controls
        }
        return EMAIL_REGEXP.test(control.value) ? null : { 'email': true };
    };
    /**
     * @description
     * Validator that requires the length of the control's value to be greater than or equal
     * to the provided minimum length. This validator is also provided by default if you use the
     * the HTML5 `minlength` attribute.
     *
     * @usageNotes
     *
     * ### Validate that the field has a minimum of 3 characters
     *
     * ```typescript
     * const control = new FormControl('ng', Validators.minLength(3));
     *
     * console.log(control.errors); // {minlength: {requiredLength: 3, actualLength: 2}}
     * ```
     *
     * ```html
     * <input minlength="5">
     * ```
     *
     * @returns A validator function that returns an error map with the
     * `minlength` if the validation check fails, otherwise `null`.
     */
    Validators.minLength = function (minLength) {
        return function (control) {
            if (isEmptyInputValue(control.value)) {
                return null; // don't validate empty values to allow optional controls
            }
            var length = control.value ? control.value.length : 0;
            return length < minLength ?
                { 'minlength': { 'requiredLength': minLength, 'actualLength': length } } :
                null;
        };
    };
    /**
     * @description
     * Validator that requires the length of the control's value to be less than or equal
     * to the provided maximum length. This validator is also provided by default if you use the
     * the HTML5 `maxlength` attribute.
     *
     * @usageNotes
     *
     * ### Validate that the field has maximum of 5 characters
     *
     * ```typescript
     * const control = new FormControl('Angular', Validators.maxLength(5));
     *
     * console.log(control.errors); // {maxlength: {requiredLength: 5, actualLength: 7}}
     * ```
     *
     * ```html
     * <input maxlength="5">
     * ```
     *
     * @returns A validator function that returns an error map with the
     * `maxlength` property if the validation check fails, otherwise `null`.
     */
    Validators.maxLength = function (maxLength) {
        return function (control) {
            var length = control.value ? control.value.length : 0;
            return length > maxLength ?
                { 'maxlength': { 'requiredLength': maxLength, 'actualLength': length } } :
                null;
        };
    };
    /**
     * @description
     * Validator that requires the control's value to match a regex pattern. This validator is also
     * provided
     * by default if you use the HTML5 `pattern` attribute.
     *
     * @usageNotes
     *
     * ### Validate that the field only contains letters or spaces
     *
     * ```typescript
     * const control = new FormControl('1', Validators.pattern('[a-zA-Z ]*'));
     *
     * console.log(control.errors); // {pattern: {requiredPattern: '^[a-zA-Z ]*$', actualValue: '1'}}
     * ```
     *
     * ```html
     * <input pattern="[a-zA-Z ]*">
     * ```
     *
     * @returns A validator function that returns an error map with the
     * `pattern` property if the validation check fails, otherwise `null`.
     */
    Validators.pattern = function (pattern) {
        if (!pattern)
            return Validators.nullValidator;
        var regex;
        var regexStr;
        if (typeof pattern === 'string') {
            regexStr = '';
            if (pattern.charAt(0) !== '^')
                regexStr += '^';
            regexStr += pattern;
            if (pattern.charAt(pattern.length - 1) !== '$')
                regexStr += '$';
            regex = new RegExp(regexStr);
        }
        else {
            regexStr = pattern.toString();
            regex = pattern;
        }
        return function (control) {
            if (isEmptyInputValue(control.value)) {
                return null; // don't validate empty values to allow optional controls
            }
            var value = control.value;
            return regex.test(value) ? null :
                { 'pattern': { 'requiredPattern': regexStr, 'actualValue': value } };
        };
    };
    /**
     * @description
     * Validator that performs no operation.
     */
    Validators.nullValidator = function (control) { return null; };
    Validators.compose = function (validators) {
        if (!validators)
            return null;
        var presentValidators = validators.filter(isPresent);
        if (presentValidators.length == 0)
            return null;
        return function (control) {
            return _mergeErrors(_executeValidators(control, presentValidators));
        };
    };
    /**
     * @description
     * Compose multiple async validators into a single function that returns the union
     * of the individual error objects for the provided control.
     *
     * @returns A validator function that returns an error map with the
     * merged error objects of the async validators if the validation check fails, otherwise `null`.
    */
    Validators.composeAsync = function (validators) {
        if (!validators)
            return null;
        var presentValidators = validators.filter(isPresent);
        if (presentValidators.length == 0)
            return null;
        return function (control) {
            var observables = _executeAsyncValidators(control, presentValidators).map(toObservable);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["forkJoin"])(observables).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(_mergeErrors));
        };
    };
    return Validators;
}());
function isPresent(o) {
    return o != null;
}
function toObservable(r) {
    var obs = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵisPromise"])(r) ? Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(r) : r;
    if (!(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵisObservable"])(obs))) {
        throw new Error("Expected validator to return Promise or Observable.");
    }
    return obs;
}
function _executeValidators(control, validators) {
    return validators.map(function (v) { return v(control); });
}
function _executeAsyncValidators(control, validators) {
    return validators.map(function (v) { return v(control); });
}
function _mergeErrors(arrayOfErrors) {
    var res = arrayOfErrors.reduce(function (res, errors) {
        return errors != null ? Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, res, errors) : res;
    }, {});
    return Object.keys(res).length === 0 ? null : res;
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Used to provide a `ControlValueAccessor` for form controls.
 *
 * See `DefaultValueAccessor` for how to implement one.
 *
 */
var NG_VALUE_ACCESSOR = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('NgValueAccessor');

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var CHECKBOX_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return CheckboxControlValueAccessor; }),
    multi: true,
};
/**
 * The accessor for writing a value and listening to changes on a checkbox input element.
 *
 * @usageNotes
 * ### Example
 *
 * ```
 * <input type="checkbox" name="rememberLogin" ngModel>
 * ```
 *
 * @ngModule FormsModule
 * @ngModule ReactiveFormsModule
 */
var CheckboxControlValueAccessor = /** @class */ (function () {
    function CheckboxControlValueAccessor(_renderer, _elementRef) {
        this._renderer = _renderer;
        this._elementRef = _elementRef;
        this.onChange = function (_) { };
        this.onTouched = function () { };
    }
    CheckboxControlValueAccessor.prototype.writeValue = function (value) {
        this._renderer.setProperty(this._elementRef.nativeElement, 'checked', value);
    };
    CheckboxControlValueAccessor.prototype.registerOnChange = function (fn) { this.onChange = fn; };
    CheckboxControlValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
    CheckboxControlValueAccessor.prototype.setDisabledState = function (isDisabled) {
        this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
    };
    CheckboxControlValueAccessor = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: 'input[type=checkbox][formControlName],input[type=checkbox][formControl],input[type=checkbox][ngModel]',
            host: { '(change)': 'onChange($event.target.checked)', '(blur)': 'onTouched()' },
            providers: [CHECKBOX_VALUE_ACCESSOR]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], CheckboxControlValueAccessor);
    return CheckboxControlValueAccessor;
}());

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var DEFAULT_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return DefaultValueAccessor; }),
    multi: true
};
/**
 * We must check whether the agent is Android because composition events
 * behave differently between iOS and Android.
 */
function _isAndroid() {
    var userAgent = Object(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["ɵgetDOM"])() ? Object(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["ɵgetDOM"])().getUserAgent() : '';
    return /android (\d+)/.test(userAgent.toLowerCase());
}
/**
 * Turn this mode on if you want form directives to buffer IME input until compositionend
 * @experimental
 */
var COMPOSITION_BUFFER_MODE = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('CompositionEventMode');
/**
 * The default accessor for writing a value and listening to changes that is used by the
 * `NgModel`, `FormControlDirective`, and `FormControlName` directives.
 *
 * @usageNotes
 * ### Example
 *
 * ```
 * <input type="text" name="searchQuery" ngModel>
 * ```
 *
 * @ngModule FormsModule
 * @ngModule ReactiveFormsModule
 */
var DefaultValueAccessor = /** @class */ (function () {
    function DefaultValueAccessor(_renderer, _elementRef, _compositionMode) {
        this._renderer = _renderer;
        this._elementRef = _elementRef;
        this._compositionMode = _compositionMode;
        this.onChange = function (_) { };
        this.onTouched = function () { };
        /** Whether the user is creating a composition string (IME events). */
        this._composing = false;
        if (this._compositionMode == null) {
            this._compositionMode = !_isAndroid();
        }
    }
    DefaultValueAccessor.prototype.writeValue = function (value) {
        var normalizedValue = value == null ? '' : value;
        this._renderer.setProperty(this._elementRef.nativeElement, 'value', normalizedValue);
    };
    DefaultValueAccessor.prototype.registerOnChange = function (fn) { this.onChange = fn; };
    DefaultValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
    DefaultValueAccessor.prototype.setDisabledState = function (isDisabled) {
        this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
    };
    /** @internal */
    DefaultValueAccessor.prototype._handleInput = function (value) {
        if (!this._compositionMode || (this._compositionMode && !this._composing)) {
            this.onChange(value);
        }
    };
    /** @internal */
    DefaultValueAccessor.prototype._compositionStart = function () { this._composing = true; };
    /** @internal */
    DefaultValueAccessor.prototype._compositionEnd = function (value) {
        this._composing = false;
        this._compositionMode && this.onChange(value);
    };
    DefaultValueAccessor = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: 'input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]',
            // TODO: vsavkin replace the above selector with the one below it once
            // https://github.com/angular/angular/issues/3011 is implemented
            // selector: '[ngModel],[formControl],[formControlName]',
            host: {
                '(input)': '$any(this)._handleInput($event.target.value)',
                '(blur)': 'onTouched()',
                '(compositionstart)': '$any(this)._compositionStart()',
                '(compositionend)': '$any(this)._compositionEnd($event.target.value)'
            },
            providers: [DEFAULT_VALUE_ACCESSOR]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(COMPOSITION_BUFFER_MODE)),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], Boolean])
    ], DefaultValueAccessor);
    return DefaultValueAccessor;
}());

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function normalizeValidator(validator) {
    if (validator.validate) {
        return function (c) { return validator.validate(c); };
    }
    else {
        return validator;
    }
}
function normalizeAsyncValidator(validator) {
    if (validator.validate) {
        return function (c) { return validator.validate(c); };
    }
    else {
        return validator;
    }
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var NUMBER_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return NumberValueAccessor; }),
    multi: true
};
/**
 * The accessor for writing a number value and listening to changes that is used by the
 * `NgModel`, `FormControlDirective`, and `FormControlName` directives.
 *
 * @usageNotes
 * ### Example
 *
 * ```
 * <input type="number" [(ngModel)]="age">
 * ```
 *
 * @ngModule FormsModule
 * @ngModule ReactiveFormsModule
 */
var NumberValueAccessor = /** @class */ (function () {
    function NumberValueAccessor(_renderer, _elementRef) {
        this._renderer = _renderer;
        this._elementRef = _elementRef;
        this.onChange = function (_) { };
        this.onTouched = function () { };
    }
    NumberValueAccessor.prototype.writeValue = function (value) {
        // The value needs to be normalized for IE9, otherwise it is set to 'null' when null
        var normalizedValue = value == null ? '' : value;
        this._renderer.setProperty(this._elementRef.nativeElement, 'value', normalizedValue);
    };
    NumberValueAccessor.prototype.registerOnChange = function (fn) {
        this.onChange = function (value) { fn(value == '' ? null : parseFloat(value)); };
    };
    NumberValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
    NumberValueAccessor.prototype.setDisabledState = function (isDisabled) {
        this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
    };
    NumberValueAccessor = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: 'input[type=number][formControlName],input[type=number][formControl],input[type=number][ngModel]',
            host: {
                '(change)': 'onChange($event.target.value)',
                '(input)': 'onChange($event.target.value)',
                '(blur)': 'onTouched()'
            },
            providers: [NUMBER_VALUE_ACCESSOR]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], NumberValueAccessor);
    return NumberValueAccessor;
}());

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function unimplemented() {
    throw new Error('unimplemented');
}
/**
 * @description
 * A base class that all control `FormControl`-based directives extend. It binds a `FormControl`
 * object to a DOM element.
 */
var NgControl = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(NgControl, _super);
    function NgControl() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * @description
         * The parent form for the control.
         *
         * @internal
         */
        _this._parent = null;
        /**
         * @description
         * The name for the control
         */
        _this.name = null;
        /**
         * @description
         * The value accessor for the control
         */
        _this.valueAccessor = null;
        /**
         * @description
         * The uncomposed array of synchronous validators for the control
         *
         * @internal
         */
        _this._rawValidators = [];
        /**
         * @description
         * The uncomposed array of async validators for the control
         *
         * @internal
         */
        _this._rawAsyncValidators = [];
        return _this;
    }
    Object.defineProperty(NgControl.prototype, "validator", {
        /**
         * @description
         * The registered synchronous validator function for the control
         *
         * @throws An exception that this method is not implemented
         */
        get: function () { return unimplemented(); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgControl.prototype, "asyncValidator", {
        /**
         * @description
         * The registered async validator function for the control
         *
         * @throws An exception that this method is not implemented
         */
        get: function () { return unimplemented(); },
        enumerable: true,
        configurable: true
    });
    return NgControl;
}(AbstractControlDirective));

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var RADIO_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return RadioControlValueAccessor; }),
    multi: true
};
/**
 * Internal class used by Angular to uncheck radio buttons with the matching name.
 */
var RadioControlRegistry = /** @class */ (function () {
    function RadioControlRegistry() {
        this._accessors = [];
    }
    RadioControlRegistry.prototype.add = function (control, accessor) {
        this._accessors.push([control, accessor]);
    };
    RadioControlRegistry.prototype.remove = function (accessor) {
        for (var i = this._accessors.length - 1; i >= 0; --i) {
            if (this._accessors[i][1] === accessor) {
                this._accessors.splice(i, 1);
                return;
            }
        }
    };
    RadioControlRegistry.prototype.select = function (accessor) {
        var _this = this;
        this._accessors.forEach(function (c) {
            if (_this._isSameGroup(c, accessor) && c[1] !== accessor) {
                c[1].fireUncheck(accessor.value);
            }
        });
    };
    RadioControlRegistry.prototype._isSameGroup = function (controlPair, accessor) {
        if (!controlPair[0].control)
            return false;
        return controlPair[0]._parent === accessor._control._parent &&
            controlPair[1].name === accessor.name;
    };
    RadioControlRegistry = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], RadioControlRegistry);
    return RadioControlRegistry;
}());
/**
 * @description
 *
 * Writes radio control values and listens to radio control changes.
 *
 * Used by `NgModel`, `FormControlDirective`, and `FormControlName`
 * to keep the view synced with the `FormControl` model.
 *
 * If you have imported the `FormsModule` or the `ReactiveFormsModule`, this
 * value accessor will be active on any radio control that has a form directive. You do
 * **not** need to add a special selector to activate it.
 *
 * @usageNotes
 * ### How to use radio buttons with form directives
 *
 * To use radio buttons in a template-driven form, you'll want to ensure that radio buttons
 * in the same group have the same `name` attribute.  Radio buttons with different `name`
 * attributes do not affect each other.
 *
 * {@example forms/ts/radioButtons/radio_button_example.ts region='TemplateDriven'}
 *
 * When using radio buttons in a reactive form, radio buttons in the same group should have the
 * same `formControlName`. You can also add a `name` attribute, but it's optional.
 *
 * {@example forms/ts/reactiveRadioButtons/reactive_radio_button_example.ts region='Reactive'}
 *
 * @ngModule FormsModule
 * @ngModule ReactiveFormsModule
 */
var RadioControlValueAccessor = /** @class */ (function () {
    function RadioControlValueAccessor(_renderer, _elementRef, _registry, _injector) {
        this._renderer = _renderer;
        this._elementRef = _elementRef;
        this._registry = _registry;
        this._injector = _injector;
        this.onChange = function () { };
        this.onTouched = function () { };
    }
    RadioControlValueAccessor.prototype.ngOnInit = function () {
        this._control = this._injector.get(NgControl);
        this._checkName();
        this._registry.add(this._control, this);
    };
    RadioControlValueAccessor.prototype.ngOnDestroy = function () { this._registry.remove(this); };
    RadioControlValueAccessor.prototype.writeValue = function (value) {
        this._state = value === this.value;
        this._renderer.setProperty(this._elementRef.nativeElement, 'checked', this._state);
    };
    RadioControlValueAccessor.prototype.registerOnChange = function (fn) {
        var _this = this;
        this._fn = fn;
        this.onChange = function () {
            fn(_this.value);
            _this._registry.select(_this);
        };
    };
    RadioControlValueAccessor.prototype.fireUncheck = function (value) { this.writeValue(value); };
    RadioControlValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
    RadioControlValueAccessor.prototype.setDisabledState = function (isDisabled) {
        this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
    };
    RadioControlValueAccessor.prototype._checkName = function () {
        if (this.name && this.formControlName && this.name !== this.formControlName) {
            this._throwNameError();
        }
        if (!this.name && this.formControlName)
            this.name = this.formControlName;
    };
    RadioControlValueAccessor.prototype._throwNameError = function () {
        throw new Error("\n      If you define both a name and a formControlName attribute on your radio button, their values\n      must match. Ex: <input type=\"radio\" formControlName=\"food\" name=\"food\">\n    ");
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
    ], RadioControlValueAccessor.prototype, "name", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
    ], RadioControlValueAccessor.prototype, "formControlName", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], RadioControlValueAccessor.prototype, "value", void 0);
    RadioControlValueAccessor = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: 'input[type=radio][formControlName],input[type=radio][formControl],input[type=radio][ngModel]',
            host: { '(change)': 'onChange()', '(blur)': 'onTouched()' },
            providers: [RADIO_VALUE_ACCESSOR]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
            RadioControlRegistry, _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]])
    ], RadioControlValueAccessor);
    return RadioControlValueAccessor;
}());

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var RANGE_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return RangeValueAccessor; }),
    multi: true
};
/**
 * The accessor for writing a range value and listening to changes that is used by the
 * `NgModel`, `FormControlDirective`, and `FormControlName` directives.
 *
 * @usageNotes
 * ### Example
 *
 * ```
 * <input type="range" [(ngModel)]="age" >
 * ```
 *
 * @ngModule FormsModule
 * @ngModule ReactiveFormsModule
 */
var RangeValueAccessor = /** @class */ (function () {
    function RangeValueAccessor(_renderer, _elementRef) {
        this._renderer = _renderer;
        this._elementRef = _elementRef;
        this.onChange = function (_) { };
        this.onTouched = function () { };
    }
    RangeValueAccessor.prototype.writeValue = function (value) {
        this._renderer.setProperty(this._elementRef.nativeElement, 'value', parseFloat(value));
    };
    RangeValueAccessor.prototype.registerOnChange = function (fn) {
        this.onChange = function (value) { fn(value == '' ? null : parseFloat(value)); };
    };
    RangeValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
    RangeValueAccessor.prototype.setDisabledState = function (isDisabled) {
        this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
    };
    RangeValueAccessor = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: 'input[type=range][formControlName],input[type=range][formControl],input[type=range][ngModel]',
            host: {
                '(change)': 'onChange($event.target.value)',
                '(input)': 'onChange($event.target.value)',
                '(blur)': 'onTouched()'
            },
            providers: [RANGE_VALUE_ACCESSOR]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], RangeValueAccessor);
    return RangeValueAccessor;
}());

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var FormErrorExamples = {
    formControlName: "\n    <div [formGroup]=\"myGroup\">\n      <input formControlName=\"firstName\">\n    </div>\n\n    In your class:\n\n    this.myGroup = new FormGroup({\n       firstName: new FormControl()\n    });",
    formGroupName: "\n    <div [formGroup]=\"myGroup\">\n       <div formGroupName=\"person\">\n          <input formControlName=\"firstName\">\n       </div>\n    </div>\n\n    In your class:\n\n    this.myGroup = new FormGroup({\n       person: new FormGroup({ firstName: new FormControl() })\n    });",
    formArrayName: "\n    <div [formGroup]=\"myGroup\">\n      <div formArrayName=\"cities\">\n        <div *ngFor=\"let city of cityArray.controls; index as i\">\n          <input [formControlName]=\"i\">\n        </div>\n      </div>\n    </div>\n\n    In your class:\n\n    this.cityArray = new FormArray([new FormControl('SF')]);\n    this.myGroup = new FormGroup({\n      cities: this.cityArray\n    });",
    ngModelGroup: "\n    <form>\n       <div ngModelGroup=\"person\">\n          <input [(ngModel)]=\"person.name\" name=\"firstName\">\n       </div>\n    </form>",
    ngModelWithFormGroup: "\n    <div [formGroup]=\"myGroup\">\n       <input formControlName=\"firstName\">\n       <input [(ngModel)]=\"showMoreControls\" [ngModelOptions]=\"{standalone: true}\">\n    </div>\n  "
};

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var ReactiveErrors = /** @class */ (function () {
    function ReactiveErrors() {
    }
    ReactiveErrors.controlParentException = function () {
        throw new Error("formControlName must be used with a parent formGroup directive.  You'll want to add a formGroup\n       directive and pass it an existing FormGroup instance (you can create one in your class).\n\n      Example:\n\n      " + FormErrorExamples.formControlName);
    };
    ReactiveErrors.ngModelGroupException = function () {
        throw new Error("formControlName cannot be used with an ngModelGroup parent. It is only compatible with parents\n       that also have a \"form\" prefix: formGroupName, formArrayName, or formGroup.\n\n       Option 1:  Update the parent to be formGroupName (reactive form strategy)\n\n        " + FormErrorExamples.formGroupName + "\n\n        Option 2: Use ngModel instead of formControlName (template-driven strategy)\n\n        " + FormErrorExamples.ngModelGroup);
    };
    ReactiveErrors.missingFormException = function () {
        throw new Error("formGroup expects a FormGroup instance. Please pass one in.\n\n       Example:\n\n       " + FormErrorExamples.formControlName);
    };
    ReactiveErrors.groupParentException = function () {
        throw new Error("formGroupName must be used with a parent formGroup directive.  You'll want to add a formGroup\n      directive and pass it an existing FormGroup instance (you can create one in your class).\n\n      Example:\n\n      " + FormErrorExamples.formGroupName);
    };
    ReactiveErrors.arrayParentException = function () {
        throw new Error("formArrayName must be used with a parent formGroup directive.  You'll want to add a formGroup\n       directive and pass it an existing FormGroup instance (you can create one in your class).\n\n        Example:\n\n        " + FormErrorExamples.formArrayName);
    };
    ReactiveErrors.disabledAttrWarning = function () {
        console.warn("\n      It looks like you're using the disabled attribute with a reactive form directive. If you set disabled to true\n      when you set up this control in your component class, the disabled attribute will actually be set in the DOM for\n      you. We recommend using this approach to avoid 'changed after checked' errors.\n       \n      Example: \n      form = new FormGroup({\n        first: new FormControl({value: 'Nancy', disabled: true}, Validators.required),\n        last: new FormControl('Drew', Validators.required)\n      });\n    ");
    };
    ReactiveErrors.ngModelWarning = function (directiveName) {
        console.warn("\n    It looks like you're using ngModel on the same form field as " + directiveName + ". \n    Support for using the ngModel input property and ngModelChange event with \n    reactive form directives has been deprecated in Angular v6 and will be removed \n    in Angular v7.\n    \n    For more information on this, see our API docs here:\n    https://angular.io/api/forms/" + (directiveName === 'formControl' ? 'FormControlDirective'
            : 'FormControlName') + "#use-with-ngmodel\n    ");
    };
    return ReactiveErrors;
}());

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var SELECT_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return SelectControlValueAccessor; }),
    multi: true
};
function _buildValueString(id, value) {
    if (id == null)
        return "" + value;
    if (value && typeof value === 'object')
        value = 'Object';
    return (id + ": " + value).slice(0, 50);
}
function _extractId(valueString) {
    return valueString.split(':')[0];
}
/**
 * @description
 *
 * Writes values and listens to changes on a select element.
 *
 * Used by `NgModel`, `FormControlDirective`, and `FormControlName`
 * to keep the view synced with the `FormControl` model.
 *
 * If you have imported the `FormsModule` or the `ReactiveFormsModule`, this
 * value accessor will be active on any select control that has a form directive. You do
 * **not** need to add a special selector to activate it.
 *
 * @usageNotes
 * ### How to use select controls with form directives
 *
 * To use a select in a template-driven form, simply add an `ngModel` and a `name`
 * attribute to the main `<select>` tag.
 *
 * If your option values are simple strings, you can bind to the normal `value` property
 * on the option.  If your option values happen to be objects (and you'd like to save the
 * selection in your form as an object), use `ngValue` instead:
 *
 * {@example forms/ts/selectControl/select_control_example.ts region='Component'}
 *
 * In reactive forms, you'll also want to add your form directive (`formControlName` or
 * `formControl`) on the main `<select>` tag. Like in the former example, you have the
 * choice of binding to the  `value` or `ngValue` property on the select's options.
 *
 * {@example forms/ts/reactiveSelectControl/reactive_select_control_example.ts region='Component'}
 *
 * ### Caveat: Option selection
 *
 * Angular uses object identity to select option. It's possible for the identities of items
 * to change while the data does not. This can happen, for example, if the items are produced
 * from an RPC to the server, and that RPC is re-run. Even if the data hasn't changed, the
 * second response will produce objects with different identities.
 *
 * To customize the default option comparison algorithm, `<select>` supports `compareWith` input.
 * `compareWith` takes a **function** which has two arguments: `option1` and `option2`.
 * If `compareWith` is given, Angular selects option by the return value of the function.
 *
 * ### Syntax
 *
 * ```
 * <select [compareWith]="compareFn"  [(ngModel)]="selectedCountries">
 *     <option *ngFor="let country of countries" [ngValue]="country">
 *         {{country.name}}
 *     </option>
 * </select>
 *
 * compareFn(c1: Country, c2: Country): boolean {
 *     return c1 && c2 ? c1.id === c2.id : c1 === c2;
 * }
 * ```
 *
 * Note: We listen to the 'change' event because 'input' events aren't fired
 * for selects in Firefox and IE:
 * https://bugzilla.mozilla.org/show_bug.cgi?id=1024350
 * https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/4660045/
 *
 * @ngModule FormsModule
 * @ngModule ReactiveFormsModule
 */
var SelectControlValueAccessor = /** @class */ (function () {
    function SelectControlValueAccessor(_renderer, _elementRef) {
        this._renderer = _renderer;
        this._elementRef = _elementRef;
        /** @internal */
        this._optionMap = new Map();
        /** @internal */
        this._idCounter = 0;
        this.onChange = function (_) { };
        this.onTouched = function () { };
        this._compareWith = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵlooseIdentical"];
    }
    Object.defineProperty(SelectControlValueAccessor.prototype, "compareWith", {
        set: function (fn) {
            if (typeof fn !== 'function') {
                throw new Error("compareWith must be a function, but received " + JSON.stringify(fn));
            }
            this._compareWith = fn;
        },
        enumerable: true,
        configurable: true
    });
    SelectControlValueAccessor.prototype.writeValue = function (value) {
        this.value = value;
        var id = this._getOptionId(value);
        if (id == null) {
            this._renderer.setProperty(this._elementRef.nativeElement, 'selectedIndex', -1);
        }
        var valueString = _buildValueString(id, value);
        this._renderer.setProperty(this._elementRef.nativeElement, 'value', valueString);
    };
    SelectControlValueAccessor.prototype.registerOnChange = function (fn) {
        var _this = this;
        this.onChange = function (valueString) {
            _this.value = _this._getOptionValue(valueString);
            fn(_this.value);
        };
    };
    SelectControlValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
    SelectControlValueAccessor.prototype.setDisabledState = function (isDisabled) {
        this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
    };
    /** @internal */
    SelectControlValueAccessor.prototype._registerOption = function () { return (this._idCounter++).toString(); };
    /** @internal */
    SelectControlValueAccessor.prototype._getOptionId = function (value) {
        var e_1, _a;
        try {
            for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(Array.from(this._optionMap.keys())), _c = _b.next(); !_c.done; _c = _b.next()) {
                var id = _c.value;
                if (this._compareWith(this._optionMap.get(id), value))
                    return id;
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return null;
    };
    /** @internal */
    SelectControlValueAccessor.prototype._getOptionValue = function (valueString) {
        var id = _extractId(valueString);
        return this._optionMap.has(id) ? this._optionMap.get(id) : valueString;
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Function])
    ], SelectControlValueAccessor.prototype, "compareWith", null);
    SelectControlValueAccessor = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: 'select:not([multiple])[formControlName],select:not([multiple])[formControl],select:not([multiple])[ngModel]',
            host: { '(change)': 'onChange($event.target.value)', '(blur)': 'onTouched()' },
            providers: [SELECT_VALUE_ACCESSOR]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], SelectControlValueAccessor);
    return SelectControlValueAccessor;
}());
/**
 * @description
 *
 * Marks `<option>` as dynamic, so Angular can be notified when options change.
 *
 * See docs for `SelectControlValueAccessor` for usage examples.
 *
 * @ngModule FormsModule
 * @ngModule ReactiveFormsModule
 */
var NgSelectOption = /** @class */ (function () {
    function NgSelectOption(_element, _renderer, _select) {
        this._element = _element;
        this._renderer = _renderer;
        this._select = _select;
        if (this._select)
            this.id = this._select._registerOption();
    }
    Object.defineProperty(NgSelectOption.prototype, "ngValue", {
        set: function (value) {
            if (this._select == null)
                return;
            this._select._optionMap.set(this.id, value);
            this._setElementValue(_buildValueString(this.id, value));
            this._select.writeValue(this._select.value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgSelectOption.prototype, "value", {
        set: function (value) {
            this._setElementValue(value);
            if (this._select)
                this._select.writeValue(this._select.value);
        },
        enumerable: true,
        configurable: true
    });
    /** @internal */
    NgSelectOption.prototype._setElementValue = function (value) {
        this._renderer.setProperty(this._element.nativeElement, 'value', value);
    };
    NgSelectOption.prototype.ngOnDestroy = function () {
        if (this._select) {
            this._select._optionMap.delete(this.id);
            this._select.writeValue(this._select.value);
        }
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('ngValue'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object])
    ], NgSelectOption.prototype, "ngValue", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('value'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object])
    ], NgSelectOption.prototype, "value", null);
    NgSelectOption = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({ selector: 'option' }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Host"])()),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"],
            SelectControlValueAccessor])
    ], NgSelectOption);
    return NgSelectOption;
}());

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var SELECT_MULTIPLE_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return SelectMultipleControlValueAccessor; }),
    multi: true
};
function _buildValueString$1(id, value) {
    if (id == null)
        return "" + value;
    if (typeof value === 'string')
        value = "'" + value + "'";
    if (value && typeof value === 'object')
        value = 'Object';
    return (id + ": " + value).slice(0, 50);
}
function _extractId$1(valueString) {
    return valueString.split(':')[0];
}
/**
 * The accessor for writing a value and listening to changes on a select element.
 *
 * @usageNotes
 * ### Caveat: Options selection
 *
 * Angular uses object identity to select options. It's possible for the identities of items
 * to change while the data does not. This can happen, for example, if the items are produced
 * from an RPC to the server, and that RPC is re-run. Even if the data hasn't changed, the
 * second response will produce objects with different identities.
 *
 * To customize the default option comparison algorithm, `<select multiple>` supports `compareWith`
 * input. `compareWith` takes a **function** which has two arguments: `option1` and `option2`.
 * If `compareWith` is given, Angular selects options by the return value of the function.
 *
 * ### Syntax
 *
 * ```
 * <select multiple [compareWith]="compareFn"  [(ngModel)]="selectedCountries">
 *     <option *ngFor="let country of countries" [ngValue]="country">
 *         {{country.name}}
 *     </option>
 * </select>
 *
 * compareFn(c1: Country, c2: Country): boolean {
 *     return c1 && c2 ? c1.id === c2.id : c1 === c2;
 * }
 * ```
 *
 * @ngModule ReactiveFormsModule
 * @ngModule FormsModule
 */
var SelectMultipleControlValueAccessor = /** @class */ (function () {
    function SelectMultipleControlValueAccessor(_renderer, _elementRef) {
        this._renderer = _renderer;
        this._elementRef = _elementRef;
        /** @internal */
        this._optionMap = new Map();
        /** @internal */
        this._idCounter = 0;
        this.onChange = function (_) { };
        this.onTouched = function () { };
        this._compareWith = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵlooseIdentical"];
    }
    Object.defineProperty(SelectMultipleControlValueAccessor.prototype, "compareWith", {
        set: function (fn) {
            if (typeof fn !== 'function') {
                throw new Error("compareWith must be a function, but received " + JSON.stringify(fn));
            }
            this._compareWith = fn;
        },
        enumerable: true,
        configurable: true
    });
    SelectMultipleControlValueAccessor.prototype.writeValue = function (value) {
        var _this = this;
        this.value = value;
        var optionSelectedStateSetter;
        if (Array.isArray(value)) {
            // convert values to ids
            var ids_1 = value.map(function (v) { return _this._getOptionId(v); });
            optionSelectedStateSetter = function (opt, o) { opt._setSelected(ids_1.indexOf(o.toString()) > -1); };
        }
        else {
            optionSelectedStateSetter = function (opt, o) { opt._setSelected(false); };
        }
        this._optionMap.forEach(optionSelectedStateSetter);
    };
    SelectMultipleControlValueAccessor.prototype.registerOnChange = function (fn) {
        var _this = this;
        this.onChange = function (_) {
            var selected = [];
            if (_.hasOwnProperty('selectedOptions')) {
                var options = _.selectedOptions;
                for (var i = 0; i < options.length; i++) {
                    var opt = options.item(i);
                    var val = _this._getOptionValue(opt.value);
                    selected.push(val);
                }
            }
            // Degrade on IE
            else {
                var options = _.options;
                for (var i = 0; i < options.length; i++) {
                    var opt = options.item(i);
                    if (opt.selected) {
                        var val = _this._getOptionValue(opt.value);
                        selected.push(val);
                    }
                }
            }
            _this.value = selected;
            fn(selected);
        };
    };
    SelectMultipleControlValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
    SelectMultipleControlValueAccessor.prototype.setDisabledState = function (isDisabled) {
        this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
    };
    /** @internal */
    SelectMultipleControlValueAccessor.prototype._registerOption = function (value) {
        var id = (this._idCounter++).toString();
        this._optionMap.set(id, value);
        return id;
    };
    /** @internal */
    SelectMultipleControlValueAccessor.prototype._getOptionId = function (value) {
        var e_1, _a;
        try {
            for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(Array.from(this._optionMap.keys())), _c = _b.next(); !_c.done; _c = _b.next()) {
                var id = _c.value;
                if (this._compareWith(this._optionMap.get(id)._value, value))
                    return id;
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return null;
    };
    /** @internal */
    SelectMultipleControlValueAccessor.prototype._getOptionValue = function (valueString) {
        var id = _extractId$1(valueString);
        return this._optionMap.has(id) ? this._optionMap.get(id)._value : valueString;
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Function])
    ], SelectMultipleControlValueAccessor.prototype, "compareWith", null);
    SelectMultipleControlValueAccessor = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: 'select[multiple][formControlName],select[multiple][formControl],select[multiple][ngModel]',
            host: { '(change)': 'onChange($event.target)', '(blur)': 'onTouched()' },
            providers: [SELECT_MULTIPLE_VALUE_ACCESSOR]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], SelectMultipleControlValueAccessor);
    return SelectMultipleControlValueAccessor;
}());
/**
 * Marks `<option>` as dynamic, so Angular can be notified when options change.
 *
 * @usageNotes
 * ### Example
 *
 * ```
 * <select multiple name="city" ngModel>
 *   <option *ngFor="let c of cities" [value]="c"></option>
 * </select>
 * ```
 * @ngModule FormsModule
 * @ngModule ReactiveFormsModule
 */
var NgSelectMultipleOption = /** @class */ (function () {
    function NgSelectMultipleOption(_element, _renderer, _select) {
        this._element = _element;
        this._renderer = _renderer;
        this._select = _select;
        if (this._select) {
            this.id = this._select._registerOption(this);
        }
    }
    Object.defineProperty(NgSelectMultipleOption.prototype, "ngValue", {
        set: function (value) {
            if (this._select == null)
                return;
            this._value = value;
            this._setElementValue(_buildValueString$1(this.id, value));
            this._select.writeValue(this._select.value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgSelectMultipleOption.prototype, "value", {
        set: function (value) {
            if (this._select) {
                this._value = value;
                this._setElementValue(_buildValueString$1(this.id, value));
                this._select.writeValue(this._select.value);
            }
            else {
                this._setElementValue(value);
            }
        },
        enumerable: true,
        configurable: true
    });
    /** @internal */
    NgSelectMultipleOption.prototype._setElementValue = function (value) {
        this._renderer.setProperty(this._element.nativeElement, 'value', value);
    };
    /** @internal */
    NgSelectMultipleOption.prototype._setSelected = function (selected) {
        this._renderer.setProperty(this._element.nativeElement, 'selected', selected);
    };
    NgSelectMultipleOption.prototype.ngOnDestroy = function () {
        if (this._select) {
            this._select._optionMap.delete(this.id);
            this._select.writeValue(this._select.value);
        }
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('ngValue'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object])
    ], NgSelectMultipleOption.prototype, "ngValue", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('value'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object])
    ], NgSelectMultipleOption.prototype, "value", null);
    NgSelectMultipleOption = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({ selector: 'option' }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Host"])()),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"],
            SelectMultipleControlValueAccessor])
    ], NgSelectMultipleOption);
    return NgSelectMultipleOption;
}());

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function controlPath(name, parent) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(parent.path, [name]);
}
function setUpControl(control, dir) {
    if (!control)
        _throwError(dir, 'Cannot find control with');
    if (!dir.valueAccessor)
        _throwError(dir, 'No value accessor for form control with');
    control.validator = Validators.compose([control.validator, dir.validator]);
    control.asyncValidator = Validators.composeAsync([control.asyncValidator, dir.asyncValidator]);
    dir.valueAccessor.writeValue(control.value);
    setUpViewChangePipeline(control, dir);
    setUpModelChangePipeline(control, dir);
    setUpBlurPipeline(control, dir);
    if (dir.valueAccessor.setDisabledState) {
        control.registerOnDisabledChange(function (isDisabled) { dir.valueAccessor.setDisabledState(isDisabled); });
    }
    // re-run validation when validator binding changes, e.g. minlength=3 -> minlength=4
    dir._rawValidators.forEach(function (validator) {
        if (validator.registerOnValidatorChange)
            validator.registerOnValidatorChange(function () { return control.updateValueAndValidity(); });
    });
    dir._rawAsyncValidators.forEach(function (validator) {
        if (validator.registerOnValidatorChange)
            validator.registerOnValidatorChange(function () { return control.updateValueAndValidity(); });
    });
}
function cleanUpControl(control, dir) {
    dir.valueAccessor.registerOnChange(function () { return _noControlError(dir); });
    dir.valueAccessor.registerOnTouched(function () { return _noControlError(dir); });
    dir._rawValidators.forEach(function (validator) {
        if (validator.registerOnValidatorChange) {
            validator.registerOnValidatorChange(null);
        }
    });
    dir._rawAsyncValidators.forEach(function (validator) {
        if (validator.registerOnValidatorChange) {
            validator.registerOnValidatorChange(null);
        }
    });
    if (control)
        control._clearChangeFns();
}
function setUpViewChangePipeline(control, dir) {
    dir.valueAccessor.registerOnChange(function (newValue) {
        control._pendingValue = newValue;
        control._pendingChange = true;
        control._pendingDirty = true;
        if (control.updateOn === 'change')
            updateControl(control, dir);
    });
}
function setUpBlurPipeline(control, dir) {
    dir.valueAccessor.registerOnTouched(function () {
        control._pendingTouched = true;
        if (control.updateOn === 'blur' && control._pendingChange)
            updateControl(control, dir);
        if (control.updateOn !== 'submit')
            control.markAsTouched();
    });
}
function updateControl(control, dir) {
    if (control._pendingDirty)
        control.markAsDirty();
    control.setValue(control._pendingValue, { emitModelToViewChange: false });
    dir.viewToModelUpdate(control._pendingValue);
    control._pendingChange = false;
}
function setUpModelChangePipeline(control, dir) {
    control.registerOnChange(function (newValue, emitModelEvent) {
        // control -> view
        dir.valueAccessor.writeValue(newValue);
        // control -> ngModel
        if (emitModelEvent)
            dir.viewToModelUpdate(newValue);
    });
}
function setUpFormContainer(control, dir) {
    if (control == null)
        _throwError(dir, 'Cannot find control with');
    control.validator = Validators.compose([control.validator, dir.validator]);
    control.asyncValidator = Validators.composeAsync([control.asyncValidator, dir.asyncValidator]);
}
function _noControlError(dir) {
    return _throwError(dir, 'There is no FormControl instance attached to form control element with');
}
function _throwError(dir, message) {
    var messageEnd;
    if (dir.path.length > 1) {
        messageEnd = "path: '" + dir.path.join(' -> ') + "'";
    }
    else if (dir.path[0]) {
        messageEnd = "name: '" + dir.path + "'";
    }
    else {
        messageEnd = 'unspecified name attribute';
    }
    throw new Error(message + " " + messageEnd);
}
function composeValidators(validators) {
    return validators != null ? Validators.compose(validators.map(normalizeValidator)) : null;
}
function composeAsyncValidators(validators) {
    return validators != null ? Validators.composeAsync(validators.map(normalizeAsyncValidator)) :
        null;
}
function isPropertyUpdated(changes, viewModel) {
    if (!changes.hasOwnProperty('model'))
        return false;
    var change = changes['model'];
    if (change.isFirstChange())
        return true;
    return !Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵlooseIdentical"])(viewModel, change.currentValue);
}
var BUILTIN_ACCESSORS = [
    CheckboxControlValueAccessor,
    RangeValueAccessor,
    NumberValueAccessor,
    SelectControlValueAccessor,
    SelectMultipleControlValueAccessor,
    RadioControlValueAccessor,
];
function isBuiltInAccessor(valueAccessor) {
    return BUILTIN_ACCESSORS.some(function (a) { return valueAccessor.constructor === a; });
}
function syncPendingControls(form, directives) {
    form._syncPendingControls();
    directives.forEach(function (dir) {
        var control = dir.control;
        if (control.updateOn === 'submit' && control._pendingChange) {
            dir.viewToModelUpdate(control._pendingValue);
            control._pendingChange = false;
        }
    });
}
// TODO: vsavkin remove it once https://github.com/angular/angular/issues/3011 is implemented
function selectValueAccessor(dir, valueAccessors) {
    if (!valueAccessors)
        return null;
    if (!Array.isArray(valueAccessors))
        _throwError(dir, 'Value accessor was not provided as an array for form control with');
    var defaultAccessor = undefined;
    var builtinAccessor = undefined;
    var customAccessor = undefined;
    valueAccessors.forEach(function (v) {
        if (v.constructor === DefaultValueAccessor) {
            defaultAccessor = v;
        }
        else if (isBuiltInAccessor(v)) {
            if (builtinAccessor)
                _throwError(dir, 'More than one built-in value accessor matches form control with');
            builtinAccessor = v;
        }
        else {
            if (customAccessor)
                _throwError(dir, 'More than one custom value accessor matches form control with');
            customAccessor = v;
        }
    });
    if (customAccessor)
        return customAccessor;
    if (builtinAccessor)
        return builtinAccessor;
    if (defaultAccessor)
        return defaultAccessor;
    _throwError(dir, 'No valid value accessor for form control with');
    return null;
}
function removeDir(list, el) {
    var index = list.indexOf(el);
    if (index > -1)
        list.splice(index, 1);
}
// TODO(kara): remove after deprecation period
function _ngModelWarning(name, type, instance, warningConfig) {
    if (!Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["isDevMode"])() || warningConfig === 'never')
        return;
    if (((warningConfig === null || warningConfig === 'once') && !type._ngModelWarningSentOnce) ||
        (warningConfig === 'always' && !instance._ngModelWarningSent)) {
        ReactiveErrors.ngModelWarning(name);
        type._ngModelWarningSentOnce = true;
        instance._ngModelWarningSent = true;
    }
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @description
 * A base class for code shared between the `NgModelGroup` and `FormGroupName` directives.
 *
 */
var AbstractFormGroupDirective = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(AbstractFormGroupDirective, _super);
    function AbstractFormGroupDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @description
     * An internal callback method triggered on the instance after the inputs are set.
     * Registers the group with its parent group.
     */
    AbstractFormGroupDirective.prototype.ngOnInit = function () {
        this._checkParentType();
        this.formDirective.addFormGroup(this);
    };
    /**
     * @description
     * An internal callback method triggered before the instance is destroyed.
     * Removes the group from its parent group.
     */
    AbstractFormGroupDirective.prototype.ngOnDestroy = function () {
        if (this.formDirective) {
            this.formDirective.removeFormGroup(this);
        }
    };
    Object.defineProperty(AbstractFormGroupDirective.prototype, "control", {
        /**
         * @description
         * The `FormGroup` bound to this directive.
         */
        get: function () { return this.formDirective.getFormGroup(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractFormGroupDirective.prototype, "path", {
        /**
         * @description
         * The path to this group from the top-level directive.
         */
        get: function () { return controlPath(this.name, this._parent); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractFormGroupDirective.prototype, "formDirective", {
        /**
         * @description
         * The top-level directive for this group if present, otherwise null.
         */
        get: function () { return this._parent ? this._parent.formDirective : null; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractFormGroupDirective.prototype, "validator", {
        /**
         * @description
         * The synchronous validators registered with this group.
         */
        get: function () { return composeValidators(this._validators); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractFormGroupDirective.prototype, "asyncValidator", {
        /**
         * @description
         * The async validators registered with this group.
         */
        get: function () {
            return composeAsyncValidators(this._asyncValidators);
        },
        enumerable: true,
        configurable: true
    });
    /** @internal */
    AbstractFormGroupDirective.prototype._checkParentType = function () { };
    return AbstractFormGroupDirective;
}(ControlContainer));

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var AbstractControlStatus = /** @class */ (function () {
    function AbstractControlStatus(cd) {
        this._cd = cd;
    }
    Object.defineProperty(AbstractControlStatus.prototype, "ngClassUntouched", {
        get: function () { return this._cd.control ? this._cd.control.untouched : false; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControlStatus.prototype, "ngClassTouched", {
        get: function () { return this._cd.control ? this._cd.control.touched : false; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControlStatus.prototype, "ngClassPristine", {
        get: function () { return this._cd.control ? this._cd.control.pristine : false; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControlStatus.prototype, "ngClassDirty", {
        get: function () { return this._cd.control ? this._cd.control.dirty : false; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControlStatus.prototype, "ngClassValid", {
        get: function () { return this._cd.control ? this._cd.control.valid : false; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControlStatus.prototype, "ngClassInvalid", {
        get: function () { return this._cd.control ? this._cd.control.invalid : false; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControlStatus.prototype, "ngClassPending", {
        get: function () { return this._cd.control ? this._cd.control.pending : false; },
        enumerable: true,
        configurable: true
    });
    return AbstractControlStatus;
}());
var ngControlStatusHost = {
    '[class.ng-untouched]': 'ngClassUntouched',
    '[class.ng-touched]': 'ngClassTouched',
    '[class.ng-pristine]': 'ngClassPristine',
    '[class.ng-dirty]': 'ngClassDirty',
    '[class.ng-valid]': 'ngClassValid',
    '[class.ng-invalid]': 'ngClassInvalid',
    '[class.ng-pending]': 'ngClassPending',
};
/**
 * Directive automatically applied to Angular form controls that sets CSS classes
 * based on control status. The following classes are applied as the properties
 * become true:
 *
 * * ng-valid
 * * ng-invalid
 * * ng-pending
 * * ng-pristine
 * * ng-dirty
 * * ng-untouched
 * * ng-touched
 *
 * @ngModule FormsModule
 * @ngModule ReactiveFormsModule
 */
var NgControlStatus = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(NgControlStatus, _super);
    function NgControlStatus(cd) {
        return _super.call(this, cd) || this;
    }
    NgControlStatus = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({ selector: '[formControlName],[ngModel],[formControl]', host: ngControlStatusHost }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Self"])()),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [NgControl])
    ], NgControlStatus);
    return NgControlStatus;
}(AbstractControlStatus));
/**
 * Directive automatically applied to Angular form groups that sets CSS classes
 * based on control status (valid/invalid/dirty/etc).
 *
 * @ngModule FormsModule
 * @ngModule ReactiveFormsModule
 */
var NgControlStatusGroup = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(NgControlStatusGroup, _super);
    function NgControlStatusGroup(cd) {
        return _super.call(this, cd) || this;
    }
    NgControlStatusGroup = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]',
            host: ngControlStatusHost
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Self"])()),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [ControlContainer])
    ], NgControlStatusGroup);
    return NgControlStatusGroup;
}(AbstractControlStatus));

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Reports that a FormControl is valid, meaning that no errors exist in the input value.
 *
 * @see `status`
 */
var VALID = 'VALID';
/**
 * Reports that a FormControl is invalid, meaning that an error exists in the input value.
 *
 * @see `status`
 */
var INVALID = 'INVALID';
/**
 * Reports that a FormControl is pending, meaning that that async validation is occurring and
 * errors are not yet available for the input value.
 *
 * @see `markAsPending`
 * @see `status`
 */
var PENDING = 'PENDING';
/**
 * Reports that a FormControl is disabled, meaning that the control is exempt from ancestor
 * calculations of validity or value.
 *
 * @see `markAsDisabled`
 * @see `status`
 */
var DISABLED = 'DISABLED';
function _find(control, path, delimiter) {
    if (path == null)
        return null;
    if (!(path instanceof Array)) {
        path = path.split(delimiter);
    }
    if (path instanceof Array && (path.length === 0))
        return null;
    return path.reduce(function (v, name) {
        if (v instanceof FormGroup) {
            return v.controls.hasOwnProperty(name) ? v.controls[name] : null;
        }
        if (v instanceof FormArray) {
            return v.at(name) || null;
        }
        return null;
    }, control);
}
function coerceToValidator(validatorOrOpts) {
    var validator = (isOptionsObj(validatorOrOpts) ? validatorOrOpts.validators :
        validatorOrOpts);
    return Array.isArray(validator) ? composeValidators(validator) : validator || null;
}
function coerceToAsyncValidator(asyncValidator, validatorOrOpts) {
    var origAsyncValidator = (isOptionsObj(validatorOrOpts) ? validatorOrOpts.asyncValidators :
        asyncValidator);
    return Array.isArray(origAsyncValidator) ? composeAsyncValidators(origAsyncValidator) :
        origAsyncValidator || null;
}
function isOptionsObj(validatorOrOpts) {
    return validatorOrOpts != null && !Array.isArray(validatorOrOpts) &&
        typeof validatorOrOpts === 'object';
}
/**
 * This is the base class for `FormControl`, `FormGroup`, and `FormArray`.
 *
 * It provides some of the shared behavior that all controls and groups of controls have, like
 * running validators, calculating status, and resetting state. It also defines the properties
 * that are shared between all sub-classes, like `value`, `valid`, and `dirty`. It shouldn't be
 * instantiated directly.
 *
 * @see [Forms Guide](/guide/forms)
 * @see [Reactive Forms Guide](/guide/reactive-forms)
 * @see [Dynamic Forms Guide](/guide/dynamic-form)
 *
 */
var AbstractControl = /** @class */ (function () {
    /**
     * Initialize the AbstractControl instance.
     *
     * @param validator The function that determines the synchronous validity of this control.
     * @param asyncValidator The function that determines the asynchronous validity of this
     * control.
     */
    function AbstractControl(validator, asyncValidator) {
        this.validator = validator;
        this.asyncValidator = asyncValidator;
        /** @internal */
        this._onCollectionChange = function () { };
        /**
         * A control is `pristine` if the user has not yet changed
         * the value in the UI.
         *
         * @returns True if the user has not yet changed the value in the UI; compare `dirty`.
         * Programmatic changes to a control's value do not mark it dirty.
         */
        this.pristine = true;
        /**
         * True if the control is marked as `touched`.
         *
         * A control is marked `touched` once the user has triggered
         * a `blur` event on it.
         */
        this.touched = false;
        /** @internal */
        this._onDisabledChange = [];
    }
    Object.defineProperty(AbstractControl.prototype, "parent", {
        /**
         * The parent control.
         */
        get: function () { return this._parent; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControl.prototype, "valid", {
        /**
         * A control is `valid` when its `status` is `VALID`.
         *
         * @see `status`
         *
         * @returns True if the control has passed all of its validation tests,
         * false otherwise.
         */
        get: function () { return this.status === VALID; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControl.prototype, "invalid", {
        /**
         * A control is `invalid` when its `status` is `INVALID`.
         *
         * @see `status`
         *
         * @returns True if this control has failed one or more of its validation checks,
         * false otherwise.
         */
        get: function () { return this.status === INVALID; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControl.prototype, "pending", {
        /**
         * A control is `pending` when its `status` is `PENDING`.
         *
         * @see `status`
         *
         * @returns True if this control is in the process of conducting a validation check,
         * false otherwise.
         */
        get: function () { return this.status == PENDING; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControl.prototype, "disabled", {
        /**
         * A control is `disabled` when its `status` is `DISABLED`.
         *
         * @see `status`
         *
         * Disabled controls are exempt from validation checks and
         * are not included in the aggregate value of their ancestor
         * controls.
         *
         * @returns True if the control is disabled, false otherwise.
         */
        get: function () { return this.status === DISABLED; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControl.prototype, "enabled", {
        /**
         * A control is `enabled` as long as its `status` is not `DISABLED`.
         *
         * @see `status`
         *
         * @returns True if the control has any status other than 'DISABLED',
         * false if the status is 'DISABLED'.
         *
         */
        get: function () { return this.status !== DISABLED; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControl.prototype, "dirty", {
        /**
         * A control is `dirty` if the user has changed the value
         * in the UI.
         *
         * @returns True if the user has changed the value of this control in the UI; compare `pristine`.
         * Programmatic changes to a control's value do not mark it dirty.
         */
        get: function () { return !this.pristine; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControl.prototype, "untouched", {
        /**
         * True if the control has not been marked as touched
         *
         * A control is `untouched` if the user has not yet triggered
         * a `blur` event on it.
         */
        get: function () { return !this.touched; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControl.prototype, "updateOn", {
        /**
         * Reports the update strategy of the `AbstractControl` (meaning
         * the event on which the control updates itself).
         * Possible values: `'change'` | `'blur'` | `'submit'`
         * Default value: `'change'`
         */
        get: function () {
            return this._updateOn ? this._updateOn : (this.parent ? this.parent.updateOn : 'change');
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Sets the synchronous validators that are active on this control.  Calling
     * this overwrites any existing sync validators.
     */
    AbstractControl.prototype.setValidators = function (newValidator) {
        this.validator = coerceToValidator(newValidator);
    };
    /**
     * Sets the async validators that are active on this control. Calling this
     * overwrites any existing async validators.
     */
    AbstractControl.prototype.setAsyncValidators = function (newValidator) {
        this.asyncValidator = coerceToAsyncValidator(newValidator);
    };
    /**
     * Empties out the sync validator list.
     */
    AbstractControl.prototype.clearValidators = function () { this.validator = null; };
    /**
     * Empties out the async validator list.
     */
    AbstractControl.prototype.clearAsyncValidators = function () { this.asyncValidator = null; };
    /**
     * Marks the control as `touched`. A control is touched by focus and
     * blur events that do not change the value; compare `markAsDirty`;
     *
     *  @param opts Configuration options that determine how the control propagates changes
     * and emits events events after marking is applied.
     * * `onlySelf`: When true, mark only this control. When false or not supplied,
     * marks all direct ancestors. Default is false.
     */
    AbstractControl.prototype.markAsTouched = function (opts) {
        if (opts === void 0) { opts = {}; }
        this.touched = true;
        if (this._parent && !opts.onlySelf) {
            this._parent.markAsTouched(opts);
        }
    };
    /**
     * Marks the control as `untouched`.
     *
     * If the control has any children, also marks all children as `untouched`
     * and recalculates the `touched` status of all parent controls.
     *
     *  @param opts Configuration options that determine how the control propagates changes
     * and emits events after the marking is applied.
     * * `onlySelf`: When true, mark only this control. When false or not supplied,
     * marks all direct ancestors. Default is false.
     */
    AbstractControl.prototype.markAsUntouched = function (opts) {
        if (opts === void 0) { opts = {}; }
        this.touched = false;
        this._pendingTouched = false;
        this._forEachChild(function (control) { control.markAsUntouched({ onlySelf: true }); });
        if (this._parent && !opts.onlySelf) {
            this._parent._updateTouched(opts);
        }
    };
    /**
     * Marks the control as `dirty`. A control becomes dirty when
     * the control's is changed through the UI; compare `markAsTouched`.
     *
     *  @param opts Configuration options that determine how the control propagates changes
     * and emits events after marking is applied.
     * * `onlySelf`: When true, mark only this control. When false or not supplied,
     * marks all direct ancestors. Default is false.
     */
    AbstractControl.prototype.markAsDirty = function (opts) {
        if (opts === void 0) { opts = {}; }
        this.pristine = false;
        if (this._parent && !opts.onlySelf) {
            this._parent.markAsDirty(opts);
        }
    };
    /**
     * Marks the control as `pristine`.
     *
     * If the control has any children, marks all children as `pristine`,
     * and recalculates the `pristine` status of all parent
     * controls.
     *
     *  @param opts Configuration options that determine how the control emits events after
     * marking is applied.
     * * `onlySelf`: When true, mark only this control. When false or not supplied,
     * marks all direct ancestors. Default is false..
     */
    AbstractControl.prototype.markAsPristine = function (opts) {
        if (opts === void 0) { opts = {}; }
        this.pristine = true;
        this._pendingDirty = false;
        this._forEachChild(function (control) { control.markAsPristine({ onlySelf: true }); });
        if (this._parent && !opts.onlySelf) {
            this._parent._updatePristine(opts);
        }
    };
    /**
     * Marks the control as `pending`.
     *
     * A control is pending while the control performs async validation.
     *
     *  @param opts Configuration options that determine how the control propagates changes and
     * emits events after marking is applied.
     * * `onlySelf`: When true, mark only this control. When false or not supplied,
     * marks all direct ancestors. Default is false..
     * * `emitEvent`: When true or not supplied (the default), the `statusChanges`
     * observable emits an event with the latest status the control is marked pending.
     * When false, no events are emitted.
     *
     */
    AbstractControl.prototype.markAsPending = function (opts) {
        if (opts === void 0) { opts = {}; }
        this.status = PENDING;
        if (opts.emitEvent !== false) {
            this.statusChanges.emit(this.status);
        }
        if (this._parent && !opts.onlySelf) {
            this._parent.markAsPending(opts);
        }
    };
    /**
     * Disables the control. This means the control is exempt from validation checks and
     * excluded from the aggregate value of any parent. Its status is `DISABLED`.
     *
     * If the control has children, all children are also disabled.
     *
     *  @param opts Configuration options that determine how the control propagates
     * changes and emits events after the control is disabled.
     * * `onlySelf`: When true, mark only this control. When false or not supplied,
     * marks all direct ancestors. Default is false..
     * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
     * `valueChanges`
     * observables emit events with the latest status and value when the control is disabled.
     * When false, no events are emitted.
     */
    AbstractControl.prototype.disable = function (opts) {
        if (opts === void 0) { opts = {}; }
        this.status = DISABLED;
        this.errors = null;
        this._forEachChild(function (control) { control.disable(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, opts, { onlySelf: true })); });
        this._updateValue();
        if (opts.emitEvent !== false) {
            this.valueChanges.emit(this.value);
            this.statusChanges.emit(this.status);
        }
        this._updateAncestors(opts);
        this._onDisabledChange.forEach(function (changeFn) { return changeFn(true); });
    };
    /**
     * Enables the control. This means the control is included in validation checks and
     * the aggregate value of its parent. Its status recalculates based on its value and
     * its validators.
     *
     * By default, if the control has children, all children are enabled.
     *
     *  @param opts Configure options that control how the control propagates changes and
     * emits events when marked as untouched
     * * `onlySelf`: When true, mark only this control. When false or not supplied,
     * marks all direct ancestors. Default is false..
     * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
     * `valueChanges`
     * observables emit events with the latest status and value when the control is enabled.
     * When false, no events are emitted.
     */
    AbstractControl.prototype.enable = function (opts) {
        if (opts === void 0) { opts = {}; }
        this.status = VALID;
        this._forEachChild(function (control) { control.enable(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, opts, { onlySelf: true })); });
        this.updateValueAndValidity({ onlySelf: true, emitEvent: opts.emitEvent });
        this._updateAncestors(opts);
        this._onDisabledChange.forEach(function (changeFn) { return changeFn(false); });
    };
    AbstractControl.prototype._updateAncestors = function (opts) {
        if (this._parent && !opts.onlySelf) {
            this._parent.updateValueAndValidity(opts);
            this._parent._updatePristine();
            this._parent._updateTouched();
        }
    };
    /**
     * @param parent Sets the parent of the control
     */
    AbstractControl.prototype.setParent = function (parent) { this._parent = parent; };
    /**
     * Recalculates the value and validation status of the control.
     *
     * By default, it also updates the value and validity of its ancestors.
     *
     * @param opts Configuration options determine how the control propagates changes and emits events
     * after updates and validity checks are applied.
     * * `onlySelf`: When true, only update this control. When false or not supplied,
     * update all direct ancestors. Default is false..
     * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
     * `valueChanges`
     * observables emit events with the latest status and value when the control is updated.
     * When false, no events are emitted.
     */
    AbstractControl.prototype.updateValueAndValidity = function (opts) {
        if (opts === void 0) { opts = {}; }
        this._setInitialStatus();
        this._updateValue();
        if (this.enabled) {
            this._cancelExistingSubscription();
            this.errors = this._runValidator();
            this.status = this._calculateStatus();
            if (this.status === VALID || this.status === PENDING) {
                this._runAsyncValidator(opts.emitEvent);
            }
        }
        if (opts.emitEvent !== false) {
            this.valueChanges.emit(this.value);
            this.statusChanges.emit(this.status);
        }
        if (this._parent && !opts.onlySelf) {
            this._parent.updateValueAndValidity(opts);
        }
    };
    /** @internal */
    AbstractControl.prototype._updateTreeValidity = function (opts) {
        if (opts === void 0) { opts = { emitEvent: true }; }
        this._forEachChild(function (ctrl) { return ctrl._updateTreeValidity(opts); });
        this.updateValueAndValidity({ onlySelf: true, emitEvent: opts.emitEvent });
    };
    AbstractControl.prototype._setInitialStatus = function () {
        this.status = this._allControlsDisabled() ? DISABLED : VALID;
    };
    AbstractControl.prototype._runValidator = function () {
        return this.validator ? this.validator(this) : null;
    };
    AbstractControl.prototype._runAsyncValidator = function (emitEvent) {
        var _this = this;
        if (this.asyncValidator) {
            this.status = PENDING;
            var obs = toObservable(this.asyncValidator(this));
            this._asyncValidationSubscription =
                obs.subscribe(function (errors) { return _this.setErrors(errors, { emitEvent: emitEvent }); });
        }
    };
    AbstractControl.prototype._cancelExistingSubscription = function () {
        if (this._asyncValidationSubscription) {
            this._asyncValidationSubscription.unsubscribe();
        }
    };
    /**
     * Sets errors on a form control when running validations manually, rather than automatically.
     *
     * Calling `setErrors` also updates the validity of the parent control.
     *
     * @usageNotes
     * ### Manually set the errors for a control
     *
     * ```
     * const login = new FormControl('someLogin');
     * login.setErrors({
     *   notUnique: true
     * });
     *
     * expect(login.valid).toEqual(false);
     * expect(login.errors).toEqual({ notUnique: true });
     *
     * login.setValue('someOtherLogin');
     *
     * expect(login.valid).toEqual(true);
     * ```
     */
    AbstractControl.prototype.setErrors = function (errors, opts) {
        if (opts === void 0) { opts = {}; }
        this.errors = errors;
        this._updateControlsErrors(opts.emitEvent !== false);
    };
    /**
     * Retrieves a child control given the control's name or path.
     *
     * @param path A dot-delimited string or array of string/number values that define the path to the
     * control.
     *
     * @usageNotes
     * ### Retrieve a nested control
     *
     * For example, to get a `name` control nested within a `person` sub-group:
     *
     * * `this.form.get('person.name');`
     *
     * -OR-
     *
     * * `this.form.get(['person', 'name']);`
     */
    AbstractControl.prototype.get = function (path) { return _find(this, path, '.'); };
    /**
     * Reports error data for a specific error occurring in this control or in another control.
     *
     * @param errorCode The error code for which to retrieve data
     * @param path The path to a control to check. If not supplied, checks for the error in this
     * control.
     *
     * @returns The error data if the control with the given path has the given error, otherwise null
     * or undefined.
     */
    AbstractControl.prototype.getError = function (errorCode, path) {
        var control = path ? this.get(path) : this;
        return control && control.errors ? control.errors[errorCode] : null;
    };
    /**
     * Reports whether the control with the given path has the error specified.
     *
     * @param errorCode The error code for which to retrieve data
     * @param path The path to a control to check. If not supplied, checks for the error in this
     * control.
     * @returns True when the control with the given path has the error, otherwise false.
     */
    AbstractControl.prototype.hasError = function (errorCode, path) { return !!this.getError(errorCode, path); };
    Object.defineProperty(AbstractControl.prototype, "root", {
        /**
         * Retrieves the top-level ancestor of this control.
         */
        get: function () {
            var x = this;
            while (x._parent) {
                x = x._parent;
            }
            return x;
        },
        enumerable: true,
        configurable: true
    });
    /** @internal */
    AbstractControl.prototype._updateControlsErrors = function (emitEvent) {
        this.status = this._calculateStatus();
        if (emitEvent) {
            this.statusChanges.emit(this.status);
        }
        if (this._parent) {
            this._parent._updateControlsErrors(emitEvent);
        }
    };
    /** @internal */
    AbstractControl.prototype._initObservables = function () {
        this.valueChanges = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.statusChanges = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    };
    AbstractControl.prototype._calculateStatus = function () {
        if (this._allControlsDisabled())
            return DISABLED;
        if (this.errors)
            return INVALID;
        if (this._anyControlsHaveStatus(PENDING))
            return PENDING;
        if (this._anyControlsHaveStatus(INVALID))
            return INVALID;
        return VALID;
    };
    /** @internal */
    AbstractControl.prototype._anyControlsHaveStatus = function (status) {
        return this._anyControls(function (control) { return control.status === status; });
    };
    /** @internal */
    AbstractControl.prototype._anyControlsDirty = function () {
        return this._anyControls(function (control) { return control.dirty; });
    };
    /** @internal */
    AbstractControl.prototype._anyControlsTouched = function () {
        return this._anyControls(function (control) { return control.touched; });
    };
    /** @internal */
    AbstractControl.prototype._updatePristine = function (opts) {
        if (opts === void 0) { opts = {}; }
        this.pristine = !this._anyControlsDirty();
        if (this._parent && !opts.onlySelf) {
            this._parent._updatePristine(opts);
        }
    };
    /** @internal */
    AbstractControl.prototype._updateTouched = function (opts) {
        if (opts === void 0) { opts = {}; }
        this.touched = this._anyControlsTouched();
        if (this._parent && !opts.onlySelf) {
            this._parent._updateTouched(opts);
        }
    };
    /** @internal */
    AbstractControl.prototype._isBoxedValue = function (formState) {
        return typeof formState === 'object' && formState !== null &&
            Object.keys(formState).length === 2 && 'value' in formState && 'disabled' in formState;
    };
    /** @internal */
    AbstractControl.prototype._registerOnCollectionChange = function (fn) { this._onCollectionChange = fn; };
    /** @internal */
    AbstractControl.prototype._setUpdateStrategy = function (opts) {
        if (isOptionsObj(opts) && opts.updateOn != null) {
            this._updateOn = opts.updateOn;
        }
    };
    return AbstractControl;
}());
/**
 * Tracks the value and validation status of an individual form control.
 *
 * This is one of the three fundamental building blocks of Angular forms, along with
 * `FormGroup` and `FormArray`. It extends the `AbstractControl` class that
 * implements most of the base functionality for accessing the value, validation status,
 * user interactions and events.
 *
 * @see `AbstractControl`
 * @see [Reactive Forms Guide](guide/reactive-forms)
 * @see [Usage Notes](#usage-notes)
 *
 * @usageNotes
 *
 * ### Initializing Form Controls
 *
 * Instantiate a `FormControl`, with an initial value.
 *
 * ```ts
 * const control = new FormControl('some value');
 * console.log(control.value);     // 'some value'
 *```
 *
 * The following example initializes the control with a form state object. The `value`
 * and `disabled` keys are required in this case.
 *
 * ```ts
 * const control = new FormControl({ value: 'n/a', disabled: true });
 * console.log(control.value);     // 'n/a'
 * console.log(control.status);    // 'DISABLED'
 * ```
 *
 * The following example initializes the control with a sync validator.
 *
 * ```ts
 * const control = new FormControl('', Validators.required);
 * console.log(control.value);      // ''
 * console.log(control.status);     // 'INVALID'
 * ```
 *
 * The following example initializes the control using an options object.
 *
 * ```ts
 * const control = new FormControl('', {
 *    validators: Validators.required,
 *    asyncValidators: myAsyncValidator
 * });
 * ```
 *
 * ### Configure the control to update on a blur event
 *
 * Set the `updateOn` option to `'blur'` to update on the blur `event`.
 *
 * ```ts
 * const control = new FormControl('', { updateOn: 'blur' });
 * ```
 *
 * ### Configure the control to update on a submit event
 *
 * Set the `updateOn` option to `'submit'` to update on a submit `event`.
 *
 * ```ts
 * const control = new FormControl('', { updateOn: 'submit' });
 * ```
 *
 * ### Reset the control back to an initial value
 *
 * You reset to a specific form state by passing through a standalone
 * value or a form state object that contains both a value and a disabled state
 * (these are the only two properties that cannot be calculated).
 *
 * ```ts
 * const control = new FormControl('Nancy');
 *
 * console.log(control.value); // 'Nancy'
 *
 * control.reset('Drew');
 *
 * console.log(control.value); // 'Drew'
 * ```
 *
 * ### Reset the control back to an initial value and disabled
 *
 * ```
 * const control = new FormControl('Nancy');
 *
 * console.log(control.value); // 'Nancy'
 * console.log(control.status); // 'VALID'
 *
 * control.reset({ value: 'Drew', disabled: true });
 *
 * console.log(control.value); // 'Drew'
 * console.log(control.status); // 'DISABLED'
 *
*/
var FormControl = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(FormControl, _super);
    /**
    * Creates a new `FormControl` instance.
    *
    * @param formState Initializes the control with an initial value,
    * or an object that defines the initial value and disabled state.
    *
    * @param validatorOrOpts A synchronous validator function, or an array of
    * such functions, or an `AbstractControlOptions` object that contains validation functions
    * and a validation trigger.
    *
    * @param asyncValidator A single async validator or array of async validator functions
    *
    */
    function FormControl(formState, validatorOrOpts, asyncValidator) {
        if (formState === void 0) { formState = null; }
        var _this = _super.call(this, coerceToValidator(validatorOrOpts), coerceToAsyncValidator(asyncValidator, validatorOrOpts)) || this;
        /** @internal */
        _this._onChange = [];
        _this._applyFormState(formState);
        _this._setUpdateStrategy(validatorOrOpts);
        _this.updateValueAndValidity({ onlySelf: true, emitEvent: false });
        _this._initObservables();
        return _this;
    }
    /**
     * Sets a new value for the form control.
     *
     * @param value The new value for the control.
     * @param options Configuration options that determine how the control proopagates changes
     * and emits events when the value changes.
     * The configuration options are passed to the {@link AbstractControl#updateValueAndValidity
     * updateValueAndValidity} method.
     *
     * * `onlySelf`: When true, each change only affects this control, and not its parent. Default is
     * false.
     * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
     * `valueChanges`
     * observables emit events with the latest status and value when the control value is updated.
     * When false, no events are emitted.
     * * `emitModelToViewChange`: When true or not supplied  (the default), each change triggers an
     * `onChange` event to
     * update the view.
     * * `emitViewToModelChange`: When true or not supplied (the default), each change triggers an
     * `ngModelChange`
     * event to update the model.
     *
     */
    FormControl.prototype.setValue = function (value, options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        this.value = this._pendingValue = value;
        if (this._onChange.length && options.emitModelToViewChange !== false) {
            this._onChange.forEach(function (changeFn) { return changeFn(_this.value, options.emitViewToModelChange !== false); });
        }
        this.updateValueAndValidity(options);
    };
    /**
     * Patches the value of a control.
     *
     * This function is functionally the same as {@link FormControl#setValue setValue} at this level.
     * It exists for symmetry with {@link FormGroup#patchValue patchValue} on `FormGroups` and
     * `FormArrays`, where it does behave differently.
     *
     * @see `setValue` for options
     */
    FormControl.prototype.patchValue = function (value, options) {
        if (options === void 0) { options = {}; }
        this.setValue(value, options);
    };
    /**
     * Resets the form control, marking it `pristine` and `untouched`, and setting
     * the value to null.
     *
     * @param formState Resets the control with an initial value,
     * or an object that defines the initial value and disabled state.
     *
     * @param options Configuration options that determine how the control propagates changes
     * and emits events after the value changes.
     *
     * * `onlySelf`: When true, each change only affects this control, and not its parent. Default is
     * false.
     * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
     * `valueChanges`
     * observables emit events with the latest status and value when the control is reset.
     * When false, no events are emitted.
     *
     */
    FormControl.prototype.reset = function (formState, options) {
        if (formState === void 0) { formState = null; }
        if (options === void 0) { options = {}; }
        this._applyFormState(formState);
        this.markAsPristine(options);
        this.markAsUntouched(options);
        this.setValue(this.value, options);
        this._pendingChange = false;
    };
    /**
     * @internal
     */
    FormControl.prototype._updateValue = function () { };
    /**
     * @internal
     */
    FormControl.prototype._anyControls = function (condition) { return false; };
    /**
     * @internal
     */
    FormControl.prototype._allControlsDisabled = function () { return this.disabled; };
    /**
     * Register a listener for change events.
     *
     * @param fn The method that is called when the value changes
     */
    FormControl.prototype.registerOnChange = function (fn) { this._onChange.push(fn); };
    /**
     * @internal
     */
    FormControl.prototype._clearChangeFns = function () {
        this._onChange = [];
        this._onDisabledChange = [];
        this._onCollectionChange = function () { };
    };
    /**
     * Register a listener for disabled events.
     *
     * @param fn The method that is called when the disabled status changes.
     */
    FormControl.prototype.registerOnDisabledChange = function (fn) {
        this._onDisabledChange.push(fn);
    };
    /**
     * @internal
     */
    FormControl.prototype._forEachChild = function (cb) { };
    /** @internal */
    FormControl.prototype._syncPendingControls = function () {
        if (this.updateOn === 'submit') {
            if (this._pendingDirty)
                this.markAsDirty();
            if (this._pendingTouched)
                this.markAsTouched();
            if (this._pendingChange) {
                this.setValue(this._pendingValue, { onlySelf: true, emitModelToViewChange: false });
                return true;
            }
        }
        return false;
    };
    FormControl.prototype._applyFormState = function (formState) {
        if (this._isBoxedValue(formState)) {
            this.value = this._pendingValue = formState.value;
            formState.disabled ? this.disable({ onlySelf: true, emitEvent: false }) :
                this.enable({ onlySelf: true, emitEvent: false });
        }
        else {
            this.value = this._pendingValue = formState;
        }
    };
    return FormControl;
}(AbstractControl));
/**
 * Tracks the value and validity state of a group of `FormControl` instances.
 *
 * A `FormGroup` aggregates the values of each child `FormControl` into one object,
 * with each control name as the key.  It calculates its status by reducing the status values
 * of its children. For example, if one of the controls in a group is invalid, the entire
 * group becomes invalid.
 *
 * `FormGroup` is one of the three fundamental building blocks used to define forms in Angular,
 * along with `FormControl` and `FormArray`.
 *
 * When instantiating a `FormGroup`, pass in a collection of child controls as the first
 * argument. The key for each child registers the name for the control.
 *
 * @usageNotes
 *
 * ### Create a form group with 2 controls
 *
 * ```
 * const form = new FormGroup({
 *   first: new FormControl('Nancy', Validators.minLength(2)),
 *   last: new FormControl('Drew'),
 * });
 *
 * console.log(form.value);   // {first: 'Nancy', last; 'Drew'}
 * console.log(form.status);  // 'VALID'
 * ```
 *
 * ### Create a form group with a group-level validator
 *
 * You include group-level validators as the second arg, or group-level async
 * validators as the third arg. These come in handy when you want to perform validation
 * that considers the value of more than one child control.
 *
 * ```
 * const form = new FormGroup({
 *   password: new FormControl('', Validators.minLength(2)),
 *   passwordConfirm: new FormControl('', Validators.minLength(2)),
 * }, passwordMatchValidator);
 *
 *
 * function passwordMatchValidator(g: FormGroup) {
 *    return g.get('password').value === g.get('passwordConfirm').value
 *       ? null : {'mismatch': true};
 * }
 * ```
 *
 * Like `FormControl` instances, you choose to pass in
 * validators and async validators as part of an options object.
 *
 * ```
 * const form = new FormGroup({
 *   password: new FormControl('')
 *   passwordConfirm: new FormControl('')
 * }, { validators: passwordMatchValidator, asyncValidators: otherValidator });
 * ```
 *
 * ### Set the updateOn property for all controls in a form group
 *
 * The options object is used to set a default value for each child
 * control's `updateOn` property. If you set `updateOn` to `'blur'` at the
 * group level, all child controls default to 'blur', unless the child
 * has explicitly specified a different `updateOn` value.
 *
 * ```ts
 * const c = new FormGroup({
 *   one: new FormControl()
 * }, { updateOn: 'blur' });
 * ```
 */
var FormGroup = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(FormGroup, _super);
    /**
    * Creates a new `FormGroup` instance.
    *
    * @param controls A collection of child controls. The key for each child is the name
    * under which it is registered.
    *
    * @param validatorOrOpts A synchronous validator function, or an array of
    * such functions, or an `AbstractControlOptions` object that contains validation functions
    * and a validation trigger.
    *
    * @param asyncValidator A single async validator or array of async validator functions
    *
    */
    function FormGroup(controls, validatorOrOpts, asyncValidator) {
        var _this = _super.call(this, coerceToValidator(validatorOrOpts), coerceToAsyncValidator(asyncValidator, validatorOrOpts)) || this;
        _this.controls = controls;
        _this._initObservables();
        _this._setUpdateStrategy(validatorOrOpts);
        _this._setUpControls();
        _this.updateValueAndValidity({ onlySelf: true, emitEvent: false });
        return _this;
    }
    /**
     * Registers a control with the group's list of controls.
     *
     * This method does not update the value or validity of the control.
     * Use {@link FormGroup#addControl addControl} instead.
     *
     * @param name The control name to register in the collection
     * @param control Provides the control for the given name
     */
    FormGroup.prototype.registerControl = function (name, control) {
        if (this.controls[name])
            return this.controls[name];
        this.controls[name] = control;
        control.setParent(this);
        control._registerOnCollectionChange(this._onCollectionChange);
        return control;
    };
    /**
     * Add a control to this group.
     *
     * This method also updates the value and validity of the control.
     *
     * @param name The control name to add to the collection
     * @param control Provides the control for the given name
     */
    FormGroup.prototype.addControl = function (name, control) {
        this.registerControl(name, control);
        this.updateValueAndValidity();
        this._onCollectionChange();
    };
    /**
     * Remove a control from this group.
     *
     * @param name The control name to remove from the collection
     */
    FormGroup.prototype.removeControl = function (name) {
        if (this.controls[name])
            this.controls[name]._registerOnCollectionChange(function () { });
        delete (this.controls[name]);
        this.updateValueAndValidity();
        this._onCollectionChange();
    };
    /**
     * Replace an existing control.
     *
     * @param name The control name to replace in the collection
     * @param control Provides the control for the given name
     */
    FormGroup.prototype.setControl = function (name, control) {
        if (this.controls[name])
            this.controls[name]._registerOnCollectionChange(function () { });
        delete (this.controls[name]);
        if (control)
            this.registerControl(name, control);
        this.updateValueAndValidity();
        this._onCollectionChange();
    };
    /**
     * Check whether there is an enabled control with the given name in the group.
     *
     * Reports false for disabled controls. If you'd like to check for existence in the group
     * only, use {@link AbstractControl#get get} instead.
     *
     * @param name The control name to check for existence in the collection
     *
     * @returns false for disabled controls, true otherwise.
     */
    FormGroup.prototype.contains = function (controlName) {
        return this.controls.hasOwnProperty(controlName) && this.controls[controlName].enabled;
    };
    /**
     * Sets the value of the `FormGroup`. It accepts an object that matches
     * the structure of the group, with control names as keys.
     *
     * @usageNotes
     * ### Set the complete value for the form group
     *
     * ```
     * const form = new FormGroup({
     *   first: new FormControl(),
     *   last: new FormControl()
     * });
     *
     * console.log(form.value);   // {first: null, last: null}
     *
     * form.setValue({first: 'Nancy', last: 'Drew'});
     * console.log(form.value);   // {first: 'Nancy', last: 'Drew'}
     * ```
     *
     * @throws When strict checks fail, such as setting the value of a control
     * that doesn't exist or if you excluding the value of a control.
     *
     * @param value The new value for the control that matches the structure of the group.
     * @param options Configuration options that determine how the control propagates changes
     * and emits events after the value changes.
     * The configuration options are passed to the {@link AbstractControl#updateValueAndValidity
     * updateValueAndValidity} method.
     *
     * * `onlySelf`: When true, each change only affects this control, and not its parent. Default is
     * false.
     * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
     * `valueChanges`
     * observables emit events with the latest status and value when the control value is updated.
     * When false, no events are emitted.
     */
    FormGroup.prototype.setValue = function (value, options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        this._checkAllValuesPresent(value);
        Object.keys(value).forEach(function (name) {
            _this._throwIfControlMissing(name);
            _this.controls[name].setValue(value[name], { onlySelf: true, emitEvent: options.emitEvent });
        });
        this.updateValueAndValidity(options);
    };
    /**
     * Patches the value of the `FormGroup`. It accepts an object with control
     * names as keys, and does its best to match the values to the correct controls
     * in the group.
     *
     * It accepts both super-sets and sub-sets of the group without throwing an error.
     *
     * @usageNotes
     * ### Patch the value for a form group
     *
     * ```
     * const form = new FormGroup({
     *    first: new FormControl(),
     *    last: new FormControl()
     * });
     * console.log(form.value);   // {first: null, last: null}
     *
     * form.patchValue({first: 'Nancy'});
     * console.log(form.value);   // {first: 'Nancy', last: null}
     * ```
     *
     * @param value The object that matches the structure of the group.
     * @param options Configuration options that determine how the control propagates changes and
     * emits events after the value is patched.
     * * `onlySelf`: When true, each change only affects this control and not its parent. Default is
     * true.
     * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
     * `valueChanges`
     * observables emit events with the latest status and value when the control value is updated.
     * When false, no events are emitted.
     * The configuration options are passed to the {@link AbstractControl#updateValueAndValidity
     * updateValueAndValidity} method.
     */
    FormGroup.prototype.patchValue = function (value, options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        Object.keys(value).forEach(function (name) {
            if (_this.controls[name]) {
                _this.controls[name].patchValue(value[name], { onlySelf: true, emitEvent: options.emitEvent });
            }
        });
        this.updateValueAndValidity(options);
    };
    /**
     * Resets the `FormGroup`, marks all descendants are marked `pristine` and `untouched`, and
     * the value of all descendants to null.
     *
     * You reset to a specific form state by passing in a map of states
     * that matches the structure of your form, with control names as keys. The state
     * is a standalone value or a form state object with both a value and a disabled
     * status.
     *
     * @param formState Resets the control with an initial value,
     * or an object that defines the initial value and disabled state.
     *
     * @param options Configuration options that determine how the control propagates changes
     * and emits events when the group is reset.
     * * `onlySelf`: When true, each change only affects this control, and not its parent. Default is
     * false.
     * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
     * `valueChanges`
     * observables emit events with the latest status and value when the control is reset.
     * When false, no events are emitted.
     * The configuration options are passed to the {@link AbstractControl#updateValueAndValidity
     * updateValueAndValidity} method.
     *
     * @usageNotes
     *
     * ### Reset the form group values
     *
     * ```ts
     * const form = new FormGroup({
     *   first: new FormControl('first name'),
     *   last: new FormControl('last name')
     * });
     *
     * console.log(form.value);  // {first: 'first name', last: 'last name'}
     *
     * form.reset({ first: 'name', last: 'last name' });
     *
     * console.log(form.value);  // {first: 'name', last: 'last name'}
     * ```
     *
     * ### Reset the form group values and disabled status
     *
     * ```
     * const form = new FormGroup({
     *   first: new FormControl('first name'),
     *   last: new FormControl('last name')
     * });
     *
     * form.reset({
     *   first: {value: 'name', disabled: true},
     *   last: 'last'
     * });
     *
     * console.log(this.form.value);  // {first: 'name', last: 'last name'}
     * console.log(this.form.get('first').status);  // 'DISABLED'
     * ```
     */
    FormGroup.prototype.reset = function (value, options) {
        if (value === void 0) { value = {}; }
        if (options === void 0) { options = {}; }
        this._forEachChild(function (control, name) {
            control.reset(value[name], { onlySelf: true, emitEvent: options.emitEvent });
        });
        this.updateValueAndValidity(options);
        this._updatePristine(options);
        this._updateTouched(options);
    };
    /**
     * The aggregate value of the `FormGroup`, including any disabled controls.
     *
     * Retrieves all values regardless of disabled status.
     * The `value` property is the best way to get the value of the group, because
     * it excludes disabled controls in the `FormGroup`.
     */
    FormGroup.prototype.getRawValue = function () {
        return this._reduceChildren({}, function (acc, control, name) {
            acc[name] = control instanceof FormControl ? control.value : control.getRawValue();
            return acc;
        });
    };
    /** @internal */
    FormGroup.prototype._syncPendingControls = function () {
        var subtreeUpdated = this._reduceChildren(false, function (updated, child) {
            return child._syncPendingControls() ? true : updated;
        });
        if (subtreeUpdated)
            this.updateValueAndValidity({ onlySelf: true });
        return subtreeUpdated;
    };
    /** @internal */
    FormGroup.prototype._throwIfControlMissing = function (name) {
        if (!Object.keys(this.controls).length) {
            throw new Error("\n        There are no form controls registered with this group yet.  If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      ");
        }
        if (!this.controls[name]) {
            throw new Error("Cannot find form control with name: " + name + ".");
        }
    };
    /** @internal */
    FormGroup.prototype._forEachChild = function (cb) {
        var _this = this;
        Object.keys(this.controls).forEach(function (k) { return cb(_this.controls[k], k); });
    };
    /** @internal */
    FormGroup.prototype._setUpControls = function () {
        var _this = this;
        this._forEachChild(function (control) {
            control.setParent(_this);
            control._registerOnCollectionChange(_this._onCollectionChange);
        });
    };
    /** @internal */
    FormGroup.prototype._updateValue = function () { this.value = this._reduceValue(); };
    /** @internal */
    FormGroup.prototype._anyControls = function (condition) {
        var _this = this;
        var res = false;
        this._forEachChild(function (control, name) {
            res = res || (_this.contains(name) && condition(control));
        });
        return res;
    };
    /** @internal */
    FormGroup.prototype._reduceValue = function () {
        var _this = this;
        return this._reduceChildren({}, function (acc, control, name) {
            if (control.enabled || _this.disabled) {
                acc[name] = control.value;
            }
            return acc;
        });
    };
    /** @internal */
    FormGroup.prototype._reduceChildren = function (initValue, fn) {
        var res = initValue;
        this._forEachChild(function (control, name) { res = fn(res, control, name); });
        return res;
    };
    /** @internal */
    FormGroup.prototype._allControlsDisabled = function () {
        var e_1, _a;
        try {
            for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(Object.keys(this.controls)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var controlName = _c.value;
                if (this.controls[controlName].enabled) {
                    return false;
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return Object.keys(this.controls).length > 0 || this.disabled;
    };
    /** @internal */
    FormGroup.prototype._checkAllValuesPresent = function (value) {
        this._forEachChild(function (control, name) {
            if (value[name] === undefined) {
                throw new Error("Must supply a value for form control with name: '" + name + "'.");
            }
        });
    };
    return FormGroup;
}(AbstractControl));
/**
 * Tracks the value and validity state of an array of `FormControl`,
 * `FormGroup` or `FormArray` instances.
 *
 * A `FormArray` aggregates the values of each child `FormControl` into an array.
 * It calculates its status by reducing the status values of its children. For example, if one of
 * the controls in a `FormArray` is invalid, the entire array becomes invalid.
 *
 * `FormArray` is one of the three fundamental building blocks used to define forms in Angular,
 * along with `FormControl` and `FormGroup`.
 *
 * @usageNotes
 *
 * ### Create an array of form controls
 *
 * ```
 * const arr = new FormArray([
 *   new FormControl('Nancy', Validators.minLength(2)),
 *   new FormControl('Drew'),
 * ]);
 *
 * console.log(arr.value);   // ['Nancy', 'Drew']
 * console.log(arr.status);  // 'VALID'
 * ```
 *
 * ### Create a form array with array-level validators
 *
 * You include array-level validators and async validators. These come in handy
 * when you want to perform validation that considers the value of more than one child
 * control.
 *
 * The two types of validators are passed in separately as the second and third arg
 * respectively, or together as part of an options object.
 *
 * ```
 * const arr = new FormArray([
 *   new FormControl('Nancy'),
 *   new FormControl('Drew')
 * ], {validators: myValidator, asyncValidators: myAsyncValidator});
 * ```
 *
  * ### Set the updateOn property for all controls in a form array
 *
 * The options object is used to set a default value for each child
 * control's `updateOn` property. If you set `updateOn` to `'blur'` at the
 * array level, all child controls default to 'blur', unless the child
 * has explicitly specified a different `updateOn` value.
 *
 * ```ts
 * const arr = new FormArray([
 *    new FormControl()
 * ], {updateOn: 'blur'});
 * ```
 *
 * ### Adding or removing controls from a form array
 *
 * To change the controls in the array, use the `push`, `insert`, or `removeAt` methods
 * in `FormArray` itself. These methods ensure the controls are properly tracked in the
 * form's hierarchy. Do not modify the array of `AbstractControl`s used to instantiate
 * the `FormArray` directly, as that result in strange and unexpected behavior such
 * as broken change detection.
 *
 *
 */
var FormArray = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(FormArray, _super);
    /**
    * Creates a new `FormArray` instance.
    *
    * @param controls An array of child controls. Each child control is given an index
    * where it is registered.
    *
    * @param validatorOrOpts A synchronous validator function, or an array of
    * such functions, or an `AbstractControlOptions` object that contains validation functions
    * and a validation trigger.
    *
    * @param asyncValidator A single async validator or array of async validator functions
    *
    */
    function FormArray(controls, validatorOrOpts, asyncValidator) {
        var _this = _super.call(this, coerceToValidator(validatorOrOpts), coerceToAsyncValidator(asyncValidator, validatorOrOpts)) || this;
        _this.controls = controls;
        _this._initObservables();
        _this._setUpdateStrategy(validatorOrOpts);
        _this._setUpControls();
        _this.updateValueAndValidity({ onlySelf: true, emitEvent: false });
        return _this;
    }
    /**
     * Get the `AbstractControl` at the given `index` in the array.
     *
     * @param index Index in the array to retrieve the control
     */
    FormArray.prototype.at = function (index) { return this.controls[index]; };
    /**
     * Insert a new `AbstractControl` at the end of the array.
     *
     * @param control Form control to be inserted
     */
    FormArray.prototype.push = function (control) {
        this.controls.push(control);
        this._registerControl(control);
        this.updateValueAndValidity();
        this._onCollectionChange();
    };
    /**
     * Insert a new `AbstractControl` at the given `index` in the array.
     *
     * @param index Index in the array to insert the control
     * @param control Form control to be inserted
     */
    FormArray.prototype.insert = function (index, control) {
        this.controls.splice(index, 0, control);
        this._registerControl(control);
        this.updateValueAndValidity();
    };
    /**
     * Remove the control at the given `index` in the array.
     *
     * @param index Index in the array to remove the control
     */
    FormArray.prototype.removeAt = function (index) {
        if (this.controls[index])
            this.controls[index]._registerOnCollectionChange(function () { });
        this.controls.splice(index, 1);
        this.updateValueAndValidity();
    };
    /**
     * Replace an existing control.
     *
     * @param index Index in the array to replace the control
     * @param control The `AbstractControl` control to replace the existing control
     */
    FormArray.prototype.setControl = function (index, control) {
        if (this.controls[index])
            this.controls[index]._registerOnCollectionChange(function () { });
        this.controls.splice(index, 1);
        if (control) {
            this.controls.splice(index, 0, control);
            this._registerControl(control);
        }
        this.updateValueAndValidity();
        this._onCollectionChange();
    };
    Object.defineProperty(FormArray.prototype, "length", {
        /**
         * Length of the control array.
         */
        get: function () { return this.controls.length; },
        enumerable: true,
        configurable: true
    });
    /**
     * Sets the value of the `FormArray`. It accepts an array that matches
     * the structure of the control.
     *
     * This method performs strict checks, and throws an error if you try
     * to set the value of a control that doesn't exist or if you exclude the
     * value of a control.
     *
     * @usageNotes
     * ### Set the values for the controls in the form array
     *
     * ```
     * const arr = new FormArray([
     *   new FormControl(),
     *   new FormControl()
     * ]);
     * console.log(arr.value);   // [null, null]
     *
     * arr.setValue(['Nancy', 'Drew']);
     * console.log(arr.value);   // ['Nancy', 'Drew']
     * ```
     *
     * @param value Array of values for the controls
     * @param options Configure options that determine how the control propagates changes and
     * emits events after the value changes
     *
     * * `onlySelf`: When true, each change only affects this control, and not its parent. Default
     * is false.
     * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
     * `valueChanges`
     * observables emit events with the latest status and value when the control value is updated.
     * When false, no events are emitted.
     * The configuration options are passed to the {@link AbstractControl#updateValueAndValidity
     * updateValueAndValidity} method.
     */
    FormArray.prototype.setValue = function (value, options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        this._checkAllValuesPresent(value);
        value.forEach(function (newValue, index) {
            _this._throwIfControlMissing(index);
            _this.at(index).setValue(newValue, { onlySelf: true, emitEvent: options.emitEvent });
        });
        this.updateValueAndValidity(options);
    };
    /**
     * Patches the value of the `FormArray`. It accepts an array that matches the
     * structure of the control, and does its best to match the values to the correct
     * controls in the group.
     *
     * It accepts both super-sets and sub-sets of the array without throwing an error.
     *
     * @usageNotes
     * ### Patch the values for controls in a form array
     *
     * ```
     * const arr = new FormArray([
     *    new FormControl(),
     *    new FormControl()
     * ]);
     * console.log(arr.value);   // [null, null]
     *
     * arr.patchValue(['Nancy']);
     * console.log(arr.value);   // ['Nancy', null]
     * ```
     *
     * @param value Array of latest values for the controls
     * @param options Configure options that determine how the control propagates changes and
     * emits events after the value changes
     *
     * * `onlySelf`: When true, each change only affects this control, and not its parent. Default
     * is false.
     * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
     * `valueChanges`
     * observables emit events with the latest status and value when the control value is updated.
     * When false, no events are emitted.
     * The configuration options are passed to the {@link AbstractControl#updateValueAndValidity
     * updateValueAndValidity} method.
     */
    FormArray.prototype.patchValue = function (value, options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        value.forEach(function (newValue, index) {
            if (_this.at(index)) {
                _this.at(index).patchValue(newValue, { onlySelf: true, emitEvent: options.emitEvent });
            }
        });
        this.updateValueAndValidity(options);
    };
    /**
     * Resets the `FormArray` and all descendants are marked `pristine` and `untouched`, and the
     * value of all descendants to null or null maps.
     *
     * You reset to a specific form state by passing in an array of states
     * that matches the structure of the control. The state is a standalone value
     * or a form state object with both a value and a disabled status.
     *
     * @usageNotes
     * ### Reset the values in a form array
     *
     * ```ts
     * const arr = new FormArray([
     *    new FormControl(),
     *    new FormControl()
     * ]);
     * arr.reset(['name', 'last name']);
     *
     * console.log(this.arr.value);  // ['name', 'last name']
     * ```
     *
     * ### Reset the values in a form array and the disabled status for the first control
     *
     * ```
     * this.arr.reset([
     *   {value: 'name', disabled: true},
     *   'last'
     * ]);
     *
     * console.log(this.arr.value);  // ['name', 'last name']
     * console.log(this.arr.get(0).status);  // 'DISABLED'
     * ```
     *
     * @param value Array of values for the controls
     * @param options Configure options that determine how the control propagates changes and
     * emits events after the value changes
     *
     * * `onlySelf`: When true, each change only affects this control, and not its parent. Default
     * is false.
     * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
     * `valueChanges`
     * observables emit events with the latest status and value when the control is reset.
     * When false, no events are emitted.
     * The configuration options are passed to the {@link AbstractControl#updateValueAndValidity
     * updateValueAndValidity} method.
     */
    FormArray.prototype.reset = function (value, options) {
        if (value === void 0) { value = []; }
        if (options === void 0) { options = {}; }
        this._forEachChild(function (control, index) {
            control.reset(value[index], { onlySelf: true, emitEvent: options.emitEvent });
        });
        this.updateValueAndValidity(options);
        this._updatePristine(options);
        this._updateTouched(options);
    };
    /**
     * The aggregate value of the array, including any disabled controls.
     *
     * Reports all values regardless of disabled status.
     * For enabled controls only, the `value` property is the best way to get the value of the array.
     */
    FormArray.prototype.getRawValue = function () {
        return this.controls.map(function (control) {
            return control instanceof FormControl ? control.value : control.getRawValue();
        });
    };
    /** @internal */
    FormArray.prototype._syncPendingControls = function () {
        var subtreeUpdated = this.controls.reduce(function (updated, child) {
            return child._syncPendingControls() ? true : updated;
        }, false);
        if (subtreeUpdated)
            this.updateValueAndValidity({ onlySelf: true });
        return subtreeUpdated;
    };
    /** @internal */
    FormArray.prototype._throwIfControlMissing = function (index) {
        if (!this.controls.length) {
            throw new Error("\n        There are no form controls registered with this array yet.  If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      ");
        }
        if (!this.at(index)) {
            throw new Error("Cannot find form control at index " + index);
        }
    };
    /** @internal */
    FormArray.prototype._forEachChild = function (cb) {
        this.controls.forEach(function (control, index) { cb(control, index); });
    };
    /** @internal */
    FormArray.prototype._updateValue = function () {
        var _this = this;
        this.value =
            this.controls.filter(function (control) { return control.enabled || _this.disabled; })
                .map(function (control) { return control.value; });
    };
    /** @internal */
    FormArray.prototype._anyControls = function (condition) {
        return this.controls.some(function (control) { return control.enabled && condition(control); });
    };
    /** @internal */
    FormArray.prototype._setUpControls = function () {
        var _this = this;
        this._forEachChild(function (control) { return _this._registerControl(control); });
    };
    /** @internal */
    FormArray.prototype._checkAllValuesPresent = function (value) {
        this._forEachChild(function (control, i) {
            if (value[i] === undefined) {
                throw new Error("Must supply a value for form control at index: " + i + ".");
            }
        });
    };
    /** @internal */
    FormArray.prototype._allControlsDisabled = function () {
        var e_2, _a;
        try {
            for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(this.controls), _c = _b.next(); !_c.done; _c = _b.next()) {
                var control = _c.value;
                if (control.enabled)
                    return false;
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_2) throw e_2.error; }
        }
        return this.controls.length > 0 || this.disabled;
    };
    FormArray.prototype._registerControl = function (control) {
        control.setParent(this);
        control._registerOnCollectionChange(this._onCollectionChange);
    };
    return FormArray;
}(AbstractControl));

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var formDirectiveProvider = {
    provide: ControlContainer,
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return NgForm; })
};
var resolvedPromise = Promise.resolve(null);
/**
 * @description
 *
 * Creates a top-level `FormGroup` instance and binds it to a form
 * to track aggregate form value and validation status.
 *
 * As soon as you import the `FormsModule`, this directive becomes active by default on
 * all `<form>` tags.  You don't need to add a special selector.
 *
 * You can export the directive into a local template variable using `ngForm` as the key
 * (ex: `#myForm="ngForm"`). This is optional, but useful.  Many properties from the underlying
 * `FormGroup` instance are duplicated on the directive itself, so a reference to it
 * will give you access to the aggregate value and validity status of the form, as well as
 * user interaction properties like `dirty` and `touched`.
 *
 * To register child controls with the form, you'll want to use `NgModel` with a
 * `name` attribute.  You can also use `NgModelGroup` if you'd like to create
 * sub-groups within the form.
 *
 * You can listen to the directive's `ngSubmit` event to be notified when the user has
 * triggered a form submission. The `ngSubmit` event will be emitted with the original form
 * submission event.
 *
 * In template driven forms, all `<form>` tags are automatically tagged as `NgForm`.
 * If you want to import the `FormsModule` but skip its usage in some forms,
 * for example, to use native HTML5 validation, you can add `ngNoForm` and the `<form>`
 * tags won't create an `NgForm` directive. In reactive forms, using `ngNoForm` is
 * unnecessary because the `<form>` tags are inert. In that case, you would
 * refrain from using the `formGroup` directive.
 *
 * Support for using `ngForm` element selector has been deprecated in Angular v6 and will be removed
 * in Angular v9.
 *
 * This has been deprecated to keep selectors consistent with other core Angular selectors,
 * as element selectors are typically written in kebab-case.
 *
 * Now deprecated:
 * ```html
 * <ngForm #myForm="ngForm">
 * ```
 *
 * After:
 * ```html
 * <ng-form #myForm="ngForm">
 * ```
 *
 * {@example forms/ts/simpleForm/simple_form_example.ts region='Component'}
 *
 * @ngModule FormsModule
 */
var NgForm = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(NgForm, _super);
    function NgForm(validators, asyncValidators) {
        var _this = _super.call(this) || this;
        _this.submitted = false;
        _this._directives = [];
        _this.ngSubmit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        _this.form =
            new FormGroup({}, composeValidators(validators), composeAsyncValidators(asyncValidators));
        return _this;
    }
    NgForm.prototype.ngAfterViewInit = function () { this._setUpdateStrategy(); };
    Object.defineProperty(NgForm.prototype, "formDirective", {
        get: function () { return this; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgForm.prototype, "control", {
        get: function () { return this.form; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgForm.prototype, "path", {
        get: function () { return []; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgForm.prototype, "controls", {
        get: function () { return this.form.controls; },
        enumerable: true,
        configurable: true
    });
    NgForm.prototype.addControl = function (dir) {
        var _this = this;
        resolvedPromise.then(function () {
            var container = _this._findContainer(dir.path);
            dir.control =
                container.registerControl(dir.name, dir.control);
            setUpControl(dir.control, dir);
            dir.control.updateValueAndValidity({ emitEvent: false });
            _this._directives.push(dir);
        });
    };
    NgForm.prototype.getControl = function (dir) { return this.form.get(dir.path); };
    NgForm.prototype.removeControl = function (dir) {
        var _this = this;
        resolvedPromise.then(function () {
            var container = _this._findContainer(dir.path);
            if (container) {
                container.removeControl(dir.name);
            }
            removeDir(_this._directives, dir);
        });
    };
    NgForm.prototype.addFormGroup = function (dir) {
        var _this = this;
        resolvedPromise.then(function () {
            var container = _this._findContainer(dir.path);
            var group = new FormGroup({});
            setUpFormContainer(group, dir);
            container.registerControl(dir.name, group);
            group.updateValueAndValidity({ emitEvent: false });
        });
    };
    NgForm.prototype.removeFormGroup = function (dir) {
        var _this = this;
        resolvedPromise.then(function () {
            var container = _this._findContainer(dir.path);
            if (container) {
                container.removeControl(dir.name);
            }
        });
    };
    NgForm.prototype.getFormGroup = function (dir) { return this.form.get(dir.path); };
    NgForm.prototype.updateModel = function (dir, value) {
        var _this = this;
        resolvedPromise.then(function () {
            var ctrl = _this.form.get(dir.path);
            ctrl.setValue(value);
        });
    };
    NgForm.prototype.setValue = function (value) { this.control.setValue(value); };
    NgForm.prototype.onSubmit = function ($event) {
        this.submitted = true;
        syncPendingControls(this.form, this._directives);
        this.ngSubmit.emit($event);
        return false;
    };
    NgForm.prototype.onReset = function () { this.resetForm(); };
    NgForm.prototype.resetForm = function (value) {
        if (value === void 0) { value = undefined; }
        this.form.reset(value);
        this.submitted = false;
    };
    NgForm.prototype._setUpdateStrategy = function () {
        if (this.options && this.options.updateOn != null) {
            this.form._updateOn = this.options.updateOn;
        }
    };
    /** @internal */
    NgForm.prototype._findContainer = function (path) {
        path.pop();
        return path.length ? this.form.get(path) : this.form;
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('ngFormOptions'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], NgForm.prototype, "options", void 0);
    NgForm = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: 'form:not([ngNoForm]):not([formGroup]),ngForm,ng-form,[ngForm]',
            providers: [formDirectiveProvider],
            host: { '(submit)': 'onSubmit($event)', '(reset)': 'onReset()' },
            outputs: ['ngSubmit'],
            exportAs: 'ngForm'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Self"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(NG_VALIDATORS)),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Self"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(NG_ASYNC_VALIDATORS)),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Array, Array])
    ], NgForm);
    return NgForm;
}(ControlContainer));

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var TemplateDrivenErrors = /** @class */ (function () {
    function TemplateDrivenErrors() {
    }
    TemplateDrivenErrors.modelParentException = function () {
        throw new Error("\n      ngModel cannot be used to register form controls with a parent formGroup directive.  Try using\n      formGroup's partner directive \"formControlName\" instead.  Example:\n\n      " + FormErrorExamples.formControlName + "\n\n      Or, if you'd like to avoid registering this form control, indicate that it's standalone in ngModelOptions:\n\n      Example:\n\n      " + FormErrorExamples.ngModelWithFormGroup);
    };
    TemplateDrivenErrors.formGroupNameException = function () {
        throw new Error("\n      ngModel cannot be used to register form controls with a parent formGroupName or formArrayName directive.\n\n      Option 1: Use formControlName instead of ngModel (reactive strategy):\n\n      " + FormErrorExamples.formGroupName + "\n\n      Option 2:  Update ngModel's parent be ngModelGroup (template-driven strategy):\n\n      " + FormErrorExamples.ngModelGroup);
    };
    TemplateDrivenErrors.missingNameException = function () {
        throw new Error("If ngModel is used within a form tag, either the name attribute must be set or the form\n      control must be defined as 'standalone' in ngModelOptions.\n\n      Example 1: <input [(ngModel)]=\"person.firstName\" name=\"first\">\n      Example 2: <input [(ngModel)]=\"person.firstName\" [ngModelOptions]=\"{standalone: true}\">");
    };
    TemplateDrivenErrors.modelGroupParentException = function () {
        throw new Error("\n      ngModelGroup cannot be used with a parent formGroup directive.\n\n      Option 1: Use formGroupName instead of ngModelGroup (reactive strategy):\n\n      " + FormErrorExamples.formGroupName + "\n\n      Option 2:  Use a regular form tag instead of the formGroup directive (template-driven strategy):\n\n      " + FormErrorExamples.ngModelGroup);
    };
    TemplateDrivenErrors.ngFormWarning = function () {
        console.warn("\n    It looks like you're using 'ngForm'.\n\n    Support for using the 'ngForm' element selector has been deprecated in Angular v6 and will be removed\n    in Angular v9.\n\n    Use 'ng-form' instead.\n\n    Before:\n    <ngForm #myForm=\"ngForm\">\n\n    After:\n    <ng-form #myForm=\"ngForm\">\n    ");
    };
    return TemplateDrivenErrors;
}());

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Token to provide to turn off the warning when using 'ngForm' deprecated selector.
 */
var NG_FORM_SELECTOR_WARNING = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('NgFormSelectorWarning');
/**
 * This directive is solely used to display warnings when the deprecated `ngForm` selector is used.
 *
 * @deprecated in Angular v6 and will be removed in Angular v9.
 * @ngModule FormsModule
 */
var NgFormSelectorWarning = /** @class */ (function () {
    function NgFormSelectorWarning(ngFormWarning) {
        if (((!ngFormWarning || ngFormWarning === 'once') && !NgFormSelectorWarning_1._ngFormWarning) ||
            ngFormWarning === 'always') {
            TemplateDrivenErrors.ngFormWarning();
            NgFormSelectorWarning_1._ngFormWarning = true;
        }
    }
    NgFormSelectorWarning_1 = NgFormSelectorWarning;
    var NgFormSelectorWarning_1;
    /**
     * Static property used to track whether the deprecation warning for this selector has been sent.
     * Used to support warning config of "once".
     *
     * @internal
     */
    NgFormSelectorWarning._ngFormWarning = false;
    NgFormSelectorWarning = NgFormSelectorWarning_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({ selector: 'ngForm' }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(NG_FORM_SELECTOR_WARNING)),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object])
    ], NgFormSelectorWarning);
    return NgFormSelectorWarning;
}());

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var modelGroupProvider = {
    provide: ControlContainer,
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return NgModelGroup; })
};
/**
 * @description
 *
 * Creates and binds a `FormGroup` instance to a DOM element.
 *
 * This directive can only be used as a child of `NgForm` (or in other words,
 * within `<form>` tags).
 *
 * Use this directive if you'd like to create a sub-group within a form. This can
 * come in handy if you want to validate a sub-group of your form separately from
 * the rest of your form, or if some values in your domain model make more sense to
 * consume together in a nested object.
 *
 * Pass in the name you'd like this sub-group to have and it will become the key
 * for the sub-group in the form's full value. You can also export the directive into
 * a local template variable using `ngModelGroup` (ex: `#myGroup="ngModelGroup"`).
 *
 * {@example forms/ts/ngModelGroup/ng_model_group_example.ts region='Component'}
 *
 * @ngModule FormsModule
 */
var NgModelGroup = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(NgModelGroup, _super);
    function NgModelGroup(parent, validators, asyncValidators) {
        var _this = _super.call(this) || this;
        _this._parent = parent;
        _this._validators = validators;
        _this._asyncValidators = asyncValidators;
        return _this;
    }
    NgModelGroup_1 = NgModelGroup;
    /** @internal */
    NgModelGroup.prototype._checkParentType = function () {
        if (!(this._parent instanceof NgModelGroup_1) && !(this._parent instanceof NgForm)) {
            TemplateDrivenErrors.modelGroupParentException();
        }
    };
    var NgModelGroup_1;
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('ngModelGroup'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
    ], NgModelGroup.prototype, "name", void 0);
    NgModelGroup = NgModelGroup_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({ selector: '[ngModelGroup]', providers: [modelGroupProvider], exportAs: 'ngModelGroup' }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Host"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"])()),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Self"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(NG_VALIDATORS)),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Self"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(NG_ASYNC_VALIDATORS)),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [ControlContainer, Array, Array])
    ], NgModelGroup);
    return NgModelGroup;
}(AbstractFormGroupDirective));

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var formControlBinding = {
    provide: NgControl,
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return NgModel; })
};
/**
 * `ngModel` forces an additional change detection run when its inputs change:
 * E.g.:
 * ```
 * <div>{{myModel.valid}}</div>
 * <input [(ngModel)]="myValue" #myModel="ngModel">
 * ```
 * I.e. `ngModel` can export itself on the element and then be used in the template.
 * Normally, this would result in expressions before the `input` that use the exported directive
 * to have and old value as they have been
 * dirty checked before. As this is a very common case for `ngModel`, we added this second change
 * detection run.
 *
 * Notes:
 * - this is just one extra run no matter how many `ngModel` have been changed.
 * - this is a general problem when using `exportAs` for directives!
 */
var resolvedPromise$1 = Promise.resolve(null);
/**
 * @description
 *
 * Creates a `FormControl` instance from a domain model and binds it
 * to a form control element.
 *
 * The `FormControl` instance will track the value, user interaction, and
 * validation status of the control and keep the view synced with the model. If used
 * within a parent form, the directive will also register itself with the form as a child
 * control.
 *
 * This directive can be used by itself or as part of a larger form. All you need is the
 * `ngModel` selector to activate it.
 *
 * It accepts a domain model as an optional `Input`. If you have a one-way binding
 * to `ngModel` with `[]` syntax, changing the value of the domain model in the component
 * class will set the value in the view. If you have a two-way binding with `[()]` syntax
 * (also known as 'banana-box syntax'), the value in the UI will always be synced back to
 * the domain model in your class as well.
 *
 * If you wish to inspect the properties of the associated `FormControl` (like
 * validity state), you can also export the directive into a local template variable using
 * `ngModel` as the key (ex: `#myVar="ngModel"`). You can then access the control using the
 * directive's `control` property, but most properties you'll need (like `valid` and `dirty`)
 * will fall through to the control anyway, so you can access them directly. You can see a
 * full list of properties directly available in `AbstractControlDirective`.
 *
 * The following is an example of a simple standalone control using `ngModel`:
 *
 * {@example forms/ts/simpleNgModel/simple_ng_model_example.ts region='Component'}
 *
 * When using the `ngModel` within `<form>` tags, you'll also need to supply a `name` attribute
 * so that the control can be registered with the parent form under that name.
 *
 * It's worth noting that in the context of a parent form, you often can skip one-way or
 * two-way binding because the parent form will sync the value for you. You can access
 * its properties by exporting it into a local template variable using `ngForm` (ex:
 * `#f="ngForm"`). Then you can pass it where it needs to go on submit.
 *
 * If you do need to populate initial values into your form, using a one-way binding for
 * `ngModel` tends to be sufficient as long as you use the exported form's value rather
 * than the domain model's value on submit.
 *
 * Take a look at an example of using `ngModel` within a form:
 *
 * {@example forms/ts/simpleForm/simple_form_example.ts region='Component'}
 *
 * To see `ngModel` examples with different form control types, see:
 *
 * * Radio buttons: `RadioControlValueAccessor`
 * * Selects: `SelectControlValueAccessor`
 *
 * @ngModule FormsModule
 */
var NgModel = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(NgModel, _super);
    function NgModel(parent, validators, asyncValidators, valueAccessors) {
        var _this = _super.call(this) || this;
        _this.control = new FormControl();
        /** @internal */
        _this._registered = false;
        _this.update = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        _this._parent = parent;
        _this._rawValidators = validators || [];
        _this._rawAsyncValidators = asyncValidators || [];
        _this.valueAccessor = selectValueAccessor(_this, valueAccessors);
        return _this;
    }
    NgModel.prototype.ngOnChanges = function (changes) {
        this._checkForErrors();
        if (!this._registered)
            this._setUpControl();
        if ('isDisabled' in changes) {
            this._updateDisabled(changes);
        }
        if (isPropertyUpdated(changes, this.viewModel)) {
            this._updateValue(this.model);
            this.viewModel = this.model;
        }
    };
    NgModel.prototype.ngOnDestroy = function () { this.formDirective && this.formDirective.removeControl(this); };
    Object.defineProperty(NgModel.prototype, "path", {
        get: function () {
            return this._parent ? controlPath(this.name, this._parent) : [this.name];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgModel.prototype, "formDirective", {
        get: function () { return this._parent ? this._parent.formDirective : null; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgModel.prototype, "validator", {
        get: function () { return composeValidators(this._rawValidators); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgModel.prototype, "asyncValidator", {
        get: function () {
            return composeAsyncValidators(this._rawAsyncValidators);
        },
        enumerable: true,
        configurable: true
    });
    NgModel.prototype.viewToModelUpdate = function (newValue) {
        this.viewModel = newValue;
        this.update.emit(newValue);
    };
    NgModel.prototype._setUpControl = function () {
        this._setUpdateStrategy();
        this._isStandalone() ? this._setUpStandalone() :
            this.formDirective.addControl(this);
        this._registered = true;
    };
    NgModel.prototype._setUpdateStrategy = function () {
        if (this.options && this.options.updateOn != null) {
            this.control._updateOn = this.options.updateOn;
        }
    };
    NgModel.prototype._isStandalone = function () {
        return !this._parent || !!(this.options && this.options.standalone);
    };
    NgModel.prototype._setUpStandalone = function () {
        setUpControl(this.control, this);
        this.control.updateValueAndValidity({ emitEvent: false });
    };
    NgModel.prototype._checkForErrors = function () {
        if (!this._isStandalone()) {
            this._checkParentType();
        }
        this._checkName();
    };
    NgModel.prototype._checkParentType = function () {
        if (!(this._parent instanceof NgModelGroup) &&
            this._parent instanceof AbstractFormGroupDirective) {
            TemplateDrivenErrors.formGroupNameException();
        }
        else if (!(this._parent instanceof NgModelGroup) && !(this._parent instanceof NgForm)) {
            TemplateDrivenErrors.modelParentException();
        }
    };
    NgModel.prototype._checkName = function () {
        if (this.options && this.options.name)
            this.name = this.options.name;
        if (!this._isStandalone() && !this.name) {
            TemplateDrivenErrors.missingNameException();
        }
    };
    NgModel.prototype._updateValue = function (value) {
        var _this = this;
        resolvedPromise$1.then(function () { _this.control.setValue(value, { emitViewToModelChange: false }); });
    };
    NgModel.prototype._updateDisabled = function (changes) {
        var _this = this;
        var disabledValue = changes['isDisabled'].currentValue;
        var isDisabled = disabledValue === '' || (disabledValue && disabledValue !== 'false');
        resolvedPromise$1.then(function () {
            if (isDisabled && !_this.control.disabled) {
                _this.control.disable();
            }
            else if (!isDisabled && _this.control.disabled) {
                _this.control.enable();
            }
        });
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
    ], NgModel.prototype, "name", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('disabled'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
    ], NgModel.prototype, "isDisabled", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('ngModel'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], NgModel.prototype, "model", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('ngModelOptions'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], NgModel.prototype, "options", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('ngModelChange'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], NgModel.prototype, "update", void 0);
    NgModel = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[ngModel]:not([formControlName]):not([formControl])',
            providers: [formControlBinding],
            exportAs: 'ngModel'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Host"])()),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Self"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(NG_VALIDATORS)),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Self"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(NG_ASYNC_VALIDATORS)),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Self"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(NG_VALUE_ACCESSOR)),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [ControlContainer,
            Array,
            Array, Array])
    ], NgModel);
    return NgModel;
}(NgControl));

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Token to provide to turn off the ngModel warning on formControl and formControlName.
 */
var NG_MODEL_WITH_FORM_CONTROL_WARNING = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('NgModelWithFormControlWarning');
var formControlBinding$1 = {
    provide: NgControl,
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return FormControlDirective; })
};
/**
 * @description
 *
 * Syncs a standalone `FormControl` instance to a form control element.
 *
 * This directive ensures that any values written to the `FormControl`
 * instance programmatically will be written to the DOM element (model -> view). Conversely,
 * any values written to the DOM element through user input will be reflected in the
 * `FormControl` instance (view -> model).
 *
 * @usageNotes
 * Use this directive if you'd like to create and manage a `FormControl` instance directly.
 * Simply create a `FormControl`, save it to your component class, and pass it into the
 * `FormControlDirective`.
 *
 * This directive is designed to be used as a standalone control.  Unlike `FormControlName`,
 * it does not require that your `FormControl` instance be part of any parent
 * `FormGroup`, and it won't be registered to any `FormGroupDirective` that
 * exists above it.
 *
 * **Get the value**: the `value` property is always synced and available on the
 * `FormControl` instance. See a full list of available properties in
 * `AbstractControl`.
 *
 * **Set the value**: You can pass in an initial value when instantiating the `FormControl`,
 * or you can set it programmatically later using {@link AbstractControl#setValue setValue} or
 * {@link AbstractControl#patchValue patchValue}.
 *
 * **Listen to value**: If you want to listen to changes in the value of the control, you can
 * subscribe to the {@link AbstractControl#valueChanges valueChanges} event.  You can also listen to
 * {@link AbstractControl#statusChanges statusChanges} to be notified when the validation status is
 * re-calculated.
 *
 * ### Example
 *
 * {@example forms/ts/simpleFormControl/simple_form_control_example.ts region='Component'}
 *
 * ### Use with ngModel
 *
 * Support for using the `ngModel` input property and `ngModelChange` event with reactive
 * form directives has been deprecated in Angular v6 and will be removed in Angular v7.
 *
 * Now deprecated:
 *
 * ```html
 * <input [formControl]="control" [(ngModel)]="value">
 * ```
 *
 * ```ts
 * this.value = 'some value';
 * ```
 *
 * This has been deprecated for a few reasons. First, developers have found this pattern
 * confusing. It seems like the actual `ngModel` directive is being used, but in fact it's
 * an input/output property named `ngModel` on the reactive form directive that simply
 * approximates (some of) its behavior. Specifically, it allows getting/setting the value
 * and intercepting value events. However, some of `ngModel`'s other features - like
 * delaying updates with`ngModelOptions` or exporting the directive - simply don't work,
 * which has understandably caused some confusion.
 *
 * In addition, this pattern mixes template-driven and reactive forms strategies, which
 * we generally don't recommend because it doesn't take advantage of the full benefits of
 * either strategy. Setting the value in the template violates the template-agnostic
 * principles behind reactive forms, whereas adding a `FormControl`/`FormGroup` layer in
 * the class removes the convenience of defining forms in the template.
 *
 * To update your code before v7, you'll want to decide whether to stick with reactive form
 * directives (and get/set values using reactive forms patterns) or switch over to
 * template-driven directives.
 *
 * After (choice 1 - use reactive forms):
 *
 * ```html
 * <input [formControl]="control">
 * ```
 *
 * ```ts
 * this.control.setValue('some value');
 * ```
 *
 * After (choice 2 - use template-driven forms):
 *
 * ```html
 * <input [(ngModel)]="value">
 * ```
 *
 * ```ts
 * this.value = 'some value';
 * ```
 *
 * By default, when you use this pattern, you will see a deprecation warning once in dev
 * mode. You can choose to silence this warning by providing a config for
 * `ReactiveFormsModule` at import time:
 *
 * ```ts
 * imports: [
 *   ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'});
 * ]
 * ```
 *
 * Alternatively, you can choose to surface a separate warning for each instance of this
 * pattern with a config value of `"always"`. This may help to track down where in the code
 * the pattern is being used as the code is being updated.
 *
 * @ngModule ReactiveFormsModule
 */
var FormControlDirective = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(FormControlDirective, _super);
    function FormControlDirective(validators, asyncValidators, valueAccessors, _ngModelWarningConfig) {
        var _this = _super.call(this) || this;
        _this._ngModelWarningConfig = _ngModelWarningConfig;
        /** @deprecated as of v6 */
        _this.update = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * Instance property used to track whether an ngModel warning has been sent out for this
         * particular FormControlDirective instance. Used to support warning config of "always".
         *
         * @internal
         */
        _this._ngModelWarningSent = false;
        _this._rawValidators = validators || [];
        _this._rawAsyncValidators = asyncValidators || [];
        _this.valueAccessor = selectValueAccessor(_this, valueAccessors);
        return _this;
    }
    FormControlDirective_1 = FormControlDirective;
    Object.defineProperty(FormControlDirective.prototype, "isDisabled", {
        set: function (isDisabled) { ReactiveErrors.disabledAttrWarning(); },
        enumerable: true,
        configurable: true
    });
    FormControlDirective.prototype.ngOnChanges = function (changes) {
        if (this._isControlChanged(changes)) {
            setUpControl(this.form, this);
            if (this.control.disabled && this.valueAccessor.setDisabledState) {
                this.valueAccessor.setDisabledState(true);
            }
            this.form.updateValueAndValidity({ emitEvent: false });
        }
        if (isPropertyUpdated(changes, this.viewModel)) {
            _ngModelWarning('formControl', FormControlDirective_1, this, this._ngModelWarningConfig);
            this.form.setValue(this.model);
            this.viewModel = this.model;
        }
    };
    Object.defineProperty(FormControlDirective.prototype, "path", {
        get: function () { return []; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormControlDirective.prototype, "validator", {
        get: function () { return composeValidators(this._rawValidators); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormControlDirective.prototype, "asyncValidator", {
        get: function () {
            return composeAsyncValidators(this._rawAsyncValidators);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormControlDirective.prototype, "control", {
        get: function () { return this.form; },
        enumerable: true,
        configurable: true
    });
    FormControlDirective.prototype.viewToModelUpdate = function (newValue) {
        this.viewModel = newValue;
        this.update.emit(newValue);
    };
    FormControlDirective.prototype._isControlChanged = function (changes) {
        return changes.hasOwnProperty('form');
    };
    var FormControlDirective_1;
    /**
     * Static property used to track whether any ngModel warnings have been sent across
     * all instances of FormControlDirective. Used to support warning config of "once".
     *
     * @internal
     */
    FormControlDirective._ngModelWarningSentOnce = false;
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('formControl'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", FormControl)
    ], FormControlDirective.prototype, "form", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('disabled'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Boolean])
    ], FormControlDirective.prototype, "isDisabled", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('ngModel'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], FormControlDirective.prototype, "model", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('ngModelChange'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], FormControlDirective.prototype, "update", void 0);
    FormControlDirective = FormControlDirective_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({ selector: '[formControl]', providers: [formControlBinding$1], exportAs: 'ngForm' }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Self"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(NG_VALIDATORS)),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Self"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(NG_ASYNC_VALIDATORS)),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Self"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(NG_VALUE_ACCESSOR)),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(NG_MODEL_WITH_FORM_CONTROL_WARNING)),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Array,
            Array, Array, Object])
    ], FormControlDirective);
    return FormControlDirective;
}(NgControl));

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var formDirectiveProvider$1 = {
    provide: ControlContainer,
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return FormGroupDirective; })
};
/**
 * @description
 *
 * Binds an existing `FormGroup` to a DOM element.
 *
 * This directive accepts an existing `FormGroup` instance. It will then use this
 * `FormGroup` instance to match any child `FormControl`, `FormGroup`,
 * and `FormArray` instances to child `FormControlName`, `FormGroupName`,
 * and `FormArrayName` directives.
 *
 * @usageNotes
 * **Set value**: You can set the form's initial value when instantiating the
 * `FormGroup`, or you can set it programmatically later using the `FormGroup`'s
 * {@link AbstractControl#setValue setValue} or {@link AbstractControl#patchValue patchValue}
 * methods.
 *
 * **Listen to value**: If you want to listen to changes in the value of the form, you can subscribe
 * to the `FormGroup`'s {@link AbstractControl#valueChanges valueChanges} event.  You can also
 * listen to its {@link AbstractControl#statusChanges statusChanges} event to be notified when the
 * validation status is re-calculated.
 *
 * Furthermore, you can listen to the directive's `ngSubmit` event to be notified when the user has
 * triggered a form submission. The `ngSubmit` event will be emitted with the original form
 * submission event.
 *
 * ### Example
 *
 * In this example, we create form controls for first name and last name.
 *
 * {@example forms/ts/simpleFormGroup/simple_form_group_example.ts region='Component'}
 *
 * @ngModule ReactiveFormsModule
 */
var FormGroupDirective = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(FormGroupDirective, _super);
    function FormGroupDirective(_validators, _asyncValidators) {
        var _this = _super.call(this) || this;
        _this._validators = _validators;
        _this._asyncValidators = _asyncValidators;
        _this.submitted = false;
        _this.directives = [];
        _this.form = null;
        _this.ngSubmit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        return _this;
    }
    FormGroupDirective.prototype.ngOnChanges = function (changes) {
        this._checkFormPresent();
        if (changes.hasOwnProperty('form')) {
            this._updateValidators();
            this._updateDomValue();
            this._updateRegistrations();
        }
    };
    Object.defineProperty(FormGroupDirective.prototype, "formDirective", {
        get: function () { return this; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormGroupDirective.prototype, "control", {
        get: function () { return this.form; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormGroupDirective.prototype, "path", {
        get: function () { return []; },
        enumerable: true,
        configurable: true
    });
    FormGroupDirective.prototype.addControl = function (dir) {
        var ctrl = this.form.get(dir.path);
        setUpControl(ctrl, dir);
        ctrl.updateValueAndValidity({ emitEvent: false });
        this.directives.push(dir);
        return ctrl;
    };
    FormGroupDirective.prototype.getControl = function (dir) { return this.form.get(dir.path); };
    FormGroupDirective.prototype.removeControl = function (dir) { removeDir(this.directives, dir); };
    FormGroupDirective.prototype.addFormGroup = function (dir) {
        var ctrl = this.form.get(dir.path);
        setUpFormContainer(ctrl, dir);
        ctrl.updateValueAndValidity({ emitEvent: false });
    };
    FormGroupDirective.prototype.removeFormGroup = function (dir) { };
    FormGroupDirective.prototype.getFormGroup = function (dir) { return this.form.get(dir.path); };
    FormGroupDirective.prototype.addFormArray = function (dir) {
        var ctrl = this.form.get(dir.path);
        setUpFormContainer(ctrl, dir);
        ctrl.updateValueAndValidity({ emitEvent: false });
    };
    FormGroupDirective.prototype.removeFormArray = function (dir) { };
    FormGroupDirective.prototype.getFormArray = function (dir) { return this.form.get(dir.path); };
    FormGroupDirective.prototype.updateModel = function (dir, value) {
        var ctrl = this.form.get(dir.path);
        ctrl.setValue(value);
    };
    FormGroupDirective.prototype.onSubmit = function ($event) {
        this.submitted = true;
        syncPendingControls(this.form, this.directives);
        this.ngSubmit.emit($event);
        return false;
    };
    FormGroupDirective.prototype.onReset = function () { this.resetForm(); };
    FormGroupDirective.prototype.resetForm = function (value) {
        if (value === void 0) { value = undefined; }
        this.form.reset(value);
        this.submitted = false;
    };
    /** @internal */
    FormGroupDirective.prototype._updateDomValue = function () {
        var _this = this;
        this.directives.forEach(function (dir) {
            var newCtrl = _this.form.get(dir.path);
            if (dir.control !== newCtrl) {
                cleanUpControl(dir.control, dir);
                if (newCtrl)
                    setUpControl(newCtrl, dir);
                dir.control = newCtrl;
            }
        });
        this.form._updateTreeValidity({ emitEvent: false });
    };
    FormGroupDirective.prototype._updateRegistrations = function () {
        var _this = this;
        this.form._registerOnCollectionChange(function () { return _this._updateDomValue(); });
        if (this._oldForm)
            this._oldForm._registerOnCollectionChange(function () { });
        this._oldForm = this.form;
    };
    FormGroupDirective.prototype._updateValidators = function () {
        var sync = composeValidators(this._validators);
        this.form.validator = Validators.compose([this.form.validator, sync]);
        var async = composeAsyncValidators(this._asyncValidators);
        this.form.asyncValidator = Validators.composeAsync([this.form.asyncValidator, async]);
    };
    FormGroupDirective.prototype._checkFormPresent = function () {
        if (!this.form) {
            ReactiveErrors.missingFormException();
        }
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('formGroup'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", FormGroup)
    ], FormGroupDirective.prototype, "form", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], FormGroupDirective.prototype, "ngSubmit", void 0);
    FormGroupDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[formGroup]',
            providers: [formDirectiveProvider$1],
            host: { '(submit)': 'onSubmit($event)', '(reset)': 'onReset()' },
            exportAs: 'ngForm'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Self"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(NG_VALIDATORS)),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Self"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(NG_ASYNC_VALIDATORS)),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Array, Array])
    ], FormGroupDirective);
    return FormGroupDirective;
}(ControlContainer));

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var formGroupNameProvider = {
    provide: ControlContainer,
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return FormGroupName; })
};
/**
 * @description
 *
 * Syncs a nested `FormGroup` to a DOM element.
 *
 * This directive can only be used with a parent `FormGroupDirective` (selector:
 * `[formGroup]`).
 *
 * It accepts the string name of the nested `FormGroup` you want to link, and
 * will look for a `FormGroup` registered with that name in the parent
 * `FormGroup` instance you passed into `FormGroupDirective`.
 *
 * Nested form groups can come in handy when you want to validate a sub-group of a
 * form separately from the rest or when you'd like to group the values of certain
 * controls into their own nested object.
 *
 * @usageNotes
 * **Access the group**: You can access the associated `FormGroup` using the
 * {@link AbstractControl#get get} method. Ex: `this.form.get('name')`.
 *
 * You can also access individual controls within the group using dot syntax.
 * Ex: `this.form.get('name.first')`
 *
 * **Get the value**: the `value` property is always synced and available on the
 * `FormGroup`. See a full list of available properties in `AbstractControl`.
 *
 * **Set the value**: You can set an initial value for each child control when instantiating
 * the `FormGroup`, or you can set it programmatically later using
 * {@link AbstractControl#setValue setValue} or {@link AbstractControl#patchValue patchValue}.
 *
 * **Listen to value**: If you want to listen to changes in the value of the group, you can
 * subscribe to the {@link AbstractControl#valueChanges valueChanges} event.  You can also listen to
 * {@link AbstractControl#statusChanges statusChanges} to be notified when the validation status is
 * re-calculated.
 *
 * ### Example
 *
 * {@example forms/ts/nestedFormGroup/nested_form_group_example.ts region='Component'}
 *
 * @ngModule ReactiveFormsModule
 */
var FormGroupName = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(FormGroupName, _super);
    function FormGroupName(parent, validators, asyncValidators) {
        var _this = _super.call(this) || this;
        _this._parent = parent;
        _this._validators = validators;
        _this._asyncValidators = asyncValidators;
        return _this;
    }
    /** @internal */
    FormGroupName.prototype._checkParentType = function () {
        if (_hasInvalidParent(this._parent)) {
            ReactiveErrors.groupParentException();
        }
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('formGroupName'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
    ], FormGroupName.prototype, "name", void 0);
    FormGroupName = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({ selector: '[formGroupName]', providers: [formGroupNameProvider] }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Host"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"])()),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Self"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(NG_VALIDATORS)),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Self"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(NG_ASYNC_VALIDATORS)),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [ControlContainer, Array, Array])
    ], FormGroupName);
    return FormGroupName;
}(AbstractFormGroupDirective));
var formArrayNameProvider = {
    provide: ControlContainer,
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return FormArrayName; })
};
/**
 * @description
 *
 * Syncs a nested `FormArray` to a DOM element.
 *
 * This directive is designed to be used with a parent `FormGroupDirective` (selector:
 * `[formGroup]`).
 *
 * It accepts the string name of the nested `FormArray` you want to link, and
 * will look for a `FormArray` registered with that name in the parent
 * `FormGroup` instance you passed into `FormGroupDirective`.
 *
 * Nested form arrays can come in handy when you have a group of form controls but
 * you're not sure how many there will be. Form arrays allow you to create new
 * form controls dynamically.
 *
 * @usageNotes
 * **Access the array**: You can access the associated `FormArray` using the
 * {@link AbstractControl#get get} method on the parent `FormGroup`.
 * Ex: `this.form.get('cities')`.
 *
 * **Get the value**: the `value` property is always synced and available on the
 * `FormArray`. See a full list of available properties in `AbstractControl`.
 *
 * **Set the value**: You can set an initial value for each child control when instantiating
 * the `FormArray`, or you can set the value programmatically later using the
 * `FormArray`'s {@link AbstractControl#setValue setValue} or
 * {@link AbstractControl#patchValue patchValue} methods.
 *
 * **Listen to value**: If you want to listen to changes in the value of the array, you can
 * subscribe to the `FormArray`'s {@link AbstractControl#valueChanges valueChanges} event.
 * You can also listen to its {@link AbstractControl#statusChanges statusChanges} event to be
 * notified when the validation status is re-calculated.
 *
 * **Add new controls**: You can add new controls to the `FormArray` dynamically by calling
 * its {@link FormArray#push push} method.
 * Ex: `this.form.get('cities').push(new FormControl());`
 *
 * ### Example
 *
 * {@example forms/ts/nestedFormArray/nested_form_array_example.ts region='Component'}
 *
 * @ngModule ReactiveFormsModule
 */
var FormArrayName = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(FormArrayName, _super);
    function FormArrayName(parent, validators, asyncValidators) {
        var _this = _super.call(this) || this;
        _this._parent = parent;
        _this._validators = validators;
        _this._asyncValidators = asyncValidators;
        return _this;
    }
    FormArrayName.prototype.ngOnInit = function () {
        this._checkParentType();
        this.formDirective.addFormArray(this);
    };
    FormArrayName.prototype.ngOnDestroy = function () {
        if (this.formDirective) {
            this.formDirective.removeFormArray(this);
        }
    };
    Object.defineProperty(FormArrayName.prototype, "control", {
        get: function () { return this.formDirective.getFormArray(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormArrayName.prototype, "formDirective", {
        get: function () {
            return this._parent ? this._parent.formDirective : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormArrayName.prototype, "path", {
        get: function () { return controlPath(this.name, this._parent); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormArrayName.prototype, "validator", {
        get: function () { return composeValidators(this._validators); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormArrayName.prototype, "asyncValidator", {
        get: function () {
            return composeAsyncValidators(this._asyncValidators);
        },
        enumerable: true,
        configurable: true
    });
    FormArrayName.prototype._checkParentType = function () {
        if (_hasInvalidParent(this._parent)) {
            ReactiveErrors.arrayParentException();
        }
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('formArrayName'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
    ], FormArrayName.prototype, "name", void 0);
    FormArrayName = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({ selector: '[formArrayName]', providers: [formArrayNameProvider] }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Host"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"])()),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Self"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(NG_VALIDATORS)),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Self"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(NG_ASYNC_VALIDATORS)),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [ControlContainer, Array, Array])
    ], FormArrayName);
    return FormArrayName;
}(ControlContainer));
function _hasInvalidParent(parent) {
    return !(parent instanceof FormGroupName) && !(parent instanceof FormGroupDirective) &&
        !(parent instanceof FormArrayName);
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var controlNameBinding = {
    provide: NgControl,
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return FormControlName; })
};
/**
 * @description
 *
 * Syncs a `FormControl` in an existing `FormGroup` to a form control
 * element by name.
 *
 * This directive ensures that any values written to the `FormControl`
 * instance programmatically will be written to the DOM element (model -> view). Conversely,
 * any values written to the DOM element through user input will be reflected in the
 * `FormControl` instance (view -> model).
 *
 * @usageNotes
 * This directive is designed to be used with a parent `FormGroupDirective` (selector:
 * `[formGroup]`).
 *
 * It accepts the string name of the `FormControl` instance you want to
 * link, and will look for a `FormControl` registered with that name in the
 * closest `FormGroup` or `FormArray` above it.
 *
 * **Access the control**: You can access the `FormControl` associated with
 * this directive by using the {@link AbstractControl#get get} method.
 * Ex: `this.form.get('first');`
 *
 * **Get value**: the `value` property is always synced and available on the `FormControl`.
 * See a full list of available properties in `AbstractControl`.
 *
 *  **Set value**: You can set an initial value for the control when instantiating the
 *  `FormControl`, or you can set it programmatically later using
 *  {@link AbstractControl#setValue setValue} or {@link AbstractControl#patchValue patchValue}.
 *
 * **Listen to value**: If you want to listen to changes in the value of the control, you can
 * subscribe to the {@link AbstractControl#valueChanges valueChanges} event.  You can also listen to
 * {@link AbstractControl#statusChanges statusChanges} to be notified when the validation status is
 * re-calculated.
 *
 * ### Example
 *
 * In this example, we create form controls for first name and last name.
 *
 * {@example forms/ts/simpleFormGroup/simple_form_group_example.ts region='Component'}
 *
 * To see `formControlName` examples with different form control types, see:
 *
 * * Radio buttons: `RadioControlValueAccessor`
 * * Selects: `SelectControlValueAccessor`
 *
 * ### Use with ngModel
 *
 * Support for using the `ngModel` input property and `ngModelChange` event with reactive
 * form directives has been deprecated in Angular v6 and will be removed in Angular v7.
 *
 * Now deprecated:
 *
 * ```html
 * <form [formGroup]="form">
 *   <input formControlName="first" [(ngModel)]="value">
 * </form>
 * ```
 *
 * ```ts
 * this.value = 'some value';
 * ```
 *
 * This has been deprecated for a few reasons. First, developers have found this pattern
 * confusing. It seems like the actual `ngModel` directive is being used, but in fact it's
 * an input/output property named `ngModel` on the reactive form directive that simply
 * approximates (some of) its behavior. Specifically, it allows getting/setting the value
 * and intercepting value events. However, some of `ngModel`'s other features - like
 * delaying updates with`ngModelOptions` or exporting the directive - simply don't work,
 * which has understandably caused some confusion.
 *
 * In addition, this pattern mixes template-driven and reactive forms strategies, which
 * we generally don't recommend because it doesn't take advantage of the full benefits of
 * either strategy. Setting the value in the template violates the template-agnostic
 * principles behind reactive forms, whereas adding a `FormControl`/`FormGroup` layer in
 * the class removes the convenience of defining forms in the template.
 *
 * To update your code before v7, you'll want to decide whether to stick with reactive form
 * directives (and get/set values using reactive forms patterns) or switch over to
 * template-driven directives.
 *
 * After (choice 1 - use reactive forms):
 *
 * ```html
 * <form [formGroup]="form">
 *   <input formControlName="first">
 * </form>
 * ```
 *
 * ```ts
 * this.form.get('first').setValue('some value');
 * ```
 *
 * After (choice 2 - use template-driven forms):
 *
 * ```html
 * <input [(ngModel)]="value">
 * ```
 *
 * ```ts
 * this.value = 'some value';
 * ```
 *
 * By default, when you use this pattern, you will see a deprecation warning once in dev
 * mode. You can choose to silence this warning by providing a config for
 * `ReactiveFormsModule` at import time:
 *
 * ```ts
 * imports: [
 *   ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'});
 * ]
 * ```
 *
 * Alternatively, you can choose to surface a separate warning for each instance of this
 * pattern with a config value of `"always"`. This may help to track down where in the code
 * the pattern is being used as the code is being updated.
 *
 * @ngModule ReactiveFormsModule
 */
var FormControlName = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(FormControlName, _super);
    function FormControlName(parent, validators, asyncValidators, valueAccessors, _ngModelWarningConfig) {
        var _this = _super.call(this) || this;
        _this._ngModelWarningConfig = _ngModelWarningConfig;
        _this._added = false;
        /** @deprecated as of v6 */
        _this.update = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * Instance property used to track whether an ngModel warning has been sent out for this
         * particular FormControlName instance. Used to support warning config of "always".
         *
         * @internal
         */
        _this._ngModelWarningSent = false;
        _this._parent = parent;
        _this._rawValidators = validators || [];
        _this._rawAsyncValidators = asyncValidators || [];
        _this.valueAccessor = selectValueAccessor(_this, valueAccessors);
        return _this;
    }
    FormControlName_1 = FormControlName;
    Object.defineProperty(FormControlName.prototype, "isDisabled", {
        set: function (isDisabled) { ReactiveErrors.disabledAttrWarning(); },
        enumerable: true,
        configurable: true
    });
    FormControlName.prototype.ngOnChanges = function (changes) {
        if (!this._added)
            this._setUpControl();
        if (isPropertyUpdated(changes, this.viewModel)) {
            _ngModelWarning('formControlName', FormControlName_1, this, this._ngModelWarningConfig);
            this.viewModel = this.model;
            this.formDirective.updateModel(this, this.model);
        }
    };
    FormControlName.prototype.ngOnDestroy = function () {
        if (this.formDirective) {
            this.formDirective.removeControl(this);
        }
    };
    FormControlName.prototype.viewToModelUpdate = function (newValue) {
        this.viewModel = newValue;
        this.update.emit(newValue);
    };
    Object.defineProperty(FormControlName.prototype, "path", {
        get: function () { return controlPath(this.name, this._parent); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormControlName.prototype, "formDirective", {
        get: function () { return this._parent ? this._parent.formDirective : null; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormControlName.prototype, "validator", {
        get: function () { return composeValidators(this._rawValidators); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormControlName.prototype, "asyncValidator", {
        get: function () {
            return composeAsyncValidators(this._rawAsyncValidators);
        },
        enumerable: true,
        configurable: true
    });
    FormControlName.prototype._checkParentType = function () {
        if (!(this._parent instanceof FormGroupName) &&
            this._parent instanceof AbstractFormGroupDirective) {
            ReactiveErrors.ngModelGroupException();
        }
        else if (!(this._parent instanceof FormGroupName) && !(this._parent instanceof FormGroupDirective) &&
            !(this._parent instanceof FormArrayName)) {
            ReactiveErrors.controlParentException();
        }
    };
    FormControlName.prototype._setUpControl = function () {
        this._checkParentType();
        this.control = this.formDirective.addControl(this);
        if (this.control.disabled && this.valueAccessor.setDisabledState) {
            this.valueAccessor.setDisabledState(true);
        }
        this._added = true;
    };
    var FormControlName_1;
    /**
     * Static property used to track whether any ngModel warnings have been sent across
     * all instances of FormControlName. Used to support warning config of "once".
     *
     * @internal
     */
    FormControlName._ngModelWarningSentOnce = false;
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('formControlName'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
    ], FormControlName.prototype, "name", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('disabled'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Boolean])
    ], FormControlName.prototype, "isDisabled", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('ngModel'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], FormControlName.prototype, "model", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('ngModelChange'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], FormControlName.prototype, "update", void 0);
    FormControlName = FormControlName_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({ selector: '[formControlName]', providers: [controlNameBinding] }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Host"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"])()),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Self"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(NG_VALIDATORS)),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Self"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(NG_ASYNC_VALIDATORS)),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Self"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(NG_VALUE_ACCESSOR)),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(NG_MODEL_WITH_FORM_CONTROL_WARNING)),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [ControlContainer,
            Array,
            Array, Array, Object])
    ], FormControlName);
    return FormControlName;
}(NgControl));

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var REQUIRED_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return RequiredValidator; }),
    multi: true
};
var CHECKBOX_REQUIRED_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return CheckboxRequiredValidator; }),
    multi: true
};
/**
 * A Directive that adds the `required` validator to any controls marked with the
 * `required` attribute, via the `NG_VALIDATORS` binding.
 *
 * @usageNotes
 * ### Example
 *
 * ```
 * <input name="fullName" ngModel required>
 * ```
 *
 * @ngModule FormsModule
 * @ngModule ReactiveFormsModule
 */
var RequiredValidator = /** @class */ (function () {
    function RequiredValidator() {
    }
    Object.defineProperty(RequiredValidator.prototype, "required", {
        get: function () { return this._required; },
        set: function (value) {
            this._required = value != null && value !== false && "" + value !== 'false';
            if (this._onChange)
                this._onChange();
        },
        enumerable: true,
        configurable: true
    });
    RequiredValidator.prototype.validate = function (control) {
        return this.required ? Validators.required(control) : null;
    };
    RequiredValidator.prototype.registerOnValidatorChange = function (fn) { this._onChange = fn; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object])
    ], RequiredValidator.prototype, "required", null);
    RequiredValidator = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: ':not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]',
            providers: [REQUIRED_VALIDATOR],
            host: { '[attr.required]': 'required ? "" : null' }
        })
    ], RequiredValidator);
    return RequiredValidator;
}());
/**
 * A Directive that adds the `required` validator to checkbox controls marked with the
 * `required` attribute, via the `NG_VALIDATORS` binding.
 *
 * @usageNotes
 * ### Example
 *
 * ```
 * <input type="checkbox" name="active" ngModel required>
 * ```
 *
 * @experimental
 * @ngModule FormsModule
 * @ngModule ReactiveFormsModule
 */
var CheckboxRequiredValidator = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(CheckboxRequiredValidator, _super);
    function CheckboxRequiredValidator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CheckboxRequiredValidator.prototype.validate = function (control) {
        return this.required ? Validators.requiredTrue(control) : null;
    };
    CheckboxRequiredValidator = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: 'input[type=checkbox][required][formControlName],input[type=checkbox][required][formControl],input[type=checkbox][required][ngModel]',
            providers: [CHECKBOX_REQUIRED_VALIDATOR],
            host: { '[attr.required]': 'required ? "" : null' }
        })
    ], CheckboxRequiredValidator);
    return CheckboxRequiredValidator;
}(RequiredValidator));
/**
 * Provider which adds `EmailValidator` to `NG_VALIDATORS`.
 */
var EMAIL_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return EmailValidator; }),
    multi: true
};
/**
 * A Directive that adds the `email` validator to controls marked with the
 * `email` attribute, via the `NG_VALIDATORS` binding.
 *
 * @usageNotes
 * ### Example
 *
 * ```
 * <input type="email" name="email" ngModel email>
 * <input type="email" name="email" ngModel email="true">
 * <input type="email" name="email" ngModel [email]="true">
 * ```
 *
 * @experimental
 * @ngModule FormsModule
 * @ngModule ReactiveFormsModule
 */
var EmailValidator = /** @class */ (function () {
    function EmailValidator() {
    }
    Object.defineProperty(EmailValidator.prototype, "email", {
        set: function (value) {
            this._enabled = value === '' || value === true || value === 'true';
            if (this._onChange)
                this._onChange();
        },
        enumerable: true,
        configurable: true
    });
    EmailValidator.prototype.validate = function (control) {
        return this._enabled ? Validators.email(control) : null;
    };
    EmailValidator.prototype.registerOnValidatorChange = function (fn) { this._onChange = fn; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object])
    ], EmailValidator.prototype, "email", null);
    EmailValidator = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[email][formControlName],[email][formControl],[email][ngModel]',
            providers: [EMAIL_VALIDATOR]
        })
    ], EmailValidator);
    return EmailValidator;
}());
/**
 * Provider which adds `MinLengthValidator` to `NG_VALIDATORS`.
 *
 * @usageNotes
 * ### Example:
 *
 * {@example common/forms/ts/validators/validators.ts region='min'}
 */
var MIN_LENGTH_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return MinLengthValidator; }),
    multi: true
};
/**
 * A directive which installs the `MinLengthValidator` for any `formControlName`,
 * `formControl`, or control with `ngModel` that also has a `minlength` attribute.
 *
 * @ngModule FormsModule
 * @ngModule ReactiveFormsModule
 */
var MinLengthValidator = /** @class */ (function () {
    function MinLengthValidator() {
    }
    MinLengthValidator.prototype.ngOnChanges = function (changes) {
        if ('minlength' in changes) {
            this._createValidator();
            if (this._onChange)
                this._onChange();
        }
    };
    MinLengthValidator.prototype.validate = function (control) {
        return this.minlength == null ? null : this._validator(control);
    };
    MinLengthValidator.prototype.registerOnValidatorChange = function (fn) { this._onChange = fn; };
    MinLengthValidator.prototype._createValidator = function () {
        this._validator = Validators.minLength(parseInt(this.minlength, 10));
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
    ], MinLengthValidator.prototype, "minlength", void 0);
    MinLengthValidator = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[minlength][formControlName],[minlength][formControl],[minlength][ngModel]',
            providers: [MIN_LENGTH_VALIDATOR],
            host: { '[attr.minlength]': 'minlength ? minlength : null' }
        })
    ], MinLengthValidator);
    return MinLengthValidator;
}());
/**
 * Provider which adds `MaxLengthValidator` to `NG_VALIDATORS`.
 *
 * @usageNotes
 * ### Example:
 *
 * {@example common/forms/ts/validators/validators.ts region='max'}
 */
var MAX_LENGTH_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return MaxLengthValidator; }),
    multi: true
};
/**
 * A directive which installs the `MaxLengthValidator` for any `formControlName`,
 * `formControl`, or control with `ngModel` that also has a `maxlength` attribute.
 *
 * @ngModule FormsModule
 * @ngModule ReactiveFormsModule
 */
var MaxLengthValidator = /** @class */ (function () {
    function MaxLengthValidator() {
    }
    MaxLengthValidator.prototype.ngOnChanges = function (changes) {
        if ('maxlength' in changes) {
            this._createValidator();
            if (this._onChange)
                this._onChange();
        }
    };
    MaxLengthValidator.prototype.validate = function (control) {
        return this.maxlength != null ? this._validator(control) : null;
    };
    MaxLengthValidator.prototype.registerOnValidatorChange = function (fn) { this._onChange = fn; };
    MaxLengthValidator.prototype._createValidator = function () {
        this._validator = Validators.maxLength(parseInt(this.maxlength, 10));
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
    ], MaxLengthValidator.prototype, "maxlength", void 0);
    MaxLengthValidator = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[maxlength][formControlName],[maxlength][formControl],[maxlength][ngModel]',
            providers: [MAX_LENGTH_VALIDATOR],
            host: { '[attr.maxlength]': 'maxlength ? maxlength : null' }
        })
    ], MaxLengthValidator);
    return MaxLengthValidator;
}());
var PATTERN_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return PatternValidator; }),
    multi: true
};
/**
 * A Directive that adds the `pattern` validator to any controls marked with the
 * `pattern` attribute, via the `NG_VALIDATORS` binding. Uses attribute value
 * as the regex to validate Control value against.  Follows pattern attribute
 * semantics; i.e. regex must match entire Control value.
 *
 * @usageNotes
 * ### Example
 *
 * ```
 * <input [name]="fullName" pattern="[a-zA-Z ]*" ngModel>
 * ```
 *
 * @ngModule FormsModule
 * @ngModule ReactiveFormsModule
 */
var PatternValidator = /** @class */ (function () {
    function PatternValidator() {
    }
    PatternValidator.prototype.ngOnChanges = function (changes) {
        if ('pattern' in changes) {
            this._createValidator();
            if (this._onChange)
                this._onChange();
        }
    };
    PatternValidator.prototype.validate = function (control) { return this._validator(control); };
    PatternValidator.prototype.registerOnValidatorChange = function (fn) { this._onChange = fn; };
    PatternValidator.prototype._createValidator = function () { this._validator = Validators.pattern(this.pattern); };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], PatternValidator.prototype, "pattern", void 0);
    PatternValidator = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[pattern][formControlName],[pattern][formControl],[pattern][ngModel]',
            providers: [PATTERN_VALIDATOR],
            host: { '[attr.pattern]': 'pattern ? pattern : null' }
        })
    ], PatternValidator);
    return PatternValidator;
}());

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @description
 * Creates an `AbstractControl` from a user-specified configuration.
 *
 * The `FormBuilder` provides syntactic sugar that shortens creating instances of a `FormControl`,
 * `FormGroup`, or `FormArray`. It reduces the amount of boilerplate needed to build complex
 * forms.
 *
 * @see [Reactive Forms Guide](/guide/reactive-forms)
 *
 */
var FormBuilder = /** @class */ (function () {
    function FormBuilder() {
    }
    /**
     * @description
     * Construct a new `FormGroup` instance.
     *
     * @param controlsConfig A collection of child controls. The key for each child is the name
     * under which it is registered.
     *
     * @param extra An object of configuration options for the `FormGroup`.
     * * `validator`: A synchronous validator function, or an array of validator functions
     * * `asyncValidator`: A single async validator or array of async validator functions
     *
     */
    FormBuilder.prototype.group = function (controlsConfig, extra) {
        if (extra === void 0) { extra = null; }
        var controls = this._reduceControls(controlsConfig);
        var validator = extra != null ? extra['validator'] : null;
        var asyncValidator = extra != null ? extra['asyncValidator'] : null;
        return new FormGroup(controls, validator, asyncValidator);
    };
    /**
     * @description
     * Construct a new `FormControl` instance.
     *
     * @param formState Initializes the control with an initial value,
     * or an object that defines the initial value and disabled state.
     *
     * @param validator A synchronous validator function, or an array of synchronous validator
     * functions.
     *
     * @param asyncValidator A single async validator or array of async validator functions
     *
     * @usageNotes
     *
     * ### Initialize a control as disabled
     *
     * The following example returns a control with an initial value in a disabled state.
     *
     * <code-example path="forms/ts/formBuilder/form_builder_example.ts"
     *   linenums="false" region="disabled-control">
     * </code-example>
     *
     */
    FormBuilder.prototype.control = function (formState, validator, asyncValidator) {
        return new FormControl(formState, validator, asyncValidator);
    };
    /**
     * @description
     * Construct a new `FormArray` instance.
     *
     * @param controlsConfig An array of child controls. The key for each child control is its index
     * in the array.
     *
     * @param validator A synchronous validator function, or an array of synchronous validator
     * functions.
     *
     * @param asyncValidator A single async validator or array of async validator functions
     */
    FormBuilder.prototype.array = function (controlsConfig, validator, asyncValidator) {
        var _this = this;
        var controls = controlsConfig.map(function (c) { return _this._createControl(c); });
        return new FormArray(controls, validator, asyncValidator);
    };
    /** @internal */
    FormBuilder.prototype._reduceControls = function (controlsConfig) {
        var _this = this;
        var controls = {};
        Object.keys(controlsConfig).forEach(function (controlName) {
            controls[controlName] = _this._createControl(controlsConfig[controlName]);
        });
        return controls;
    };
    /** @internal */
    FormBuilder.prototype._createControl = function (controlConfig) {
        if (controlConfig instanceof FormControl || controlConfig instanceof FormGroup ||
            controlConfig instanceof FormArray) {
            return controlConfig;
        }
        else if (Array.isArray(controlConfig)) {
            var value = controlConfig[0];
            var validator = controlConfig.length > 1 ? controlConfig[1] : null;
            var asyncValidator = controlConfig.length > 2 ? controlConfig[2] : null;
            return this.control(value, validator, asyncValidator);
        }
        else {
            return this.control(controlConfig);
        }
    };
    FormBuilder = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], FormBuilder);
    return FormBuilder;
}());

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var VERSION = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["Version"]('7.0.0');

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @description
 *
 * Adds `novalidate` attribute to all forms by default.
 *
 * `novalidate` is used to disable browser's native form validation.
 *
 * If you want to use native validation with Angular forms, just add `ngNativeValidate` attribute:
 *
 * ```
 * <form ngNativeValidate></form>
 * ```
 *
 * @experimental
 * @ngModule ReactiveFormsModule
 * @ngModule FormsModule
 */
var NgNoValidate = /** @class */ (function () {
    function NgNoValidate() {
    }
    NgNoValidate = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: 'form:not([ngNoForm]):not([ngNativeValidate])',
            host: { 'novalidate': '' },
        })
    ], NgNoValidate);
    return NgNoValidate;
}());

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var SHARED_FORM_DIRECTIVES = [
    NgNoValidate,
    NgSelectOption,
    NgSelectMultipleOption,
    DefaultValueAccessor,
    NumberValueAccessor,
    RangeValueAccessor,
    CheckboxControlValueAccessor,
    SelectControlValueAccessor,
    SelectMultipleControlValueAccessor,
    RadioControlValueAccessor,
    NgControlStatus,
    NgControlStatusGroup,
    RequiredValidator,
    MinLengthValidator,
    MaxLengthValidator,
    PatternValidator,
    CheckboxRequiredValidator,
    EmailValidator,
];
var TEMPLATE_DRIVEN_DIRECTIVES = [NgModel, NgModelGroup, NgForm, NgFormSelectorWarning];
var REACTIVE_DRIVEN_DIRECTIVES = [FormControlDirective, FormGroupDirective, FormControlName, FormGroupName, FormArrayName];
/**
 * Internal module used for sharing directives between FormsModule and ReactiveFormsModule
 */
var InternalFormsSharedModule = /** @class */ (function () {
    function InternalFormsSharedModule() {
    }
    InternalFormsSharedModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: SHARED_FORM_DIRECTIVES,
            exports: SHARED_FORM_DIRECTIVES,
        })
    ], InternalFormsSharedModule);
    return InternalFormsSharedModule;
}());

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Exports the required providers and directives for template-driven forms,
 * making them available for import by NgModules that import this module.
 * @see [Forms](guide/forms)
 *
 * @see [Forms Guide](/guide/forms)
 */
var FormsModule = /** @class */ (function () {
    function FormsModule() {
    }
    FormsModule_1 = FormsModule;
    /**
     * @description
     * Provides options for configuring the template-driven forms module.
     *
     * @param opts An object of configuration options
     * * `warnOnDeprecatedNgFormSelector` Configures when to emit a warning when the deprecated
     * `ngForm` selector is used.
     */
    FormsModule.withConfig = function (opts) {
        return {
            ngModule: FormsModule_1,
            providers: [{ provide: NG_FORM_SELECTOR_WARNING, useValue: opts.warnOnDeprecatedNgFormSelector }]
        };
    };
    var FormsModule_1;
    FormsModule = FormsModule_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: TEMPLATE_DRIVEN_DIRECTIVES,
            providers: [RadioControlRegistry],
            exports: [InternalFormsSharedModule, TEMPLATE_DRIVEN_DIRECTIVES]
        })
    ], FormsModule);
    return FormsModule;
}());
/**
 * Exports the required infrastructure and directives for reactive forms,
 * making them available for import by NgModules that import this module.
 * @see [Forms](guide/reactive-forms)
 *
 * @see [Reactive Forms Guide](/guide/reactive-forms)
 *
 */
var ReactiveFormsModule = /** @class */ (function () {
    function ReactiveFormsModule() {
    }
    ReactiveFormsModule_1 = ReactiveFormsModule;
    /**
     * @description
     * Provides options for configuring the reactive forms module.
     *
     * @param opts An object of configuration options
     * * `warnOnNgModelWithFormControl` Configures when to emit a warning when an `ngModel`
     * binding is used with reactive form directives.
     */
    ReactiveFormsModule.withConfig = function (opts) {
        return {
            ngModule: ReactiveFormsModule_1,
            providers: [{
                    provide: NG_MODEL_WITH_FORM_CONTROL_WARNING,
                    useValue: opts.warnOnNgModelWithFormControl
                }]
        };
    };
    var ReactiveFormsModule_1;
    ReactiveFormsModule = ReactiveFormsModule_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [REACTIVE_DRIVEN_DIRECTIVES],
            providers: [FormBuilder, RadioControlRegistry],
            exports: [InternalFormsSharedModule, REACTIVE_DRIVEN_DIRECTIVES]
        })
    ], ReactiveFormsModule);
    return ReactiveFormsModule;
}());

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// This file only reexports content of the `src` folder. Keep it that way.

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=forms.js.map


/***/ }),

/***/ "./node_modules/angular2-text-mask/dist/angular2TextMask.js":
/*!******************************************************************!*\
  !*** ./node_modules/angular2-text-mask/dist/angular2TextMask.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var platform_browser_1 = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var textMaskCore_1 = __webpack_require__(/*! text-mask-core/dist/textMaskCore */ "./node_modules/text-mask-core/dist/textMaskCore.js");
var TextMaskConfig = /** @class */ (function () {
    function TextMaskConfig() {
    }
    return TextMaskConfig;
}());
exports.TextMaskConfig = TextMaskConfig;
exports.MASKEDINPUT_VALUE_ACCESSOR = {
    provide: forms_1.NG_VALUE_ACCESSOR,
    useExisting: core_1.forwardRef(function () { return MaskedInputDirective; }),
    multi: true
};
/**
 * We must check whether the agent is Android because composition events
 * behave differently between iOS and Android.
 */
function _isAndroid() {
    var userAgent = platform_browser_1.ɵgetDOM() ? platform_browser_1.ɵgetDOM().getUserAgent() : '';
    return /android (\d+)/.test(userAgent.toLowerCase());
}
var MaskedInputDirective = /** @class */ (function () {
    function MaskedInputDirective(_renderer, _elementRef, _compositionMode) {
        this._renderer = _renderer;
        this._elementRef = _elementRef;
        this._compositionMode = _compositionMode;
        this.textMaskConfig = {
            mask: [],
            guide: true,
            placeholderChar: '_',
            pipe: undefined,
            keepCharPositions: false,
        };
        this.onChange = function (_) { };
        this.onTouched = function () { };
        /** Whether the user is creating a composition string (IME events). */
        this._composing = false;
        if (this._compositionMode == null) {
            this._compositionMode = !_isAndroid();
        }
    }
    MaskedInputDirective.prototype.ngOnChanges = function (changes) {
        this._setupMask(true);
        if (this.textMaskInputElement !== undefined) {
            this.textMaskInputElement.update(this.inputElement.value);
        }
    };
    MaskedInputDirective.prototype.writeValue = function (value) {
        this._setupMask();
        // set the initial value for cases where the mask is disabled
        var normalizedValue = value == null ? '' : value;
        this._renderer.setProperty(this.inputElement, 'value', normalizedValue);
        if (this.textMaskInputElement !== undefined) {
            this.textMaskInputElement.update(value);
        }
    };
    MaskedInputDirective.prototype.registerOnChange = function (fn) { this.onChange = fn; };
    MaskedInputDirective.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
    MaskedInputDirective.prototype.setDisabledState = function (isDisabled) {
        this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
    };
    MaskedInputDirective.prototype._handleInput = function (value) {
        if (!this._compositionMode || (this._compositionMode && !this._composing)) {
            this._setupMask();
            if (this.textMaskInputElement !== undefined) {
                this.textMaskInputElement.update(value);
                // get the updated value
                value = this.inputElement.value;
                this.onChange(value);
            }
        }
    };
    MaskedInputDirective.prototype._setupMask = function (create) {
        if (create === void 0) { create = false; }
        if (!this.inputElement) {
            if (this._elementRef.nativeElement.tagName.toUpperCase() === 'INPUT') {
                // `textMask` directive is used directly on an input element
                this.inputElement = this._elementRef.nativeElement;
            }
            else {
                // `textMask` directive is used on an abstracted input element, `md-input-container`, etc
                this.inputElement = this._elementRef.nativeElement.getElementsByTagName('INPUT')[0];
            }
        }
        if (this.inputElement && create) {
            this.textMaskInputElement = textMaskCore_1.createTextMaskInputElement(Object.assign({ inputElement: this.inputElement }, this.textMaskConfig));
        }
    };
    MaskedInputDirective.prototype._compositionStart = function () { this._composing = true; };
    MaskedInputDirective.prototype._compositionEnd = function (value) {
        this._composing = false;
        this._compositionMode && this._handleInput(value);
    };
    MaskedInputDirective.decorators = [
        { type: core_1.Directive, args: [{
                    host: {
                        '(input)': '_handleInput($event.target.value)',
                        '(blur)': 'onTouched()',
                        '(compositionstart)': '_compositionStart()',
                        '(compositionend)': '_compositionEnd($event.target.value)'
                    },
                    selector: '[textMask]',
                    exportAs: 'textMask',
                    providers: [exports.MASKEDINPUT_VALUE_ACCESSOR]
                },] },
    ];
    /** @nocollapse */
    MaskedInputDirective.ctorParameters = function () { return [
        { type: core_1.Renderer2, },
        { type: core_1.ElementRef, },
        { type: undefined, decorators: [{ type: core_1.Optional }, { type: core_1.Inject, args: [forms_1.COMPOSITION_BUFFER_MODE,] },] },
    ]; };
    MaskedInputDirective.propDecorators = {
        'textMaskConfig': [{ type: core_1.Input, args: ['textMask',] },],
    };
    return MaskedInputDirective;
}());
exports.MaskedInputDirective = MaskedInputDirective;
var TextMaskModule = /** @class */ (function () {
    function TextMaskModule() {
    }
    TextMaskModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: [MaskedInputDirective],
                    exports: [MaskedInputDirective]
                },] },
    ];
    /** @nocollapse */
    TextMaskModule.ctorParameters = function () { return []; };
    return TextMaskModule;
}());
exports.TextMaskModule = TextMaskModule;
var textMaskCore_2 = __webpack_require__(/*! text-mask-core/dist/textMaskCore */ "./node_modules/text-mask-core/dist/textMaskCore.js");
exports.conformToMask = textMaskCore_2.conformToMask;
//# sourceMappingURL=angular2TextMask.js.map

/***/ }),

/***/ "./node_modules/text-mask-core/dist/textMaskCore.js":
/*!**********************************************************!*\
  !*** ./node_modules/text-mask-core/dist/textMaskCore.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e,r){ true?module.exports=r():undefined}(this,function(){return function(e){function r(n){if(t[n])return t[n].exports;var o=t[n]={exports:{},id:n,loaded:!1};return e[n].call(o.exports,o,o.exports,r),o.loaded=!0,o.exports}var t={};return r.m=e,r.c=t,r.p="",r(0)}([function(e,r,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(r,"__esModule",{value:!0});var o=t(3);Object.defineProperty(r,"conformToMask",{enumerable:!0,get:function(){return n(o).default}});var i=t(2);Object.defineProperty(r,"adjustCaretPosition",{enumerable:!0,get:function(){return n(i).default}});var a=t(5);Object.defineProperty(r,"createTextMaskInputElement",{enumerable:!0,get:function(){return n(a).default}})},function(e,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.placeholderChar="_",r.strFunction="function"},function(e,r){"use strict";function t(e){var r=e.previousConformedValue,t=void 0===r?o:r,i=e.previousPlaceholder,a=void 0===i?o:i,u=e.currentCaretPosition,l=void 0===u?0:u,s=e.conformedValue,f=e.rawValue,d=e.placeholderChar,c=e.placeholder,p=e.indexesOfPipedChars,v=void 0===p?n:p,h=e.caretTrapIndexes,m=void 0===h?n:h;if(0===l||!f.length)return 0;var y=f.length,g=t.length,b=c.length,C=s.length,P=y-g,k=P>0,x=0===g,O=P>1&&!k&&!x;if(O)return l;var T=k&&(t===s||s===c),w=0,M=void 0,S=void 0;if(T)w=l-P;else{var j=s.toLowerCase(),_=f.toLowerCase(),V=_.substr(0,l).split(o),A=V.filter(function(e){return j.indexOf(e)!==-1});S=A[A.length-1];var N=a.substr(0,A.length).split(o).filter(function(e){return e!==d}).length,E=c.substr(0,A.length).split(o).filter(function(e){return e!==d}).length,F=E!==N,R=void 0!==a[A.length-1]&&void 0!==c[A.length-2]&&a[A.length-1]!==d&&a[A.length-1]!==c[A.length-1]&&a[A.length-1]===c[A.length-2];!k&&(F||R)&&N>0&&c.indexOf(S)>-1&&void 0!==f[l]&&(M=!0,S=f[l]);for(var I=v.map(function(e){return j[e]}),J=I.filter(function(e){return e===S}).length,W=A.filter(function(e){return e===S}).length,q=c.substr(0,c.indexOf(d)).split(o).filter(function(e,r){return e===S&&f[r]!==e}).length,L=q+W+J+(M?1:0),z=0,B=0;B<C;B++){var D=j[B];if(w=B+1,D===S&&z++,z>=L)break}}if(k){for(var G=w,H=w;H<=b;H++)if(c[H]===d&&(G=H),c[H]===d||m.indexOf(H)!==-1||H===b)return G}else if(M){for(var K=w-1;K>=0;K--)if(s[K]===S||m.indexOf(K)!==-1||0===K)return K}else for(var Q=w;Q>=0;Q--)if(c[Q-1]===d||m.indexOf(Q)!==-1||0===Q)return Q}Object.defineProperty(r,"__esModule",{value:!0}),r.default=t;var n=[],o=""},function(e,r,t){"use strict";function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:u,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!(0,i.isArray)(r)){if(("undefined"==typeof r?"undefined":o(r))!==a.strFunction)throw new Error("Text-mask:conformToMask; The mask property must be an array.");r=r(e,t),r=(0,i.processCaretTraps)(r).maskWithoutCaretTraps}var n=t.guide,s=void 0===n||n,f=t.previousConformedValue,d=void 0===f?l:f,c=t.placeholderChar,p=void 0===c?a.placeholderChar:c,v=t.placeholder,h=void 0===v?(0,i.convertMaskToPlaceholder)(r,p):v,m=t.currentCaretPosition,y=t.keepCharPositions,g=s===!1&&void 0!==d,b=e.length,C=d.length,P=h.length,k=r.length,x=b-C,O=x>0,T=m+(O?-x:0),w=T+Math.abs(x);if(y===!0&&!O){for(var M=l,S=T;S<w;S++)h[S]===p&&(M+=p);e=e.slice(0,T)+M+e.slice(T,b)}for(var j=e.split(l).map(function(e,r){return{char:e,isNew:r>=T&&r<w}}),_=b-1;_>=0;_--){var V=j[_].char;if(V!==p){var A=_>=T&&C===k;V===h[A?_-x:_]&&j.splice(_,1)}}var N=l,E=!1;e:for(var F=0;F<P;F++){var R=h[F];if(R===p){if(j.length>0)for(;j.length>0;){var I=j.shift(),J=I.char,W=I.isNew;if(J===p&&g!==!0){N+=p;continue e}if(r[F].test(J)){if(y===!0&&W!==!1&&d!==l&&s!==!1&&O){for(var q=j.length,L=null,z=0;z<q;z++){var B=j[z];if(B.char!==p&&B.isNew===!1)break;if(B.char===p){L=z;break}}null!==L?(N+=J,j.splice(L,1)):F--}else N+=J;continue e}E=!0}g===!1&&(N+=h.substr(F,P));break}N+=R}if(g&&O===!1){for(var D=null,G=0;G<N.length;G++)h[G]===p&&(D=G);N=null!==D?N.substr(0,D+1):l}return{conformedValue:N,meta:{someCharsRejected:E}}}Object.defineProperty(r,"__esModule",{value:!0});var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};r.default=n;var i=t(4),a=t(1),u=[],l=""},function(e,r,t){"use strict";function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:s.placeholderChar;if(!o(e))throw new Error("Text-mask:convertMaskToPlaceholder; The mask property must be an array.");if(e.indexOf(r)!==-1)throw new Error("Placeholder character must not be used as part of the mask. Please specify a character that is not present in your mask as your placeholder character.\n\n"+("The placeholder character that was received is: "+JSON.stringify(r)+"\n\n")+("The mask that was received is: "+JSON.stringify(e)));return e.map(function(e){return e instanceof RegExp?r:e}).join("")}function o(e){return Array.isArray&&Array.isArray(e)||e instanceof Array}function i(e){return"string"==typeof e||e instanceof String}function a(e){return"number"==typeof e&&void 0===e.length&&!isNaN(e)}function u(e){return"undefined"==typeof e||null===e}function l(e){for(var r=[],t=void 0;t=e.indexOf(d),t!==-1;)r.push(t),e.splice(t,1);return{maskWithoutCaretTraps:e,indexes:r}}Object.defineProperty(r,"__esModule",{value:!0}),r.convertMaskToPlaceholder=n,r.isArray=o,r.isString=i,r.isNumber=a,r.isNil=u,r.processCaretTraps=l;var s=t(1),f=[],d="[]"},function(e,r,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e){var r={previousConformedValue:void 0,previousPlaceholder:void 0};return{state:r,update:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e,o=n.inputElement,s=n.mask,d=n.guide,m=n.pipe,g=n.placeholderChar,b=void 0===g?v.placeholderChar:g,C=n.keepCharPositions,P=void 0!==C&&C,k=n.showMask,x=void 0!==k&&k;if("undefined"==typeof t&&(t=o.value),t!==r.previousConformedValue){("undefined"==typeof s?"undefined":l(s))===y&&void 0!==s.pipe&&void 0!==s.mask&&(m=s.pipe,s=s.mask);var O=void 0,T=void 0;if(s instanceof Array&&(O=(0,p.convertMaskToPlaceholder)(s,b)),s!==!1){var w=a(t),M=o.selectionEnd,S=r.previousConformedValue,j=r.previousPlaceholder,_=void 0;if(("undefined"==typeof s?"undefined":l(s))===v.strFunction){if(T=s(w,{currentCaretPosition:M,previousConformedValue:S,placeholderChar:b}),T===!1)return;var V=(0,p.processCaretTraps)(T),A=V.maskWithoutCaretTraps,N=V.indexes;T=A,_=N,O=(0,p.convertMaskToPlaceholder)(T,b)}else T=s;var E={previousConformedValue:S,guide:d,placeholderChar:b,pipe:m,placeholder:O,currentCaretPosition:M,keepCharPositions:P},F=(0,c.default)(w,T,E),R=F.conformedValue,I=("undefined"==typeof m?"undefined":l(m))===v.strFunction,J={};I&&(J=m(R,u({rawValue:w},E)),J===!1?J={value:S,rejected:!0}:(0,p.isString)(J)&&(J={value:J}));var W=I?J.value:R,q=(0,f.default)({previousConformedValue:S,previousPlaceholder:j,conformedValue:W,placeholder:O,rawValue:w,currentCaretPosition:M,placeholderChar:b,indexesOfPipedChars:J.indexesOfPipedChars,caretTrapIndexes:_}),L=W===O&&0===q,z=x?O:h,B=L?z:W;r.previousConformedValue=B,r.previousPlaceholder=O,o.value!==B&&(o.value=B,i(o,q))}}}}}function i(e,r){document.activeElement===e&&(g?b(function(){return e.setSelectionRange(r,r,m)},0):e.setSelectionRange(r,r,m))}function a(e){if((0,p.isString)(e))return e;if((0,p.isNumber)(e))return String(e);if(void 0===e||null===e)return h;throw new Error("The 'value' provided to Text Mask needs to be a string or a number. The value received was:\n\n "+JSON.stringify(e))}Object.defineProperty(r,"__esModule",{value:!0});var u=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};r.default=o;var s=t(2),f=n(s),d=t(3),c=n(d),p=t(4),v=t(1),h="",m="none",y="object",g="undefined"!=typeof navigator&&/Android/i.test(navigator.userAgent),b="undefined"!=typeof requestAnimationFrame?requestAnimationFrame:setTimeout}])});

/***/ }),

/***/ "./src/app/application/loans/calculator/calculator-routing.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/application/loans/calculator/calculator-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: CalculatorRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalculatorRoutingModule", function() { return CalculatorRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _calculator_calculator_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./calculator/calculator.component */ "./src/app/application/loans/calculator/calculator/calculator.component.ts");
/* harmony import */ var _config_config_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config/config.component */ "./src/app/application/loans/calculator/config/config.component.ts");



var routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: _calculator_calculator_component__WEBPACK_IMPORTED_MODULE_1__["CalculatorComponent"],
            },
            {
                path: 'config',
                component: _config_config_component__WEBPACK_IMPORTED_MODULE_2__["ConfigComponent"],
            },
        ]
    }
];
var CalculatorRoutingModule = /** @class */ (function () {
    function CalculatorRoutingModule() {
    }
    return CalculatorRoutingModule;
}());



/***/ }),

/***/ "./src/app/application/loans/calculator/calculator.module.ngfactory.js":
/*!*****************************************************************************!*\
  !*** ./src/app/application/loans/calculator/calculator.module.ngfactory.js ***!
  \*****************************************************************************/
/*! exports provided: CalculatorModuleNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalculatorModuleNgFactory", function() { return CalculatorModuleNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _calculator_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./calculator.module */ "./src/app/application/loans/calculator/calculator.module.ts");
/* harmony import */ var _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/@angular/router/router.ngfactory */ "./node_modules/@angular/router/router.ngfactory.js");
/* harmony import */ var _calculator_calculator_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./calculator/calculator.component.ngfactory */ "./src/app/application/loans/calculator/calculator/calculator.component.ngfactory.js");
/* harmony import */ var _config_config_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./config/config.component.ngfactory */ "./src/app/application/loans/calculator/config/config.component.ngfactory.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_form_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/form.service */ "./src/app/application/loans/calculator/services/form.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _calculator_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./calculator-routing.module */ "./src/app/application/loans/calculator/calculator-routing.module.ts");
/* harmony import */ var _modules_forms_card_card_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../modules/forms/card/card.module */ "./src/app/modules/forms/card/card.module.ts");
/* harmony import */ var _modules_forms_form_shared_form_shared_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../modules/forms/form-shared/form-shared.module */ "./src/app/modules/forms/form-shared/form-shared.module.ts");
/* harmony import */ var _modules_forms_checkbox_checkbox_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../modules/forms/checkbox/checkbox.module */ "./src/app/modules/forms/checkbox/checkbox.module.ts");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/cdk/bidi */ "./node_modules/@angular/cdk/esm5/bidi.es5.js");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/cdk/platform */ "./node_modules/@angular/cdk/esm5/platform.es5.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm5/scrolling.es5.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var ngx_scrollbar__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ngx-scrollbar */ "./node_modules/ngx-scrollbar/fesm5/ngx-scrollbar.js");
/* harmony import */ var _modules_forms_dropdown_dropdown_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../modules/forms/dropdown/dropdown.module */ "./src/app/modules/forms/dropdown/dropdown.module.ts");
/* harmony import */ var _modules_forms_form_layout_form_layout_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../modules/forms/form-layout/form-layout.module */ "./src/app/modules/forms/form-layout/form-layout.module.ts");
/* harmony import */ var _modules_forms_hint_hint_module__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../modules/forms/hint/hint.module */ "./src/app/modules/forms/hint/hint.module.ts");
/* harmony import */ var angular2_text_mask__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! angular2-text-mask */ "./node_modules/angular2-text-mask/dist/angular2TextMask.js");
/* harmony import */ var angular2_text_mask__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(angular2_text_mask__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _modules_forms_input_input_module__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../../modules/forms/input/input.module */ "./src/app/modules/forms/input/input.module.ts");
/* harmony import */ var _modules_forms_label_label_module__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../../modules/forms/label/label.module */ "./src/app/modules/forms/label/label.module.ts");
/* harmony import */ var _modules_forms_radio_radio_module__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../../modules/forms/radio/radio.module */ "./src/app/modules/forms/radio/radio.module.ts");
/* harmony import */ var _modules_forms_select_select_module__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../../modules/forms/select/select.module */ "./src/app/modules/forms/select/select.module.ts");
/* harmony import */ var _modules_forms_suggest_suggest_module__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../../modules/forms/suggest/suggest.module */ "./src/app/modules/forms/suggest/suggest.module.ts");
/* harmony import */ var _modules_forms_textarea_textarea_module__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../../../modules/forms/textarea/textarea.module */ "./src/app/modules/forms/textarea/textarea.module.ts");
/* harmony import */ var _modules_forms_form_module__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../../../modules/forms/form.module */ "./src/app/modules/forms/form.module.ts");
/* harmony import */ var _modules_buttons_button_button_module__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../../../modules/buttons/button/button.module */ "./src/app/modules/buttons/button/button.module.ts");
/* harmony import */ var _calculator_calculator_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./calculator/calculator.component */ "./src/app/application/loans/calculator/calculator/calculator.component.ts");
/* harmony import */ var _config_config_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./config/config.component */ "./src/app/application/loans/calculator/config/config.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 

































var CalculatorModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_calculator_module__WEBPACK_IMPORTED_MODULE_1__["CalculatorModule"], [], function (_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, [_node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ɵEmptyOutletComponentNgFactory"], _calculator_calculator_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["CalculatorComponentNgFactory"], _config_config_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["ConfigComponentNgFactory"]]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_common_common_a"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_j"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_j"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _services_form_service__WEBPACK_IMPORTED_MODULE_7__["FormService"], _services_form_service__WEBPACK_IMPORTED_MODULE_7__["FormService"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"], [[2, _angular_router__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_router_router_a"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _calculator_routing_module__WEBPACK_IMPORTED_MODULE_10__["CalculatorRoutingModule"], _calculator_routing_module__WEBPACK_IMPORTED_MODULE_10__["CalculatorRoutingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _modules_forms_card_card_module__WEBPACK_IMPORTED_MODULE_11__["CardModule"], _modules_forms_card_card_module__WEBPACK_IMPORTED_MODULE_11__["CardModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_bc"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_bc"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _modules_forms_form_shared_form_shared_module__WEBPACK_IMPORTED_MODULE_12__["FormSharedModule"], _modules_forms_form_shared_form_shared_module__WEBPACK_IMPORTED_MODULE_12__["FormSharedModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _modules_forms_checkbox_checkbox_module__WEBPACK_IMPORTED_MODULE_13__["CheckboxModule"], _modules_forms_checkbox_checkbox_module__WEBPACK_IMPORTED_MODULE_13__["CheckboxModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_14__["BidiModule"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_14__["BidiModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_15__["PlatformModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_15__["PlatformModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_16__["ScrollingModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_16__["ScrollingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_17__["LayoutModule"], _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_17__["LayoutModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ngx_scrollbar__WEBPACK_IMPORTED_MODULE_18__["SmoothScrollModule"], ngx_scrollbar__WEBPACK_IMPORTED_MODULE_18__["SmoothScrollModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ngx_scrollbar__WEBPACK_IMPORTED_MODULE_18__["NgScrollbarModule"], ngx_scrollbar__WEBPACK_IMPORTED_MODULE_18__["NgScrollbarModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _modules_forms_dropdown_dropdown_module__WEBPACK_IMPORTED_MODULE_19__["DropdownModule"], _modules_forms_dropdown_dropdown_module__WEBPACK_IMPORTED_MODULE_19__["DropdownModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _modules_forms_form_layout_form_layout_module__WEBPACK_IMPORTED_MODULE_20__["FormLayoutModule"], _modules_forms_form_layout_form_layout_module__WEBPACK_IMPORTED_MODULE_20__["FormLayoutModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _modules_forms_hint_hint_module__WEBPACK_IMPORTED_MODULE_21__["HintModule"], _modules_forms_hint_hint_module__WEBPACK_IMPORTED_MODULE_21__["HintModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, angular2_text_mask__WEBPACK_IMPORTED_MODULE_22__["TextMaskModule"], angular2_text_mask__WEBPACK_IMPORTED_MODULE_22__["TextMaskModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _modules_forms_input_input_module__WEBPACK_IMPORTED_MODULE_23__["InputModule"], _modules_forms_input_input_module__WEBPACK_IMPORTED_MODULE_23__["InputModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _modules_forms_label_label_module__WEBPACK_IMPORTED_MODULE_24__["LabelModule"], _modules_forms_label_label_module__WEBPACK_IMPORTED_MODULE_24__["LabelModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _modules_forms_radio_radio_module__WEBPACK_IMPORTED_MODULE_25__["RadioModule"], _modules_forms_radio_radio_module__WEBPACK_IMPORTED_MODULE_25__["RadioModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _modules_forms_select_select_module__WEBPACK_IMPORTED_MODULE_26__["SelectModule"], _modules_forms_select_select_module__WEBPACK_IMPORTED_MODULE_26__["SelectModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _modules_forms_suggest_suggest_module__WEBPACK_IMPORTED_MODULE_27__["SuggestModule"], _modules_forms_suggest_suggest_module__WEBPACK_IMPORTED_MODULE_27__["SuggestModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _modules_forms_textarea_textarea_module__WEBPACK_IMPORTED_MODULE_28__["TextareaModule"], _modules_forms_textarea_textarea_module__WEBPACK_IMPORTED_MODULE_28__["TextareaModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _modules_forms_form_module__WEBPACK_IMPORTED_MODULE_29__["FormModule"], _modules_forms_form_module__WEBPACK_IMPORTED_MODULE_29__["FormModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _modules_buttons_button_button_module__WEBPACK_IMPORTED_MODULE_30__["ButtonModule"], _modules_buttons_button_button_module__WEBPACK_IMPORTED_MODULE_30__["ButtonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _calculator_module__WEBPACK_IMPORTED_MODULE_1__["CalculatorModule"], _calculator_module__WEBPACK_IMPORTED_MODULE_1__["CalculatorModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_9__["ROUTES"], function () { return [[{ path: "", children: [{ path: "", component: _calculator_calculator_component__WEBPACK_IMPORTED_MODULE_31__["CalculatorComponent"] }, { path: "config", component: _config_config_component__WEBPACK_IMPORTED_MODULE_32__["ConfigComponent"] }] }]]; }, [])]); });



/***/ }),

/***/ "./src/app/application/loans/calculator/calculator.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/application/loans/calculator/calculator.module.ts ***!
  \*******************************************************************/
/*! exports provided: CalculatorModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalculatorModule", function() { return CalculatorModule; });
var CalculatorModule = /** @class */ (function () {
    function CalculatorModule() {
    }
    return CalculatorModule;
}());



/***/ }),

/***/ "./src/app/application/loans/calculator/calculator/calculator.component.ngfactory.js":
/*!*******************************************************************************************!*\
  !*** ./src/app/application/loans/calculator/calculator/calculator.component.ngfactory.js ***!
  \*******************************************************************************************/
/*! exports provided: RenderType_CalculatorComponent, View_CalculatorComponent_0, View_CalculatorComponent_Host_0, CalculatorComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_CalculatorComponent", function() { return RenderType_CalculatorComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_CalculatorComponent_0", function() { return View_CalculatorComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_CalculatorComponent_Host_0", function() { return View_CalculatorComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalculatorComponentNgFactory", function() { return CalculatorComponentNgFactory; });
/* harmony import */ var _calculator_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calculator.component.scss.shim.ngstyle */ "./src/app/application/loans/calculator/calculator/calculator.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _modules_forms_hint_hint_hint_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../modules/forms/hint/hint/hint.component.ngfactory */ "./src/app/modules/forms/hint/hint/hint.component.ngfactory.js");
/* harmony import */ var _modules_forms_hint_hint_hint_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../modules/forms/hint/hint/hint.component */ "./src/app/modules/forms/hint/hint/hint.component.ts");
/* harmony import */ var _components_score_card_score_card_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/score-card/score-card.component.ngfactory */ "./src/app/application/loans/calculator/components/score-card/score-card.component.ngfactory.js");
/* harmony import */ var _components_score_card_score_card_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/score-card/score-card.component */ "./src/app/application/loans/calculator/components/score-card/score-card.component.ts");
/* harmony import */ var _pipes_order_by_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../pipes/order-by.pipe */ "./src/app/application/loans/calculator/pipes/order-by.pipe.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _modules_forms_form_layout_form_group_form_group_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../modules/forms/form-layout/form-group/form-group.component.ngfactory */ "./src/app/modules/forms/form-layout/form-group/form-group.component.ngfactory.js");
/* harmony import */ var _modules_forms_form_layout_form_group_form_group_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../modules/forms/form-layout/form-group/form-group.component */ "./src/app/modules/forms/form-layout/form-group/form-group.component.ts");
/* harmony import */ var _modules_forms_label_label_label_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../modules/forms/label/label/label.component.ngfactory */ "./src/app/modules/forms/label/label/label.component.ngfactory.js");
/* harmony import */ var _modules_forms_label_label_label_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../modules/forms/label/label/label.component */ "./src/app/modules/forms/label/label/label.component.ts");
/* harmony import */ var _modules_forms_radio_radio_radio_component_ngfactory__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../modules/forms/radio/radio/radio.component.ngfactory */ "./src/app/modules/forms/radio/radio/radio.component.ngfactory.js");
/* harmony import */ var _modules_forms_radio_radio_radio_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../modules/forms/radio/radio/radio.component */ "./src/app/modules/forms/radio/radio/radio.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _components_dropdown_hoc_dropdown_hoc_component_ngfactory__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/dropdown-hoc/dropdown-hoc.component.ngfactory */ "./src/app/application/loans/calculator/components/dropdown-hoc/dropdown-hoc.component.ngfactory.js");
/* harmony import */ var _components_dropdown_hoc_dropdown_hoc_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/dropdown-hoc/dropdown-hoc.component */ "./src/app/application/loans/calculator/components/dropdown-hoc/dropdown-hoc.component.ts");
/* harmony import */ var _modules_forms_input_input_input_component_ngfactory__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../modules/forms/input/input/input.component.ngfactory */ "./src/app/modules/forms/input/input/input.component.ngfactory.js");
/* harmony import */ var _modules_forms_input_input_input_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../modules/forms/input/input/input.component */ "./src/app/modules/forms/input/input/input.component.ts");
/* harmony import */ var _components_score_result_score_result_component_ngfactory__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../components/score-result/score-result.component.ngfactory */ "./src/app/application/loans/calculator/components/score-result/score-result.component.ngfactory.js");
/* harmony import */ var _components_score_result_score_result_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../components/score-result/score-result.component */ "./src/app/application/loans/calculator/components/score-result/score-result.component.ts");
/* harmony import */ var ngx_clipboard__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ngx-clipboard */ "./node_modules/ngx-clipboard/fesm5/ngx-clipboard.js");
/* harmony import */ var _modules_buttons_button_button_button_component_ngfactory__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../../modules/buttons/button/button/button.component.ngfactory */ "./src/app/modules/buttons/button/button/button.component.ngfactory.js");
/* harmony import */ var _modules_buttons_button_button_button_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../../../modules/buttons/button/button/button.component */ "./src/app/modules/buttons/button/button/button.component.ts");
/* harmony import */ var _calculator_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./calculator.component */ "./src/app/application/loans/calculator/calculator/calculator.component.ts");
/* harmony import */ var _services_form_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../services/form.service */ "./src/app/application/loans/calculator/services/form.service.ts");
/* harmony import */ var _bstorage_indexed_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../../../bstorage/indexed.service */ "./src/app/bstorage/indexed.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 



























var styles_CalculatorComponent = [_calculator_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_CalculatorComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_CalculatorComponent, data: {} });

function View_CalculatorComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "rosa-hint", [["form-group", "hint"]], null, null, null, _modules_forms_hint_hint_hint_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_HintComponent_0"], _modules_forms_hint_hint_hint_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_HintComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _modules_forms_hint_hint_hint_component__WEBPACK_IMPORTED_MODULE_3__["HintComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\u0414\u043B\u044F \u043E\u0432\u0435\u0434\u0440\u0430\u0444\u0442\u0430 \u0441\u0440\u043E\u043A \u043D\u0435 \u0443\u043A\u0430\u0437\u044B\u0432\u0430\u0435\u0442\u0441\u044F"]))], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
function View_CalculatorComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "rosa-score-card", [], null, null, null, _components_score_card_score_card_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_ScoreCardComponent_0"], _components_score_card_score_card_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_ScoreCardComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _components_score_card_score_card_component__WEBPACK_IMPORTED_MODULE_5__["ScoreCardComponent"], [], { data: [0, "data"] }, null)], function (_ck, _v) { var currVal_0 = _v.context.$implicit; _ck(_v, 1, 0, currVal_0); }, null); }
function View_CalculatorComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](0, _pipes_order_by_pipe__WEBPACK_IMPORTED_MODULE_6__["OrderByPipe"], []), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 83, "div", [["class", "calculator-wrapper"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 82, "div", [["class", "calculator-pane"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 2, "div", [["class", "calculator-pane_header"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 1, "h1", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\u041A\u0440\u0435\u0434\u0438\u0442\u043D\u044B\u0439 \u043A\u0430\u043B\u044C\u043A\u0443\u043B\u044F\u0442\u043E\u0440"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 78, "div", [["class", "calculator-pane_content"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 72, "div", [["class", "calculator-pane_left"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 71, "div", [["class", "calculator-form"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 70, "form", [["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "submit"], [null, "reset"]], function (_v, en, $event) { var ad = true; if (("submit" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).onSubmit($event) !== false);
        ad = (pd_0 && ad);
    } if (("reset" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).onReset() !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_bh"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](11, 540672, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormGroupDirective"], [[8, null], [8, null]], { form: [0, "form"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ControlContainer"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormGroupDirective"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](13, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatusGroup"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ControlContainer"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, null, 12, "rosa-form-group", [], null, null, null, _modules_forms_form_layout_form_group_form_group_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__["View_FormGroupComponent_0"], _modules_forms_form_layout_form_group_form_group_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__["RenderType_FormGroupComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](15, 114688, null, 0, _modules_forms_form_layout_form_group_form_group_component__WEBPACK_IMPORTED_MODULE_9__["FormGroupComponent"], [], { layout: [0, "layout"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, 0, 2, "rosa-label", [["form-group", "label"]], null, null, null, _modules_forms_label_label_label_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__["View_LabelComponent_0"], _modules_forms_label_label_label_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__["RenderType_LabelComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](17, 114688, null, 0, _modules_forms_label_label_label_component__WEBPACK_IMPORTED_MODULE_11__["LabelComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\u0422\u0438\u043F \u043A\u0440\u0435\u0434\u0438\u0442\u0430"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](19, 0, null, 1, 2, "rosa-radio", [["form-group", "control"]], null, [[null, "ClickEvent"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("ClickEvent" === en)) {
        var pd_0 = (_co.setType($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, _modules_forms_radio_radio_radio_component_ngfactory__WEBPACK_IMPORTED_MODULE_12__["View_RadioComponent_0"], _modules_forms_radio_radio_radio_component_ngfactory__WEBPACK_IMPORTED_MODULE_12__["RenderType_RadioComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](20, 114688, null, 0, _modules_forms_radio_radio_radio_component__WEBPACK_IMPORTED_MODULE_13__["RadioComponent"], [], { value: [0, "value"], name: [1, "name"], selected: [2, "selected"] }, { ClickEvent: "ClickEvent" }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\u041A\u0440\u0435\u0434\u0438\u0442"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](22, 0, null, 1, 2, "rosa-radio", [["form-group", "control"]], null, [[null, "ClickEvent"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("ClickEvent" === en)) {
        var pd_0 = (_co.setType($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, _modules_forms_radio_radio_radio_component_ngfactory__WEBPACK_IMPORTED_MODULE_12__["View_RadioComponent_0"], _modules_forms_radio_radio_radio_component_ngfactory__WEBPACK_IMPORTED_MODULE_12__["RenderType_RadioComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](23, 114688, null, 0, _modules_forms_radio_radio_radio_component__WEBPACK_IMPORTED_MODULE_13__["RadioComponent"], [], { value: [0, "value"], name: [1, "name"] }, { ClickEvent: "ClickEvent" }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\u041E\u0432\u0435\u0440\u0434\u0440\u0430\u0444\u0442"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 2, 1, null, View_CalculatorComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](26, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](27, 0, null, null, 10, "rosa-form-group", [], null, null, null, _modules_forms_form_layout_form_group_form_group_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__["View_FormGroupComponent_0"], _modules_forms_form_layout_form_group_form_group_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__["RenderType_FormGroupComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](28, 114688, null, 0, _modules_forms_form_layout_form_group_form_group_component__WEBPACK_IMPORTED_MODULE_9__["FormGroupComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](29, 0, null, 0, 2, "rosa-label", [["form-group", "label"]], null, null, null, _modules_forms_label_label_label_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__["View_LabelComponent_0"], _modules_forms_label_label_label_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__["RenderType_LabelComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](30, 114688, null, 0, _modules_forms_label_label_label_component__WEBPACK_IMPORTED_MODULE_11__["LabelComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\u0421\u0440\u043E\u043A \u043A\u0440\u0435\u0434\u0438\u0442\u0430/\u0442\u0440\u0430\u043D\u0448\u0430"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](32, 0, null, 1, 2, "rosa-dropdown-hoc", [["form-group", "control"]], null, [[null, "sendValue"], ["document", "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("document:click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 33).onCLick($event.target) !== false);
        ad = (pd_0 && ad);
    } if (("sendValue" === en)) {
        var pd_1 = (_co.setRange($event) !== false);
        ad = (pd_1 && ad);
    } return ad; }, _components_dropdown_hoc_dropdown_hoc_component_ngfactory__WEBPACK_IMPORTED_MODULE_15__["View_DropdownHocComponent_0"], _components_dropdown_hoc_dropdown_hoc_component_ngfactory__WEBPACK_IMPORTED_MODULE_15__["RenderType_DropdownHocComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](33, 638976, null, 0, _components_dropdown_hoc_dropdown_hoc_component__WEBPACK_IMPORTED_MODULE_16__["DropdownHocComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], { values: [0, "values"], suffix: [1, "suffix"], forceSetValue: [2, "forceSetValue"] }, { sendValue: "sendValue" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _angular_common__WEBPACK_IMPORTED_MODULE_14__["AsyncPipe"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](35, 0, null, 2, 2, "rosa-hint", [["form-group", "hint"]], null, null, null, _modules_forms_hint_hint_hint_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_HintComponent_0"], _modules_forms_hint_hint_hint_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_HintComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](36, 114688, null, 0, _modules_forms_hint_hint_hint_component__WEBPACK_IMPORTED_MODULE_3__["HintComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\u041F\u0440\u0438 \u0441\u0440\u043E\u043A\u0435 \u043A\u0440\u0435\u0434\u0438\u0442\u0430 \u0431\u043E\u043B\u0435\u0435 60 \u043C\u0435\u0441. \u0432\u044B\u0431\u0438\u0440\u0430\u0435\u0442\u0441\u044F \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u00AB84 \u043C\u0435\u0441\u044F\u0446\u0430\u00BB"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](38, 0, null, null, 7, "rosa-form-group", [], null, null, null, _modules_forms_form_layout_form_group_form_group_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__["View_FormGroupComponent_0"], _modules_forms_form_layout_form_group_form_group_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__["RenderType_FormGroupComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](39, 114688, null, 0, _modules_forms_form_layout_form_group_form_group_component__WEBPACK_IMPORTED_MODULE_9__["FormGroupComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](40, 0, null, 0, 2, "rosa-label", [["form-group", "label"]], null, null, null, _modules_forms_label_label_label_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__["View_LabelComponent_0"], _modules_forms_label_label_label_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__["RenderType_LabelComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](41, 114688, null, 0, _modules_forms_label_label_label_component__WEBPACK_IMPORTED_MODULE_11__["LabelComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\u041E\u0431\u0435\u0441\u043F\u0435\u0447\u0435\u043D\u043D\u043E\u0441\u0442\u044C"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](43, 0, null, 1, 2, "rosa-dropdown-hoc", [["form-group", "control"]], null, [[null, "sendValue"], ["document", "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("document:click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 44).onCLick($event.target) !== false);
        ad = (pd_0 && ad);
    } if (("sendValue" === en)) {
        var pd_1 = (_co.setKey($event) !== false);
        ad = (pd_1 && ad);
    } return ad; }, _components_dropdown_hoc_dropdown_hoc_component_ngfactory__WEBPACK_IMPORTED_MODULE_15__["View_DropdownHocComponent_0"], _components_dropdown_hoc_dropdown_hoc_component_ngfactory__WEBPACK_IMPORTED_MODULE_15__["RenderType_DropdownHocComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](44, 638976, null, 0, _components_dropdown_hoc_dropdown_hoc_component__WEBPACK_IMPORTED_MODULE_16__["DropdownHocComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], { values: [0, "values"] }, { sendValue: "sendValue" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _angular_common__WEBPACK_IMPORTED_MODULE_14__["AsyncPipe"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](46, 0, null, null, 10, "rosa-form-group", [], null, null, null, _modules_forms_form_layout_form_group_form_group_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__["View_FormGroupComponent_0"], _modules_forms_form_layout_form_group_form_group_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__["RenderType_FormGroupComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](47, 114688, null, 0, _modules_forms_form_layout_form_group_form_group_component__WEBPACK_IMPORTED_MODULE_9__["FormGroupComponent"], [], { layout: [0, "layout"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](48, 0, null, 0, 2, "rosa-label", [["form-group", "label"]], null, null, null, _modules_forms_label_label_label_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__["View_LabelComponent_0"], _modules_forms_label_label_label_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__["RenderType_LabelComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](49, 114688, null, 0, _modules_forms_label_label_label_component__WEBPACK_IMPORTED_MODULE_11__["LabelComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\u0421\u0435\u0433\u043C\u0435\u043D\u0442"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](51, 0, null, 1, 2, "rosa-radio", [["form-group", "control"]], null, [[null, "ClickEvent"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("ClickEvent" === en)) {
        var pd_0 = (_co.setSegment($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, _modules_forms_radio_radio_radio_component_ngfactory__WEBPACK_IMPORTED_MODULE_12__["View_RadioComponent_0"], _modules_forms_radio_radio_radio_component_ngfactory__WEBPACK_IMPORTED_MODULE_12__["RenderType_RadioComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](52, 114688, null, 0, _modules_forms_radio_radio_radio_component__WEBPACK_IMPORTED_MODULE_13__["RadioComponent"], [], { value: [0, "value"], name: [1, "name"], selected: [2, "selected"] }, { ClickEvent: "ClickEvent" }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\u041C\u0430\u043B\u044B\u0439"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](54, 0, null, 1, 2, "rosa-radio", [["form-group", "control"]], null, [[null, "ClickEvent"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("ClickEvent" === en)) {
        var pd_0 = (_co.setSegment($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, _modules_forms_radio_radio_radio_component_ngfactory__WEBPACK_IMPORTED_MODULE_12__["View_RadioComponent_0"], _modules_forms_radio_radio_radio_component_ngfactory__WEBPACK_IMPORTED_MODULE_12__["RenderType_RadioComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](55, 114688, null, 0, _modules_forms_radio_radio_radio_component__WEBPACK_IMPORTED_MODULE_13__["RadioComponent"], [], { value: [0, "value"], name: [1, "name"] }, { ClickEvent: "ClickEvent" }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\u041C\u0438\u043A\u0440\u043E"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](57, 0, null, null, 8, "div", [["class", "form-group_margin"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](58, 0, null, null, 7, "rosa-form-group", [], null, null, null, _modules_forms_form_layout_form_group_form_group_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__["View_FormGroupComponent_0"], _modules_forms_form_layout_form_group_form_group_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__["RenderType_FormGroupComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](59, 114688, null, 0, _modules_forms_form_layout_form_group_form_group_component__WEBPACK_IMPORTED_MODULE_9__["FormGroupComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](60, 0, null, 0, 2, "rosa-label", [["form-group", "label"]], null, null, null, _modules_forms_label_label_label_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__["View_LabelComponent_0"], _modules_forms_label_label_label_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__["RenderType_LabelComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](61, 114688, null, 0, _modules_forms_label_label_label_component__WEBPACK_IMPORTED_MODULE_11__["LabelComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043C\u0430\u0440\u0436\u0443"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](63, 0, null, 1, 2, "rosa-input", [["form-group", "control"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 65).onContainerClick($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, _modules_forms_input_input_input_component_ngfactory__WEBPACK_IMPORTED_MODULE_17__["View_InputComponent_0"], _modules_forms_input_input_input_component_ngfactory__WEBPACK_IMPORTED_MODULE_17__["RenderType_InputComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](5120, null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_modules_forms_input_input_input_component__WEBPACK_IMPORTED_MODULE_18__["InputComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](65, 114688, null, 0, _modules_forms_input_input_input_component__WEBPACK_IMPORTED_MODULE_18__["InputComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], { controlOptions: [0, "controlOptions"], controlName: [1, "controlName"], size: [2, "size"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](66, 0, null, null, 7, "rosa-form-group", [], null, null, null, _modules_forms_form_layout_form_group_form_group_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__["View_FormGroupComponent_0"], _modules_forms_form_layout_form_group_form_group_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__["RenderType_FormGroupComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](67, 114688, null, 0, _modules_forms_form_layout_form_group_form_group_component__WEBPACK_IMPORTED_MODULE_9__["FormGroupComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](68, 0, null, 0, 2, "rosa-label", [["form-group", "label"]], null, null, null, _modules_forms_label_label_label_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__["View_LabelComponent_0"], _modules_forms_label_label_label_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__["RenderType_LabelComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](69, 114688, null, 0, _modules_forms_label_label_label_component__WEBPACK_IMPORTED_MODULE_11__["LabelComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\u0418\u0442\u043E\u0433\u043E\u0432\u0430\u044F \u0441\u0442\u0430\u0432\u043A\u0430:"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](71, 0, null, 1, 2, "rosa-score-result", [["form-group", "control"]], null, null, null, _components_score_result_score_result_component_ngfactory__WEBPACK_IMPORTED_MODULE_19__["View_ScoreResultComponent_0"], _components_score_result_score_result_component_ngfactory__WEBPACK_IMPORTED_MODULE_19__["RenderType_ScoreResultComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](72, 114688, null, 0, _components_score_result_score_result_component__WEBPACK_IMPORTED_MODULE_20__["ScoreResultComponent"], [ngx_clipboard__WEBPACK_IMPORTED_MODULE_21__["ClipboardService"]], { score: [0, "score"], margin: [1, "margin"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _angular_common__WEBPACK_IMPORTED_MODULE_14__["AsyncPipe"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](74, 0, null, null, 5, "div", [["class", "form-group_save"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](75, 0, null, null, 2, "rosa-input", [], null, [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 77).onContainerClick($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, _modules_forms_input_input_input_component_ngfactory__WEBPACK_IMPORTED_MODULE_17__["View_InputComponent_0"], _modules_forms_input_input_input_component_ngfactory__WEBPACK_IMPORTED_MODULE_17__["RenderType_InputComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](5120, null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_modules_forms_input_input_input_component__WEBPACK_IMPORTED_MODULE_18__["InputComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](77, 114688, null, 0, _modules_forms_input_input_input_component__WEBPACK_IMPORTED_MODULE_18__["InputComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], { placeholder: [0, "placeholder"], controlOptions: [1, "controlOptions"], controlName: [2, "controlName"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](78, 0, null, null, 1, "rosa-button", [], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.saveCalculate() !== false);
        ad = (pd_0 && ad);
    } return ad; }, _modules_buttons_button_button_button_component_ngfactory__WEBPACK_IMPORTED_MODULE_22__["View_ButtonComponent_0"], _modules_buttons_button_button_button_component_ngfactory__WEBPACK_IMPORTED_MODULE_22__["RenderType_ButtonComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](79, 638976, null, 0, _modules_buttons_button_button_button_component__WEBPACK_IMPORTED_MODULE_23__["ButtonComponent"], [], { state: [0, "state"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](80, 0, null, null, 4, "div", [["class", "calculator-pane_right"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](81, 0, null, null, 3, "div", [["class", "score-cards"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 2, null, View_CalculatorComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](83, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](84, 2)], function (_ck, _v) { var _co = _v.component; var currVal_7 = _co.calculator; _ck(_v, 11, 0, currVal_7); var currVal_8 = "form-group_group"; _ck(_v, 15, 0, currVal_8); _ck(_v, 17, 0); var currVal_9 = "credit"; var currVal_10 = "type"; var currVal_11 = true; _ck(_v, 20, 0, currVal_9, currVal_10, currVal_11); var currVal_12 = "overdraft"; var currVal_13 = "type"; _ck(_v, 23, 0, currVal_12, currVal_13); var currVal_14 = _co.overdrafted; _ck(_v, 26, 0, currVal_14); _ck(_v, 28, 0); _ck(_v, 30, 0); var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 33, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 34).transform(_co.ranges$)); var currVal_16 = " \u043C\u0435\u0441."; var currVal_17 = _co.overdrafted; _ck(_v, 33, 0, currVal_15, currVal_16, currVal_17); _ck(_v, 36, 0); _ck(_v, 39, 0); _ck(_v, 41, 0); var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 44, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 45).transform(_co.keys$)); _ck(_v, 44, 0, currVal_18); var currVal_19 = "form-group_group"; _ck(_v, 47, 0, currVal_19); _ck(_v, 49, 0); var currVal_20 = "micro"; var currVal_21 = "segment"; var currVal_22 = true; _ck(_v, 52, 0, currVal_20, currVal_21, currVal_22); var currVal_23 = "small"; var currVal_24 = "segment"; _ck(_v, 55, 0, currVal_23, currVal_24); _ck(_v, 59, 0); _ck(_v, 61, 0); var currVal_25 = _co.calculator.controls["margin"]; var currVal_26 = "margin"; var currVal_27 = "size-large"; _ck(_v, 65, 0, currVal_25, currVal_26, currVal_27); _ck(_v, 67, 0); _ck(_v, 69, 0); var currVal_28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 72, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 73).transform(_co.scoreResult$)); var currVal_29 = _co.marginValue; _ck(_v, 72, 0, currVal_28, currVal_29); var currVal_30 = "\u0434\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0437\u0430\u043C\u0435\u0442\u043A\u0443"; var currVal_31 = _co.calculator.controls["note"]; var currVal_32 = "note"; _ck(_v, 77, 0, currVal_30, currVal_31, currVal_32); var currVal_33 = _co.buttonState; _ck(_v, 79, 0, currVal_33); var currVal_34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 83, 0, _ck(_v, 84, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 0), _co.calculateHistory, _co.order)); _ck(_v, 83, 0, currVal_34); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13).ngClassUntouched; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13).ngClassTouched; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13).ngClassPristine; var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13).ngClassDirty; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13).ngClassValid; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13).ngClassInvalid; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13).ngClassPending; _ck(_v, 9, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6); }); }
function View_CalculatorComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "rosa-calculator", [], null, null, null, View_CalculatorComponent_0, RenderType_CalculatorComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 245760, null, 0, _calculator_component__WEBPACK_IMPORTED_MODULE_24__["CalculatorComponent"], [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"], _services_form_service__WEBPACK_IMPORTED_MODULE_25__["FormService"], _bstorage_indexed_service__WEBPACK_IMPORTED_MODULE_26__["IndexedService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var CalculatorComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("rosa-calculator", _calculator_component__WEBPACK_IMPORTED_MODULE_24__["CalculatorComponent"], View_CalculatorComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/application/loans/calculator/calculator/calculator.component.scss.shim.ngstyle.js":
/*!***************************************************************************************************!*\
  !*** ./src/app/application/loans/calculator/calculator/calculator.component.scss.shim.ngstyle.js ***!
  \***************************************************************************************************/
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
var styles = [".calculator-wrapper[_ngcontent-%COMP%] {\n  background-color: var(--color-background-200);\n  width: 100%;\n  height: calc(100vh - 96px);\n  min-height: 900px;\n  display: flex;\n  justify-content: center;\n  align-items: center; }\n\n.calculator-pane[_ngcontent-%COMP%] {\n  width: 992px;\n  height: auto;\n  margin-top: -64px;\n  min-height: 480px;\n  background-color: #FFF;\n  border: 1px solid var(--color-border-control); }\n\n.calculator-pane_header[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 56px;\n  background-color: #FFF;\n  border-bottom: 1px solid var(--color-border-control); }\n\n.calculator-pane_header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: var(--size-typo-xl);\n    font-weight: 400;\n    line-height: var --line-height-typo-l;\n    color: var(--color-typo-primary);\n    margin: 0;\n    padding: 16px 24px; }\n\n.calculator-pane_content[_ngcontent-%COMP%] {\n  display: flex; }\n\n.calculator-pane_left[_ngcontent-%COMP%] {\n  width: 56%; }\n\n.calculator-pane_right[_ngcontent-%COMP%] {\n  width: 44%;\n  background-color: #fafafa;\n  height: 604px;\n  overflow: hidden; }\n\n.calculator-form[_ngcontent-%COMP%] {\n  padding: 20px 24px; }\n\n.form-group_margin[_ngcontent-%COMP%] {\n  width: 50%; }\n\n.form-group_save[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between; }\n\n.form-group_save[_ngcontent-%COMP%]  rosa-input {\n    width: 65%; }\n\n.score-cards[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  padding: 0 16px;\n  box-sizing: border-box;\n  height: 604px;\n  overflow-x: hidden;\n  overflow-y: scroll; }"];



/***/ }),

/***/ "./src/app/application/loans/calculator/calculator/calculator.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/application/loans/calculator/calculator/calculator.component.ts ***!
  \*********************************************************************************/
/*! exports provided: CalculatorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalculatorComponent", function() { return CalculatorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _app_bstorage_indexed_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/bstorage/indexed.service */ "./src/app/bstorage/indexed.service.ts");
/* harmony import */ var _services_form_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/form.service */ "./src/app/application/loans/calculator/services/form.service.ts");






var CalculatorComponent = /** @class */ (function () {
    function CalculatorComponent(_fb, _formService, _indexedStore) {
        this._fb = _fb;
        this._formService = _formService;
        this._indexedStore = _indexedStore;
        this.buttonState = { text: "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u0440\u0430\u0441\u0441\u0447\u0435\u0442", class: "state_default", disabled: false };
        this.loadScore = false;
        this.calculateHistory = [];
        this.storageData$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.order = 'date';
        this.overdrafted = false;
    }
    CalculatorComponent.prototype.ngOnInit = function () {
        this.initCalculator();
        this.initForm();
        this.formChangeDetector();
        this.marginSubscribe();
        this.getSavedCalculates();
    };
    CalculatorComponent.prototype.initForm = function () {
        this.calculator = this._fb.group({
            type: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            range: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            segment: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            collateral: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            margin: ['', []],
            note: ['', []]
        });
    };
    CalculatorComponent.prototype.initCalculator = function () {
        this.ranges$ = this._formService.getRanges();
        this.keys$ = this._formService.getKeys();
    };
    CalculatorComponent.prototype.setType = function (type) {
        this.calculator.controls['type'].setValue(type);
        console.log(this.calculator.controls['type'].value);
        if (this.calculator.controls['type'].value === 'overdraft') {
            this.overdrafted = true;
            console.log(this.overdrafted);
        }
        else {
            this.overdrafted = false;
            console.log(this.overdrafted);
        }
        this.calculate();
    };
    CalculatorComponent.prototype.setSegment = function (segment) {
        this.calculator.controls['segment'].setValue(segment);
        this.calculate();
    };
    CalculatorComponent.prototype.setRange = function (range) {
        this.calculator.controls['range'].setValue(range);
        this.calculate();
    };
    CalculatorComponent.prototype.setKey = function (key) {
        this.calculator.controls['collateral'].setValue(key);
        this.calculate();
    };
    CalculatorComponent.prototype.formChangeDetector = function () {
        var _this = this;
        this.calculator.valueChanges.subscribe(function (val) {
            _this.buttonState = { text: "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u0440\u0430\u0441\u0441\u0447\u0435\u0442", class: "state_default", disabled: false };
        });
    };
    CalculatorComponent.prototype.marginSubscribe = function () {
        var _this = this;
        this.calculator
            .get('margin')
            .valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])()).subscribe(function (results) { _this.marginValue = parseFloat(results.replace(/,/, '.')); });
    };
    CalculatorComponent.prototype.calculate = function () {
        var _this = this;
        if (!this.calculator.valid) {
            return false;
        }
        this.loadScore = true;
        setTimeout(function () { _this.loadScore = false; }, 2300);
        this.scoreResult$ = this._formService.calculate(this.calculator.value);
        this._formService.calculate(this.calculator.value).subscribe(function (score) { return _this.scoreResult = score; }, function (data) { alert('Не удалось вычислить ставку'); });
    };
    CalculatorComponent.prototype.saveCalculate = function () {
        var _this = this;
        var newCalculate = this.calculator.value;
        newCalculate.date = new Date();
        newCalculate.score = this.scoreResult.score;
        this.calculateHistory.push(newCalculate);
        this._indexedStore.saveToIndexed("calculates", JSON.stringify(this.calculateHistory)).then(function (value) {
            _this.getSavedCalculates();
            _this.storageData$.next(value);
            _this.buttonState = { text: "\u0420\u0430\u0441\u0441\u0447\u0435\u0442 \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D", class: "state_success", disabled: true };
        });
    };
    CalculatorComponent.prototype.getSavedCalculates = function () {
        var _this = this;
        // get saved calculates
        this._indexedStore.getFromIndexed("calculates").then(function (value) {
            if (value === null) {
                return;
            }
            value = JSON.parse(value);
            _this.calculateHistory = value;
            _this.storageData$.next(_this.calculateHistory);
        });
    };
    CalculatorComponent.prototype.ngOnDestroy = function () {
        this.storageData$.unsubscribe();
    };
    return CalculatorComponent;
}());



/***/ }),

/***/ "./src/app/application/loans/calculator/components/dropdown-hoc/dropdown-hoc.component.ngfactory.js":
/*!**********************************************************************************************************!*\
  !*** ./src/app/application/loans/calculator/components/dropdown-hoc/dropdown-hoc.component.ngfactory.js ***!
  \**********************************************************************************************************/
/*! exports provided: RenderType_DropdownHocComponent, View_DropdownHocComponent_0, View_DropdownHocComponent_Host_0, DropdownHocComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_DropdownHocComponent", function() { return RenderType_DropdownHocComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_DropdownHocComponent_0", function() { return View_DropdownHocComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_DropdownHocComponent_Host_0", function() { return View_DropdownHocComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropdownHocComponentNgFactory", function() { return DropdownHocComponentNgFactory; });
/* harmony import */ var _dropdown_hoc_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dropdown-hoc.component.scss.shim.ngstyle */ "./src/app/application/loans/calculator/components/dropdown-hoc/dropdown-hoc.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _modules_forms_dropdown_dropdown_dropdown_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../modules/forms/dropdown/dropdown/dropdown.component.ngfactory */ "./src/app/modules/forms/dropdown/dropdown/dropdown.component.ngfactory.js");
/* harmony import */ var _modules_forms_dropdown_dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../modules/forms/dropdown/dropdown/dropdown.component */ "./src/app/modules/forms/dropdown/dropdown/dropdown.component.ts");
/* harmony import */ var _modules_forms_dropdown_list_list_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../modules/forms/dropdown/list/list.component.ngfactory */ "./src/app/modules/forms/dropdown/list/list.component.ngfactory.js");
/* harmony import */ var _modules_forms_dropdown_list_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../modules/forms/dropdown/list/list.component */ "./src/app/modules/forms/dropdown/list/list.component.ts");
/* harmony import */ var _dropdown_hoc_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dropdown-hoc.component */ "./src/app/application/loans/calculator/components/dropdown-hoc/dropdown-hoc.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 







var styles_DropdownHocComponent = [_dropdown_hoc_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_DropdownHocComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_DropdownHocComponent, data: {} });

function View_DropdownHocComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "div", [["class", "dropdown-container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "rosa-dropdown", [], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.showDropdown() !== false);
        ad = (pd_0 && ad);
    } return ad; }, _modules_forms_dropdown_dropdown_dropdown_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_DropdownComponent_0"], _modules_forms_dropdown_dropdown_dropdown_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_DropdownComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 114688, null, 0, _modules_forms_dropdown_dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_3__["DropdownComponent"], [], { value: [0, "value"], size: [1, "size"], isDisabled: [2, "isDisabled"], isOpen: [3, "isOpen"], suffix: [4, "suffix"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "rosa-list", [], null, [[null, "sendValue"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("sendValue" === en)) {
        var pd_0 = (_co.changeValue($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, _modules_forms_dropdown_list_list_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_ListComponent_0"], _modules_forms_dropdown_list_list_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_ListComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 114688, null, 0, _modules_forms_dropdown_list_list_component__WEBPACK_IMPORTED_MODULE_5__["ListComponent"], [], { values: [0, "values"], suffix: [1, "suffix"], selected: [2, "selected"], isOpen: [3, "isOpen"] }, { sendValue: "sendValue" })], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.selected; var currVal_1 = "size-large"; var currVal_2 = _co.disabled; var currVal_3 = _co.isOpen; var currVal_4 = _co.settedSuffix; _ck(_v, 2, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4); var currVal_5 = _co.values; var currVal_6 = _co.settedSuffix; var currVal_7 = _co.selected; var currVal_8 = _co.isOpen; _ck(_v, 4, 0, currVal_5, currVal_6, currVal_7, currVal_8); }, null); }
function View_DropdownHocComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "rosa-dropdown-hoc", [], null, [["document", "click"]], function (_v, en, $event) { var ad = true; if (("document:click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).onCLick($event.target) !== false);
        ad = (pd_0 && ad);
    } return ad; }, View_DropdownHocComponent_0, RenderType_DropdownHocComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 638976, null, 0, _dropdown_hoc_component__WEBPACK_IMPORTED_MODULE_6__["DropdownHocComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var DropdownHocComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("rosa-dropdown-hoc", _dropdown_hoc_component__WEBPACK_IMPORTED_MODULE_6__["DropdownHocComponent"], View_DropdownHocComponent_Host_0, { values: "values", suffix: "suffix", prefix: "prefix", disabled: "disabled", forceSetValue: "forceSetValue" }, { sendValue: "sendValue" }, []);



/***/ }),

/***/ "./src/app/application/loans/calculator/components/dropdown-hoc/dropdown-hoc.component.scss.shim.ngstyle.js":
/*!******************************************************************************************************************!*\
  !*** ./src/app/application/loans/calculator/components/dropdown-hoc/dropdown-hoc.component.scss.shim.ngstyle.js ***!
  \******************************************************************************************************************/
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
var styles = [".dropdown-container[_ngcontent-%COMP%] {\n  width: 100%; }"];



/***/ }),

/***/ "./src/app/application/loans/calculator/components/dropdown-hoc/dropdown-hoc.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/application/loans/calculator/components/dropdown-hoc/dropdown-hoc.component.ts ***!
  \************************************************************************************************/
/*! exports provided: DropdownHocComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropdownHocComponent", function() { return DropdownHocComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var DropdownHocComponent = /** @class */ (function () {
    function DropdownHocComponent(_elRef) {
        this._elRef = _elRef;
        this.suffix = '';
        this.disabled = false;
        this.forceSetValue = false;
        this.sendValue = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.isOpen = false;
    }
    DropdownHocComponent.prototype.ngOnInit = function () {
        //   this.previousSelected = this.selected;
        this.settedSuffix = this.suffix;
    };
    DropdownHocComponent.prototype.onCLick = function (targetElement) {
        if (!this._elRef.nativeElement.contains(targetElement)) {
            this.isOpen = false;
        }
    };
    DropdownHocComponent.prototype.ngOnChanges = function (changes) {
        if (changes['values']) {
            if (changes['values'].currentValue) {
                this.values = changes['values'].currentValue;
                this.selected = this.values[0];
                this.sendValue.emit(this.selected);
            }
        }
        if (changes['forceSetValue']) {
            if (changes['forceSetValue'].currentValue) {
                this.sendValue.emit("\u043E\u0432\u0435\u0440\u0434\u0440\u0430\u0444\u0442");
                this.disabled = true;
            }
            else {
                this.disabled = false;
                this.sendValue.emit(this.selected);
            }
        }
    };
    DropdownHocComponent.prototype.showDropdown = function () {
        this.isOpen = !this.isOpen;
    };
    DropdownHocComponent.prototype.changeValue = function (value) {
        this.selected = value;
        this.previousSelected = this.selected;
        this.sendValue.emit(value);
        this.showDropdown();
    };
    DropdownHocComponent.prototype.closeAll = function () {
        console.log('im close');
        this.isOpen = false;
    };
    return DropdownHocComponent;
}());



/***/ }),

/***/ "./src/app/application/loans/calculator/components/score-card/score-card.component.ngfactory.js":
/*!******************************************************************************************************!*\
  !*** ./src/app/application/loans/calculator/components/score-card/score-card.component.ngfactory.js ***!
  \******************************************************************************************************/
/*! exports provided: RenderType_ScoreCardComponent, View_ScoreCardComponent_0, View_ScoreCardComponent_Host_0, ScoreCardComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_ScoreCardComponent", function() { return RenderType_ScoreCardComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ScoreCardComponent_0", function() { return View_ScoreCardComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ScoreCardComponent_Host_0", function() { return View_ScoreCardComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScoreCardComponentNgFactory", function() { return ScoreCardComponentNgFactory; });
/* harmony import */ var _score_card_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./score-card.component.scss.shim.ngstyle */ "./src/app/application/loans/calculator/components/score-card/score-card.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _pipes_vartovalue_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../pipes/vartovalue.pipe */ "./src/app/application/loans/calculator/pipes/vartovalue.pipe.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _score_card_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./score-card.component */ "./src/app/application/loans/calculator/components/score-card/score-card.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 





var styles_ScoreCardComponent = [_score_card_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_ScoreCardComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_ScoreCardComponent, data: {} });

function View_ScoreCardComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "div", [["class", "score-card_name"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](2, 1)], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 1, 0, _ck(_v, 2, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 0), _co.data.type)); _ck(_v, 1, 0, currVal_0); }); }
function View_ScoreCardComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "div", [["class", "score-card_name"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["", ""]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.data.note; _ck(_v, 1, 0, currVal_0); }); }
function View_ScoreCardComponent_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["%"]))], null, null); }
function View_ScoreCardComponent_4(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "div", [["class", "score-card_margin"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["\u00A0+ ", " = ", "%"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](2, 1), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](3, 1)], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 1, 0, _ck(_v, 2, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 1), _co.marginParsed)); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 1, 1, _ck(_v, 3, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 1), (_co.data.score + _co.marginParsed))); _ck(_v, 1, 0, currVal_0, currVal_1); }); }
function View_ScoreCardComponent_5(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "div", [["class", "bage"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](2, 1)], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 1, 0, _ck(_v, 2, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 0), _co.data.type)); _ck(_v, 1, 0, currVal_0); }); }
function View_ScoreCardComponent_6(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "div", [["class", "bage"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["", " \u043C\u0435\u0441."]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.data.range; _ck(_v, 1, 0, currVal_0); }); }
function View_ScoreCardComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](0, _pipes_vartovalue_pipe__WEBPACK_IMPORTED_MODULE_2__["VartovaluePipe"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["DecimalPipe"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 26, "div", [["class", "score-card__container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 25, "div", [["class", "score-card"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 11, "div", [["class", "score-card_top"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ScoreCardComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ScoreCardComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 6, "div", [["class", "score-card_result"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](11, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](12, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ScoreCardComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](14, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ScoreCardComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](16, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](17, 0, null, null, 12, "div", [["class", "score-card_bottom"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, null, 2, "div", [["class", "score-card_date"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](19, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](20, 2), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](21, 0, null, null, 8, "div", [["class", "score-card_bages"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ScoreCardComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](23, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ScoreCardComponent_6)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](25, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](26, 0, null, null, 1, "div", [["class", "bage"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](27, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](28, 0, null, null, 1, "div", [["class", "bage"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](29, null, ["", ""]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = !_co.data.note; _ck(_v, 7, 0, currVal_0); var currVal_1 = _co.data.note; _ck(_v, 9, 0, currVal_1); var currVal_3 = !_co.data.margin; _ck(_v, 14, 0, currVal_3); var currVal_4 = _co.data.margin; _ck(_v, 16, 0, currVal_4); var currVal_6 = _co.data.note; _ck(_v, 23, 0, currVal_6); var currVal_7 = (_co.data.type !== "overdraft"); _ck(_v, 25, 0, currVal_7); }, function (_ck, _v) { var _co = _v.component; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 11, 0, _ck(_v, 12, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1), _co.data.score)); _ck(_v, 11, 0, currVal_2); var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 19, 0, _ck(_v, 20, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2), _co.data.date, "dd MMM HH:mm")); _ck(_v, 19, 0, currVal_5); var currVal_8 = _co.data.segment; _ck(_v, 27, 0, currVal_8); var currVal_9 = _co.data.collateral; _ck(_v, 29, 0, currVal_9); }); }
function View_ScoreCardComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "rosa-score-card", [], null, null, null, View_ScoreCardComponent_0, RenderType_ScoreCardComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _score_card_component__WEBPACK_IMPORTED_MODULE_4__["ScoreCardComponent"], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var ScoreCardComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("rosa-score-card", _score_card_component__WEBPACK_IMPORTED_MODULE_4__["ScoreCardComponent"], View_ScoreCardComponent_Host_0, { data: "data" }, {}, []);



/***/ }),

/***/ "./src/app/application/loans/calculator/components/score-card/score-card.component.scss.shim.ngstyle.js":
/*!**************************************************************************************************************!*\
  !*** ./src/app/application/loans/calculator/components/score-card/score-card.component.scss.shim.ngstyle.js ***!
  \**************************************************************************************************************/
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
var styles = [".score-card[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  background-color: #FFF;\n  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.05);\n  border: 1px solid var(--color-border-control);\n  width: 100%;\n  height: 64px;\n  box-sizing: border-box;\n  border-radius: 4px; }\n\n.score-card__container[_ngcontent-%COMP%] {\n  margin-bottom: 8px; }\n\n.score-card_top[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between; }\n\n.score-card_name[_ngcontent-%COMP%] {\n  font-size: var(--size-typo-m);\n  line-height: var(--line-height-typo-s);\n  color: var(--color-typo-primary);\n  font-weight: 500;\n  max-width: 210px;\n  display: inline-block;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap; }\n\n.score-card_date[_ngcontent-%COMP%] {\n  margin-top: 2px;\n  font-size: var(--size-typo-xs);\n  line-height: var(--line-height-typo-xs);\n  color: var(--color-typo-tertiary); }\n\n.score-card_bottom[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between; }\n\n.score-card_result[_ngcontent-%COMP%] {\n  display: flex;\n  font-size: var(--size-typo-m);\n  line-height: var(--line-height-typo-s);\n  color: var(--color-typo-primary);\n  font-weight: 500; }\n\n.score-card_result[_ngcontent-%COMP%]   .score-card_margin[_ngcontent-%COMP%] {\n    font-weight: 400 !important; }\n\n.score-card_bages[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-top: 2px; }\n\n.bage[_ngcontent-%COMP%] {\n  font-size: 12px;\n  line-height: 16px;\n  display: inline-block;\n  padding: 0 4px;\n  max-width: 54px;\n  white-space: nowrap;\n  box-sizing: border-box;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  margin-left: 4px;\n  border-radius: 2px;\n  color: var(--color-typo-tertiary);\n  box-shadow: 0 0 0 1px var(--color-border-control-alt); }"];



/***/ }),

/***/ "./src/app/application/loans/calculator/components/score-card/score-card.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/application/loans/calculator/components/score-card/score-card.component.ts ***!
  \********************************************************************************************/
/*! exports provided: ScoreCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScoreCardComponent", function() { return ScoreCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var ScoreCardComponent = /** @class */ (function () {
    function ScoreCardComponent() {
    }
    ScoreCardComponent.prototype.ngOnInit = function () {
        console.log(this.data);
        if (this.data.margin) {
            this.marginParsed = parseFloat(this.data.margin.replace(/,/, '.'));
        }
    };
    return ScoreCardComponent;
}());



/***/ }),

/***/ "./src/app/application/loans/calculator/components/score-result/score-result.component.ngfactory.js":
/*!**********************************************************************************************************!*\
  !*** ./src/app/application/loans/calculator/components/score-result/score-result.component.ngfactory.js ***!
  \**********************************************************************************************************/
/*! exports provided: RenderType_ScoreResultComponent, View_ScoreResultComponent_0, View_ScoreResultComponent_Host_0, ScoreResultComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_ScoreResultComponent", function() { return RenderType_ScoreResultComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ScoreResultComponent_0", function() { return View_ScoreResultComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ScoreResultComponent_Host_0", function() { return View_ScoreResultComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScoreResultComponentNgFactory", function() { return ScoreResultComponentNgFactory; });
/* harmony import */ var _score_result_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./score-result.component.scss.shim.ngstyle */ "./src/app/application/loans/calculator/components/score-result/score-result.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _score_result_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./score-result.component */ "./src/app/application/loans/calculator/components/score-result/score-result.component.ts");
/* harmony import */ var ngx_clipboard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-clipboard */ "./node_modules/ngx-clipboard/fesm5/ngx-clipboard.js");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 





var styles_ScoreResultComponent = [_score_result_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_ScoreResultComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_ScoreResultComponent, data: {} });

function View_ScoreResultComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["%"]))], null, null); }
function View_ScoreResultComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "div", [["class", "score__value_margin"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["\u00A0+ ", " = ", "%"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](2, 1), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](3, 1)], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 1, 0, _ck(_v, 2, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 0), _co.margin)); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 1, 1, _ck(_v, 3, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 0), (((_co.score == null) ? null : _co.score.score) + _co.margin))); _ck(_v, 1, 0, currVal_0, currVal_1); }); }
function View_ScoreResultComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["DecimalPipe"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 19, "button", [["class", "result__field size-large"]], [[1, "data-tool", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.copy() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](3, { "copied": 0, "hasTooltip": 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpad"](4, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 15, "div", [["class", "field__inner"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 7, "div", [["class", "field__score"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 6, "div", [["class", "score__value"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](8, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](9, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ScoreResultComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](11, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ScoreResultComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](13, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, null, 6, "div", [["class", "field__bages"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, null, 1, "div", [["class", "bage"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](16, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](17, 0, null, null, 1, "div", [["class", "bage"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](18, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](19, 0, null, null, 1, "div", [["class", "bage"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](20, null, ["", ""]))], function (_ck, _v) { var _co = _v.component; var currVal_1 = "result__field size-large"; var currVal_2 = _ck(_v, 3, 0, _co.copied, (((_co.score == null) ? null : _co.score.score) > 0)); _ck(_v, 2, 0, currVal_1, currVal_2); var currVal_4 = !_co.margin; _ck(_v, 11, 0, currVal_4); var currVal_5 = _co.margin; _ck(_v, 13, 0, currVal_5); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _ck(_v, 4, 0, _co.tooltipText); _ck(_v, 1, 0, currVal_0); var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 8, 0, _ck(_v, 9, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 0), ((_co.score == null) ? null : _co.score.score))); _ck(_v, 8, 0, currVal_3); var currVal_6 = ((_co.score == null) ? null : _co.score.type); _ck(_v, 16, 0, currVal_6); var currVal_7 = ((_co.score == null) ? null : _co.score.segment); _ck(_v, 18, 0, currVal_7); var currVal_8 = ((_co.score == null) ? null : _co.score.collateral); _ck(_v, 20, 0, currVal_8); }); }
function View_ScoreResultComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "rosa-score-result", [], null, null, null, View_ScoreResultComponent_0, RenderType_ScoreResultComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _score_result_component__WEBPACK_IMPORTED_MODULE_3__["ScoreResultComponent"], [ngx_clipboard__WEBPACK_IMPORTED_MODULE_4__["ClipboardService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var ScoreResultComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("rosa-score-result", _score_result_component__WEBPACK_IMPORTED_MODULE_3__["ScoreResultComponent"], View_ScoreResultComponent_Host_0, { score: "score", margin: "margin" }, {}, []);



/***/ }),

/***/ "./src/app/application/loans/calculator/components/score-result/score-result.component.scss.shim.ngstyle.js":
/*!******************************************************************************************************************!*\
  !*** ./src/app/application/loans/calculator/components/score-result/score-result.component.scss.shim.ngstyle.js ***!
  \******************************************************************************************************************/
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
var styles = [".result__container[_ngcontent-%COMP%] {\n  position: relative; }\n\n.result__field[_ngcontent-%COMP%] {\n  padding: 0;\n  border: none;\n  font-family: inherit;\n  color: inherit;\n  background-color: transparent;\n  cursor: pointer;\n  text-align: left;\n  width: 100%;\n  color: var(--color-typo-primary);\n  font-size: var(--size-typo-m);\n  font-weight: 400;\n  box-shadow: none;\n  border: 1px solid;\n  box-sizing: border-box;\n  border-radius: var(--space-xxxs);\n  border-color: var(--color-border-control-alt);\n  background-color: var(--color-soft);\n  outline: none;\n  transition: all 0.15s ease; }\n\n.result__field[_ngcontent-%COMP%]:focus, .result__field[_ngcontent-%COMP%]:active {\n    outline: none;\n    transition: all 0.15s ease;\n    border-color: var(--color-border-control-alt);\n    box-shadow: 0 0 0 2px var(--color-border-control-alt); }\n\n.field__inner[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between; }\n\n.field__score[_ngcontent-%COMP%] {\n  display: flex; }\n\n.field__score[_ngcontent-%COMP%]   .score__value[_ngcontent-%COMP%] {\n    display: flex;\n    font-size: var(--size-typo-h);\n    font-weight: 500; }\n\n.field__score[_ngcontent-%COMP%]   .score__value_margin[_ngcontent-%COMP%] {\n    font-weight: 400 !important; }\n\n.field__bages[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center; }\n\n.bage[_ngcontent-%COMP%] {\n  font-size: 13px;\n  line-height: 20px;\n  display: inline-block;\n  padding: 0 8px;\n  max-width: 80px;\n  white-space: nowrap;\n  box-sizing: border-box;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  margin-left: 8px;\n  border-radius: 2px;\n  color: var(--color-typo-tertiary);\n  box-shadow: 0 0 0 1px var(--color-border-control-alt); }\n\n.hasTooltip[_ngcontent-%COMP%] {\n  --duration: 400ms;\n  --ease: cubic-bezier(0.19, 1, 0.22, 1);\n  --bounce: cubic-bezier(0.6, -0.28, 0.735, 0.045); }\n\n.hasTooltip[_ngcontent-%COMP%]:after {\n    content: attr(data-tool);\n    position: absolute;\n    z-index: 10;\n    left: 50%;\n    bottom: 100%;\n    padding: 0px 12px;\n    font-size: 14px;\n    line-height: 32px;\n    left: 50%;\n    box-shadow: 0 0 0 -12px rgba(0, 0, 0, 0);\n    background-color: var(--color-tone);\n    color: var(--color-ghost);\n    opacity: 0;\n    border-radius: 4px;\n    pointer-events: none;\n    white-space: nowrap;\n    -webkit-transform: translate(-50%, 16px);\n            transform: translate(-50%, 16px);\n    transition: box-shadow calc(var(--duration) / 1.5) var(--bounce), opacity calc(var(--duration) / 1.5) var(--bounce), -webkit-transform calc(var(--duration) / 1.5) var(--bounce);\n    transition: box-shadow calc(var(--duration) / 1.5) var(--bounce), opacity calc(var(--duration) / 1.5) var(--bounce), transform calc(var(--duration) / 1.5) var(--bounce);\n    transition: box-shadow calc(var(--duration) / 1.5) var(--bounce), opacity calc(var(--duration) / 1.5) var(--bounce), transform calc(var(--duration) / 1.5) var(--bounce), -webkit-transform calc(var(--duration) / 1.5) var(--bounce); }\n\n.hasTooltip[_ngcontent-%COMP%]:hover:after {\n    opacity: 1;\n    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n    -webkit-transform: translate(-50%, -16%);\n            transform: translate(-50%, -16%);\n    transition-timing-function: var(--ease); }\n\n.hasTooltip.copied[_ngcontent-%COMP%]:after {\n    color: #FFF;\n    background-color: var(--color-success) !important;\n    transition: background-color calc(var(--duration) / 1.5) var(--bounce); }\n\n.size-small[_ngcontent-%COMP%] {\n  padding: 0 4px;\n  height: 24px;\n  line-height: 24px; }\n\n.size-default[_ngcontent-%COMP%] {\n  padding: 0 8px;\n  height: 32px;\n  line-height: 32px; }\n\n.size-large[_ngcontent-%COMP%] {\n  padding: 0 12px;\n  height: 40px;\n  line-height: 40px; }\n\n.state_default[_ngcontent-%COMP%] {\n  border-color: var(--color-border-control); }\n\n.state_error[_ngcontent-%COMP%] {\n  border: 1px solid var(--color-error) !important; }\n\n.state_success[_ngcontent-%COMP%] {\n  border: 1px solid var(--color-success) !important; }\n\n.state_dark[_ngcontent-%COMP%] {\n  border: 1px solid var(--color-border-control-alt) !important; }\n\n.state_disabled[_ngcontent-%COMP%] {\n  background-color: var(--color-soft) !important;\n  color: var(--color-typo-tertiary) !important; }"];



/***/ }),

/***/ "./src/app/application/loans/calculator/components/score-result/score-result.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/application/loans/calculator/components/score-result/score-result.component.ts ***!
  \************************************************************************************************/
/*! exports provided: ScoreResultComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScoreResultComponent", function() { return ScoreResultComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_clipboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-clipboard */ "./node_modules/ngx-clipboard/fesm5/ngx-clipboard.js");


var ScoreResultComponent = /** @class */ (function () {
    function ScoreResultComponent(_clipboardService) {
        this._clipboardService = _clipboardService;
        this.tooltipText = "\u0421\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442";
        this.copied = false;
    }
    ScoreResultComponent.prototype.ngOnInit = function () { };
    ScoreResultComponent.prototype.copy = function () {
        var _this = this;
        if (this.score.score === 0) {
            return;
        }
        this.tooltipText = "\u0421\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u043D\u043E";
        this.copied = true;
        setTimeout(function () { _this.tooltipText = "\u0421\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442"; _this.copied = false; }, 3000);
        this._clipboardService.copyFromContent("" + this.score.score);
    };
    return ScoreResultComponent;
}());



/***/ }),

/***/ "./src/app/application/loans/calculator/config/config.component.ngfactory.js":
/*!***********************************************************************************!*\
  !*** ./src/app/application/loans/calculator/config/config.component.ngfactory.js ***!
  \***********************************************************************************/
/*! exports provided: RenderType_ConfigComponent, View_ConfigComponent_0, View_ConfigComponent_Host_0, ConfigComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_ConfigComponent", function() { return RenderType_ConfigComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ConfigComponent_0", function() { return View_ConfigComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ConfigComponent_Host_0", function() { return View_ConfigComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigComponentNgFactory", function() { return ConfigComponentNgFactory; });
/* harmony import */ var _config_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config.component.scss.shim.ngstyle */ "./src/app/application/loans/calculator/config/config.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _config_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config.component */ "./src/app/application/loans/calculator/config/config.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 



var styles_ConfigComponent = [_config_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_ConfigComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_ConfigComponent, data: {} });

function View_ConfigComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" config works!\n"]))], null, null); }
function View_ConfigComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "rosa-config", [], null, null, null, View_ConfigComponent_0, RenderType_ConfigComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _config_component__WEBPACK_IMPORTED_MODULE_2__["ConfigComponent"], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var ConfigComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("rosa-config", _config_component__WEBPACK_IMPORTED_MODULE_2__["ConfigComponent"], View_ConfigComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/application/loans/calculator/config/config.component.scss.shim.ngstyle.js":
/*!*******************************************************************************************!*\
  !*** ./src/app/application/loans/calculator/config/config.component.scss.shim.ngstyle.js ***!
  \*******************************************************************************************/
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
var styles = [""];



/***/ }),

/***/ "./src/app/application/loans/calculator/config/config.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/application/loans/calculator/config/config.component.ts ***!
  \*************************************************************************/
/*! exports provided: ConfigComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigComponent", function() { return ConfigComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var ConfigComponent = /** @class */ (function () {
    function ConfigComponent() {
    }
    ConfigComponent.prototype.ngOnInit = function () {
    };
    return ConfigComponent;
}());



/***/ }),

/***/ "./src/app/application/loans/calculator/pipes/order-by.pipe.ts":
/*!*********************************************************************!*\
  !*** ./src/app/application/loans/calculator/pipes/order-by.pipe.ts ***!
  \*********************************************************************/
/*! exports provided: OrderByPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderByPipe", function() { return OrderByPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var OrderByPipe = /** @class */ (function () {
    function OrderByPipe() {
    }
    OrderByPipe.prototype.transform = function (array, orderBy, asc) {
        var _this = this;
        if (asc === void 0) { asc = false; }
        console.log(array);
        console.log(orderBy);
        if (!orderBy || orderBy.trim() === '') {
            return array;
        }
        if (asc) {
            return Array.from(array).sort(function (item1, item2) {
                return _this.orderByComparator(item1[orderBy], item2[orderBy]);
            });
        }
        else {
            // not asc
            return Array.from(array).sort(function (item1, item2) {
                return _this.orderByComparator(item2[orderBy], item1[orderBy]);
            });
        }
    };
    OrderByPipe.prototype.orderByComparator = function (a, b) {
        if ((isNaN(parseFloat(a)) || !isFinite(a)) || (isNaN(parseFloat(b)) || !isFinite(b))) {
            if (a.toLowerCase() < b.toLowerCase()) {
                return -1;
            }
            if (a.toLowerCase() > b.toLowerCase()) {
                return 1;
            }
        }
        else {
            if (parseFloat(a) < parseFloat(b)) {
                return -1;
            }
            if (parseFloat(a) > parseFloat(b)) {
                return 1;
            }
        }
        return 0;
    };
    return OrderByPipe;
}());



/***/ }),

/***/ "./src/app/application/loans/calculator/pipes/vartovalue.pipe.ts":
/*!***********************************************************************!*\
  !*** ./src/app/application/loans/calculator/pipes/vartovalue.pipe.ts ***!
  \***********************************************************************/
/*! exports provided: VartovaluePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VartovaluePipe", function() { return VartovaluePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var VartovaluePipe = /** @class */ (function () {
    function VartovaluePipe() {
    }
    VartovaluePipe.prototype.transform = function (value) {
        if (!value) {
            return;
        }
        switch (value) {
            case 'credit':
                return 'Кредит';
            case 'overdraft':
                return 'Овердрафт';
            default:
                return value;
        }
    };
    return VartovaluePipe;
}());



/***/ }),

/***/ "./src/app/application/loans/calculator/services/form.service.ts":
/*!***********************************************************************!*\
  !*** ./src/app/application/loans/calculator/services/form.service.ts ***!
  \***********************************************************************/
/*! exports provided: FormService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormService", function() { return FormService; });
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @env/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");




var FormService = /** @class */ (function () {
    function FormService(_http) {
        this._http = _http;
    }
    FormService.prototype.getRanges = function () {
        return this._http.get(_env_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].endpoint + "/loans/calculator/ranges");
    };
    FormService.prototype.getKeys = function () {
        return this._http.get(_env_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].endpoint + "/loans/calculator/keys");
    };
    FormService.prototype.calculate = function (data) {
        var _headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/x-www-form-urlencoded' });
        var _body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            .append('range', data.range)
            .append('type', data.type)
            .append('collateral', data.collateral)
            .append('segment', data.segment);
        return this._http.post(_env_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].endpoint + "/loans/calculator/calculate", _body, { headers: _headers });
    };
    FormService.ngInjectableDef = _angular_core__WEBPACK_IMPORTED_MODULE_2__["defineInjectable"]({ factory: function FormService_Factory() { return new FormService(_angular_core__WEBPACK_IMPORTED_MODULE_2__["inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); }, token: FormService, providedIn: "root" });
    return FormService;
}());



/***/ }),

/***/ "./src/app/modules/buttons/button/button.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/modules/buttons/button/button.module.ts ***!
  \*********************************************************/
/*! exports provided: ButtonModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonModule", function() { return ButtonModule; });
var ButtonModule = /** @class */ (function () {
    function ButtonModule() {
    }
    return ButtonModule;
}());



/***/ }),

/***/ "./src/app/modules/buttons/button/button/button.component.ngfactory.js":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/buttons/button/button/button.component.ngfactory.js ***!
  \*****************************************************************************/
/*! exports provided: RenderType_ButtonComponent, View_ButtonComponent_0, View_ButtonComponent_Host_0, ButtonComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_ButtonComponent", function() { return RenderType_ButtonComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ButtonComponent_0", function() { return View_ButtonComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ButtonComponent_Host_0", function() { return View_ButtonComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonComponentNgFactory", function() { return ButtonComponentNgFactory; });
/* harmony import */ var _button_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./button.component.scss.shim.ngstyle */ "./src/app/modules/buttons/button/button/button.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _button_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./button.component */ "./src/app/modules/buttons/button/button/button.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 



var styles_ButtonComponent = [_button_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_ButtonComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_ButtonComponent, data: {} });

function View_ButtonComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "div", [["class", "button__container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "button", [], [[8, "className", 0], [8, "disabled", 0], [8, "type", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.ClickEvent.emit($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, ["", ""]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](2, "button__control ", _co.size, " ", _co.stateClass, ""); var currVal_1 = _co.isDisabled; var currVal_2 = _co.type; _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2); var currVal_3 = _co.value; _ck(_v, 2, 0, currVal_3); }); }
function View_ButtonComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "rosa-button", [], null, null, null, View_ButtonComponent_0, RenderType_ButtonComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 638976, null, 0, _button_component__WEBPACK_IMPORTED_MODULE_2__["ButtonComponent"], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var ButtonComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("rosa-button", _button_component__WEBPACK_IMPORTED_MODULE_2__["ButtonComponent"], View_ButtonComponent_Host_0, { tabindex: "tabindex", value: "value", type: "type", isDisabled: "isDisabled", size: "size", stateClass: "stateClass", state: "state" }, { ClickEvent: "ClickEvent" }, []);



/***/ }),

/***/ "./src/app/modules/buttons/button/button/button.component.scss.shim.ngstyle.js":
/*!*************************************************************************************!*\
  !*** ./src/app/modules/buttons/button/button/button.component.scss.shim.ngstyle.js ***!
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
var styles = ["[_nghost-%COMP%] {\n  transition: all .3s ease;\n  line-height: 1em; }\n  [_nghost-%COMP%]:focus {\n    outline: none; }\n  [_nghost-%COMP%]:active {\n    outline: rgba(0, 0, 0, 0) auto 0; }\n  .button__control[_ngcontent-%COMP%] {\n  padding: 0;\n  border: none;\n  font-family: inherit;\n  color: inherit;\n  background-color: transparent;\n  cursor: pointer;\n  font-size: var(--size-typo-m);\n  border: none;\n  border-radius: 2px;\n  min-width: 80px;\n  box-sizing: border-box;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  outline: none; }\n  .button__control[_ngcontent-%COMP%]:active {\n    outline: rgba(0, 0, 0, 0) auto 0; }\n  .size-small[_ngcontent-%COMP%] {\n  padding: 0 8px;\n  height: 24px;\n  line-height: 24px; }\n  .size-default[_ngcontent-%COMP%] {\n  padding: 0 16px;\n  height: 32px;\n  line-height: 32px; }\n  .size-large[_ngcontent-%COMP%] {\n  padding: 0 2px;\n  height: 40px;\n  line-height: 40px; }\n  .state_default[_ngcontent-%COMP%] {\n  border-color: var(--color-primary);\n  background-color: var(--color-primary); }\n  .state_default[_ngcontent-%COMP%]:hover {\n    border-color: var(--color-hover);\n    background-color: var(--color-hover); }\n  .state_neutral[_ngcontent-%COMP%] {\n  background-color: var(--color-border-control-alt);\n  border-color: var(--color-border-control-alt); }\n  .state_neutral[_ngcontent-%COMP%]:hover {\n    border-color: var(--color-typo-tertiary);\n    background-color: var(--color-typo-tertiary); }\n  .state_error[_ngcontent-%COMP%] {\n  background-color: var(--color-error);\n  border-color: var(--color-error); }\n  .state_success[_ngcontent-%COMP%] {\n  background-color: var(--color-success);\n  border-color: var(--color-success); }\n  .state_warning[_ngcontent-%COMP%] {\n  background-color: var(--color-warning);\n  border-color: var(--color-warning); }\n  .state_dark[_ngcontent-%COMP%] {\n  background-color: var(--color-inverse);\n  border-color: var(--color-inverse); }\n  .state_dark[_ngcontent-%COMP%]:hover {\n    border-color: var(--color-inverse);\n    background-color: var(--color-inverse); }\n  .state_default[_ngcontent-%COMP%], .state_neutral[_ngcontent-%COMP%], .state_error[_ngcontent-%COMP%], .state_success[_ngcontent-%COMP%], .state_warning[_ngcontent-%COMP%], .state_dark[_ngcontent-%COMP%] {\n  color: #FFF; }\n  button[type=\"submit\"][_ngcontent-%COMP%] {\n  width: 100% !important;\n  display: block; }"];



/***/ }),

/***/ "./src/app/modules/buttons/button/button/button.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/modules/buttons/button/button/button.component.ts ***!
  \*******************************************************************/
/*! exports provided: ButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonComponent", function() { return ButtonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var ButtonComponent = /** @class */ (function () {
    function ButtonComponent() {
        // ----- Default ------- //
        this.tabindex = -1;
        this.value = 'Отправить';
        this.type = 'button';
        this.isDisabled = false;
        // ----- States ------- //
        this.size = "size-default";
        this.stateClass = "state_default";
        this.state = { text: this.value, class: this.stateClass, disabled: false };
        // ----- Outputs ------- //
        this.ClickEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ButtonComponent.prototype.ngOnInit = function () {
        if (this.state) {
            this.stateController(this.state);
        }
    };
    ButtonComponent.prototype.ngOnChanges = function (changes) {
        if (changes['state']) {
            this.stateController(this.state);
        }
    };
    ButtonComponent.prototype.stateController = function (state) {
        var _this = this;
        if (state === void 0) { state = { text: this.value, class: this.stateClass, disabled: false }; }
        var prevContent = this.value;
        var prevClass = this.stateClass;
        this.value = state.text;
        this.stateClass = state.class;
        this.isDisabled = state.disabled;
        if (!state.timer) {
            return;
        }
        setTimeout(function () {
            _this.value = prevContent;
            _this.stateClass = prevClass;
        }, state.timer);
    };
    return ButtonComponent;
}());



/***/ }),

/***/ "./src/app/modules/forms/card/card.module.ts":
/*!***************************************************!*\
  !*** ./src/app/modules/forms/card/card.module.ts ***!
  \***************************************************/
/*! exports provided: CardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardModule", function() { return CardModule; });
var CardModule = /** @class */ (function () {
    function CardModule() {
    }
    return CardModule;
}());



/***/ }),

/***/ "./src/app/modules/forms/checkbox/checkbox.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/modules/forms/checkbox/checkbox.module.ts ***!
  \***********************************************************/
/*! exports provided: CheckboxModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxModule", function() { return CheckboxModule; });
var CheckboxModule = /** @class */ (function () {
    function CheckboxModule() {
    }
    return CheckboxModule;
}());



/***/ }),

/***/ "./src/app/modules/forms/dropdown/dropdown.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/modules/forms/dropdown/dropdown.module.ts ***!
  \***********************************************************/
/*! exports provided: DropdownModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropdownModule", function() { return DropdownModule; });
var DropdownModule = /** @class */ (function () {
    function DropdownModule() {
    }
    return DropdownModule;
}());



/***/ }),

/***/ "./src/app/modules/forms/dropdown/dropdown/dropdown.component.ngfactory.js":
/*!*********************************************************************************!*\
  !*** ./src/app/modules/forms/dropdown/dropdown/dropdown.component.ngfactory.js ***!
  \*********************************************************************************/
/*! exports provided: RenderType_DropdownComponent, View_DropdownComponent_0, View_DropdownComponent_Host_0, DropdownComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_DropdownComponent", function() { return RenderType_DropdownComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_DropdownComponent_0", function() { return View_DropdownComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_DropdownComponent_Host_0", function() { return View_DropdownComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropdownComponentNgFactory", function() { return DropdownComponentNgFactory; });
/* harmony import */ var _dropdown_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dropdown.component.scss.shim.ngstyle */ "./src/app/modules/forms/dropdown/dropdown/dropdown.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _dropdown_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dropdown.component */ "./src/app/modules/forms/dropdown/dropdown/dropdown.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 




var styles_DropdownComponent = [_dropdown_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_DropdownComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_DropdownComponent, data: {} });

function View_DropdownComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 5, "div", [["class", "dropdown__container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 4, "button", [], [[8, "disabled", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.toggleDropdown($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](3, null, ["", "", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 1, ":svg:svg", [["height", "24px"], ["viewBox", "0 0 24 24"], ["width", "24px"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 0, ":svg:path", [["d", "M11.65625,13.84375 L8.65625,10.84375 C8.55208281,10.7499995 8.5,10.6354173 8.5,10.5 C8.5,10.3645827 8.55208281,10.2500005 8.65625,10.15625 C8.75000047,10.0520828 8.86458266,10 9,10 C9.13541734,10 9.24999953,10.0520828 9.34375,10.15625 L12,12.796875 L14.65625,10.15625 C14.7500005,10.0520828 14.8645827,10 15,10 C15.1354173,10 15.2499995,10.0520828 15.34375,10.15625 C15.4479172,10.2500005 15.5,10.3645827 15.5,10.5 C15.5,10.6354173 15.4479172,10.7499995 15.34375,10.84375 L12.34375,13.84375 C12.3020831,13.8958336 12.2473962,13.9348957 12.1796875,13.9609375 C12.1119788,13.9869793 12.0520836,14 12,14 C11.9479164,14 11.8880212,13.9869793 11.8203125,13.9609375 C11.7526038,13.9348957 11.6979169,13.8958336 11.65625,13.84375 Z"]], null, null, null, null, null))], function (_ck, _v) { var _co = _v.component; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](2, "dropdown__button ", _co.size, " ", _co.state, ""); var currVal_2 = (_co.isOpen && "active"); _ck(_v, 2, 0, currVal_1, currVal_2); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.isDisabled; _ck(_v, 1, 0, currVal_0); var currVal_3 = _co.value; var currVal_4 = _co.suffix; _ck(_v, 3, 0, currVal_3, currVal_4); }); }
function View_DropdownComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "rosa-dropdown", [], null, null, null, View_DropdownComponent_0, RenderType_DropdownComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _dropdown_component__WEBPACK_IMPORTED_MODULE_3__["DropdownComponent"], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var DropdownComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("rosa-dropdown", _dropdown_component__WEBPACK_IMPORTED_MODULE_3__["DropdownComponent"], View_DropdownComponent_Host_0, { value: "value", placeholder: "placeholder", tabindex: "tabindex", size: "size", state: "state", isDisabled: "isDisabled", isOpen: "isOpen", suffix: "suffix" }, { ClickEvent: "ClickEvent" }, []);



/***/ }),

/***/ "./src/app/modules/forms/dropdown/dropdown/dropdown.component.scss.shim.ngstyle.js":
/*!*****************************************************************************************!*\
  !*** ./src/app/modules/forms/dropdown/dropdown/dropdown.component.scss.shim.ngstyle.js ***!
  \*****************************************************************************************/
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
var styles = [".dropdown__container[_ngcontent-%COMP%] {\n  position: relative;\n  cursor: pointer !important; }\n\n.dropdown__button[_ngcontent-%COMP%] {\n  padding: 0;\n  border: none;\n  font-family: inherit;\n  color: inherit;\n  background-color: transparent;\n  cursor: pointer;\n  width: 100%;\n  color: var(--color-typo-primary);\n  font-size: var(--size-typo-m);\n  font-weight: 400;\n  box-shadow: none;\n  border: 1px solid;\n  box-sizing: border-box;\n  border-radius: var(--space-xxxs);\n  border-color: var(--color-border-control);\n  background: var(--color-default);\n  cursor: pointer !important;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  outline: none;\n  transition: all 0.15s ease;\n  text-align: left; }\n\n.dropdown__button[_ngcontent-%COMP%]:hover {\n    background: var(--color-background-200);\n    border-color: var(--color-border-control-alt); }\n\n.dropdown__button[_ngcontent-%COMP%]:focus, .dropdown__button[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:active {\n    outline: none;\n    transition: all 0.15s ease;\n    border-color: var(--color-border-control-alt); }\n\n.dropdown__button[_ngcontent-%COMP%]:disabled {\n    background-color: var(--color-soft);\n    color: var(--color-typo-tertiary); }\n\n.dropdown__button.active[_ngcontent-%COMP%] {\n    transition: border-color 0.15s ease;\n    background: var(--color-background-200);\n    border-color: var(--color-border-control-alt); }\n\n.dropdown__button.active[_ngcontent-%COMP%]:hover {\n      background: var(--color-background-200);\n      border-color: var(--color-border-control-alt); }\n\n.dropdown__button[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n    -webkit-transform: scale(1.3415);\n            transform: scale(1.3415); }\n\n.size-small[_ngcontent-%COMP%] {\n  padding: 0 8px;\n  height: 24px;\n  line-height: 24px; }\n\n.size-default[_ngcontent-%COMP%] {\n  padding-left: 12px;\n  padding-right: 8px;\n  height: 32px;\n  line-height: 30px; }\n\n.size-large[_ngcontent-%COMP%] {\n  padding-left: 12px;\n  padding-right: 8px;\n  height: 40px;\n  line-height: 40px; }\n\n.state_default[_ngcontent-%COMP%] {\n  border-color: var(--color-border-control); }\n\n.state_error[_ngcontent-%COMP%] {\n  border: 1px solid var(--color-error) !important; }\n\n.state_success[_ngcontent-%COMP%] {\n  border: 1px solid var(--color-success) !important; }\n\n.state_dark[_ngcontent-%COMP%] {\n  border: 1px solid var(--color-border-control-alt) !important; }\n\n.state_disabled[_ngcontent-%COMP%] {\n  background-color: var(--color-soft) !important;\n  color: var(--color-typo-tertiary) !important; }"];



/***/ }),

/***/ "./src/app/modules/forms/dropdown/dropdown/dropdown.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/modules/forms/dropdown/dropdown/dropdown.component.ts ***!
  \***********************************************************************/
/*! exports provided: DropdownComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropdownComponent", function() { return DropdownComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var DropdownComponent = /** @class */ (function () {
    function DropdownComponent() {
        // ----- Default ------- //
        this.value = "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435";
        this.placeholder = '';
        this.tabindex = -1;
        // ----- States ------- //
        this.size = "size-default";
        this.state = "state_default";
        this.isDisabled = false;
        this.isOpen = false;
        // ----- Modificator ------- //
        this.suffix = '';
        // ----- Outputs ------- //
        this.ClickEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        // ----- Inner Logic ------- //
        this.active = false;
    }
    DropdownComponent.prototype.ngOnInit = function () {
    };
    DropdownComponent.prototype.toggleDropdown = function (e) {
        this.ClickEvent.emit(true);
    };
    return DropdownComponent;
}());



/***/ }),

/***/ "./src/app/modules/forms/dropdown/list/list.component.ngfactory.js":
/*!*************************************************************************!*\
  !*** ./src/app/modules/forms/dropdown/list/list.component.ngfactory.js ***!
  \*************************************************************************/
/*! exports provided: RenderType_ListComponent, View_ListComponent_0, View_ListComponent_Host_0, ListComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_ListComponent", function() { return RenderType_ListComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ListComponent_0", function() { return View_ListComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ListComponent_Host_0", function() { return View_ListComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponentNgFactory", function() { return ListComponentNgFactory; });
/* harmony import */ var _list_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list.component.scss.shim.ngstyle */ "./src/app/modules/forms/dropdown/list/list.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list.component */ "./src/app/modules/forms/dropdown/list/list.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 




var styles_ListComponent = [_list_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_ListComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_ListComponent, data: {} });

function View_ListComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "button", [["class", "dropdown-list__item"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.setValue(_v.context.$implicit) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, ["", "", ""]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = "dropdown-list__item"; var currVal_1 = ((_v.context.$implicit === _co.selected) && "active"); _ck(_v, 1, 0, currVal_0, currVal_1); }, function (_ck, _v) { var _co = _v.component; var currVal_2 = _v.context.$implicit; var currVal_3 = _co.suffix; _ck(_v, 2, 0, currVal_2, currVal_3); }); }
function View_ListComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 5, "div", [["class", "dropdown-list__container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 4, "div", [["class", "dropdown-list__pane"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 2, "div", [["class", "dropdown-list__inner"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ListComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = "dropdown-list__pane"; var currVal_1 = (_co.isOpen && "open"); _ck(_v, 2, 0, currVal_0, currVal_1); var currVal_2 = _co.values; _ck(_v, 5, 0, currVal_2); }, null); }
function View_ListComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "rosa-list", [], null, null, null, View_ListComponent_0, RenderType_ListComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _list_component__WEBPACK_IMPORTED_MODULE_3__["ListComponent"], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var ListComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("rosa-list", _list_component__WEBPACK_IMPORTED_MODULE_3__["ListComponent"], View_ListComponent_Host_0, { values: "values", suffix: "suffix", selected: "selected", isOpen: "isOpen" }, { sendValue: "sendValue" }, []);



/***/ }),

/***/ "./src/app/modules/forms/dropdown/list/list.component.scss.shim.ngstyle.js":
/*!*********************************************************************************!*\
  !*** ./src/app/modules/forms/dropdown/list/list.component.scss.shim.ngstyle.js ***!
  \*********************************************************************************/
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
var styles = [".scroll-bar {\n  background-color: rgba(0, 0, 0, 0.4) !important;\n  border-radius: 4px; }\n\n  .scroll-thumbs {\n  background-color: rgba(161, 27, 27, 0.4) !important; }\n\n  .scroll-thumbs:hover,   .scroll-thumbs:active {\n    background-color: rgba(161, 27, 27, 0.7) !important; }\n\n.dropdown-list__container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n  position: relative;\n  cursor: pointer; }\n\n.dropdown-list__pane[_ngcontent-%COMP%] {\n  background-color: var(--color-default);\n  padding: 8px 0;\n  width: 100%;\n  box-sizing: border-box;\n  border-color: #d9d8d8;\n  border-width: 0 1px 1px 1px;\n  border-style: solid;\n  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px;\n  border-radius: 2px;\n  max-height: 192px;\n  overflow: hidden;\n  position: absolute;\n  top: 3px;\n  left: 0;\n  visibility: hidden;\n  z-index: -1;\n  transition: .15s ease; }\n\n.dropdown-list__pane.open[_ngcontent-%COMP%] {\n    visibility: visible !important;\n    z-index: 10 !important;\n    transition: .15s ease; }\n\n.dropdown-list__inner[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  max-height: 192px;\n  overflow-x: hidden; }\n\n.dropdown-list__item[_ngcontent-%COMP%] {\n  padding: 0;\n  border: none;\n  font-family: inherit;\n  color: inherit;\n  background-color: transparent;\n  cursor: pointer;\n  text-align: left;\n  box-sizing: border-box;\n  display: inline-block;\n  width: 100%;\n  height: 32px;\n  padding: 0 20px;\n  color: var(--color-typo-primary);\n  font-size: var(--size-typo-m);\n  outline: none;\n  cursor: pointer;\n  max-width: 100%;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis; }\n\n.dropdown-list__item[_ngcontent-%COMP%]:hover, .dropdown-list__item[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:active, .dropdown-list__item[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\n    outline: none;\n    background-color: var(--color-background-200); }\n\n.dropdown-list__item[_ngcontent-%COMP%]:disabled {\n    opacity: .5;\n    cursor: default !important; }\n\n.dropdown-list__item.active[_ngcontent-%COMP%] {\n    transition: border-color 0.15s ease;\n    border-color: var(--color-hover); }"];



/***/ }),

/***/ "./src/app/modules/forms/dropdown/list/list.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/modules/forms/dropdown/list/list.component.ts ***!
  \***************************************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var ListComponent = /** @class */ (function () {
    function ListComponent() {
        // ----- Default ------- //
        this.values = [];
        this.suffix = '';
        this.isOpen = false;
        // -----Outputs ------- //
        this.sendValue = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ListComponent.prototype.ngOnInit = function () { };
    ListComponent.prototype.setValue = function (selected) {
        this.sendValue.emit(selected);
    };
    return ListComponent;
}());



/***/ }),

/***/ "./src/app/modules/forms/form-layout/form-group/form-group.component.ngfactory.js":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/forms/form-layout/form-group/form-group.component.ngfactory.js ***!
  \****************************************************************************************/
/*! exports provided: RenderType_FormGroupComponent, View_FormGroupComponent_0, View_FormGroupComponent_Host_0, FormGroupComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_FormGroupComponent", function() { return RenderType_FormGroupComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_FormGroupComponent_0", function() { return View_FormGroupComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_FormGroupComponent_Host_0", function() { return View_FormGroupComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormGroupComponentNgFactory", function() { return FormGroupComponentNgFactory; });
/* harmony import */ var _form_group_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form-group.component.scss.shim.ngstyle */ "./src/app/modules/forms/form-layout/form-group/form-group.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _form_group_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form-group.component */ "./src/app/modules/forms/form-layout/form-group/form-group.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 



var styles_FormGroupComponent = [_form_group_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_FormGroupComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_FormGroupComponent, data: {} });

function View_FormGroupComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 6, "div", [], [[8, "className", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "div", [["class", "form-group__label"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵncd"](null, 0), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "div", [], [[8, "className", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵncd"](null, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 1, "div", [["class", "form-group__hint"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵncd"](null, 2)], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "form-group ", _co.size, ""); _ck(_v, 0, 0, currVal_0); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "form-group__control ", _co.layout, ""); _ck(_v, 3, 0, currVal_1); }); }
function View_FormGroupComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "rosa-form-group", [], null, null, null, View_FormGroupComponent_0, RenderType_FormGroupComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _form_group_component__WEBPACK_IMPORTED_MODULE_2__["FormGroupComponent"], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var FormGroupComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("rosa-form-group", _form_group_component__WEBPACK_IMPORTED_MODULE_2__["FormGroupComponent"], View_FormGroupComponent_Host_0, { size: "size", layout: "layout" }, {}, ["[form-group=label]", "[form-group=control]", "[form-group=hint]"]);



/***/ }),

/***/ "./src/app/modules/forms/form-layout/form-group/form-group.component.scss.shim.ngstyle.js":
/*!************************************************************************************************!*\
  !*** ./src/app/modules/forms/form-layout/form-group/form-group.component.scss.shim.ngstyle.js ***!
  \************************************************************************************************/
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
var styles = [".form-group[_ngcontent-%COMP%] {\n  width: 100%;\n  position: relative; }\n\n.size-default[_ngcontent-%COMP%] {\n  margin-bottom: 20px; }\n\n.size-submit[_ngcontent-%COMP%] {\n  margin-top: 12px;\n  margin-bottom: 24px; }\n\n.size-submit[_ngcontent-%COMP%]   .form-group__label[_ngcontent-%COMP%] {\n    display: none; }\n\n.form-group__label[_ngcontent-%COMP%] {\n  margin-bottom: 8px; }\n\n.form-group__control[_ngcontent-%COMP%] {\n  position: relative; }\n\n.form-group__hint[_ngcontent-%COMP%] {\n  margin-top: 8px; }\n\n.form-group_group[_ngcontent-%COMP%] {\n  display: flex; }\n\n.form-group_group[_ngcontent-%COMP%]   rosa-radio[_ngcontent-%COMP%] {\n    padding-right: 16px; }"];



/***/ }),

/***/ "./src/app/modules/forms/form-layout/form-group/form-group.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/modules/forms/form-layout/form-group/form-group.component.ts ***!
  \******************************************************************************/
/*! exports provided: FormGroupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormGroupComponent", function() { return FormGroupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var FormGroupComponent = /** @class */ (function () {
    function FormGroupComponent() {
        // ----- Default ------- //
        this.size = "size-default";
        this.layout = "form-group_single";
    }
    FormGroupComponent.prototype.ngOnInit = function () { };
    return FormGroupComponent;
}());



/***/ }),

/***/ "./src/app/modules/forms/form-layout/form-layout.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/modules/forms/form-layout/form-layout.module.ts ***!
  \*****************************************************************/
/*! exports provided: FormLayoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormLayoutModule", function() { return FormLayoutModule; });
var FormLayoutModule = /** @class */ (function () {
    function FormLayoutModule() {
    }
    return FormLayoutModule;
}());



/***/ }),

/***/ "./src/app/modules/forms/form-shared/form-shared.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/modules/forms/form-shared/form-shared.module.ts ***!
  \*****************************************************************/
/*! exports provided: FormSharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormSharedModule", function() { return FormSharedModule; });
var FormSharedModule = /** @class */ (function () {
    function FormSharedModule() {
    }
    return FormSharedModule;
}());



/***/ }),

/***/ "./src/app/modules/forms/form.module.ts":
/*!**********************************************!*\
  !*** ./src/app/modules/forms/form.module.ts ***!
  \**********************************************/
/*! exports provided: FormModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormModule", function() { return FormModule; });
var FormModule = /** @class */ (function () {
    function FormModule() {
    }
    return FormModule;
}());



/***/ }),

/***/ "./src/app/modules/forms/hint/hint.module.ts":
/*!***************************************************!*\
  !*** ./src/app/modules/forms/hint/hint.module.ts ***!
  \***************************************************/
/*! exports provided: HintModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HintModule", function() { return HintModule; });
var HintModule = /** @class */ (function () {
    function HintModule() {
    }
    return HintModule;
}());



/***/ }),

/***/ "./src/app/modules/forms/hint/hint/hint.component.ngfactory.js":
/*!*********************************************************************!*\
  !*** ./src/app/modules/forms/hint/hint/hint.component.ngfactory.js ***!
  \*********************************************************************/
/*! exports provided: RenderType_HintComponent, View_HintComponent_0, View_HintComponent_Host_0, HintComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_HintComponent", function() { return RenderType_HintComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_HintComponent_0", function() { return View_HintComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_HintComponent_Host_0", function() { return View_HintComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HintComponentNgFactory", function() { return HintComponentNgFactory; });
/* harmony import */ var _hint_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hint.component.scss.shim.ngstyle */ "./src/app/modules/forms/hint/hint/hint.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _hint_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hint.component */ "./src/app/modules/forms/hint/hint/hint.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 



var styles_HintComponent = [_hint_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_HintComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_HintComponent, data: {} });

function View_HintComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "div", [], [[8, "className", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵncd"](null, 0)], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "hint ", _co.state, ""); _ck(_v, 0, 0, currVal_0); }); }
function View_HintComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "rosa-hint", [], null, null, null, View_HintComponent_0, RenderType_HintComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _hint_component__WEBPACK_IMPORTED_MODULE_2__["HintComponent"], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var HintComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("rosa-hint", _hint_component__WEBPACK_IMPORTED_MODULE_2__["HintComponent"], View_HintComponent_Host_0, { state: "state" }, {}, ["*"]);



/***/ }),

/***/ "./src/app/modules/forms/hint/hint/hint.component.scss.shim.ngstyle.js":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/forms/hint/hint/hint.component.scss.shim.ngstyle.js ***!
  \*****************************************************************************/
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
var styles = [".hint[_ngcontent-%COMP%] {\n  letter-spacing: 0;\n  font-size: var(--size-typo-xs);\n  line-height: var(--line-height-typo-xs);\n  font-weight: 400;\n  display: inline-block;\n  width: 100%; }\n\n.state_default[_ngcontent-%COMP%] {\n  color: var(--color-typo-tertiary); }\n\n.state_error[_ngcontent-%COMP%] {\n  color: var(--color-alert); }\n\n.state_success[_ngcontent-%COMP%] {\n  color: var(--color-success); }\n\n.state_warning[_ngcontent-%COMP%] {\n  color: var(--color-warning); }\n\n.state_dark[_ngcontent-%COMP%] {\n  border: 1px solid var(--color-typo-secondary) !important; }"];



/***/ }),

/***/ "./src/app/modules/forms/hint/hint/hint.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/modules/forms/hint/hint/hint.component.ts ***!
  \***********************************************************/
/*! exports provided: HintComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HintComponent", function() { return HintComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var HintComponent = /** @class */ (function () {
    function HintComponent() {
        // ----- Default ------- //
        this.state = "state_default";
    }
    HintComponent.prototype.ngOnInit = function () {
    };
    return HintComponent;
}());



/***/ }),

/***/ "./src/app/modules/forms/input/input.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/modules/forms/input/input.module.ts ***!
  \*****************************************************/
/*! exports provided: InputModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputModule", function() { return InputModule; });
var InputModule = /** @class */ (function () {
    function InputModule() {
    }
    return InputModule;
}());



/***/ }),

/***/ "./src/app/modules/forms/input/input/input.component.ngfactory.js":
/*!************************************************************************!*\
  !*** ./src/app/modules/forms/input/input/input.component.ngfactory.js ***!
  \************************************************************************/
/*! exports provided: RenderType_InputComponent, View_InputComponent_0, View_InputComponent_Host_0, InputComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_InputComponent", function() { return RenderType_InputComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_InputComponent_0", function() { return View_InputComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_InputComponent_Host_0", function() { return View_InputComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputComponentNgFactory", function() { return InputComponentNgFactory; });
/* harmony import */ var _input_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./input.component.scss.shim.ngstyle */ "./src/app/modules/forms/input/input/input.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angular2_text_mask__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-text-mask */ "./node_modules/angular2-text-mask/dist/angular2TextMask.js");
/* harmony import */ var angular2_text_mask__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_text_mask__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _input_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./input.component */ "./src/app/modules/forms/input/input/input.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 





var styles_InputComponent = [_input_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_InputComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_InputComponent, data: {} });

function View_InputComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 8, "div", [["class", "input__container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 7, "input", [["type", "text"]], [[8, "className", 0], [8, "id", 0], [1, "placeholder", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("input" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } if (("input" === en)) {
        var pd_4 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3)._handleInput($event.target.value) !== false);
        ad = (pd_4 && ad);
    } if (("blur" === en)) {
        var pd_5 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).onTouched() !== false);
        ad = (pd_5 && ad);
    } if (("compositionstart" === en)) {
        var pd_6 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3)._compositionStart() !== false);
        ad = (pd_6 && ad);
    } if (("compositionend" === en)) {
        var pd_7 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3)._compositionEnd($event.target.value) !== false);
        ad = (pd_7 && ad);
    } if (("input" === en)) {
        var pd_8 = (_co.onChange($event) !== false);
        ad = (pd_8 && ad);
    } if (("blur" === en)) {
        var pd_9 = (_co.blurLost($event) !== false);
        ad = (pd_9 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 540672, null, 0, angular2_text_mask__WEBPACK_IMPORTED_MODULE_3__["MaskedInputDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["COMPOSITION_BUFFER_MODE"]]], { textMaskConfig: [0, "textMaskConfig"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](4, { mask: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"], function (p0_0, p1_0) { return [p0_0, p1_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], angular2_text_mask__WEBPACK_IMPORTED_MODULE_3__["MaskedInputDirective"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 540672, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlDirective"], [[8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_k"]]], { form: [0, "form"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlDirective"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"]]], null, null)], function (_ck, _v) { var _co = _v.component; var currVal_10 = _ck(_v, 4, 0, _co.allowedMask); _ck(_v, 3, 0, currVal_10); var currVal_11 = _co.controlOptions; _ck(_v, 6, 0, currVal_11); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](2, "input__field ", _co.size, " ", _co.state, ""); var currVal_1 = _co.controlName; var currVal_2 = _co.placeholder; var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).ngClassUntouched; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).ngClassTouched; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).ngClassPristine; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).ngClassDirty; var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).ngClassValid; var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).ngClassInvalid; var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).ngClassPending; _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9); }); }
function View_InputComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "rosa-input", [], null, [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).onContainerClick($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, View_InputComponent_0, RenderType_InputComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](5120, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_input_component__WEBPACK_IMPORTED_MODULE_4__["InputComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 114688, null, 0, _input_component__WEBPACK_IMPORTED_MODULE_4__["InputComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null)], function (_ck, _v) { _ck(_v, 2, 0); }, null); }
var InputComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("rosa-input", _input_component__WEBPACK_IMPORTED_MODULE_4__["InputComponent"], View_InputComponent_Host_0, { value: "value", placeholder: "placeholder", tabindex: "tabindex", controlOptions: "controlOptions", controlName: "controlName", required: "required", size: "size", state: "state", mask: "mask" }, { blurEvent: "blurEvent", focusEvent: "focusEvent" }, []);



/***/ }),

/***/ "./src/app/modules/forms/input/input/input.component.scss.shim.ngstyle.js":
/*!********************************************************************************!*\
  !*** ./src/app/modules/forms/input/input/input.component.scss.shim.ngstyle.js ***!
  \********************************************************************************/
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
var styles = [".input__container[_ngcontent-%COMP%] {\n  position: relative; }\n\n.input__field[_ngcontent-%COMP%] {\n  width: 100%;\n  color: var(--color-typo-primary);\n  font-size: var(--size-typo-m);\n  font-weight: 400;\n  box-shadow: none;\n  border: 1px solid;\n  box-sizing: border-box;\n  border-radius: var(--space-xxxs);\n  border-color: var(--color-border-control);\n  background: var(--color-default);\n  outline: none;\n  transition: all 0.15s ease; }\n\n.input__field[_ngcontent-%COMP%]:focus, .input__field[_ngcontent-%COMP%]:active {\n    outline: none;\n    transition: all 0.15s ease;\n    border-color: var(--color-border-control-alt);\n    box-shadow: 0 0 0 2px var(--color-border-control-alt); }\n\n.input__field[_ngcontent-%COMP%]:disabled {\n    background-color: var(--color-soft);\n    color: var(--color-typo-tertiary); }\n\n.size-small[_ngcontent-%COMP%] {\n  padding: 0 4px;\n  height: 24px;\n  line-height: 24px; }\n\n.size-default[_ngcontent-%COMP%] {\n  padding: 0 8px;\n  height: 32px;\n  line-height: 32px; }\n\n.size-large[_ngcontent-%COMP%] {\n  padding: 0 12px;\n  height: 40px;\n  line-height: 40px; }\n\n.state_default[_ngcontent-%COMP%] {\n  border-color: var(--color-border-control); }\n\n.state_error[_ngcontent-%COMP%] {\n  border: 1px solid var(--color-error) !important; }\n\n.state_success[_ngcontent-%COMP%] {\n  border: 1px solid var(--color-success) !important; }\n\n.state_dark[_ngcontent-%COMP%] {\n  border: 1px solid var(--color-border-control-alt) !important; }\n\n.state_disabled[_ngcontent-%COMP%] {\n  background-color: var(--color-soft) !important;\n  color: var(--color-typo-tertiary) !important; }"];



/***/ }),

/***/ "./src/app/modules/forms/input/input/input.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/modules/forms/input/input/input.component.ts ***!
  \**************************************************************/
/*! exports provided: InputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputComponent", function() { return InputComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



var InputComponent = /** @class */ (function () {
    function InputComponent(_elRef) {
        this._elRef = _elRef;
        this.placeholder = '';
        this.tabindex = -1;
        this.required = false;
        // ----- States ------- //
        this.size = "size-default";
        this.state = "state_default";
        this.allowedMask = false;
        this.maskPhone = ['(', /[1-9]/, /\d/, /\d/, ')', '-', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
        this.maskDigits = [/[1-9]/];
        // ----- Outputs ------- //
        this.blurEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.focusEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.propagateChange = function () { };
    }
    InputComponent.prototype.onContainerClick = function (event) {
        if (event.target.tagName.toLowerCase() === 'input') {
            this.focusEvent.emit(true);
        }
    };
    InputComponent.prototype.ngOnInit = function () {
    };
    InputComponent.prototype.blurLost = function (e) {
        this.blurEvent.emit(true);
    };
    InputComponent.prototype.writeValue = function (val) {
        if (val) {
            this._value = val;
        }
    };
    InputComponent.prototype.registerOnChange = function (val) {
        this.propagateChange = val;
        if (val) {
            this._value = val;
        }
    };
    InputComponent.prototype.onChange = function (event) {
        return this.propagateChange(event.target.value);
    };
    InputComponent.prototype.registerOnTouched = function (fn) { };
    InputComponent.prototype.setMask = function (modify) {
        switch (modify) {
            case 'phone':
                // this.showPhonePrefix = true;
                this.allowedMask = this.maskPhone;
                break;
            case 'number': // if (x === 'value2')
                this.allowedMask = this.maskDigits;
                break;
            case 'date':
                this.allowedMask = [/\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
                break;
            default:
                this.allowedMask = false;
        }
    };
    return InputComponent;
}());



/***/ }),

/***/ "./src/app/modules/forms/label/label.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/modules/forms/label/label.module.ts ***!
  \*****************************************************/
/*! exports provided: LabelModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LabelModule", function() { return LabelModule; });
var LabelModule = /** @class */ (function () {
    function LabelModule() {
    }
    return LabelModule;
}());



/***/ }),

/***/ "./src/app/modules/forms/label/label/label.component.ngfactory.js":
/*!************************************************************************!*\
  !*** ./src/app/modules/forms/label/label/label.component.ngfactory.js ***!
  \************************************************************************/
/*! exports provided: RenderType_LabelComponent, View_LabelComponent_0, View_LabelComponent_Host_0, LabelComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_LabelComponent", function() { return RenderType_LabelComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_LabelComponent_0", function() { return View_LabelComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_LabelComponent_Host_0", function() { return View_LabelComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LabelComponentNgFactory", function() { return LabelComponentNgFactory; });
/* harmony import */ var _label_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./label.component.scss.shim.ngstyle */ "./src/app/modules/forms/label/label/label.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _label_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./label.component */ "./src/app/modules/forms/label/label/label.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 




var styles_LabelComponent = [_label_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_LabelComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_LabelComponent, data: {} });

function View_LabelComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "label", [], [[8, "htmlFor", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { ngClass: [0, "ngClass"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](2, { "disabled": 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵncd"](null, 0)], function (_ck, _v) { var _co = _v.component; var currVal_1 = _ck(_v, 2, 0, _co.disabled); _ck(_v, 1, 0, currVal_1); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", _co.linked, ""); _ck(_v, 0, 0, currVal_0); }); }
function View_LabelComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "rosa-label", [], null, null, null, View_LabelComponent_0, RenderType_LabelComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _label_component__WEBPACK_IMPORTED_MODULE_3__["LabelComponent"], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var LabelComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("rosa-label", _label_component__WEBPACK_IMPORTED_MODULE_3__["LabelComponent"], View_LabelComponent_Host_0, { disabled: "disabled", linked: "linked" }, {}, ["*"]);



/***/ }),

/***/ "./src/app/modules/forms/label/label/label.component.scss.shim.ngstyle.js":
/*!********************************************************************************!*\
  !*** ./src/app/modules/forms/label/label/label.component.scss.shim.ngstyle.js ***!
  \********************************************************************************/
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
var styles = ["label[_ngcontent-%COMP%] {\n  letter-spacing: 0;\n  color: var(--color-typo-primary);\n  font-size: var(--size-typo-m);\n  line-height: var(--line-height-typo-s);\n  font-weight: 500;\n  display: inline-block;\n  width: 100%; }\n  label.disabled[_ngcontent-%COMP%] {\n    opacity: .5; }"];



/***/ }),

/***/ "./src/app/modules/forms/label/label/label.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/modules/forms/label/label/label.component.ts ***!
  \**************************************************************/
/*! exports provided: LabelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LabelComponent", function() { return LabelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var LabelComponent = /** @class */ (function () {
    function LabelComponent() {
        // ----- Default ------- //
        this.disabled = false;
        // ----- TODO: link with form element through ID ------- //
        this.linked = "";
    }
    LabelComponent.prototype.ngOnInit = function () { };
    return LabelComponent;
}());



/***/ }),

/***/ "./src/app/modules/forms/radio/radio.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/modules/forms/radio/radio.module.ts ***!
  \*****************************************************/
/*! exports provided: RadioModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RadioModule", function() { return RadioModule; });
var RadioModule = /** @class */ (function () {
    function RadioModule() {
    }
    return RadioModule;
}());



/***/ }),

/***/ "./src/app/modules/forms/radio/radio/radio.component.ngfactory.js":
/*!************************************************************************!*\
  !*** ./src/app/modules/forms/radio/radio/radio.component.ngfactory.js ***!
  \************************************************************************/
/*! exports provided: RenderType_RadioComponent, View_RadioComponent_0, View_RadioComponent_Host_0, RadioComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_RadioComponent", function() { return RenderType_RadioComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_RadioComponent_0", function() { return View_RadioComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_RadioComponent_Host_0", function() { return View_RadioComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RadioComponentNgFactory", function() { return RadioComponentNgFactory; });
/* harmony import */ var _radio_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./radio.component.scss.shim.ngstyle */ "./src/app/modules/forms/radio/radio/radio.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _radio_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./radio.component */ "./src/app/modules/forms/radio/radio/radio.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 



var styles_RadioComponent = [_radio_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_RadioComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_RadioComponent, data: {} });

function View_RadioComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](402653184, 1, { radioControl: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 3, "div", [["class", "radio__container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, [[1, 0], ["radio", 1]], null, 0, "input", [["class", "radio__radio"], ["type", "radio"]], [[8, "value", 0], [8, "id", 0], [8, "name", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.emitValue(_co.value) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "label", [], [[8, "htmlFor", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵncd"](null, 0)], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.value; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", _co.index, ""); var currVal_2 = _co.name; _ck(_v, 2, 0, currVal_0, currVal_1, currVal_2); var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", _co.index, ""); _ck(_v, 3, 0, currVal_3); }); }
function View_RadioComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "rosa-radio", [], null, null, null, View_RadioComponent_0, RenderType_RadioComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _radio_component__WEBPACK_IMPORTED_MODULE_2__["RadioComponent"], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var RadioComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("rosa-radio", _radio_component__WEBPACK_IMPORTED_MODULE_2__["RadioComponent"], View_RadioComponent_Host_0, { value: "value", name: "name", selected: "selected" }, { ClickEvent: "ClickEvent" }, ["*"]);



/***/ }),

/***/ "./src/app/modules/forms/radio/radio/radio.component.scss.shim.ngstyle.js":
/*!********************************************************************************!*\
  !*** ./src/app/modules/forms/radio/radio/radio.component.scss.shim.ngstyle.js ***!
  \********************************************************************************/
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
var styles = [".radio__container[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n  height: 24px;\n  margin-top: 4px;\n  margin-right: 16px; }\n\n.radio__radio[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  background-color: var(--color-default);\n  border: 2px solid var(--color-border-control-alt);\n  box-sizing: border-box;\n  border-radius: 50%;\n  margin-right: 8px;\n  -moz-appearance: none;\n       appearance: none;\n  -webkit-appearance: none;\n  outline: none !important;\n  transition: border .15s ease; }\n\n.radio__radio[_ngcontent-%COMP%]:checked {\n    border: 4px solid var(--color-primary);\n    transition: border .15s ease; }\n\nlabel[_ngcontent-%COMP%] {\n  letter-spacing: 0;\n  color: var(--color-typo-primary);\n  font-size: var(--size-typo-m);\n  line-height: var(--line-height-typo-m); }\n\nlabel.disabled[_ngcontent-%COMP%] {\n    opacity: .5; }"];



/***/ }),

/***/ "./src/app/modules/forms/radio/radio/radio.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/modules/forms/radio/radio/radio.component.ts ***!
  \**************************************************************/
/*! exports provided: RadioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RadioComponent", function() { return RadioComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var RadioComponent = /** @class */ (function () {
    function RadioComponent() {
        this.name = '';
        // ----- State ------- //
        this.selected = false;
        // ----- Output ------- //
        this.ClickEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        // ----- Initial ------- //
        this.index = "radio_" + this.randomInteger(10, 1000);
    }
    RadioComponent.prototype.ngOnInit = function () {
        var isChecked = this.selected && this.setChecked(this.radioControl.nativeElement);
    };
    RadioComponent.prototype.setChecked = function (radio) {
        radio.checked = true;
        this.emitValue(this.value);
    };
    RadioComponent.prototype.emitValue = function (value) {
        this.ClickEvent.emit(value);
    };
    RadioComponent.prototype.randomInteger = function (min, max) {
        var rand = min - 0.5 + Math.random() * (max - min + 1);
        rand = Math.round(rand);
        return rand;
    };
    return RadioComponent;
}());



/***/ }),

/***/ "./src/app/modules/forms/select/select.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/modules/forms/select/select.module.ts ***!
  \*******************************************************/
/*! exports provided: SelectModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectModule", function() { return SelectModule; });
var SelectModule = /** @class */ (function () {
    function SelectModule() {
    }
    return SelectModule;
}());



/***/ }),

/***/ "./src/app/modules/forms/suggest/suggest.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/modules/forms/suggest/suggest.module.ts ***!
  \*********************************************************/
/*! exports provided: SuggestModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuggestModule", function() { return SuggestModule; });
var SuggestModule = /** @class */ (function () {
    function SuggestModule() {
    }
    return SuggestModule;
}());



/***/ }),

/***/ "./src/app/modules/forms/textarea/textarea.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/modules/forms/textarea/textarea.module.ts ***!
  \***********************************************************/
/*! exports provided: TextareaModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextareaModule", function() { return TextareaModule; });
var TextareaModule = /** @class */ (function () {
    function TextareaModule() {
    }
    return TextareaModule;
}());



/***/ })

}]);