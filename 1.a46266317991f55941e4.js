(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/@angular/cdk/esm5/bidi.es5.js":
/*!****************************************************!*\
  !*** ./node_modules/@angular/cdk/esm5/bidi.es5.js ***!
  \****************************************************/
/*! exports provided: Directionality, DIR_DOCUMENT, Dir, BidiModule, ɵa */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Directionality", function() { return Directionality; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DIR_DOCUMENT", function() { return DIR_DOCUMENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dir", function() { return Dir; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BidiModule", function() { return BidiModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return DIR_DOCUMENT_FACTORY; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */



/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Injection token used to inject the document into Directionality.
 * This is used so that the value can be faked in tests.
 *
 * We can't use the real document in tests because changing the real `dir` causes geometry-based
 * tests in Safari to fail.
 *
 * We also can't re-provide the DOCUMENT token from platform-brower because the unit tests
 * themselves use things like `querySelector` in test code.
 *
 * This token is defined in a separate file from Directionality as a workaround for
 * https://github.com/angular/angular/issues/22559
 *
 * \@docs-private
 * @type {?}
 */
var DIR_DOCUMENT = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('cdk-dir-doc', {
    providedIn: 'root',
    factory: DIR_DOCUMENT_FACTORY,
});
/**
 * \@docs-private
 * @return {?}
 */
function DIR_DOCUMENT_FACTORY() {
    return Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]);
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * The directionality (LTR / RTL) context for the application (or a subtree of it).
 * Exposes the current direction and a stream of direction changes.
 */
var Directionality = /** @class */ (function () {
    function Directionality(_document) {
        /**
         * The current 'ltr' or 'rtl' value.
         */
        this.value = 'ltr';
        /**
         * Stream that emits whenever the 'ltr' / 'rtl' state changes.
         */
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        if (_document) {
            // TODO: handle 'auto' value -
            // We still need to account for dir="auto".
            // It looks like HTMLElemenet.dir is also "auto" when that's set to the attribute,
            // but getComputedStyle return either "ltr" or "rtl". avoiding getComputedStyle for now
            /** @type {?} */
            var bodyDir = _document.body ? _document.body.dir : null;
            /** @type {?} */
            var htmlDir = _document.documentElement ? _document.documentElement.dir : null;
            /** @type {?} */
            var value = bodyDir || htmlDir;
            this.value = (value === 'ltr' || value === 'rtl') ? value : 'ltr';
        }
    }
    /**
     * @return {?}
     */
    Directionality.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.change.complete();
    };
    Directionality.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"], args: [{ providedIn: 'root' },] },
    ];
    /** @nocollapse */
    Directionality.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [DIR_DOCUMENT,] }] }
    ]; };
    /** @nocollapse */ Directionality.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["defineInjectable"])({ factory: function Directionality_Factory() { return new Directionality(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["inject"])(DIR_DOCUMENT, 8)); }, token: Directionality, providedIn: "root" });
    return Directionality;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Directive to listen for changes of direction of part of the DOM.
 *
 * Provides itself as Directionality such that descendant directives only need to ever inject
 * Directionality to get the closest direction.
 */
var Dir = /** @class */ (function () {
    function Dir() {
        /**
         * Normalized direction that accounts for invalid/unsupported values.
         */
        this._dir = 'ltr';
        /**
         * Whether the `value` has been set to its initial value.
         */
        this._isInitialized = false;
        /**
         * Event emitted when the direction changes.
         */
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    Object.defineProperty(Dir.prototype, "dir", {
        /** @docs-private */
        get: /**
         * \@docs-private
         * @return {?}
         */
        function () { return this._dir; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            /** @type {?} */
            var old = this._dir;
            this._rawDir = value;
            this._dir = (value === 'ltr' || value === 'rtl') ? value : 'ltr';
            if (old !== this._dir && this._isInitialized) {
                this.change.emit(this._dir);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Dir.prototype, "value", {
        /** Current layout direction of the element. */
        get: /**
         * Current layout direction of the element.
         * @return {?}
         */
        function () { return this.dir; },
        enumerable: true,
        configurable: true
    });
    /** Initialize once default value has been set. */
    /**
     * Initialize once default value has been set.
     * @return {?}
     */
    Dir.prototype.ngAfterContentInit = /**
     * Initialize once default value has been set.
     * @return {?}
     */
    function () {
        this._isInitialized = true;
    };
    /**
     * @return {?}
     */
    Dir.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.change.complete();
    };
    Dir.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{
                    selector: '[dir]',
                    providers: [{ provide: Directionality, useExisting: Dir }],
                    host: { '[attr.dir]': '_rawDir' },
                    exportAs: 'dir',
                },] },
    ];
    Dir.propDecorators = {
        change: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"], args: ['dirChange',] }],
        dir: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
    };
    return Dir;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var BidiModule = /** @class */ (function () {
    function BidiModule() {
    }
    BidiModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                    exports: [Dir],
                    declarations: [Dir],
                },] },
    ];
    return BidiModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


//# sourceMappingURL=bidi.es5.js.map


/***/ }),

/***/ "./node_modules/@angular/cdk/esm5/coercion.es5.js":
/*!********************************************************!*\
  !*** ./node_modules/@angular/cdk/esm5/coercion.es5.js ***!
  \********************************************************/
/*! exports provided: coerceBooleanProperty, coerceNumberProperty, _isNumberValue, coerceArray, coerceCssPixelValue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "coerceBooleanProperty", function() { return coerceBooleanProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "coerceNumberProperty", function() { return coerceNumberProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_isNumberValue", function() { return _isNumberValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "coerceArray", function() { return coerceArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "coerceCssPixelValue", function() { return coerceCssPixelValue; });
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * Coerces a data-bound value (typically a string) to a boolean.
 * @param {?} value
 * @return {?}
 */
function coerceBooleanProperty(value) {
    return value != null && "" + value !== 'false';
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @param {?} value
 * @param {?=} fallbackValue
 * @return {?}
 */
function coerceNumberProperty(value, fallbackValue) {
    if (fallbackValue === void 0) { fallbackValue = 0; }
    return _isNumberValue(value) ? Number(value) : fallbackValue;
}
/**
 * Whether the provided value is considered a number.
 * \@docs-private
 * @param {?} value
 * @return {?}
 */
function _isNumberValue(value) {
    // parseFloat(value) handles most of the cases we're interested in (it treats null, empty string,
    // and other non-number values as NaN, where Number just uses 0) but it considers the string
    // '123hello' to be a valid number. Therefore we also check if Number(value) is NaN.
    return !isNaN(parseFloat((/** @type {?} */ (value)))) && !isNaN(Number(value));
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * Wraps the provided value in an array, unless the provided value is an array.
 * @template T
 * @param {?} value
 * @return {?}
 */
function coerceArray(value) {
    return Array.isArray(value) ? value : [value];
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * Coerces a value to a CSS pixel value.
 * @param {?} value
 * @return {?}
 */
function coerceCssPixelValue(value) {
    if (value == null) {
        return '';
    }
    return typeof value === 'string' ? value : value + "px";
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


//# sourceMappingURL=coercion.es5.js.map


/***/ }),

/***/ "./node_modules/@angular/cdk/esm5/collections.es5.js":
/*!***********************************************************!*\
  !*** ./node_modules/@angular/cdk/esm5/collections.es5.js ***!
  \***********************************************************/
/*! exports provided: UniqueSelectionDispatcher, ArrayDataSource, DataSource, getMultipleValuesInSingleSelectionError, SelectionModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UniqueSelectionDispatcher", function() { return UniqueSelectionDispatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArrayDataSource", function() { return ArrayDataSource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataSource", function() { return DataSource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMultipleValuesInSingleSelectionError", function() { return getMultipleValuesInSingleSelectionError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectionModel", function() { return SelectionModel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */




/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @abstract
 * @template T
 */
var  /**
 * @abstract
 * @template T
 */
DataSource = /** @class */ (function () {
    function DataSource() {
    }
    return DataSource;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * DataSource wrapper for a native array.
 * @template T
 */
var  /**
 * DataSource wrapper for a native array.
 * @template T
 */
ArrayDataSource = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ArrayDataSource, _super);
    function ArrayDataSource(_data) {
        var _this = _super.call(this) || this;
        _this._data = _data;
        return _this;
    }
    /**
     * @return {?}
     */
    ArrayDataSource.prototype.connect = /**
     * @return {?}
     */
    function () {
        return this._data instanceof rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"] ? this._data : Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this._data);
    };
    /**
     * @return {?}
     */
    ArrayDataSource.prototype.disconnect = /**
     * @return {?}
     */
    function () { };
    return ArrayDataSource;
}(DataSource));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Class to be used to power selecting one or more options from a list.
 * @template T
 */
var  /**
 * Class to be used to power selecting one or more options from a list.
 * @template T
 */
SelectionModel = /** @class */ (function () {
    function SelectionModel(_multiple, initiallySelectedValues, _emitChanges) {
        if (_multiple === void 0) { _multiple = false; }
        if (_emitChanges === void 0) { _emitChanges = true; }
        var _this = this;
        this._multiple = _multiple;
        this._emitChanges = _emitChanges;
        /**
         * Currently-selected values.
         */
        this._selection = new Set();
        /**
         * Keeps track of the deselected options that haven't been emitted by the change event.
         */
        this._deselectedToEmit = [];
        /**
         * Keeps track of the selected options that haven't been emitted by the change event.
         */
        this._selectedToEmit = [];
        /**
         * Event emitted when the value has changed.
         */
        this.changed = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        /**
         * Event emitted when the value has changed.
         * @deprecated Use `changed` instead.
         * \@breaking-change 8.0.0 To be changed to `changed`
         */
        this.onChange = this.changed;
        if (initiallySelectedValues && initiallySelectedValues.length) {
            if (_multiple) {
                initiallySelectedValues.forEach(function (value) { return _this._markSelected(value); });
            }
            else {
                this._markSelected(initiallySelectedValues[0]);
            }
            // Clear the array in order to avoid firing the change event for preselected values.
            this._selectedToEmit.length = 0;
        }
    }
    Object.defineProperty(SelectionModel.prototype, "selected", {
        /** Selected values. */
        get: /**
         * Selected values.
         * @return {?}
         */
        function () {
            if (!this._selected) {
                this._selected = Array.from(this._selection.values());
            }
            return this._selected;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Selects a value or an array of values.
     */
    /**
     * Selects a value or an array of values.
     * @param {...?} values
     * @return {?}
     */
    SelectionModel.prototype.select = /**
     * Selects a value or an array of values.
     * @param {...?} values
     * @return {?}
     */
    function () {
        var _this = this;
        var values = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            values[_i] = arguments[_i];
        }
        this._verifyValueAssignment(values);
        values.forEach(function (value) { return _this._markSelected(value); });
        this._emitChangeEvent();
    };
    /**
     * Deselects a value or an array of values.
     */
    /**
     * Deselects a value or an array of values.
     * @param {...?} values
     * @return {?}
     */
    SelectionModel.prototype.deselect = /**
     * Deselects a value or an array of values.
     * @param {...?} values
     * @return {?}
     */
    function () {
        var _this = this;
        var values = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            values[_i] = arguments[_i];
        }
        this._verifyValueAssignment(values);
        values.forEach(function (value) { return _this._unmarkSelected(value); });
        this._emitChangeEvent();
    };
    /**
     * Toggles a value between selected and deselected.
     */
    /**
     * Toggles a value between selected and deselected.
     * @param {?} value
     * @return {?}
     */
    SelectionModel.prototype.toggle = /**
     * Toggles a value between selected and deselected.
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.isSelected(value) ? this.deselect(value) : this.select(value);
    };
    /**
     * Clears all of the selected values.
     */
    /**
     * Clears all of the selected values.
     * @return {?}
     */
    SelectionModel.prototype.clear = /**
     * Clears all of the selected values.
     * @return {?}
     */
    function () {
        this._unmarkAll();
        this._emitChangeEvent();
    };
    /**
     * Determines whether a value is selected.
     */
    /**
     * Determines whether a value is selected.
     * @param {?} value
     * @return {?}
     */
    SelectionModel.prototype.isSelected = /**
     * Determines whether a value is selected.
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return this._selection.has(value);
    };
    /**
     * Determines whether the model does not have a value.
     */
    /**
     * Determines whether the model does not have a value.
     * @return {?}
     */
    SelectionModel.prototype.isEmpty = /**
     * Determines whether the model does not have a value.
     * @return {?}
     */
    function () {
        return this._selection.size === 0;
    };
    /**
     * Determines whether the model has a value.
     */
    /**
     * Determines whether the model has a value.
     * @return {?}
     */
    SelectionModel.prototype.hasValue = /**
     * Determines whether the model has a value.
     * @return {?}
     */
    function () {
        return !this.isEmpty();
    };
    /**
     * Sorts the selected values based on a predicate function.
     */
    /**
     * Sorts the selected values based on a predicate function.
     * @param {?=} predicate
     * @return {?}
     */
    SelectionModel.prototype.sort = /**
     * Sorts the selected values based on a predicate function.
     * @param {?=} predicate
     * @return {?}
     */
    function (predicate) {
        if (this._multiple && this.selected) {
            (/** @type {?} */ (this._selected)).sort(predicate);
        }
    };
    /**
     * Gets whether multiple values can be selected.
     */
    /**
     * Gets whether multiple values can be selected.
     * @return {?}
     */
    SelectionModel.prototype.isMultipleSelection = /**
     * Gets whether multiple values can be selected.
     * @return {?}
     */
    function () {
        return this._multiple;
    };
    /** Emits a change event and clears the records of selected and deselected values. */
    /**
     * Emits a change event and clears the records of selected and deselected values.
     * @private
     * @return {?}
     */
    SelectionModel.prototype._emitChangeEvent = /**
     * Emits a change event and clears the records of selected and deselected values.
     * @private
     * @return {?}
     */
    function () {
        // Clear the selected values so they can be re-cached.
        this._selected = null;
        if (this._selectedToEmit.length || this._deselectedToEmit.length) {
            this.changed.next({
                source: this,
                added: this._selectedToEmit,
                removed: this._deselectedToEmit
            });
            this._deselectedToEmit = [];
            this._selectedToEmit = [];
        }
    };
    /** Selects a value. */
    /**
     * Selects a value.
     * @private
     * @param {?} value
     * @return {?}
     */
    SelectionModel.prototype._markSelected = /**
     * Selects a value.
     * @private
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (!this.isSelected(value)) {
            if (!this._multiple) {
                this._unmarkAll();
            }
            this._selection.add(value);
            if (this._emitChanges) {
                this._selectedToEmit.push(value);
            }
        }
    };
    /** Deselects a value. */
    /**
     * Deselects a value.
     * @private
     * @param {?} value
     * @return {?}
     */
    SelectionModel.prototype._unmarkSelected = /**
     * Deselects a value.
     * @private
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (this.isSelected(value)) {
            this._selection.delete(value);
            if (this._emitChanges) {
                this._deselectedToEmit.push(value);
            }
        }
    };
    /** Clears out the selected values. */
    /**
     * Clears out the selected values.
     * @private
     * @return {?}
     */
    SelectionModel.prototype._unmarkAll = /**
     * Clears out the selected values.
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this.isEmpty()) {
            this._selection.forEach(function (value) { return _this._unmarkSelected(value); });
        }
    };
    /**
     * Verifies the value assignment and throws an error if the specified value array is
     * including multiple values while the selection model is not supporting multiple values.
     */
    /**
     * Verifies the value assignment and throws an error if the specified value array is
     * including multiple values while the selection model is not supporting multiple values.
     * @private
     * @param {?} values
     * @return {?}
     */
    SelectionModel.prototype._verifyValueAssignment = /**
     * Verifies the value assignment and throws an error if the specified value array is
     * including multiple values while the selection model is not supporting multiple values.
     * @private
     * @param {?} values
     * @return {?}
     */
    function (values) {
        if (values.length > 1 && !this._multiple) {
            throw getMultipleValuesInSingleSelectionError();
        }
    };
    return SelectionModel;
}());
/**
 * Returns an error that reports that multiple values are passed into a selection model
 * with a single value.
 * \@docs-private
 * @return {?}
 */
function getMultipleValuesInSingleSelectionError() {
    return Error('Cannot pass multiple values into SelectionModel with single-value mode.');
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Class to coordinate unique selection based on name.
 * Intended to be consumed as an Angular service.
 * This service is needed because native radio change events are only fired on the item currently
 * being selected, and we still need to uncheck the previous selection.
 *
 * This service does not *store* any IDs and names because they may change at any time, so it is
 * less error-prone if they are simply passed through when the events occur.
 */
var UniqueSelectionDispatcher = /** @class */ (function () {
    function UniqueSelectionDispatcher() {
        this._listeners = [];
    }
    /**
     * Notify other items that selection for the given name has been set.
     * @param id ID of the item.
     * @param name Name of the item.
     */
    /**
     * Notify other items that selection for the given name has been set.
     * @param {?} id ID of the item.
     * @param {?} name Name of the item.
     * @return {?}
     */
    UniqueSelectionDispatcher.prototype.notify = /**
     * Notify other items that selection for the given name has been set.
     * @param {?} id ID of the item.
     * @param {?} name Name of the item.
     * @return {?}
     */
    function (id, name) {
        for (var _i = 0, _a = this._listeners; _i < _a.length; _i++) {
            var listener = _a[_i];
            listener(id, name);
        }
    };
    /**
     * Listen for future changes to item selection.
     * @return Function used to deregister listener
     */
    /**
     * Listen for future changes to item selection.
     * @param {?} listener
     * @return {?} Function used to deregister listener
     */
    UniqueSelectionDispatcher.prototype.listen = /**
     * Listen for future changes to item selection.
     * @param {?} listener
     * @return {?} Function used to deregister listener
     */
    function (listener) {
        var _this = this;
        this._listeners.push(listener);
        return function () {
            _this._listeners = _this._listeners.filter(function (registered) {
                return listener !== registered;
            });
        };
    };
    /**
     * @return {?}
     */
    UniqueSelectionDispatcher.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._listeners = [];
    };
    UniqueSelectionDispatcher.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"], args: [{ providedIn: 'root' },] },
    ];
    /** @nocollapse */ UniqueSelectionDispatcher.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["defineInjectable"])({ factory: function UniqueSelectionDispatcher_Factory() { return new UniqueSelectionDispatcher(); }, token: UniqueSelectionDispatcher, providedIn: "root" });
    return UniqueSelectionDispatcher;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


//# sourceMappingURL=collections.es5.js.map


/***/ }),

/***/ "./node_modules/@angular/cdk/esm5/layout.es5.js":
/*!******************************************************!*\
  !*** ./node_modules/@angular/cdk/esm5/layout.es5.js ***!
  \******************************************************/
/*! exports provided: LayoutModule, BreakpointObserver, Breakpoints, MediaMatcher */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutModule", function() { return LayoutModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreakpointObserver", function() { return BreakpointObserver; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Breakpoints", function() { return Breakpoints; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaMatcher", function() { return MediaMatcher; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/platform */ "./node_modules/@angular/cdk/esm5/platform.es5.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/coercion */ "./node_modules/@angular/cdk/esm5/coercion.es5.js");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */






/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var LayoutModule = /** @class */ (function () {
    function LayoutModule() {
    }
    LayoutModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{},] },
    ];
    return LayoutModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Global registry for all dynamically-created, injected media queries.
 * @type {?}
 */
var mediaQueriesForWebkitCompatibility = new Set();
/**
 * Style tag that holds all of the dynamically-created media queries.
 * @type {?}
 */
var mediaQueryStyleNode;
/**
 * A utility for calling matchMedia queries.
 */
var MediaMatcher = /** @class */ (function () {
    function MediaMatcher(platform) {
        this.platform = platform;
        this._matchMedia = this.platform.isBrowser && window.matchMedia ?
            // matchMedia is bound to the window scope intentionally as it is an illegal invocation to
            // call it from a different scope.
            window.matchMedia.bind(window) :
            noopMatchMedia;
    }
    /**
     * Evaluates the given media query and returns the native MediaQueryList from which results
     * can be retrieved.
     * Confirms the layout engine will trigger for the selector query provided and returns the
     * MediaQueryList for the query provided.
     */
    /**
     * Evaluates the given media query and returns the native MediaQueryList from which results
     * can be retrieved.
     * Confirms the layout engine will trigger for the selector query provided and returns the
     * MediaQueryList for the query provided.
     * @param {?} query
     * @return {?}
     */
    MediaMatcher.prototype.matchMedia = /**
     * Evaluates the given media query and returns the native MediaQueryList from which results
     * can be retrieved.
     * Confirms the layout engine will trigger for the selector query provided and returns the
     * MediaQueryList for the query provided.
     * @param {?} query
     * @return {?}
     */
    function (query) {
        if (this.platform.WEBKIT) {
            createEmptyStyleRule(query);
        }
        return this._matchMedia(query);
    };
    MediaMatcher.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{ providedIn: 'root' },] },
    ];
    /** @nocollapse */
    MediaMatcher.ctorParameters = function () { return [
        { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__["Platform"] }
    ]; };
    /** @nocollapse */ MediaMatcher.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["defineInjectable"])({ factory: function MediaMatcher_Factory() { return new MediaMatcher(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__["Platform"])); }, token: MediaMatcher, providedIn: "root" });
    return MediaMatcher;
}());
/**
 * For Webkit engines that only trigger the MediaQueryListListener when
 * there is at least one CSS selector for the respective media query.
 * @param {?} query
 * @return {?}
 */
function createEmptyStyleRule(query) {
    if (mediaQueriesForWebkitCompatibility.has(query)) {
        return;
    }
    try {
        if (!mediaQueryStyleNode) {
            mediaQueryStyleNode = document.createElement('style');
            mediaQueryStyleNode.setAttribute('type', 'text/css');
            (/** @type {?} */ (document.head)).appendChild(mediaQueryStyleNode);
        }
        if (mediaQueryStyleNode.sheet) {
            ((/** @type {?} */ (mediaQueryStyleNode.sheet)))
                .insertRule("@media " + query + " {.fx-query-test{ }}", 0);
            mediaQueriesForWebkitCompatibility.add(query);
        }
    }
    catch (e) {
        console.error(e);
    }
}
/**
 * No-op matchMedia replacement for non-browser platforms.
 * @param {?} query
 * @return {?}
 */
function noopMatchMedia(query) {
    // Use `as any` here to avoid adding additional necessary properties for
    // the noop matcher.
    return (/** @type {?} */ ({
        matches: query === 'all' || query === '',
        media: query,
        addListener: function () { },
        removeListener: function () { }
    }));
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Utility for checking the matching state of \@media queries.
 */
var BreakpointObserver = /** @class */ (function () {
    function BreakpointObserver(mediaMatcher, zone) {
        this.mediaMatcher = mediaMatcher;
        this.zone = zone;
        /**
         * A map of all media queries currently being listened for.
         */
        this._queries = new Map();
        /**
         * A subject for all other observables to takeUntil based on.
         */
        this._destroySubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    /** Completes the active subject, signalling to all other observables to complete. */
    /**
     * Completes the active subject, signalling to all other observables to complete.
     * @return {?}
     */
    BreakpointObserver.prototype.ngOnDestroy = /**
     * Completes the active subject, signalling to all other observables to complete.
     * @return {?}
     */
    function () {
        this._destroySubject.next();
        this._destroySubject.complete();
    };
    /**
     * Whether one or more media queries match the current viewport size.
     * @param value One or more media queries to check.
     * @returns Whether any of the media queries match.
     */
    /**
     * Whether one or more media queries match the current viewport size.
     * @param {?} value One or more media queries to check.
     * @return {?} Whether any of the media queries match.
     */
    BreakpointObserver.prototype.isMatched = /**
     * Whether one or more media queries match the current viewport size.
     * @param {?} value One or more media queries to check.
     * @return {?} Whether any of the media queries match.
     */
    function (value) {
        var _this = this;
        /** @type {?} */
        var queries = splitQueries(Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceArray"])(value));
        return queries.some(function (mediaQuery) { return _this._registerQuery(mediaQuery).mql.matches; });
    };
    /**
     * Gets an observable of results for the given queries that will emit new results for any changes
     * in matching of the given queries.
     * @param value One or more media queries to check.
     * @returns A stream of matches for the given queries.
     */
    /**
     * Gets an observable of results for the given queries that will emit new results for any changes
     * in matching of the given queries.
     * @param {?} value One or more media queries to check.
     * @return {?} A stream of matches for the given queries.
     */
    BreakpointObserver.prototype.observe = /**
     * Gets an observable of results for the given queries that will emit new results for any changes
     * in matching of the given queries.
     * @param {?} value One or more media queries to check.
     * @return {?} A stream of matches for the given queries.
     */
    function (value) {
        var _this = this;
        /** @type {?} */
        var queries = splitQueries(Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceArray"])(value));
        /** @type {?} */
        var observables = queries.map(function (query) { return _this._registerQuery(query).observable; });
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["combineLatest"])(observables).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(0, rxjs__WEBPACK_IMPORTED_MODULE_2__["asapScheduler"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (breakpointStates) {
            /** @type {?} */
            var response = {
                matches: false,
                breakpoints: {},
            };
            breakpointStates.forEach(function (state) {
                response.matches = response.matches || state.matches;
                response.breakpoints[state.query] = state.matches;
            });
            return response;
        }));
    };
    /** Registers a specific query to be listened for. */
    /**
     * Registers a specific query to be listened for.
     * @private
     * @param {?} query
     * @return {?}
     */
    BreakpointObserver.prototype._registerQuery = /**
     * Registers a specific query to be listened for.
     * @private
     * @param {?} query
     * @return {?}
     */
    function (query) {
        var _this = this;
        // Only set up a new MediaQueryList if it is not already being listened for.
        if (this._queries.has(query)) {
            return (/** @type {?} */ (this._queries.get(query)));
        }
        /** @type {?} */
        var mql = this.mediaMatcher.matchMedia(query);
        // TODO(jelbourn): change this `any` to `MediaQueryListEvent` once Google has upgraded to
        // TypeScript 3.1 (the type is unavailable before then).
        /** @type {?} */
        var queryListener;
        // Create callback for match changes and add it is as a listener.
        /** @type {?} */
        var queryObservable = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEventPattern"])(
        // Listener callback methods are wrapped to be placed back in ngZone. Callbacks must be placed
        // back into the zone because matchMedia is only included in Zone.js by loading the
        // webapis-media-query.js file alongside the zone.js file.  Additionally, some browsers do not
        // have MediaQueryList inherit from EventTarget, which causes inconsistencies in how Zone.js
        // patches it.
        function (listener) {
            queryListener = function (e) { return _this.zone.run(function () { return listener(e); }); };
            mql.addListener(queryListener);
        }, function () { return mql.removeListener(queryListener); })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(mql), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (nextMql) { return ({ query: query, matches: nextMql.matches }); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._destroySubject));
        // Add the MediaQueryList to the set of queries.
        /** @type {?} */
        var output = { observable: queryObservable, mql: mql };
        this._queries.set(query, output);
        return output;
    };
    BreakpointObserver.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{ providedIn: 'root' },] },
    ];
    /** @nocollapse */
    BreakpointObserver.ctorParameters = function () { return [
        { type: MediaMatcher },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }
    ]; };
    /** @nocollapse */ BreakpointObserver.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["defineInjectable"])({ factory: function BreakpointObserver_Factory() { return new BreakpointObserver(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(MediaMatcher), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"])); }, token: BreakpointObserver, providedIn: "root" });
    return BreakpointObserver;
}());
/**
 * Split each query string into separate query strings if two queries are provided as comma
 * separated.
 * @param {?} queries
 * @return {?}
 */
function splitQueries(queries) {
    return queries.map(function (query) { return query.split(','); })
        .reduce(function (a1, a2) { return a1.concat(a2); })
        .map(function (query) { return query.trim(); });
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// PascalCase is being used as Breakpoints is used like an enum.
// tslint:disable-next-line:variable-name
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 * @type {?}
 */
var Breakpoints = {
    XSmall: '(max-width: 599.99px)',
    Small: '(min-width: 600px) and (max-width: 959.99px)',
    Medium: '(min-width: 960px) and (max-width: 1279.99px)',
    Large: '(min-width: 1280px) and (max-width: 1919.99px)',
    XLarge: '(min-width: 1920px)',
    Handset: '(max-width: 599.99px) and (orientation: portrait), ' +
        '(max-width: 959.99px) and (orientation: landscape)',
    Tablet: '(min-width: 600px) and (max-width: 839.99px) and (orientation: portrait), ' +
        '(min-width: 960px) and (max-width: 1279.99px) and (orientation: landscape)',
    Web: '(min-width: 840px) and (orientation: portrait), ' +
        '(min-width: 1280px) and (orientation: landscape)',
    HandsetPortrait: '(max-width: 599.99px) and (orientation: portrait)',
    TabletPortrait: '(min-width: 600px) and (max-width: 839.99px) and (orientation: portrait)',
    WebPortrait: '(min-width: 840px) and (orientation: portrait)',
    HandsetLandscape: '(max-width: 959.99px) and (orientation: landscape)',
    TabletLandscape: '(min-width: 960px) and (max-width: 1279.99px) and (orientation: landscape)',
    WebLandscape: '(min-width: 1280px) and (orientation: landscape)',
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


//# sourceMappingURL=layout.es5.js.map


/***/ }),

/***/ "./node_modules/@angular/cdk/esm5/platform.es5.js":
/*!********************************************************!*\
  !*** ./node_modules/@angular/cdk/esm5/platform.es5.js ***!
  \********************************************************/
/*! exports provided: Platform, PlatformModule, getSupportedInputTypes, supportsPassiveEventListeners, normalizePassiveListenerOptions, supportsScrollBehavior, getRtlScrollAxisType, RtlScrollAxisType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Platform", function() { return Platform; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlatformModule", function() { return PlatformModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSupportedInputTypes", function() { return getSupportedInputTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supportsPassiveEventListeners", function() { return supportsPassiveEventListeners; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalizePassiveListenerOptions", function() { return normalizePassiveListenerOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supportsScrollBehavior", function() { return supportsScrollBehavior; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRtlScrollAxisType", function() { return getRtlScrollAxisType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RtlScrollAxisType", function() { return RtlScrollAxisType; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */



/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Whether the current platform supports the V8 Break Iterator. The V8 check
// is necessary to detect all Blink based browsers.
/** @type {?} */
var hasV8BreakIterator = (typeof Intl !== 'undefined' && ((/** @type {?} */ (Intl))).v8BreakIterator);
/**
 * Service to detect the current platform by comparing the userAgent strings and
 * checking browser-specific global properties.
 */
var Platform = /** @class */ (function () {
    /**
     * @breaking-change 8.0.0 remove optional decorator
     */
    function Platform(_platformId) {
        this._platformId = _platformId;
        /**
         * Whether the Angular application is being rendered in the browser.
         * We want to use the Angular platform check because if the Document is shimmed
         * without the navigator, the following checks will fail. This is preferred because
         * sometimes the Document may be shimmed without the user's knowledge or intention
         */
        this.isBrowser = this._platformId ?
            Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(this._platformId) : typeof document === 'object' && !!document;
        /**
         * Whether the current browser is Microsoft Edge.
         */
        this.EDGE = this.isBrowser && /(edge)/i.test(navigator.userAgent);
        /**
         * Whether the current rendering engine is Microsoft Trident.
         */
        this.TRIDENT = this.isBrowser && /(msie|trident)/i.test(navigator.userAgent);
        /**
         * Whether the current rendering engine is Blink.
         */
        // EdgeHTML and Trident mock Blink specific things and need to be excluded from this check.
        this.BLINK = this.isBrowser && (!!(((/** @type {?} */ (window))).chrome || hasV8BreakIterator) &&
            typeof CSS !== 'undefined' && !this.EDGE && !this.TRIDENT);
        /**
         * Whether the current rendering engine is WebKit.
         */
        // Webkit is part of the userAgent in EdgeHTML, Blink and Trident. Therefore we need to
        // ensure that Webkit runs standalone and is not used as another engine's base.
        this.WEBKIT = this.isBrowser &&
            /AppleWebKit/i.test(navigator.userAgent) && !this.BLINK && !this.EDGE && !this.TRIDENT;
        /**
         * Whether the current platform is Apple iOS.
         */
        this.IOS = this.isBrowser && /iPad|iPhone|iPod/.test(navigator.userAgent) &&
            !('MSStream' in window);
        /**
         * Whether the current browser is Firefox.
         */
        // It's difficult to detect the plain Gecko engine, because most of the browsers identify
        // them self as Gecko-like browsers and modify the userAgent's according to that.
        // Since we only cover one explicit Firefox case, we can simply check for Firefox
        // instead of having an unstable check for Gecko.
        this.FIREFOX = this.isBrowser && /(firefox|minefield)/i.test(navigator.userAgent);
        /**
         * Whether the current platform is Android.
         */
        // Trident on mobile adds the android platform to the userAgent to trick detections.
        this.ANDROID = this.isBrowser && /android/i.test(navigator.userAgent) && !this.TRIDENT;
        /**
         * Whether the current browser is Safari.
         */
        // Safari browsers will include the Safari keyword in their userAgent. Some browsers may fake
        // this and just place the Safari keyword in the userAgent. To be more safe about Safari every
        // Safari browser should also use Webkit as its layout engine.
        this.SAFARI = this.isBrowser && /safari/i.test(navigator.userAgent) && this.WEBKIT;
    }
    Platform.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{ providedIn: 'root' },] },
    ];
    /** @nocollapse */
    Platform.ctorParameters = function () { return [
        { type: Object, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"],] }] }
    ]; };
    /** @nocollapse */ Platform.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["defineInjectable"])({ factory: function Platform_Factory() { return new Platform(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"], 8)); }, token: Platform, providedIn: "root" });
    return Platform;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PlatformModule = /** @class */ (function () {
    function PlatformModule() {
    }
    PlatformModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{},] },
    ];
    return PlatformModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * Cached result Set of input types support by the current browser.
 * @type {?}
 */
var supportedInputTypes;
/**
 * Types of `<input>` that *might* be supported.
 * @type {?}
 */
var candidateInputTypes = [
    // `color` must come first. Chrome 56 shows a warning if we change the type to `color` after
    // first changing it to something else:
    // The specified value "" does not conform to the required format.
    // The format is "#rrggbb" where rr, gg, bb are two-digit hexadecimal numbers.
    'color',
    'button',
    'checkbox',
    'date',
    'datetime-local',
    'email',
    'file',
    'hidden',
    'image',
    'month',
    'number',
    'password',
    'radio',
    'range',
    'reset',
    'search',
    'submit',
    'tel',
    'text',
    'time',
    'url',
    'week',
];
/**
 * @return {?} The input types supported by this browser.
 */
function getSupportedInputTypes() {
    // Result is cached.
    if (supportedInputTypes) {
        return supportedInputTypes;
    }
    // We can't check if an input type is not supported until we're on the browser, so say that
    // everything is supported when not on the browser. We don't use `Platform` here since it's
    // just a helper function and can't inject it.
    if (typeof document !== 'object' || !document) {
        supportedInputTypes = new Set(candidateInputTypes);
        return supportedInputTypes;
    }
    /** @type {?} */
    var featureTestInput = document.createElement('input');
    supportedInputTypes = new Set(candidateInputTypes.filter(function (value) {
        featureTestInput.setAttribute('type', value);
        return featureTestInput.type === value;
    }));
    return supportedInputTypes;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * Cached result of whether the user's browser supports passive event listeners.
 * @type {?}
 */
var supportsPassiveEvents;
/**
 * Checks whether the user's browser supports passive event listeners.
 * See: https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md
 * @return {?}
 */
function supportsPassiveEventListeners() {
    if (supportsPassiveEvents == null && typeof window !== 'undefined') {
        try {
            window.addEventListener('test', (/** @type {?} */ (null)), Object.defineProperty({}, 'passive', {
                get: function () { return supportsPassiveEvents = true; }
            }));
        }
        finally {
            supportsPassiveEvents = supportsPassiveEvents || false;
        }
    }
    return supportsPassiveEvents;
}
/**
 * Normalizes an `AddEventListener` object to something that can be passed
 * to `addEventListener` on any browser, no matter whether it supports the
 * `options` parameter.
 * @param {?} options Object to be normalized.
 * @return {?}
 */
function normalizePassiveListenerOptions(options) {
    return supportsPassiveEventListeners() ? options : !!options.capture;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/** @enum {number} */
var RtlScrollAxisType = {
    /**
     * scrollLeft is 0 when scrolled all the way left and (scrollWidth - clientWidth) when scrolled
     * all the way right.
     */
    NORMAL: 0,
    /**
     * scrollLeft is -(scrollWidth - clientWidth) when scrolled all the way left and 0 when scrolled
     * all the way right.
     */
    NEGATED: 1,
    /**
     * scrollLeft is (scrollWidth - clientWidth) when scrolled all the way left and 0 when scrolled
     * all the way right.
     */
    INVERTED: 2,
};
RtlScrollAxisType[RtlScrollAxisType.NORMAL] = 'NORMAL';
RtlScrollAxisType[RtlScrollAxisType.NEGATED] = 'NEGATED';
RtlScrollAxisType[RtlScrollAxisType.INVERTED] = 'INVERTED';
/**
 * Cached result of the way the browser handles the horizontal scroll axis in RTL mode.
 * @type {?}
 */
var rtlScrollAxisType;
/**
 * Check whether the browser supports scroll behaviors.
 * @return {?}
 */
function supportsScrollBehavior() {
    return !!(typeof document == 'object' && 'scrollBehavior' in (/** @type {?} */ (document.documentElement)).style);
}
/**
 * Checks the type of RTL scroll axis used by this browser. As of time of writing, Chrome is NORMAL,
 * Firefox & Safari are NEGATED, and IE & Edge are INVERTED.
 * @return {?}
 */
function getRtlScrollAxisType() {
    // We can't check unless we're on the browser. Just assume 'normal' if we're not.
    if (typeof document !== 'object' || !document) {
        return RtlScrollAxisType.NORMAL;
    }
    if (!rtlScrollAxisType) {
        // Create a 1px wide scrolling container and a 2px wide content element.
        /** @type {?} */
        var scrollContainer = document.createElement('div');
        /** @type {?} */
        var containerStyle = scrollContainer.style;
        scrollContainer.dir = 'rtl';
        containerStyle.height = '1px';
        containerStyle.width = '1px';
        containerStyle.overflow = 'auto';
        containerStyle.visibility = 'hidden';
        containerStyle.pointerEvents = 'none';
        containerStyle.position = 'absolute';
        /** @type {?} */
        var content = document.createElement('div');
        /** @type {?} */
        var contentStyle = content.style;
        contentStyle.width = '2px';
        contentStyle.height = '1px';
        scrollContainer.appendChild(content);
        document.body.appendChild(scrollContainer);
        rtlScrollAxisType = RtlScrollAxisType.NORMAL;
        // The viewport starts scrolled all the way to the right in RTL mode. If we are in a NORMAL
        // browser this would mean that the scrollLeft should be 1. If it's zero instead we know we're
        // dealing with one of the other two types of browsers.
        if (scrollContainer.scrollLeft === 0) {
            // In a NEGATED browser the scrollLeft is always somewhere in [-maxScrollAmount, 0]. For an
            // INVERTED browser it is always somewhere in [0, maxScrollAmount]. We can determine which by
            // setting to the scrollLeft to 1. This is past the max for a NEGATED browser, so it will
            // return 0 when we read it again.
            scrollContainer.scrollLeft = 1;
            rtlScrollAxisType =
                scrollContainer.scrollLeft === 0 ? RtlScrollAxisType.NEGATED : RtlScrollAxisType.INVERTED;
        }
        (/** @type {?} */ (scrollContainer.parentNode)).removeChild(scrollContainer);
    }
    return rtlScrollAxisType;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


//# sourceMappingURL=platform.es5.js.map


/***/ }),

/***/ "./node_modules/@angular/cdk/esm5/scrolling.es5.js":
/*!*********************************************************!*\
  !*** ./node_modules/@angular/cdk/esm5/scrolling.es5.js ***!
  \*********************************************************/
/*! exports provided: _fixedSizeVirtualScrollStrategyFactory, FixedSizeVirtualScrollStrategy, CdkFixedSizeVirtualScroll, SCROLL_DISPATCHER_PROVIDER_FACTORY, DEFAULT_SCROLL_TIME, ScrollDispatcher, SCROLL_DISPATCHER_PROVIDER, CdkScrollable, ScrollingModule, ScrollDispatchModule, VIEWPORT_RULER_PROVIDER_FACTORY, DEFAULT_RESIZE_TIME, ViewportRuler, VIEWPORT_RULER_PROVIDER, CdkVirtualForOf, VIRTUAL_SCROLL_STRATEGY, CdkVirtualScrollViewport */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_fixedSizeVirtualScrollStrategyFactory", function() { return _fixedSizeVirtualScrollStrategyFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FixedSizeVirtualScrollStrategy", function() { return FixedSizeVirtualScrollStrategy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkFixedSizeVirtualScroll", function() { return CdkFixedSizeVirtualScroll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SCROLL_DISPATCHER_PROVIDER_FACTORY", function() { return SCROLL_DISPATCHER_PROVIDER_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_SCROLL_TIME", function() { return DEFAULT_SCROLL_TIME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollDispatcher", function() { return ScrollDispatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SCROLL_DISPATCHER_PROVIDER", function() { return SCROLL_DISPATCHER_PROVIDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkScrollable", function() { return CdkScrollable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollingModule", function() { return ScrollingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollDispatchModule", function() { return ScrollDispatchModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VIEWPORT_RULER_PROVIDER_FACTORY", function() { return VIEWPORT_RULER_PROVIDER_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_RESIZE_TIME", function() { return DEFAULT_RESIZE_TIME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewportRuler", function() { return ViewportRuler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VIEWPORT_RULER_PROVIDER", function() { return VIEWPORT_RULER_PROVIDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkVirtualForOf", function() { return CdkVirtualForOf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VIRTUAL_SCROLL_STRATEGY", function() { return VIRTUAL_SCROLL_STRATEGY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkVirtualScrollViewport", function() { return CdkVirtualScrollViewport; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/coercion */ "./node_modules/@angular/cdk/esm5/coercion.es5.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/platform */ "./node_modules/@angular/cdk/esm5/platform.es5.js");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/bidi */ "./node_modules/@angular/cdk/esm5/bidi.es5.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */









/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * The injection token used to specify the virtual scrolling strategy.
 * @type {?}
 */
var VIRTUAL_SCROLL_STRATEGY = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('VIRTUAL_SCROLL_STRATEGY');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Virtual scrolling strategy for lists with items of known fixed size.
 */
var  /**
 * Virtual scrolling strategy for lists with items of known fixed size.
 */
FixedSizeVirtualScrollStrategy = /** @class */ (function () {
    /**
     * @param itemSize The size of the items in the virtually scrolling list.
     * @param minBufferPx The minimum amount of buffer (in pixels) before needing to render more
     * @param maxBufferPx The amount of buffer (in pixels) to render when rendering more.
     */
    function FixedSizeVirtualScrollStrategy(itemSize, minBufferPx, maxBufferPx) {
        this._scrolledIndexChange = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * \@docs-private Implemented as part of VirtualScrollStrategy.
         */
        this.scrolledIndexChange = this._scrolledIndexChange.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])());
        /**
         * The attached viewport.
         */
        this._viewport = null;
        this._itemSize = itemSize;
        this._minBufferPx = minBufferPx;
        this._maxBufferPx = maxBufferPx;
    }
    /**
     * Attaches this scroll strategy to a viewport.
     * @param viewport The viewport to attach this strategy to.
     */
    /**
     * Attaches this scroll strategy to a viewport.
     * @param {?} viewport The viewport to attach this strategy to.
     * @return {?}
     */
    FixedSizeVirtualScrollStrategy.prototype.attach = /**
     * Attaches this scroll strategy to a viewport.
     * @param {?} viewport The viewport to attach this strategy to.
     * @return {?}
     */
    function (viewport) {
        this._viewport = viewport;
        this._updateTotalContentSize();
        this._updateRenderedRange();
    };
    /** Detaches this scroll strategy from the currently attached viewport. */
    /**
     * Detaches this scroll strategy from the currently attached viewport.
     * @return {?}
     */
    FixedSizeVirtualScrollStrategy.prototype.detach = /**
     * Detaches this scroll strategy from the currently attached viewport.
     * @return {?}
     */
    function () {
        this._scrolledIndexChange.complete();
        this._viewport = null;
    };
    /**
     * Update the item size and buffer size.
     * @param itemSize The size of the items in the virtually scrolling list.
     * @param minBufferPx The minimum amount of buffer (in pixels) before needing to render more
     * @param maxBufferPx The amount of buffer (in pixels) to render when rendering more.
     */
    /**
     * Update the item size and buffer size.
     * @param {?} itemSize The size of the items in the virtually scrolling list.
     * @param {?} minBufferPx The minimum amount of buffer (in pixels) before needing to render more
     * @param {?} maxBufferPx The amount of buffer (in pixels) to render when rendering more.
     * @return {?}
     */
    FixedSizeVirtualScrollStrategy.prototype.updateItemAndBufferSize = /**
     * Update the item size and buffer size.
     * @param {?} itemSize The size of the items in the virtually scrolling list.
     * @param {?} minBufferPx The minimum amount of buffer (in pixels) before needing to render more
     * @param {?} maxBufferPx The amount of buffer (in pixels) to render when rendering more.
     * @return {?}
     */
    function (itemSize, minBufferPx, maxBufferPx) {
        if (maxBufferPx < minBufferPx) {
            throw Error('CDK virtual scroll: maxBufferPx must be greater than or equal to minBufferPx');
        }
        this._itemSize = itemSize;
        this._minBufferPx = minBufferPx;
        this._maxBufferPx = maxBufferPx;
        this._updateTotalContentSize();
        this._updateRenderedRange();
    };
    /** @docs-private Implemented as part of VirtualScrollStrategy. */
    /**
     * \@docs-private Implemented as part of VirtualScrollStrategy.
     * @return {?}
     */
    FixedSizeVirtualScrollStrategy.prototype.onContentScrolled = /**
     * \@docs-private Implemented as part of VirtualScrollStrategy.
     * @return {?}
     */
    function () {
        this._updateRenderedRange();
    };
    /** @docs-private Implemented as part of VirtualScrollStrategy. */
    /**
     * \@docs-private Implemented as part of VirtualScrollStrategy.
     * @return {?}
     */
    FixedSizeVirtualScrollStrategy.prototype.onDataLengthChanged = /**
     * \@docs-private Implemented as part of VirtualScrollStrategy.
     * @return {?}
     */
    function () {
        this._updateTotalContentSize();
        this._updateRenderedRange();
    };
    /** @docs-private Implemented as part of VirtualScrollStrategy. */
    /**
     * \@docs-private Implemented as part of VirtualScrollStrategy.
     * @return {?}
     */
    FixedSizeVirtualScrollStrategy.prototype.onContentRendered = /**
     * \@docs-private Implemented as part of VirtualScrollStrategy.
     * @return {?}
     */
    function () { };
    /** @docs-private Implemented as part of VirtualScrollStrategy. */
    /**
     * \@docs-private Implemented as part of VirtualScrollStrategy.
     * @return {?}
     */
    FixedSizeVirtualScrollStrategy.prototype.onRenderedOffsetChanged = /**
     * \@docs-private Implemented as part of VirtualScrollStrategy.
     * @return {?}
     */
    function () { };
    /**
     * Scroll to the offset for the given index.
     * @param index The index of the element to scroll to.
     * @param behavior The ScrollBehavior to use when scrolling.
     */
    /**
     * Scroll to the offset for the given index.
     * @param {?} index The index of the element to scroll to.
     * @param {?} behavior The ScrollBehavior to use when scrolling.
     * @return {?}
     */
    FixedSizeVirtualScrollStrategy.prototype.scrollToIndex = /**
     * Scroll to the offset for the given index.
     * @param {?} index The index of the element to scroll to.
     * @param {?} behavior The ScrollBehavior to use when scrolling.
     * @return {?}
     */
    function (index, behavior) {
        if (this._viewport) {
            this._viewport.scrollToOffset(index * this._itemSize, behavior);
        }
    };
    /** Update the viewport's total content size. */
    /**
     * Update the viewport's total content size.
     * @private
     * @return {?}
     */
    FixedSizeVirtualScrollStrategy.prototype._updateTotalContentSize = /**
     * Update the viewport's total content size.
     * @private
     * @return {?}
     */
    function () {
        if (!this._viewport) {
            return;
        }
        this._viewport.setTotalContentSize(this._viewport.getDataLength() * this._itemSize);
    };
    /** Update the viewport's rendered range. */
    /**
     * Update the viewport's rendered range.
     * @private
     * @return {?}
     */
    FixedSizeVirtualScrollStrategy.prototype._updateRenderedRange = /**
     * Update the viewport's rendered range.
     * @private
     * @return {?}
     */
    function () {
        if (!this._viewport) {
            return;
        }
        /** @type {?} */
        var scrollOffset = this._viewport.measureScrollOffset();
        /** @type {?} */
        var firstVisibleIndex = scrollOffset / this._itemSize;
        /** @type {?} */
        var renderedRange = this._viewport.getRenderedRange();
        /** @type {?} */
        var newRange = { start: renderedRange.start, end: renderedRange.end };
        /** @type {?} */
        var viewportSize = this._viewport.getViewportSize();
        /** @type {?} */
        var dataLength = this._viewport.getDataLength();
        /** @type {?} */
        var startBuffer = scrollOffset - newRange.start * this._itemSize;
        if (startBuffer < this._minBufferPx && newRange.start != 0) {
            /** @type {?} */
            var expandStart = Math.ceil((this._maxBufferPx - startBuffer) / this._itemSize);
            newRange.start = Math.max(0, newRange.start - expandStart);
            newRange.end = Math.min(dataLength, Math.ceil(firstVisibleIndex + (viewportSize + this._minBufferPx) / this._itemSize));
        }
        else {
            /** @type {?} */
            var endBuffer = newRange.end * this._itemSize - (scrollOffset + viewportSize);
            if (endBuffer < this._minBufferPx && newRange.end != dataLength) {
                /** @type {?} */
                var expandEnd = Math.ceil((this._maxBufferPx - endBuffer) / this._itemSize);
                if (expandEnd > 0) {
                    newRange.end = Math.min(dataLength, newRange.end + expandEnd);
                    newRange.start = Math.max(0, Math.floor(firstVisibleIndex - this._minBufferPx / this._itemSize));
                }
            }
        }
        this._viewport.setRenderedRange(newRange);
        this._viewport.setRenderedContentOffset(this._itemSize * newRange.start);
        this._scrolledIndexChange.next(Math.floor(firstVisibleIndex));
    };
    return FixedSizeVirtualScrollStrategy;
}());
/**
 * Provider factory for `FixedSizeVirtualScrollStrategy` that simply extracts the already created
 * `FixedSizeVirtualScrollStrategy` from the given directive.
 * @param {?} fixedSizeDir The instance of `CdkFixedSizeVirtualScroll` to extract the
 *     `FixedSizeVirtualScrollStrategy` from.
 * @return {?}
 */
function _fixedSizeVirtualScrollStrategyFactory(fixedSizeDir) {
    return fixedSizeDir._scrollStrategy;
}
/**
 * A virtual scroll strategy that supports fixed-size items.
 */
var CdkFixedSizeVirtualScroll = /** @class */ (function () {
    function CdkFixedSizeVirtualScroll() {
        this._itemSize = 20;
        this._minBufferPx = 100;
        this._maxBufferPx = 200;
        /**
         * The scroll strategy used by this directive.
         */
        this._scrollStrategy = new FixedSizeVirtualScrollStrategy(this.itemSize, this.minBufferPx, this.maxBufferPx);
    }
    Object.defineProperty(CdkFixedSizeVirtualScroll.prototype, "itemSize", {
        /** The size of the items in the list (in pixels). */
        get: /**
         * The size of the items in the list (in pixels).
         * @return {?}
         */
        function () { return this._itemSize; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) { this._itemSize = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceNumberProperty"])(value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CdkFixedSizeVirtualScroll.prototype, "minBufferPx", {
        /**
         * The minimum amount of buffer rendered beyond the viewport (in pixels).
         * If the amount of buffer dips below this number, more items will be rendered. Defaults to 100px.
         */
        get: /**
         * The minimum amount of buffer rendered beyond the viewport (in pixels).
         * If the amount of buffer dips below this number, more items will be rendered. Defaults to 100px.
         * @return {?}
         */
        function () { return this._minBufferPx; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) { this._minBufferPx = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceNumberProperty"])(value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CdkFixedSizeVirtualScroll.prototype, "maxBufferPx", {
        /**
         * The number of pixels worth of buffer to render for when rendering new items. Defaults to 200px.
         */
        get: /**
         * The number of pixels worth of buffer to render for when rendering new items. Defaults to 200px.
         * @return {?}
         */
        function () { return this._maxBufferPx; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) { this._maxBufferPx = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceNumberProperty"])(value); },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    CdkFixedSizeVirtualScroll.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        this._scrollStrategy.updateItemAndBufferSize(this.itemSize, this.minBufferPx, this.maxBufferPx);
    };
    CdkFixedSizeVirtualScroll.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: 'cdk-virtual-scroll-viewport[itemSize]',
                    providers: [{
                            provide: VIRTUAL_SCROLL_STRATEGY,
                            useFactory: _fixedSizeVirtualScrollStrategyFactory,
                            deps: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return CdkFixedSizeVirtualScroll; })],
                        }],
                },] },
    ];
    CdkFixedSizeVirtualScroll.propDecorators = {
        itemSize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        minBufferPx: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        maxBufferPx: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
    };
    return CdkFixedSizeVirtualScroll;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Time in ms to throttle the scrolling events by default.
 * @type {?}
 */
var DEFAULT_SCROLL_TIME = 20;
/**
 * Service contained all registered Scrollable references and emits an event when any one of the
 * Scrollable references emit a scrolled event.
 */
var ScrollDispatcher = /** @class */ (function () {
    function ScrollDispatcher(_ngZone, _platform) {
        this._ngZone = _ngZone;
        this._platform = _platform;
        /**
         * Subject for notifying that a registered scrollable reference element has been scrolled.
         */
        this._scrolled = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Keeps track of the global `scroll` and `resize` subscriptions.
         */
        this._globalSubscription = null;
        /**
         * Keeps track of the amount of subscriptions to `scrolled`. Used for cleaning up afterwards.
         */
        this._scrolledCount = 0;
        /**
         * Map of all the scrollable references that are registered with the service and their
         * scroll event subscriptions.
         */
        this.scrollContainers = new Map();
    }
    /**
     * Registers a scrollable instance with the service and listens for its scrolled events. When the
     * scrollable is scrolled, the service emits the event to its scrolled observable.
     * @param scrollable Scrollable instance to be registered.
     */
    /**
     * Registers a scrollable instance with the service and listens for its scrolled events. When the
     * scrollable is scrolled, the service emits the event to its scrolled observable.
     * @param {?} scrollable Scrollable instance to be registered.
     * @return {?}
     */
    ScrollDispatcher.prototype.register = /**
     * Registers a scrollable instance with the service and listens for its scrolled events. When the
     * scrollable is scrolled, the service emits the event to its scrolled observable.
     * @param {?} scrollable Scrollable instance to be registered.
     * @return {?}
     */
    function (scrollable) {
        var _this = this;
        if (!this.scrollContainers.has(scrollable)) {
            this.scrollContainers.set(scrollable, scrollable.elementScrolled()
                .subscribe(function () { return _this._scrolled.next(scrollable); }));
        }
    };
    /**
     * Deregisters a Scrollable reference and unsubscribes from its scroll event observable.
     * @param scrollable Scrollable instance to be deregistered.
     */
    /**
     * Deregisters a Scrollable reference and unsubscribes from its scroll event observable.
     * @param {?} scrollable Scrollable instance to be deregistered.
     * @return {?}
     */
    ScrollDispatcher.prototype.deregister = /**
     * Deregisters a Scrollable reference and unsubscribes from its scroll event observable.
     * @param {?} scrollable Scrollable instance to be deregistered.
     * @return {?}
     */
    function (scrollable) {
        /** @type {?} */
        var scrollableReference = this.scrollContainers.get(scrollable);
        if (scrollableReference) {
            scrollableReference.unsubscribe();
            this.scrollContainers.delete(scrollable);
        }
    };
    /**
     * Returns an observable that emits an event whenever any of the registered Scrollable
     * references (or window, document, or body) fire a scrolled event. Can provide a time in ms
     * to override the default "throttle" time.
     *
     * **Note:** in order to avoid hitting change detection for every scroll event,
     * all of the events emitted from this stream will be run outside the Angular zone.
     * If you need to update any data bindings as a result of a scroll event, you have
     * to run the callback using `NgZone.run`.
     */
    /**
     * Returns an observable that emits an event whenever any of the registered Scrollable
     * references (or window, document, or body) fire a scrolled event. Can provide a time in ms
     * to override the default "throttle" time.
     *
     * **Note:** in order to avoid hitting change detection for every scroll event,
     * all of the events emitted from this stream will be run outside the Angular zone.
     * If you need to update any data bindings as a result of a scroll event, you have
     * to run the callback using `NgZone.run`.
     * @param {?=} auditTimeInMs
     * @return {?}
     */
    ScrollDispatcher.prototype.scrolled = /**
     * Returns an observable that emits an event whenever any of the registered Scrollable
     * references (or window, document, or body) fire a scrolled event. Can provide a time in ms
     * to override the default "throttle" time.
     *
     * **Note:** in order to avoid hitting change detection for every scroll event,
     * all of the events emitted from this stream will be run outside the Angular zone.
     * If you need to update any data bindings as a result of a scroll event, you have
     * to run the callback using `NgZone.run`.
     * @param {?=} auditTimeInMs
     * @return {?}
     */
    function (auditTimeInMs) {
        var _this = this;
        if (auditTimeInMs === void 0) { auditTimeInMs = DEFAULT_SCROLL_TIME; }
        if (!this._platform.isBrowser) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])();
        }
        return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
            if (!_this._globalSubscription) {
                _this._addGlobalListener();
            }
            // In the case of a 0ms delay, use an observable without auditTime
            // since it does add a perceptible delay in processing overhead.
            /** @type {?} */
            var subscription = auditTimeInMs > 0 ?
                _this._scrolled.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["auditTime"])(auditTimeInMs)).subscribe(observer) :
                _this._scrolled.subscribe(observer);
            _this._scrolledCount++;
            return function () {
                subscription.unsubscribe();
                _this._scrolledCount--;
                if (!_this._scrolledCount) {
                    _this._removeGlobalListener();
                }
            };
        });
    };
    /**
     * @return {?}
     */
    ScrollDispatcher.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._removeGlobalListener();
        this.scrollContainers.forEach(function (_, container) { return _this.deregister(container); });
        this._scrolled.complete();
    };
    /**
     * Returns an observable that emits whenever any of the
     * scrollable ancestors of an element are scrolled.
     * @param elementRef Element whose ancestors to listen for.
     * @param auditTimeInMs Time to throttle the scroll events.
     */
    /**
     * Returns an observable that emits whenever any of the
     * scrollable ancestors of an element are scrolled.
     * @param {?} elementRef Element whose ancestors to listen for.
     * @param {?=} auditTimeInMs Time to throttle the scroll events.
     * @return {?}
     */
    ScrollDispatcher.prototype.ancestorScrolled = /**
     * Returns an observable that emits whenever any of the
     * scrollable ancestors of an element are scrolled.
     * @param {?} elementRef Element whose ancestors to listen for.
     * @param {?=} auditTimeInMs Time to throttle the scroll events.
     * @return {?}
     */
    function (elementRef, auditTimeInMs) {
        /** @type {?} */
        var ancestors = this.getAncestorScrollContainers(elementRef);
        return this.scrolled(auditTimeInMs).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (target) {
            return !target || ancestors.indexOf(target) > -1;
        }));
    };
    /** Returns all registered Scrollables that contain the provided element. */
    /**
     * Returns all registered Scrollables that contain the provided element.
     * @param {?} elementRef
     * @return {?}
     */
    ScrollDispatcher.prototype.getAncestorScrollContainers = /**
     * Returns all registered Scrollables that contain the provided element.
     * @param {?} elementRef
     * @return {?}
     */
    function (elementRef) {
        var _this = this;
        /** @type {?} */
        var scrollingContainers = [];
        this.scrollContainers.forEach(function (_subscription, scrollable) {
            if (_this._scrollableContainsElement(scrollable, elementRef)) {
                scrollingContainers.push(scrollable);
            }
        });
        return scrollingContainers;
    };
    /** Returns true if the element is contained within the provided Scrollable. */
    /**
     * Returns true if the element is contained within the provided Scrollable.
     * @private
     * @param {?} scrollable
     * @param {?} elementRef
     * @return {?}
     */
    ScrollDispatcher.prototype._scrollableContainsElement = /**
     * Returns true if the element is contained within the provided Scrollable.
     * @private
     * @param {?} scrollable
     * @param {?} elementRef
     * @return {?}
     */
    function (scrollable, elementRef) {
        /** @type {?} */
        var element = elementRef.nativeElement;
        /** @type {?} */
        var scrollableElement = scrollable.getElementRef().nativeElement;
        // Traverse through the element parents until we reach null, checking if any of the elements
        // are the scrollable's element.
        do {
            if (element == scrollableElement) {
                return true;
            }
        } while (element = (/** @type {?} */ (element)).parentElement);
        return false;
    };
    /** Sets up the global scroll listeners. */
    /**
     * Sets up the global scroll listeners.
     * @private
     * @return {?}
     */
    ScrollDispatcher.prototype._addGlobalListener = /**
     * Sets up the global scroll listeners.
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this._globalSubscription = this._ngZone.runOutsideAngular(function () {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(window.document, 'scroll').subscribe(function () { return _this._scrolled.next(); });
        });
    };
    /** Cleans up the global scroll listener. */
    /**
     * Cleans up the global scroll listener.
     * @private
     * @return {?}
     */
    ScrollDispatcher.prototype._removeGlobalListener = /**
     * Cleans up the global scroll listener.
     * @private
     * @return {?}
     */
    function () {
        if (this._globalSubscription) {
            this._globalSubscription.unsubscribe();
            this._globalSubscription = null;
        }
    };
    ScrollDispatcher.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{ providedIn: 'root' },] },
    ];
    /** @nocollapse */
    ScrollDispatcher.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] },
        { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"] }
    ]; };
    /** @nocollapse */ ScrollDispatcher.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["defineInjectable"])({ factory: function ScrollDispatcher_Factory() { return new ScrollDispatcher(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"])); }, token: ScrollDispatcher, providedIn: "root" });
    return ScrollDispatcher;
}());
/**
 * \@docs-private \@deprecated \@breaking-change 8.0.0
 * @param {?} parentDispatcher
 * @param {?} ngZone
 * @param {?} platform
 * @return {?}
 */
function SCROLL_DISPATCHER_PROVIDER_FACTORY(parentDispatcher, ngZone, platform) {
    return parentDispatcher || new ScrollDispatcher(ngZone, platform);
}
/**
 * \@docs-private \@deprecated \@breaking-change 8.0.0
 * @type {?}
 */
var SCROLL_DISPATCHER_PROVIDER = {
    // If there is already a ScrollDispatcher available, use that. Otherwise, provide a new one.
    provide: ScrollDispatcher,
    deps: [[new _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"](), new _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"](), ScrollDispatcher], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"]],
    useFactory: SCROLL_DISPATCHER_PROVIDER_FACTORY
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Sends an event when the directive's element is scrolled. Registers itself with the
 * ScrollDispatcher service to include itself as part of its collection of scrolling events that it
 * can be listened to through the service.
 */
var CdkScrollable = /** @class */ (function () {
    function CdkScrollable(elementRef, scrollDispatcher, ngZone, dir) {
        var _this = this;
        this.elementRef = elementRef;
        this.scrollDispatcher = scrollDispatcher;
        this.ngZone = ngZone;
        this.dir = dir;
        this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this._elementScrolled = rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
            return _this.ngZone.runOutsideAngular(function () {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(_this.elementRef.nativeElement, 'scroll').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(_this._destroyed))
                    .subscribe(observer);
            });
        });
    }
    /**
     * @return {?}
     */
    CdkScrollable.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.scrollDispatcher.register(this);
    };
    /**
     * @return {?}
     */
    CdkScrollable.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.scrollDispatcher.deregister(this);
        this._destroyed.next();
        this._destroyed.complete();
    };
    /** Returns observable that emits when a scroll event is fired on the host element. */
    /**
     * Returns observable that emits when a scroll event is fired on the host element.
     * @return {?}
     */
    CdkScrollable.prototype.elementScrolled = /**
     * Returns observable that emits when a scroll event is fired on the host element.
     * @return {?}
     */
    function () {
        return this._elementScrolled;
    };
    /** Gets the ElementRef for the viewport. */
    /**
     * Gets the ElementRef for the viewport.
     * @return {?}
     */
    CdkScrollable.prototype.getElementRef = /**
     * Gets the ElementRef for the viewport.
     * @return {?}
     */
    function () {
        return this.elementRef;
    };
    /**
     * Scrolls to the specified offsets. This is a normalized version of the browser's native scrollTo
     * method, since browsers are not consistent about what scrollLeft means in RTL. For this method
     * left and right always refer to the left and right side of the scrolling container irrespective
     * of the layout direction. start and end refer to left and right in an LTR context and vice-versa
     * in an RTL context.
     * @param options specified the offsets to scroll to.
     */
    /**
     * Scrolls to the specified offsets. This is a normalized version of the browser's native scrollTo
     * method, since browsers are not consistent about what scrollLeft means in RTL. For this method
     * left and right always refer to the left and right side of the scrolling container irrespective
     * of the layout direction. start and end refer to left and right in an LTR context and vice-versa
     * in an RTL context.
     * @param {?} options specified the offsets to scroll to.
     * @return {?}
     */
    CdkScrollable.prototype.scrollTo = /**
     * Scrolls to the specified offsets. This is a normalized version of the browser's native scrollTo
     * method, since browsers are not consistent about what scrollLeft means in RTL. For this method
     * left and right always refer to the left and right side of the scrolling container irrespective
     * of the layout direction. start and end refer to left and right in an LTR context and vice-versa
     * in an RTL context.
     * @param {?} options specified the offsets to scroll to.
     * @return {?}
     */
    function (options) {
        /** @type {?} */
        var el = this.elementRef.nativeElement;
        /** @type {?} */
        var isRtl = this.dir && this.dir.value == 'rtl';
        // Rewrite start & end offsets as right or left offsets.
        options.left = options.left == null ? (isRtl ? options.end : options.start) : options.left;
        options.right = options.right == null ? (isRtl ? options.start : options.end) : options.right;
        // Rewrite the bottom offset as a top offset.
        if (options.bottom != null) {
            options.top = el.scrollHeight - el.clientHeight - options.bottom;
        }
        // Rewrite the right offset as a left offset.
        if (isRtl && Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["getRtlScrollAxisType"])() != _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["RtlScrollAxisType"].NORMAL) {
            if (options.left != null) {
                options.right = el.scrollWidth - el.clientWidth - options.left;
            }
            if (Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["getRtlScrollAxisType"])() == _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["RtlScrollAxisType"].INVERTED) {
                options.left = options.right;
            }
            else if (Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["getRtlScrollAxisType"])() == _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["RtlScrollAxisType"].NEGATED) {
                options.left = options.right ? -options.right : options.right;
            }
        }
        else {
            if (options.right != null) {
                options.left = el.scrollWidth - el.clientWidth - options.right;
            }
        }
        this._applyScrollToOptions(options);
    };
    /**
     * @private
     * @param {?} options
     * @return {?}
     */
    CdkScrollable.prototype._applyScrollToOptions = /**
     * @private
     * @param {?} options
     * @return {?}
     */
    function (options) {
        /** @type {?} */
        var el = this.elementRef.nativeElement;
        if (Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["supportsScrollBehavior"])()) {
            el.scrollTo(options);
        }
        else {
            if (options.top != null) {
                el.scrollTop = options.top;
            }
            if (options.left != null) {
                el.scrollLeft = options.left;
            }
        }
    };
    /**
     * Measures the scroll offset relative to the specified edge of the viewport. This method can be
     * used instead of directly checking scrollLeft or scrollTop, since browsers are not consistent
     * about what scrollLeft means in RTL. The values returned by this method are normalized such that
     * left and right always refer to the left and right side of the scrolling container irrespective
     * of the layout direction. start and end refer to left and right in an LTR context and vice-versa
     * in an RTL context.
     * @param from The edge to measure from.
     */
    /**
     * Measures the scroll offset relative to the specified edge of the viewport. This method can be
     * used instead of directly checking scrollLeft or scrollTop, since browsers are not consistent
     * about what scrollLeft means in RTL. The values returned by this method are normalized such that
     * left and right always refer to the left and right side of the scrolling container irrespective
     * of the layout direction. start and end refer to left and right in an LTR context and vice-versa
     * in an RTL context.
     * @param {?} from The edge to measure from.
     * @return {?}
     */
    CdkScrollable.prototype.measureScrollOffset = /**
     * Measures the scroll offset relative to the specified edge of the viewport. This method can be
     * used instead of directly checking scrollLeft or scrollTop, since browsers are not consistent
     * about what scrollLeft means in RTL. The values returned by this method are normalized such that
     * left and right always refer to the left and right side of the scrolling container irrespective
     * of the layout direction. start and end refer to left and right in an LTR context and vice-versa
     * in an RTL context.
     * @param {?} from The edge to measure from.
     * @return {?}
     */
    function (from) {
        /** @type {?} */
        var LEFT = 'left';
        /** @type {?} */
        var RIGHT = 'right';
        /** @type {?} */
        var el = this.elementRef.nativeElement;
        if (from == 'top') {
            return el.scrollTop;
        }
        if (from == 'bottom') {
            return el.scrollHeight - el.clientHeight - el.scrollTop;
        }
        // Rewrite start & end as left or right offsets.
        /** @type {?} */
        var isRtl = this.dir && this.dir.value == 'rtl';
        if (from == 'start') {
            from = isRtl ? RIGHT : LEFT;
        }
        else if (from == 'end') {
            from = isRtl ? LEFT : RIGHT;
        }
        if (isRtl && Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["getRtlScrollAxisType"])() == _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["RtlScrollAxisType"].INVERTED) {
            // For INVERTED, scrollLeft is (scrollWidth - clientWidth) when scrolled all the way left and
            // 0 when scrolled all the way right.
            if (from == LEFT) {
                return el.scrollWidth - el.clientWidth - el.scrollLeft;
            }
            else {
                return el.scrollLeft;
            }
        }
        else if (isRtl && Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["getRtlScrollAxisType"])() == _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["RtlScrollAxisType"].NEGATED) {
            // For NEGATED, scrollLeft is -(scrollWidth - clientWidth) when scrolled all the way left and
            // 0 when scrolled all the way right.
            if (from == LEFT) {
                return el.scrollLeft + el.scrollWidth - el.clientWidth;
            }
            else {
                return -el.scrollLeft;
            }
        }
        else {
            // For NORMAL, as well as non-RTL contexts, scrollLeft is 0 when scrolled all the way left and
            // (scrollWidth - clientWidth) when scrolled all the way right.
            if (from == LEFT) {
                return el.scrollLeft;
            }
            else {
                return el.scrollWidth - el.clientWidth - el.scrollLeft;
            }
        }
    };
    CdkScrollable.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[cdk-scrollable], [cdkScrollable]'
                },] },
    ];
    /** @nocollapse */
    CdkScrollable.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
        { type: ScrollDispatcher },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] },
        { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_5__["Directionality"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }] }
    ]; };
    return CdkScrollable;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Checks if the given ranges are equal.
 * @param {?} r1
 * @param {?} r2
 * @return {?}
 */
function rangesEqual(r1, r2) {
    return r1.start == r2.start && r1.end == r2.end;
}
/**
 * A viewport that virtualizes it's scrolling with the help of `CdkVirtualForOf`.
 */
var CdkVirtualScrollViewport = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__extends"])(CdkVirtualScrollViewport, _super);
    function CdkVirtualScrollViewport(elementRef, _changeDetectorRef, ngZone, _scrollStrategy, dir, scrollDispatcher) {
        var _this = _super.call(this, elementRef, scrollDispatcher, ngZone, dir) || this;
        _this.elementRef = elementRef;
        _this._changeDetectorRef = _changeDetectorRef;
        _this._scrollStrategy = _scrollStrategy;
        /**
         * Emits when the viewport is detached from a CdkVirtualForOf.
         */
        _this._detachedSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Emits when the rendered range changes.
         */
        _this._renderedRangeSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * The direction the viewport scrolls.
         */
        _this.orientation = 'vertical';
        // Note: we don't use the typical EventEmitter here because we need to subscribe to the scroll
        // strategy lazily (i.e. only if the user is actually listening to the events). We do this because
        // depending on how the strategy calculates the scrolled index, it may come at a cost to
        // performance.
        /**
         * Emits when the index of the first element visible in the viewport changes.
         */
        _this.scrolledIndexChange = rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
            return _this._scrollStrategy.scrolledIndexChange.subscribe(function (index) {
                return Promise.resolve().then(function () { return _this.ngZone.run(function () { return observer.next(index); }); });
            });
        });
        /**
         * A stream that emits whenever the rendered range changes.
         */
        _this.renderedRangeStream = _this._renderedRangeSubject.asObservable();
        /**
         * The transform used to scale the spacer to the same size as all content, including content that
         * is not currently rendered.
         */
        _this._totalContentSizeTransform = '';
        /**
         * The total size of all content (in pixels), including content that is not currently rendered.
         */
        _this._totalContentSize = 0;
        /**
         * The currently rendered range of indices.
         */
        _this._renderedRange = { start: 0, end: 0 };
        /**
         * The length of the data bound to this viewport (in number of items).
         */
        _this._dataLength = 0;
        /**
         * The size of the viewport (in pixels).
         */
        _this._viewportSize = 0;
        /**
         * The last rendered content offset that was set.
         */
        _this._renderedContentOffset = 0;
        /**
         * Whether the last rendered content offset was to the end of the content (and therefore needs to
         * be rewritten as an offset to the start of the content).
         */
        _this._renderedContentOffsetNeedsRewrite = false;
        /**
         * Whether there is a pending change detection cycle.
         */
        _this._isChangeDetectionPending = false;
        /**
         * A list of functions to run after the next change detection cycle.
         */
        _this._runAfterChangeDetection = [];
        if (!_scrollStrategy) {
            throw Error('Error: cdk-virtual-scroll-viewport requires the "itemSize" property to be set.');
        }
        return _this;
    }
    /**
     * @return {?}
     */
    CdkVirtualScrollViewport.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        _super.prototype.ngOnInit.call(this);
        // It's still too early to measure the viewport at this point. Deferring with a promise allows
        // the Viewport to be rendered with the correct size before we measure. We run this outside the
        // zone to avoid causing more change detection cycles. We handle the change detection loop
        // ourselves instead.
        this.ngZone.runOutsideAngular(function () { return Promise.resolve().then(function () {
            _this._measureViewportSize();
            _this._scrollStrategy.attach(_this);
            _this.elementScrolled()
                .pipe(
            // Start off with a fake scroll event so we properly detect our initial position.
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])((/** @type {?} */ (null))), 
            // Collect multiple events into one until the next animation frame. This way if
            // there are multiple scroll events in the same frame we only need to recheck
            // our layout once.
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["auditTime"])(0, rxjs__WEBPACK_IMPORTED_MODULE_2__["animationFrameScheduler"]))
                .subscribe(function () { return _this._scrollStrategy.onContentScrolled(); });
            _this._markChangeDetectionNeeded();
        }); });
    };
    /**
     * @return {?}
     */
    CdkVirtualScrollViewport.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.detach();
        this._scrollStrategy.detach();
        // Complete all subjects
        this._renderedRangeSubject.complete();
        this._detachedSubject.complete();
        _super.prototype.ngOnDestroy.call(this);
    };
    /** Attaches a `CdkVirtualForOf` to this viewport. */
    /**
     * Attaches a `CdkVirtualForOf` to this viewport.
     * @param {?} forOf
     * @return {?}
     */
    CdkVirtualScrollViewport.prototype.attach = /**
     * Attaches a `CdkVirtualForOf` to this viewport.
     * @param {?} forOf
     * @return {?}
     */
    function (forOf) {
        var _this = this;
        if (this._forOf) {
            throw Error('CdkVirtualScrollViewport is already attached.');
        }
        // Subscribe to the data stream of the CdkVirtualForOf to keep track of when the data length
        // changes. Run outside the zone to avoid triggering change detection, since we're managing the
        // change detection loop ourselves.
        this.ngZone.runOutsideAngular(function () {
            _this._forOf = forOf;
            _this._forOf.dataStream.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(_this._detachedSubject)).subscribe(function (data) {
                /** @type {?} */
                var newLength = data.length;
                if (newLength !== _this._dataLength) {
                    _this._dataLength = newLength;
                    _this._scrollStrategy.onDataLengthChanged();
                }
                _this._doChangeDetection();
            });
        });
    };
    /** Detaches the current `CdkVirtualForOf`. */
    /**
     * Detaches the current `CdkVirtualForOf`.
     * @return {?}
     */
    CdkVirtualScrollViewport.prototype.detach = /**
     * Detaches the current `CdkVirtualForOf`.
     * @return {?}
     */
    function () {
        this._forOf = null;
        this._detachedSubject.next();
    };
    /** Gets the length of the data bound to this viewport (in number of items). */
    /**
     * Gets the length of the data bound to this viewport (in number of items).
     * @return {?}
     */
    CdkVirtualScrollViewport.prototype.getDataLength = /**
     * Gets the length of the data bound to this viewport (in number of items).
     * @return {?}
     */
    function () {
        return this._dataLength;
    };
    /** Gets the size of the viewport (in pixels). */
    /**
     * Gets the size of the viewport (in pixels).
     * @return {?}
     */
    CdkVirtualScrollViewport.prototype.getViewportSize = /**
     * Gets the size of the viewport (in pixels).
     * @return {?}
     */
    function () {
        return this._viewportSize;
    };
    // TODO(mmalerba): This is technically out of sync with what's really rendered until a render
    // cycle happens. I'm being careful to only call it after the render cycle is complete and before
    // setting it to something else, but its error prone and should probably be split into
    // `pendingRange` and `renderedRange`, the latter reflecting whats actually in the DOM.
    /** Get the current rendered range of items. */
    // TODO(mmalerba): This is technically out of sync with what's really rendered until a render
    // cycle happens. I'm being careful to only call it after the render cycle is complete and before
    // setting it to something else, but its error prone and should probably be split into
    // `pendingRange` and `renderedRange`, the latter reflecting whats actually in the DOM.
    /**
     * Get the current rendered range of items.
     * @return {?}
     */
    CdkVirtualScrollViewport.prototype.getRenderedRange = 
    // TODO(mmalerba): This is technically out of sync with what's really rendered until a render
    // cycle happens. I'm being careful to only call it after the render cycle is complete and before
    // setting it to something else, but its error prone and should probably be split into
    // `pendingRange` and `renderedRange`, the latter reflecting whats actually in the DOM.
    /**
     * Get the current rendered range of items.
     * @return {?}
     */
    function () {
        return this._renderedRange;
    };
    /**
     * Sets the total size of all content (in pixels), including content that is not currently
     * rendered.
     */
    /**
     * Sets the total size of all content (in pixels), including content that is not currently
     * rendered.
     * @param {?} size
     * @return {?}
     */
    CdkVirtualScrollViewport.prototype.setTotalContentSize = /**
     * Sets the total size of all content (in pixels), including content that is not currently
     * rendered.
     * @param {?} size
     * @return {?}
     */
    function (size) {
        if (this._totalContentSize !== size) {
            this._totalContentSize = size;
            /** @type {?} */
            var axis = this.orientation == 'horizontal' ? 'X' : 'Y';
            this._totalContentSizeTransform = "scale" + axis + "(" + this._totalContentSize + ")";
            this._markChangeDetectionNeeded();
        }
    };
    /** Sets the currently rendered range of indices. */
    /**
     * Sets the currently rendered range of indices.
     * @param {?} range
     * @return {?}
     */
    CdkVirtualScrollViewport.prototype.setRenderedRange = /**
     * Sets the currently rendered range of indices.
     * @param {?} range
     * @return {?}
     */
    function (range) {
        var _this = this;
        if (!rangesEqual(this._renderedRange, range)) {
            this._renderedRangeSubject.next(this._renderedRange = range);
            this._markChangeDetectionNeeded(function () { return _this._scrollStrategy.onContentRendered(); });
        }
    };
    /**
     * Gets the offset from the start of the viewport to the start of the rendered data (in pixels).
     */
    /**
     * Gets the offset from the start of the viewport to the start of the rendered data (in pixels).
     * @return {?}
     */
    CdkVirtualScrollViewport.prototype.getOffsetToRenderedContentStart = /**
     * Gets the offset from the start of the viewport to the start of the rendered data (in pixels).
     * @return {?}
     */
    function () {
        return this._renderedContentOffsetNeedsRewrite ? null : this._renderedContentOffset;
    };
    /**
     * Sets the offset from the start of the viewport to either the start or end of the rendered data
     * (in pixels).
     */
    /**
     * Sets the offset from the start of the viewport to either the start or end of the rendered data
     * (in pixels).
     * @param {?} offset
     * @param {?=} to
     * @return {?}
     */
    CdkVirtualScrollViewport.prototype.setRenderedContentOffset = /**
     * Sets the offset from the start of the viewport to either the start or end of the rendered data
     * (in pixels).
     * @param {?} offset
     * @param {?=} to
     * @return {?}
     */
    function (offset, to) {
        var _this = this;
        if (to === void 0) { to = 'to-start'; }
        // For a horizontal viewport in a right-to-left language we need to translate along the x-axis
        // in the negative direction.
        /** @type {?} */
        var isRtl = this.dir && this.dir.value == 'rtl';
        /** @type {?} */
        var isHorizontal = this.orientation == 'horizontal';
        /** @type {?} */
        var axis = isHorizontal ? 'X' : 'Y';
        /** @type {?} */
        var axisDirection = isHorizontal && isRtl ? -1 : 1;
        /** @type {?} */
        var transform = "translate" + axis + "(" + Number(axisDirection * offset) + "px)";
        this._renderedContentOffset = offset;
        if (to === 'to-end') {
            transform += " translate" + axis + "(-100%)";
            // The viewport should rewrite this as a `to-start` offset on the next render cycle. Otherwise
            // elements will appear to expand in the wrong direction (e.g. `mat-expansion-panel` would
            // expand upward).
            this._renderedContentOffsetNeedsRewrite = true;
        }
        if (this._renderedContentTransform != transform) {
            // We know this value is safe because we parse `offset` with `Number()` before passing it
            // into the string.
            this._renderedContentTransform = transform;
            this._markChangeDetectionNeeded(function () {
                if (_this._renderedContentOffsetNeedsRewrite) {
                    _this._renderedContentOffset -= _this.measureRenderedContentSize();
                    _this._renderedContentOffsetNeedsRewrite = false;
                    _this.setRenderedContentOffset(_this._renderedContentOffset);
                }
                else {
                    _this._scrollStrategy.onRenderedOffsetChanged();
                }
            });
        }
    };
    /**
     * Scrolls to the given offset from the start of the viewport. Please note that this is not always
     * the same as setting `scrollTop` or `scrollLeft`. In a horizontal viewport with right-to-left
     * direction, this would be the equivalent of setting a fictional `scrollRight` property.
     * @param offset The offset to scroll to.
     * @param behavior The ScrollBehavior to use when scrolling. Default is behavior is `auto`.
     */
    /**
     * Scrolls to the given offset from the start of the viewport. Please note that this is not always
     * the same as setting `scrollTop` or `scrollLeft`. In a horizontal viewport with right-to-left
     * direction, this would be the equivalent of setting a fictional `scrollRight` property.
     * @param {?} offset The offset to scroll to.
     * @param {?=} behavior The ScrollBehavior to use when scrolling. Default is behavior is `auto`.
     * @return {?}
     */
    CdkVirtualScrollViewport.prototype.scrollToOffset = /**
     * Scrolls to the given offset from the start of the viewport. Please note that this is not always
     * the same as setting `scrollTop` or `scrollLeft`. In a horizontal viewport with right-to-left
     * direction, this would be the equivalent of setting a fictional `scrollRight` property.
     * @param {?} offset The offset to scroll to.
     * @param {?=} behavior The ScrollBehavior to use when scrolling. Default is behavior is `auto`.
     * @return {?}
     */
    function (offset, behavior) {
        if (behavior === void 0) { behavior = 'auto'; }
        /** @type {?} */
        var options = { behavior: behavior };
        if (this.orientation === 'horizontal') {
            options.start = offset;
        }
        else {
            options.top = offset;
        }
        this.scrollTo(options);
    };
    /**
     * Scrolls to the offset for the given index.
     * @param index The index of the element to scroll to.
     * @param behavior The ScrollBehavior to use when scrolling. Default is behavior is `auto`.
     */
    /**
     * Scrolls to the offset for the given index.
     * @param {?} index The index of the element to scroll to.
     * @param {?=} behavior The ScrollBehavior to use when scrolling. Default is behavior is `auto`.
     * @return {?}
     */
    CdkVirtualScrollViewport.prototype.scrollToIndex = /**
     * Scrolls to the offset for the given index.
     * @param {?} index The index of the element to scroll to.
     * @param {?=} behavior The ScrollBehavior to use when scrolling. Default is behavior is `auto`.
     * @return {?}
     */
    function (index, behavior) {
        if (behavior === void 0) { behavior = 'auto'; }
        this._scrollStrategy.scrollToIndex(index, behavior);
    };
    /**
     * Gets the current scroll offset from the start of the viewport (in pixels).
     * @param from The edge to measure the offset from. Defaults to 'top' in vertical mode and 'start'
     *     in horizontal mode.
     */
    /**
     * Gets the current scroll offset from the start of the viewport (in pixels).
     * @param {?=} from The edge to measure the offset from. Defaults to 'top' in vertical mode and 'start'
     *     in horizontal mode.
     * @return {?}
     */
    CdkVirtualScrollViewport.prototype.measureScrollOffset = /**
     * Gets the current scroll offset from the start of the viewport (in pixels).
     * @param {?=} from The edge to measure the offset from. Defaults to 'top' in vertical mode and 'start'
     *     in horizontal mode.
     * @return {?}
     */
    function (from) {
        return _super.prototype.measureScrollOffset.call(this, from ? from : this.orientation === 'horizontal' ? 'start' : 'top');
    };
    /** Measure the combined size of all of the rendered items. */
    /**
     * Measure the combined size of all of the rendered items.
     * @return {?}
     */
    CdkVirtualScrollViewport.prototype.measureRenderedContentSize = /**
     * Measure the combined size of all of the rendered items.
     * @return {?}
     */
    function () {
        /** @type {?} */
        var contentEl = this._contentWrapper.nativeElement;
        return this.orientation === 'horizontal' ? contentEl.offsetWidth : contentEl.offsetHeight;
    };
    /**
     * Measure the total combined size of the given range. Throws if the range includes items that are
     * not rendered.
     */
    /**
     * Measure the total combined size of the given range. Throws if the range includes items that are
     * not rendered.
     * @param {?} range
     * @return {?}
     */
    CdkVirtualScrollViewport.prototype.measureRangeSize = /**
     * Measure the total combined size of the given range. Throws if the range includes items that are
     * not rendered.
     * @param {?} range
     * @return {?}
     */
    function (range) {
        if (!this._forOf) {
            return 0;
        }
        return this._forOf.measureRangeSize(range, this.orientation);
    };
    /** Update the viewport dimensions and re-render. */
    /**
     * Update the viewport dimensions and re-render.
     * @return {?}
     */
    CdkVirtualScrollViewport.prototype.checkViewportSize = /**
     * Update the viewport dimensions and re-render.
     * @return {?}
     */
    function () {
        // TODO: Cleanup later when add logic for handling content resize
        this._measureViewportSize();
        this._scrollStrategy.onDataLengthChanged();
    };
    /** Measure the viewport size. */
    /**
     * Measure the viewport size.
     * @private
     * @return {?}
     */
    CdkVirtualScrollViewport.prototype._measureViewportSize = /**
     * Measure the viewport size.
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var viewportEl = this.elementRef.nativeElement;
        this._viewportSize = this.orientation === 'horizontal' ?
            viewportEl.clientWidth : viewportEl.clientHeight;
    };
    /** Queue up change detection to run. */
    /**
     * Queue up change detection to run.
     * @private
     * @param {?=} runAfter
     * @return {?}
     */
    CdkVirtualScrollViewport.prototype._markChangeDetectionNeeded = /**
     * Queue up change detection to run.
     * @private
     * @param {?=} runAfter
     * @return {?}
     */
    function (runAfter) {
        var _this = this;
        if (runAfter) {
            this._runAfterChangeDetection.push(runAfter);
        }
        // Use a Promise to batch together calls to `_doChangeDetection`. This way if we set a bunch of
        // properties sequentially we only have to run `_doChangeDetection` once at the end.
        if (!this._isChangeDetectionPending) {
            this._isChangeDetectionPending = true;
            this.ngZone.runOutsideAngular(function () { return Promise.resolve().then(function () {
                _this._doChangeDetection();
            }); });
        }
    };
    /** Run change detection. */
    /**
     * Run change detection.
     * @private
     * @return {?}
     */
    CdkVirtualScrollViewport.prototype._doChangeDetection = /**
     * Run change detection.
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this._isChangeDetectionPending = false;
        // Apply changes to Angular bindings. Note: We must call `markForCheck` to run change detection
        // from the root, since the repeated items are content projected in. Calling `detectChanges`
        // instead does not properly check the projected content.
        this.ngZone.run(function () { return _this._changeDetectorRef.markForCheck(); });
        // Apply the content transform. The transform can't be set via an Angular binding because
        // bypassSecurityTrustStyle is banned in Google. However the value is safe, it's composed of
        // string literals, a variable that can only be 'X' or 'Y', and user input that is run through
        // the `Number` function first to coerce it to a numeric value.
        this._contentWrapper.nativeElement.style.transform = this._renderedContentTransform;
        /** @type {?} */
        var runAfterChangeDetection = this._runAfterChangeDetection;
        this._runAfterChangeDetection = [];
        for (var _i = 0, runAfterChangeDetection_1 = runAfterChangeDetection; _i < runAfterChangeDetection_1.length; _i++) {
            var fn = runAfterChangeDetection_1[_i];
            fn();
        }
    };
    CdkVirtualScrollViewport.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{selector: 'cdk-virtual-scroll-viewport',
                    template: "<div #contentWrapper class=\"cdk-virtual-scroll-content-wrapper\"><ng-content></ng-content></div><div class=\"cdk-virtual-scroll-spacer\" [style.transform]=\"_totalContentSizeTransform\"></div>",
                    styles: ["cdk-virtual-scroll-viewport{display:block;position:relative;overflow:auto;contain:strict;transform:translateZ(0);will-change:scroll-position;-webkit-overflow-scrolling:touch}.cdk-virtual-scroll-content-wrapper{position:absolute;top:0;left:0;contain:content}[dir=rtl] .cdk-virtual-scroll-content-wrapper{right:0;left:auto}.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper{min-height:100%}.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>dl:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>ol:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>table:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>ul:not([cdkVirtualFor]){padding-left:0;padding-right:0;margin-left:0;margin-right:0;border-left-width:0;border-right-width:0;outline:0}.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper{min-width:100%}.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>dl:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>ol:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>table:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>ul:not([cdkVirtualFor]){padding-top:0;padding-bottom:0;margin-top:0;margin-bottom:0;border-top-width:0;border-bottom-width:0;outline:0}.cdk-virtual-scroll-spacer{position:absolute;top:0;left:0;height:1px;width:1px;transform-origin:0 0}[dir=rtl] .cdk-virtual-scroll-spacer{right:0;left:auto;transform-origin:100% 0}"],
                    host: {
                        'class': 'cdk-virtual-scroll-viewport',
                        '[class.cdk-virtual-scroll-orientation-horizontal]': 'orientation === "horizontal"',
                        '[class.cdk-virtual-scroll-orientation-vertical]': 'orientation !== "horizontal"',
                    },
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                    providers: [{
                            provide: CdkScrollable,
                            useExisting: CdkVirtualScrollViewport,
                        }]
                },] },
    ];
    /** @nocollapse */
    CdkVirtualScrollViewport.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [VIRTUAL_SCROLL_STRATEGY,] }] },
        { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_5__["Directionality"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }] },
        { type: ScrollDispatcher }
    ]; };
    CdkVirtualScrollViewport.propDecorators = {
        orientation: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        scrolledIndexChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        _contentWrapper: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['contentWrapper',] }]
    };
    return CdkVirtualScrollViewport;
}(CdkScrollable));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Helper to extract size from a DOM Node.
 * @param {?} orientation
 * @param {?} node
 * @return {?}
 */
function getSize(orientation, node) {
    /** @type {?} */
    var el = (/** @type {?} */ (node));
    if (!el.getBoundingClientRect) {
        return 0;
    }
    /** @type {?} */
    var rect = el.getBoundingClientRect();
    return orientation == 'horizontal' ? rect.width : rect.height;
}
/**
 * A directive similar to `ngForOf` to be used for rendering data inside a virtual scrolling
 * container.
 * @template T
 */
var CdkVirtualForOf = /** @class */ (function () {
    function CdkVirtualForOf(_viewContainerRef, _template, _differs, _viewport, ngZone) {
        var _this = this;
        this._viewContainerRef = _viewContainerRef;
        this._template = _template;
        this._differs = _differs;
        this._viewport = _viewport;
        /**
         * Emits when the rendered view of the data changes.
         */
        this.viewChange = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Subject that emits when a new DataSource instance is given.
         */
        this._dataSourceChanges = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * The size of the cache used to store templates that are not being used for re-use later.
         * Setting the cache size to `0` will disable caching. Defaults to 20 templates.
         */
        this.cdkVirtualForTemplateCacheSize = 20;
        /**
         * Emits whenever the data in the current DataSource changes.
         */
        this.dataStream = this._dataSourceChanges
            .pipe(
        // Start off with null `DataSource`.
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])((/** @type {?} */ (null))), 
        // Bundle up the previous and current data sources so we can work with both.
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["pairwise"])(), 
        // Use `_changeDataSource` to disconnect from the previous data source and connect to the
        // new one, passing back a stream of data changes which we run through `switchMap` to give
        // us a data stream that emits the latest data from whatever the current `DataSource` is.
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (_a) {
            var prev = _a[0], cur = _a[1];
            return _this._changeDataSource(prev, cur);
        }), 
        // Replay the last emitted data when someone subscribes.
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["shareReplay"])(1));
        /**
         * The differ used to calculate changes to the data.
         */
        this._differ = null;
        /**
         * The template cache used to hold on ot template instancess that have been stamped out, but don't
         * currently need to be rendered. These instances will be reused in the future rather than
         * stamping out brand new ones.
         */
        this._templateCache = [];
        /**
         * Whether the rendered data should be updated during the next ngDoCheck cycle.
         */
        this._needsUpdate = false;
        this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.dataStream.subscribe(function (data) {
            _this._data = data;
            _this._onRenderedDataChange();
        });
        this._viewport.renderedRangeStream.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._destroyed)).subscribe(function (range) {
            _this._renderedRange = range;
            ngZone.run(function () { return _this.viewChange.next(_this._renderedRange); });
            _this._onRenderedDataChange();
        });
        this._viewport.attach(this);
    }
    Object.defineProperty(CdkVirtualForOf.prototype, "cdkVirtualForOf", {
        /** The DataSource to display. */
        get: /**
         * The DataSource to display.
         * @return {?}
         */
        function () {
            return this._cdkVirtualForOf;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._cdkVirtualForOf = value;
            /** @type {?} */
            var ds = value instanceof _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_7__["DataSource"] ? value :
                // Slice the value if its an NgIterable to ensure we're working with an array.
                new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_7__["ArrayDataSource"](value instanceof rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"] ? value : Array.prototype.slice.call(value || []));
            this._dataSourceChanges.next(ds);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CdkVirtualForOf.prototype, "cdkVirtualForTrackBy", {
        /**
         * The `TrackByFunction` to use for tracking changes. The `TrackByFunction` takes the index and
         * the item and produces a value to be used as the item's identity when tracking changes.
         */
        get: /**
         * The `TrackByFunction` to use for tracking changes. The `TrackByFunction` takes the index and
         * the item and produces a value to be used as the item's identity when tracking changes.
         * @return {?}
         */
        function () {
            return this._cdkVirtualForTrackBy;
        },
        set: /**
         * @param {?} fn
         * @return {?}
         */
        function (fn) {
            var _this = this;
            this._needsUpdate = true;
            this._cdkVirtualForTrackBy = fn ?
                function (index, item) { return fn(index + (_this._renderedRange ? _this._renderedRange.start : 0), item); } :
                undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CdkVirtualForOf.prototype, "cdkVirtualForTemplate", {
        /** The template used to stamp out new elements. */
        set: /**
         * The template used to stamp out new elements.
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value) {
                this._needsUpdate = true;
                this._template = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Measures the combined size (width for horizontal orientation, height for vertical) of all items
     * in the specified range. Throws an error if the range includes items that are not currently
     * rendered.
     */
    /**
     * Measures the combined size (width for horizontal orientation, height for vertical) of all items
     * in the specified range. Throws an error if the range includes items that are not currently
     * rendered.
     * @param {?} range
     * @param {?} orientation
     * @return {?}
     */
    CdkVirtualForOf.prototype.measureRangeSize = /**
     * Measures the combined size (width for horizontal orientation, height for vertical) of all items
     * in the specified range. Throws an error if the range includes items that are not currently
     * rendered.
     * @param {?} range
     * @param {?} orientation
     * @return {?}
     */
    function (range, orientation) {
        if (range.start >= range.end) {
            return 0;
        }
        if (range.start < this._renderedRange.start || range.end > this._renderedRange.end) {
            throw Error("Error: attempted to measure an item that isn't rendered.");
        }
        // The index into the list of rendered views for the first item in the range.
        /** @type {?} */
        var renderedStartIndex = range.start - this._renderedRange.start;
        // The length of the range we're measuring.
        /** @type {?} */
        var rangeLen = range.end - range.start;
        // Loop over all root nodes for all items in the range and sum up their size.
        /** @type {?} */
        var totalSize = 0;
        /** @type {?} */
        var i = rangeLen;
        while (i--) {
            /** @type {?} */
            var view = (/** @type {?} */ (this._viewContainerRef.get(i + renderedStartIndex)));
            /** @type {?} */
            var j = view ? view.rootNodes.length : 0;
            while (j--) {
                totalSize += getSize(orientation, (/** @type {?} */ (view)).rootNodes[j]);
            }
        }
        return totalSize;
    };
    /**
     * @return {?}
     */
    CdkVirtualForOf.prototype.ngDoCheck = /**
     * @return {?}
     */
    function () {
        if (this._differ && this._needsUpdate) {
            // TODO(mmalerba): We should differentiate needs update due to scrolling and a new portion of
            // this list being rendered (can use simpler algorithm) vs needs update due to data actually
            // changing (need to do this diff).
            /** @type {?} */
            var changes = this._differ.diff(this._renderedItems);
            if (!changes) {
                this._updateContext();
            }
            else {
                this._applyChanges(changes);
            }
            this._needsUpdate = false;
        }
    };
    /**
     * @return {?}
     */
    CdkVirtualForOf.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._viewport.detach();
        this._dataSourceChanges.complete();
        this.viewChange.complete();
        this._destroyed.next();
        this._destroyed.complete();
        for (var _i = 0, _a = this._templateCache; _i < _a.length; _i++) {
            var view = _a[_i];
            view.destroy();
        }
    };
    /** React to scroll state changes in the viewport. */
    /**
     * React to scroll state changes in the viewport.
     * @private
     * @return {?}
     */
    CdkVirtualForOf.prototype._onRenderedDataChange = /**
     * React to scroll state changes in the viewport.
     * @private
     * @return {?}
     */
    function () {
        if (!this._renderedRange) {
            return;
        }
        this._renderedItems = this._data.slice(this._renderedRange.start, this._renderedRange.end);
        if (!this._differ) {
            this._differ = this._differs.find(this._renderedItems).create(this.cdkVirtualForTrackBy);
        }
        this._needsUpdate = true;
    };
    /** Swap out one `DataSource` for another. */
    /**
     * Swap out one `DataSource` for another.
     * @private
     * @param {?} oldDs
     * @param {?} newDs
     * @return {?}
     */
    CdkVirtualForOf.prototype._changeDataSource = /**
     * Swap out one `DataSource` for another.
     * @private
     * @param {?} oldDs
     * @param {?} newDs
     * @return {?}
     */
    function (oldDs, newDs) {
        if (oldDs) {
            oldDs.disconnect(this);
        }
        this._needsUpdate = true;
        return newDs.connect(this);
    };
    /** Update the `CdkVirtualForOfContext` for all views. */
    /**
     * Update the `CdkVirtualForOfContext` for all views.
     * @private
     * @return {?}
     */
    CdkVirtualForOf.prototype._updateContext = /**
     * Update the `CdkVirtualForOfContext` for all views.
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var count = this._data.length;
        /** @type {?} */
        var i = this._viewContainerRef.length;
        while (i--) {
            /** @type {?} */
            var view = (/** @type {?} */ (this._viewContainerRef.get(i)));
            view.context.index = this._renderedRange.start + i;
            view.context.count = count;
            this._updateComputedContextProperties(view.context);
            view.detectChanges();
        }
    };
    /** Apply changes to the DOM. */
    /**
     * Apply changes to the DOM.
     * @private
     * @param {?} changes
     * @return {?}
     */
    CdkVirtualForOf.prototype._applyChanges = /**
     * Apply changes to the DOM.
     * @private
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        var _this = this;
        // Rearrange the views to put them in the right location.
        changes.forEachOperation(function (record, adjustedPreviousIndex, currentIndex) {
            if (record.previousIndex == null) { // Item added.
                // Item added.
                /** @type {?} */
                var view = _this._getViewForNewItem();
                _this._viewContainerRef.insert(view, (/** @type {?} */ (currentIndex)));
                view.context.$implicit = record.item;
            }
            else if (currentIndex == null) { // Item removed.
                _this._cacheView((/** @type {?} */ (_this._viewContainerRef.detach((/** @type {?} */ (adjustedPreviousIndex))))));
            }
            else { // Item moved.
                // Item moved.
                /** @type {?} */
                var view = (/** @type {?} */ (_this._viewContainerRef.get((/** @type {?} */ (adjustedPreviousIndex)))));
                _this._viewContainerRef.move(view, currentIndex);
                view.context.$implicit = record.item;
            }
        });
        // Update $implicit for any items that had an identity change.
        changes.forEachIdentityChange(function (record) {
            /** @type {?} */
            var view = (/** @type {?} */ (_this._viewContainerRef.get((/** @type {?} */ (record.currentIndex)))));
            view.context.$implicit = record.item;
        });
        // Update the context variables on all items.
        /** @type {?} */
        var count = this._data.length;
        /** @type {?} */
        var i = this._viewContainerRef.length;
        while (i--) {
            /** @type {?} */
            var view = (/** @type {?} */ (this._viewContainerRef.get(i)));
            view.context.index = this._renderedRange.start + i;
            view.context.count = count;
            this._updateComputedContextProperties(view.context);
        }
    };
    /** Cache the given detached view. */
    /**
     * Cache the given detached view.
     * @private
     * @param {?} view
     * @return {?}
     */
    CdkVirtualForOf.prototype._cacheView = /**
     * Cache the given detached view.
     * @private
     * @param {?} view
     * @return {?}
     */
    function (view) {
        if (this._templateCache.length < this.cdkVirtualForTemplateCacheSize) {
            this._templateCache.push(view);
        }
        else {
            /** @type {?} */
            var index = this._viewContainerRef.indexOf(view);
            // It's very unlikely that the index will ever be -1, but just in case,
            // destroy the view on its own, otherwise destroy it through the
            // container to ensure that all the references are removed.
            if (index === -1) {
                view.destroy();
            }
            else {
                this._viewContainerRef.remove(index);
            }
        }
    };
    /** Get a view for a new item, either from the cache or by creating a new one. */
    /**
     * Get a view for a new item, either from the cache or by creating a new one.
     * @private
     * @return {?}
     */
    CdkVirtualForOf.prototype._getViewForNewItem = /**
     * Get a view for a new item, either from the cache or by creating a new one.
     * @private
     * @return {?}
     */
    function () {
        return this._templateCache.pop() || this._viewContainerRef.createEmbeddedView(this._template, {
            $implicit: (/** @type {?} */ (null)),
            cdkVirtualForOf: this._cdkVirtualForOf,
            index: -1,
            count: -1,
            first: false,
            last: false,
            odd: false,
            even: false
        });
    };
    /** Update the computed properties on the `CdkVirtualForOfContext`. */
    /**
     * Update the computed properties on the `CdkVirtualForOfContext`.
     * @private
     * @param {?} context
     * @return {?}
     */
    CdkVirtualForOf.prototype._updateComputedContextProperties = /**
     * Update the computed properties on the `CdkVirtualForOfContext`.
     * @private
     * @param {?} context
     * @return {?}
     */
    function (context) {
        context.first = context.index === 0;
        context.last = context.index === context.count - 1;
        context.even = context.index % 2 === 0;
        context.odd = !context.even;
    };
    CdkVirtualForOf.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[cdkVirtualFor][cdkVirtualForOf]',
                },] },
    ];
    /** @nocollapse */
    CdkVirtualForOf.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"] },
        { type: CdkVirtualScrollViewport, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"] }] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }
    ]; };
    CdkVirtualForOf.propDecorators = {
        cdkVirtualForOf: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        cdkVirtualForTrackBy: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        cdkVirtualForTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        cdkVirtualForTemplateCacheSize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
    };
    return CdkVirtualForOf;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ScrollingModule = /** @class */ (function () {
    function ScrollingModule() {
    }
    ScrollingModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_5__["BidiModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["PlatformModule"]],
                    exports: [
                        _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_5__["BidiModule"],
                        CdkFixedSizeVirtualScroll,
                        CdkScrollable,
                        CdkVirtualForOf,
                        CdkVirtualScrollViewport,
                    ],
                    declarations: [
                        CdkFixedSizeVirtualScroll,
                        CdkScrollable,
                        CdkVirtualForOf,
                        CdkVirtualScrollViewport,
                    ],
                },] },
    ];
    return ScrollingModule;
}());
/**
 * @deprecated ScrollDispatchModule has been renamed to ScrollingModule.
 * \@breaking-change 8.0.0 delete this alias
 */
var ScrollDispatchModule = /** @class */ (function () {
    function ScrollDispatchModule() {
    }
    ScrollDispatchModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [ScrollingModule],
                    exports: [ScrollingModule],
                },] },
    ];
    return ScrollDispatchModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Time in ms to throttle the resize events by default.
 * @type {?}
 */
var DEFAULT_RESIZE_TIME = 20;
/**
 * Simple utility for getting the bounds of the browser viewport.
 * \@docs-private
 */
var ViewportRuler = /** @class */ (function () {
    function ViewportRuler(_platform, ngZone) {
        var _this = this;
        this._platform = _platform;
        ngZone.runOutsideAngular(function () {
            _this._change = _platform.isBrowser ?
                Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(window, 'resize'), Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(window, 'orientationchange')) :
                Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])();
            // Note that we need to do the subscription inside `runOutsideAngular`
            // since subscribing is what causes the event listener to be added.
            _this._invalidateCache = _this.change().subscribe(function () { return _this._updateViewportSize(); });
        });
    }
    /**
     * @return {?}
     */
    ViewportRuler.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._invalidateCache.unsubscribe();
    };
    /** Returns the viewport's width and height. */
    /**
     * Returns the viewport's width and height.
     * @return {?}
     */
    ViewportRuler.prototype.getViewportSize = /**
     * Returns the viewport's width and height.
     * @return {?}
     */
    function () {
        if (!this._viewportSize) {
            this._updateViewportSize();
        }
        /** @type {?} */
        var output = { width: this._viewportSize.width, height: this._viewportSize.height };
        // If we're not on a browser, don't cache the size since it'll be mocked out anyway.
        if (!this._platform.isBrowser) {
            this._viewportSize = (/** @type {?} */ (null));
        }
        return output;
    };
    /** Gets a ClientRect for the viewport's bounds. */
    /**
     * Gets a ClientRect for the viewport's bounds.
     * @return {?}
     */
    ViewportRuler.prototype.getViewportRect = /**
     * Gets a ClientRect for the viewport's bounds.
     * @return {?}
     */
    function () {
        // Use the document element's bounding rect rather than the window scroll properties
        // (e.g. pageYOffset, scrollY) due to in issue in Chrome and IE where window scroll
        // properties and client coordinates (boundingClientRect, clientX/Y, etc.) are in different
        // conceptual viewports. Under most circumstances these viewports are equivalent, but they
        // can disagree when the page is pinch-zoomed (on devices that support touch).
        // See https://bugs.chromium.org/p/chromium/issues/detail?id=489206#c4
        // We use the documentElement instead of the body because, by default (without a css reset)
        // browsers typically give the document body an 8px margin, which is not included in
        // getBoundingClientRect().
        /** @type {?} */
        var scrollPosition = this.getViewportScrollPosition();
        var _a = this.getViewportSize(), width = _a.width, height = _a.height;
        return {
            top: scrollPosition.top,
            left: scrollPosition.left,
            bottom: scrollPosition.top + height,
            right: scrollPosition.left + width,
            height: height,
            width: width,
        };
    };
    /** Gets the (top, left) scroll position of the viewport. */
    /**
     * Gets the (top, left) scroll position of the viewport.
     * @return {?}
     */
    ViewportRuler.prototype.getViewportScrollPosition = /**
     * Gets the (top, left) scroll position of the viewport.
     * @return {?}
     */
    function () {
        // While we can get a reference to the fake document
        // during SSR, it doesn't have getBoundingClientRect.
        if (!this._platform.isBrowser) {
            return { top: 0, left: 0 };
        }
        // The top-left-corner of the viewport is determined by the scroll position of the document
        // body, normally just (scrollLeft, scrollTop). However, Chrome and Firefox disagree about
        // whether `document.body` or `document.documentElement` is the scrolled element, so reading
        // `scrollTop` and `scrollLeft` is inconsistent. However, using the bounding rect of
        // `document.documentElement` works consistently, where the `top` and `left` values will
        // equal negative the scroll position.
        /** @type {?} */
        var documentElement = (/** @type {?} */ (document.documentElement));
        /** @type {?} */
        var documentRect = documentElement.getBoundingClientRect();
        /** @type {?} */
        var top = -documentRect.top || document.body.scrollTop || window.scrollY ||
            documentElement.scrollTop || 0;
        /** @type {?} */
        var left = -documentRect.left || document.body.scrollLeft || window.scrollX ||
            documentElement.scrollLeft || 0;
        return { top: top, left: left };
    };
    /**
     * Returns a stream that emits whenever the size of the viewport changes.
     * @param throttleTime Time in milliseconds to throttle the stream.
     */
    /**
     * Returns a stream that emits whenever the size of the viewport changes.
     * @param {?=} throttleTime Time in milliseconds to throttle the stream.
     * @return {?}
     */
    ViewportRuler.prototype.change = /**
     * Returns a stream that emits whenever the size of the viewport changes.
     * @param {?=} throttleTime Time in milliseconds to throttle the stream.
     * @return {?}
     */
    function (throttleTime) {
        if (throttleTime === void 0) { throttleTime = DEFAULT_RESIZE_TIME; }
        return throttleTime > 0 ? this._change.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["auditTime"])(throttleTime)) : this._change;
    };
    /** Updates the cached viewport size. */
    /**
     * Updates the cached viewport size.
     * @private
     * @return {?}
     */
    ViewportRuler.prototype._updateViewportSize = /**
     * Updates the cached viewport size.
     * @private
     * @return {?}
     */
    function () {
        this._viewportSize = this._platform.isBrowser ?
            { width: window.innerWidth, height: window.innerHeight } :
            { width: 0, height: 0 };
    };
    ViewportRuler.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{ providedIn: 'root' },] },
    ];
    /** @nocollapse */
    ViewportRuler.ctorParameters = function () { return [
        { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }
    ]; };
    /** @nocollapse */ ViewportRuler.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["defineInjectable"])({ factory: function ViewportRuler_Factory() { return new ViewportRuler(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"])); }, token: ViewportRuler, providedIn: "root" });
    return ViewportRuler;
}());
/**
 * \@docs-private \@deprecated \@breaking-change 8.0.0
 * @param {?} parentRuler
 * @param {?} platform
 * @param {?} ngZone
 * @return {?}
 */
function VIEWPORT_RULER_PROVIDER_FACTORY(parentRuler, platform, ngZone) {
    return parentRuler || new ViewportRuler(platform, ngZone);
}
/**
 * \@docs-private \@deprecated \@breaking-change 8.0.0
 * @type {?}
 */
var VIEWPORT_RULER_PROVIDER = {
    // If there is already a ViewportRuler available, use that. Otherwise, provide a new one.
    provide: ViewportRuler,
    deps: [[new _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"](), new _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"](), ViewportRuler], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]],
    useFactory: VIEWPORT_RULER_PROVIDER_FACTORY
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


//# sourceMappingURL=scrolling.es5.js.map


/***/ }),

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

/***/ "./node_modules/ngx-scrollbar/fesm5/ngx-scrollbar.js":
/*!***********************************************************!*\
  !*** ./node_modules/ngx-scrollbar/fesm5/ngx-scrollbar.js ***!
  \***********************************************************/
/*! exports provided: NgScrollbarModule, NgScrollbar, SmoothScrollModule, smoothScroll, easeInOutQuad, easeInCubic, inOutQuintic, SmoothScroll, ɵc, ɵb, ɵa */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgScrollbarModule", function() { return NgScrollbarModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgScrollbar", function() { return NgScrollbar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SmoothScrollModule", function() { return SmoothScrollModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "smoothScroll", function() { return smoothScroll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "easeInOutQuad", function() { return easeInOutQuad; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "easeInCubic", function() { return easeInCubic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inOutQuintic", function() { return inOutQuintic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SmoothScroll", function() { return SmoothScroll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵc", function() { return NgScrollbarHorizontal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return NgScrollbarThumb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return NgScrollbarVertical; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/platform */ "./node_modules/@angular/cdk/esm5/platform.es5.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm5/scrolling.es5.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");









/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var SmoothScroll = /** @class */ (function () {
    function SmoothScroll(_platform, el) {
        this._platform = _platform;
        this.view = el.nativeElement;
    }
    /**
     * @param {?} left
     * @param {?} top
     * @return {?}
     */
    SmoothScroll.prototype.scrollFunc = /**
     * @param {?} left
     * @param {?} top
     * @return {?}
     */
    function (left, top) {
        if (Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__["supportsScrollBehavior"])()) {
            this.view.scrollTo({ top: top, left: left });
        }
        else {
            this.view.scrollTop = top;
            this.view.scrollLeft = left;
        }
    };
    /**
     * @param {?} options
     * @return {?}
     */
    SmoothScroll.prototype.scrollTo = /**
     * @param {?} options
     * @return {?}
     */
    function (options) {
        var _this = this;
        // Avoid SSR error
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(this._platform)) {
            /** @type {?} */
            var scrollFunc = function (left, top) {
                if (Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__["supportsScrollBehavior"])()) {
                    _this.view.scrollTo({ top: top, left: left });
                }
                else {
                    _this.view.scrollTop = top;
                    _this.view.scrollLeft = left;
                }
            };
            if (options.duration) {
                /** @type {?} */
                var smoothScrollOptions = {
                    top: options.top,
                    left: options.left,
                    duration: options.duration,
                    easeFunc: options.easeFunc || easeInOutQuad,
                    offsetTop: this.view.scrollTop,
                    offsetLeft: this.view.scrollLeft,
                    scrollFunc: scrollFunc
                };
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(smoothScroll(smoothScrollOptions));
            }
            this.scrollFunc(options.left, options.top);
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])();
    };
    /**
     * @param {?} selector
     * @param {?=} offset
     * @param {?=} duration
     * @param {?=} easeFunc
     * @return {?}
     */
    SmoothScroll.prototype.scrollToElement = /**
     * @param {?} selector
     * @param {?=} offset
     * @param {?=} duration
     * @param {?=} easeFunc
     * @return {?}
     */
    function (selector, offset, duration, easeFunc) {
        if (offset === void 0) { offset = 0; }
        /** @type {?} */
        var target = this.view.querySelector(selector);
        return target ? this.scrollTo({ left: target.offsetLeft, top: target.offsetTop - offset, duration: duration, easeFunc: easeFunc }) : Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])();
    };
    /**
     * @param {?} left
     * @param {?=} duration
     * @param {?=} easeFunc
     * @return {?}
     */
    SmoothScroll.prototype.scrollXTo = /**
     * @param {?} left
     * @param {?=} duration
     * @param {?=} easeFunc
     * @return {?}
     */
    function (left, duration, easeFunc) {
        return this.scrollTo({ left: left, duration: duration, easeFunc: easeFunc });
    };
    /**
     * @param {?} top
     * @param {?=} duration
     * @param {?=} easeFunc
     * @return {?}
     */
    SmoothScroll.prototype.scrollYTo = /**
     * @param {?} top
     * @param {?=} duration
     * @param {?=} easeFunc
     * @return {?}
     */
    function (top, duration, easeFunc) {
        return this.scrollTo({ top: top, duration: duration, easeFunc: easeFunc });
    };
    /**
     * @param {?=} duration
     * @param {?=} easeFunc
     * @return {?}
     */
    SmoothScroll.prototype.scrollToTop = /**
     * @param {?=} duration
     * @param {?=} easeFunc
     * @return {?}
     */
    function (duration, easeFunc) {
        return this.scrollYTo(0, duration, easeFunc);
    };
    /**
     * @param {?=} duration
     * @param {?=} easeFunc
     * @return {?}
     */
    SmoothScroll.prototype.scrollToBottom = /**
     * @param {?=} duration
     * @param {?=} easeFunc
     * @return {?}
     */
    function (duration, easeFunc) {
        return this.scrollYTo(this.view.scrollHeight - this.view.clientHeight, duration, easeFunc);
    };
    /**
     * @param {?=} duration
     * @param {?=} easeFunc
     * @return {?}
     */
    SmoothScroll.prototype.scrollToRight = /**
     * @param {?=} duration
     * @param {?=} easeFunc
     * @return {?}
     */
    function (duration, easeFunc) {
        return this.scrollXTo(this.view.scrollWidth, duration, easeFunc);
    };
    /**
     * @param {?=} duration
     * @param {?=} easeFunc
     * @return {?}
     */
    SmoothScroll.prototype.scrollToLeft = /**
     * @param {?=} duration
     * @param {?=} easeFunc
     * @return {?}
     */
    function (duration, easeFunc) {
        return this.scrollXTo(0, duration, easeFunc);
    };
    SmoothScroll.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[smoothScroll], [smooth-scroll]'
                },] }
    ];
    /** @nocollapse */
    SmoothScroll.ctorParameters = function () { return [
        { type: Object, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"],] }] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }
    ]; };
    return SmoothScroll;
}());
/**
 * @param {?} options
 * @return {?}
 */
function smoothScroll(options) {
    return new Promise(function (resolve) {
        /** @type {?} */
        var currentTime = 0;
        /** @type {?} */
        var increment = 10;
        /** @type {?} */
        var valX = options.offsetLeft;
        /** @type {?} */
        var valY = options.offsetTop;
        /** @type {?} */
        var animateScroll = function () {
            // increment the time
            currentTime += increment;
            // find the value with the easing function
            if (typeof options.left !== 'undefined') {
                /** @type {?} */
                var deltaX = options.left - options.offsetLeft;
                valX = options.easeFunc(currentTime, options.offsetLeft, deltaX, options.duration);
            }
            if (typeof options.top !== 'undefined') {
                /** @type {?} */
                var deltaY = options.top - options.offsetTop;
                valY = options.easeFunc(currentTime, options.offsetTop, deltaY, options.duration);
            }
            // scroll to position
            options.scrollFunc(valX, valY);
            // do the animation unless its over
            if (currentTime < options.duration) {
                rxjs__WEBPACK_IMPORTED_MODULE_3__["animationFrameScheduler"].schedule(animateScroll);
            }
            else {
                resolve();
            }
        };
        animateScroll();
    });
}
/**
 * @param {?} t
 * @param {?} b
 * @param {?} c
 * @param {?} d
 * @return {?}
 */
function easeInOutQuad(t, b, c, d) {
    t /= d / 2;
    if (t < 1) {
        return (c / 2) * t * t + b;
    }
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
}
/**
 * @param {?} t
 * @param {?} b
 * @param {?} c
 * @param {?} d
 * @return {?}
 */
function easeInCubic(t, b, c, d) {
    /** @type {?} */
    var tc = (t /= d) * t * t;
    return b + c * tc;
}
/**
 * @param {?} t
 * @param {?} b
 * @param {?} c
 * @param {?} d
 * @return {?}
 */
function inOutQuintic(t, b, c, d) {
    /** @type {?} */
    var ts = (t /= d) * t;
    /** @type {?} */
    var tc = ts * t;
    return b + c * (6 * tc * ts + -15 * ts * ts + 10 * tc);
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var SmoothScrollModule = /** @class */ (function () {
    function SmoothScrollModule() {
    }
    SmoothScrollModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_4__["ScrollingModule"]],
                    declarations: [SmoothScroll],
                    exports: [SmoothScroll]
                },] }
    ];
    return SmoothScrollModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var defaultState = {
    viewStyle: {
        paddingRight: '0',
        paddingBottom: '0',
        width: '100%',
        height: '100%'
    },
    displayX: false,
    displayY: false
};
var NgScrollbar = /** @class */ (function () {
    function NgScrollbar(breakpointObserver, _platform) {
        this.breakpointObserver = breakpointObserver;
        this._platform = _platform;
        /**
         * Horizontal custom scrollbar
         */
        this.trackX = false;
        /**
         * Vertical custom Scrollbar
         */
        this.trackY = true;
        /**
         * Auto hide scrollbars on mouse leave
         */
        this.autoHide = false;
        /**
         * Auto update scrollbars on content changes (Mutation Observer)
         */
        this.autoUpdate = true;
        /**
         * The smooth scroll duration when a scrollbar is clicked
         */
        this.scrollToDuration = 300;
        /**
         * Disable custom scrollbars on specific breakpoints
         */
        this.disableOnBreakpoints = [
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_5__["Breakpoints"].HandsetLandscape,
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_5__["Breakpoints"].HandsetPortrait
        ];
        this._disabled = false;
        /**
         * Scrollbar state
         */
        this._state = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](defaultState);
        this.viewStyle = this._state.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (state) { return state.viewStyle; }));
        this.displayX = this._state.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (state) { return state.displayX; }));
        this.displayY = this._state.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (state) { return state.displayY; }));
        /**
         * Mutation observer subscription
         */
        this._updateObserverSub$ = rxjs__WEBPACK_IMPORTED_MODULE_3__["Subscription"].EMPTY;
        /**
         * CDK breakpoint subscription
         */
        this._breakpointSub$ = rxjs__WEBPACK_IMPORTED_MODULE_3__["Subscription"].EMPTY;
        /**
         * Steam that emits when scrollbar thumbnail needs to update (for internal uses)
         */
        this._updateObserver = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.updateObserver = this._updateObserver.asObservable();
    }
    Object.defineProperty(NgScrollbar.prototype, "disabled", {
        /** Disable custom scrollbars and switch back to native scrollbars */
        get: /**
         * Disable custom scrollbars and switch back to native scrollbars
         * @return {?}
         */
        function () {
            return this._disabled;
        },
        set: /**
         * @param {?} disable
         * @return {?}
         */
        function (disable) {
            disable ? this.disable() : this.enable();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NgScrollbar.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.view = this.scrollable.getElementRef().nativeElement;
        if (!this.disabled) {
            if (this.disableOnBreakpoints) {
                // Enable/Disable custom scrollbar on breakpoints (Used to disable scrollbars on mobile phones)
                this._breakpointSub$ = this.breakpointObserver.observe(this.disableOnBreakpoints).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function (result) { return result.matches ? _this.disable() : _this.enable(); })).subscribe();
            }
            else {
                this.enable();
            }
        }
        // Update state on content changes
        this._updateObserverSub$ = this.updateObserver.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["throttleTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function () { return _this.updateState(); })).subscribe();
    };
    /**
     * @return {?}
     */
    NgScrollbar.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._breakpointSub$.unsubscribe();
        this._updateObserverSub$.unsubscribe();
        if (this._observer) {
            this._observer.disconnect();
        }
    };
    /**
     * Update scrollbar thumbnail position
     */
    /**
     * Update scrollbar thumbnail position
     * @return {?}
     */
    NgScrollbar.prototype.update = /**
     * Update scrollbar thumbnail position
     * @return {?}
     */
    function () {
        if (!this.disabled) {
            this._updateObserver.next();
        }
    };
    /**
     * Enable custom scrollbar
     */
    /**
     * Enable custom scrollbar
     * @return {?}
     */
    NgScrollbar.prototype.enable = /**
     * Enable custom scrollbar
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.view) {
            this._disabled = false;
            // Hide native scrollbars
            this._nativeScrollbarSize = this.view.offsetWidth - this.view.clientWidth + 1 + "px";
            this.updateState();
            if (this.autoUpdate && Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(this._platform)) {
                // Observe content changes
                this._observer = new MutationObserver(function () { return _this.update(); });
                this._observer.observe(this.view, { subtree: true, childList: true, characterData: true });
            }
        }
    };
    /**
     * Disable custom scrollbar
     */
    /**
     * Disable custom scrollbar
     * @return {?}
     */
    NgScrollbar.prototype.disable = /**
     * Disable custom scrollbar
     * @return {?}
     */
    function () {
        this._disabled = true;
        // Reset and bring back native scrollbars
        this._state.next(defaultState);
        if (this._observer) {
            this._observer.disconnect();
        }
    };
    /**
     * @param {?} options
     * @return {?}
     */
    NgScrollbar.prototype.scrollTo = /**
     * @param {?} options
     * @return {?}
     */
    function (options) {
        return this.smoothScroll.scrollTo(options);
    };
    /**
     * @param {?} selector
     * @param {?=} offset
     * @param {?=} duration
     * @param {?=} easeFunc
     * @return {?}
     */
    NgScrollbar.prototype.scrollToElement = /**
     * @param {?} selector
     * @param {?=} offset
     * @param {?=} duration
     * @param {?=} easeFunc
     * @return {?}
     */
    function (selector, offset, duration, easeFunc) {
        if (offset === void 0) { offset = 0; }
        return this.smoothScroll.scrollToElement(selector, offset, duration, easeFunc);
    };
    /**
     * @param {?} to
     * @param {?=} duration
     * @param {?=} easeFunc
     * @return {?}
     */
    NgScrollbar.prototype.scrollXTo = /**
     * @param {?} to
     * @param {?=} duration
     * @param {?=} easeFunc
     * @return {?}
     */
    function (to, duration, easeFunc) {
        return this.smoothScroll.scrollXTo(to, duration, easeFunc);
    };
    /**
     * @param {?} to
     * @param {?=} duration
     * @param {?=} easeFunc
     * @return {?}
     */
    NgScrollbar.prototype.scrollYTo = /**
     * @param {?} to
     * @param {?=} duration
     * @param {?=} easeFunc
     * @return {?}
     */
    function (to, duration, easeFunc) {
        return this.smoothScroll.scrollYTo(to, duration, easeFunc);
    };
    /**
     * @param {?=} duration
     * @param {?=} easeFunc
     * @return {?}
     */
    NgScrollbar.prototype.scrollToTop = /**
     * @param {?=} duration
     * @param {?=} easeFunc
     * @return {?}
     */
    function (duration, easeFunc) {
        return this.smoothScroll.scrollToTop(duration, easeFunc);
    };
    /**
     * @param {?=} duration
     * @param {?=} easeFunc
     * @return {?}
     */
    NgScrollbar.prototype.scrollToBottom = /**
     * @param {?=} duration
     * @param {?=} easeFunc
     * @return {?}
     */
    function (duration, easeFunc) {
        return this.smoothScroll.scrollToBottom(duration, easeFunc);
    };
    /**
     * @param {?=} duration
     * @param {?=} easeFunc
     * @return {?}
     */
    NgScrollbar.prototype.scrollToRight = /**
     * @param {?=} duration
     * @param {?=} easeFunc
     * @return {?}
     */
    function (duration, easeFunc) {
        return this.smoothScroll.scrollToRight(duration, easeFunc);
    };
    /**
     * @param {?=} duration
     * @param {?=} easeFunc
     * @return {?}
     */
    NgScrollbar.prototype.scrollToLeft = /**
     * @param {?=} duration
     * @param {?=} easeFunc
     * @return {?}
     */
    function (duration, easeFunc) {
        return this.smoothScroll.scrollToLeft(duration, easeFunc);
    };
    /**
     * @return {?}
     */
    NgScrollbar.prototype.updateState = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var paddingBottom = '0';
        /** @type {?} */
        var paddingRight = '0';
        /** @type {?} */
        var displayY = false;
        /** @type {?} */
        var displayX = false;
        /** @type {?} */
        var size = "calc(100% + " + this._nativeScrollbarSize + ")";
        if (this.trackY) {
            // Check if vertical scrollbar should be displayed
            if (this.view.scrollHeight > this.view.clientHeight) {
                displayY = true;
                paddingRight = this.overlay ? '0' : this._nativeScrollbarSize;
            }
        }
        if (this.trackX) {
            // Check if horizontal scrollbar should be displayed
            if (this.view.scrollWidth > this.view.clientWidth) {
                displayX = true;
                paddingBottom = this.overlay ? '0' : this._nativeScrollbarSize;
            }
        }
        this._state.next({
            viewStyle: {
                width: size,
                height: size,
                paddingBottom: paddingBottom,
                paddingRight: paddingRight
            },
            displayX: displayX,
            displayY: displayY
        });
    };
    NgScrollbar.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'ng-scrollbar',
                    template: "<div class=\"ng-scrollbar-container\">\r\n\r\n  <div cdkScrollable smoothScroll class=\"ng-scrollbar-view {{viewClass}}\" [ngStyle]=\"viewStyle | async\">\r\n    <ng-content></ng-content>\r\n  </div>\r\n\r\n  <ng-scrollbar-vertical #vertical\r\n                         *ngIf=\"!disabled && trackY\"\r\n                         [class.ng-scrollbar-visible]=\"displayY | async\"\r\n                         [barClass]=\"barClass\"\r\n                         [thumbClass]=\"thumbClass\"\r\n                         [scrollToDuration]=\"scrollToDuration\">\r\n  </ng-scrollbar-vertical>\r\n\r\n  <ng-scrollbar-horizontal #horizontal\r\n                           *ngIf=\"!disabled && trackX\"\r\n                           [class.ng-scrollbar-visible]=\"displayX | async\"\r\n                           [barClass]=\"barClass\"\r\n                           [thumbClass]=\"thumbClass\"\r\n                           [scrollToDuration]=\"scrollToDuration\">\r\n  </ng-scrollbar-horizontal>\r\n\r\n</div>\r\n",
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                    host: {
                        '[attr.trackX]': 'trackX',
                        '[attr.trackY]': 'trackY',
                        '[class.ng-scrollbar-auto-hide]': 'autoHide'
                    },
                    styles: [":host{display:block;overflow:hidden}:host[trackY=true] .ng-scrollbar-view{overflow-y:scroll}:host[trackX=true] .ng-scrollbar-view{overflow-x:scroll}.ng-scrollbar-container,.ng-scrollbar-view,:host{position:relative;height:100%;width:100%}.ng-scrollbar-container{overflow:hidden;top:0;left:0}.ng-scrollbar-view{box-sizing:content-box;-webkit-transform:translateZ(0);transform:translateZ(0);-webkit-overflow-scrolling:touch}.ng-scrollbar-view ::-webkit-scrollbar{background:0 0}ng-scrollbar-thumb{display:none}ng-scrollbar-thumb.ng-scrollbar-visible{display:block}::ng-deep .ng-scrollbar-auto-hide .ng-scrollbar{opacity:0;transition:opacity 120ms ease-out}::ng-deep .ng-scrollbar-auto-hide:active .ng-scrollbar,::ng-deep .ng-scrollbar-auto-hide:focus .ng-scrollbar,::ng-deep .ng-scrollbar-auto-hide:hover .ng-scrollbar{opacity:1;transition:opacity 340ms ease-out}::ng-deep .ng-scrollbar{position:absolute;z-index:1;border-radius:4px}::ng-deep .ng-scrollbar-thumb{position:relative;width:0;height:0;border-radius:inherit;background-color:rgba(0,0,0,.2);-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0);transition:height ease-out 150ms}::ng-deep .ng-scrollbar-thumb:active,::ng-deep .ng-scrollbar-thumb:hover{background-color:rgba(0,0,0,.3)}::ng-deep .ng-scrollbar-vertical{right:6px;top:6px;bottom:6px;width:8px}::ng-deep .ng-scrollbar-vertical .ng-scrollbar-thumb{width:100%}::ng-deep .ng-scrollbar-horizontal{left:6px;right:6px;bottom:6px;height:8px}::ng-deep .ng-scrollbar-horizontal .ng-scrollbar-thumb{height:100%}"]
                }] }
    ];
    /** @nocollapse */
    NgScrollbar.ctorParameters = function () { return [
        { type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_5__["BreakpointObserver"] },
        { type: Object, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"],] }] }
    ]; };
    NgScrollbar.propDecorators = {
        trackX: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        trackY: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        autoHide: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        autoUpdate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        viewClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        barClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        thumbClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        scrollToDuration: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        overlay: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        disableOnBreakpoints: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['disabled',] }],
        scrollable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: [_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_4__["CdkScrollable"],] }],
        smoothScroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: [SmoothScroll,] }],
        verticalScrollbar: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['vertical', { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },] }],
        horizontalScrollbar: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['horizontal', { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },] }]
    };
    return NgScrollbar;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var NgScrollbarThumb = /** @class */ (function () {
    function NgScrollbarThumb(_parent, _platform, _zone) {
        this._parent = _parent;
        this._platform = _platform;
        this._zone = _zone;
        this._minThumbSize = 20;
        this._naturalThumbSize = 0;
        this._thumbSize = 0;
        this._trackMax = 0;
        this._scrollMax = 0;
        this._currPos = 0;
        this._scroll$ = rxjs__WEBPACK_IMPORTED_MODULE_3__["Subscription"].EMPTY;
        this._thumbDrag$ = rxjs__WEBPACK_IMPORTED_MODULE_3__["Subscription"].EMPTY;
        this._updateObserver$ = rxjs__WEBPACK_IMPORTED_MODULE_3__["Subscription"].EMPTY;
        this._state = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]({
            transform: 'translate3d(0, 0, 0)'
        });
        /**
         * Scrollbar styles
         */
        this.scrollbarStyle = this._state.asObservable();
    }
    Object.defineProperty(NgScrollbarThumb.prototype, "thumbSize", {
        get: /**
         * @return {?}
         */
        function () {
            return 0;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NgScrollbarThumb.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // Avoid SSR Error
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(this._platform)) {
            this._view = this._parent.scrollable.getElementRef().nativeElement;
            // Start view scroll event
            this._scroll$ = this._parent.scrollable.elementScrolled()
                .subscribe(function () { return _this.updateScrollbar(); });
            // Start scrollbar thumbnail drag events
            this._zone.runOutsideAngular(function () {
                return _this._thumbDrag$ = _this.startThumbEvents().subscribe();
            });
            // Update scrollbar thumbnail size on content changes
            this._updateObserver$ = this._parent.updateObserver.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["throttleTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function () { return _this.updateScrollbar(); }), 
            // Make sure scrollbar thumbnail position is correct after the new content is rendered
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["debounceTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function () { return _this.updateScrollbar(); })).subscribe();
            // Initialize scrollbar
            setTimeout(function () { return _this.updateScrollbar(); }, 200);
        }
    };
    /**
     * @return {?}
     */
    NgScrollbarThumb.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._scroll$.unsubscribe();
        this._thumbDrag$.unsubscribe();
        this._updateObserver$.unsubscribe();
    };
    /**
     * Scrollbar click
     * @param e Mouse event
     */
    /**
     * Scrollbar click
     * @param {?} e Mouse event
     * @return {?}
     */
    NgScrollbarThumb.prototype.onScrollbarHolderClick = /**
     * Scrollbar click
     * @param {?} e Mouse event
     * @return {?}
     */
    function (e) {
    };
    /**
     * Update scrollbar
     */
    /**
     * Update scrollbar
     * @return {?}
     */
    NgScrollbarThumb.prototype.updateScrollbar = /**
     * Update scrollbar
     * @return {?}
     */
    function () {
    };
    /**
     * Start vertical thumb worker
     */
    /**
     * Start vertical thumb worker
     * @return {?}
     */
    NgScrollbarThumb.prototype.startThumbEvents = /**
     * Start vertical thumb worker
     * @return {?}
     */
    function () {
        return undefined;
    };
    /**
     * Get scrollbar thumb size
     * @param naturalThumbSize
     * @param scrollMax
     */
    /**
     * Get scrollbar thumb size
     * @param {?} naturalThumbSize
     * @param {?} scrollMax
     * @return {?}
     */
    NgScrollbarThumb.prototype.scrollBoundaries = /**
     * Get scrollbar thumb size
     * @param {?} naturalThumbSize
     * @param {?} scrollMax
     * @return {?}
     */
    function (naturalThumbSize, scrollMax) {
        return (naturalThumbSize < this._minThumbSize) ? this._minThumbSize : scrollMax ? naturalThumbSize : 0;
    };
    /**
     * @param {?} state
     * @return {?}
     */
    NgScrollbarThumb.prototype.updateState = /**
     * @param {?} state
     * @return {?}
     */
    function (state) {
        this._state.next(Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__assign"])({}, this._state.value, state));
    };
    NgScrollbarThumb.propDecorators = {
        barClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        thumbClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        scrollToDuration: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        bar: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['bar',] }],
        thumb: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['thumb',] }]
    };
    return NgScrollbarThumb;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var NgScrollbarVertical = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__extends"])(NgScrollbarVertical, _super);
    function NgScrollbarVertical(_document, _parent, _platform, _zone) {
        var _this = _super.call(this, _parent, _platform, _zone) || this;
        _this._document = _document;
        _this._parent = _parent;
        _this._zone = _zone;
        return _this;
    }
    Object.defineProperty(NgScrollbarVertical.prototype, "thumbSize", {
        /**
         * Calculate scrollbar thumbnail size
         */
        get: /**
         * Calculate scrollbar thumbnail size
         * @return {?}
         */
        function () {
            /** @type {?} */
            var barClientHeight = this.bar.nativeElement.clientHeight;
            /** @type {?} */
            var viewClientHeight = this._view.clientHeight;
            /** @type {?} */
            var viewScrollHeight = this._view.scrollHeight;
            this._naturalThumbSize = barClientHeight / viewScrollHeight * barClientHeight;
            this._scrollMax = viewScrollHeight - viewClientHeight;
            return this.scrollBoundaries(this._naturalThumbSize, this._scrollMax);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Scrollbar click
     * @param e Mouse event
     */
    /**
     * Scrollbar click
     * @param {?} e Mouse event
     * @return {?}
     */
    NgScrollbarVertical.prototype.onScrollbarHolderClick = /**
     * Scrollbar click
     * @param {?} e Mouse event
     * @return {?}
     */
    function (e) {
        if (e.target === e.currentTarget) {
            /** @type {?} */
            var offsetY = e.offsetY - this._naturalThumbSize * .5;
            /** @type {?} */
            var thumbPositionPercentage = offsetY * 100 / this.bar.nativeElement.clientHeight;
            /** @type {?} */
            var value = thumbPositionPercentage * this._view.scrollHeight / 100;
            this._parent.scrollTo(/** @type {?} */ ({ top: value, duration: this.scrollToDuration })).subscribe();
        }
    };
    /**
     * Update scrollbar
     */
    /**
     * Update scrollbar
     * @return {?}
     */
    NgScrollbarVertical.prototype.updateScrollbar = /**
     * Update scrollbar
     * @return {?}
     */
    function () {
        var _this = this;
        this._thumbSize = this.thumb.nativeElement.clientHeight;
        this._trackMax = this.bar.nativeElement.clientHeight - this._thumbSize;
        this._currPos = this._view.scrollTop * this._trackMax / this._scrollMax;
        this._zone.run(function () {
            rxjs__WEBPACK_IMPORTED_MODULE_3__["animationFrameScheduler"].schedule(function () {
                return _this.updateState({
                    transform: "translate3d(0, " + _this._currPos + "px, 0)",
                    height: _this.thumbSize + "px"
                });
            });
        });
    };
    /**
     * Start vertical thumb worker
     */
    /**
     * Start vertical thumb worker
     * @return {?}
     */
    NgScrollbarVertical.prototype.startThumbEvents = /**
     * Start vertical thumb worker
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var mouseDown$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["fromEvent"])(this.thumb.nativeElement, 'mousedown');
        /** @type {?} */
        var mouseMove$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["fromEvent"])(this._document, 'mousemove');
        /** @type {?} */
        var mouseUp$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["fromEvent"])(this._document, 'mouseup').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function () { return _this._document.onselectstart = null; }));
        return mouseDown$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function () {
            _this._document.onselectstart = function () { return false; };
            // Initialize trackMax for before start dragging
            _this._trackMax = _this.bar.nativeElement.clientHeight - _this._thumbSize;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["pluck"])('offsetY'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["mergeMap"])(function (mouseDownOffset) { return mouseMove$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(mouseUp$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["pluck"])('clientY'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function (mouseMoveClient) {
            /** @type {?} */
            var offsetY = mouseMoveClient - _this.bar.nativeElement.getBoundingClientRect().top;
            /** @type {?} */
            var value = _this._scrollMax * (offsetY - mouseDownOffset) / _this._trackMax;
            _this._parent.scrollable.scrollTo({ top: value });
        })); }));
    };
    NgScrollbarVertical.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'ng-scrollbar-vertical',
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                    template: "\n    <div #bar class=\"ng-scrollbar ng-scrollbar-vertical {{barClass}}\" (mousedown)=\"onScrollbarHolderClick($event)\">\n      <div #thumb class=\"ng-scrollbar-thumb {{thumbClass}}\" [ngStyle]=\"scrollbarStyle | async\"></div>\n    </div>\n  "
                }] }
    ];
    /** @nocollapse */
    NgScrollbarVertical.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"],] }] },
        { type: NgScrollbar, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return NgScrollbar; }),] }] },
        { type: Object, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"],] }] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }
    ]; };
    return NgScrollbarVertical;
}(NgScrollbarThumb));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var NgScrollbarHorizontal = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__extends"])(NgScrollbarHorizontal, _super);
    function NgScrollbarHorizontal(_document, _parent, _platform, _zone) {
        var _this = _super.call(this, _parent, _platform, _zone) || this;
        _this._document = _document;
        _this._parent = _parent;
        _this._zone = _zone;
        return _this;
    }
    Object.defineProperty(NgScrollbarHorizontal.prototype, "thumbSize", {
        /**
         * Calculate scrollbar thumbnail size
         */
        get: /**
         * Calculate scrollbar thumbnail size
         * @return {?}
         */
        function () {
            /** @type {?} */
            var barClientWidth = this.bar.nativeElement.clientWidth;
            /** @type {?} */
            var viewClientWidth = this._view.clientWidth;
            /** @type {?} */
            var viewScrollWidth = this._view.scrollWidth;
            this._naturalThumbSize = barClientWidth / viewScrollWidth * barClientWidth;
            this._scrollMax = viewScrollWidth - viewClientWidth;
            return this.scrollBoundaries(this._naturalThumbSize, this._scrollMax);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Scrollbar click
     * @param e Mouse event
     */
    /**
     * Scrollbar click
     * @param {?} e Mouse event
     * @return {?}
     */
    NgScrollbarHorizontal.prototype.onScrollbarHolderClick = /**
     * Scrollbar click
     * @param {?} e Mouse event
     * @return {?}
     */
    function (e) {
        if (e.target === e.currentTarget) {
            /** @type {?} */
            var offsetX = e.offsetX - this._naturalThumbSize * .5;
            /** @type {?} */
            var thumbPositionPercentage = offsetX * 100 / this.bar.nativeElement.clientWidth;
            /** @type {?} */
            var value = thumbPositionPercentage * this._view.scrollWidth / 100;
            this._parent.scrollTo(/** @type {?} */ ({ left: value, duration: this.scrollToDuration })).subscribe();
        }
    };
    /**
     * Update scrollbar
     */
    /**
     * Update scrollbar
     * @return {?}
     */
    NgScrollbarHorizontal.prototype.updateScrollbar = /**
     * Update scrollbar
     * @return {?}
     */
    function () {
        var _this = this;
        this._thumbSize = this.thumb.nativeElement.clientWidth;
        this._trackMax = this.bar.nativeElement.clientWidth - this._thumbSize;
        this._currPos = this._view.scrollLeft * this._trackMax / this._scrollMax;
        this._zone.run(function () {
            rxjs__WEBPACK_IMPORTED_MODULE_3__["animationFrameScheduler"].schedule(function () {
                return _this.updateState({
                    transform: "translate3d(" + _this._currPos + "px, 0, 0)",
                    width: _this.thumbSize + "px"
                });
            });
        });
    };
    /**
     * Start vertical thumb worker
     */
    /**
     * Start vertical thumb worker
     * @return {?}
     */
    NgScrollbarHorizontal.prototype.startThumbEvents = /**
     * Start vertical thumb worker
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var mouseDown$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["fromEvent"])(this.thumb.nativeElement, 'mousedown');
        /** @type {?} */
        var mouseMove$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["fromEvent"])(this._document, 'mousemove');
        /** @type {?} */
        var mouseUp$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["fromEvent"])(this._document, 'mouseup').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function () { return _this._document.onselectstart = null; }));
        return mouseDown$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function () {
            _this._document.onselectstart = function () { return false; };
            // Initialize trackMax for before start dragging
            _this._trackMax = _this.bar.nativeElement.clientWidth - _this._thumbSize;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["pluck"])('offsetX'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["mergeMap"])(function (mouseDownOffset) { return mouseMove$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(mouseUp$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["pluck"])('clientX'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function (mouseMoveClient) {
            /** @type {?} */
            var offsetX = mouseMoveClient - _this.bar.nativeElement.getBoundingClientRect().left;
            /** @type {?} */
            var value = _this._scrollMax * (offsetX - mouseDownOffset) / _this._trackMax;
            _this._parent.scrollable.scrollTo({ left: value });
        })); }));
    };
    NgScrollbarHorizontal.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'ng-scrollbar-horizontal',
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                    template: "\n    <div #bar class=\"ng-scrollbar ng-scrollbar-horizontal {{barClass}}\" (mousedown)=\"onScrollbarHolderClick($event)\">\n      <div #thumb class=\"ng-scrollbar-thumb {{thumbClass}}\" [ngStyle]=\"scrollbarStyle | async\"></div>\n    </div>\n  "
                }] }
    ];
    /** @nocollapse */
    NgScrollbarHorizontal.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"],] }] },
        { type: NgScrollbar, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return NgScrollbar; }),] }] },
        { type: Object, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"],] }] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }
    ]; };
    return NgScrollbarHorizontal;
}(NgScrollbarThumb));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var NgScrollbarModule = /** @class */ (function () {
    function NgScrollbarModule() {
    }
    NgScrollbarModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                        _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_4__["ScrollingModule"],
                        _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_5__["LayoutModule"],
                        SmoothScrollModule
                    ],
                    declarations: [
                        NgScrollbar,
                        NgScrollbarVertical,
                        NgScrollbarHorizontal
                    ],
                    exports: [
                        NgScrollbar
                    ]
                },] }
    ];
    return NgScrollbarModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXNjcm9sbGJhci5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vbmd4LXNjcm9sbGJhci9zbW9vdGgtc2Nyb2xsL3Ntb290aC1zY3JvbGwudHMiLCJuZzovL25neC1zY3JvbGxiYXIvc21vb3RoLXNjcm9sbC9zbW9vdGgtc2Nyb2xsLm1vZHVsZS50cyIsIm5nOi8vbmd4LXNjcm9sbGJhci9zY3JvbGxiYXIvbmctc2Nyb2xsYmFyLnRzIiwibmc6Ly9uZ3gtc2Nyb2xsYmFyL3Njcm9sbGJhci9uZy1zY3JvbGxiYXItdGh1bWIudHMiLCJuZzovL25neC1zY3JvbGxiYXIvc2Nyb2xsYmFyL25nLXNjcm9sbGJhci12ZXJ0aWNhbC50cyIsIm5nOi8vbmd4LXNjcm9sbGJhci9zY3JvbGxiYXIvbmctc2Nyb2xsYmFyLWhvcml6b250YWwudHMiLCJuZzovL25neC1zY3JvbGxiYXIvc2Nyb2xsYmFyL25nLXNjcm9sbGJhci5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBJbmplY3QsIFBMQVRGT1JNX0lEIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IGlzUGxhdGZvcm1Ccm93c2VyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgc3VwcG9ydHNTY3JvbGxCZWhhdmlvciB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wbGF0Zm9ybSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUsIGZyb20sIG9mLCBhbmltYXRpb25GcmFtZVNjaGVkdWxlciB9IGZyb20gJ3J4anMnO1xyXG5cclxuZXhwb3J0IHR5cGUgU21vb3RoU2Nyb2xsRWFzZUZ1bmMgPSAodDogbnVtYmVyLCBzOiBudW1iZXIsIGM6IG51bWJlciwgZDogbnVtYmVyKSA9PiBudW1iZXI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFNtb290aFNjcm9sbE9wdGlvbnMge1xyXG4gIHRvcD86IG51bWJlcjtcclxuICBsZWZ0PzogbnVtYmVyO1xyXG4gIG9mZnNldFRvcDogbnVtYmVyO1xyXG4gIG9mZnNldExlZnQ6IG51bWJlcjtcclxuICBkdXJhdGlvbjogbnVtYmVyO1xyXG4gIHNjcm9sbEZ1bmM6ICh0b3A6IG51bWJlciwgbGVmdDogbnVtYmVyKSA9PiB2b2lkO1xyXG4gIGVhc2VGdW5jOiBTbW9vdGhTY3JvbGxFYXNlRnVuYztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTY3JvbGxUb09wdGlvbnMge1xyXG4gIHRvcD86IG51bWJlcjtcclxuICBsZWZ0PzogbnVtYmVyO1xyXG4gIGR1cmF0aW9uPzogbnVtYmVyO1xyXG4gIGVhc2VGdW5jPzogU21vb3RoU2Nyb2xsRWFzZUZ1bmM7XHJcbn1cclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnW3Ntb290aFNjcm9sbF0sIFtzbW9vdGgtc2Nyb2xsXSdcclxufSlcclxuZXhwb3J0IGNsYXNzIFNtb290aFNjcm9sbCB7XHJcblxyXG4gIHByaXZhdGUgcmVhZG9ubHkgdmlldzogSFRNTEVsZW1lbnQ7XHJcblxyXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoUExBVEZPUk1fSUQpIHByaXZhdGUgX3BsYXRmb3JtOiBPYmplY3QsXHJcbiAgICAgICAgICAgICAgZWw6IEVsZW1lbnRSZWYpIHtcclxuICAgIHRoaXMudmlldyA9IGVsLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNjcm9sbEZ1bmMobGVmdDogbnVtYmVyLCB0b3A6IG51bWJlcikge1xyXG4gICAgaWYgKHN1cHBvcnRzU2Nyb2xsQmVoYXZpb3IoKSkge1xyXG4gICAgICB0aGlzLnZpZXcuc2Nyb2xsVG8oe3RvcCwgbGVmdH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy52aWV3LnNjcm9sbFRvcCA9IHRvcDtcclxuICAgICAgdGhpcy52aWV3LnNjcm9sbExlZnQgPSBsZWZ0O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2Nyb2xsVG8ob3B0aW9uczogU2Nyb2xsVG9PcHRpb25zKTogT2JzZXJ2YWJsZTx2b2lkPiB7XHJcbiAgICAvLyBBdm9pZCBTU1IgZXJyb3JcclxuICAgIGlmIChpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLl9wbGF0Zm9ybSkpIHtcclxuICAgICAgY29uc3Qgc2Nyb2xsRnVuYyA9IChsZWZ0OiBudW1iZXIsIHRvcDogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgaWYgKHN1cHBvcnRzU2Nyb2xsQmVoYXZpb3IoKSkge1xyXG4gICAgICAgICAgdGhpcy52aWV3LnNjcm9sbFRvKHt0b3AsIGxlZnR9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy52aWV3LnNjcm9sbFRvcCA9IHRvcDtcclxuICAgICAgICAgIHRoaXMudmlldy5zY3JvbGxMZWZ0ID0gbGVmdDtcclxuICAgICAgICB9XHJcbiAgICAgIH07XHJcbiAgICAgIGlmIChvcHRpb25zLmR1cmF0aW9uKSB7XHJcbiAgICAgICAgY29uc3Qgc21vb3RoU2Nyb2xsT3B0aW9uczogU21vb3RoU2Nyb2xsT3B0aW9ucyA9IHtcclxuICAgICAgICAgIHRvcDogb3B0aW9ucy50b3AsXHJcbiAgICAgICAgICBsZWZ0OiBvcHRpb25zLmxlZnQsXHJcbiAgICAgICAgICBkdXJhdGlvbjogb3B0aW9ucy5kdXJhdGlvbixcclxuICAgICAgICAgIGVhc2VGdW5jOiBvcHRpb25zLmVhc2VGdW5jIHx8IGVhc2VJbk91dFF1YWQsXHJcbiAgICAgICAgICBvZmZzZXRUb3A6IHRoaXMudmlldy5zY3JvbGxUb3AsXHJcbiAgICAgICAgICBvZmZzZXRMZWZ0OiB0aGlzLnZpZXcuc2Nyb2xsTGVmdCxcclxuICAgICAgICAgIHNjcm9sbEZ1bmNcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiBmcm9tKHNtb290aFNjcm9sbChzbW9vdGhTY3JvbGxPcHRpb25zKSk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5zY3JvbGxGdW5jKG9wdGlvbnMubGVmdCwgb3B0aW9ucy50b3ApO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG9mPHZvaWQ+KCk7XHJcbiAgfVxyXG5cclxuICBzY3JvbGxUb0VsZW1lbnQoc2VsZWN0b3I6IHN0cmluZywgb2Zmc2V0ID0gMCwgZHVyYXRpb24/OiBudW1iZXIsIGVhc2VGdW5jPzogU21vb3RoU2Nyb2xsRWFzZUZ1bmMpOiBPYnNlcnZhYmxlPHZvaWQ+IHtcclxuICAgIGNvbnN0IHRhcmdldDogSFRNTEVsZW1lbnQgPSB0aGlzLnZpZXcucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XHJcbiAgICByZXR1cm4gdGFyZ2V0ID8gdGhpcy5zY3JvbGxUbyh7bGVmdDogdGFyZ2V0Lm9mZnNldExlZnQsIHRvcDogdGFyZ2V0Lm9mZnNldFRvcCAtIG9mZnNldCwgZHVyYXRpb24sIGVhc2VGdW5jfSkgOiBvZjx2b2lkPigpO1xyXG4gIH1cclxuXHJcbiAgc2Nyb2xsWFRvKGxlZnQ6IG51bWJlciwgZHVyYXRpb24/OiBudW1iZXIsIGVhc2VGdW5jPzogU21vb3RoU2Nyb2xsRWFzZUZ1bmMpOiBPYnNlcnZhYmxlPHZvaWQ+IHtcclxuICAgIHJldHVybiB0aGlzLnNjcm9sbFRvKHtsZWZ0LCBkdXJhdGlvbiwgZWFzZUZ1bmN9KTtcclxuICB9XHJcblxyXG4gIHNjcm9sbFlUbyh0b3A6IG51bWJlciwgZHVyYXRpb24/OiBudW1iZXIsIGVhc2VGdW5jPzogU21vb3RoU2Nyb2xsRWFzZUZ1bmMpOiBPYnNlcnZhYmxlPHZvaWQ+IHtcclxuICAgIHJldHVybiB0aGlzLnNjcm9sbFRvKHt0b3AsIGR1cmF0aW9uLCBlYXNlRnVuY30pO1xyXG4gIH1cclxuXHJcbiAgc2Nyb2xsVG9Ub3AoZHVyYXRpb24/OiBudW1iZXIsIGVhc2VGdW5jPzogU21vb3RoU2Nyb2xsRWFzZUZ1bmMpOiBPYnNlcnZhYmxlPHZvaWQ+IHtcclxuICAgIHJldHVybiB0aGlzLnNjcm9sbFlUbygwLCBkdXJhdGlvbiwgZWFzZUZ1bmMpO1xyXG4gIH1cclxuXHJcbiAgc2Nyb2xsVG9Cb3R0b20oZHVyYXRpb24/OiBudW1iZXIsIGVhc2VGdW5jPzogU21vb3RoU2Nyb2xsRWFzZUZ1bmMpOiBPYnNlcnZhYmxlPHZvaWQ+IHtcclxuICAgIHJldHVybiB0aGlzLnNjcm9sbFlUbyh0aGlzLnZpZXcuc2Nyb2xsSGVpZ2h0IC0gdGhpcy52aWV3LmNsaWVudEhlaWdodCwgZHVyYXRpb24sIGVhc2VGdW5jKTtcclxuICB9XHJcblxyXG4gIHNjcm9sbFRvUmlnaHQoZHVyYXRpb24/OiBudW1iZXIsIGVhc2VGdW5jPzogU21vb3RoU2Nyb2xsRWFzZUZ1bmMpOiBPYnNlcnZhYmxlPHZvaWQ+IHtcclxuICAgIHJldHVybiB0aGlzLnNjcm9sbFhUbyh0aGlzLnZpZXcuc2Nyb2xsV2lkdGgsIGR1cmF0aW9uLCBlYXNlRnVuYyk7XHJcbiAgfVxyXG5cclxuICBzY3JvbGxUb0xlZnQoZHVyYXRpb24/OiBudW1iZXIsIGVhc2VGdW5jPzogU21vb3RoU2Nyb2xsRWFzZUZ1bmMpOiBPYnNlcnZhYmxlPHZvaWQ+IHtcclxuICAgIHJldHVybiB0aGlzLnNjcm9sbFhUbygwLCBkdXJhdGlvbiwgZWFzZUZ1bmMpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNtb290aFNjcm9sbChvcHRpb25zOiBTbW9vdGhTY3JvbGxPcHRpb25zKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xyXG4gICAgbGV0IGN1cnJlbnRUaW1lID0gMDtcclxuICAgIGNvbnN0IGluY3JlbWVudCA9IDEwO1xyXG4gICAgbGV0IHZhbFggPSBvcHRpb25zLm9mZnNldExlZnQ7XHJcbiAgICBsZXQgdmFsWSA9IG9wdGlvbnMub2Zmc2V0VG9wO1xyXG5cclxuICAgIGNvbnN0IGFuaW1hdGVTY3JvbGwgPSAoKSA9PiB7XHJcbiAgICAgIC8vIGluY3JlbWVudCB0aGUgdGltZVxyXG4gICAgICBjdXJyZW50VGltZSArPSBpbmNyZW1lbnQ7XHJcbiAgICAgIC8vIGZpbmQgdGhlIHZhbHVlIHdpdGggdGhlIGVhc2luZyBmdW5jdGlvblxyXG4gICAgICBpZiAodHlwZW9mIG9wdGlvbnMubGVmdCAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICBjb25zdCBkZWx0YVggPSBvcHRpb25zLmxlZnQgLSBvcHRpb25zLm9mZnNldExlZnQ7XHJcbiAgICAgICAgdmFsWCA9IG9wdGlvbnMuZWFzZUZ1bmMoY3VycmVudFRpbWUsIG9wdGlvbnMub2Zmc2V0TGVmdCwgZGVsdGFYLCBvcHRpb25zLmR1cmF0aW9uKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAodHlwZW9mIG9wdGlvbnMudG9wICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgIGNvbnN0IGRlbHRhWSA9IG9wdGlvbnMudG9wIC0gb3B0aW9ucy5vZmZzZXRUb3A7XHJcbiAgICAgICAgdmFsWSA9IG9wdGlvbnMuZWFzZUZ1bmMoY3VycmVudFRpbWUsIG9wdGlvbnMub2Zmc2V0VG9wLCBkZWx0YVksIG9wdGlvbnMuZHVyYXRpb24pO1xyXG4gICAgICB9XHJcbiAgICAgIC8vIHNjcm9sbCB0byBwb3NpdGlvblxyXG4gICAgICBvcHRpb25zLnNjcm9sbEZ1bmModmFsWCwgdmFsWSk7XHJcbiAgICAgIC8vIGRvIHRoZSBhbmltYXRpb24gdW5sZXNzIGl0cyBvdmVyXHJcbiAgICAgIGlmIChjdXJyZW50VGltZSA8IG9wdGlvbnMuZHVyYXRpb24pIHtcclxuICAgICAgICBhbmltYXRpb25GcmFtZVNjaGVkdWxlci5zY2hlZHVsZShhbmltYXRlU2Nyb2xsKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgICBhbmltYXRlU2Nyb2xsKCk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbi8vIGVhc2luZyBmdW5jdGlvbnMgaHR0cDovL2dvby5nbC81SExsOFxyXG5leHBvcnQgZnVuY3Rpb24gZWFzZUluT3V0UXVhZCh0OiBudW1iZXIsIGI6IG51bWJlciwgYzogbnVtYmVyLCBkOiBudW1iZXIpIHtcclxuICB0IC89IGQgLyAyO1xyXG4gIGlmICh0IDwgMSkge1xyXG4gICAgcmV0dXJuIChjIC8gMikgKiB0ICogdCArIGI7XHJcbiAgfVxyXG4gIHQtLTtcclxuICByZXR1cm4gKC1jIC8gMikgKiAodCAqICh0IC0gMikgLSAxKSArIGI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBlYXNlSW5DdWJpYyh0OiBudW1iZXIsIGI6IG51bWJlciwgYzogbnVtYmVyLCBkOiBudW1iZXIpIHtcclxuICBjb25zdCB0YyA9ICh0IC89IGQpICogdCAqIHQ7XHJcbiAgcmV0dXJuIGIgKyBjICogdGM7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpbk91dFF1aW50aWModDogbnVtYmVyLCBiOiBudW1iZXIsIGM6IG51bWJlciwgZDogbnVtYmVyKSB7XHJcbiAgY29uc3QgdHMgPSAodCAvPSBkKSAqIHQsXHJcbiAgICB0YyA9IHRzICogdDtcclxuICByZXR1cm4gYiArIGMgKiAoNiAqIHRjICogdHMgKyAtMTUgKiB0cyAqIHRzICsgMTAgKiB0Yyk7XHJcbn1cclxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgU2Nyb2xsaW5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3Njcm9sbGluZyc7XHJcbmltcG9ydCB7IFNtb290aFNjcm9sbCB9IGZyb20gJy4vc21vb3RoLXNjcm9sbCc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtTY3JvbGxpbmdNb2R1bGVdLFxyXG4gIGRlY2xhcmF0aW9uczogW1Ntb290aFNjcm9sbF0sXHJcbiAgZXhwb3J0czogW1Ntb290aFNjcm9sbF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFNtb290aFNjcm9sbE1vZHVsZSB7XHJcbn1cclxuIiwiaW1wb3J0IHtcclxuICBDb21wb25lbnQsXHJcbiAgSW5qZWN0LFxyXG4gIElucHV0LFxyXG4gIFZpZXdDaGlsZCxcclxuICBBZnRlclZpZXdJbml0LFxyXG4gIE9uRGVzdHJveSxcclxuICBFbGVtZW50UmVmLFxyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIFBMQVRGT1JNX0lEXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IGlzUGxhdGZvcm1Ccm93c2VyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgQ2RrU2Nyb2xsYWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9zY3JvbGxpbmcnO1xyXG5pbXBvcnQgeyBCcmVha3BvaW50T2JzZXJ2ZXIsIEJyZWFrcG9pbnRzLCBCcmVha3BvaW50U3RhdGUgfSBmcm9tICdAYW5ndWxhci9jZGsvbGF5b3V0JztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3ViamVjdCwgQmVoYXZpb3JTdWJqZWN0LCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgbWFwLCB0YXAsIHRocm90dGxlVGltZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgU21vb3RoU2Nyb2xsLCBTbW9vdGhTY3JvbGxFYXNlRnVuYyB9IGZyb20gJy4uL3Ntb290aC1zY3JvbGwvc21vb3RoLXNjcm9sbCc7XHJcblxyXG5pbnRlcmZhY2UgTmdTY3JvbGxiYXJTdGF0ZSB7XHJcbiAgdmlld1N0eWxlPzoge1xyXG4gICAgd2lkdGg/OiBzdHJpbmc7XHJcbiAgICBoZWlnaHQ/OiBzdHJpbmc7XHJcbiAgICBwYWRkaW5nUmlnaHQ/OiBzdHJpbmc7XHJcbiAgICBwYWRkaW5nQm90dG9tPzogc3RyaW5nO1xyXG4gIH07XHJcbiAgZGlzcGxheVg/OiBib29sZWFuO1xyXG4gIGRpc3BsYXlZPzogYm9vbGVhbjtcclxufVxyXG5cclxuY29uc3QgZGVmYXVsdFN0YXRlOiBOZ1Njcm9sbGJhclN0YXRlID0ge1xyXG4gIHZpZXdTdHlsZToge1xyXG4gICAgcGFkZGluZ1JpZ2h0OiAnMCcsXHJcbiAgICBwYWRkaW5nQm90dG9tOiAnMCcsXHJcbiAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgaGVpZ2h0OiAnMTAwJSdcclxuICB9LFxyXG4gIGRpc3BsYXlYOiBmYWxzZSxcclxuICBkaXNwbGF5WTogZmFsc2VcclxufTtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbmctc2Nyb2xsYmFyJyxcclxuICB0ZW1wbGF0ZVVybDogJ25nLXNjcm9sbGJhci5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnbmctc2Nyb2xsYmFyLnNjc3MnXSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBob3N0OiB7XHJcbiAgICAnW2F0dHIudHJhY2tYXSc6ICd0cmFja1gnLFxyXG4gICAgJ1thdHRyLnRyYWNrWV0nOiAndHJhY2tZJyxcclxuICAgICdbY2xhc3Mubmctc2Nyb2xsYmFyLWF1dG8taGlkZV0nOiAnYXV0b0hpZGUnXHJcbiAgfVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTmdTY3JvbGxiYXIgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xyXG5cclxuICAvKiogSG9yaXpvbnRhbCBjdXN0b20gc2Nyb2xsYmFyICovXHJcbiAgQElucHV0KCkgdHJhY2tYID0gZmFsc2U7XHJcbiAgLyoqIFZlcnRpY2FsIGN1c3RvbSBTY3JvbGxiYXIgKi9cclxuICBASW5wdXQoKSB0cmFja1kgPSB0cnVlO1xyXG4gIC8qKiBBdXRvIGhpZGUgc2Nyb2xsYmFycyBvbiBtb3VzZSBsZWF2ZSAqL1xyXG4gIEBJbnB1dCgpIGF1dG9IaWRlID0gZmFsc2U7XHJcbiAgLyoqIEF1dG8gdXBkYXRlIHNjcm9sbGJhcnMgb24gY29udGVudCBjaGFuZ2VzIChNdXRhdGlvbiBPYnNlcnZlcikgKi9cclxuICBASW5wdXQoKSBhdXRvVXBkYXRlID0gdHJ1ZTtcclxuICAvKiogVmlld3BvcnQgY2xhc3MgKi9cclxuICBASW5wdXQoKSB2aWV3Q2xhc3M6IHN0cmluZztcclxuICAvKiogU2Nyb2xsYmFycyBjbGFzcyAqL1xyXG4gIEBJbnB1dCgpIGJhckNsYXNzOiBzdHJpbmc7XHJcbiAgLyoqIFNjcm9sbGJhcnMgdGh1bWJuYWlscyBjbGFzcyAqL1xyXG4gIEBJbnB1dCgpIHRodW1iQ2xhc3M6IHN0cmluZztcclxuICAvKiogVGhlIHNtb290aCBzY3JvbGwgZHVyYXRpb24gd2hlbiBhIHNjcm9sbGJhciBpcyBjbGlja2VkICovXHJcbiAgQElucHV0KCkgc2Nyb2xsVG9EdXJhdGlvbiA9IDMwMDtcclxuICAvKiogVXNlIG92ZXJsYXkgc2Nyb2xsYmFycyAqL1xyXG4gIEBJbnB1dCgpIG92ZXJsYXk6IGJvb2xlYW47XHJcbiAgLyoqIERpc2FibGUgY3VzdG9tIHNjcm9sbGJhcnMgb24gc3BlY2lmaWMgYnJlYWtwb2ludHMgKi9cclxuICBASW5wdXQoKSBkaXNhYmxlT25CcmVha3BvaW50cyA9IFtcclxuICAgIEJyZWFrcG9pbnRzLkhhbmRzZXRMYW5kc2NhcGUsXHJcbiAgICBCcmVha3BvaW50cy5IYW5kc2V0UG9ydHJhaXRcclxuICBdO1xyXG5cclxuICAvKiogRGlzYWJsZSBjdXN0b20gc2Nyb2xsYmFycyBhbmQgc3dpdGNoIGJhY2sgdG8gbmF0aXZlIHNjcm9sbGJhcnMgKi9cclxuICBASW5wdXQoJ2Rpc2FibGVkJylcclxuICBnZXQgZGlzYWJsZWQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fZGlzYWJsZWQ7XHJcbiAgfVxyXG5cclxuICBzZXQgZGlzYWJsZWQoZGlzYWJsZTogYm9vbGVhbikge1xyXG4gICAgZGlzYWJsZSA/IHRoaXMuZGlzYWJsZSgpIDogdGhpcy5lbmFibGUoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX2Rpc2FibGVkID0gZmFsc2U7XHJcblxyXG4gIEBWaWV3Q2hpbGQoQ2RrU2Nyb2xsYWJsZSkgc2Nyb2xsYWJsZTogQ2RrU2Nyb2xsYWJsZTtcclxuICBAVmlld0NoaWxkKFNtb290aFNjcm9sbCkgc21vb3RoU2Nyb2xsOiBTbW9vdGhTY3JvbGw7XHJcbiAgQFZpZXdDaGlsZCgndmVydGljYWwnLCB7cmVhZDogRWxlbWVudFJlZn0pIHZlcnRpY2FsU2Nyb2xsYmFyOiBFbGVtZW50UmVmO1xyXG4gIEBWaWV3Q2hpbGQoJ2hvcml6b250YWwnLCB7cmVhZDogRWxlbWVudFJlZn0pIGhvcml6b250YWxTY3JvbGxiYXI6IEVsZW1lbnRSZWY7XHJcblxyXG4gIC8qKiBOYXRpdmUgc2Nyb2xsYmFyIHNpemUgKi9cclxuICBwcml2YXRlIF9uYXRpdmVTY3JvbGxiYXJTaXplOiBzdHJpbmc7XHJcblxyXG4gIC8qKiBTY3JvbGxiYXIgc3RhdGUgKi9cclxuICBwcml2YXRlIF9zdGF0ZSA9IG5ldyBCZWhhdmlvclN1YmplY3Q8TmdTY3JvbGxiYXJTdGF0ZT4oZGVmYXVsdFN0YXRlKTtcclxuICB2aWV3U3R5bGU6IE9ic2VydmFibGU8YW55PiA9IHRoaXMuX3N0YXRlLnBpcGUobWFwKChzdGF0ZTogTmdTY3JvbGxiYXJTdGF0ZSkgPT4gc3RhdGUudmlld1N0eWxlKSk7XHJcbiAgZGlzcGxheVg6IE9ic2VydmFibGU8Ym9vbGVhbj4gPSB0aGlzLl9zdGF0ZS5waXBlKG1hcCgoc3RhdGU6IE5nU2Nyb2xsYmFyU3RhdGUpID0+IHN0YXRlLmRpc3BsYXlYKSk7XHJcbiAgZGlzcGxheVk6IE9ic2VydmFibGU8Ym9vbGVhbj4gPSB0aGlzLl9zdGF0ZS5waXBlKG1hcCgoc3RhdGU6IE5nU2Nyb2xsYmFyU3RhdGUpID0+IHN0YXRlLmRpc3BsYXlZKSk7XHJcblxyXG4gIC8qKiBNdXRhdGlvbiBvYnNlcnZlciBzdWJzY3JpcHRpb24gKi9cclxuICBwcml2YXRlIF91cGRhdGVPYnNlcnZlclN1YiQgPSBTdWJzY3JpcHRpb24uRU1QVFk7XHJcbiAgLyoqIENESyBicmVha3BvaW50IHN1YnNjcmlwdGlvbiAqL1xyXG4gIHByaXZhdGUgX2JyZWFrcG9pbnRTdWIkID0gU3Vic2NyaXB0aW9uLkVNUFRZO1xyXG4gIC8qKiBWaWV3cG9ydCBFbGVtZW50ICovXHJcbiAgdmlldzogSFRNTEVsZW1lbnQ7XHJcbiAgLyoqIE9ic2VydmUgY29udGVudCBjaGFuZ2VzICovXHJcbiAgcHJpdmF0ZSBfb2JzZXJ2ZXI6IE11dGF0aW9uT2JzZXJ2ZXI7XHJcblxyXG4gIC8qKiBTdGVhbSB0aGF0IGVtaXRzIHdoZW4gc2Nyb2xsYmFyIHRodW1ibmFpbCBuZWVkcyB0byB1cGRhdGUgKGZvciBpbnRlcm5hbCB1c2VzKSAqL1xyXG4gIHByaXZhdGUgX3VwZGF0ZU9ic2VydmVyID0gbmV3IFN1YmplY3QoKTtcclxuICB1cGRhdGVPYnNlcnZlciA9IHRoaXMuX3VwZGF0ZU9ic2VydmVyLmFzT2JzZXJ2YWJsZSgpO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGJyZWFrcG9pbnRPYnNlcnZlcjogQnJlYWtwb2ludE9ic2VydmVyLFxyXG4gICAgICAgICAgICAgIEBJbmplY3QoUExBVEZPUk1fSUQpIHByaXZhdGUgX3BsYXRmb3JtOiBPYmplY3QpIHtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuICAgIHRoaXMudmlldyA9IHRoaXMuc2Nyb2xsYWJsZS5nZXRFbGVtZW50UmVmKCkubmF0aXZlRWxlbWVudDtcclxuXHJcbiAgICBpZiAoIXRoaXMuZGlzYWJsZWQpIHtcclxuICAgICAgaWYgKHRoaXMuZGlzYWJsZU9uQnJlYWtwb2ludHMpIHtcclxuICAgICAgICAvLyBFbmFibGUvRGlzYWJsZSBjdXN0b20gc2Nyb2xsYmFyIG9uIGJyZWFrcG9pbnRzIChVc2VkIHRvIGRpc2FibGUgc2Nyb2xsYmFycyBvbiBtb2JpbGUgcGhvbmVzKVxyXG4gICAgICAgIHRoaXMuX2JyZWFrcG9pbnRTdWIkID0gdGhpcy5icmVha3BvaW50T2JzZXJ2ZXIub2JzZXJ2ZSh0aGlzLmRpc2FibGVPbkJyZWFrcG9pbnRzKS5waXBlKFxyXG4gICAgICAgICAgdGFwKChyZXN1bHQ6IEJyZWFrcG9pbnRTdGF0ZSkgPT4gcmVzdWx0Lm1hdGNoZXMgPyB0aGlzLmRpc2FibGUoKSA6IHRoaXMuZW5hYmxlKCkpXHJcbiAgICAgICAgKS5zdWJzY3JpYmUoKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmVuYWJsZSgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gVXBkYXRlIHN0YXRlIG9uIGNvbnRlbnQgY2hhbmdlc1xyXG4gICAgdGhpcy5fdXBkYXRlT2JzZXJ2ZXJTdWIkID0gdGhpcy51cGRhdGVPYnNlcnZlci5waXBlKFxyXG4gICAgICB0aHJvdHRsZVRpbWUoMjAwKSxcclxuICAgICAgdGFwKCgpID0+IHRoaXMudXBkYXRlU3RhdGUoKSlcclxuICAgICkuc3Vic2NyaWJlKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpIHtcclxuICAgIHRoaXMuX2JyZWFrcG9pbnRTdWIkLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB0aGlzLl91cGRhdGVPYnNlcnZlclN1YiQudW5zdWJzY3JpYmUoKTtcclxuICAgIGlmICh0aGlzLl9vYnNlcnZlcikge1xyXG4gICAgICB0aGlzLl9vYnNlcnZlci5kaXNjb25uZWN0KCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBVcGRhdGUgc2Nyb2xsYmFyIHRodW1ibmFpbCBwb3NpdGlvblxyXG4gICAqL1xyXG4gIHVwZGF0ZSgpIHtcclxuICAgIGlmICghdGhpcy5kaXNhYmxlZCkge1xyXG4gICAgICB0aGlzLl91cGRhdGVPYnNlcnZlci5uZXh0KCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBFbmFibGUgY3VzdG9tIHNjcm9sbGJhclxyXG4gICAqL1xyXG4gIGVuYWJsZSgpIHtcclxuICAgIGlmICh0aGlzLnZpZXcpIHtcclxuICAgICAgdGhpcy5fZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgICAgLy8gSGlkZSBuYXRpdmUgc2Nyb2xsYmFyc1xyXG4gICAgICB0aGlzLl9uYXRpdmVTY3JvbGxiYXJTaXplID0gYCR7dGhpcy52aWV3Lm9mZnNldFdpZHRoIC0gdGhpcy52aWV3LmNsaWVudFdpZHRoICsgMX1weGA7XHJcbiAgICAgIHRoaXMudXBkYXRlU3RhdGUoKTtcclxuXHJcbiAgICAgIGlmICh0aGlzLmF1dG9VcGRhdGUgJiYgaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5fcGxhdGZvcm0pKSB7XHJcbiAgICAgICAgLy8gT2JzZXJ2ZSBjb250ZW50IGNoYW5nZXNcclxuICAgICAgICB0aGlzLl9vYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKCgpID0+IHRoaXMudXBkYXRlKCkpO1xyXG4gICAgICAgIHRoaXMuX29ic2VydmVyLm9ic2VydmUodGhpcy52aWV3LCB7c3VidHJlZTogdHJ1ZSwgY2hpbGRMaXN0OiB0cnVlLCBjaGFyYWN0ZXJEYXRhOiB0cnVlfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIERpc2FibGUgY3VzdG9tIHNjcm9sbGJhclxyXG4gICAqL1xyXG4gIGRpc2FibGUoKSB7XHJcbiAgICB0aGlzLl9kaXNhYmxlZCA9IHRydWU7XHJcbiAgICAvLyBSZXNldCBhbmQgYnJpbmcgYmFjayBuYXRpdmUgc2Nyb2xsYmFyc1xyXG4gICAgdGhpcy5fc3RhdGUubmV4dChkZWZhdWx0U3RhdGUpO1xyXG4gICAgaWYgKHRoaXMuX29ic2VydmVyKSB7XHJcbiAgICAgIHRoaXMuX29ic2VydmVyLmRpc2Nvbm5lY3QoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNjcm9sbFRvKG9wdGlvbnM6IFNjcm9sbFRvT3B0aW9ucyk6IE9ic2VydmFibGU8dm9pZD4ge1xyXG4gICAgcmV0dXJuIHRoaXMuc21vb3RoU2Nyb2xsLnNjcm9sbFRvKG9wdGlvbnMpO1xyXG4gIH1cclxuXHJcbiAgc2Nyb2xsVG9FbGVtZW50KHNlbGVjdG9yOiBzdHJpbmcsIG9mZnNldCA9IDAsIGR1cmF0aW9uPzogbnVtYmVyLCBlYXNlRnVuYz86IFNtb290aFNjcm9sbEVhc2VGdW5jKTogT2JzZXJ2YWJsZTx2b2lkPiB7XHJcbiAgICByZXR1cm4gdGhpcy5zbW9vdGhTY3JvbGwuc2Nyb2xsVG9FbGVtZW50KHNlbGVjdG9yLCBvZmZzZXQsIGR1cmF0aW9uLCBlYXNlRnVuYyk7XHJcbiAgfVxyXG5cclxuICBzY3JvbGxYVG8odG86IG51bWJlciwgZHVyYXRpb24/OiBudW1iZXIsIGVhc2VGdW5jPzogU21vb3RoU2Nyb2xsRWFzZUZ1bmMpOiBPYnNlcnZhYmxlPHZvaWQ+IHtcclxuICAgIHJldHVybiB0aGlzLnNtb290aFNjcm9sbC5zY3JvbGxYVG8odG8sIGR1cmF0aW9uLCBlYXNlRnVuYyk7XHJcbiAgfVxyXG5cclxuICBzY3JvbGxZVG8odG86IG51bWJlciwgZHVyYXRpb24/OiBudW1iZXIsIGVhc2VGdW5jPzogU21vb3RoU2Nyb2xsRWFzZUZ1bmMpOiBPYnNlcnZhYmxlPHZvaWQ+IHtcclxuICAgIHJldHVybiB0aGlzLnNtb290aFNjcm9sbC5zY3JvbGxZVG8odG8sIGR1cmF0aW9uLCBlYXNlRnVuYyk7XHJcbiAgfVxyXG5cclxuICBzY3JvbGxUb1RvcChkdXJhdGlvbj86IG51bWJlciwgZWFzZUZ1bmM/OiBTbW9vdGhTY3JvbGxFYXNlRnVuYyk6IE9ic2VydmFibGU8dm9pZD4ge1xyXG4gICAgcmV0dXJuIHRoaXMuc21vb3RoU2Nyb2xsLnNjcm9sbFRvVG9wKGR1cmF0aW9uLCBlYXNlRnVuYyk7XHJcbiAgfVxyXG5cclxuICBzY3JvbGxUb0JvdHRvbShkdXJhdGlvbj86IG51bWJlciwgZWFzZUZ1bmM/OiBTbW9vdGhTY3JvbGxFYXNlRnVuYyk6IE9ic2VydmFibGU8dm9pZD4ge1xyXG4gICAgcmV0dXJuIHRoaXMuc21vb3RoU2Nyb2xsLnNjcm9sbFRvQm90dG9tKGR1cmF0aW9uLCBlYXNlRnVuYyk7XHJcbiAgfVxyXG5cclxuICBzY3JvbGxUb1JpZ2h0KGR1cmF0aW9uPzogbnVtYmVyLCBlYXNlRnVuYz86IFNtb290aFNjcm9sbEVhc2VGdW5jKTogT2JzZXJ2YWJsZTx2b2lkPiB7XHJcbiAgICByZXR1cm4gdGhpcy5zbW9vdGhTY3JvbGwuc2Nyb2xsVG9SaWdodChkdXJhdGlvbiwgZWFzZUZ1bmMpO1xyXG4gIH1cclxuXHJcbiAgc2Nyb2xsVG9MZWZ0KGR1cmF0aW9uPzogbnVtYmVyLCBlYXNlRnVuYz86IFNtb290aFNjcm9sbEVhc2VGdW5jKTogT2JzZXJ2YWJsZTx2b2lkPiB7XHJcbiAgICByZXR1cm4gdGhpcy5zbW9vdGhTY3JvbGwuc2Nyb2xsVG9MZWZ0KGR1cmF0aW9uLCBlYXNlRnVuYyk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHVwZGF0ZVN0YXRlKCkge1xyXG4gICAgbGV0IHBhZGRpbmdCb3R0b20gPSAnMCcsIHBhZGRpbmdSaWdodCA9ICcwJywgZGlzcGxheVkgPSBmYWxzZSwgZGlzcGxheVggPSBmYWxzZTtcclxuICAgIGNvbnN0IHNpemUgPSBgY2FsYygxMDAlICsgJHt0aGlzLl9uYXRpdmVTY3JvbGxiYXJTaXplfSlgO1xyXG4gICAgaWYgKHRoaXMudHJhY2tZKSB7XHJcbiAgICAgIC8vIENoZWNrIGlmIHZlcnRpY2FsIHNjcm9sbGJhciBzaG91bGQgYmUgZGlzcGxheWVkXHJcbiAgICAgIGlmICh0aGlzLnZpZXcuc2Nyb2xsSGVpZ2h0ID4gdGhpcy52aWV3LmNsaWVudEhlaWdodCkge1xyXG4gICAgICAgIGRpc3BsYXlZID0gdHJ1ZTtcclxuICAgICAgICBwYWRkaW5nUmlnaHQgPSB0aGlzLm92ZXJsYXkgPyAnMCcgOiB0aGlzLl9uYXRpdmVTY3JvbGxiYXJTaXplO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy50cmFja1gpIHtcclxuICAgICAgLy8gQ2hlY2sgaWYgaG9yaXpvbnRhbCBzY3JvbGxiYXIgc2hvdWxkIGJlIGRpc3BsYXllZFxyXG4gICAgICBpZiAodGhpcy52aWV3LnNjcm9sbFdpZHRoID4gdGhpcy52aWV3LmNsaWVudFdpZHRoKSB7XHJcbiAgICAgICAgZGlzcGxheVggPSB0cnVlO1xyXG4gICAgICAgIHBhZGRpbmdCb3R0b20gPSB0aGlzLm92ZXJsYXkgPyAnMCcgOiB0aGlzLl9uYXRpdmVTY3JvbGxiYXJTaXplO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB0aGlzLl9zdGF0ZS5uZXh0KHtcclxuICAgICAgdmlld1N0eWxlOiB7XHJcbiAgICAgICAgd2lkdGg6IHNpemUsXHJcbiAgICAgICAgaGVpZ2h0OiBzaXplLFxyXG4gICAgICAgIHBhZGRpbmdCb3R0b20sXHJcbiAgICAgICAgcGFkZGluZ1JpZ2h0XHJcbiAgICAgIH0sXHJcbiAgICAgIGRpc3BsYXlYLFxyXG4gICAgICBkaXNwbGF5WVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxufVxyXG4iLCJpbXBvcnQgeyBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3ksIElucHV0LCBWaWV3Q2hpbGQsIE5nWm9uZSwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBpc1BsYXRmb3JtQnJvd3NlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IE9ic2VydmFibGUsIEJlaGF2aW9yU3ViamVjdCwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IGRlYm91bmNlVGltZSwgdGhyb3R0bGVUaW1lLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IE5nU2Nyb2xsYmFyIH0gZnJvbSAnLi9uZy1zY3JvbGxiYXInO1xyXG5cclxuZXhwb3J0IGNsYXNzIE5nU2Nyb2xsYmFyVGh1bWIgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xyXG5cclxuICAvKiogU2Nyb2xsYmFyIGNsYXNzICovXHJcbiAgQElucHV0KCkgYmFyQ2xhc3M6IHN0cmluZztcclxuICAvKiogU2Nyb2xsYmFyIHRodW1ibmFpbCBjbGFzcyAqL1xyXG4gIEBJbnB1dCgpIHRodW1iQ2xhc3M6IHN0cmluZztcclxuICAvKiogVGhlIHNjcm9sbCBkdXJhdGlvbiB3aGVuIHNjcm9sbGJhciAobm90IHRoZSB0aHVtYm5haWwpIGlzIGNsaWNrZWQgKi9cclxuICBASW5wdXQoKSBzY3JvbGxUb0R1cmF0aW9uOiBudW1iZXI7XHJcblxyXG4gIEBWaWV3Q2hpbGQoJ2JhcicpIGJhcjogRWxlbWVudFJlZjtcclxuICBAVmlld0NoaWxkKCd0aHVtYicpIHRodW1iOiBFbGVtZW50UmVmO1xyXG5cclxuICBwcm90ZWN0ZWQgX21pblRodW1iU2l6ZSA9IDIwO1xyXG4gIHByb3RlY3RlZCBfbmF0dXJhbFRodW1iU2l6ZSA9IDA7XHJcbiAgcHJvdGVjdGVkIF90aHVtYlNpemUgPSAwO1xyXG4gIHByb3RlY3RlZCBfdHJhY2tNYXggPSAwO1xyXG4gIHByb3RlY3RlZCBfc2Nyb2xsTWF4ID0gMDtcclxuICBwcm90ZWN0ZWQgX2N1cnJQb3MgPSAwO1xyXG4gIHByb3RlY3RlZCBfc2Nyb2xsJCA9IFN1YnNjcmlwdGlvbi5FTVBUWTtcclxuICBwcm90ZWN0ZWQgX3RodW1iRHJhZyQgPSBTdWJzY3JpcHRpb24uRU1QVFk7XHJcbiAgcHJvdGVjdGVkIF91cGRhdGVPYnNlcnZlciQgPSBTdWJzY3JpcHRpb24uRU1QVFk7XHJcbiAgcHJvdGVjdGVkIF92aWV3OiBIVE1MRWxlbWVudDtcclxuICBwcm90ZWN0ZWQgX3N0YXRlID0gbmV3IEJlaGF2aW9yU3ViamVjdDxhbnk+KHtcclxuICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZTNkKDAsIDAsIDApJ1xyXG4gIH0pO1xyXG5cclxuICAvKiogU2Nyb2xsYmFyIHN0eWxlcyAqL1xyXG4gIHJlYWRvbmx5IHNjcm9sbGJhclN0eWxlID0gdGhpcy5fc3RhdGUuYXNPYnNlcnZhYmxlKCk7XHJcblxyXG4gIGdldCB0aHVtYlNpemUoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiAwO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIF9wYXJlbnQ6IE5nU2Nyb2xsYmFyLFxyXG4gICAgICAgICAgICAgIHByb3RlY3RlZCBfcGxhdGZvcm06IE9iamVjdCxcclxuICAgICAgICAgICAgICBwcm90ZWN0ZWQgX3pvbmU6IE5nWm9uZSkge1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCkge1xyXG4gICAgLy8gQXZvaWQgU1NSIEVycm9yXHJcbiAgICBpZiAoaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5fcGxhdGZvcm0pKSB7XHJcbiAgICAgIHRoaXMuX3ZpZXcgPSB0aGlzLl9wYXJlbnQuc2Nyb2xsYWJsZS5nZXRFbGVtZW50UmVmKCkubmF0aXZlRWxlbWVudDtcclxuICAgICAgLy8gU3RhcnQgdmlldyBzY3JvbGwgZXZlbnRcclxuICAgICAgdGhpcy5fc2Nyb2xsJCA9IHRoaXMuX3BhcmVudC5zY3JvbGxhYmxlLmVsZW1lbnRTY3JvbGxlZCgpXHJcbiAgICAgICAgLnN1YnNjcmliZSgoKSA9PiB0aGlzLnVwZGF0ZVNjcm9sbGJhcigpKTtcclxuXHJcbiAgICAgIC8vIFN0YXJ0IHNjcm9sbGJhciB0aHVtYm5haWwgZHJhZyBldmVudHNcclxuICAgICAgdGhpcy5fem9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PlxyXG4gICAgICAgIHRoaXMuX3RodW1iRHJhZyQgPSB0aGlzLnN0YXJ0VGh1bWJFdmVudHMoKS5zdWJzY3JpYmUoKVxyXG4gICAgICApO1xyXG5cclxuICAgICAgLy8gVXBkYXRlIHNjcm9sbGJhciB0aHVtYm5haWwgc2l6ZSBvbiBjb250ZW50IGNoYW5nZXNcclxuICAgICAgdGhpcy5fdXBkYXRlT2JzZXJ2ZXIkID0gdGhpcy5fcGFyZW50LnVwZGF0ZU9ic2VydmVyLnBpcGUoXHJcbiAgICAgICAgdGhyb3R0bGVUaW1lKDIwMCksXHJcbiAgICAgICAgdGFwKCgpID0+IHRoaXMudXBkYXRlU2Nyb2xsYmFyKCkpLFxyXG4gICAgICAgIC8vIE1ha2Ugc3VyZSBzY3JvbGxiYXIgdGh1bWJuYWlsIHBvc2l0aW9uIGlzIGNvcnJlY3QgYWZ0ZXIgdGhlIG5ldyBjb250ZW50IGlzIHJlbmRlcmVkXHJcbiAgICAgICAgZGVib3VuY2VUaW1lKDIwMCksXHJcbiAgICAgICAgdGFwKCgpID0+IHRoaXMudXBkYXRlU2Nyb2xsYmFyKCkpLFxyXG4gICAgICApLnN1YnNjcmliZSgpO1xyXG5cclxuICAgICAgLy8gSW5pdGlhbGl6ZSBzY3JvbGxiYXJcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLnVwZGF0ZVNjcm9sbGJhcigpLCAyMDApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICB0aGlzLl9zY3JvbGwkLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB0aGlzLl90aHVtYkRyYWckLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB0aGlzLl91cGRhdGVPYnNlcnZlciQudW5zdWJzY3JpYmUoKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFNjcm9sbGJhciBjbGlja1xyXG4gICAqIEBwYXJhbSBlIE1vdXNlIGV2ZW50XHJcbiAgICovXHJcbiAgb25TY3JvbGxiYXJIb2xkZXJDbGljayhlOiBhbnkpIHtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFVwZGF0ZSBzY3JvbGxiYXJcclxuICAgKi9cclxuICBwcm90ZWN0ZWQgdXBkYXRlU2Nyb2xsYmFyKCkge1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU3RhcnQgdmVydGljYWwgdGh1bWIgd29ya2VyXHJcbiAgICovXHJcbiAgcHJvdGVjdGVkIHN0YXJ0VGh1bWJFdmVudHMoKTogT2JzZXJ2YWJsZTxhbnk+IHwgdW5kZWZpbmVkIHtcclxuICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBHZXQgc2Nyb2xsYmFyIHRodW1iIHNpemVcclxuICAgKiBAcGFyYW0gbmF0dXJhbFRodW1iU2l6ZVxyXG4gICAqIEBwYXJhbSBzY3JvbGxNYXhcclxuICAgKi9cclxuICBwcm90ZWN0ZWQgc2Nyb2xsQm91bmRhcmllcyhuYXR1cmFsVGh1bWJTaXplOiBudW1iZXIsIHNjcm9sbE1heDogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgIHJldHVybiAobmF0dXJhbFRodW1iU2l6ZSA8IHRoaXMuX21pblRodW1iU2l6ZSkgPyB0aGlzLl9taW5UaHVtYlNpemUgOiBzY3JvbGxNYXggPyBuYXR1cmFsVGh1bWJTaXplIDogMDtcclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCB1cGRhdGVTdGF0ZShzdGF0ZTogYW55KSB7XHJcbiAgICB0aGlzLl9zdGF0ZS5uZXh0KHsuLi50aGlzLl9zdGF0ZS52YWx1ZSwgLi4uc3RhdGV9KTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbmplY3QsIE5nWm9uZSwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIGZvcndhcmRSZWYsIFBMQVRGT1JNX0lEIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgZnJvbUV2ZW50LCBPYnNlcnZhYmxlLCBhbmltYXRpb25GcmFtZVNjaGVkdWxlciB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBtZXJnZU1hcCwgcGx1Y2ssIHRha2VVbnRpbCwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBOZ1Njcm9sbGJhciB9IGZyb20gJy4vbmctc2Nyb2xsYmFyJztcclxuaW1wb3J0IHsgTmdTY3JvbGxiYXJUaHVtYiB9IGZyb20gJy4vbmctc2Nyb2xsYmFyLXRodW1iJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbmctc2Nyb2xsYmFyLXZlcnRpY2FsJyxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPGRpdiAjYmFyIGNsYXNzPVwibmctc2Nyb2xsYmFyIG5nLXNjcm9sbGJhci12ZXJ0aWNhbCB7e2JhckNsYXNzfX1cIiAobW91c2Vkb3duKT1cIm9uU2Nyb2xsYmFySG9sZGVyQ2xpY2soJGV2ZW50KVwiPlxyXG4gICAgICA8ZGl2ICN0aHVtYiBjbGFzcz1cIm5nLXNjcm9sbGJhci10aHVtYiB7e3RodW1iQ2xhc3N9fVwiIFtuZ1N0eWxlXT1cInNjcm9sbGJhclN0eWxlIHwgYXN5bmNcIj48L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIGBcclxufSlcclxuZXhwb3J0IGNsYXNzIE5nU2Nyb2xsYmFyVmVydGljYWwgZXh0ZW5kcyBOZ1Njcm9sbGJhclRodW1iIHtcclxuXHJcbiAgLyoqXHJcbiAgICogQ2FsY3VsYXRlIHNjcm9sbGJhciB0aHVtYm5haWwgc2l6ZVxyXG4gICAqL1xyXG4gIGdldCB0aHVtYlNpemUoKTogbnVtYmVyIHtcclxuICAgIGNvbnN0IGJhckNsaWVudEhlaWdodCA9IHRoaXMuYmFyLm5hdGl2ZUVsZW1lbnQuY2xpZW50SGVpZ2h0O1xyXG4gICAgY29uc3Qgdmlld0NsaWVudEhlaWdodCA9IHRoaXMuX3ZpZXcuY2xpZW50SGVpZ2h0O1xyXG4gICAgY29uc3Qgdmlld1Njcm9sbEhlaWdodCA9IHRoaXMuX3ZpZXcuc2Nyb2xsSGVpZ2h0O1xyXG4gICAgdGhpcy5fbmF0dXJhbFRodW1iU2l6ZSA9IGJhckNsaWVudEhlaWdodCAvIHZpZXdTY3JvbGxIZWlnaHQgKiBiYXJDbGllbnRIZWlnaHQ7XHJcbiAgICB0aGlzLl9zY3JvbGxNYXggPSB2aWV3U2Nyb2xsSGVpZ2h0IC0gdmlld0NsaWVudEhlaWdodDtcclxuICAgIHJldHVybiB0aGlzLnNjcm9sbEJvdW5kYXJpZXModGhpcy5fbmF0dXJhbFRodW1iU2l6ZSwgdGhpcy5fc2Nyb2xsTWF4KTtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoRE9DVU1FTlQpIHByb3RlY3RlZCBfZG9jdW1lbnQ6IGFueSxcclxuICAgICAgICAgICAgICBASW5qZWN0KGZvcndhcmRSZWYoKCkgPT4gTmdTY3JvbGxiYXIpKSBwcm90ZWN0ZWQgX3BhcmVudDogTmdTY3JvbGxiYXIsXHJcbiAgICAgICAgICAgICAgQEluamVjdChQTEFURk9STV9JRCkgX3BsYXRmb3JtOiBPYmplY3QsXHJcbiAgICAgICAgICAgICAgcHJvdGVjdGVkIF96b25lOiBOZ1pvbmUpIHtcclxuICAgIHN1cGVyKF9wYXJlbnQsIF9wbGF0Zm9ybSwgX3pvbmUpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU2Nyb2xsYmFyIGNsaWNrXHJcbiAgICogQHBhcmFtIGUgTW91c2UgZXZlbnRcclxuICAgKi9cclxuICBvblNjcm9sbGJhckhvbGRlckNsaWNrKGU6IGFueSkge1xyXG4gICAgaWYgKGUudGFyZ2V0ID09PSBlLmN1cnJlbnRUYXJnZXQpIHtcclxuICAgICAgY29uc3Qgb2Zmc2V0WSA9IGUub2Zmc2V0WSAtIHRoaXMuX25hdHVyYWxUaHVtYlNpemUgKiAuNTtcclxuICAgICAgY29uc3QgdGh1bWJQb3NpdGlvblBlcmNlbnRhZ2UgPSBvZmZzZXRZICogMTAwIC8gdGhpcy5iYXIubmF0aXZlRWxlbWVudC5jbGllbnRIZWlnaHQ7XHJcbiAgICAgIGNvbnN0IHZhbHVlID0gdGh1bWJQb3NpdGlvblBlcmNlbnRhZ2UgKiB0aGlzLl92aWV3LnNjcm9sbEhlaWdodCAvIDEwMDtcclxuICAgICAgdGhpcy5fcGFyZW50LnNjcm9sbFRvKHt0b3A6IHZhbHVlLCBkdXJhdGlvbjogdGhpcy5zY3JvbGxUb0R1cmF0aW9ufSBhcyBhbnkpLnN1YnNjcmliZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVXBkYXRlIHNjcm9sbGJhclxyXG4gICAqL1xyXG4gIHByb3RlY3RlZCB1cGRhdGVTY3JvbGxiYXIoKSB7XHJcbiAgICB0aGlzLl90aHVtYlNpemUgPSB0aGlzLnRodW1iLm5hdGl2ZUVsZW1lbnQuY2xpZW50SGVpZ2h0O1xyXG4gICAgdGhpcy5fdHJhY2tNYXggPSB0aGlzLmJhci5uYXRpdmVFbGVtZW50LmNsaWVudEhlaWdodCAtIHRoaXMuX3RodW1iU2l6ZTtcclxuICAgIHRoaXMuX2N1cnJQb3MgPSB0aGlzLl92aWV3LnNjcm9sbFRvcCAqIHRoaXMuX3RyYWNrTWF4IC8gdGhpcy5fc2Nyb2xsTWF4O1xyXG4gICAgdGhpcy5fem9uZS5ydW4oKCkgPT4ge1xyXG4gICAgICBhbmltYXRpb25GcmFtZVNjaGVkdWxlci5zY2hlZHVsZSgoKSA9PlxyXG4gICAgICAgIHRoaXMudXBkYXRlU3RhdGUoe1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiBgdHJhbnNsYXRlM2QoMCwgJHt0aGlzLl9jdXJyUG9zfXB4LCAwKWAsXHJcbiAgICAgICAgICBoZWlnaHQ6IGAke3RoaXMudGh1bWJTaXplfXB4YFxyXG4gICAgICAgIH0pXHJcbiAgICAgICk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFN0YXJ0IHZlcnRpY2FsIHRodW1iIHdvcmtlclxyXG4gICAqL1xyXG4gIHByb3RlY3RlZCBzdGFydFRodW1iRXZlbnRzKCk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICBjb25zdCBtb3VzZURvd24kID0gZnJvbUV2ZW50KHRoaXMudGh1bWIubmF0aXZlRWxlbWVudCwgJ21vdXNlZG93bicpO1xyXG4gICAgY29uc3QgbW91c2VNb3ZlJCA9IGZyb21FdmVudCh0aGlzLl9kb2N1bWVudCwgJ21vdXNlbW92ZScpO1xyXG4gICAgY29uc3QgbW91c2VVcCQgPSBmcm9tRXZlbnQodGhpcy5fZG9jdW1lbnQsICdtb3VzZXVwJykucGlwZShcclxuICAgICAgdGFwKCgpID0+IHRoaXMuX2RvY3VtZW50Lm9uc2VsZWN0c3RhcnQgPSBudWxsKVxyXG4gICAgKTtcclxuICAgIHJldHVybiBtb3VzZURvd24kLnBpcGUoXHJcbiAgICAgIHRhcCgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5fZG9jdW1lbnQub25zZWxlY3RzdGFydCA9ICgpID0+IGZhbHNlO1xyXG4gICAgICAgIC8vIEluaXRpYWxpemUgdHJhY2tNYXggZm9yIGJlZm9yZSBzdGFydCBkcmFnZ2luZ1xyXG4gICAgICAgIHRoaXMuX3RyYWNrTWF4ID0gdGhpcy5iYXIubmF0aXZlRWxlbWVudC5jbGllbnRIZWlnaHQgLSB0aGlzLl90aHVtYlNpemU7XHJcbiAgICAgIH0pLFxyXG4gICAgICBwbHVjaygnb2Zmc2V0WScpLFxyXG4gICAgICBtZXJnZU1hcCgobW91c2VEb3duT2Zmc2V0OiBudW1iZXIpID0+IG1vdXNlTW92ZSQucGlwZShcclxuICAgICAgICB0YWtlVW50aWwobW91c2VVcCQpLFxyXG4gICAgICAgIHBsdWNrKCdjbGllbnRZJyksXHJcbiAgICAgICAgdGFwKChtb3VzZU1vdmVDbGllbnQ6IG51bWJlcikgPT4ge1xyXG4gICAgICAgICAgY29uc3Qgb2Zmc2V0WSA9IG1vdXNlTW92ZUNsaWVudCAtIHRoaXMuYmFyLm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wO1xyXG4gICAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLl9zY3JvbGxNYXggKiAob2Zmc2V0WSAtIG1vdXNlRG93bk9mZnNldCkgLyB0aGlzLl90cmFja01heDtcclxuICAgICAgICAgIHRoaXMuX3BhcmVudC5zY3JvbGxhYmxlLnNjcm9sbFRvKHt0b3A6IHZhbHVlfSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgKSlcclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgSW5qZWN0LCBOZ1pvbmUsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBmb3J3YXJkUmVmLCBQTEFURk9STV9JRCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IGZyb21FdmVudCwgT2JzZXJ2YWJsZSwgYW5pbWF0aW9uRnJhbWVTY2hlZHVsZXIgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgbWVyZ2VNYXAsIHBsdWNrLCB0YWtlVW50aWwsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgTmdTY3JvbGxiYXIgfSBmcm9tICcuL25nLXNjcm9sbGJhcic7XHJcbmltcG9ydCB7IE5nU2Nyb2xsYmFyVGh1bWIgfSBmcm9tICcuL25nLXNjcm9sbGJhci10aHVtYic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ25nLXNjcm9sbGJhci1ob3Jpem9udGFsJyxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPGRpdiAjYmFyIGNsYXNzPVwibmctc2Nyb2xsYmFyIG5nLXNjcm9sbGJhci1ob3Jpem9udGFsIHt7YmFyQ2xhc3N9fVwiIChtb3VzZWRvd24pPVwib25TY3JvbGxiYXJIb2xkZXJDbGljaygkZXZlbnQpXCI+XHJcbiAgICAgIDxkaXYgI3RodW1iIGNsYXNzPVwibmctc2Nyb2xsYmFyLXRodW1iIHt7dGh1bWJDbGFzc319XCIgW25nU3R5bGVdPVwic2Nyb2xsYmFyU3R5bGUgfCBhc3luY1wiPjwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTmdTY3JvbGxiYXJIb3Jpem9udGFsIGV4dGVuZHMgTmdTY3JvbGxiYXJUaHVtYiB7XHJcblxyXG4gIC8qKlxyXG4gICAqIENhbGN1bGF0ZSBzY3JvbGxiYXIgdGh1bWJuYWlsIHNpemVcclxuICAgKi9cclxuICBnZXQgdGh1bWJTaXplKCk6IG51bWJlciB7XHJcbiAgICBjb25zdCBiYXJDbGllbnRXaWR0aCA9IHRoaXMuYmFyLm5hdGl2ZUVsZW1lbnQuY2xpZW50V2lkdGg7XHJcbiAgICBjb25zdCB2aWV3Q2xpZW50V2lkdGggPSB0aGlzLl92aWV3LmNsaWVudFdpZHRoO1xyXG4gICAgY29uc3Qgdmlld1Njcm9sbFdpZHRoID0gdGhpcy5fdmlldy5zY3JvbGxXaWR0aDtcclxuICAgIHRoaXMuX25hdHVyYWxUaHVtYlNpemUgPSBiYXJDbGllbnRXaWR0aCAvIHZpZXdTY3JvbGxXaWR0aCAqIGJhckNsaWVudFdpZHRoO1xyXG4gICAgdGhpcy5fc2Nyb2xsTWF4ID0gdmlld1Njcm9sbFdpZHRoIC0gdmlld0NsaWVudFdpZHRoO1xyXG4gICAgcmV0dXJuIHRoaXMuc2Nyb2xsQm91bmRhcmllcyh0aGlzLl9uYXR1cmFsVGh1bWJTaXplLCB0aGlzLl9zY3JvbGxNYXgpO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoQEluamVjdChET0NVTUVOVCkgcHJvdGVjdGVkIF9kb2N1bWVudDogYW55LFxyXG4gICAgICAgICAgICAgIEBJbmplY3QoZm9yd2FyZFJlZigoKSA9PiBOZ1Njcm9sbGJhcikpIHByb3RlY3RlZCBfcGFyZW50OiBOZ1Njcm9sbGJhcixcclxuICAgICAgICAgICAgICBASW5qZWN0KFBMQVRGT1JNX0lEKSBfcGxhdGZvcm06IE9iamVjdCxcclxuICAgICAgICAgICAgICBwcm90ZWN0ZWQgX3pvbmU6IE5nWm9uZSkge1xyXG4gICAgc3VwZXIoX3BhcmVudCwgX3BsYXRmb3JtLCBfem9uZSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTY3JvbGxiYXIgY2xpY2tcclxuICAgKiBAcGFyYW0gZSBNb3VzZSBldmVudFxyXG4gICAqL1xyXG4gIG9uU2Nyb2xsYmFySG9sZGVyQ2xpY2soZTogYW55KSB7XHJcbiAgICBpZiAoZS50YXJnZXQgPT09IGUuY3VycmVudFRhcmdldCkge1xyXG4gICAgICBjb25zdCBvZmZzZXRYID0gZS5vZmZzZXRYIC0gdGhpcy5fbmF0dXJhbFRodW1iU2l6ZSAqIC41O1xyXG4gICAgICBjb25zdCB0aHVtYlBvc2l0aW9uUGVyY2VudGFnZSA9IG9mZnNldFggKiAxMDAgLyB0aGlzLmJhci5uYXRpdmVFbGVtZW50LmNsaWVudFdpZHRoO1xyXG4gICAgICBjb25zdCB2YWx1ZSA9IHRodW1iUG9zaXRpb25QZXJjZW50YWdlICogdGhpcy5fdmlldy5zY3JvbGxXaWR0aCAvIDEwMDtcclxuICAgICAgdGhpcy5fcGFyZW50LnNjcm9sbFRvKHtsZWZ0OiB2YWx1ZSwgZHVyYXRpb246IHRoaXMuc2Nyb2xsVG9EdXJhdGlvbn0gYXMgYW55KS5zdWJzY3JpYmUoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFVwZGF0ZSBzY3JvbGxiYXJcclxuICAgKi9cclxuICBwcm90ZWN0ZWQgdXBkYXRlU2Nyb2xsYmFyKCkge1xyXG4gICAgdGhpcy5fdGh1bWJTaXplID0gdGhpcy50aHVtYi5uYXRpdmVFbGVtZW50LmNsaWVudFdpZHRoO1xyXG4gICAgdGhpcy5fdHJhY2tNYXggPSB0aGlzLmJhci5uYXRpdmVFbGVtZW50LmNsaWVudFdpZHRoIC0gdGhpcy5fdGh1bWJTaXplO1xyXG4gICAgdGhpcy5fY3VyclBvcyA9IHRoaXMuX3ZpZXcuc2Nyb2xsTGVmdCAqIHRoaXMuX3RyYWNrTWF4IC8gdGhpcy5fc2Nyb2xsTWF4O1xyXG4gICAgdGhpcy5fem9uZS5ydW4oKCkgPT4ge1xyXG4gICAgICBhbmltYXRpb25GcmFtZVNjaGVkdWxlci5zY2hlZHVsZSgoKSA9PlxyXG4gICAgICAgIHRoaXMudXBkYXRlU3RhdGUoe1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiBgdHJhbnNsYXRlM2QoJHt0aGlzLl9jdXJyUG9zfXB4LCAwLCAwKWAsXHJcbiAgICAgICAgICB3aWR0aDogYCR7dGhpcy50aHVtYlNpemV9cHhgXHJcbiAgICAgICAgfSlcclxuICAgICAgKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU3RhcnQgdmVydGljYWwgdGh1bWIgd29ya2VyXHJcbiAgICovXHJcbiAgcHJvdGVjdGVkIHN0YXJ0VGh1bWJFdmVudHMoKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgIGNvbnN0IG1vdXNlRG93biQgPSBmcm9tRXZlbnQodGhpcy50aHVtYi5uYXRpdmVFbGVtZW50LCAnbW91c2Vkb3duJyk7XHJcbiAgICBjb25zdCBtb3VzZU1vdmUkID0gZnJvbUV2ZW50KHRoaXMuX2RvY3VtZW50LCAnbW91c2Vtb3ZlJyk7XHJcbiAgICBjb25zdCBtb3VzZVVwJCA9IGZyb21FdmVudCh0aGlzLl9kb2N1bWVudCwgJ21vdXNldXAnKS5waXBlKFxyXG4gICAgICB0YXAoKCkgPT4gdGhpcy5fZG9jdW1lbnQub25zZWxlY3RzdGFydCA9IG51bGwpXHJcbiAgICApO1xyXG4gICAgcmV0dXJuIG1vdXNlRG93biQucGlwZShcclxuICAgICAgdGFwKCgpID0+IHtcclxuICAgICAgICB0aGlzLl9kb2N1bWVudC5vbnNlbGVjdHN0YXJ0ID0gKCkgPT4gZmFsc2U7XHJcbiAgICAgICAgLy8gSW5pdGlhbGl6ZSB0cmFja01heCBmb3IgYmVmb3JlIHN0YXJ0IGRyYWdnaW5nXHJcbiAgICAgICAgdGhpcy5fdHJhY2tNYXggPSB0aGlzLmJhci5uYXRpdmVFbGVtZW50LmNsaWVudFdpZHRoIC0gdGhpcy5fdGh1bWJTaXplO1xyXG4gICAgICB9KSxcclxuICAgICAgcGx1Y2soJ29mZnNldFgnKSxcclxuICAgICAgbWVyZ2VNYXAoKG1vdXNlRG93bk9mZnNldDogbnVtYmVyKSA9PiBtb3VzZU1vdmUkLnBpcGUoXHJcbiAgICAgICAgdGFrZVVudGlsKG1vdXNlVXAkKSxcclxuICAgICAgICBwbHVjaygnY2xpZW50WCcpLFxyXG4gICAgICAgIHRhcCgobW91c2VNb3ZlQ2xpZW50OiBudW1iZXIpID0+IHtcclxuICAgICAgICAgIGNvbnN0IG9mZnNldFggPSBtb3VzZU1vdmVDbGllbnQgLSB0aGlzLmJhci5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQ7XHJcbiAgICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuX3Njcm9sbE1heCAqIChvZmZzZXRYIC0gbW91c2VEb3duT2Zmc2V0KSAvIHRoaXMuX3RyYWNrTWF4O1xyXG4gICAgICAgICAgdGhpcy5fcGFyZW50LnNjcm9sbGFibGUuc2Nyb2xsVG8oe2xlZnQ6IHZhbHVlfSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgKSlcclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IFNjcm9sbGluZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9zY3JvbGxpbmcnO1xyXG5pbXBvcnQgeyBMYXlvdXRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jZGsvbGF5b3V0JztcclxuaW1wb3J0IHsgU21vb3RoU2Nyb2xsTW9kdWxlIH0gZnJvbSAnLi4vc21vb3RoLXNjcm9sbC9zbW9vdGgtc2Nyb2xsLm1vZHVsZSc7XHJcbmltcG9ydCB7IE5nU2Nyb2xsYmFyIH0gZnJvbSAnLi9uZy1zY3JvbGxiYXInO1xyXG5pbXBvcnQgeyBOZ1Njcm9sbGJhclZlcnRpY2FsIH0gZnJvbSAnLi9uZy1zY3JvbGxiYXItdmVydGljYWwnO1xyXG5pbXBvcnQgeyBOZ1Njcm9sbGJhckhvcml6b250YWwgfSBmcm9tICcuL25nLXNjcm9sbGJhci1ob3Jpem9udGFsJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW1xyXG4gICAgQ29tbW9uTW9kdWxlLFxyXG4gICAgU2Nyb2xsaW5nTW9kdWxlLFxyXG4gICAgTGF5b3V0TW9kdWxlLFxyXG4gICAgU21vb3RoU2Nyb2xsTW9kdWxlXHJcbiAgXSxcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIE5nU2Nyb2xsYmFyLFxyXG4gICAgTmdTY3JvbGxiYXJWZXJ0aWNhbCxcclxuICAgIE5nU2Nyb2xsYmFySG9yaXpvbnRhbFxyXG4gIF0sXHJcbiAgZXhwb3J0czogW1xyXG4gICAgTmdTY3JvbGxiYXJcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOZ1Njcm9sbGJhck1vZHVsZSB7XHJcbn1cclxuIl0sIm5hbWVzIjpbInRzbGliXzEuX19leHRlbmRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7SUErQkUsc0JBQXlDLFNBQWlCLEVBQzlDLEVBQWM7UUFEZSxjQUFTLEdBQVQsU0FBUyxDQUFRO1FBRXhELElBQUksQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDLGFBQWEsQ0FBQztLQUM5Qjs7Ozs7O0lBRU8saUNBQVU7Ozs7O2NBQUMsSUFBWSxFQUFFLEdBQVc7UUFDMUMsSUFBSSxzQkFBc0IsRUFBRSxFQUFFO1lBQzVCLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUMsR0FBRyxLQUFBLEVBQUUsSUFBSSxNQUFBLEVBQUMsQ0FBQyxDQUFDO1NBQ2pDO2FBQU07WUFDTCxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUM7WUFDMUIsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1NBQzdCOzs7Ozs7SUFHSCwrQkFBUTs7OztJQUFSLFVBQVMsT0FBd0I7UUFBakMsaUJBMEJDOztRQXhCQyxJQUFJLGlCQUFpQixDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRTs7WUFDckMsSUFBTSxVQUFVLEdBQUcsVUFBQyxJQUFZLEVBQUUsR0FBVztnQkFDM0MsSUFBSSxzQkFBc0IsRUFBRSxFQUFFO29CQUM1QixLQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFDLEdBQUcsS0FBQSxFQUFFLElBQUksTUFBQSxFQUFDLENBQUMsQ0FBQztpQkFDakM7cUJBQU07b0JBQ0wsS0FBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFDO29CQUMxQixLQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7aUJBQzdCO2FBQ0YsQ0FBQztZQUNGLElBQUksT0FBTyxDQUFDLFFBQVEsRUFBRTs7Z0JBQ3BCLElBQU0sbUJBQW1CLEdBQXdCO29CQUMvQyxHQUFHLEVBQUUsT0FBTyxDQUFDLEdBQUc7b0JBQ2hCLElBQUksRUFBRSxPQUFPLENBQUMsSUFBSTtvQkFDbEIsUUFBUSxFQUFFLE9BQU8sQ0FBQyxRQUFRO29CQUMxQixRQUFRLEVBQUUsT0FBTyxDQUFDLFFBQVEsSUFBSSxhQUFhO29CQUMzQyxTQUFTLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTO29CQUM5QixVQUFVLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVO29CQUNoQyxVQUFVLFlBQUE7aUJBQ1gsQ0FBQztnQkFDRixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDO2FBQ2hEO1lBQ0QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUM1QztRQUNELE9BQU8sRUFBRSxFQUFRLENBQUM7S0FDbkI7Ozs7Ozs7O0lBRUQsc0NBQWU7Ozs7Ozs7SUFBZixVQUFnQixRQUFnQixFQUFFLE1BQVUsRUFBRSxRQUFpQixFQUFFLFFBQStCO1FBQTlELHVCQUFBLEVBQUEsVUFBVTs7UUFDMUMsSUFBTSxNQUFNLEdBQWdCLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzlELE9BQU8sTUFBTSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLFVBQVUsRUFBRSxHQUFHLEVBQUUsTUFBTSxDQUFDLFNBQVMsR0FBRyxNQUFNLEVBQUUsUUFBUSxVQUFBLEVBQUUsUUFBUSxVQUFBLEVBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBUSxDQUFDO0tBQzNIOzs7Ozs7O0lBRUQsZ0NBQVM7Ozs7OztJQUFULFVBQVUsSUFBWSxFQUFFLFFBQWlCLEVBQUUsUUFBK0I7UUFDeEUsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUMsSUFBSSxNQUFBLEVBQUUsUUFBUSxVQUFBLEVBQUUsUUFBUSxVQUFBLEVBQUMsQ0FBQyxDQUFDO0tBQ2xEOzs7Ozs7O0lBRUQsZ0NBQVM7Ozs7OztJQUFULFVBQVUsR0FBVyxFQUFFLFFBQWlCLEVBQUUsUUFBK0I7UUFDdkUsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUMsR0FBRyxLQUFBLEVBQUUsUUFBUSxVQUFBLEVBQUUsUUFBUSxVQUFBLEVBQUMsQ0FBQyxDQUFDO0tBQ2pEOzs7Ozs7SUFFRCxrQ0FBVzs7Ozs7SUFBWCxVQUFZLFFBQWlCLEVBQUUsUUFBK0I7UUFDNUQsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUM7S0FDOUM7Ozs7OztJQUVELHFDQUFjOzs7OztJQUFkLFVBQWUsUUFBaUIsRUFBRSxRQUErQjtRQUMvRCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0tBQzVGOzs7Ozs7SUFFRCxvQ0FBYTs7Ozs7SUFBYixVQUFjLFFBQWlCLEVBQUUsUUFBK0I7UUFDOUQsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQztLQUNsRTs7Ozs7O0lBRUQsbUNBQVk7Ozs7O0lBQVosVUFBYSxRQUFpQixFQUFFLFFBQStCO1FBQzdELE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0tBQzlDOztnQkE1RUYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxpQ0FBaUM7aUJBQzVDOzs7O2dCQUtxRCxNQUFNLHVCQUE3QyxNQUFNLFNBQUMsV0FBVztnQkEvQmIsVUFBVTs7dUJBQTlCOzs7Ozs7QUF1R0EsU0FBZ0IsWUFBWSxDQUFDLE9BQTRCO0lBQ3ZELE9BQU8sSUFBSSxPQUFPLENBQUMsVUFBQSxPQUFPOztRQUN4QixJQUFJLFdBQVcsR0FBRyxDQUFDLENBQUM7O1FBQ3BCLElBQU0sU0FBUyxHQUFHLEVBQUUsQ0FBQzs7UUFDckIsSUFBSSxJQUFJLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQzs7UUFDOUIsSUFBSSxJQUFJLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQzs7UUFFN0IsSUFBTSxhQUFhLEdBQUc7O1lBRXBCLFdBQVcsSUFBSSxTQUFTLENBQUM7O1lBRXpCLElBQUksT0FBTyxPQUFPLENBQUMsSUFBSSxLQUFLLFdBQVcsRUFBRTs7Z0JBQ3ZDLElBQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQztnQkFDakQsSUFBSSxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsV0FBVyxFQUFFLE9BQU8sQ0FBQyxVQUFVLEVBQUUsTUFBTSxFQUFFLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQzthQUNwRjtZQUNELElBQUksT0FBTyxPQUFPLENBQUMsR0FBRyxLQUFLLFdBQVcsRUFBRTs7Z0JBQ3RDLElBQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxHQUFHLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQztnQkFDL0MsSUFBSSxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsV0FBVyxFQUFFLE9BQU8sQ0FBQyxTQUFTLEVBQUUsTUFBTSxFQUFFLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQzthQUNuRjs7WUFFRCxPQUFPLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQzs7WUFFL0IsSUFBSSxXQUFXLEdBQUcsT0FBTyxDQUFDLFFBQVEsRUFBRTtnQkFDbEMsdUJBQXVCLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxDQUFDO2FBQ2pEO2lCQUFNO2dCQUNMLE9BQU8sRUFBRSxDQUFDO2FBQ1g7U0FDRixDQUFDO1FBQ0YsYUFBYSxFQUFFLENBQUM7S0FDakIsQ0FBQyxDQUFDO0NBQ0o7Ozs7Ozs7O0FBR0QsU0FBZ0IsYUFBYSxDQUFDLENBQVMsRUFBRSxDQUFTLEVBQUUsQ0FBUyxFQUFFLENBQVM7SUFDdEUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDWCxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUU7UUFDVCxPQUFPLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztLQUM1QjtJQUNELENBQUMsRUFBRSxDQUFDO0lBQ0osT0FBTyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztDQUN6Qzs7Ozs7Ozs7QUFFRCxTQUFnQixXQUFXLENBQUMsQ0FBUyxFQUFFLENBQVMsRUFBRSxDQUFTLEVBQUUsQ0FBUzs7SUFDcEUsSUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDNUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQztDQUNuQjs7Ozs7Ozs7QUFFRCxTQUFnQixZQUFZLENBQUMsQ0FBUyxFQUFFLENBQVMsRUFBRSxDQUFTLEVBQUUsQ0FBUzs7SUFDckUsSUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FDVDs7SUFEZCxJQUNFLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ2QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDO0NBQ3hEOzs7Ozs7QUMxSkQ7Ozs7Z0JBSUMsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRSxDQUFDLGVBQWUsQ0FBQztvQkFDMUIsWUFBWSxFQUFFLENBQUMsWUFBWSxDQUFDO29CQUM1QixPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUM7aUJBQ3hCOzs2QkFSRDs7Ozs7OztBQ0FBO0FBNkJBLElBQU0sWUFBWSxHQUFxQjtJQUNyQyxTQUFTLEVBQUU7UUFDVCxZQUFZLEVBQUUsR0FBRztRQUNqQixhQUFhLEVBQUUsR0FBRztRQUNsQixLQUFLLEVBQUUsTUFBTTtRQUNiLE1BQU0sRUFBRSxNQUFNO0tBQ2Y7SUFDRCxRQUFRLEVBQUUsS0FBSztJQUNmLFFBQVEsRUFBRSxLQUFLO0NBQ2hCLENBQUM7O0lBOEVBLHFCQUFvQixrQkFBc0MsRUFDakIsU0FBaUI7UUFEdEMsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtRQUNqQixjQUFTLEdBQVQsU0FBUyxDQUFROzs7O1FBL0QxRCxjQUFrQixLQUFLLENBQUM7Ozs7UUFFeEIsY0FBa0IsSUFBSSxDQUFDOzs7O1FBRXZCLGdCQUFvQixLQUFLLENBQUM7Ozs7UUFFMUIsa0JBQXNCLElBQUksQ0FBQzs7OztRQVEzQix3QkFBNEIsR0FBRyxDQUFDOzs7O1FBSWhDLDRCQUFnQztZQUM5QixXQUFXLENBQUMsZ0JBQWdCO1lBQzVCLFdBQVcsQ0FBQyxlQUFlO1NBQzVCLENBQUM7eUJBWWtCLEtBQUs7Ozs7c0JBV1IsSUFBSSxlQUFlLENBQW1CLFlBQVksQ0FBQztRQUNwRSxpQkFBNkIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQUMsS0FBdUIsSUFBSyxPQUFBLEtBQUssQ0FBQyxTQUFTLEdBQUEsQ0FBQyxDQUFDLENBQUM7UUFDakcsZ0JBQWdDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFDLEtBQXVCLElBQUssT0FBQSxLQUFLLENBQUMsUUFBUSxHQUFBLENBQUMsQ0FBQyxDQUFDO1FBQ25HLGdCQUFnQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBQyxLQUF1QixJQUFLLE9BQUEsS0FBSyxDQUFDLFFBQVEsR0FBQSxDQUFDLENBQUMsQ0FBQzs7OzttQ0FHckUsWUFBWSxDQUFDLEtBQUs7Ozs7K0JBRXRCLFlBQVksQ0FBQyxLQUFLOzs7OytCQU9sQixJQUFJLE9BQU8sRUFBRTtRQUN2QyxzQkFBaUIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxZQUFZLEVBQUUsQ0FBQztLQUlwRDtJQXhDRCxzQkFDSSxpQ0FBUTs7Ozs7O1FBRFo7WUFFRSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7U0FDdkI7Ozs7O1FBRUQsVUFBYSxPQUFnQjtZQUMzQixPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sRUFBRSxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztTQUMxQzs7O09BSkE7Ozs7SUF1Q0QscUNBQWU7OztJQUFmO1FBQUEsaUJBbUJDO1FBbEJDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxhQUFhLENBQUM7UUFFMUQsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDbEIsSUFBSSxJQUFJLENBQUMsb0JBQW9CLEVBQUU7O2dCQUU3QixJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLENBQUMsSUFBSSxDQUNwRixHQUFHLENBQUMsVUFBQyxNQUF1QixJQUFLLE9BQUEsTUFBTSxDQUFDLE9BQU8sR0FBRyxLQUFJLENBQUMsT0FBTyxFQUFFLEdBQUcsS0FBSSxDQUFDLE1BQU0sRUFBRSxHQUFBLENBQUMsQ0FDbEYsQ0FBQyxTQUFTLEVBQUUsQ0FBQzthQUNmO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQzthQUNmO1NBQ0Y7O1FBR0QsSUFBSSxDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUNqRCxZQUFZLENBQUMsR0FBRyxDQUFDLEVBQ2pCLEdBQUcsQ0FBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLFdBQVcsRUFBRSxHQUFBLENBQUMsQ0FDOUIsQ0FBQyxTQUFTLEVBQUUsQ0FBQztLQUNmOzs7O0lBRUQsaUNBQVc7OztJQUFYO1FBQ0UsSUFBSSxDQUFDLGVBQWUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNuQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDdkMsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2xCLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFFLENBQUM7U0FDN0I7S0FDRjs7Ozs7Ozs7SUFLRCw0QkFBTTs7OztJQUFOO1FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDbEIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUM3QjtLQUNGOzs7Ozs7OztJQUtELDRCQUFNOzs7O0lBQU47UUFBQSxpQkFhQztRQVpDLElBQUksSUFBSSxDQUFDLElBQUksRUFBRTtZQUNiLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDOztZQUV2QixJQUFJLENBQUMsb0JBQW9CLEdBQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxPQUFJLENBQUM7WUFDckYsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBRW5CLElBQUksSUFBSSxDQUFDLFVBQVUsSUFBSSxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUU7O2dCQUV4RCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksZ0JBQWdCLENBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxNQUFNLEVBQUUsR0FBQSxDQUFDLENBQUM7Z0JBQzNELElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsRUFBQyxPQUFPLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFLElBQUksRUFBQyxDQUFDLENBQUM7YUFDMUY7U0FDRjtLQUNGOzs7Ozs7OztJQUtELDZCQUFPOzs7O0lBQVA7UUFDRSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQzs7UUFFdEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDL0IsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2xCLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFFLENBQUM7U0FDN0I7S0FDRjs7Ozs7SUFFRCw4QkFBUTs7OztJQUFSLFVBQVMsT0FBd0I7UUFDL0IsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztLQUM1Qzs7Ozs7Ozs7SUFFRCxxQ0FBZTs7Ozs7OztJQUFmLFVBQWdCLFFBQWdCLEVBQUUsTUFBVSxFQUFFLFFBQWlCLEVBQUUsUUFBK0I7UUFBOUQsdUJBQUEsRUFBQSxVQUFVO1FBQzFDLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxlQUFlLENBQUMsUUFBUSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUM7S0FDaEY7Ozs7Ozs7SUFFRCwrQkFBUzs7Ozs7O0lBQVQsVUFBVSxFQUFVLEVBQUUsUUFBaUIsRUFBRSxRQUErQjtRQUN0RSxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLEVBQUUsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUM7S0FDNUQ7Ozs7Ozs7SUFFRCwrQkFBUzs7Ozs7O0lBQVQsVUFBVSxFQUFVLEVBQUUsUUFBaUIsRUFBRSxRQUErQjtRQUN0RSxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLEVBQUUsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUM7S0FDNUQ7Ozs7OztJQUVELGlDQUFXOzs7OztJQUFYLFVBQVksUUFBaUIsRUFBRSxRQUErQjtRQUM1RCxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQztLQUMxRDs7Ozs7O0lBRUQsb0NBQWM7Ozs7O0lBQWQsVUFBZSxRQUFpQixFQUFFLFFBQStCO1FBQy9ELE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxjQUFjLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0tBQzdEOzs7Ozs7SUFFRCxtQ0FBYTs7Ozs7SUFBYixVQUFjLFFBQWlCLEVBQUUsUUFBK0I7UUFDOUQsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUM7S0FDNUQ7Ozs7OztJQUVELGtDQUFZOzs7OztJQUFaLFVBQWEsUUFBaUIsRUFBRSxRQUErQjtRQUM3RCxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQztLQUMzRDs7OztJQUVPLGlDQUFXOzs7OztRQUNqQixJQUFJLGFBQWEsR0FBRyxHQUFHLENBQXlEOztRQUFoRixJQUF5QixZQUFZLEdBQUcsR0FBRyxDQUFxQzs7UUFBaEYsSUFBNkMsUUFBUSxHQUFHLEtBQUssQ0FBbUI7O1FBQWhGLElBQStELFFBQVEsR0FBRyxLQUFLLENBQUM7O1FBQ2hGLElBQU0sSUFBSSxHQUFHLGlCQUFlLElBQUksQ0FBQyxvQkFBb0IsTUFBRyxDQUFDO1FBQ3pELElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTs7WUFFZixJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFO2dCQUNuRCxRQUFRLEdBQUcsSUFBSSxDQUFDO2dCQUNoQixZQUFZLEdBQUcsSUFBSSxDQUFDLE9BQU8sR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixDQUFDO2FBQy9EO1NBQ0Y7UUFDRCxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7O1lBRWYsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRTtnQkFDakQsUUFBUSxHQUFHLElBQUksQ0FBQztnQkFDaEIsYUFBYSxHQUFHLElBQUksQ0FBQyxPQUFPLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxvQkFBb0IsQ0FBQzthQUNoRTtTQUNGO1FBQ0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFDZixTQUFTLEVBQUU7Z0JBQ1QsS0FBSyxFQUFFLElBQUk7Z0JBQ1gsTUFBTSxFQUFFLElBQUk7Z0JBQ1osYUFBYSxlQUFBO2dCQUNiLFlBQVksY0FBQTthQUNiO1lBQ0QsUUFBUSxVQUFBO1lBQ1IsUUFBUSxVQUFBO1NBQ1QsQ0FBQyxDQUFDOzs7Z0JBOU1OLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsY0FBYztvQkFDeEIsdS9CQUFnQztvQkFFaEMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLElBQUksRUFBRTt3QkFDSixlQUFlLEVBQUUsUUFBUTt3QkFDekIsZUFBZSxFQUFFLFFBQVE7d0JBQ3pCLGdDQUFnQyxFQUFFLFVBQVU7cUJBQzdDOztpQkFDRjs7OztnQkFyQ1Esa0JBQWtCO2dCQXdHMkIsTUFBTSx1QkFBN0MsTUFBTSxTQUFDLFdBQVc7Ozt5QkEvRDlCLEtBQUs7eUJBRUwsS0FBSzsyQkFFTCxLQUFLOzZCQUVMLEtBQUs7NEJBRUwsS0FBSzsyQkFFTCxLQUFLOzZCQUVMLEtBQUs7bUNBRUwsS0FBSzswQkFFTCxLQUFLO3VDQUVMLEtBQUs7MkJBTUwsS0FBSyxTQUFDLFVBQVU7NkJBV2hCLFNBQVMsU0FBQyxhQUFhOytCQUN2QixTQUFTLFNBQUMsWUFBWTtvQ0FDdEIsU0FBUyxTQUFDLFVBQVUsRUFBRSxFQUFDLElBQUksRUFBRSxVQUFVLEVBQUM7c0NBQ3hDLFNBQVMsU0FBQyxZQUFZLEVBQUUsRUFBQyxJQUFJLEVBQUUsVUFBVSxFQUFDOztzQkE1RjdDOzs7Ozs7OztJQ3VDRSwwQkFBc0IsT0FBb0IsRUFDcEIsU0FBaUIsRUFDakIsS0FBYTtRQUZiLFlBQU8sR0FBUCxPQUFPLENBQWE7UUFDcEIsY0FBUyxHQUFULFNBQVMsQ0FBUTtRQUNqQixVQUFLLEdBQUwsS0FBSyxDQUFRO1FBdkJuQyxxQkFBMEIsRUFBRSxDQUFDO1FBQzdCLHlCQUE4QixDQUFDLENBQUM7UUFDaEMsa0JBQXVCLENBQUMsQ0FBQztRQUN6QixpQkFBc0IsQ0FBQyxDQUFDO1FBQ3hCLGtCQUF1QixDQUFDLENBQUM7UUFDekIsZ0JBQXFCLENBQUMsQ0FBQztRQUN2QixnQkFBcUIsWUFBWSxDQUFDLEtBQUssQ0FBQztRQUN4QyxtQkFBd0IsWUFBWSxDQUFDLEtBQUssQ0FBQztRQUMzQyx3QkFBNkIsWUFBWSxDQUFDLEtBQUssQ0FBQztRQUVoRCxjQUFtQixJQUFJLGVBQWUsQ0FBTTtZQUMxQyxTQUFTLEVBQUUsc0JBQXNCO1NBQ2xDLENBQUMsQ0FBQzs7OztRQUdILHNCQUEwQixJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksRUFBRSxDQUFDO0tBU3BEO0lBUEQsc0JBQUksdUNBQVM7Ozs7UUFBYjtZQUNFLE9BQU8sQ0FBQyxDQUFDO1NBQ1Y7OztPQUFBOzs7O0lBT0QsMENBQWU7OztJQUFmO1FBQUEsaUJBeUJDOztRQXZCQyxJQUFJLGlCQUFpQixDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRTtZQUNyQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxDQUFDLGFBQWEsQ0FBQzs7WUFFbkUsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxlQUFlLEVBQUU7aUJBQ3RELFNBQVMsQ0FBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLGVBQWUsRUFBRSxHQUFBLENBQUMsQ0FBQzs7WUFHM0MsSUFBSSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQztnQkFDM0IsT0FBQSxLQUFJLENBQUMsV0FBVyxHQUFHLEtBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLFNBQVMsRUFBRTthQUFBLENBQ3ZELENBQUM7O1lBR0YsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLElBQUksQ0FDdEQsWUFBWSxDQUFDLEdBQUcsQ0FBQyxFQUNqQixHQUFHLENBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxlQUFlLEVBQUUsR0FBQSxDQUFDOztZQUVqQyxZQUFZLENBQUMsR0FBRyxDQUFDLEVBQ2pCLEdBQUcsQ0FBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLGVBQWUsRUFBRSxHQUFBLENBQUMsQ0FDbEMsQ0FBQyxTQUFTLEVBQUUsQ0FBQzs7WUFHZCxVQUFVLENBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxlQUFlLEVBQUUsR0FBQSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1NBQy9DO0tBQ0Y7Ozs7SUFFRCxzQ0FBVzs7O0lBQVg7UUFDRSxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQzVCLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDL0IsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFdBQVcsRUFBRSxDQUFDO0tBQ3JDOzs7Ozs7Ozs7O0lBTUQsaURBQXNCOzs7OztJQUF0QixVQUF1QixDQUFNO0tBQzVCOzs7Ozs7OztJQUtTLDBDQUFlOzs7O0lBQXpCO0tBQ0M7Ozs7Ozs7O0lBS1MsMkNBQWdCOzs7O0lBQTFCO1FBQ0UsT0FBTyxTQUFTLENBQUM7S0FDbEI7Ozs7Ozs7Ozs7OztJQU9TLDJDQUFnQjs7Ozs7O0lBQTFCLFVBQTJCLGdCQUF3QixFQUFFLFNBQWlCO1FBQ3BFLE9BQU8sQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsYUFBYSxJQUFJLElBQUksQ0FBQyxhQUFhLEdBQUcsU0FBUyxHQUFHLGdCQUFnQixHQUFHLENBQUMsQ0FBQztLQUN4Rzs7Ozs7SUFFUyxzQ0FBVzs7OztJQUFyQixVQUFzQixLQUFVO1FBQzlCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxjQUFLLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFLLEtBQUssRUFBRSxDQUFDO0tBQ3BEOzsyQkFuR0EsS0FBSzs2QkFFTCxLQUFLO21DQUVMLEtBQUs7c0JBRUwsU0FBUyxTQUFDLEtBQUs7d0JBQ2YsU0FBUyxTQUFDLE9BQU87OzJCQWhCcEI7Ozs7Ozs7O0lDZ0J5Q0EsdUNBQWdCO0lBY3ZELDZCQUF3QyxTQUFjLEVBQ08sT0FBb0IsRUFDaEQsU0FBaUIsRUFDNUIsS0FBYTtRQUhuQyxZQUlFLGtCQUFNLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxDQUFDLFNBQ2pDO1FBTHVDLGVBQVMsR0FBVCxTQUFTLENBQUs7UUFDTyxhQUFPLEdBQVAsT0FBTyxDQUFhO1FBRTNELFdBQUssR0FBTCxLQUFLLENBQVE7O0tBRWxDO0lBZEQsc0JBQUksMENBQVM7Ozs7Ozs7O1FBQWI7O1lBQ0UsSUFBTSxlQUFlLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDOztZQUM1RCxJQUFNLGdCQUFnQixHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDOztZQUNqRCxJQUFNLGdCQUFnQixHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDO1lBQ2pELElBQUksQ0FBQyxpQkFBaUIsR0FBRyxlQUFlLEdBQUcsZ0JBQWdCLEdBQUcsZUFBZSxDQUFDO1lBQzlFLElBQUksQ0FBQyxVQUFVLEdBQUcsZ0JBQWdCLEdBQUcsZ0JBQWdCLENBQUM7WUFDdEQsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLGlCQUFpQixFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztTQUN2RTs7O09BQUE7Ozs7Ozs7Ozs7SUFhRCxvREFBc0I7Ozs7O0lBQXRCLFVBQXVCLENBQU07UUFDM0IsSUFBSSxDQUFDLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQyxhQUFhLEVBQUU7O1lBQ2hDLElBQU0sT0FBTyxHQUFHLENBQUMsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixHQUFHLEVBQUUsQ0FBQzs7WUFDeEQsSUFBTSx1QkFBdUIsR0FBRyxPQUFPLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQzs7WUFDcEYsSUFBTSxLQUFLLEdBQUcsdUJBQXVCLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLEdBQUcsR0FBRyxDQUFDO1lBQ3RFLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxtQkFBQyxFQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxnQkFBZ0IsRUFBUSxFQUFDLENBQUMsU0FBUyxFQUFFLENBQUM7U0FDekY7S0FDRjs7Ozs7Ozs7SUFLUyw2Q0FBZTs7OztJQUF6QjtRQUFBLGlCQVlDO1FBWEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUM7UUFDeEQsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUN2RSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUN4RSxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztZQUNiLHVCQUF1QixDQUFDLFFBQVEsQ0FBQztnQkFDL0IsT0FBQSxLQUFJLENBQUMsV0FBVyxDQUFDO29CQUNmLFNBQVMsRUFBRSxvQkFBa0IsS0FBSSxDQUFDLFFBQVEsV0FBUTtvQkFDbEQsTUFBTSxFQUFLLEtBQUksQ0FBQyxTQUFTLE9BQUk7aUJBQzlCLENBQUM7YUFBQSxDQUNILENBQUM7U0FDSCxDQUFDLENBQUM7S0FDSjs7Ozs7Ozs7SUFLUyw4Q0FBZ0I7Ozs7SUFBMUI7UUFBQSxpQkF1QkM7O1FBdEJDLElBQU0sVUFBVSxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsRUFBRSxXQUFXLENBQUMsQ0FBQzs7UUFDcEUsSUFBTSxVQUFVLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsV0FBVyxDQUFDLENBQUM7O1FBQzFELElBQU0sUUFBUSxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLFNBQVMsQ0FBQyxDQUFDLElBQUksQ0FDeEQsR0FBRyxDQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsR0FBRyxJQUFJLEdBQUEsQ0FBQyxDQUMvQyxDQUFDO1FBQ0YsT0FBTyxVQUFVLENBQUMsSUFBSSxDQUNwQixHQUFHLENBQUM7WUFDRixLQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsR0FBRyxjQUFNLE9BQUEsS0FBSyxHQUFBLENBQUM7O1lBRTNDLEtBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsWUFBWSxHQUFHLEtBQUksQ0FBQyxVQUFVLENBQUM7U0FDeEUsQ0FBQyxFQUNGLEtBQUssQ0FBQyxTQUFTLENBQUMsRUFDaEIsUUFBUSxDQUFDLFVBQUMsZUFBdUIsSUFBSyxPQUFBLFVBQVUsQ0FBQyxJQUFJLENBQ25ELFNBQVMsQ0FBQyxRQUFRLENBQUMsRUFDbkIsS0FBSyxDQUFDLFNBQVMsQ0FBQyxFQUNoQixHQUFHLENBQUMsVUFBQyxlQUF1Qjs7WUFDMUIsSUFBTSxPQUFPLEdBQUcsZUFBZSxHQUFHLEtBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLHFCQUFxQixFQUFFLENBQUMsR0FBRyxDQUFDOztZQUNyRixJQUFNLEtBQUssR0FBRyxLQUFJLENBQUMsVUFBVSxJQUFJLE9BQU8sR0FBRyxlQUFlLENBQUMsR0FBRyxLQUFJLENBQUMsU0FBUyxDQUFDO1lBQzdFLEtBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxFQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUMsQ0FBQyxDQUFDO1NBQ2hELENBQUMsQ0FDSCxHQUFBLENBQUMsQ0FDSCxDQUFDO0tBQ0g7O2dCQXRGRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHVCQUF1QjtvQkFDakMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLFFBQVEsRUFBRSxzUEFJVDtpQkFDRjs7OztnREFlYyxNQUFNLFNBQUMsUUFBUTtnQkExQnJCLFdBQVcsdUJBMkJMLE1BQU0sU0FBQyxVQUFVLENBQUMsY0FBTSxPQUFBLFdBQVcsR0FBQSxDQUFDO2dCQUNMLE1BQU0sdUJBQXJDLE1BQU0sU0FBQyxXQUFXO2dCQWhDTCxNQUFNOzs4QkFBbEM7RUFnQnlDLGdCQUFnQjs7Ozs7OztJQ0FkQSx5Q0FBZ0I7SUFjekQsK0JBQXdDLFNBQWMsRUFDTyxPQUFvQixFQUNoRCxTQUFpQixFQUM1QixLQUFhO1FBSG5DLFlBSUUsa0JBQU0sT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLENBQUMsU0FDakM7UUFMdUMsZUFBUyxHQUFULFNBQVMsQ0FBSztRQUNPLGFBQU8sR0FBUCxPQUFPLENBQWE7UUFFM0QsV0FBSyxHQUFMLEtBQUssQ0FBUTs7S0FFbEM7SUFkRCxzQkFBSSw0Q0FBUzs7Ozs7Ozs7UUFBYjs7WUFDRSxJQUFNLGNBQWMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUM7O1lBQzFELElBQU0sZUFBZSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDOztZQUMvQyxJQUFNLGVBQWUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQztZQUMvQyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsY0FBYyxHQUFHLGVBQWUsR0FBRyxjQUFjLENBQUM7WUFDM0UsSUFBSSxDQUFDLFVBQVUsR0FBRyxlQUFlLEdBQUcsZUFBZSxDQUFDO1lBQ3BELE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7U0FDdkU7OztPQUFBOzs7Ozs7Ozs7O0lBYUQsc0RBQXNCOzs7OztJQUF0QixVQUF1QixDQUFNO1FBQzNCLElBQUksQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUMsYUFBYSxFQUFFOztZQUNoQyxJQUFNLE9BQU8sR0FBRyxDQUFDLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxFQUFFLENBQUM7O1lBQ3hELElBQU0sdUJBQXVCLEdBQUcsT0FBTyxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUM7O1lBQ25GLElBQU0sS0FBSyxHQUFHLHVCQUF1QixHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxHQUFHLEdBQUcsQ0FBQztZQUNyRSxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsbUJBQUMsRUFBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsZ0JBQWdCLEVBQVEsRUFBQyxDQUFDLFNBQVMsRUFBRSxDQUFDO1NBQzFGO0tBQ0Y7Ozs7Ozs7O0lBS1MsK0NBQWU7Ozs7SUFBekI7UUFBQSxpQkFZQztRQVhDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDO1FBQ3ZELElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDdEUsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDekUsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7WUFDYix1QkFBdUIsQ0FBQyxRQUFRLENBQUM7Z0JBQy9CLE9BQUEsS0FBSSxDQUFDLFdBQVcsQ0FBQztvQkFDZixTQUFTLEVBQUUsaUJBQWUsS0FBSSxDQUFDLFFBQVEsY0FBVztvQkFDbEQsS0FBSyxFQUFLLEtBQUksQ0FBQyxTQUFTLE9BQUk7aUJBQzdCLENBQUM7YUFBQSxDQUNILENBQUM7U0FDSCxDQUFDLENBQUM7S0FDSjs7Ozs7Ozs7SUFLUyxnREFBZ0I7Ozs7SUFBMUI7UUFBQSxpQkF1QkM7O1FBdEJDLElBQU0sVUFBVSxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsRUFBRSxXQUFXLENBQUMsQ0FBQzs7UUFDcEUsSUFBTSxVQUFVLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsV0FBVyxDQUFDLENBQUM7O1FBQzFELElBQU0sUUFBUSxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLFNBQVMsQ0FBQyxDQUFDLElBQUksQ0FDeEQsR0FBRyxDQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsR0FBRyxJQUFJLEdBQUEsQ0FBQyxDQUMvQyxDQUFDO1FBQ0YsT0FBTyxVQUFVLENBQUMsSUFBSSxDQUNwQixHQUFHLENBQUM7WUFDRixLQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsR0FBRyxjQUFNLE9BQUEsS0FBSyxHQUFBLENBQUM7O1lBRTNDLEtBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsV0FBVyxHQUFHLEtBQUksQ0FBQyxVQUFVLENBQUM7U0FDdkUsQ0FBQyxFQUNGLEtBQUssQ0FBQyxTQUFTLENBQUMsRUFDaEIsUUFBUSxDQUFDLFVBQUMsZUFBdUIsSUFBSyxPQUFBLFVBQVUsQ0FBQyxJQUFJLENBQ25ELFNBQVMsQ0FBQyxRQUFRLENBQUMsRUFDbkIsS0FBSyxDQUFDLFNBQVMsQ0FBQyxFQUNoQixHQUFHLENBQUMsVUFBQyxlQUF1Qjs7WUFDMUIsSUFBTSxPQUFPLEdBQUcsZUFBZSxHQUFHLEtBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLHFCQUFxQixFQUFFLENBQUMsSUFBSSxDQUFDOztZQUN0RixJQUFNLEtBQUssR0FBRyxLQUFJLENBQUMsVUFBVSxJQUFJLE9BQU8sR0FBRyxlQUFlLENBQUMsR0FBRyxLQUFJLENBQUMsU0FBUyxDQUFDO1lBQzdFLEtBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxFQUFDLElBQUksRUFBRSxLQUFLLEVBQUMsQ0FBQyxDQUFDO1NBQ2pELENBQUMsQ0FDSCxHQUFBLENBQUMsQ0FDSCxDQUFDO0tBQ0g7O2dCQXRGRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHlCQUF5QjtvQkFDbkMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLFFBQVEsRUFBRSx3UEFJVDtpQkFDRjs7OztnREFlYyxNQUFNLFNBQUMsUUFBUTtnQkExQnJCLFdBQVcsdUJBMkJMLE1BQU0sU0FBQyxVQUFVLENBQUMsY0FBTSxPQUFBLFdBQVcsR0FBQSxDQUFDO2dCQUNMLE1BQU0sdUJBQXJDLE1BQU0sU0FBQyxXQUFXO2dCQWhDTCxNQUFNOztnQ0FBbEM7RUFnQjJDLGdCQUFnQjs7Ozs7O0FDaEIzRDs7OztnQkFTQyxRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1osZUFBZTt3QkFDZixZQUFZO3dCQUNaLGtCQUFrQjtxQkFDbkI7b0JBQ0QsWUFBWSxFQUFFO3dCQUNaLFdBQVc7d0JBQ1gsbUJBQW1CO3dCQUNuQixxQkFBcUI7cUJBQ3RCO29CQUNELE9BQU8sRUFBRTt3QkFDUCxXQUFXO3FCQUNaO2lCQUNGOzs0QkF4QkQ7Ozs7Ozs7Ozs7Ozs7OzsifQ==

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
/* harmony import */ var _modules_forms_number_number_module__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../../../modules/forms/number/number.module */ "./src/app/modules/forms/number/number.module.ts");
/* harmony import */ var _modules_forms_form_module__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../../../modules/forms/form.module */ "./src/app/modules/forms/form.module.ts");
/* harmony import */ var _modules_buttons_button_button_module__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../../../modules/buttons/button/button.module */ "./src/app/modules/buttons/button/button.module.ts");
/* harmony import */ var _calculator_calculator_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./calculator/calculator.component */ "./src/app/application/loans/calculator/calculator/calculator.component.ts");
/* harmony import */ var _config_config_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./config/config.component */ "./src/app/application/loans/calculator/config/config.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 


































var CalculatorModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_calculator_module__WEBPACK_IMPORTED_MODULE_1__["CalculatorModule"], [], function (_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, [_node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ɵEmptyOutletComponentNgFactory"], _calculator_calculator_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["CalculatorComponentNgFactory"], _config_config_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["ConfigComponentNgFactory"]]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_common_common_a"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_j"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_j"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _services_form_service__WEBPACK_IMPORTED_MODULE_7__["FormService"], _services_form_service__WEBPACK_IMPORTED_MODULE_7__["FormService"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"], [[2, _angular_router__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_router_router_a"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _calculator_routing_module__WEBPACK_IMPORTED_MODULE_10__["CalculatorRoutingModule"], _calculator_routing_module__WEBPACK_IMPORTED_MODULE_10__["CalculatorRoutingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _modules_forms_card_card_module__WEBPACK_IMPORTED_MODULE_11__["CardModule"], _modules_forms_card_card_module__WEBPACK_IMPORTED_MODULE_11__["CardModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_bc"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_bc"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _modules_forms_form_shared_form_shared_module__WEBPACK_IMPORTED_MODULE_12__["FormSharedModule"], _modules_forms_form_shared_form_shared_module__WEBPACK_IMPORTED_MODULE_12__["FormSharedModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _modules_forms_checkbox_checkbox_module__WEBPACK_IMPORTED_MODULE_13__["CheckboxModule"], _modules_forms_checkbox_checkbox_module__WEBPACK_IMPORTED_MODULE_13__["CheckboxModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_14__["BidiModule"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_14__["BidiModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_15__["PlatformModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_15__["PlatformModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_16__["ScrollingModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_16__["ScrollingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_17__["LayoutModule"], _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_17__["LayoutModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ngx_scrollbar__WEBPACK_IMPORTED_MODULE_18__["SmoothScrollModule"], ngx_scrollbar__WEBPACK_IMPORTED_MODULE_18__["SmoothScrollModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ngx_scrollbar__WEBPACK_IMPORTED_MODULE_18__["NgScrollbarModule"], ngx_scrollbar__WEBPACK_IMPORTED_MODULE_18__["NgScrollbarModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _modules_forms_dropdown_dropdown_module__WEBPACK_IMPORTED_MODULE_19__["DropdownModule"], _modules_forms_dropdown_dropdown_module__WEBPACK_IMPORTED_MODULE_19__["DropdownModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _modules_forms_form_layout_form_layout_module__WEBPACK_IMPORTED_MODULE_20__["FormLayoutModule"], _modules_forms_form_layout_form_layout_module__WEBPACK_IMPORTED_MODULE_20__["FormLayoutModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _modules_forms_hint_hint_module__WEBPACK_IMPORTED_MODULE_21__["HintModule"], _modules_forms_hint_hint_module__WEBPACK_IMPORTED_MODULE_21__["HintModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, angular2_text_mask__WEBPACK_IMPORTED_MODULE_22__["TextMaskModule"], angular2_text_mask__WEBPACK_IMPORTED_MODULE_22__["TextMaskModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _modules_forms_input_input_module__WEBPACK_IMPORTED_MODULE_23__["InputModule"], _modules_forms_input_input_module__WEBPACK_IMPORTED_MODULE_23__["InputModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _modules_forms_label_label_module__WEBPACK_IMPORTED_MODULE_24__["LabelModule"], _modules_forms_label_label_module__WEBPACK_IMPORTED_MODULE_24__["LabelModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _modules_forms_radio_radio_module__WEBPACK_IMPORTED_MODULE_25__["RadioModule"], _modules_forms_radio_radio_module__WEBPACK_IMPORTED_MODULE_25__["RadioModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _modules_forms_select_select_module__WEBPACK_IMPORTED_MODULE_26__["SelectModule"], _modules_forms_select_select_module__WEBPACK_IMPORTED_MODULE_26__["SelectModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _modules_forms_suggest_suggest_module__WEBPACK_IMPORTED_MODULE_27__["SuggestModule"], _modules_forms_suggest_suggest_module__WEBPACK_IMPORTED_MODULE_27__["SuggestModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _modules_forms_textarea_textarea_module__WEBPACK_IMPORTED_MODULE_28__["TextareaModule"], _modules_forms_textarea_textarea_module__WEBPACK_IMPORTED_MODULE_28__["TextareaModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _modules_forms_number_number_module__WEBPACK_IMPORTED_MODULE_29__["NumberModule"], _modules_forms_number_number_module__WEBPACK_IMPORTED_MODULE_29__["NumberModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _modules_forms_form_module__WEBPACK_IMPORTED_MODULE_30__["FormModule"], _modules_forms_form_module__WEBPACK_IMPORTED_MODULE_30__["FormModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _modules_buttons_button_button_module__WEBPACK_IMPORTED_MODULE_31__["ButtonModule"], _modules_buttons_button_button_module__WEBPACK_IMPORTED_MODULE_31__["ButtonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _calculator_module__WEBPACK_IMPORTED_MODULE_1__["CalculatorModule"], _calculator_module__WEBPACK_IMPORTED_MODULE_1__["CalculatorModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_9__["ROUTES"], function () { return [[{ path: "", children: [{ path: "", component: _calculator_calculator_component__WEBPACK_IMPORTED_MODULE_32__["CalculatorComponent"] }, { path: "config", component: _config_config_component__WEBPACK_IMPORTED_MODULE_33__["ConfigComponent"] }] }]]; }, [])]); });



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
/* harmony import */ var _modules_forms_form_layout_form_group_form_group_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../modules/forms/form-layout/form-group/form-group.component.ngfactory */ "./src/app/modules/forms/form-layout/form-group/form-group.component.ngfactory.js");
/* harmony import */ var _modules_forms_form_layout_form_group_form_group_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../modules/forms/form-layout/form-group/form-group.component */ "./src/app/modules/forms/form-layout/form-group/form-group.component.ts");
/* harmony import */ var _modules_forms_label_label_label_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../modules/forms/label/label/label.component.ngfactory */ "./src/app/modules/forms/label/label/label.component.ngfactory.js");
/* harmony import */ var _modules_forms_label_label_label_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../modules/forms/label/label/label.component */ "./src/app/modules/forms/label/label/label.component.ts");
/* harmony import */ var _modules_forms_number_number_number_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../modules/forms/number/number/number.component.ngfactory */ "./src/app/modules/forms/number/number/number.component.ngfactory.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _modules_forms_number_number_number_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../modules/forms/number/number/number.component */ "./src/app/modules/forms/number/number/number.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _modules_forms_radio_radio_radio_component_ngfactory__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../modules/forms/radio/radio/radio.component.ngfactory */ "./src/app/modules/forms/radio/radio/radio.component.ngfactory.js");
/* harmony import */ var _modules_forms_radio_radio_radio_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../modules/forms/radio/radio/radio.component */ "./src/app/modules/forms/radio/radio/radio.component.ts");
/* harmony import */ var _modules_forms_checkbox_checkbox_checkbox_component_ngfactory__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../modules/forms/checkbox/checkbox/checkbox.component.ngfactory */ "./src/app/modules/forms/checkbox/checkbox/checkbox.component.ngfactory.js");
/* harmony import */ var _modules_forms_checkbox_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../modules/forms/checkbox/checkbox/checkbox.component */ "./src/app/modules/forms/checkbox/checkbox/checkbox.component.ts");
/* harmony import */ var _components_dropdown_hoc_dropdown_hoc_component_ngfactory__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/dropdown-hoc/dropdown-hoc.component.ngfactory */ "./src/app/application/loans/calculator/components/dropdown-hoc/dropdown-hoc.component.ngfactory.js");
/* harmony import */ var _components_dropdown_hoc_dropdown_hoc_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../components/dropdown-hoc/dropdown-hoc.component */ "./src/app/application/loans/calculator/components/dropdown-hoc/dropdown-hoc.component.ts");
/* harmony import */ var _calculator_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./calculator.component */ "./src/app/application/loans/calculator/calculator/calculator.component.ts");
/* harmony import */ var _services_form_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../services/form.service */ "./src/app/application/loans/calculator/services/form.service.ts");
/* harmony import */ var _bstorage_indexed_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../../bstorage/indexed.service */ "./src/app/bstorage/indexed.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 





















var styles_CalculatorComponent = [_calculator_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_CalculatorComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_CalculatorComponent, data: {} });

function View_CalculatorComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "rosa-hint", [["form-group", "hint"]], null, null, null, _modules_forms_hint_hint_hint_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_HintComponent_0"], _modules_forms_hint_hint_hint_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_HintComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _modules_forms_hint_hint_hint_component__WEBPACK_IMPORTED_MODULE_3__["HintComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\u0414\u043B\u044F \u043E\u0432\u0435\u0434\u0440\u0430\u0444\u0442\u0430 \u0441\u0440\u043E\u043A \u043D\u0435 \u0443\u043A\u0430\u0437\u044B\u0432\u0430\u0435\u0442\u0441\u044F"]))], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
function View_CalculatorComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "rosa-hint", [["form-group", "hint"]], null, null, null, _modules_forms_hint_hint_hint_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_HintComponent_0"], _modules_forms_hint_hint_hint_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_HintComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _modules_forms_hint_hint_hint_component__WEBPACK_IMPORTED_MODULE_3__["HintComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\u0414\u043B\u044F \u043E\u0432\u0435\u0434\u0440\u0430\u0444\u0442\u0430 \u043B\u0438\u043C\u0438\u0442 \u043D\u0435 \u0443\u043A\u0430\u0437\u044B\u0432\u0430\u0435\u0442\u0441\u044F"]))], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
function View_CalculatorComponent_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 14, "rosa-form-group", [], null, null, null, _modules_forms_form_layout_form_group_form_group_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_FormGroupComponent_0"], _modules_forms_form_layout_form_group_form_group_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_FormGroupComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _modules_forms_form_layout_form_group_form_group_component__WEBPACK_IMPORTED_MODULE_5__["FormGroupComponent"], [], { layout: [0, "layout"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, 0, 2, "rosa-label", [["form-group", "label"]], null, null, null, _modules_forms_label_label_label_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["View_LabelComponent_0"], _modules_forms_label_label_label_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["RenderType_LabelComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 114688, null, 0, _modules_forms_label_label_label_component__WEBPACK_IMPORTED_MODULE_7__["LabelComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](4, 0, ["\u0421\u0440\u043E\u043A \u043A\u0440\u0435\u0434\u0438\u0442\u0430 (\u043E\u0442 ", " \u0434\u043E ", " \u043C\u0435\u0441.)"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, 1, 6, "div", [["class", "input__suffix-group"], ["form-group", "control"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 3, "rosa-number", [], null, null, null, _modules_forms_number_number_number_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__["View_NumberComponent_0"], _modules_forms_number_number_number_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__["RenderType_NumberComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](5120, null, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_modules_forms_number_number_number_component__WEBPACK_IMPORTED_MODULE_10__["NumberComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](5120, null, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NG_VALIDATORS"], function (p0_0) { return [p0_0]; }, [_modules_forms_number_number_number_component__WEBPACK_IMPORTED_MODULE_10__["NumberComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 114688, null, 0, _modules_forms_number_number_number_component__WEBPACK_IMPORTED_MODULE_10__["NumberComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { controlOptions: [0, "controlOptions"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 1, "div", [["class", "input-suffix"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\u043C\u0435\u0441."])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, 2, 2, "rosa-hint", [["form-group", "hint"]], null, null, null, _modules_forms_hint_hint_hint_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_HintComponent_0"], _modules_forms_hint_hint_hint_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_HintComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](13, 114688, null, 0, _modules_forms_hint_hint_hint_component__WEBPACK_IMPORTED_MODULE_3__["HintComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\u041F\u0440\u0438 \u0441\u0440\u043E\u043A\u0435 \u0431\u043E\u043B\u0435\u0435 60 \u043C\u0435\u0441. \u0443\u043A\u0430\u0437\u044B\u0432\u0430\u0435\u0442\u0441\u044F \u0441\u0440\u043E\u043A 84 \u043C\u0435\u0441."]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = "form-group_group"; _ck(_v, 1, 0, currVal_0); _ck(_v, 3, 0); var currVal_3 = _co.calculator.controls["range"]; _ck(_v, 9, 0, currVal_3); _ck(_v, 13, 0); }, function (_ck, _v) { var _co = _v.component; var currVal_1 = _co.range.min; var currVal_2 = _co.range.max; _ck(_v, 4, 0, currVal_1, currVal_2); }); }
function View_CalculatorComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](0, _angular_common__WEBPACK_IMPORTED_MODULE_11__["DecimalPipe"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 78, "div", [["class", "calculator-wrapper"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 77, "div", [["class", "pane-rows"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 75, "div", [["class", "pane pane-left"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 2, "div", [["class", "pane-header"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 1, "h1", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\u041A\u0440\u0435\u0434\u0438\u0442\u043D\u044B\u0439 \u043A\u0430\u043B\u044C\u043A\u0443\u043B\u044F\u0442\u043E\u0440"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 71, "div", [["class", "pane__calculator-form"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 70, "form", [["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "submit"], [null, "reset"]], function (_v, en, $event) { var ad = true; if (("submit" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).onSubmit($event) !== false);
        ad = (pd_0 && ad);
    } if (("reset" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).onReset() !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_forms_forms_bh"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 540672, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormGroupDirective"], [[8, null], [8, null]], { form: [0, "form"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ControlContainer"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormGroupDirective"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](12, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatusGroup"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ControlContainer"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 10, "rosa-form-group", [], null, null, null, _modules_forms_form_layout_form_group_form_group_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_FormGroupComponent_0"], _modules_forms_form_layout_form_group_form_group_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_FormGroupComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](14, 114688, null, 0, _modules_forms_form_layout_form_group_form_group_component__WEBPACK_IMPORTED_MODULE_5__["FormGroupComponent"], [], { layout: [0, "layout"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, 0, 2, "rosa-label", [["form-group", "label"]], null, null, null, _modules_forms_label_label_label_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["View_LabelComponent_0"], _modules_forms_label_label_label_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["RenderType_LabelComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](16, 114688, null, 0, _modules_forms_label_label_label_component__WEBPACK_IMPORTED_MODULE_7__["LabelComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\u0421\u0435\u0433\u043C\u0435\u043D\u0442"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, 1, 2, "rosa-radio", [["form-group", "control"]], null, [[null, "ClickEvent"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("ClickEvent" === en)) {
        var pd_0 = (_co.setSegment($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, _modules_forms_radio_radio_radio_component_ngfactory__WEBPACK_IMPORTED_MODULE_12__["View_RadioComponent_0"], _modules_forms_radio_radio_radio_component_ngfactory__WEBPACK_IMPORTED_MODULE_12__["RenderType_RadioComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](19, 114688, null, 0, _modules_forms_radio_radio_radio_component__WEBPACK_IMPORTED_MODULE_13__["RadioComponent"], [], { value: [0, "value"], name: [1, "name"], selected: [2, "selected"] }, { ClickEvent: "ClickEvent" }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\u041C\u0430\u043B\u044B\u0439 \u0431\u0438\u0437\u043D\u0435\u0441"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](21, 0, null, 1, 2, "rosa-radio", [["form-group", "control"]], null, [[null, "ClickEvent"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("ClickEvent" === en)) {
        var pd_0 = (_co.setSegment($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, _modules_forms_radio_radio_radio_component_ngfactory__WEBPACK_IMPORTED_MODULE_12__["View_RadioComponent_0"], _modules_forms_radio_radio_radio_component_ngfactory__WEBPACK_IMPORTED_MODULE_12__["RenderType_RadioComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](22, 114688, null, 0, _modules_forms_radio_radio_radio_component__WEBPACK_IMPORTED_MODULE_13__["RadioComponent"], [], { value: [0, "value"], name: [1, "name"] }, { ClickEvent: "ClickEvent" }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\u041C\u0438\u043A\u0440\u043E-\u0431\u0438\u0437\u043D\u0435\u0441"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](24, 0, null, null, 3, "rosa-form-group", [], null, null, null, _modules_forms_form_layout_form_group_form_group_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_FormGroupComponent_0"], _modules_forms_form_layout_form_group_form_group_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_FormGroupComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](25, 114688, null, 0, _modules_forms_form_layout_form_group_form_group_component__WEBPACK_IMPORTED_MODULE_5__["FormGroupComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](26, 0, null, 1, 1, "rosa-checkbox", [["form-group", "control"]], null, [[null, "ClickEvent"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("ClickEvent" === en)) {
        var pd_0 = (_co.setDecent($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, _modules_forms_checkbox_checkbox_checkbox_component_ngfactory__WEBPACK_IMPORTED_MODULE_14__["View_CheckboxComponent_0"], _modules_forms_checkbox_checkbox_checkbox_component_ngfactory__WEBPACK_IMPORTED_MODULE_14__["RenderType_CheckboxComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](27, 114688, null, 0, _modules_forms_checkbox_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_15__["CheckboxComponent"], [], { value: [0, "value"], label: [1, "label"], name: [2, "name"] }, { ClickEvent: "ClickEvent" }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](28, 0, null, null, 12, "rosa-form-group", [], null, null, null, _modules_forms_form_layout_form_group_form_group_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_FormGroupComponent_0"], _modules_forms_form_layout_form_group_form_group_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_FormGroupComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](29, 114688, null, 0, _modules_forms_form_layout_form_group_form_group_component__WEBPACK_IMPORTED_MODULE_5__["FormGroupComponent"], [], { layout: [0, "layout"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](30, 0, null, 0, 2, "rosa-label", [["form-group", "label"]], null, null, null, _modules_forms_label_label_label_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["View_LabelComponent_0"], _modules_forms_label_label_label_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["RenderType_LabelComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](31, 114688, null, 0, _modules_forms_label_label_label_component__WEBPACK_IMPORTED_MODULE_7__["LabelComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\u0422\u0438\u043F \u043A\u0440\u0435\u0434\u0438\u0442\u0430"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](33, 0, null, 1, 2, "rosa-radio", [["form-group", "control"]], null, [[null, "ClickEvent"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("ClickEvent" === en)) {
        var pd_0 = (_co.setType($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, _modules_forms_radio_radio_radio_component_ngfactory__WEBPACK_IMPORTED_MODULE_12__["View_RadioComponent_0"], _modules_forms_radio_radio_radio_component_ngfactory__WEBPACK_IMPORTED_MODULE_12__["RenderType_RadioComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](34, 114688, null, 0, _modules_forms_radio_radio_radio_component__WEBPACK_IMPORTED_MODULE_13__["RadioComponent"], [], { value: [0, "value"], name: [1, "name"], selected: [2, "selected"] }, { ClickEvent: "ClickEvent" }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\u041A\u0440\u0435\u0434\u0438\u0442"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](36, 0, null, 1, 2, "rosa-radio", [["form-group", "control"]], null, [[null, "ClickEvent"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("ClickEvent" === en)) {
        var pd_0 = (_co.setType($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, _modules_forms_radio_radio_radio_component_ngfactory__WEBPACK_IMPORTED_MODULE_12__["View_RadioComponent_0"], _modules_forms_radio_radio_radio_component_ngfactory__WEBPACK_IMPORTED_MODULE_12__["RenderType_RadioComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](37, 114688, null, 0, _modules_forms_radio_radio_radio_component__WEBPACK_IMPORTED_MODULE_13__["RadioComponent"], [], { value: [0, "value"], name: [1, "name"] }, { ClickEvent: "ClickEvent" }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\u041E\u0432\u0435\u0440\u0434\u0440\u0430\u0444\u0442"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 2, 1, null, View_CalculatorComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](40, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](41, 0, null, null, 8, "rosa-form-group", [], null, null, null, _modules_forms_form_layout_form_group_form_group_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_FormGroupComponent_0"], _modules_forms_form_layout_form_group_form_group_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_FormGroupComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](42, 114688, null, 0, _modules_forms_form_layout_form_group_form_group_component__WEBPACK_IMPORTED_MODULE_5__["FormGroupComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](43, 0, null, 0, 2, "rosa-label", [["form-group", "label"]], null, null, null, _modules_forms_label_label_label_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["View_LabelComponent_0"], _modules_forms_label_label_label_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["RenderType_LabelComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](44, 114688, null, 0, _modules_forms_label_label_label_component__WEBPACK_IMPORTED_MODULE_7__["LabelComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\u041B\u0438\u043C\u0438\u0442"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](46, 0, null, 1, 1, "rosa-dropdown-hoc", [["form-group", "control"]], null, [[null, "sendValue"], ["document", "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("document:click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 47).onCLick($event.target) !== false);
        ad = (pd_0 && ad);
    } if (("sendValue" === en)) {
        var pd_1 = (_co.setAmount($event) !== false);
        ad = (pd_1 && ad);
    } return ad; }, _components_dropdown_hoc_dropdown_hoc_component_ngfactory__WEBPACK_IMPORTED_MODULE_16__["View_DropdownHocComponent_0"], _components_dropdown_hoc_dropdown_hoc_component_ngfactory__WEBPACK_IMPORTED_MODULE_16__["RenderType_DropdownHocComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](47, 638976, null, 0, _components_dropdown_hoc_dropdown_hoc_component__WEBPACK_IMPORTED_MODULE_17__["DropdownHocComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], { values: [0, "values"] }, { sendValue: "sendValue" }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 2, 1, null, View_CalculatorComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](49, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CalculatorComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](51, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](52, 0, null, null, 9, "rosa-form-group", [], null, null, null, _modules_forms_form_layout_form_group_form_group_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_FormGroupComponent_0"], _modules_forms_form_layout_form_group_form_group_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_FormGroupComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](53, 114688, null, 0, _modules_forms_form_layout_form_group_form_group_component__WEBPACK_IMPORTED_MODULE_5__["FormGroupComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](54, 0, null, 0, 2, "rosa-label", [["form-group", "label"]], null, null, null, _modules_forms_label_label_label_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["View_LabelComponent_0"], _modules_forms_label_label_label_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["RenderType_LabelComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](55, 114688, null, 0, _modules_forms_label_label_label_component__WEBPACK_IMPORTED_MODULE_7__["LabelComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\u041E\u0431\u0435\u0441\u043F\u0435\u0447\u0435\u043D\u0438\u0435"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](57, 0, null, 1, 1, "rosa-dropdown-hoc", [["form-group", "control"]], null, [[null, "sendValue"], ["document", "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("document:click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 58).onCLick($event.target) !== false);
        ad = (pd_0 && ad);
    } if (("sendValue" === en)) {
        var pd_1 = (_co.setCollateral($event) !== false);
        ad = (pd_1 && ad);
    } return ad; }, _components_dropdown_hoc_dropdown_hoc_component_ngfactory__WEBPACK_IMPORTED_MODULE_16__["View_DropdownHocComponent_0"], _components_dropdown_hoc_dropdown_hoc_component_ngfactory__WEBPACK_IMPORTED_MODULE_16__["RenderType_DropdownHocComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](58, 638976, null, 0, _components_dropdown_hoc_dropdown_hoc_component__WEBPACK_IMPORTED_MODULE_17__["DropdownHocComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], { values: [0, "values"] }, { sendValue: "sendValue" }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](59, 0, null, 2, 2, "rosa-hint", [["form-group", "hint"]], null, null, null, _modules_forms_hint_hint_hint_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_HintComponent_0"], _modules_forms_hint_hint_hint_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_HintComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](60, 114688, null, 0, _modules_forms_hint_hint_hint_component__WEBPACK_IMPORTED_MODULE_3__["HintComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["*\u00A0\u0414\u043E\u043B\u044F \u043A\u0440\u0435\u0434\u0438\u0442\u0430/\u043B\u0438\u043C\u0438\u0442\u0430, \u043E\u0431\u0435\u0441\u043F\u0435\u0447\u0435\u043D\u043D\u043E\u0433\u043E \u043D\u0435\u0434\u0432\u0438\u0436\u0438\u043C\u043E\u0441\u0442\u044C\u044E/\u043F\u043E\u0440\u0443\u0447\u0438\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u043E\u043C \u0424\u043E\u043D\u0434\u0430"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](62, 0, null, null, 16, "rosa-form-group", [], null, null, null, _modules_forms_form_layout_form_group_form_group_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_FormGroupComponent_0"], _modules_forms_form_layout_form_group_form_group_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_FormGroupComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](63, 114688, null, 0, _modules_forms_form_layout_form_group_form_group_component__WEBPACK_IMPORTED_MODULE_5__["FormGroupComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](64, 0, null, 0, 2, "rosa-label", [["form-group", "label"]], null, null, null, _modules_forms_label_label_label_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["View_LabelComponent_0"], _modules_forms_label_label_label_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["RenderType_LabelComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](65, 114688, null, 0, _modules_forms_label_label_label_component__WEBPACK_IMPORTED_MODULE_7__["LabelComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\u0418\u0442\u043E\u0433\u043E\u0432\u0430\u044F \u0441\u0442\u0430\u0432\u043A\u0430:"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](67, 0, null, 1, 11, "div", [["class", "result-field"], ["form-group", "control"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](68, 0, null, null, 10, "div", [["class", "field__inner"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](69, 0, null, null, 9, "div", [["class", "field__score"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](70, 0, null, null, 3, "div", [["class", "score__value"], ["style", "display: flex; width: 100%; margin-bottom: 4px;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](71, 0, null, null, 2, "span", [["class", "font-weight__bold"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](72, null, ["", " %"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](73, 2), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](74, 0, null, null, 4, "div", [["class", "score__values"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](75, 0, null, null, 3, "span", [["style", "font-size: 12px; margin-top: 4px;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](76, null, ["FTP: ", " % + \u0412\u0430\u043B. \u043C\u0430\u0440\u0436\u0430: ", " % - ", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](77, 2), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](78, 2), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](79, 0, null, null, 0, "div", [["class", "pane pane-right"]], null, null, null, null, null))], function (_ck, _v) { var _co = _v.component; var currVal_7 = _co.calculator; _ck(_v, 10, 0, currVal_7); var currVal_8 = "form-group_group"; _ck(_v, 14, 0, currVal_8); _ck(_v, 16, 0); var currVal_9 = "small"; var currVal_10 = "segment"; var currVal_11 = true; _ck(_v, 19, 0, currVal_9, currVal_10, currVal_11); var currVal_12 = "micro"; var currVal_13 = "segment"; _ck(_v, 22, 0, currVal_12, currVal_13); _ck(_v, 25, 0); var currVal_14 = "decent"; var currVal_15 = "\u0414\u043E\u0431\u0440\u043E\u0441\u043E\u0432\u0435\u0441\u0442\u043D\u044B\u0439 \u043A\u043B\u0438\u0435\u043D\u0442"; var currVal_16 = "decent"; _ck(_v, 27, 0, currVal_14, currVal_15, currVal_16); var currVal_17 = "form-group_group"; _ck(_v, 29, 0, currVal_17); _ck(_v, 31, 0); var currVal_18 = "credit"; var currVal_19 = "type"; var currVal_20 = true; _ck(_v, 34, 0, currVal_18, currVal_19, currVal_20); var currVal_21 = "overdraft"; var currVal_22 = "type"; _ck(_v, 37, 0, currVal_21, currVal_22); var currVal_23 = _co.overdrafted; _ck(_v, 40, 0, currVal_23); _ck(_v, 42, 0); _ck(_v, 44, 0); var currVal_24 = _co.selectedAmount; _ck(_v, 47, 0, currVal_24); var currVal_25 = _co.overdrafted; _ck(_v, 49, 0, currVal_25); var currVal_26 = _co.overdrafted; _ck(_v, 51, 0, currVal_26); _ck(_v, 53, 0); _ck(_v, 55, 0); var currVal_27 = _co.selectedCollateral; _ck(_v, 58, 0, currVal_27); _ck(_v, 60, 0); _ck(_v, 63, 0); _ck(_v, 65, 0); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).ngClassUntouched; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).ngClassTouched; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).ngClassPristine; var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).ngClassDirty; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).ngClassValid; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).ngClassInvalid; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).ngClassPending; _ck(_v, 8, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6); var currVal_28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 72, 0, _ck(_v, 73, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 0), ((_co.searchMargin - _co.decentScore) + _co.scoreResult), "2.0-2")); _ck(_v, 72, 0, currVal_28); var currVal_29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 76, 0, _ck(_v, 77, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 0), _co.scoreResult, "1.0-2")); var currVal_30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 76, 1, _ck(_v, 78, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 0), _co.searchMargin, "1.0-2")); var currVal_31 = _co.decentScore; _ck(_v, 76, 0, currVal_29, currVal_30, currVal_31); }); }
function View_CalculatorComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "rosa-calculator", [], null, null, null, View_CalculatorComponent_0, RenderType_CalculatorComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 245760, null, 0, _calculator_component__WEBPACK_IMPORTED_MODULE_18__["CalculatorComponent"], [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormBuilder"], _services_form_service__WEBPACK_IMPORTED_MODULE_19__["FormService"], _bstorage_indexed_service__WEBPACK_IMPORTED_MODULE_20__["IndexedService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var CalculatorComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("rosa-calculator", _calculator_component__WEBPACK_IMPORTED_MODULE_18__["CalculatorComponent"], View_CalculatorComponent_Host_0, {}, {}, []);



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
var styles = [".pane-rows[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  position: relative;\n  display: flex;\n  justify-content: space-between; }\n\n.pane[_ngcontent-%COMP%] {\n  width: 100%;\n  background: #FFF;\n  border-radius: 3px;\n  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.16), 0 0 1px 0 rgba(0, 0, 0, 0.16); }\n\n.pane-left[_ngcontent-%COMP%] {\n  width: calc(55% - 8px);\n  margin-right: 16px;\n  overflow: hidden; }\n\n.pane-left[_ngcontent-%COMP%]   .pane-header[_ngcontent-%COMP%] {\n    padding: 14px 24px;\n    border-bottom: 1px solid #c4c4c4; }\n\n.pane-left[_ngcontent-%COMP%]   .pane-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n      font-size: 18px;\n      line-height: 28px;\n      font-weight: 600;\n      color: var(--color-typo-primary);\n      margin: 0; }\n\n.pane__calculator-form[_ngcontent-%COMP%] {\n  padding: 16px 32px 40px 24px;\n  height: 100%;\n  overflow: scroll; }\n\n.pane__calculator-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n    width: 80%;\n    margin-bottom: 64px; }\n\n.pane-right[_ngcontent-%COMP%] {\n  width: calc(45% - 8px);\n  margin-right: 16px; }\n\n.input__suffix-group[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center; }\n\n.input__suffix-group[_ngcontent-%COMP%]   .input-suffix[_ngcontent-%COMP%] {\n    padding-left: 12px; }\n\n.calculator-wrapper[_ngcontent-%COMP%] {\n  height: calc(100vh - 64px - 32px);\n  position: relative;\n  width: 100%; }\n\n.calculator-pane[_ngcontent-%COMP%] {\n  width: 992px;\n  height: auto;\n  margin-top: -64px;\n  min-height: 480px;\n  background-color: #FFF;\n  border: 1px solid var(--color-border-control); }\n\n.calculator-pane_header[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 56px;\n  background-color: #FFF;\n  border-bottom: 1px solid var(--color-border-control); }\n\n.calculator-pane_header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: var(--size-typo-xl);\n    font-weight: 400;\n    line-height: var --line-height-typo-l;\n    color: var(--color-typo-primary);\n    margin: 0;\n    padding: 16px 24px; }\n\n.calculator-pane_content[_ngcontent-%COMP%] {\n  display: flex; }\n\n.calculator-pane_left[_ngcontent-%COMP%] {\n  width: 56%; }\n\n.calculator-pane_right[_ngcontent-%COMP%] {\n  width: 44%;\n  background-color: #fafafa;\n  height: 604px;\n  overflow: hidden; }\n\n.calculator-form[_ngcontent-%COMP%] {\n  padding: 20px 24px; }\n\n.form-group_margin[_ngcontent-%COMP%] {\n  width: 50%; }\n\n.form-group_save[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between; }\n\n.form-group_save[_ngcontent-%COMP%]  rosa-input {\n    width: 65%; }\n\n.score-cards[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  padding: 0 16px;\n  box-sizing: border-box;\n  height: 604px;\n  overflow-x: hidden;\n  overflow-y: scroll; }\n\n.is-hidden[_ngcontent-%COMP%] {\n  display: none !important; }\n\n.result-field[_ngcontent-%COMP%] {\n  text-align: left;\n  width: 100%;\n  color: var(--color-typo-primary);\n  font-size: var(--size-typo-m);\n  font-weight: 400;\n  box-shadow: none;\n  border: 1px solid;\n  box-sizing: border-box;\n  border-radius: var(--space-xxxs);\n  border-color: var(--color-border-control-alt);\n  padding: 8px 16px;\n  outline: none;\n  transition: all 0.15s ease; }\n\n.field__inner[_ngcontent-%COMP%] {\n  justify-content: space-between; }\n\n.field__score[_ngcontent-%COMP%] {\n  width: 100%; }\n\n.field__score[_ngcontent-%COMP%]   .score__value[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    display: flex;\n    font-size: var(--size-typo-h); }\n\n.field__score[_ngcontent-%COMP%]   .score__value_margin[_ngcontent-%COMP%] {\n    font-weight: 400 !important; }\n\n.font-weight__bold[_ngcontent-%COMP%] {\n  font-weight: bold; }"];



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
        this.scoreResult = 0;
        this.calculateHistory = [];
        this.storageData$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.order = 'date';
        this.overdrafted = false;
        this.decent = false;
        this.decentScore = 0;
        this._range = {
            min: 3,
            max: 84
        };
        this._collateral = ['Без обеспечения', '100 - 75%', '75(включ) – 50%', '100 – 75%'];
        this.collateralValues = {
            credit: ['100% денежное обеспечение', '100 - 75% *', '75 (включ) - 50% *', '50 (включ) - 0% *'],
            overdraft: ['100 - 75% *', '75 (включ) - 50% *', '50 (включ) - 0% *', 'Без обеспечения']
        };
        this._amount = {
            micro: ['До 10 млн. руб. (включительно)', 'Свыше 10 млн. руб.'],
            small: ['До 10 млн. руб. (включительно)', 'От 10 до 20 млн. руб (включительно)', 'Свыше 20 млн. руб.'],
        };
        // если выбрано микро то сохраняем ссылку на marginvalue.micro
        // далее определяем период,  если он больше равен 3 и меньше 13 то сохраняем ссылку marginvalue.micro.padding_one
        // далее определяем обеспечение, если деньги то берем значение marginvalue.micro.padding_one.money
        this.marginvalues = {
            micro: {
                amount_10: {
                    // до 12 мес
                    period_one: {
                        full: 3.20,
                        col_one: 3.90,
                        col_two: 4.80,
                        col_three: 6.20,
                    },
                    // 12-36 мес
                    period_two: {
                        full: 3.20,
                        col_one: 4.20,
                        col_two: 5.10,
                        col_three: 6.60,
                    },
                    period_three: {
                        full: 3.20,
                        col_one: 4.40,
                        col_two: 5.40,
                        col_three: 6.90,
                    },
                    period_fourth: {
                        full: 3.20,
                        col_one: 4.40,
                        col_two: 5.40,
                        col_three: 6.90,
                    },
                },
                amount_11: {
                    // до 12 мес
                    period_one: {
                        full: 3.20,
                        col_one: 3.60,
                        col_two: 4.50,
                        col_three: 6.00,
                    },
                    // 12-36 мес
                    period_two: {
                        full: 3.20,
                        col_one: 3.90,
                        col_two: 4.80,
                        col_three: 6.40,
                    },
                    period_three: {
                        full: 3.20,
                        col_one: 4.10,
                        col_two: 5.10,
                        col_three: 6.70,
                    },
                    period_fourth: {
                        full: 3.20,
                        col_one: 4.10,
                        col_two: 5.10,
                        col_three: 6.70,
                    },
                },
                overdraft: {
                    one: 3.5,
                    two: 3.6,
                    three: 3.8,
                    without: 4.3,
                },
            },
            small: {
                amount_10: {
                    // до 12 мес
                    period_one: {
                        full: 3,
                        col_one: 3.20,
                        col_two: 3.7,
                        col_three: 4.5,
                    },
                    // 12-36 мес
                    period_two: {
                        full: 3,
                        col_one: 3.5,
                        col_two: 4,
                        col_three: 4.9,
                    },
                    period_three: {
                        full: 3,
                        col_one: 3.7,
                        col_two: 4.3,
                        col_three: 5.2,
                    },
                    period_fourth: {
                        full: 3,
                        col_one: 3.7,
                        col_two: 4.3,
                        col_three: 5.2,
                    },
                },
                amount_11: {
                    // до 12 мес
                    period_one: {
                        full: 3,
                        col_one: 3.20,
                        col_two: 3.5,
                        col_three: 4,
                    },
                    // 12-36 мес
                    period_two: {
                        full: 3,
                        col_one: 3.4,
                        col_two: 3.8,
                        col_three: 4.4,
                    },
                    period_three: {
                        full: 3,
                        col_one: 3.6,
                        col_two: 4.1,
                        col_three: 4.7,
                    },
                    period_fourth: {
                        full: 3,
                        col_one: 3.6,
                        col_two: 4.1,
                        col_three: 4.7,
                    },
                },
                amount_20: {
                    // до 12 мес
                    period_one: {
                        full: 3,
                        col_one: 2.60,
                        col_two: 3,
                        col_three: 3,
                    },
                    // 12-36 мес
                    period_two: {
                        full: 3,
                        col_one: 2.9,
                        col_two: 3.3,
                        col_three: 3.4,
                    },
                    period_three: {
                        full: 3,
                        col_one: 3.1,
                        col_two: 3.6,
                        col_three: 3.7,
                    },
                    period_fourth: {
                        full: 3,
                        col_one: 3.1,
                        col_two: 3.6,
                        col_three: 3.7,
                    },
                },
                overdraft: {
                    one: 3.4,
                    two: 3.5,
                    three: 3.6,
                    without: 3.7,
                },
            }
        };
    }
    CalculatorComponent.prototype.ngOnInit = function () {
        this.initCalculator();
        this.initForm();
        this.formChangeDetector();
        this.rangeSubscribe();
        this.marginSubscribe();
    };
    Object.defineProperty(CalculatorComponent.prototype, "range", {
        get: function () {
            return this._range;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalculatorComponent.prototype, "collateral", {
        get: function () {
            return this._collateral;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalculatorComponent.prototype, "amount", {
        get: function () {
            return this._amount;
        },
        enumerable: true,
        configurable: true
    });
    CalculatorComponent.prototype.initForm = function () {
        this.calculator = this._fb.group({
            type: ['credit', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            range: [this.range.min, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            segment: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            collateral: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            amount: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            margin: ['', []],
            note: ['', []]
        });
        this.setCollateralValues('credit');
    };
    CalculatorComponent.prototype.initCalculator = function () {
        //  this.ranges$ = this._formService.getRanges();
        // this.keys$ = this._formService.getKeys();
    };
    CalculatorComponent.prototype.setType = function (type) {
        this.calculator.controls['type'].setValue(type);
        this.setCollateralValues(type);
        if (this.calculator.controls['type'].value === 'overdraft') {
            this.overdrafted = true;
            //return this.calculator.controls['range'].disable();
        }
        else {
            //this.calculator.controls['range'].enable();
            this.overdrafted = false;
        }
        this.calculate();
    };
    CalculatorComponent.prototype.setSegment = function (segment) {
        var _this = this;
        setTimeout(function () {
            _this.selectedAmount = segment === 'micro' ? _this.amount.micro : _this.amount.small;
            _this.range.max = segment === 'micro' ? 60 : 84;
            _this.calculator.controls['range'].setValue(_this.range.max);
        }, 1000);
        this.calculator.controls['segment'].setValue(segment);
        this.calculate();
    };
    CalculatorComponent.prototype.setCollateralValues = function (type) {
        this.selectedCollateral = type === 'credit' ? this.collateralValues.credit : this.collateralValues.overdraft;
        this.calculate();
    };
    CalculatorComponent.prototype.setCollateral = function (collateral) {
        this.calculator.controls['collateral'].setValue(collateral);
        this.calculate();
    };
    CalculatorComponent.prototype.setAmount = function (amount) {
        this.calculator.controls['amount'].setValue(amount);
        this.calculate();
    };
    CalculatorComponent.prototype.formChangeDetector = function () {
        var _this = this;
        this.calculator.valueChanges.subscribe(function (val) {
            _this.buttonState = { text: "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u0440\u0430\u0441\u0441\u0447\u0435\u0442", class: "state_default", disabled: false };
        });
    };
    CalculatorComponent.prototype.rangeSubscribe = function () {
        var _this = this;
        this.calculator
            .get('range')
            .valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])()).subscribe(function (range) {
            _this._filterRange(range);
        });
    };
    CalculatorComponent.prototype._filterRange = function (range) {
        if (!range) {
            return;
        }
        if (range < this.range.min) {
            this.calculator.controls['range'].setValue(this.range.min);
            return this.calculate();
        }
        if (range > this.range.max || range > 60) {
            this.calculator.controls['range'].setValue(this.range.max);
            return this.calculate();
        }
        this.calculator.controls['range'].setValue(range);
        return this.calculate();
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
        this.searchMargin = this.calculator.value.segment === 'small' ? this.marginvalues.small : this.marginvalues.micro;
        if (this.overdrafted) { // если овердрафт /   segment / overdraft / collatera
            this.searchMargin = this.searchMargin.overdraft;
            switch (this.calculator.value.collateral) {
                case '100 - 75% *':
                    this.searchMargin = this.searchMargin.one;
                    break;
                case '75 (включ) - 50% *':
                    this.searchMargin = this.searchMargin.two;
                    break;
                case '50 (включ) - 0% *':
                    this.searchMargin = this.searchMargin.three;
                    break;
                case 'Без обеспечения':
                    this.searchMargin = this.searchMargin.without;
                    break;
            }
        }
        if (!this.overdrafted) {
            // если не овердрафт segment /  amount|overdraft / period / collatera.
            switch (this.calculator.value.amount) {
                case 'До 10 млн. руб. (включительно)':
                    this.searchMargin = this.searchMargin.amount_10;
                    break;
                case 'Свыше 10 млн. руб.':
                    this.searchMargin = this.searchMargin.amount_11;
                    break;
                case 'От 10 до 20 млн. руб (включительно)':
                    this.searchMargin = this.searchMargin.amount_11;
                    break;
                case 'Свыше 20 млн. руб.':
                    this.searchMargin = this.searchMargin.amount_20;
                    break;
            }
            if (this.calculator.value.range >= 3 && this.calculator.value.range < 13) {
                this.searchMargin = this.searchMargin.period_one;
                console.log('first period');
            }
            if (this.calculator.value.range >= 13 && this.calculator.value.range < 37) {
                console.log('second period');
                this.searchMargin = this.searchMargin.period_two;
            }
            if (this.calculator.value.range >= 37 && this.calculator.value.range < 61) {
                console.log('third period');
                this.searchMargin = this.searchMargin.period_three;
            }
            if (this.calculator.value.range > 60) {
                this.searchMargin = this.searchMargin.period_fourth;
                console.log('fourth period');
            }
            switch (this.calculator.value.collateral) {
                case '100% денежное обеспечение':
                    this.searchMargin = this.searchMargin.full;
                    break;
                case '100 - 75% *':
                    this.searchMargin = this.searchMargin.col_one;
                    break;
                case '75 (включ) - 50% *':
                    this.searchMargin = this.searchMargin.col_two;
                    break;
                case '50 (включ) - 0% *':
                    this.searchMargin = this.searchMargin.col_three;
                    break;
            }
        }
        this._formService.calculate(this.calculator.value).subscribe(function (score) {
            _this.scoreResult = score.score;
            console.log(score.score);
            // this.scoreResult =  this.scoreResult + this.searchMargin + this.decentScore;
        }, function (data) { alert('Не удалось вычислить ставку'); });
        /*
         overdraft: {fget
          collateral_one: 4.95,
          collateral_two: 5.95,
          collateral_three:  7.45,
          without: 1.23,
        }
         overdraft: ['100 - 75% *', '75 (включ) - 50% *', '50 (включ) - 0% *', 'Без обеспечения']
  
  */
        // если не оведрафт то вычисляем период после определяем обеспечение
        // если оведрафт то определяем обеспечение и выдаем ставку
        // console.log(searchMargin);
        //const searchMargin = this.overdrafted ? this.marginvalues.overdraft : 
        //this.loadScore = true;
        //setTimeout(() => {this.loadScore = false; }, 2300 );
        // this.scoreResult$ = this._formService.calculate(this.calculator.value);
        /*this._formService.calculate(this.calculator.value).subscribe(
          score => this.scoreResult = score,
          data => { alert('Не удалось вычислить ставку'); }
        );
        */
    };
    CalculatorComponent.prototype.setDecent = function (value) {
        this.decentScore = value.checked ? 0.3 : 0;
        console.log(value);
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

function View_DropdownHocComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 0, "div", [["class", "dropdown-container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 4, "div", [["class", "dropdown-container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 1, "rosa-dropdown", [], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.showDropdown() !== false);
        ad = (pd_0 && ad);
    } return ad; }, _modules_forms_dropdown_dropdown_dropdown_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_DropdownComponent_0"], _modules_forms_dropdown_dropdown_dropdown_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_DropdownComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 114688, null, 0, _modules_forms_dropdown_dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_3__["DropdownComponent"], [], { value: [0, "value"], size: [1, "size"], isDisabled: [2, "isDisabled"], isOpen: [3, "isOpen"], suffix: [4, "suffix"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 1, "rosa-list", [], null, [[null, "sendValue"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("sendValue" === en)) {
        var pd_0 = (_co.changeValue($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, _modules_forms_dropdown_list_list_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_ListComponent_0"], _modules_forms_dropdown_list_list_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_ListComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 114688, null, 0, _modules_forms_dropdown_list_list_component__WEBPACK_IMPORTED_MODULE_5__["ListComponent"], [], { values: [0, "values"], suffix: [1, "suffix"], selected: [2, "selected"], isOpen: [3, "isOpen"] }, { sendValue: "sendValue" })], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.selected; var currVal_1 = "size-large"; var currVal_2 = _co.disabled; var currVal_3 = _co.isOpen; var currVal_4 = _co.settedSuffix; _ck(_v, 3, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4); var currVal_5 = _co.values; var currVal_6 = _co.settedSuffix; var currVal_7 = _co.selected; var currVal_8 = _co.isOpen; _ck(_v, 5, 0, currVal_5, currVal_6, currVal_7, currVal_8); }, null); }
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _modules_forms_textarea_textarea_textarea_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../modules/forms/textarea/textarea/textarea.component.ngfactory */ "./src/app/modules/forms/textarea/textarea/textarea.component.ngfactory.js");
/* harmony import */ var _modules_forms_textarea_textarea_textarea_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../modules/forms/textarea/textarea/textarea.component */ "./src/app/modules/forms/textarea/textarea/textarea.component.ts");
/* harmony import */ var _modules_buttons_button_button_button_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../modules/buttons/button/button/button.component.ngfactory */ "./src/app/modules/buttons/button/button/button.component.ngfactory.js");
/* harmony import */ var _modules_buttons_button_button_button_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../modules/buttons/button/button/button.component */ "./src/app/modules/buttons/button/button/button.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _config_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./config.component */ "./src/app/application/loans/calculator/config/config.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 










var styles_ConfigComponent = [_config_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_ConfigComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_ConfigComponent, data: {} });

function View_ConfigComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 30, "div", [["class", "data-list__container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 29, "div", [["class", "data-list__body"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 10, "div", [["class", "page-header"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 7, "div", [["class", "breadcrumbs"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 1, "span", [["class", "breadcrumb"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\u041A\u0430\u043B\u044C\u043A\u0443\u043B\u044F\u0442\u043E\u0440"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 2, "div", [["class", "breadcrumb__arrow"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 1, ":svg:svg", [["height", "100%"], ["id", "packages--wrike_components--iconset--icon-arrow-right"], ["viewBox", "0 0 16 16"], ["width", "100%"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 0, ":svg:path", [["d", "M6.5 4.5l4 4L11 8l-.5-.5L7 4l-.5.5zm0 7l.5.5 3.5-3.5L10 8l-3.5 3.5z"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 1, "span", [["class", "breadcrumb"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\u0423\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 1, "h1", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\u0423\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u043F\u043E\u043A\u0430\u0437\u0430\u0442\u0435\u043B\u044F\u043C\u0438"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 17, "div", [["class", "form-container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, null, 10, "form", [["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngSubmit"], [null, "submit"], [null, "reset"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("submit" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).onSubmit($event) !== false);
        ad = (pd_0 && ad);
    } if (("reset" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).onReset() !== false);
        ad = (pd_1 && ad);
    } if (("ngSubmit" === en)) {
        var pd_2 = (_co.onSubmit() !== false);
        ad = (pd_2 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](15, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_bh"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](16, 540672, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], [[8, null], [8, null]], { form: [0, "form"] }, { ngSubmit: "ngSubmit" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](18, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](19, 0, null, null, 2, "rosa-textarea", [], null, [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21).onContainerClick($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, _modules_forms_textarea_textarea_textarea_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_TextareaComponent_0"], _modules_forms_textarea_textarea_textarea_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_TextareaComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](5120, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_modules_forms_textarea_textarea_textarea_component__WEBPACK_IMPORTED_MODULE_4__["TextareaComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](21, 114688, null, 0, _modules_forms_textarea_textarea_textarea_component__WEBPACK_IMPORTED_MODULE_4__["TextareaComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], { controlOptions: [0, "controlOptions"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](22, 0, null, null, 2, "rosa-button", [["type", "'submit'"]], [[8, "className", 0]], null, null, _modules_buttons_button_button_button_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_ButtonComponent_0"], _modules_buttons_button_button_button_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_ButtonComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](23, 638976, null, 0, _modules_buttons_button_button_button_component__WEBPACK_IMPORTED_MODULE_6__["ButtonComponent"], [], { type: [0, "type"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u0440\u0430\u0441\u0441\u0447\u0435\u0442"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](25, 0, null, null, 2, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](26, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["JsonPipe"], []), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](28, 0, null, null, 2, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](29, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["JsonPipe"], [])], function (_ck, _v) { var _co = _v.component; var currVal_7 = _co.parseForm; _ck(_v, 16, 0, currVal_7); var currVal_8 = _co.parseForm.controls["parser"]; _ck(_v, 21, 0, currVal_8); var currVal_10 = "'submit'"; _ck(_v, 23, 0, currVal_10); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 18).ngClassUntouched; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 18).ngClassTouched; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 18).ngClassPristine; var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 18).ngClassDirty; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 18).ngClassValid; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 18).ngClassInvalid; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 18).ngClassPending; _ck(_v, 14, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6); var currVal_9 = "red size__m padding__l"; _ck(_v, 22, 0, currVal_9); var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 26, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 27).transform(_co.parsed)); _ck(_v, 26, 0, currVal_11); var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 29, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 30).transform(_co.parseForm.value)); _ck(_v, 29, 0, currVal_12); }); }
function View_ConfigComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "rosa-config", [], null, null, null, View_ConfigComponent_0, RenderType_ConfigComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _config_component__WEBPACK_IMPORTED_MODULE_8__["ConfigComponent"], [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClient"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var ConfigComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("rosa-config", _config_component__WEBPACK_IMPORTED_MODULE_8__["ConfigComponent"], View_ConfigComponent_Host_0, {}, {}, []);



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
var styles = [".global-container[_ngcontent-%COMP%] {\n  min-width: 13; }\n\n@media (max-width: 1440px) {\n  .container[_ngcontent-%COMP%] {\n    width: 1152px;\n    margin: 0 auto;\n    position: relative;\n    padding: 0 12px; } }\n\n@media (max-width: 1680px) {\n  .container[_ngcontent-%COMP%] {\n    width: 1344px;\n    margin: 0 auto;\n    position: relative;\n    padding: 0 12px; } }\n\n@media (min-width: 1920px) {\n  .container[_ngcontent-%COMP%] {\n    width: 1632px;\n    margin: 0 auto;\n    position: relative;\n    padding: 0 12px; } }\n\n.rosa-grid-1[_ngcontent-%COMP%] {\n  width: 8.33333333%; }\n\n.rosa-grid-2[_ngcontent-%COMP%] {\n  width: 16.66666667%; }\n\n.rosa-grid-3[_ngcontent-%COMP%] {\n  width: 25%; }\n\n.rosa-grid-4[_ngcontent-%COMP%] {\n  width: 33.33333333%; }\n\n.rosa-grid-5[_ngcontent-%COMP%] {\n  width: 41.66666667%; }\n\n.rosa-grid-6[_ngcontent-%COMP%] {\n  width: 50%; }\n\n.rosa-grid-7[_ngcontent-%COMP%] {\n  width: 58.33333333%; }\n\n.rosa-grid-8[_ngcontent-%COMP%] {\n  width: 66.66666667%; }\n\n.rosa-grid-9[_ngcontent-%COMP%] {\n  width: 75%; }\n\n.rosa-grid-10[_ngcontent-%COMP%] {\n  width: 83.33333333%; }\n\n.rosa-grid-11[_ngcontent-%COMP%] {\n  width: 91.66666667%; }\n\n.rosa-grid-12[_ngcontent-%COMP%] {\n  width: 100%; }\n\n.data-list__container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%; }\n\n.data-list__body[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  height: calc(100vh - 80px);\n  overflow-x: hidden;\n  overflow-y: auto;\n  background-color: #FFF;\n  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.16), 0 0 1px 0 rgba(0, 0, 0, 0.16);\n  border-radius: 3px; }\n\n.page-header[_ngcontent-%COMP%] {\n  background-color: #FFF;\n  border-bottom: 1px solid var(--color-line);\n  border-radius: 3px 3px 0 0;\n  padding: 16px 20px 12px 24px; }\n\n.page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 18px;\n    line-height: 28px;\n    font-weight: 600;\n    margin: 0;\n    color: var(--color-typo-primary);\n    margin-bottom: 4px; }\n\n.breadcrumbs[_ngcontent-%COMP%] {\n  display: flex;\n  margin-bottom: 4px; }\n\n.breadcrumb[_ngcontent-%COMP%] {\n  font-size: 12px;\n  line-height: 20px;\n  margin: 0;\n  color: #666; }\n\n.breadcrumb__arrow[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  margin-top: 3px;\n  margin-right: 2px; }\n\n.breadcrumb__arrow[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n    fill: #666; }\n\n.form-container[_ngcontent-%COMP%] {\n  padding: 16px 24px;\n  max-width: 60%; }"];



/***/ }),

/***/ "./src/app/application/loans/calculator/config/config.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/application/loans/calculator/config/config.component.ts ***!
  \*************************************************************************/
/*! exports provided: RowTable, ConfigComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RowTable", function() { return RowTable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigComponent", function() { return ConfigComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @env/environment */ "./src/environments/environment.ts");




var RowTable = /** @class */ (function () {
    function RowTable(range, ratesRub, ratesUsd, ratesEur, rub, usd, eur) {
        this.range = range;
        this.rates = {
            rub: "" + ratesRub,
            usd: "" + ratesUsd,
            eur: "" + ratesEur
        };
        this.risk = {
            rub: "" + rub,
            usd: "" + usd,
            eur: "" + eur
        };
    }
    return RowTable;
}());

var ConfigComponent = /** @class */ (function () {
    function ConfigComponent(_fb, _http) {
        this._fb = _fb;
        this._http = _http;
        this.parsed = [];
    }
    ConfigComponent.prototype.ngOnInit = function () {
        this.parseForm = this._fb.group({
            parser: ['', []]
        });
    };
    Object.defineProperty(ConfigComponent.prototype, "f", {
        get: function () { return this.parseForm.controls; },
        enumerable: true,
        configurable: true
    });
    ConfigComponent.prototype.onSubmit = function () {
        var _this = this;
        var csv = this.f.parser.value.split(/\n/g);
        // .map(row => row.split(/\n/g));
        csv = csv.map(function (row) { return row.replace(/\t\t/g, '\t'); });
        csv = csv.map(function (row) { return row.split(/\t/g); });
        console.log(csv[0]);
        for (var _i = 0, csv_1 = csv; _i < csv_1.length; _i++) {
            var row = csv_1[_i];
            var RowType = new RowTable(row[0], row[1], row[2], row[3], row[5], row[6], row[7]);
            this.parsed.push(RowType);
        }
        // csv = csv.map(row => row.split('\t'));
        // console.log(JSON.stringify(csv));
        // this.parsed = JSON.stringify(csv);
        var stringify = JSON.stringify(this.parsed);
        var body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .append('data', stringify);
        console.log(stringify);
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/x-www-form-urlencoded' });
        this._http.post(_env_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].endpoint + "/parseTable", body, { headers: headers }).subscribe((function (data) { console.log(data); _this.parsed = []; }), (function (err) { return console.log(err); }));
    };
    return ConfigComponent;
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
            .append('type', data.type);
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

/***/ "./src/app/modules/forms/checkbox/checkbox/checkbox.component.ngfactory.js":
/*!*********************************************************************************!*\
  !*** ./src/app/modules/forms/checkbox/checkbox/checkbox.component.ngfactory.js ***!
  \*********************************************************************************/
/*! exports provided: RenderType_CheckboxComponent, View_CheckboxComponent_0, View_CheckboxComponent_Host_0, CheckboxComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_CheckboxComponent", function() { return RenderType_CheckboxComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_CheckboxComponent_0", function() { return View_CheckboxComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_CheckboxComponent_Host_0", function() { return View_CheckboxComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxComponentNgFactory", function() { return CheckboxComponentNgFactory; });
/* harmony import */ var _checkbox_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./checkbox.component.scss.shim.ngstyle */ "./src/app/modules/forms/checkbox/checkbox/checkbox.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _checkbox_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./checkbox.component */ "./src/app/modules/forms/checkbox/checkbox/checkbox.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 



var styles_CheckboxComponent = [_checkbox_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_CheckboxComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_CheckboxComponent, data: {} });

function View_CheckboxComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](402653184, 1, { checkboxControl: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 7, "div", [["class", "checkbox__container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, [[1, 0], ["checkbox", 1]], null, 0, "input", [["class", "checkbox__input"], ["type", "checkbox"]], [[8, "value", 0], [8, "id", 0], [8, "name", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.emitValue(_co.value) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 5, "label", [], [[8, "htmlFor", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 2, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 1, ":svg:svg", [["height", "10px"], ["viewbox", "0 0 12 10"], ["width", "12px"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 0, ":svg:polyline", [["points", "1.5 6 4.5 9 10.5 1"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](8, null, ["", ""]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.value; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", _co.index, ""); var currVal_2 = _co.name; _ck(_v, 2, 0, currVal_0, currVal_1, currVal_2); var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", _co.index, ""); _ck(_v, 3, 0, currVal_3); var currVal_4 = _co.label; _ck(_v, 8, 0, currVal_4); }); }
function View_CheckboxComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "rosa-checkbox", [], null, null, null, View_CheckboxComponent_0, RenderType_CheckboxComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _checkbox_component__WEBPACK_IMPORTED_MODULE_2__["CheckboxComponent"], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var CheckboxComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("rosa-checkbox", _checkbox_component__WEBPACK_IMPORTED_MODULE_2__["CheckboxComponent"], View_CheckboxComponent_Host_0, { value: "value", label: "label", name: "name", checked: "checked" }, { ClickEvent: "ClickEvent" }, []);



/***/ }),

/***/ "./src/app/modules/forms/checkbox/checkbox/checkbox.component.scss.shim.ngstyle.js":
/*!*****************************************************************************************!*\
  !*** ./src/app/modules/forms/checkbox/checkbox/checkbox.component.scss.shim.ngstyle.js ***!
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
var styles = [".checkbox__container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  height: 24px;\n  margin-top: 4px; }\n\nlabel[_ngcontent-%COMP%] {\n  letter-spacing: 0;\n  color: var(--color-typo-primary);\n  font-size: var(--size-typo-m);\n  line-height: var(--line-height-typo-m);\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  cursor: pointer; }\n\nlabel.disabled[_ngcontent-%COMP%] {\n    opacity: .5; }\n\nlabel[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    display: inline-block;\n    vertical-align: middle;\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0); }\n\nlabel[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child {\n      position: relative;\n      width: 16px;\n      height: 16px;\n      border-radius: 2px;\n      -webkit-transform: scale(1);\n              transform: scale(1);\n      vertical-align: middle;\n      border: 1px solid var(--color-border-control-alt);\n      transition: all 0.2s ease; }\n\nlabel[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child   svg[_ngcontent-%COMP%] {\n        position: absolute;\n        top: 2px;\n        left: 1px;\n        fill: none;\n        stroke: #fff;\n        stroke-width: 2;\n        stroke-linecap: round;\n        stroke-linejoin: round;\n        stroke-dasharray: 16px;\n        stroke-dashoffset: 16px;\n        transition: all 0.3s ease;\n        transition-delay: 0.1s;\n        -webkit-transform: translate3d(0, 0, 0) scale(0.8);\n                transform: translate3d(0, 0, 0) scale(0.8); }\n\nlabel[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child:before {\n        content: \"\";\n        width: 100%;\n        height: 100%;\n        background: var(--color-hover);\n        display: block;\n        -webkit-transform: scale(0);\n                transform: scale(0);\n        opacity: 1;\n        border-radius: 50%; }\n\nlabel[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child {\n      padding-left: 8px; }\n\n.checkbox__input[_ngcontent-%COMP%] {\n  display: none; }\n\n.checkbox__input[_ngcontent-%COMP%]:checked    + label[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child {\n    -webkit-animation: wave 0.4s ease;\n            animation: wave 0.4s ease;\n    background: var(--color-hover);\n    border-color: var(--color-hover); }\n\n.checkbox__input[_ngcontent-%COMP%]:checked    + label[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child   svg[_ngcontent-%COMP%] {\n    stroke-dashoffset: 0; }\n\n.checkbox__input[_ngcontent-%COMP%]:checked    + label[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child:before {\n    -webkit-transform: scale(3.5);\n            transform: scale(3.5);\n    opacity: 0;\n    transition: all 0.6s ease; }\n\n@-webkit-keyframes wave {\n  50% {\n    -webkit-transform: scale(0.9);\n            transform: scale(0.9); } }\n\n@keyframes wave {\n  50% {\n    -webkit-transform: scale(0.9);\n            transform: scale(0.9); } }"];



/***/ }),

/***/ "./src/app/modules/forms/checkbox/checkbox/checkbox.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/modules/forms/checkbox/checkbox/checkbox.component.ts ***!
  \***********************************************************************/
/*! exports provided: CheckboxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxComponent", function() { return CheckboxComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var CheckboxComponent = /** @class */ (function () {
    function CheckboxComponent() {
        this.label = 'заголовок';
        this.name = '';
        // ----- State ------- //
        this.checked = false;
        this.index = "radio_" + this.randomInteger(10, 1000);
        // ----- Output ------- //
        this.ClickEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    CheckboxComponent.prototype.ngOnInit = function () {
        var isChecked = this.checked && this.setChecked(this.checkboxControl.nativeElement);
    };
    CheckboxComponent.prototype.setChecked = function (radio) {
        radio.checked = true;
        this.emitValue(this.value);
    };
    CheckboxComponent.prototype.emitValue = function (value) {
        this.ClickEvent.emit({ value: value, checked: this.checkboxControl.nativeElement.checked });
    };
    CheckboxComponent.prototype.randomInteger = function (min, max) {
        var rand = min - 0.5 + Math.random() * (max - min + 1);
        rand = Math.round(rand);
        return rand;
    };
    return CheckboxComponent;
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
var styles = [".hint[_ngcontent-%COMP%] {\n  letter-spacing: 0;\n  font-size: var(--size-typo-xs);\n  line-height: 20px;\n  font-weight: 400;\n  display: inline-block;\n  width: 100%; }\n\n.state_default[_ngcontent-%COMP%] {\n  color: #767676; }\n\n.state_error[_ngcontent-%COMP%] {\n  color: var(--color-alert); }\n\n.state_success[_ngcontent-%COMP%] {\n  color: var(--color-success); }\n\n.state_warning[_ngcontent-%COMP%] {\n  color: var(--color-warning); }\n\n.state_dark[_ngcontent-%COMP%] {\n  border: 1px solid var(--color-typo-secondary) !important; }"];



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
var styles = ["label[_ngcontent-%COMP%] {\n  letter-spacing: 0;\n  color: var(--color-typo-primary);\n  font-size: var(--size-typo-m);\n  line-height: var(--line-height-typo-s);\n  font-weight: 600;\n  display: inline-block;\n  width: 100%; }\n  label.disabled[_ngcontent-%COMP%] {\n    opacity: .5; }"];



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

/***/ "./src/app/modules/forms/number/number.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/modules/forms/number/number.module.ts ***!
  \*******************************************************/
/*! exports provided: NumberModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NumberModule", function() { return NumberModule; });
var NumberModule = /** @class */ (function () {
    function NumberModule() {
    }
    return NumberModule;
}());



/***/ }),

/***/ "./src/app/modules/forms/number/number/number.component.ngfactory.js":
/*!***************************************************************************!*\
  !*** ./src/app/modules/forms/number/number/number.component.ngfactory.js ***!
  \***************************************************************************/
/*! exports provided: RenderType_NumberComponent, View_NumberComponent_0, View_NumberComponent_Host_0, NumberComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_NumberComponent", function() { return RenderType_NumberComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_NumberComponent_0", function() { return View_NumberComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_NumberComponent_Host_0", function() { return View_NumberComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NumberComponentNgFactory", function() { return NumberComponentNgFactory; });
/* harmony import */ var _number_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./number.component.scss.shim.ngstyle */ "./src/app/modules/forms/number/number/number.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _number_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./number.component */ "./src/app/modules/forms/number/number/number.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 




var styles_NumberComponent = [_number_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_NumberComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_NumberComponent, data: {} });

function View_NumberComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](402653184, 1, { _inputElement: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 8, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 7, "div", [["class", "input__container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 6, "input", [["class", "input__field size-large state_default"], ["type", "number"]], [[8, "id", 0], [1, "placeholder", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"], [null, "change"]], function (_v, en, $event) { var ad = true; if (("input" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } if (("change" === en)) {
        var pd_4 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).onChange($event.target.value) !== false);
        ad = (pd_4 && ad);
    } if (("input" === en)) {
        var pd_5 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).onChange($event.target.value) !== false);
        ad = (pd_5 && ad);
    } if (("blur" === en)) {
        var pd_6 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).onTouched() !== false);
        ad = (pd_6 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_be"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"], function (p0_0, p1_0) { return [p0_0, p1_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_be"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 540672, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlDirective"], [[8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_k"]]], { form: [0, "form"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlDirective"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"]]], null, null)], function (_ck, _v) { var _co = _v.component; var currVal_9 = _co.controlOptions; _ck(_v, 7, 0, currVal_9); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.controlOptions; var currVal_1 = _co.placeholder; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).ngClassUntouched; var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).ngClassTouched; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).ngClassPristine; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).ngClassDirty; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).ngClassValid; var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).ngClassInvalid; var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).ngClassPending; _ck(_v, 3, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8); }); }
function View_NumberComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "rosa-number", [], null, null, null, View_NumberComponent_0, RenderType_NumberComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](5120, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_number_component__WEBPACK_IMPORTED_MODULE_3__["NumberComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](5120, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"], function (p0_0) { return [p0_0]; }, [_number_component__WEBPACK_IMPORTED_MODULE_3__["NumberComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 114688, null, 0, _number_component__WEBPACK_IMPORTED_MODULE_3__["NumberComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], null, null)], function (_ck, _v) { _ck(_v, 3, 0); }, null); }
var NumberComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("rosa-number", _number_component__WEBPACK_IMPORTED_MODULE_3__["NumberComponent"], View_NumberComponent_Host_0, { placeholder: "placeholder", controlOptions: "controlOptions" }, {}, []);



/***/ }),

/***/ "./src/app/modules/forms/number/number/number.component.scss.shim.ngstyle.js":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/forms/number/number/number.component.scss.shim.ngstyle.js ***!
  \***********************************************************************************/
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
var styles = [".input__container[_ngcontent-%COMP%] {\n  position: relative;\n  min-width: 148px; }\n\n.input__field[_ngcontent-%COMP%] {\n  width: 100%;\n  color: var(--color-typo-primary);\n  font-size: var(--size-typo-m);\n  font-weight: 400;\n  box-shadow: none;\n  border: 1px solid;\n  box-sizing: border-box;\n  border-radius: 3px;\n  border-color: #c4c4c4;\n  background: var(--color-default);\n  outline: none;\n  transition: all 0.15s ease; }\n\n.input__field[_ngcontent-%COMP%]:focus, .input__field[_ngcontent-%COMP%]:active {\n    outline: none;\n    transition: all 0.15s ease;\n    border-color: var(--color-border-control-alt);\n    box-shadow: 0 0 0 2px var(--color-border-control-alt); }\n\n.input__field[_ngcontent-%COMP%]:disabled {\n    background-color: var(--color-soft);\n    color: var(--color-typo-tertiary); }\n\n.size-small[_ngcontent-%COMP%] {\n  padding: 0 4px;\n  height: 24px;\n  line-height: 24px; }\n\n.size-default[_ngcontent-%COMP%] {\n  padding: 0 8px;\n  height: 32px;\n  line-height: 32px; }\n\n.size-large[_ngcontent-%COMP%] {\n  padding: 0 12px;\n  height: 40px;\n  line-height: 40px; }\n\n.state_default[_ngcontent-%COMP%] {\n  border-color: var(--color-border-control-alt); }\n\n.state_error[_ngcontent-%COMP%] {\n  border: 1px solid var(--color-error) !important; }\n\n.state_success[_ngcontent-%COMP%] {\n  border: 1px solid var(--color-success) !important; }\n\n.state_dark[_ngcontent-%COMP%] {\n  border: 1px solid var(--color-border-control-alt) !important; }\n\n.state_disabled[_ngcontent-%COMP%] {\n  background-color: var(--color-soft) !important;\n  color: var(--color-typo-tertiary) !important; }"];



/***/ }),

/***/ "./src/app/modules/forms/number/number/number.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/modules/forms/number/number/number.component.ts ***!
  \*****************************************************************/
/*! exports provided: NumberComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NumberComponent", function() { return NumberComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");


var NumberComponent = /** @class */ (function () {
    function NumberComponent(_renderer) {
        this._renderer = _renderer;
        this.onTouched = function () { };
    }
    Object.defineProperty(NumberComponent.prototype, "controlOptions", {
        get: function () {
            return this._controlOptions;
        },
        set: function (controlOptions) {
            this._controlOptions = controlOptions;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NumberComponent.prototype, "inputElement", {
        get: function () {
            return this._inputElement;
        },
        enumerable: true,
        configurable: true
    });
    NumberComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(NumberComponent.prototype, "writeValue", {
        set: function (val) {
            // tslint:disable-next-line:no-unused-expression
            val && this.controlOptions.setValue(val, { emitEvent: true });
        },
        enumerable: true,
        configurable: true
    });
    NumberComponent.prototype.registerOnChange = function (handler) {
        console.log('on change');
        this.controlOptions.valueChanges.subscribe(handler);
    };
    NumberComponent.prototype.registerOnTouched = function (handler) {
        console.log('on blur');
        this.onTouched = handler;
    };
    NumberComponent.prototype.setDisabledState = function (isDisabled) {
        console.log(isDisabled);
        this._renderer.setProperty(this._inputElement.nativeElement, 'disabled', isDisabled);
        // isDisabled ? this.controlOptions.disable() : this.controlOptions.enable();
    };
    return NumberComponent;
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
var styles = [".radio__container[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n  height: 24px;\n  margin-top: 4px;\n  margin-right: 16px; }\n\n.radio__radio[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  background-color: var(--color-default);\n  border: 3px solid var(--color-border-control-alt);\n  box-sizing: border-box;\n  border-radius: 50%;\n  margin-right: 8px;\n  -moz-appearance: none;\n       appearance: none;\n  -webkit-appearance: none;\n  outline: none !important;\n  transition: border .15s ease; }\n\n.radio__radio[_ngcontent-%COMP%]:checked {\n    border: 5px solid #0066FF;\n    transition: border .15s ease; }\n\nlabel[_ngcontent-%COMP%] {\n  letter-spacing: 0;\n  color: var(--color-typo-primary);\n  font-size: var(--size-typo-m);\n  line-height: var(--line-height-typo-m); }\n\nlabel.disabled[_ngcontent-%COMP%] {\n    opacity: .5; }"];



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



/***/ }),

/***/ "./src/app/modules/forms/textarea/textarea/textarea.component.ngfactory.js":
/*!*********************************************************************************!*\
  !*** ./src/app/modules/forms/textarea/textarea/textarea.component.ngfactory.js ***!
  \*********************************************************************************/
/*! exports provided: RenderType_TextareaComponent, View_TextareaComponent_0, View_TextareaComponent_Host_0, TextareaComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_TextareaComponent", function() { return RenderType_TextareaComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_TextareaComponent_0", function() { return View_TextareaComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_TextareaComponent_Host_0", function() { return View_TextareaComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextareaComponentNgFactory", function() { return TextareaComponentNgFactory; });
/* harmony import */ var _textarea_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./textarea.component.scss.shim.ngstyle */ "./src/app/modules/forms/textarea/textarea/textarea.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _textarea_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./textarea.component */ "./src/app/modules/forms/textarea/textarea/textarea.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 




var styles_TextareaComponent = [_textarea_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_TextareaComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_TextareaComponent, data: {} });

function View_TextareaComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 6, "div", [["class", "textarea__container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 5, "textarea", [], [[8, "className", 0], [8, "id", 0], [1, "placeholder", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("input" === en)) {
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
        var pd_4 = (_co.onChange($event) !== false);
        ad = (pd_4 && ad);
    } if (("blur" === en)) {
        var pd_5 = (_co.blurLost($event) !== false);
        ad = (pd_5 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 540672, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlDirective"], [[8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_k"]]], { form: [0, "form"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlDirective"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"]]], null, null)], function (_ck, _v) { var _co = _v.component; var currVal_10 = _co.controlOptions; _ck(_v, 4, 0, currVal_10); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](2, "textarea__field ", _co.size, " ", _co.state, ""); var currVal_1 = _co.controlName; var currVal_2 = _co.placeholder; var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).ngClassUntouched; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).ngClassTouched; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).ngClassPristine; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).ngClassDirty; var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).ngClassValid; var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).ngClassInvalid; var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).ngClassPending; _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9); }); }
function View_TextareaComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "rosa-textarea", [], null, [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).onContainerClick($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, View_TextareaComponent_0, RenderType_TextareaComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](5120, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_textarea_component__WEBPACK_IMPORTED_MODULE_3__["TextareaComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 114688, null, 0, _textarea_component__WEBPACK_IMPORTED_MODULE_3__["TextareaComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null)], function (_ck, _v) { _ck(_v, 2, 0); }, null); }
var TextareaComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("rosa-textarea", _textarea_component__WEBPACK_IMPORTED_MODULE_3__["TextareaComponent"], View_TextareaComponent_Host_0, { value: "value", placeholder: "placeholder", tabindex: "tabindex", controlOptions: "controlOptions", controlName: "controlName", required: "required", size: "size", state: "state", mask: "mask" }, { blurEvent: "blurEvent", focusEvent: "focusEvent" }, []);



/***/ }),

/***/ "./src/app/modules/forms/textarea/textarea/textarea.component.scss.shim.ngstyle.js":
/*!*****************************************************************************************!*\
  !*** ./src/app/modules/forms/textarea/textarea/textarea.component.scss.shim.ngstyle.js ***!
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
var styles = [".textarea__container[_ngcontent-%COMP%] {\n  position: relative; }\n\n.textarea__field[_ngcontent-%COMP%] {\n  width: 100%;\n  min-height: 160px;\n  margin-bottom: 16px;\n  color: var(--color-typo-primary);\n  font-size: var(--size-typo-m);\n  font-weight: 400;\n  box-shadow: none;\n  border: 1px solid;\n  box-sizing: border-box;\n  border-radius: var(--space-xxxs);\n  border-color: var(--color-border-control);\n  background: var(--color-default);\n  outline: none;\n  height: calc(8px * 16);\n  transition: all 0.15s ease; }\n\n.textarea__field[_ngcontent-%COMP%]:focus, .textarea__field[_ngcontent-%COMP%]:active {\n    outline: none;\n    transition: all 0.15s ease;\n    border-color: var(--color-border-control-alt);\n    box-shadow: 0 0 0 2px var(--color-border-control-alt); }\n\n.textarea__field[_ngcontent-%COMP%]:disabled {\n    background-color: var(--color-soft);\n    color: var(--color-typo-tertiary); }\n\n.size-small[_ngcontent-%COMP%] {\n  padding: 0 4px;\n  height: 24px;\n  line-height: 24px; }\n\n.size-default[_ngcontent-%COMP%] {\n  padding: 0 8px;\n  height: 32px;\n  line-height: 32px; }\n\n.size-large[_ngcontent-%COMP%] {\n  padding: 0 12px;\n  height: 40px;\n  line-height: 40px; }\n\n.state_default[_ngcontent-%COMP%] {\n  border-color: var(--color-border-control); }\n\n.state_error[_ngcontent-%COMP%] {\n  border: 1px solid var(--color-error) !important; }\n\n.state_success[_ngcontent-%COMP%] {\n  border: 1px solid var(--color-success) !important; }\n\n.state_dark[_ngcontent-%COMP%] {\n  border: 1px solid var(--color-border-control-alt) !important; }\n\n.state_disabled[_ngcontent-%COMP%] {\n  background-color: var(--color-soft) !important;\n  color: var(--color-typo-tertiary) !important; }"];



/***/ }),

/***/ "./src/app/modules/forms/textarea/textarea/textarea.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/modules/forms/textarea/textarea/textarea.component.ts ***!
  \***********************************************************************/
/*! exports provided: TextareaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextareaComponent", function() { return TextareaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



var TextareaComponent = /** @class */ (function () {
    function TextareaComponent(_elRef) {
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
    TextareaComponent.prototype.onContainerClick = function (event) {
        if (event.target.tagName.toLowerCase() === 'input') {
            this.focusEvent.emit(true);
        }
    };
    TextareaComponent.prototype.ngOnInit = function () {
    };
    TextareaComponent.prototype.blurLost = function (e) {
        this.blurEvent.emit(true);
    };
    TextareaComponent.prototype.writeValue = function (val) {
        if (val) {
            this._value = val;
        }
    };
    TextareaComponent.prototype.registerOnChange = function (val) {
        this.propagateChange = val;
        if (val) {
            this._value = val;
        }
    };
    TextareaComponent.prototype.onChange = function (event) {
        return this.propagateChange(event.target.value);
    };
    TextareaComponent.prototype.registerOnTouched = function (fn) { };
    return TextareaComponent;
}());



/***/ })

}]);