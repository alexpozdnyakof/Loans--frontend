(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./node_modules/@angular/cdk/esm5/table.es5.js":
/*!*****************************************************!*\
  !*** ./node_modules/@angular/cdk/esm5/table.es5.js ***!
  \*****************************************************/
/*! exports provided: DataSource, DataRowOutlet, HeaderRowOutlet, FooterRowOutlet, CDK_TABLE_TEMPLATE, CdkTable, CdkCellDef, CdkHeaderCellDef, CdkFooterCellDef, CdkColumnDefBase, _CdkColumnDefBase, CdkColumnDef, BaseCdkCell, CdkHeaderCell, CdkFooterCell, CdkCell, CDK_ROW_TEMPLATE, BaseRowDef, CdkHeaderRowDefBase, _CdkHeaderRowDefBase, CdkHeaderRowDef, CdkFooterRowDefBase, _CdkFooterRowDefBase, CdkFooterRowDef, CdkRowDef, CdkCellOutlet, CdkHeaderRow, CdkFooterRow, CdkRow, CdkTableModule, STICKY_DIRECTIONS, StickyStyler, mixinHasStickyInput */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataRowOutlet", function() { return DataRowOutlet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderRowOutlet", function() { return HeaderRowOutlet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterRowOutlet", function() { return FooterRowOutlet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CDK_TABLE_TEMPLATE", function() { return CDK_TABLE_TEMPLATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkTable", function() { return CdkTable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkCellDef", function() { return CdkCellDef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkHeaderCellDef", function() { return CdkHeaderCellDef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkFooterCellDef", function() { return CdkFooterCellDef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkColumnDefBase", function() { return CdkColumnDefBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_CdkColumnDefBase", function() { return _CdkColumnDefBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkColumnDef", function() { return CdkColumnDef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseCdkCell", function() { return BaseCdkCell; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkHeaderCell", function() { return CdkHeaderCell; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkFooterCell", function() { return CdkFooterCell; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkCell", function() { return CdkCell; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CDK_ROW_TEMPLATE", function() { return CDK_ROW_TEMPLATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseRowDef", function() { return BaseRowDef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkHeaderRowDefBase", function() { return CdkHeaderRowDefBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_CdkHeaderRowDefBase", function() { return _CdkHeaderRowDefBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkHeaderRowDef", function() { return CdkHeaderRowDef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkFooterRowDefBase", function() { return CdkFooterRowDefBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_CdkFooterRowDefBase", function() { return _CdkFooterRowDefBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkFooterRowDef", function() { return CdkFooterRowDef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkRowDef", function() { return CdkRowDef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkCellOutlet", function() { return CdkCellOutlet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkHeaderRow", function() { return CdkHeaderRow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkFooterRow", function() { return CdkFooterRow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkRow", function() { return CdkRow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkTableModule", function() { return CdkTableModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STICKY_DIRECTIONS", function() { return STICKY_DIRECTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StickyStyler", function() { return StickyStyler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mixinHasStickyInput", function() { return mixinHasStickyInput; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/coercion */ "./node_modules/@angular/cdk/esm5/coercion.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DataSource", function() { return _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_3__["DataSource"]; });

/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/bidi */ "./node_modules/@angular/cdk/esm5/bidi.es5.js");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/platform */ "./node_modules/@angular/cdk/esm5/platform.es5.js");
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
 * Mixin to provide a directive with a function that checks if the sticky input has been
 * changed since the last time the function was called. Essentially adds a dirty-check to the
 * sticky value.
 * \@docs-private
 * @template T
 * @param {?} base
 * @return {?}
 */
function mixinHasStickyInput(base) {
    return /** @class */ (function (_super) {
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(class_1, _super);
        function class_1() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var _this = _super.apply(this, args) || this;
            _this._sticky = false;
            /**
             * Whether the sticky input has changed since it was last checked.
             */
            _this._hasStickyChanged = false;
            return _this;
        }
        Object.defineProperty(class_1.prototype, "sticky", {
            /** Whether sticky positioning should be applied. */
            get: /**
             * Whether sticky positioning should be applied.
             * @return {?}
             */
            function () { return this._sticky; },
            set: /**
             * @param {?} v
             * @return {?}
             */
            function (v) {
                /** @type {?} */
                var prevValue = this._sticky;
                this._sticky = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(v);
                this._hasStickyChanged = prevValue !== this._sticky;
            },
            enumerable: true,
            configurable: true
        });
        /** Whether the sticky value has changed since this was last called. */
        /**
         * Whether the sticky value has changed since this was last called.
         * @return {?}
         */
        class_1.prototype.hasStickyChanged = /**
         * Whether the sticky value has changed since this was last called.
         * @return {?}
         */
        function () {
            /** @type {?} */
            var hasStickyChanged = this._hasStickyChanged;
            this._hasStickyChanged = false;
            return hasStickyChanged;
        };
        /** Resets the dirty check for cases where the sticky state has been used without checking. */
        /**
         * Resets the dirty check for cases where the sticky state has been used without checking.
         * @return {?}
         */
        class_1.prototype.resetStickyChanged = /**
         * Resets the dirty check for cases where the sticky state has been used without checking.
         * @return {?}
         */
        function () {
            this._hasStickyChanged = false;
        };
        return class_1;
    }(base));
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Cell definition for a CDK table.
 * Captures the template of a column's data row cell as well as cell-specific properties.
 */
var CdkCellDef = /** @class */ (function () {
    function CdkCellDef(/** @docs-private */ template) {
        this.template = template;
    }
    CdkCellDef.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"], args: [{ selector: '[cdkCellDef]' },] },
    ];
    /** @nocollapse */
    CdkCellDef.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["TemplateRef"] }
    ]; };
    return CdkCellDef;
}());
/**
 * Header cell definition for a CDK table.
 * Captures the template of a column's header cell and as well as cell-specific properties.
 */
var CdkHeaderCellDef = /** @class */ (function () {
    function CdkHeaderCellDef(/** @docs-private */ template) {
        this.template = template;
    }
    CdkHeaderCellDef.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"], args: [{ selector: '[cdkHeaderCellDef]' },] },
    ];
    /** @nocollapse */
    CdkHeaderCellDef.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["TemplateRef"] }
    ]; };
    return CdkHeaderCellDef;
}());
/**
 * Footer cell definition for a CDK table.
 * Captures the template of a column's footer cell and as well as cell-specific properties.
 */
var CdkFooterCellDef = /** @class */ (function () {
    function CdkFooterCellDef(/** @docs-private */ template) {
        this.template = template;
    }
    CdkFooterCellDef.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"], args: [{ selector: '[cdkFooterCellDef]' },] },
    ];
    /** @nocollapse */
    CdkFooterCellDef.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["TemplateRef"] }
    ]; };
    return CdkFooterCellDef;
}());
// Boilerplate for applying mixins to CdkColumnDef.
/**
 * \@docs-private
 */
var  
// Boilerplate for applying mixins to CdkColumnDef.
/**
 * \@docs-private
 */
CdkColumnDefBase = /** @class */ (function () {
    function CdkColumnDefBase() {
    }
    return CdkColumnDefBase;
}());
/** @type {?} */
var _CdkColumnDefBase = mixinHasStickyInput(CdkColumnDefBase);
/**
 * Column definition for the CDK table.
 * Defines a set of cells available for a table column.
 */
var CdkColumnDef = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(CdkColumnDef, _super);
    function CdkColumnDef() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._stickyEnd = false;
        return _this;
    }
    Object.defineProperty(CdkColumnDef.prototype, "name", {
        /** Unique name for this column. */
        get: /**
         * Unique name for this column.
         * @return {?}
         */
        function () { return this._name; },
        set: /**
         * @param {?} name
         * @return {?}
         */
        function (name) {
            // If the directive is set without a name (updated programatically), then this setter will
            // trigger with an empty string and should not overwrite the programatically set value.
            if (!name) {
                return;
            }
            this._name = name;
            this.cssClassFriendlyName = name.replace(/[^a-z0-9_-]/ig, '-');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CdkColumnDef.prototype, "stickyEnd", {
        /**
         * Whether this column should be sticky positioned on the end of the row. Should make sure
         * that it mimics the `CanStick` mixin such that `_hasStickyChanged` is set to true if the value
         * has been changed.
         */
        get: /**
         * Whether this column should be sticky positioned on the end of the row. Should make sure
         * that it mimics the `CanStick` mixin such that `_hasStickyChanged` is set to true if the value
         * has been changed.
         * @return {?}
         */
        function () { return this._stickyEnd; },
        set: /**
         * @param {?} v
         * @return {?}
         */
        function (v) {
            /** @type {?} */
            var prevValue = this._stickyEnd;
            this._stickyEnd = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(v);
            this._hasStickyChanged = prevValue !== this._stickyEnd;
        },
        enumerable: true,
        configurable: true
    });
    CdkColumnDef.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"], args: [{
                    selector: '[cdkColumnDef]',
                    inputs: ['sticky'],
                    providers: [{
                            provide: 'MAT_SORT_HEADER_COLUMN_DEF',
                            useExisting: CdkColumnDef
                        }],
                },] },
    ];
    CdkColumnDef.propDecorators = {
        name: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"], args: ['cdkColumnDef',] }],
        stickyEnd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"], args: ['stickyEnd',] }],
        cell: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChild"], args: [CdkCellDef,] }],
        headerCell: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChild"], args: [CdkHeaderCellDef,] }],
        footerCell: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChild"], args: [CdkFooterCellDef,] }]
    };
    return CdkColumnDef;
}(_CdkColumnDefBase));
/**
 * Base class for the cells. Adds a CSS classname that identifies the column it renders in.
 */
var  /**
 * Base class for the cells. Adds a CSS classname that identifies the column it renders in.
 */
BaseCdkCell = /** @class */ (function () {
    function BaseCdkCell(columnDef, elementRef) {
        /** @type {?} */
        var columnClassName = "cdk-column-" + columnDef.cssClassFriendlyName;
        elementRef.nativeElement.classList.add(columnClassName);
    }
    return BaseCdkCell;
}());
/**
 * Header cell template container that adds the right classes and role.
 */
var CdkHeaderCell = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(CdkHeaderCell, _super);
    function CdkHeaderCell(columnDef, elementRef) {
        return _super.call(this, columnDef, elementRef) || this;
    }
    CdkHeaderCell.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"], args: [{
                    selector: 'cdk-header-cell, th[cdk-header-cell]',
                    host: {
                        'class': 'cdk-header-cell',
                        'role': 'columnheader',
                    },
                },] },
    ];
    /** @nocollapse */
    CdkHeaderCell.ctorParameters = function () { return [
        { type: CdkColumnDef },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] }
    ]; };
    return CdkHeaderCell;
}(BaseCdkCell));
/**
 * Footer cell template container that adds the right classes and role.
 */
var CdkFooterCell = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(CdkFooterCell, _super);
    function CdkFooterCell(columnDef, elementRef) {
        return _super.call(this, columnDef, elementRef) || this;
    }
    CdkFooterCell.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"], args: [{
                    selector: 'cdk-footer-cell, td[cdk-footer-cell]',
                    host: {
                        'class': 'cdk-footer-cell',
                        'role': 'gridcell',
                    },
                },] },
    ];
    /** @nocollapse */
    CdkFooterCell.ctorParameters = function () { return [
        { type: CdkColumnDef },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] }
    ]; };
    return CdkFooterCell;
}(BaseCdkCell));
/**
 * Cell template container that adds the right classes and role.
 */
var CdkCell = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(CdkCell, _super);
    function CdkCell(columnDef, elementRef) {
        return _super.call(this, columnDef, elementRef) || this;
    }
    CdkCell.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"], args: [{
                    selector: 'cdk-cell, td[cdk-cell]',
                    host: {
                        'class': 'cdk-cell',
                        'role': 'gridcell',
                    },
                },] },
    ];
    /** @nocollapse */
    CdkCell.ctorParameters = function () { return [
        { type: CdkColumnDef },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] }
    ]; };
    return CdkCell;
}(BaseCdkCell));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * The row template that can be used by the mat-table. Should not be used outside of the
 * material library.
 * @type {?}
 */
var CDK_ROW_TEMPLATE = "<ng-container cdkCellOutlet></ng-container>";
/**
 * Base class for the CdkHeaderRowDef and CdkRowDef that handles checking their columns inputs
 * for changes and notifying the table.
 * @abstract
 */
var  /**
 * Base class for the CdkHeaderRowDef and CdkRowDef that handles checking their columns inputs
 * for changes and notifying the table.
 * @abstract
 */
BaseRowDef = /** @class */ (function () {
    function BaseRowDef(/** @docs-private */ template, _differs) {
        this.template = template;
        this._differs = _differs;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    BaseRowDef.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        // Create a new columns differ if one does not yet exist. Initialize it based on initial value
        // of the columns property or an empty array if none is provided.
        if (!this._columnsDiffer) {
            /** @type {?} */
            var columns = (changes['columns'] && changes['columns'].currentValue) || [];
            this._columnsDiffer = this._differs.find(columns).create();
            this._columnsDiffer.diff(columns);
        }
    };
    /**
     * Returns the difference between the current columns and the columns from the last diff, or null
     * if there is no difference.
     */
    /**
     * Returns the difference between the current columns and the columns from the last diff, or null
     * if there is no difference.
     * @return {?}
     */
    BaseRowDef.prototype.getColumnsDiff = /**
     * Returns the difference between the current columns and the columns from the last diff, or null
     * if there is no difference.
     * @return {?}
     */
    function () {
        return this._columnsDiffer.diff(this.columns);
    };
    /** Gets this row def's relevant cell template from the provided column def. */
    /**
     * Gets this row def's relevant cell template from the provided column def.
     * @param {?} column
     * @return {?}
     */
    BaseRowDef.prototype.extractCellTemplate = /**
     * Gets this row def's relevant cell template from the provided column def.
     * @param {?} column
     * @return {?}
     */
    function (column) {
        if (this instanceof CdkHeaderRowDef) {
            return column.headerCell.template;
        }
        if (this instanceof CdkFooterRowDef) {
            return column.footerCell.template;
        }
        else {
            return column.cell.template;
        }
    };
    return BaseRowDef;
}());
// Boilerplate for applying mixins to CdkHeaderRowDef.
/**
 * \@docs-private
 */
var  
// Boilerplate for applying mixins to CdkHeaderRowDef.
/**
 * \@docs-private
 */
CdkHeaderRowDefBase = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(CdkHeaderRowDefBase, _super);
    function CdkHeaderRowDefBase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return CdkHeaderRowDefBase;
}(BaseRowDef));
/** @type {?} */
var _CdkHeaderRowDefBase = mixinHasStickyInput(CdkHeaderRowDefBase);
/**
 * Header row definition for the CDK table.
 * Captures the header row's template and other header properties such as the columns to display.
 */
var CdkHeaderRowDef = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(CdkHeaderRowDef, _super);
    function CdkHeaderRowDef(template, _differs) {
        return _super.call(this, template, _differs) || this;
    }
    // Prerender fails to recognize that ngOnChanges in a part of this class through inheritance.
    // Explicitly define it so that the method is called as part of the Angular lifecycle.
    // Prerender fails to recognize that ngOnChanges in a part of this class through inheritance.
    // Explicitly define it so that the method is called as part of the Angular lifecycle.
    /**
     * @param {?} changes
     * @return {?}
     */
    CdkHeaderRowDef.prototype.ngOnChanges = 
    // Prerender fails to recognize that ngOnChanges in a part of this class through inheritance.
    // Explicitly define it so that the method is called as part of the Angular lifecycle.
    /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        _super.prototype.ngOnChanges.call(this, changes);
    };
    CdkHeaderRowDef.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"], args: [{
                    selector: '[cdkHeaderRowDef]',
                    inputs: ['columns: cdkHeaderRowDef', 'sticky: cdkHeaderRowDefSticky'],
                },] },
    ];
    /** @nocollapse */
    CdkHeaderRowDef.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["TemplateRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["IterableDiffers"] }
    ]; };
    return CdkHeaderRowDef;
}(_CdkHeaderRowDefBase));
// Boilerplate for applying mixins to CdkFooterRowDef.
/**
 * \@docs-private
 */
var  
// Boilerplate for applying mixins to CdkFooterRowDef.
/**
 * \@docs-private
 */
CdkFooterRowDefBase = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(CdkFooterRowDefBase, _super);
    function CdkFooterRowDefBase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return CdkFooterRowDefBase;
}(BaseRowDef));
/** @type {?} */
var _CdkFooterRowDefBase = mixinHasStickyInput(CdkFooterRowDefBase);
/**
 * Footer row definition for the CDK table.
 * Captures the footer row's template and other footer properties such as the columns to display.
 */
var CdkFooterRowDef = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(CdkFooterRowDef, _super);
    function CdkFooterRowDef(template, _differs) {
        return _super.call(this, template, _differs) || this;
    }
    // Prerender fails to recognize that ngOnChanges in a part of this class through inheritance.
    // Explicitly define it so that the method is called as part of the Angular lifecycle.
    // Prerender fails to recognize that ngOnChanges in a part of this class through inheritance.
    // Explicitly define it so that the method is called as part of the Angular lifecycle.
    /**
     * @param {?} changes
     * @return {?}
     */
    CdkFooterRowDef.prototype.ngOnChanges = 
    // Prerender fails to recognize that ngOnChanges in a part of this class through inheritance.
    // Explicitly define it so that the method is called as part of the Angular lifecycle.
    /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        _super.prototype.ngOnChanges.call(this, changes);
    };
    CdkFooterRowDef.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"], args: [{
                    selector: '[cdkFooterRowDef]',
                    inputs: ['columns: cdkFooterRowDef', 'sticky: cdkFooterRowDefSticky'],
                },] },
    ];
    /** @nocollapse */
    CdkFooterRowDef.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["TemplateRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["IterableDiffers"] }
    ]; };
    return CdkFooterRowDef;
}(_CdkFooterRowDefBase));
/**
 * Data row definition for the CDK table.
 * Captures the header row's template and other row properties such as the columns to display and
 * a when predicate that describes when this row should be used.
 * @template T
 */
var CdkRowDef = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(CdkRowDef, _super);
    // TODO(andrewseguin): Add an input for providing a switch function to determine
    //   if this template should be used.
    function CdkRowDef(template, _differs) {
        return _super.call(this, template, _differs) || this;
    }
    CdkRowDef.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"], args: [{
                    selector: '[cdkRowDef]',
                    inputs: ['columns: cdkRowDefColumns', 'when: cdkRowDefWhen'],
                },] },
    ];
    /** @nocollapse */
    CdkRowDef.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["TemplateRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["IterableDiffers"] }
    ]; };
    return CdkRowDef;
}(BaseRowDef));
/**
 * Outlet for rendering cells inside of a row or header row.
 * \@docs-private
 */
var CdkCellOutlet = /** @class */ (function () {
    function CdkCellOutlet(_viewContainer) {
        this._viewContainer = _viewContainer;
        CdkCellOutlet.mostRecentCellOutlet = this;
    }
    /**
     * @return {?}
     */
    CdkCellOutlet.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        // If this was the last outlet being rendered in the view, remove the reference
        // from the static property after it has been destroyed to avoid leaking memory.
        if (CdkCellOutlet.mostRecentCellOutlet === this) {
            CdkCellOutlet.mostRecentCellOutlet = null;
        }
    };
    /**
     * Static property containing the latest constructed instance of this class.
     * Used by the CDK table when each CdkHeaderRow and CdkRow component is created using
     * createEmbeddedView. After one of these components are created, this property will provide
     * a handle to provide that component's cells and context. After init, the CdkCellOutlet will
     * construct the cells with the provided context.
     */
    CdkCellOutlet.mostRecentCellOutlet = null;
    CdkCellOutlet.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"], args: [{ selector: '[cdkCellOutlet]' },] },
    ];
    /** @nocollapse */
    CdkCellOutlet.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewContainerRef"] }
    ]; };
    return CdkCellOutlet;
}());
/**
 * Header template container that contains the cell outlet. Adds the right class and role.
 */
var CdkHeaderRow = /** @class */ (function () {
    function CdkHeaderRow() {
    }
    CdkHeaderRow.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"], args: [{selector: 'cdk-header-row, tr[cdk-header-row]',
                    template: CDK_ROW_TEMPLATE,
                    host: {
                        'class': 'cdk-header-row',
                        'role': 'row',
                    },
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None,
                },] },
    ];
    return CdkHeaderRow;
}());
/**
 * Footer template container that contains the cell outlet. Adds the right class and role.
 */
var CdkFooterRow = /** @class */ (function () {
    function CdkFooterRow() {
    }
    CdkFooterRow.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"], args: [{selector: 'cdk-footer-row, tr[cdk-footer-row]',
                    template: CDK_ROW_TEMPLATE,
                    host: {
                        'class': 'cdk-footer-row',
                        'role': 'row',
                    },
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None,
                },] },
    ];
    return CdkFooterRow;
}());
/**
 * Data row template container that contains the cell outlet. Adds the right class and role.
 */
var CdkRow = /** @class */ (function () {
    function CdkRow() {
    }
    CdkRow.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"], args: [{selector: 'cdk-row, tr[cdk-row]',
                    template: CDK_ROW_TEMPLATE,
                    host: {
                        'class': 'cdk-row',
                        'role': 'row',
                    },
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None,
                },] },
    ];
    return CdkRow;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * Returns an error to be thrown when attempting to find an unexisting column.
 * \@docs-private
 * @param {?} id Id whose lookup failed.
 * @return {?}
 */
function getTableUnknownColumnError(id) {
    return Error("Could not find column with id \"" + id + "\".");
}
/**
 * Returns an error to be thrown when two column definitions have the same name.
 * \@docs-private
 * @param {?} name
 * @return {?}
 */
function getTableDuplicateColumnNameError(name) {
    return Error("Duplicate column definition name provided: \"" + name + "\".");
}
/**
 * Returns an error to be thrown when there are multiple rows that are missing a when function.
 * \@docs-private
 * @return {?}
 */
function getTableMultipleDefaultRowDefsError() {
    return Error("There can only be one default row without a when predicate function.");
}
/**
 * Returns an error to be thrown when there are no matching row defs for a particular set of data.
 * \@docs-private
 * @param {?} data
 * @return {?}
 */
function getTableMissingMatchingRowDefError(data) {
    return Error("Could not find a matching row definition for the" +
        ("provided row data: " + JSON.stringify(data)));
}
/**
 * Returns an error to be thrown when there is no row definitions present in the content.
 * \@docs-private
 * @return {?}
 */
function getTableMissingRowDefsError() {
    return Error('Missing definitions for header, footer, and row; ' +
        'cannot determine which columns should be rendered.');
}
/**
 * Returns an error to be thrown when the data source does not match the compatible types.
 * \@docs-private
 * @return {?}
 */
function getTableUnknownDataSourceError() {
    return Error("Provided data source did not match an array, Observable, or DataSource");
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * List of all possible directions that can be used for sticky positioning.
 * \@docs-private
 * @type {?}
 */
var STICKY_DIRECTIONS = ['top', 'bottom', 'left', 'right'];
/**
 * Applies and removes sticky positioning styles to the `CdkTable` rows and columns cells.
 * \@docs-private
 */
var  /**
 * Applies and removes sticky positioning styles to the `CdkTable` rows and columns cells.
 * \@docs-private
 */
StickyStyler = /** @class */ (function () {
    /**
     * @param isNativeHtmlTable Whether the sticky logic should be based on a table
     *     that uses the native `<table>` element.
     * @param stickCellCss The CSS class that will be applied to every row/cell that has
     *     sticky positioning applied.
     * @param direction The directionality context of the table (ltr/rtl); affects column positioning
     *     by reversing left/right positions.
     * @param _isBrowser Whether the table is currently being rendered on the server or the client.
     */
    function StickyStyler(isNativeHtmlTable, stickCellCss, direction, _isBrowser) {
        if (_isBrowser === void 0) { _isBrowser = true; }
        this.isNativeHtmlTable = isNativeHtmlTable;
        this.stickCellCss = stickCellCss;
        this.direction = direction;
        this._isBrowser = _isBrowser;
    }
    /**
     * Clears the sticky positioning styles from the row and its cells by resetting the `position`
     * style, setting the zIndex to 0, and unsetting each provided sticky direction.
     * @param rows The list of rows that should be cleared from sticking in the provided directions
     * @param stickyDirections The directions that should no longer be set as sticky on the rows.
     */
    /**
     * Clears the sticky positioning styles from the row and its cells by resetting the `position`
     * style, setting the zIndex to 0, and unsetting each provided sticky direction.
     * @param {?} rows The list of rows that should be cleared from sticking in the provided directions
     * @param {?} stickyDirections The directions that should no longer be set as sticky on the rows.
     * @return {?}
     */
    StickyStyler.prototype.clearStickyPositioning = /**
     * Clears the sticky positioning styles from the row and its cells by resetting the `position`
     * style, setting the zIndex to 0, and unsetting each provided sticky direction.
     * @param {?} rows The list of rows that should be cleared from sticking in the provided directions
     * @param {?} stickyDirections The directions that should no longer be set as sticky on the rows.
     * @return {?}
     */
    function (rows, stickyDirections) {
        for (var _i = 0, rows_1 = rows; _i < rows_1.length; _i++) {
            var row = rows_1[_i];
            // If the row isn't an element (e.g. if it's an `ng-container`),
            // it won't have inline styles or `children` so we skip it.
            if (row.nodeType !== row.ELEMENT_NODE) {
                continue;
            }
            this._removeStickyStyle(row, stickyDirections);
            for (var i = 0; i < row.children.length; i++) {
                /** @type {?} */
                var cell = (/** @type {?} */ (row.children[i]));
                this._removeStickyStyle(cell, stickyDirections);
            }
        }
    };
    /**
     * Applies sticky left and right positions to the cells of each row according to the sticky
     * states of the rendered column definitions.
     * @param rows The rows that should have its set of cells stuck according to the sticky states.
     * @param stickyStartStates A list of boolean states where each state represents whether the cell
     *     in this index position should be stuck to the start of the row.
     * @param stickyEndStates A list of boolean states where each state represents whether the cell
     *     in this index position should be stuck to the end of the row.
     */
    /**
     * Applies sticky left and right positions to the cells of each row according to the sticky
     * states of the rendered column definitions.
     * @param {?} rows The rows that should have its set of cells stuck according to the sticky states.
     * @param {?} stickyStartStates A list of boolean states where each state represents whether the cell
     *     in this index position should be stuck to the start of the row.
     * @param {?} stickyEndStates A list of boolean states where each state represents whether the cell
     *     in this index position should be stuck to the end of the row.
     * @return {?}
     */
    StickyStyler.prototype.updateStickyColumns = /**
     * Applies sticky left and right positions to the cells of each row according to the sticky
     * states of the rendered column definitions.
     * @param {?} rows The rows that should have its set of cells stuck according to the sticky states.
     * @param {?} stickyStartStates A list of boolean states where each state represents whether the cell
     *     in this index position should be stuck to the start of the row.
     * @param {?} stickyEndStates A list of boolean states where each state represents whether the cell
     *     in this index position should be stuck to the end of the row.
     * @return {?}
     */
    function (rows, stickyStartStates, stickyEndStates) {
        /** @type {?} */
        var hasStickyColumns = stickyStartStates.some(function (state) { return state; }) || stickyEndStates.some(function (state) { return state; });
        if (!rows.length || !hasStickyColumns || !this._isBrowser) {
            return;
        }
        /** @type {?} */
        var firstRow = rows[0];
        /** @type {?} */
        var numCells = firstRow.children.length;
        /** @type {?} */
        var cellWidths = this._getCellWidths(firstRow);
        /** @type {?} */
        var startPositions = this._getStickyStartColumnPositions(cellWidths, stickyStartStates);
        /** @type {?} */
        var endPositions = this._getStickyEndColumnPositions(cellWidths, stickyEndStates);
        /** @type {?} */
        var isRtl = this.direction === 'rtl';
        for (var _i = 0, rows_2 = rows; _i < rows_2.length; _i++) {
            var row = rows_2[_i];
            for (var i = 0; i < numCells; i++) {
                /** @type {?} */
                var cell = (/** @type {?} */ (row.children[i]));
                if (stickyStartStates[i]) {
                    this._addStickyStyle(cell, isRtl ? 'right' : 'left', startPositions[i]);
                }
                if (stickyEndStates[i]) {
                    this._addStickyStyle(cell, isRtl ? 'left' : 'right', endPositions[i]);
                }
            }
        }
    };
    /**
     * Applies sticky positioning to the row's cells if using the native table layout, and to the
     * row itself otherwise.
     * @param rowsToStick The list of rows that should be stuck according to their corresponding
     *     sticky state and to the provided top or bottom position.
     * @param stickyStates A list of boolean states where each state represents whether the row
     *     should be stuck in the particular top or bottom position.
     * @param position The position direction in which the row should be stuck if that row should be
     *     sticky.
     *
     */
    /**
     * Applies sticky positioning to the row's cells if using the native table layout, and to the
     * row itself otherwise.
     * @param {?} rowsToStick The list of rows that should be stuck according to their corresponding
     *     sticky state and to the provided top or bottom position.
     * @param {?} stickyStates A list of boolean states where each state represents whether the row
     *     should be stuck in the particular top or bottom position.
     * @param {?} position The position direction in which the row should be stuck if that row should be
     *     sticky.
     *
     * @return {?}
     */
    StickyStyler.prototype.stickRows = /**
     * Applies sticky positioning to the row's cells if using the native table layout, and to the
     * row itself otherwise.
     * @param {?} rowsToStick The list of rows that should be stuck according to their corresponding
     *     sticky state and to the provided top or bottom position.
     * @param {?} stickyStates A list of boolean states where each state represents whether the row
     *     should be stuck in the particular top or bottom position.
     * @param {?} position The position direction in which the row should be stuck if that row should be
     *     sticky.
     *
     * @return {?}
     */
    function (rowsToStick, stickyStates, position) {
        // Since we can't measure the rows on the server, we can't stick the rows properly.
        if (!this._isBrowser) {
            return;
        }
        // If positioning the rows to the bottom, reverse their order when evaluating the sticky
        // position such that the last row stuck will be "bottom: 0px" and so on.
        /** @type {?} */
        var rows = position === 'bottom' ? rowsToStick.reverse() : rowsToStick;
        /** @type {?} */
        var stickyHeight = 0;
        for (var rowIndex = 0; rowIndex < rows.length; rowIndex++) {
            if (!stickyStates[rowIndex]) {
                continue;
            }
            /** @type {?} */
            var row = rows[rowIndex];
            if (this.isNativeHtmlTable) {
                for (var j = 0; j < row.children.length; j++) {
                    /** @type {?} */
                    var cell = (/** @type {?} */ (row.children[j]));
                    this._addStickyStyle(cell, position, stickyHeight);
                }
            }
            else {
                // Flex does not respect the stick positioning on the cells, needs to be applied to the row.
                // If this is applied on a native table, Safari causes the header to fly in wrong direction.
                this._addStickyStyle(row, position, stickyHeight);
            }
            if (rowIndex === rows.length - 1) {
                // prevent unnecessary reflow from getBoundingClientRect()
                return;
            }
            stickyHeight += row.getBoundingClientRect().height;
        }
    };
    /**
     * When using the native table in Safari, sticky footer cells do not stick. The only way to stick
     * footer rows is to apply sticky styling to the tfoot container. This should only be done if
     * all footer rows are sticky. If not all footer rows are sticky, remove sticky positioning from
     * the tfoot element.
     */
    /**
     * When using the native table in Safari, sticky footer cells do not stick. The only way to stick
     * footer rows is to apply sticky styling to the tfoot container. This should only be done if
     * all footer rows are sticky. If not all footer rows are sticky, remove sticky positioning from
     * the tfoot element.
     * @param {?} tableElement
     * @param {?} stickyStates
     * @return {?}
     */
    StickyStyler.prototype.updateStickyFooterContainer = /**
     * When using the native table in Safari, sticky footer cells do not stick. The only way to stick
     * footer rows is to apply sticky styling to the tfoot container. This should only be done if
     * all footer rows are sticky. If not all footer rows are sticky, remove sticky positioning from
     * the tfoot element.
     * @param {?} tableElement
     * @param {?} stickyStates
     * @return {?}
     */
    function (tableElement, stickyStates) {
        if (!this.isNativeHtmlTable) {
            return;
        }
        /** @type {?} */
        var tfoot = (/** @type {?} */ (tableElement.querySelector('tfoot')));
        if (stickyStates.some(function (state) { return !state; })) {
            this._removeStickyStyle(tfoot, ['bottom']);
        }
        else {
            this._addStickyStyle(tfoot, 'bottom', 0);
        }
    };
    /**
     * Removes the sticky style on the element by removing the sticky cell CSS class, re-evaluating
     * the zIndex, removing each of the provided sticky directions, and removing the
     * sticky position if there are no more directions.
     */
    /**
     * Removes the sticky style on the element by removing the sticky cell CSS class, re-evaluating
     * the zIndex, removing each of the provided sticky directions, and removing the
     * sticky position if there are no more directions.
     * @param {?} element
     * @param {?} stickyDirections
     * @return {?}
     */
    StickyStyler.prototype._removeStickyStyle = /**
     * Removes the sticky style on the element by removing the sticky cell CSS class, re-evaluating
     * the zIndex, removing each of the provided sticky directions, and removing the
     * sticky position if there are no more directions.
     * @param {?} element
     * @param {?} stickyDirections
     * @return {?}
     */
    function (element, stickyDirections) {
        for (var _i = 0, stickyDirections_1 = stickyDirections; _i < stickyDirections_1.length; _i++) {
            var dir = stickyDirections_1[_i];
            element.style[dir] = '';
        }
        element.style.zIndex = this._getCalculatedZIndex(element);
        // If the element no longer has any more sticky directions, remove sticky positioning and
        // the sticky CSS class.
        /** @type {?} */
        var hasDirection = STICKY_DIRECTIONS.some(function (dir) { return !!element.style[dir]; });
        if (!hasDirection) {
            element.style.position = '';
            element.classList.remove(this.stickCellCss);
        }
    };
    /**
     * Adds the sticky styling to the element by adding the sticky style class, changing position
     * to be sticky (and -webkit-sticky), setting the appropriate zIndex, and adding a sticky
     * direction and value.
     */
    /**
     * Adds the sticky styling to the element by adding the sticky style class, changing position
     * to be sticky (and -webkit-sticky), setting the appropriate zIndex, and adding a sticky
     * direction and value.
     * @param {?} element
     * @param {?} dir
     * @param {?} dirValue
     * @return {?}
     */
    StickyStyler.prototype._addStickyStyle = /**
     * Adds the sticky styling to the element by adding the sticky style class, changing position
     * to be sticky (and -webkit-sticky), setting the appropriate zIndex, and adding a sticky
     * direction and value.
     * @param {?} element
     * @param {?} dir
     * @param {?} dirValue
     * @return {?}
     */
    function (element, dir, dirValue) {
        element.classList.add(this.stickCellCss);
        element.style[dir] = dirValue + "px";
        element.style.cssText += 'position: -webkit-sticky; position: sticky; ';
        element.style.zIndex = this._getCalculatedZIndex(element);
    };
    /**
     * Calculate what the z-index should be for the element, depending on what directions (top,
     * bottom, left, right) have been set. It should be true that elements with a top direction
     * should have the highest index since these are elements like a table header. If any of those
     * elements are also sticky in another direction, then they should appear above other elements
     * that are only sticky top (e.g. a sticky column on a sticky header). Bottom-sticky elements
     * (e.g. footer rows) should then be next in the ordering such that they are below the header
     * but above any non-sticky elements. Finally, left/right sticky elements (e.g. sticky columns)
     * should minimally increment so that they are above non-sticky elements but below top and bottom
     * elements.
     */
    /**
     * Calculate what the z-index should be for the element, depending on what directions (top,
     * bottom, left, right) have been set. It should be true that elements with a top direction
     * should have the highest index since these are elements like a table header. If any of those
     * elements are also sticky in another direction, then they should appear above other elements
     * that are only sticky top (e.g. a sticky column on a sticky header). Bottom-sticky elements
     * (e.g. footer rows) should then be next in the ordering such that they are below the header
     * but above any non-sticky elements. Finally, left/right sticky elements (e.g. sticky columns)
     * should minimally increment so that they are above non-sticky elements but below top and bottom
     * elements.
     * @param {?} element
     * @return {?}
     */
    StickyStyler.prototype._getCalculatedZIndex = /**
     * Calculate what the z-index should be for the element, depending on what directions (top,
     * bottom, left, right) have been set. It should be true that elements with a top direction
     * should have the highest index since these are elements like a table header. If any of those
     * elements are also sticky in another direction, then they should appear above other elements
     * that are only sticky top (e.g. a sticky column on a sticky header). Bottom-sticky elements
     * (e.g. footer rows) should then be next in the ordering such that they are below the header
     * but above any non-sticky elements. Finally, left/right sticky elements (e.g. sticky columns)
     * should minimally increment so that they are above non-sticky elements but below top and bottom
     * elements.
     * @param {?} element
     * @return {?}
     */
    function (element) {
        /** @type {?} */
        var zIndexIncrements = {
            top: 100,
            bottom: 10,
            left: 1,
            right: 1,
        };
        /** @type {?} */
        var zIndex = 0;
        for (var _i = 0, STICKY_DIRECTIONS_1 = STICKY_DIRECTIONS; _i < STICKY_DIRECTIONS_1.length; _i++) {
            var dir = STICKY_DIRECTIONS_1[_i];
            if (element.style[dir]) {
                zIndex += zIndexIncrements[dir];
            }
        }
        return zIndex ? "" + zIndex : '';
    };
    /** Gets the widths for each cell in the provided row. */
    /**
     * Gets the widths for each cell in the provided row.
     * @param {?} row
     * @return {?}
     */
    StickyStyler.prototype._getCellWidths = /**
     * Gets the widths for each cell in the provided row.
     * @param {?} row
     * @return {?}
     */
    function (row) {
        /** @type {?} */
        var cellWidths = [];
        /** @type {?} */
        var firstRowCells = row.children;
        for (var i = 0; i < firstRowCells.length; i++) {
            /** @type {?} */
            var cell = (/** @type {?} */ (firstRowCells[i]));
            cellWidths.push(cell.getBoundingClientRect().width);
        }
        return cellWidths;
    };
    /**
     * Determines the left and right positions of each sticky column cell, which will be the
     * accumulation of all sticky column cell widths to the left and right, respectively.
     * Non-sticky cells do not need to have a value set since their positions will not be applied.
     */
    /**
     * Determines the left and right positions of each sticky column cell, which will be the
     * accumulation of all sticky column cell widths to the left and right, respectively.
     * Non-sticky cells do not need to have a value set since their positions will not be applied.
     * @param {?} widths
     * @param {?} stickyStates
     * @return {?}
     */
    StickyStyler.prototype._getStickyStartColumnPositions = /**
     * Determines the left and right positions of each sticky column cell, which will be the
     * accumulation of all sticky column cell widths to the left and right, respectively.
     * Non-sticky cells do not need to have a value set since their positions will not be applied.
     * @param {?} widths
     * @param {?} stickyStates
     * @return {?}
     */
    function (widths, stickyStates) {
        /** @type {?} */
        var positions = [];
        /** @type {?} */
        var nextPosition = 0;
        for (var i = 0; i < widths.length; i++) {
            if (stickyStates[i]) {
                positions[i] = nextPosition;
                nextPosition += widths[i];
            }
        }
        return positions;
    };
    /**
     * Determines the left and right positions of each sticky column cell, which will be the
     * accumulation of all sticky column cell widths to the left and right, respectively.
     * Non-sticky cells do not need to have a value set since their positions will not be applied.
     */
    /**
     * Determines the left and right positions of each sticky column cell, which will be the
     * accumulation of all sticky column cell widths to the left and right, respectively.
     * Non-sticky cells do not need to have a value set since their positions will not be applied.
     * @param {?} widths
     * @param {?} stickyStates
     * @return {?}
     */
    StickyStyler.prototype._getStickyEndColumnPositions = /**
     * Determines the left and right positions of each sticky column cell, which will be the
     * accumulation of all sticky column cell widths to the left and right, respectively.
     * Non-sticky cells do not need to have a value set since their positions will not be applied.
     * @param {?} widths
     * @param {?} stickyStates
     * @return {?}
     */
    function (widths, stickyStates) {
        /** @type {?} */
        var positions = [];
        /** @type {?} */
        var nextPosition = 0;
        for (var i = widths.length; i > 0; i--) {
            if (stickyStates[i]) {
                positions[i] = nextPosition;
                nextPosition += widths[i];
            }
        }
        return positions;
    };
    return StickyStyler;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Provides a handle for the table to grab the view container's ng-container to insert data rows.
 * \@docs-private
 */
var DataRowOutlet = /** @class */ (function () {
    function DataRowOutlet(viewContainer, elementRef) {
        this.viewContainer = viewContainer;
        this.elementRef = elementRef;
    }
    DataRowOutlet.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"], args: [{ selector: '[rowOutlet]' },] },
    ];
    /** @nocollapse */
    DataRowOutlet.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewContainerRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] }
    ]; };
    return DataRowOutlet;
}());
/**
 * Provides a handle for the table to grab the view container's ng-container to insert the header.
 * \@docs-private
 */
var HeaderRowOutlet = /** @class */ (function () {
    function HeaderRowOutlet(viewContainer, elementRef) {
        this.viewContainer = viewContainer;
        this.elementRef = elementRef;
    }
    HeaderRowOutlet.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"], args: [{ selector: '[headerRowOutlet]' },] },
    ];
    /** @nocollapse */
    HeaderRowOutlet.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewContainerRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] }
    ]; };
    return HeaderRowOutlet;
}());
/**
 * Provides a handle for the table to grab the view container's ng-container to insert the footer.
 * \@docs-private
 */
var FooterRowOutlet = /** @class */ (function () {
    function FooterRowOutlet(viewContainer, elementRef) {
        this.viewContainer = viewContainer;
        this.elementRef = elementRef;
    }
    FooterRowOutlet.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"], args: [{ selector: '[footerRowOutlet]' },] },
    ];
    /** @nocollapse */
    FooterRowOutlet.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewContainerRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] }
    ]; };
    return FooterRowOutlet;
}());
/**
 * The table template that can be used by the mat-table. Should not be used outside of the
 * material library.
 * \@docs-private
 * @type {?}
 */
var CDK_TABLE_TEMPLATE = 
// Note that according to MDN, the `caption` element has to be projected as the **first** element
// in the table. See https://developer.mozilla.org/en-US/docs/Web/HTML/Element/caption
"\n  <ng-content select=\"caption\"></ng-content>\n  <ng-container headerRowOutlet></ng-container>\n  <ng-container rowOutlet></ng-container>\n  <ng-container footerRowOutlet></ng-container>\n";
/**
 * Class used to conveniently type the embedded view ref for rows with a context.
 * \@docs-private
 * @abstract
 * @template T
 */
var /**
 * Class used to conveniently type the embedded view ref for rows with a context.
 * \@docs-private
 * @abstract
 * @template T
 */
RowViewRef = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(RowViewRef, _super);
    function RowViewRef() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return RowViewRef;
}(_angular_core__WEBPACK_IMPORTED_MODULE_2__["EmbeddedViewRef"]));
/**
 * A data table that can render a header row, data rows, and a footer row.
 * Uses the dataSource input to determine the data to be rendered. The data can be provided either
 * as a data array, an Observable stream that emits the data array to render, or a DataSource with a
 * connect function that will return an Observable stream that emits the data array to render.
 * @template T
 */
var CdkTable = /** @class */ (function () {
    function CdkTable(_differs, _changeDetectorRef, _elementRef, role, _dir, 
    /**
     * @deprecated
     * @breaking-change 8.0.0 `_document` and `_platform` to
     *    be made into a required parameters.
     */
    _document, _platform) {
        this._differs = _differs;
        this._changeDetectorRef = _changeDetectorRef;
        this._elementRef = _elementRef;
        this._dir = _dir;
        this._platform = _platform;
        /**
         * Subject that emits when the component has been destroyed.
         */
        this._onDestroy = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        /**
         * Map of all the user's defined columns (header, data, and footer cell template) identified by
         * name. Collection populated by the column definitions gathered by `ContentChildren` as well as
         * any custom column definitions added to `_customColumnDefs`.
         */
        this._columnDefsByName = new Map();
        /**
         * Column definitions that were defined outside of the direct content children of the table.
         * These will be defined when, e.g., creating a wrapper around the cdkTable that has
         * column definitions as *it's* content child.
         */
        this._customColumnDefs = new Set();
        /**
         * Data row definitions that were defined outside of the direct content children of the table.
         * These will be defined when, e.g., creating a wrapper around the cdkTable that has
         * built-in data rows as *it's* content child.
         */
        this._customRowDefs = new Set();
        /**
         * Header row definitions that were defined outside of the direct content children of the table.
         * These will be defined when, e.g., creating a wrapper around the cdkTable that has
         * built-in header rows as *it's* content child.
         */
        this._customHeaderRowDefs = new Set();
        /**
         * Footer row definitions that were defined outside of the direct content children of the table.
         * These will be defined when, e.g., creating a wrapper around the cdkTable that has a
         * built-in footer row as *it's* content child.
         */
        this._customFooterRowDefs = new Set();
        /**
         * Whether the header row definition has been changed. Triggers an update to the header row after
         * content is checked. Initialized as true so that the table renders the initial set of rows.
         */
        this._headerRowDefChanged = true;
        /**
         * Whether the footer row definition has been changed. Triggers an update to the footer row after
         * content is checked. Initialized as true so that the table renders the initial set of rows.
         */
        this._footerRowDefChanged = true;
        /**
         * Cache of the latest rendered `RenderRow` objects as a map for easy retrieval when constructing
         * a new list of `RenderRow` objects for rendering rows. Since the new list is constructed with
         * the cached `RenderRow` objects when possible, the row identity is preserved when the data
         * and row template matches, which allows the `IterableDiffer` to check rows by reference
         * and understand which rows are added/moved/removed.
         *
         * Implemented as a map of maps where the first key is the `data: T` object and the second is the
         * `CdkRowDef<T>` object. With the two keys, the cache points to a `RenderRow<T>` object that
         * contains an array of created pairs. The array is necessary to handle cases where the data
         * array contains multiple duplicate data objects and each instantiated `RenderRow` must be
         * stored.
         */
        this._cachedRenderRowsMap = new Map();
        /**
         * CSS class added to any row or cell that has sticky positioning applied. May be overriden by
         * table subclasses.
         */
        this.stickyCssClass = 'cdk-table-sticky';
        this._multiTemplateDataRows = false;
        // TODO(andrewseguin): Remove max value as the end index
        //   and instead calculate the view on init and scroll.
        /**
         * Stream containing the latest information on what rows are being displayed on screen.
         * Can be used by the data source to as a heuristic of what data should be provided.
         */
        this.viewChange = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"]({ start: 0, end: Number.MAX_VALUE });
        if (!role) {
            this._elementRef.nativeElement.setAttribute('role', 'grid');
        }
        this._document = _document;
        this._isNativeHtmlTable = this._elementRef.nativeElement.nodeName === 'TABLE';
    }
    Object.defineProperty(CdkTable.prototype, "trackBy", {
        /**
         * Tracking function that will be used to check the differences in data changes. Used similarly
         * to `ngFor` `trackBy` function. Optimize row operations by identifying a row based on its data
         * relative to the function to know if a row should be added/removed/moved.
         * Accepts a function that takes two parameters, `index` and `item`.
         */
        get: /**
         * Tracking function that will be used to check the differences in data changes. Used similarly
         * to `ngFor` `trackBy` function. Optimize row operations by identifying a row based on its data
         * relative to the function to know if a row should be added/removed/moved.
         * Accepts a function that takes two parameters, `index` and `item`.
         * @return {?}
         */
        function () { return this._trackByFn; },
        set: /**
         * @param {?} fn
         * @return {?}
         */
        function (fn) {
            if (Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["isDevMode"])() &&
                fn != null && typeof fn !== 'function' &&
                (/** @type {?} */ (console)) && (/** @type {?} */ (console.warn))) {
                console.warn("trackBy must be a function, but received " + JSON.stringify(fn) + ".");
            }
            this._trackByFn = fn;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CdkTable.prototype, "dataSource", {
        /**
         * The table's source of data, which can be provided in three ways (in order of complexity):
         *   - Simple data array (each object represents one table row)
         *   - Stream that emits a data array each time the array changes
         *   - `DataSource` object that implements the connect/disconnect interface.
         *
         * If a data array is provided, the table must be notified when the array's objects are
         * added, removed, or moved. This can be done by calling the `renderRows()` function which will
         * render the diff since the last table render. If the data array reference is changed, the table
         * will automatically trigger an update to the rows.
         *
         * When providing an Observable stream, the table will trigger an update automatically when the
         * stream emits a new array of data.
         *
         * Finally, when providing a `DataSource` object, the table will use the Observable stream
         * provided by the connect function and trigger updates when that stream emits new data array
         * values. During the table's ngOnDestroy or when the data source is removed from the table, the
         * table will call the DataSource's `disconnect` function (may be useful for cleaning up any
         * subscriptions registered during the connect process).
         */
        get: /**
         * The table's source of data, which can be provided in three ways (in order of complexity):
         *   - Simple data array (each object represents one table row)
         *   - Stream that emits a data array each time the array changes
         *   - `DataSource` object that implements the connect/disconnect interface.
         *
         * If a data array is provided, the table must be notified when the array's objects are
         * added, removed, or moved. This can be done by calling the `renderRows()` function which will
         * render the diff since the last table render. If the data array reference is changed, the table
         * will automatically trigger an update to the rows.
         *
         * When providing an Observable stream, the table will trigger an update automatically when the
         * stream emits a new array of data.
         *
         * Finally, when providing a `DataSource` object, the table will use the Observable stream
         * provided by the connect function and trigger updates when that stream emits new data array
         * values. During the table's ngOnDestroy or when the data source is removed from the table, the
         * table will call the DataSource's `disconnect` function (may be useful for cleaning up any
         * subscriptions registered during the connect process).
         * @return {?}
         */
        function () { return this._dataSource; },
        set: /**
         * @param {?} dataSource
         * @return {?}
         */
        function (dataSource) {
            if (this._dataSource !== dataSource) {
                this._switchDataSource(dataSource);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CdkTable.prototype, "multiTemplateDataRows", {
        /**
         * Whether to allow multiple rows per data object by evaluating which rows evaluate their 'when'
         * predicate to true. If `multiTemplateDataRows` is false, which is the default value, then each
         * dataobject will render the first row that evaluates its when predicate to true, in the order
         * defined in the table, or otherwise the default row which does not have a when predicate.
         */
        get: /**
         * Whether to allow multiple rows per data object by evaluating which rows evaluate their 'when'
         * predicate to true. If `multiTemplateDataRows` is false, which is the default value, then each
         * dataobject will render the first row that evaluates its when predicate to true, in the order
         * defined in the table, or otherwise the default row which does not have a when predicate.
         * @return {?}
         */
        function () { return this._multiTemplateDataRows; },
        set: /**
         * @param {?} v
         * @return {?}
         */
        function (v) {
            this._multiTemplateDataRows = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(v);
            if (this._rowOutlet.viewContainer.length) {
                this._forceRenderDataRows();
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    CdkTable.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._setupStickyStyler();
        if (this._isNativeHtmlTable) {
            this._applyNativeTableSections();
        }
        // Set up the trackBy function so that it uses the `RenderRow` as its identity by default. If
        // the user has provided a custom trackBy, return the result of that function as evaluated
        // with the values of the `RenderRow`'s data and index.
        this._dataDiffer = this._differs.find([]).create(function (_i, dataRow) {
            return _this.trackBy ? _this.trackBy(dataRow.dataIndex, dataRow.data) : dataRow;
        });
    };
    /**
     * @return {?}
     */
    CdkTable.prototype.ngAfterContentChecked = /**
     * @return {?}
     */
    function () {
        // Cache the row and column definitions gathered by ContentChildren and programmatic injection.
        this._cacheRowDefs();
        this._cacheColumnDefs();
        // Make sure that the user has at least added header, footer, or data row def.
        if (!this._headerRowDefs.length && !this._footerRowDefs.length && !this._rowDefs.length) {
            throw getTableMissingRowDefsError();
        }
        // Render updates if the list of columns have been changed for the header, row, or footer defs.
        this._renderUpdatedColumns();
        // If the header row definition has been changed, trigger a render to the header row.
        if (this._headerRowDefChanged) {
            this._forceRenderHeaderRows();
            this._headerRowDefChanged = false;
        }
        // If the footer row definition has been changed, trigger a render to the footer row.
        if (this._footerRowDefChanged) {
            this._forceRenderFooterRows();
            this._footerRowDefChanged = false;
        }
        // If there is a data source and row definitions, connect to the data source unless a
        // connection has already been made.
        if (this.dataSource && this._rowDefs.length > 0 && !this._renderChangeSubscription) {
            this._observeRenderChanges();
        }
        this._checkStickyStates();
    };
    /**
     * @return {?}
     */
    CdkTable.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._rowOutlet.viewContainer.clear();
        this._headerRowOutlet.viewContainer.clear();
        this._footerRowOutlet.viewContainer.clear();
        this._cachedRenderRowsMap.clear();
        this._onDestroy.next();
        this._onDestroy.complete();
        if (Object(_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_3__["isDataSource"])(this.dataSource)) {
            this.dataSource.disconnect(this);
        }
    };
    /**
     * Renders rows based on the table's latest set of data, which was either provided directly as an
     * input or retrieved through an Observable stream (directly or from a DataSource).
     * Checks for differences in the data since the last diff to perform only the necessary
     * changes (add/remove/move rows).
     *
     * If the table's data source is a DataSource or Observable, this will be invoked automatically
     * each time the provided Observable stream emits a new data array. Otherwise if your data is
     * an array, this function will need to be called to render any changes.
     */
    /**
     * Renders rows based on the table's latest set of data, which was either provided directly as an
     * input or retrieved through an Observable stream (directly or from a DataSource).
     * Checks for differences in the data since the last diff to perform only the necessary
     * changes (add/remove/move rows).
     *
     * If the table's data source is a DataSource or Observable, this will be invoked automatically
     * each time the provided Observable stream emits a new data array. Otherwise if your data is
     * an array, this function will need to be called to render any changes.
     * @return {?}
     */
    CdkTable.prototype.renderRows = /**
     * Renders rows based on the table's latest set of data, which was either provided directly as an
     * input or retrieved through an Observable stream (directly or from a DataSource).
     * Checks for differences in the data since the last diff to perform only the necessary
     * changes (add/remove/move rows).
     *
     * If the table's data source is a DataSource or Observable, this will be invoked automatically
     * each time the provided Observable stream emits a new data array. Otherwise if your data is
     * an array, this function will need to be called to render any changes.
     * @return {?}
     */
    function () {
        var _this = this;
        this._renderRows = this._getAllRenderRows();
        /** @type {?} */
        var changes = this._dataDiffer.diff(this._renderRows);
        if (!changes) {
            return;
        }
        /** @type {?} */
        var viewContainer = this._rowOutlet.viewContainer;
        changes.forEachOperation(function (record, prevIndex, currentIndex) {
            if (record.previousIndex == null) {
                _this._insertRow(record.item, (/** @type {?} */ (currentIndex)));
            }
            else if (currentIndex == null) {
                viewContainer.remove((/** @type {?} */ (prevIndex)));
            }
            else {
                /** @type {?} */
                var view = (/** @type {?} */ (viewContainer.get((/** @type {?} */ (prevIndex)))));
                viewContainer.move((/** @type {?} */ (view)), currentIndex);
            }
        });
        // Update the meta context of a row's context data (index, count, first, last, ...)
        this._updateRowIndexContext();
        // Update rows that did not get added/removed/moved but may have had their identity changed,
        // e.g. if trackBy matched data on some property but the actual data reference changed.
        changes.forEachIdentityChange(function (record) {
            /** @type {?} */
            var rowView = (/** @type {?} */ (viewContainer.get((/** @type {?} */ (record.currentIndex)))));
            rowView.context.$implicit = record.item.data;
        });
        this.updateStickyColumnStyles();
    };
    /**
     * Sets the header row definition to be used. Overrides the header row definition gathered by
     * using `ContentChild`, if one exists. Sets a flag that will re-render the header row after the
     * table's content is checked.
     * @docs-private
     * @deprecated Use `addHeaderRowDef` and `removeHeaderRowDef` instead
     * @breaking-change 8.0.0
     */
    /**
     * Sets the header row definition to be used. Overrides the header row definition gathered by
     * using `ContentChild`, if one exists. Sets a flag that will re-render the header row after the
     * table's content is checked.
     * \@docs-private
     * @deprecated Use `addHeaderRowDef` and `removeHeaderRowDef` instead
     * \@breaking-change 8.0.0
     * @param {?} headerRowDef
     * @return {?}
     */
    CdkTable.prototype.setHeaderRowDef = /**
     * Sets the header row definition to be used. Overrides the header row definition gathered by
     * using `ContentChild`, if one exists. Sets a flag that will re-render the header row after the
     * table's content is checked.
     * \@docs-private
     * @deprecated Use `addHeaderRowDef` and `removeHeaderRowDef` instead
     * \@breaking-change 8.0.0
     * @param {?} headerRowDef
     * @return {?}
     */
    function (headerRowDef) {
        this._customHeaderRowDefs = new Set([headerRowDef]);
        this._headerRowDefChanged = true;
    };
    /**
     * Sets the footer row definition to be used. Overrides the footer row definition gathered by
     * using `ContentChild`, if one exists. Sets a flag that will re-render the footer row after the
     * table's content is checked.
     * @docs-private
     * @deprecated Use `addFooterRowDef` and `removeFooterRowDef` instead
     * @breaking-change 8.0.0
     */
    /**
     * Sets the footer row definition to be used. Overrides the footer row definition gathered by
     * using `ContentChild`, if one exists. Sets a flag that will re-render the footer row after the
     * table's content is checked.
     * \@docs-private
     * @deprecated Use `addFooterRowDef` and `removeFooterRowDef` instead
     * \@breaking-change 8.0.0
     * @param {?} footerRowDef
     * @return {?}
     */
    CdkTable.prototype.setFooterRowDef = /**
     * Sets the footer row definition to be used. Overrides the footer row definition gathered by
     * using `ContentChild`, if one exists. Sets a flag that will re-render the footer row after the
     * table's content is checked.
     * \@docs-private
     * @deprecated Use `addFooterRowDef` and `removeFooterRowDef` instead
     * \@breaking-change 8.0.0
     * @param {?} footerRowDef
     * @return {?}
     */
    function (footerRowDef) {
        this._customFooterRowDefs = new Set([footerRowDef]);
        this._footerRowDefChanged = true;
    };
    /** Adds a column definition that was not included as part of the content children. */
    /**
     * Adds a column definition that was not included as part of the content children.
     * @param {?} columnDef
     * @return {?}
     */
    CdkTable.prototype.addColumnDef = /**
     * Adds a column definition that was not included as part of the content children.
     * @param {?} columnDef
     * @return {?}
     */
    function (columnDef) {
        this._customColumnDefs.add(columnDef);
    };
    /** Removes a column definition that was not included as part of the content children. */
    /**
     * Removes a column definition that was not included as part of the content children.
     * @param {?} columnDef
     * @return {?}
     */
    CdkTable.prototype.removeColumnDef = /**
     * Removes a column definition that was not included as part of the content children.
     * @param {?} columnDef
     * @return {?}
     */
    function (columnDef) {
        this._customColumnDefs.delete(columnDef);
    };
    /** Adds a row definition that was not included as part of the content children. */
    /**
     * Adds a row definition that was not included as part of the content children.
     * @param {?} rowDef
     * @return {?}
     */
    CdkTable.prototype.addRowDef = /**
     * Adds a row definition that was not included as part of the content children.
     * @param {?} rowDef
     * @return {?}
     */
    function (rowDef) {
        this._customRowDefs.add(rowDef);
    };
    /** Removes a row definition that was not included as part of the content children. */
    /**
     * Removes a row definition that was not included as part of the content children.
     * @param {?} rowDef
     * @return {?}
     */
    CdkTable.prototype.removeRowDef = /**
     * Removes a row definition that was not included as part of the content children.
     * @param {?} rowDef
     * @return {?}
     */
    function (rowDef) {
        this._customRowDefs.delete(rowDef);
    };
    /** Adds a header row definition that was not included as part of the content children. */
    /**
     * Adds a header row definition that was not included as part of the content children.
     * @param {?} headerRowDef
     * @return {?}
     */
    CdkTable.prototype.addHeaderRowDef = /**
     * Adds a header row definition that was not included as part of the content children.
     * @param {?} headerRowDef
     * @return {?}
     */
    function (headerRowDef) {
        this._customHeaderRowDefs.add(headerRowDef);
        this._headerRowDefChanged = true;
    };
    /** Removes a header row definition that was not included as part of the content children. */
    /**
     * Removes a header row definition that was not included as part of the content children.
     * @param {?} headerRowDef
     * @return {?}
     */
    CdkTable.prototype.removeHeaderRowDef = /**
     * Removes a header row definition that was not included as part of the content children.
     * @param {?} headerRowDef
     * @return {?}
     */
    function (headerRowDef) {
        this._customHeaderRowDefs.delete(headerRowDef);
        this._headerRowDefChanged = true;
    };
    /** Adds a footer row definition that was not included as part of the content children. */
    /**
     * Adds a footer row definition that was not included as part of the content children.
     * @param {?} footerRowDef
     * @return {?}
     */
    CdkTable.prototype.addFooterRowDef = /**
     * Adds a footer row definition that was not included as part of the content children.
     * @param {?} footerRowDef
     * @return {?}
     */
    function (footerRowDef) {
        this._customFooterRowDefs.add(footerRowDef);
        this._footerRowDefChanged = true;
    };
    /** Removes a footer row definition that was not included as part of the content children. */
    /**
     * Removes a footer row definition that was not included as part of the content children.
     * @param {?} footerRowDef
     * @return {?}
     */
    CdkTable.prototype.removeFooterRowDef = /**
     * Removes a footer row definition that was not included as part of the content children.
     * @param {?} footerRowDef
     * @return {?}
     */
    function (footerRowDef) {
        this._customFooterRowDefs.delete(footerRowDef);
        this._footerRowDefChanged = true;
    };
    /**
     * Updates the header sticky styles. First resets all applied styles with respect to the cells
     * sticking to the top. Then, evaluating which cells need to be stuck to the top. This is
     * automatically called when the header row changes its displayed set of columns, or if its
     * sticky input changes. May be called manually for cases where the cell content changes outside
     * of these events.
     */
    /**
     * Updates the header sticky styles. First resets all applied styles with respect to the cells
     * sticking to the top. Then, evaluating which cells need to be stuck to the top. This is
     * automatically called when the header row changes its displayed set of columns, or if its
     * sticky input changes. May be called manually for cases where the cell content changes outside
     * of these events.
     * @return {?}
     */
    CdkTable.prototype.updateStickyHeaderRowStyles = /**
     * Updates the header sticky styles. First resets all applied styles with respect to the cells
     * sticking to the top. Then, evaluating which cells need to be stuck to the top. This is
     * automatically called when the header row changes its displayed set of columns, or if its
     * sticky input changes. May be called manually for cases where the cell content changes outside
     * of these events.
     * @return {?}
     */
    function () {
        /** @type {?} */
        var headerRows = this._getRenderedRows(this._headerRowOutlet);
        /** @type {?} */
        var tableElement = (/** @type {?} */ (this._elementRef.nativeElement));
        // Hide the thead element if there are no header rows. This is necessary to satisfy
        // overzealous a11y checkers that fail because the `rowgroup` element does not contain
        // required child `row`.
        /** @type {?} */
        var thead = tableElement.querySelector('thead');
        if (thead) {
            thead.style.display = headerRows.length ? '' : 'none';
        }
        /** @type {?} */
        var stickyStates = this._headerRowDefs.map(function (def) { return def.sticky; });
        this._stickyStyler.clearStickyPositioning(headerRows, ['top']);
        this._stickyStyler.stickRows(headerRows, stickyStates, 'top');
        // Reset the dirty state of the sticky input change since it has been used.
        this._headerRowDefs.forEach(function (def) { return def.resetStickyChanged(); });
    };
    /**
     * Updates the footer sticky styles. First resets all applied styles with respect to the cells
     * sticking to the bottom. Then, evaluating which cells need to be stuck to the bottom. This is
     * automatically called when the footer row changes its displayed set of columns, or if its
     * sticky input changes. May be called manually for cases where the cell content changes outside
     * of these events.
     */
    /**
     * Updates the footer sticky styles. First resets all applied styles with respect to the cells
     * sticking to the bottom. Then, evaluating which cells need to be stuck to the bottom. This is
     * automatically called when the footer row changes its displayed set of columns, or if its
     * sticky input changes. May be called manually for cases where the cell content changes outside
     * of these events.
     * @return {?}
     */
    CdkTable.prototype.updateStickyFooterRowStyles = /**
     * Updates the footer sticky styles. First resets all applied styles with respect to the cells
     * sticking to the bottom. Then, evaluating which cells need to be stuck to the bottom. This is
     * automatically called when the footer row changes its displayed set of columns, or if its
     * sticky input changes. May be called manually for cases where the cell content changes outside
     * of these events.
     * @return {?}
     */
    function () {
        /** @type {?} */
        var footerRows = this._getRenderedRows(this._footerRowOutlet);
        /** @type {?} */
        var tableElement = (/** @type {?} */ (this._elementRef.nativeElement));
        // Hide the tfoot element if there are no footer rows. This is necessary to satisfy
        // overzealous a11y checkers that fail because the `rowgroup` element does not contain
        // required child `row`.
        /** @type {?} */
        var tfoot = tableElement.querySelector('tfoot');
        if (tfoot) {
            tfoot.style.display = footerRows.length ? '' : 'none';
        }
        /** @type {?} */
        var stickyStates = this._footerRowDefs.map(function (def) { return def.sticky; });
        this._stickyStyler.clearStickyPositioning(footerRows, ['bottom']);
        this._stickyStyler.stickRows(footerRows, stickyStates, 'bottom');
        this._stickyStyler.updateStickyFooterContainer(this._elementRef.nativeElement, stickyStates);
        // Reset the dirty state of the sticky input change since it has been used.
        this._footerRowDefs.forEach(function (def) { return def.resetStickyChanged(); });
    };
    /**
     * Updates the column sticky styles. First resets all applied styles with respect to the cells
     * sticking to the left and right. Then sticky styles are added for the left and right according
     * to the column definitions for each cell in each row. This is automatically called when
     * the data source provides a new set of data or when a column definition changes its sticky
     * input. May be called manually for cases where the cell content changes outside of these events.
     */
    /**
     * Updates the column sticky styles. First resets all applied styles with respect to the cells
     * sticking to the left and right. Then sticky styles are added for the left and right according
     * to the column definitions for each cell in each row. This is automatically called when
     * the data source provides a new set of data or when a column definition changes its sticky
     * input. May be called manually for cases where the cell content changes outside of these events.
     * @return {?}
     */
    CdkTable.prototype.updateStickyColumnStyles = /**
     * Updates the column sticky styles. First resets all applied styles with respect to the cells
     * sticking to the left and right. Then sticky styles are added for the left and right according
     * to the column definitions for each cell in each row. This is automatically called when
     * the data source provides a new set of data or when a column definition changes its sticky
     * input. May be called manually for cases where the cell content changes outside of these events.
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var headerRows = this._getRenderedRows(this._headerRowOutlet);
        /** @type {?} */
        var dataRows = this._getRenderedRows(this._rowOutlet);
        /** @type {?} */
        var footerRows = this._getRenderedRows(this._footerRowOutlet);
        // Clear the left and right positioning from all columns in the table across all rows since
        // sticky columns span across all table sections (header, data, footer)
        this._stickyStyler.clearStickyPositioning(headerRows.concat(dataRows, footerRows), ['left', 'right']);
        // Update the sticky styles for each header row depending on the def's sticky state
        headerRows.forEach(function (headerRow, i) {
            _this._addStickyColumnStyles([headerRow], _this._headerRowDefs[i]);
        });
        // Update the sticky styles for each data row depending on its def's sticky state
        this._rowDefs.forEach(function (rowDef) {
            // Collect all the rows rendered with this row definition.
            /** @type {?} */
            var rows = [];
            for (var i = 0; i < dataRows.length; i++) {
                if (_this._renderRows[i].rowDef === rowDef) {
                    rows.push(dataRows[i]);
                }
            }
            _this._addStickyColumnStyles(rows, rowDef);
        });
        // Update the sticky styles for each footer row depending on the def's sticky state
        footerRows.forEach(function (footerRow, i) {
            _this._addStickyColumnStyles([footerRow], _this._footerRowDefs[i]);
        });
        // Reset the dirty state of the sticky input change since it has been used.
        Array.from(this._columnDefsByName.values()).forEach(function (def) { return def.resetStickyChanged(); });
    };
    /**
     * Get the list of RenderRow objects to render according to the current list of data and defined
     * row definitions. If the previous list already contained a particular pair, it should be reused
     * so that the differ equates their references.
     */
    /**
     * Get the list of RenderRow objects to render according to the current list of data and defined
     * row definitions. If the previous list already contained a particular pair, it should be reused
     * so that the differ equates their references.
     * @private
     * @return {?}
     */
    CdkTable.prototype._getAllRenderRows = /**
     * Get the list of RenderRow objects to render according to the current list of data and defined
     * row definitions. If the previous list already contained a particular pair, it should be reused
     * so that the differ equates their references.
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var renderRows = [];
        // Store the cache and create a new one. Any re-used RenderRow objects will be moved into the
        // new cache while unused ones can be picked up by garbage collection.
        /** @type {?} */
        var prevCachedRenderRows = this._cachedRenderRowsMap;
        this._cachedRenderRowsMap = new Map();
        // For each data object, get the list of rows that should be rendered, represented by the
        // respective `RenderRow` object which is the pair of `data` and `CdkRowDef`.
        for (var i = 0; i < this._data.length; i++) {
            /** @type {?} */
            var data = this._data[i];
            /** @type {?} */
            var renderRowsForData = this._getRenderRowsForData(data, i, prevCachedRenderRows.get(data));
            if (!this._cachedRenderRowsMap.has(data)) {
                this._cachedRenderRowsMap.set(data, new WeakMap());
            }
            for (var j = 0; j < renderRowsForData.length; j++) {
                /** @type {?} */
                var renderRow = renderRowsForData[j];
                /** @type {?} */
                var cache = (/** @type {?} */ (this._cachedRenderRowsMap.get(renderRow.data)));
                if (cache.has(renderRow.rowDef)) {
                    (/** @type {?} */ (cache.get(renderRow.rowDef))).push(renderRow);
                }
                else {
                    cache.set(renderRow.rowDef, [renderRow]);
                }
                renderRows.push(renderRow);
            }
        }
        return renderRows;
    };
    /**
     * Gets a list of `RenderRow<T>` for the provided data object and any `CdkRowDef` objects that
     * should be rendered for this data. Reuses the cached RenderRow objects if they match the same
     * `(T, CdkRowDef)` pair.
     */
    /**
     * Gets a list of `RenderRow<T>` for the provided data object and any `CdkRowDef` objects that
     * should be rendered for this data. Reuses the cached RenderRow objects if they match the same
     * `(T, CdkRowDef)` pair.
     * @private
     * @param {?} data
     * @param {?} dataIndex
     * @param {?=} cache
     * @return {?}
     */
    CdkTable.prototype._getRenderRowsForData = /**
     * Gets a list of `RenderRow<T>` for the provided data object and any `CdkRowDef` objects that
     * should be rendered for this data. Reuses the cached RenderRow objects if they match the same
     * `(T, CdkRowDef)` pair.
     * @private
     * @param {?} data
     * @param {?} dataIndex
     * @param {?=} cache
     * @return {?}
     */
    function (data, dataIndex, cache) {
        /** @type {?} */
        var rowDefs = this._getRowDefs(data, dataIndex);
        return rowDefs.map(function (rowDef) {
            /** @type {?} */
            var cachedRenderRows = (cache && cache.has(rowDef)) ? (/** @type {?} */ (cache.get(rowDef))) : [];
            if (cachedRenderRows.length) {
                /** @type {?} */
                var dataRow = (/** @type {?} */ (cachedRenderRows.shift()));
                dataRow.dataIndex = dataIndex;
                return dataRow;
            }
            else {
                return { data: data, rowDef: rowDef, dataIndex: dataIndex };
            }
        });
    };
    /** Update the map containing the content's column definitions. */
    /**
     * Update the map containing the content's column definitions.
     * @private
     * @return {?}
     */
    CdkTable.prototype._cacheColumnDefs = /**
     * Update the map containing the content's column definitions.
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this._columnDefsByName.clear();
        /** @type {?} */
        var columnDefs = mergeQueryListAndSet(this._contentColumnDefs, this._customColumnDefs);
        columnDefs.forEach(function (columnDef) {
            if (_this._columnDefsByName.has(columnDef.name)) {
                throw getTableDuplicateColumnNameError(columnDef.name);
            }
            _this._columnDefsByName.set(columnDef.name, columnDef);
        });
    };
    /** Update the list of all available row definitions that can be used. */
    /**
     * Update the list of all available row definitions that can be used.
     * @private
     * @return {?}
     */
    CdkTable.prototype._cacheRowDefs = /**
     * Update the list of all available row definitions that can be used.
     * @private
     * @return {?}
     */
    function () {
        this._headerRowDefs =
            mergeQueryListAndSet(this._contentHeaderRowDefs, this._customHeaderRowDefs);
        this._footerRowDefs =
            mergeQueryListAndSet(this._contentFooterRowDefs, this._customFooterRowDefs);
        this._rowDefs =
            mergeQueryListAndSet(this._contentRowDefs, this._customRowDefs);
        // After all row definitions are determined, find the row definition to be considered default.
        /** @type {?} */
        var defaultRowDefs = this._rowDefs.filter(function (def) { return !def.when; });
        if (!this.multiTemplateDataRows && defaultRowDefs.length > 1) {
            throw getTableMultipleDefaultRowDefsError();
        }
        this._defaultRowDef = defaultRowDefs[0];
    };
    /**
     * Check if the header, data, or footer rows have changed what columns they want to display or
     * whether the sticky states have changed for the header or footer. If there is a diff, then
     * re-render that section.
     */
    /**
     * Check if the header, data, or footer rows have changed what columns they want to display or
     * whether the sticky states have changed for the header or footer. If there is a diff, then
     * re-render that section.
     * @private
     * @return {?}
     */
    CdkTable.prototype._renderUpdatedColumns = /**
     * Check if the header, data, or footer rows have changed what columns they want to display or
     * whether the sticky states have changed for the header or footer. If there is a diff, then
     * re-render that section.
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var columnsDiffReducer = function (acc, def) { return acc || !!def.getColumnsDiff(); };
        // Force re-render data rows if the list of column definitions have changed.
        if (this._rowDefs.reduce(columnsDiffReducer, false)) {
            this._forceRenderDataRows();
        }
        // Force re-render header/footer rows if the list of column definitions have changed..
        if (this._headerRowDefs.reduce(columnsDiffReducer, false)) {
            this._forceRenderHeaderRows();
        }
        if (this._footerRowDefs.reduce(columnsDiffReducer, false)) {
            this._forceRenderFooterRows();
        }
    };
    /**
     * Switch to the provided data source by resetting the data and unsubscribing from the current
     * render change subscription if one exists. If the data source is null, interpret this by
     * clearing the row outlet. Otherwise start listening for new data.
     */
    /**
     * Switch to the provided data source by resetting the data and unsubscribing from the current
     * render change subscription if one exists. If the data source is null, interpret this by
     * clearing the row outlet. Otherwise start listening for new data.
     * @private
     * @param {?} dataSource
     * @return {?}
     */
    CdkTable.prototype._switchDataSource = /**
     * Switch to the provided data source by resetting the data and unsubscribing from the current
     * render change subscription if one exists. If the data source is null, interpret this by
     * clearing the row outlet. Otherwise start listening for new data.
     * @private
     * @param {?} dataSource
     * @return {?}
     */
    function (dataSource) {
        this._data = [];
        if (Object(_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_3__["isDataSource"])(this.dataSource)) {
            this.dataSource.disconnect(this);
        }
        // Stop listening for data from the previous data source.
        if (this._renderChangeSubscription) {
            this._renderChangeSubscription.unsubscribe();
            this._renderChangeSubscription = null;
        }
        if (!dataSource) {
            if (this._dataDiffer) {
                this._dataDiffer.diff([]);
            }
            this._rowOutlet.viewContainer.clear();
        }
        this._dataSource = dataSource;
    };
    /** Set up a subscription for the data provided by the data source. */
    /**
     * Set up a subscription for the data provided by the data source.
     * @private
     * @return {?}
     */
    CdkTable.prototype._observeRenderChanges = /**
     * Set up a subscription for the data provided by the data source.
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        // If no data source has been set, there is nothing to observe for changes.
        if (!this.dataSource) {
            return;
        }
        /** @type {?} */
        var dataStream;
        if (Object(_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_3__["isDataSource"])(this.dataSource)) {
            dataStream = this.dataSource.connect(this);
        }
        else if (this.dataSource instanceof rxjs__WEBPACK_IMPORTED_MODULE_5__["Observable"]) {
            dataStream = this.dataSource;
        }
        else if (Array.isArray(this.dataSource)) {
            dataStream = Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(this.dataSource);
        }
        if (dataStream === undefined) {
            throw getTableUnknownDataSourceError();
        }
        this._renderChangeSubscription = dataStream
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this._onDestroy))
            .subscribe(function (data) {
            _this._data = data || [];
            _this.renderRows();
        });
    };
    /**
     * Clears any existing content in the header row outlet and creates a new embedded view
     * in the outlet using the header row definition.
     */
    /**
     * Clears any existing content in the header row outlet and creates a new embedded view
     * in the outlet using the header row definition.
     * @private
     * @return {?}
     */
    CdkTable.prototype._forceRenderHeaderRows = /**
     * Clears any existing content in the header row outlet and creates a new embedded view
     * in the outlet using the header row definition.
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        // Clear the header row outlet if any content exists.
        if (this._headerRowOutlet.viewContainer.length > 0) {
            this._headerRowOutlet.viewContainer.clear();
        }
        this._headerRowDefs.forEach(function (def, i) { return _this._renderRow(_this._headerRowOutlet, def, i); });
        this.updateStickyHeaderRowStyles();
        this.updateStickyColumnStyles();
    };
    /**
     * Clears any existing content in the footer row outlet and creates a new embedded view
     * in the outlet using the footer row definition.
     */
    /**
     * Clears any existing content in the footer row outlet and creates a new embedded view
     * in the outlet using the footer row definition.
     * @private
     * @return {?}
     */
    CdkTable.prototype._forceRenderFooterRows = /**
     * Clears any existing content in the footer row outlet and creates a new embedded view
     * in the outlet using the footer row definition.
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        // Clear the footer row outlet if any content exists.
        if (this._footerRowOutlet.viewContainer.length > 0) {
            this._footerRowOutlet.viewContainer.clear();
        }
        this._footerRowDefs.forEach(function (def, i) { return _this._renderRow(_this._footerRowOutlet, def, i); });
        this.updateStickyFooterRowStyles();
        this.updateStickyColumnStyles();
    };
    /** Adds the sticky column styles for the rows according to the columns' stick states. */
    /**
     * Adds the sticky column styles for the rows according to the columns' stick states.
     * @private
     * @param {?} rows
     * @param {?} rowDef
     * @return {?}
     */
    CdkTable.prototype._addStickyColumnStyles = /**
     * Adds the sticky column styles for the rows according to the columns' stick states.
     * @private
     * @param {?} rows
     * @param {?} rowDef
     * @return {?}
     */
    function (rows, rowDef) {
        var _this = this;
        /** @type {?} */
        var columnDefs = Array.from(rowDef.columns || []).map(function (columnName) {
            /** @type {?} */
            var columnDef = _this._columnDefsByName.get(columnName);
            if (!columnDef) {
                throw getTableUnknownColumnError(columnName);
            }
            return (/** @type {?} */ (columnDef));
        });
        /** @type {?} */
        var stickyStartStates = columnDefs.map(function (columnDef) { return columnDef.sticky; });
        /** @type {?} */
        var stickyEndStates = columnDefs.map(function (columnDef) { return columnDef.stickyEnd; });
        this._stickyStyler.updateStickyColumns(rows, stickyStartStates, stickyEndStates);
    };
    /** Gets the list of rows that have been rendered in the row outlet. */
    /**
     * Gets the list of rows that have been rendered in the row outlet.
     * @param {?} rowOutlet
     * @return {?}
     */
    CdkTable.prototype._getRenderedRows = /**
     * Gets the list of rows that have been rendered in the row outlet.
     * @param {?} rowOutlet
     * @return {?}
     */
    function (rowOutlet) {
        /** @type {?} */
        var renderedRows = [];
        for (var i = 0; i < rowOutlet.viewContainer.length; i++) {
            /** @type {?} */
            var viewRef = ((/** @type {?} */ ((/** @type {?} */ (rowOutlet.viewContainer.get(i))))));
            renderedRows.push(viewRef.rootNodes[0]);
        }
        return renderedRows;
    };
    /**
     * Get the matching row definitions that should be used for this row data. If there is only
     * one row definition, it is returned. Otherwise, find the row definitions that has a when
     * predicate that returns true with the data. If none return true, return the default row
     * definition.
     */
    /**
     * Get the matching row definitions that should be used for this row data. If there is only
     * one row definition, it is returned. Otherwise, find the row definitions that has a when
     * predicate that returns true with the data. If none return true, return the default row
     * definition.
     * @param {?} data
     * @param {?} dataIndex
     * @return {?}
     */
    CdkTable.prototype._getRowDefs = /**
     * Get the matching row definitions that should be used for this row data. If there is only
     * one row definition, it is returned. Otherwise, find the row definitions that has a when
     * predicate that returns true with the data. If none return true, return the default row
     * definition.
     * @param {?} data
     * @param {?} dataIndex
     * @return {?}
     */
    function (data, dataIndex) {
        if (this._rowDefs.length == 1) {
            return [this._rowDefs[0]];
        }
        /** @type {?} */
        var rowDefs = [];
        if (this.multiTemplateDataRows) {
            rowDefs = this._rowDefs.filter(function (def) { return !def.when || def.when(dataIndex, data); });
        }
        else {
            /** @type {?} */
            var rowDef = this._rowDefs.find(function (def) { return def.when && def.when(dataIndex, data); }) || this._defaultRowDef;
            if (rowDef) {
                rowDefs.push(rowDef);
            }
        }
        if (!rowDefs.length) {
            throw getTableMissingMatchingRowDefError(data);
        }
        return rowDefs;
    };
    /**
     * Create the embedded view for the data row template and place it in the correct index location
     * within the data row view container.
     */
    /**
     * Create the embedded view for the data row template and place it in the correct index location
     * within the data row view container.
     * @private
     * @param {?} renderRow
     * @param {?} renderIndex
     * @return {?}
     */
    CdkTable.prototype._insertRow = /**
     * Create the embedded view for the data row template and place it in the correct index location
     * within the data row view container.
     * @private
     * @param {?} renderRow
     * @param {?} renderIndex
     * @return {?}
     */
    function (renderRow, renderIndex) {
        /** @type {?} */
        var rowDef = renderRow.rowDef;
        /** @type {?} */
        var context = { $implicit: renderRow.data };
        this._renderRow(this._rowOutlet, rowDef, renderIndex, context);
    };
    /**
     * Creates a new row template in the outlet and fills it with the set of cell templates.
     * Optionally takes a context to provide to the row and cells, as well as an optional index
     * of where to place the new row template in the outlet.
     */
    /**
     * Creates a new row template in the outlet and fills it with the set of cell templates.
     * Optionally takes a context to provide to the row and cells, as well as an optional index
     * of where to place the new row template in the outlet.
     * @private
     * @param {?} outlet
     * @param {?} rowDef
     * @param {?} index
     * @param {?=} context
     * @return {?}
     */
    CdkTable.prototype._renderRow = /**
     * Creates a new row template in the outlet and fills it with the set of cell templates.
     * Optionally takes a context to provide to the row and cells, as well as an optional index
     * of where to place the new row template in the outlet.
     * @private
     * @param {?} outlet
     * @param {?} rowDef
     * @param {?} index
     * @param {?=} context
     * @return {?}
     */
    function (outlet, rowDef, index, context) {
        if (context === void 0) { context = {}; }
        // TODO(andrewseguin): enforce that one outlet was instantiated from createEmbeddedView
        outlet.viewContainer.createEmbeddedView(rowDef.template, context, index);
        for (var _a = 0, _b = this._getCellTemplates(rowDef); _a < _b.length; _a++) {
            var cellTemplate = _b[_a];
            if (CdkCellOutlet.mostRecentCellOutlet) {
                CdkCellOutlet.mostRecentCellOutlet._viewContainer.createEmbeddedView(cellTemplate, context);
            }
        }
        this._changeDetectorRef.markForCheck();
    };
    /**
     * Updates the index-related context for each row to reflect any changes in the index of the rows,
     * e.g. first/last/even/odd.
     */
    /**
     * Updates the index-related context for each row to reflect any changes in the index of the rows,
     * e.g. first/last/even/odd.
     * @private
     * @return {?}
     */
    CdkTable.prototype._updateRowIndexContext = /**
     * Updates the index-related context for each row to reflect any changes in the index of the rows,
     * e.g. first/last/even/odd.
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var viewContainer = this._rowOutlet.viewContainer;
        for (var renderIndex = 0, count = viewContainer.length; renderIndex < count; renderIndex++) {
            /** @type {?} */
            var viewRef = (/** @type {?} */ (viewContainer.get(renderIndex)));
            /** @type {?} */
            var context = (/** @type {?} */ (viewRef.context));
            context.count = count;
            context.first = renderIndex === 0;
            context.last = renderIndex === count - 1;
            context.even = renderIndex % 2 === 0;
            context.odd = !context.even;
            if (this.multiTemplateDataRows) {
                context.dataIndex = this._renderRows[renderIndex].dataIndex;
                context.renderIndex = renderIndex;
            }
            else {
                context.index = this._renderRows[renderIndex].dataIndex;
            }
        }
    };
    /** Gets the column definitions for the provided row def. */
    /**
     * Gets the column definitions for the provided row def.
     * @private
     * @param {?} rowDef
     * @return {?}
     */
    CdkTable.prototype._getCellTemplates = /**
     * Gets the column definitions for the provided row def.
     * @private
     * @param {?} rowDef
     * @return {?}
     */
    function (rowDef) {
        var _this = this;
        if (!rowDef || !rowDef.columns) {
            return [];
        }
        return Array.from(rowDef.columns, function (columnId) {
            /** @type {?} */
            var column = _this._columnDefsByName.get(columnId);
            if (!column) {
                throw getTableUnknownColumnError(columnId);
            }
            return rowDef.extractCellTemplate(column);
        });
    };
    /** Adds native table sections (e.g. tbody) and moves the row outlets into them. */
    /**
     * Adds native table sections (e.g. tbody) and moves the row outlets into them.
     * @private
     * @return {?}
     */
    CdkTable.prototype._applyNativeTableSections = /**
     * Adds native table sections (e.g. tbody) and moves the row outlets into them.
     * @private
     * @return {?}
     */
    function () {
        // @breaking-change 8.0.0 remove the `|| document` once the `_document` is a required param.
        /** @type {?} */
        var documentRef = this._document || document;
        /** @type {?} */
        var documentFragment = documentRef.createDocumentFragment();
        /** @type {?} */
        var sections = [
            { tag: 'thead', outlet: this._headerRowOutlet },
            { tag: 'tbody', outlet: this._rowOutlet },
            { tag: 'tfoot', outlet: this._footerRowOutlet },
        ];
        for (var _a = 0, sections_1 = sections; _a < sections_1.length; _a++) {
            var section = sections_1[_a];
            /** @type {?} */
            var element = documentRef.createElement(section.tag);
            element.setAttribute('role', 'rowgroup');
            element.appendChild(section.outlet.elementRef.nativeElement);
            documentFragment.appendChild(element);
        }
        // Use a DocumentFragment so we don't hit the DOM on each iteration.
        this._elementRef.nativeElement.appendChild(documentFragment);
    };
    /**
     * Forces a re-render of the data rows. Should be called in cases where there has been an input
     * change that affects the evaluation of which rows should be rendered, e.g. toggling
     * `multiTemplateDataRows` or adding/removing row definitions.
     */
    /**
     * Forces a re-render of the data rows. Should be called in cases where there has been an input
     * change that affects the evaluation of which rows should be rendered, e.g. toggling
     * `multiTemplateDataRows` or adding/removing row definitions.
     * @private
     * @return {?}
     */
    CdkTable.prototype._forceRenderDataRows = /**
     * Forces a re-render of the data rows. Should be called in cases where there has been an input
     * change that affects the evaluation of which rows should be rendered, e.g. toggling
     * `multiTemplateDataRows` or adding/removing row definitions.
     * @private
     * @return {?}
     */
    function () {
        this._dataDiffer.diff([]);
        this._rowOutlet.viewContainer.clear();
        this.renderRows();
        this.updateStickyColumnStyles();
    };
    /**
     * Checks if there has been a change in sticky states since last check and applies the correct
     * sticky styles. Since checking resets the "dirty" state, this should only be performed once
     * during a change detection and after the inputs are settled (after content check).
     */
    /**
     * Checks if there has been a change in sticky states since last check and applies the correct
     * sticky styles. Since checking resets the "dirty" state, this should only be performed once
     * during a change detection and after the inputs are settled (after content check).
     * @private
     * @return {?}
     */
    CdkTable.prototype._checkStickyStates = /**
     * Checks if there has been a change in sticky states since last check and applies the correct
     * sticky styles. Since checking resets the "dirty" state, this should only be performed once
     * during a change detection and after the inputs are settled (after content check).
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var stickyCheckReducer = function (acc, d) {
            return acc || d.hasStickyChanged();
        };
        // Note that the check needs to occur for every definition since it notifies the definition
        // that it can reset its dirty state. Using another operator like `some` may short-circuit
        // remaining definitions and leave them in an unchecked state.
        if (this._headerRowDefs.reduce(stickyCheckReducer, false)) {
            this.updateStickyHeaderRowStyles();
        }
        if (this._footerRowDefs.reduce(stickyCheckReducer, false)) {
            this.updateStickyFooterRowStyles();
        }
        if (Array.from(this._columnDefsByName.values()).reduce(stickyCheckReducer, false)) {
            this.updateStickyColumnStyles();
        }
    };
    /**
     * Creates the sticky styler that will be used for sticky rows and columns. Listens
     * for directionality changes and provides the latest direction to the styler. Re-applies column
     * stickiness when directionality changes.
     */
    /**
     * Creates the sticky styler that will be used for sticky rows and columns. Listens
     * for directionality changes and provides the latest direction to the styler. Re-applies column
     * stickiness when directionality changes.
     * @private
     * @return {?}
     */
    CdkTable.prototype._setupStickyStyler = /**
     * Creates the sticky styler that will be used for sticky rows and columns. Listens
     * for directionality changes and provides the latest direction to the styler. Re-applies column
     * stickiness when directionality changes.
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var direction = this._dir ? this._dir.value : 'ltr';
        this._stickyStyler = new StickyStyler(this._isNativeHtmlTable, 
        // @breaking-change 8.0.0 remove the null check for `this._platform`.
        this.stickyCssClass, direction, this._platform ? this._platform.isBrowser : true);
        (this._dir ? this._dir.change : Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])())
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this._onDestroy))
            .subscribe(function (value) {
            _this._stickyStyler.direction = value;
            _this.updateStickyColumnStyles();
        });
    };
    CdkTable.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"], args: [{selector: 'cdk-table, table[cdk-table]',
                    exportAs: 'cdkTable',
                    template: CDK_TABLE_TEMPLATE,
                    host: {
                        'class': 'cdk-table',
                    },
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None,
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
                },] },
    ];
    /** @nocollapse */
    CdkTable.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["IterableDiffers"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] },
        { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Attribute"], args: ['role',] }] },
        { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__["Directionality"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"] }] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"],] }] },
        { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_8__["Platform"] }
    ]; };
    CdkTable.propDecorators = {
        trackBy: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        dataSource: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        multiTemplateDataRows: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        _rowOutlet: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: [DataRowOutlet,] }],
        _headerRowOutlet: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: [HeaderRowOutlet,] }],
        _footerRowOutlet: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: [FooterRowOutlet,] }],
        _contentColumnDefs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChildren"], args: [CdkColumnDef,] }],
        _contentRowDefs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChildren"], args: [CdkRowDef,] }],
        _contentHeaderRowDefs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChildren"], args: [CdkHeaderRowDef,] }],
        _contentFooterRowDefs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChildren"], args: [CdkFooterRowDef,] }]
    };
    return CdkTable;
}());
/**
 * Utility function that gets a merged list of the entries in a QueryList and values of a Set.
 * @template T
 * @param {?} queryList
 * @param {?} set
 * @return {?}
 */
function mergeQueryListAndSet(queryList, set) {
    return queryList.toArray().concat(Array.from(set));
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var EXPORTED_DECLARATIONS = [
    CdkTable,
    CdkRowDef,
    CdkCellDef,
    CdkCellOutlet,
    CdkHeaderCellDef,
    CdkFooterCellDef,
    CdkColumnDef,
    CdkCell,
    CdkRow,
    CdkHeaderCell,
    CdkFooterCell,
    CdkHeaderRow,
    CdkHeaderRowDef,
    CdkFooterRow,
    CdkFooterRowDef,
    DataRowOutlet,
    HeaderRowOutlet,
    FooterRowOutlet,
];
var CdkTableModule = /** @class */ (function () {
    function CdkTableModule() {
    }
    CdkTableModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"], args: [{
                    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"]],
                    exports: EXPORTED_DECLARATIONS,
                    declarations: EXPORTED_DECLARATIONS
                },] },
    ];
    return CdkTableModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


//# sourceMappingURL=table.es5.js.map


/***/ }),

/***/ "./node_modules/@angular/cdk/table/typings/index.ngfactory.js":
/*!********************************************************************!*\
  !*** ./node_modules/@angular/cdk/table/typings/index.ngfactory.js ***!
  \********************************************************************/
/*! exports provided: CdkTableModuleNgFactory, RenderType_CdkTable, View_CdkTable_0, View_CdkTable_Host_0, CdkTableNgFactory, RenderType_CdkHeaderRow, View_CdkHeaderRow_0, View_CdkHeaderRow_Host_0, CdkHeaderRowNgFactory, RenderType_CdkFooterRow, View_CdkFooterRow_0, View_CdkFooterRow_Host_0, CdkFooterRowNgFactory, RenderType_CdkRow, View_CdkRow_0, View_CdkRow_Host_0, CdkRowNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkTableModuleNgFactory", function() { return CdkTableModuleNgFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_CdkTable", function() { return RenderType_CdkTable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_CdkTable_0", function() { return View_CdkTable_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_CdkTable_Host_0", function() { return View_CdkTable_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkTableNgFactory", function() { return CdkTableNgFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_CdkHeaderRow", function() { return RenderType_CdkHeaderRow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_CdkHeaderRow_0", function() { return View_CdkHeaderRow_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_CdkHeaderRow_Host_0", function() { return View_CdkHeaderRow_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkHeaderRowNgFactory", function() { return CdkHeaderRowNgFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_CdkFooterRow", function() { return RenderType_CdkFooterRow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_CdkFooterRow_0", function() { return View_CdkFooterRow_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_CdkFooterRow_Host_0", function() { return View_CdkFooterRow_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkFooterRowNgFactory", function() { return CdkFooterRowNgFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_CdkRow", function() { return RenderType_CdkRow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_CdkRow_0", function() { return View_CdkRow_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_CdkRow_Host_0", function() { return View_CdkRow_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkRowNgFactory", function() { return CdkRowNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm5/table.es5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/bidi */ "./node_modules/@angular/cdk/esm5/bidi.es5.js");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/platform */ "./node_modules/@angular/cdk/esm5/platform.es5.js");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 





var CdkTableModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkTableModule"], [], function (_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, []], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_common_common_a"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkTableModule"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkTableModule"], [])]); });

var styles_CdkTable = [];
var RenderType_CdkTable = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 2, styles: styles_CdkTable, data: {} });

function View_CdkTable_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](2, [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](402653184, 1, { _rowOutlet: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](402653184, 2, { _headerRowOutlet: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](402653184, 3, { _footerRowOutlet: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵncd"](null, 0), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](4, 16777216, null, null, 1, null, null, null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](5, 16384, [[2, 4]], 0, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["HeaderRowOutlet"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](6, 16777216, null, null, 1, null, null, null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](7, 16384, [[1, 4]], 0, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["DataRowOutlet"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](8, 16777216, null, null, 1, null, null, null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](9, 16384, [[3, 4]], 0, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["FooterRowOutlet"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], null, null)], null, null); }
function View_CdkTable_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 5, "cdk-table", [["class", "cdk-table"]], null, null, null, View_CdkTable_0, RenderType_CdkTable)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 2342912, null, 4, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkTable"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], [8, null], [2, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__["Directionality"]], _angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 1, { _contentColumnDefs: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 2, { _contentRowDefs: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 3, { _contentHeaderRowDefs: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 4, { _contentFooterRowDefs: 1 })], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var CdkTableNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("cdk-table, table[cdk-table]", _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkTable"], View_CdkTable_Host_0, { trackBy: "trackBy", dataSource: "dataSource", multiTemplateDataRows: "multiTemplateDataRows" }, {}, ["caption"]);

var styles_CdkHeaderRow = [];
var RenderType_CdkHeaderRow = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 2, styles: styles_CdkHeaderRow, data: {} });

function View_CdkHeaderRow_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](2, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 16777216, null, null, 1, null, null, null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 147456, null, 0, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkCellOutlet"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]], null, null)], null, null); }
function View_CdkHeaderRow_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "cdk-header-row", [["class", "cdk-header-row"], ["role", "row"]], null, null, null, View_CdkHeaderRow_0, RenderType_CdkHeaderRow)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 49152, null, 0, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkHeaderRow"], [], null, null)], null, null); }
var CdkHeaderRowNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("cdk-header-row, tr[cdk-header-row]", _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkHeaderRow"], View_CdkHeaderRow_Host_0, {}, {}, []);

var styles_CdkFooterRow = [];
var RenderType_CdkFooterRow = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 2, styles: styles_CdkFooterRow, data: {} });

function View_CdkFooterRow_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](2, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 16777216, null, null, 1, null, null, null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 147456, null, 0, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkCellOutlet"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]], null, null)], null, null); }
function View_CdkFooterRow_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "cdk-footer-row", [["class", "cdk-footer-row"], ["role", "row"]], null, null, null, View_CdkFooterRow_0, RenderType_CdkFooterRow)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 49152, null, 0, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkFooterRow"], [], null, null)], null, null); }
var CdkFooterRowNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("cdk-footer-row, tr[cdk-footer-row]", _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkFooterRow"], View_CdkFooterRow_Host_0, {}, {}, []);

var styles_CdkRow = [];
var RenderType_CdkRow = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 2, styles: styles_CdkRow, data: {} });

function View_CdkRow_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](2, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 16777216, null, null, 1, null, null, null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 147456, null, 0, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkCellOutlet"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]], null, null)], null, null); }
function View_CdkRow_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "cdk-row", [["class", "cdk-row"], ["role", "row"]], null, null, null, View_CdkRow_0, RenderType_CdkRow)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 49152, null, 0, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkRow"], [], null, null)], null, null); }
var CdkRowNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("cdk-row, tr[cdk-row]", _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkRow"], View_CdkRow_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/application/crm/portfolio/data/portfolio.data-source.ts":
/*!*************************************************************************!*\
  !*** ./src/app/application/crm/portfolio/data/portfolio.data-source.ts ***!
  \*************************************************************************/
/*! exports provided: PortfollioDataSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfollioDataSource", function() { return PortfollioDataSource; });
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var PortfollioDataSource = /** @class */ (function (_super) {
    __extends(PortfollioDataSource, _super);
    function PortfollioDataSource(_portfolioService) {
        var _this = _super.call(this) || this;
        _this._portfolioService = _portfolioService;
        _this.portfolio$$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
        _this.loading$$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
        _this.pages$$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]({});
        _this.loading$ = _this.loading$$.asObservable();
        return _this;
    }
    PortfollioDataSource.prototype.connect = function (collectionViewer) {
        return this.portfolio$$.asObservable();
    };
    PortfollioDataSource.prototype.disconnect = function () {
        this.portfolio$$.complete();
        this.loading$$.complete();
    };
    PortfollioDataSource.prototype.getPages = function () {
        return this.pages$$.asObservable();
    };
    // loadPortfolio(useId: number, filter = '', sortDirection = 'asc', pageIndex = 0, pageSize = 3) {
    PortfollioDataSource.prototype.loadPortfolio = function (page, group) {
        var _this = this;
        if (page === void 0) { page = 1; }
        if (group === void 0) { group = 0; }
        this.loading$$.next(true);
        // this._portfolioService.getPortfolio(userID, filter, sortDirection, pageIndex, pageSize).
        this._portfolioService.getPortfolio(page, group).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function () { return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])([]); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["finalize"])(function () { return _this.loading$$.next(false); }))
            .subscribe(function (prospects) {
            console.log(prospects);
            _this.pages$$.next({ current: prospects.meta.current_page, last: prospects.meta.last_page });
            return _this.portfolio$$.next(prospects.data);
        });
    };
    return PortfollioDataSource;
}(_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_0__["DataSource"]));

/*
export class LessonsDataSource implements DataSource<Lesson> {

    private lessonsSubject = new BehaviorSubject<Lesson[]>([]);
    private loadingSubject = new BehaviorSubject<boolean>(false);

    public loading$ = this.loadingSubject.asObservable();

    constructor(private coursesService: CoursesService) {}

    connect(collectionViewer: CollectionViewer): Observable<Lesson[]> {
        return this.lessonsSubject.asObservable();
    }

    disconnect(collectionViewer: CollectionViewer): void {
        this.lessonsSubject.complete();
        this.loadingSubject.complete();
    }

    loadLessons(courseId: number, filter = '',
                sortDirection = 'asc', pageIndex = 0, pageSize = 3) {

        this.loadingSubject.next(true);

        this.coursesService.findLessons(courseId, filter, sortDirection,
            pageIndex, pageSize).pipe(
            catchError(() => of([])),
            finalize(() => this.loadingSubject.next(false))
        )
        .subscribe(lessons => this.lessonsSubject.next(lessons));
    }
}
  */


/***/ }),

/***/ "./src/app/application/crm/portfolio/portfolio-routing.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/application/crm/portfolio/portfolio-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: PortfolioRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioRoutingModule", function() { return PortfolioRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./portfolio/portfolio.component */ "./src/app/application/crm/portfolio/portfolio/portfolio.component.ts");


var routes = [
    {
        path: '',
        component: _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_1__["PortfolioComponent"],
        children: []
    },
];
var PortfolioRoutingModule = /** @class */ (function () {
    function PortfolioRoutingModule() {
    }
    return PortfolioRoutingModule;
}());

/*
  {
    outlet: 'handlebar',
    path: ':id',
    component: HandlebarComponent,
  },
  */


/***/ }),

/***/ "./src/app/application/crm/portfolio/portfolio.module.ngfactory.js":
/*!*************************************************************************!*\
  !*** ./src/app/application/crm/portfolio/portfolio.module.ngfactory.js ***!
  \*************************************************************************/
/*! exports provided: PortfolioModuleNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioModuleNgFactory", function() { return PortfolioModuleNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _portfolio_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./portfolio.module */ "./src/app/application/crm/portfolio/portfolio.module.ts");
/* harmony import */ var _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/@angular/router/router.ngfactory */ "./node_modules/@angular/router/router.ngfactory.js");
/* harmony import */ var _portfolio_portfolio_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./portfolio/portfolio.component.ngfactory */ "./src/app/application/crm/portfolio/portfolio/portfolio.component.ngfactory.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _modules_pipes_typograph_typograph_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../modules/pipes/typograph/typograph.pipe */ "./src/app/modules/pipes/typograph/typograph.pipe.ts");
/* harmony import */ var _modules_pipes_custom_date_rosa_date_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../modules/pipes/custom-date/rosa-date.pipe */ "./src/app/modules/pipes/custom-date/rosa-date.pipe.ts");
/* harmony import */ var _services_portfolio_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/portfolio.service */ "./src/app/application/crm/portfolio/services/portfolio.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _portfolio_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./portfolio-routing.module */ "./src/app/application/crm/portfolio/portfolio-routing.module.ts");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm5/table.es5.js");
/* harmony import */ var _modules_data_list_list_header_cell_list_header_cell_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../modules/data-list/list-header-cell/list-header-cell.module */ "./src/app/modules/data-list/list-header-cell/list-header-cell.module.ts");
/* harmony import */ var _modules_data_list_list_body_cell_list_body_cell_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../modules/data-list/list-body-cell/list-body-cell.module */ "./src/app/modules/data-list/list-body-cell/list-body-cell.module.ts");
/* harmony import */ var _modules_data_list_data_list_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../modules/data-list/data-list.module */ "./src/app/modules/data-list/data-list.module.ts");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/cdk/bidi */ "./node_modules/@angular/cdk/esm5/bidi.es5.js");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/cdk/platform */ "./node_modules/@angular/cdk/esm5/platform.es5.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm5/scrolling.es5.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var ngx_scrollbar__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ngx-scrollbar */ "./node_modules/ngx-scrollbar/fesm5/ngx-scrollbar.js");
/* harmony import */ var _modules_layout_header_header_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../modules/layout/header/header.module */ "./src/app/modules/layout/header/header.module.ts");
/* harmony import */ var _modules_layout_sidebar_sidebar_module__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../modules/layout/sidebar/sidebar.module */ "./src/app/modules/layout/sidebar/sidebar.module.ts");
/* harmony import */ var _modules_layout_handlebar_handlebar_module__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../modules/layout/handlebar/handlebar.module */ "./src/app/modules/layout/handlebar/handlebar.module.ts");
/* harmony import */ var _modules_layout_layout_module__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../../modules/layout/layout.module */ "./src/app/modules/layout/layout.module.ts");
/* harmony import */ var _modules_navigation_sidebar_item_sidebar_item_module__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../../modules/navigation/sidebar-item/sidebar-item.module */ "./src/app/modules/navigation/sidebar-item/sidebar-item.module.ts");
/* harmony import */ var _modules_navigation_sidebar_link_sidebar_link_module__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../../modules/navigation/sidebar-link/sidebar-link.module */ "./src/app/modules/navigation/sidebar-link/sidebar-link.module.ts");
/* harmony import */ var _modules_navigation_sidebar_button_sidebar_button_module__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../../modules/navigation/sidebar-button/sidebar-button.module */ "./src/app/modules/navigation/sidebar-button/sidebar-button.module.ts");
/* harmony import */ var _modules_buttons_pagination_pagination_module__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../../modules/buttons/pagination/pagination.module */ "./src/app/modules/buttons/pagination/pagination.module.ts");
/* harmony import */ var _modules_pipes_typograph_typograph_module__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../../../modules/pipes/typograph/typograph.module */ "./src/app/modules/pipes/typograph/typograph.module.ts");
/* harmony import */ var _modules_pipes_custom_date_custom_date_module__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../../../modules/pipes/custom-date/custom-date.module */ "./src/app/modules/pipes/custom-date/custom-date.module.ts");
/* harmony import */ var _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./portfolio/portfolio.component */ "./src/app/application/crm/portfolio/portfolio/portfolio.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 































var PortfolioModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_portfolio_module__WEBPACK_IMPORTED_MODULE_1__["PortfolioModule"], [], function (_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, [_node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ɵEmptyOutletComponentNgFactory"], _portfolio_portfolio_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["PortfolioComponentNgFactory"]]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_common_common_a"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _modules_pipes_typograph_typograph_pipe__WEBPACK_IMPORTED_MODULE_5__["TypographPipe"], _modules_pipes_typograph_typograph_pipe__WEBPACK_IMPORTED_MODULE_5__["TypographPipe"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _modules_pipes_custom_date_rosa_date_pipe__WEBPACK_IMPORTED_MODULE_6__["RosaDatePipe"], _modules_pipes_custom_date_rosa_date_pipe__WEBPACK_IMPORTED_MODULE_6__["RosaDatePipe"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _services_portfolio_service__WEBPACK_IMPORTED_MODULE_7__["PortfolioService"], _services_portfolio_service__WEBPACK_IMPORTED_MODULE_7__["PortfolioService"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"], [[2, _angular_router__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_router_router_a"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _portfolio_routing_module__WEBPACK_IMPORTED_MODULE_10__["PortfolioRoutingModule"], _portfolio_routing_module__WEBPACK_IMPORTED_MODULE_10__["PortfolioRoutingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_11__["CdkTableModule"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_11__["CdkTableModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _modules_data_list_list_header_cell_list_header_cell_module__WEBPACK_IMPORTED_MODULE_12__["ListHeaderCellModule"], _modules_data_list_list_header_cell_list_header_cell_module__WEBPACK_IMPORTED_MODULE_12__["ListHeaderCellModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _modules_data_list_list_body_cell_list_body_cell_module__WEBPACK_IMPORTED_MODULE_13__["ListBodyCellModule"], _modules_data_list_list_body_cell_list_body_cell_module__WEBPACK_IMPORTED_MODULE_13__["ListBodyCellModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _modules_data_list_data_list_module__WEBPACK_IMPORTED_MODULE_14__["DataListModule"], _modules_data_list_data_list_module__WEBPACK_IMPORTED_MODULE_14__["DataListModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_15__["BidiModule"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_15__["BidiModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_16__["PlatformModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_16__["PlatformModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_17__["ScrollingModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_17__["ScrollingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_18__["LayoutModule"], _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_18__["LayoutModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ngx_scrollbar__WEBPACK_IMPORTED_MODULE_19__["SmoothScrollModule"], ngx_scrollbar__WEBPACK_IMPORTED_MODULE_19__["SmoothScrollModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ngx_scrollbar__WEBPACK_IMPORTED_MODULE_19__["NgScrollbarModule"], ngx_scrollbar__WEBPACK_IMPORTED_MODULE_19__["NgScrollbarModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _modules_layout_header_header_module__WEBPACK_IMPORTED_MODULE_20__["HeaderModule"], _modules_layout_header_header_module__WEBPACK_IMPORTED_MODULE_20__["HeaderModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _modules_layout_sidebar_sidebar_module__WEBPACK_IMPORTED_MODULE_21__["SidebarModule"], _modules_layout_sidebar_sidebar_module__WEBPACK_IMPORTED_MODULE_21__["SidebarModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _modules_layout_handlebar_handlebar_module__WEBPACK_IMPORTED_MODULE_22__["HandlebarModule"], _modules_layout_handlebar_handlebar_module__WEBPACK_IMPORTED_MODULE_22__["HandlebarModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _modules_layout_layout_module__WEBPACK_IMPORTED_MODULE_23__["LayoutModule"], _modules_layout_layout_module__WEBPACK_IMPORTED_MODULE_23__["LayoutModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _modules_navigation_sidebar_item_sidebar_item_module__WEBPACK_IMPORTED_MODULE_24__["SidebarItemModule"], _modules_navigation_sidebar_item_sidebar_item_module__WEBPACK_IMPORTED_MODULE_24__["SidebarItemModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _modules_navigation_sidebar_link_sidebar_link_module__WEBPACK_IMPORTED_MODULE_25__["SidebarLinkModule"], _modules_navigation_sidebar_link_sidebar_link_module__WEBPACK_IMPORTED_MODULE_25__["SidebarLinkModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _modules_navigation_sidebar_button_sidebar_button_module__WEBPACK_IMPORTED_MODULE_26__["SidebarButtonModule"], _modules_navigation_sidebar_button_sidebar_button_module__WEBPACK_IMPORTED_MODULE_26__["SidebarButtonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _modules_buttons_pagination_pagination_module__WEBPACK_IMPORTED_MODULE_27__["PaginationModule"], _modules_buttons_pagination_pagination_module__WEBPACK_IMPORTED_MODULE_27__["PaginationModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _modules_pipes_typograph_typograph_module__WEBPACK_IMPORTED_MODULE_28__["TypographModule"], _modules_pipes_typograph_typograph_module__WEBPACK_IMPORTED_MODULE_28__["TypographModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _modules_pipes_custom_date_custom_date_module__WEBPACK_IMPORTED_MODULE_29__["CustomDateModule"], _modules_pipes_custom_date_custom_date_module__WEBPACK_IMPORTED_MODULE_29__["CustomDateModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _portfolio_module__WEBPACK_IMPORTED_MODULE_1__["PortfolioModule"], _portfolio_module__WEBPACK_IMPORTED_MODULE_1__["PortfolioModule"], [_angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_9__["ROUTES"], function () { return [[{ path: "", component: _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_30__["PortfolioComponent"], children: [] }]]; }, [])]); });



/***/ }),

/***/ "./src/app/application/crm/portfolio/portfolio.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/application/crm/portfolio/portfolio.module.ts ***!
  \***************************************************************/
/*! exports provided: PortfolioModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioModule", function() { return PortfolioModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");

var PortfolioModule = /** @class */ (function () {
    function PortfolioModule(router) {
    }
    return PortfolioModule;
}());



/***/ }),

/***/ "./src/app/application/crm/portfolio/portfolio/portfolio.component.ngfactory.js":
/*!**************************************************************************************!*\
  !*** ./src/app/application/crm/portfolio/portfolio/portfolio.component.ngfactory.js ***!
  \**************************************************************************************/
/*! exports provided: RenderType_PortfolioComponent, View_PortfolioComponent_0, View_PortfolioComponent_Host_0, PortfolioComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_PortfolioComponent", function() { return RenderType_PortfolioComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_PortfolioComponent_0", function() { return View_PortfolioComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_PortfolioComponent_Host_0", function() { return View_PortfolioComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioComponentNgFactory", function() { return PortfolioComponentNgFactory; });
/* harmony import */ var _portfolio_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./portfolio.component.scss.shim.ngstyle */ "./src/app/application/crm/portfolio/portfolio/portfolio.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm5/table.es5.js");
/* harmony import */ var _modules_data_list_list_header_cell_list_header_cell_list_header_cell_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../modules/data-list/list-header-cell/list-header-cell/list-header-cell.component.ngfactory */ "./src/app/modules/data-list/list-header-cell/list-header-cell/list-header-cell.component.ngfactory.js");
/* harmony import */ var _modules_data_list_list_header_cell_list_header_cell_list_header_cell_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../modules/data-list/list-header-cell/list-header-cell/list-header-cell.component */ "./src/app/modules/data-list/list-header-cell/list-header-cell/list-header-cell.component.ts");
/* harmony import */ var _modules_data_list_list_body_cell_list_body_cell_list_body_cell_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../modules/data-list/list-body-cell/list-body-cell/list-body-cell.component.ngfactory */ "./src/app/modules/data-list/list-body-cell/list-body-cell/list-body-cell.component.ngfactory.js");
/* harmony import */ var _modules_data_list_list_body_cell_list_body_cell_list_body_cell_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../modules/data-list/list-body-cell/list-body-cell/list-body-cell.component */ "./src/app/modules/data-list/list-body-cell/list-body-cell/list-body-cell.component.ts");
/* harmony import */ var _node_modules_angular_cdk_table_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../node_modules/@angular/cdk/table/typings/index.ngfactory */ "./node_modules/@angular/cdk/table/typings/index.ngfactory.js");
/* harmony import */ var _modules_buttons_pagination_pagination_pagination_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../modules/buttons/pagination/pagination/pagination.component.ngfactory */ "./src/app/modules/buttons/pagination/pagination/pagination.component.ngfactory.js");
/* harmony import */ var _modules_buttons_pagination_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../modules/buttons/pagination/pagination/pagination.component */ "./src/app/modules/buttons/pagination/pagination/pagination.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _modules_pipes_typograph_typograph_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../modules/pipes/typograph/typograph.pipe */ "./src/app/modules/pipes/typograph/typograph.pipe.ts");
/* harmony import */ var _modules_pipes_custom_date_rosa_date_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../modules/pipes/custom-date/rosa-date.pipe */ "./src/app/modules/pipes/custom-date/rosa-date.pipe.ts");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/cdk/bidi */ "./node_modules/@angular/cdk/esm5/bidi.es5.js");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/cdk/platform */ "./node_modules/@angular/cdk/esm5/platform.es5.js");
/* harmony import */ var _portfolio_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./portfolio.component */ "./src/app/application/crm/portfolio/portfolio/portfolio.component.ts");
/* harmony import */ var _services_portfolio_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../services/portfolio.service */ "./src/app/application/crm/portfolio/services/portfolio.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _state_state_portfolio_query__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../state/state/portfolio.query */ "./src/app/application/crm/portfolio/state/state/portfolio.query.ts");
/* harmony import */ var _state_state_portfoliostate_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../state/state/portfoliostate.service */ "./src/app/application/crm/portfolio/state/state/portfoliostate.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 




















var styles_PortfolioComponent = [_portfolio_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_PortfolioComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_PortfolioComponent, data: {} });

function View_PortfolioComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "h1", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["", ""]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = ((_co.state$ == null) ? null : _co.state$.name); _ck(_v, 1, 0, currVal_0); }); }
function View_PortfolioComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "cdk-header-cell", [["class", "col-padding cdk-header-cell"], ["role", "columnheader"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 16384, null, 0, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__["CdkHeaderCell"], [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__["CdkColumnDef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 1, "rosa-list-header-cell", [], null, null, null, _modules_data_list_list_header_cell_list_header_cell_list_header_cell_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_ListHeaderCellComponent_0"], _modules_data_list_list_header_cell_list_header_cell_list_header_cell_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_ListHeaderCellComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 114688, null, 0, _modules_data_list_list_header_cell_list_header_cell_list_header_cell_component__WEBPACK_IMPORTED_MODULE_4__["ListHeaderCellComponent"], [], null, null)], function (_ck, _v) { _ck(_v, 3, 0); }, null); }
function View_PortfolioComponent_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "cdk-cell", [["class", "col-padding cdk-cell"], ["role", "gridcell"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 16384, null, 0, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__["CdkCell"], [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__["CdkColumnDef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 1, "rosa-list-body-cell", [], null, null, null, _modules_data_list_list_body_cell_list_body_cell_list_body_cell_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_ListBodyCellComponent_0"], _modules_data_list_list_body_cell_list_body_cell_list_body_cell_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_ListBodyCellComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 114688, null, 0, _modules_data_list_list_body_cell_list_body_cell_list_body_cell_component__WEBPACK_IMPORTED_MODULE_6__["ListBodyCellComponent"], [], null, null)], function (_ck, _v) { _ck(_v, 3, 0); }, null); }
function View_PortfolioComponent_4(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "cdk-footer-cell", [["class", "cdk-footer-cell"], ["role", "gridcell"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 16384, null, 0, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__["CdkFooterCell"], [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__["CdkColumnDef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null)], null, null); }
function View_PortfolioComponent_5(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "cdk-header-cell", [["class", "col-valuation cdk-header-cell"], ["role", "columnheader"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 16384, null, 0, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__["CdkHeaderCell"], [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__["CdkColumnDef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 2, "rosa-list-header-cell", [], null, null, null, _modules_data_list_list_header_cell_list_header_cell_list_header_cell_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_ListHeaderCellComponent_0"], _modules_data_list_list_header_cell_list_header_cell_list_header_cell_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_ListHeaderCellComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 114688, null, 0, _modules_data_list_list_header_cell_list_header_cell_list_header_cell_component__WEBPACK_IMPORTED_MODULE_4__["ListHeaderCellComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\u0412\u0435\u0441"]))], function (_ck, _v) { _ck(_v, 3, 0); }, null); }
function View_PortfolioComponent_6(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "cdk-cell", [["class", "col-valuation cdk-cell"], ["role", "gridcell"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.onRowClicked(_v.context.$implicit) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 16384, null, 0, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__["CdkCell"], [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__["CdkColumnDef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 2, "rosa-list-body-cell", [], null, null, null, _modules_data_list_list_body_cell_list_body_cell_list_body_cell_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_ListBodyCellComponent_0"], _modules_data_list_list_body_cell_list_body_cell_list_body_cell_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_ListBodyCellComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 114688, null, 0, _modules_data_list_list_body_cell_list_body_cell_list_body_cell_component__WEBPACK_IMPORTED_MODULE_6__["ListBodyCellComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](4, 0, ["", ""]))], function (_ck, _v) { _ck(_v, 3, 0); }, function (_ck, _v) { var currVal_0 = _v.context.$implicit.valuation; _ck(_v, 4, 0, currVal_0); }); }
function View_PortfolioComponent_7(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "cdk-footer-cell", [["class", "cdk-footer-cell"], ["role", "gridcell"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 16384, null, 0, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__["CdkFooterCell"], [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__["CdkColumnDef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 2, "rosa-list-body-cell", [], null, null, null, _modules_data_list_list_body_cell_list_body_cell_list_body_cell_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_ListBodyCellComponent_0"], _modules_data_list_list_body_cell_list_body_cell_list_body_cell_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_ListBodyCellComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 114688, null, 0, _modules_data_list_list_body_cell_list_body_cell_list_body_cell_component__WEBPACK_IMPORTED_MODULE_6__["ListBodyCellComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\u0412\u0435\u0441"]))], function (_ck, _v) { _ck(_v, 3, 0); }, null); }
function View_PortfolioComponent_8(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "cdk-header-cell", [["class", "cdk-header-cell"], ["role", "columnheader"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 16384, null, 0, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__["CdkHeaderCell"], [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__["CdkColumnDef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 2, "rosa-list-header-cell", [], null, null, null, _modules_data_list_list_header_cell_list_header_cell_list_header_cell_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_ListHeaderCellComponent_0"], _modules_data_list_list_header_cell_list_header_cell_list_header_cell_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_ListHeaderCellComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 114688, null, 0, _modules_data_list_list_header_cell_list_header_cell_list_header_cell_component__WEBPACK_IMPORTED_MODULE_4__["ListHeaderCellComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\u041D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435"]))], function (_ck, _v) { _ck(_v, 3, 0); }, null); }
function View_PortfolioComponent_9(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 5, "cdk-cell", [["class", "cdk-cell"], ["role", "gridcell"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 16384, null, 0, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__["CdkCell"], [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__["CdkColumnDef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 3, "rosa-list-body-cell", [], null, null, null, _modules_data_list_list_body_cell_list_body_cell_list_body_cell_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_ListBodyCellComponent_0"], _modules_data_list_list_body_cell_list_body_cell_list_body_cell_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_ListBodyCellComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 114688, null, 0, _modules_data_list_list_body_cell_list_body_cell_list_body_cell_component__WEBPACK_IMPORTED_MODULE_6__["ListBodyCellComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](4, 0, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](5, 1)], function (_ck, _v) { _ck(_v, 3, 0); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 4, 0, _ck(_v, 5, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 0), _v.context.$implicit.name)); _ck(_v, 4, 0, currVal_0); }); }
function View_PortfolioComponent_10(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "cdk-footer-cell", [["class", "cdk-footer-cell"], ["role", "gridcell"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 16384, null, 0, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__["CdkFooterCell"], [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__["CdkColumnDef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null)], null, null); }
function View_PortfolioComponent_11(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "cdk-header-cell", [["class", "cdk-header-cell"], ["role", "columnheader"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 16384, null, 0, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__["CdkHeaderCell"], [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__["CdkColumnDef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 2, "rosa-list-header-cell", [], null, null, null, _modules_data_list_list_header_cell_list_header_cell_list_header_cell_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_ListHeaderCellComponent_0"], _modules_data_list_list_header_cell_list_header_cell_list_header_cell_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_ListHeaderCellComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 114688, null, 0, _modules_data_list_list_header_cell_list_header_cell_list_header_cell_component__WEBPACK_IMPORTED_MODULE_4__["ListHeaderCellComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\u0410\u043A\u0442\u0438\u0432\u043D\u043E\u0441\u0442\u044C"]))], function (_ck, _v) { _ck(_v, 3, 0); }, null); }
function View_PortfolioComponent_12(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 5, "cdk-cell", [["class", "cdk-cell"], ["role", "gridcell"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 16384, null, 0, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__["CdkCell"], [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__["CdkColumnDef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 3, "rosa-list-body-cell", [], null, null, null, _modules_data_list_list_body_cell_list_body_cell_list_body_cell_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_ListBodyCellComponent_0"], _modules_data_list_list_body_cell_list_body_cell_list_body_cell_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_ListBodyCellComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 114688, null, 0, _modules_data_list_list_body_cell_list_body_cell_list_body_cell_component__WEBPACK_IMPORTED_MODULE_6__["ListBodyCellComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](4, 0, ["", " ", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](5, 1)], function (_ck, _v) { _ck(_v, 3, 0); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 4, 0, _ck(_v, 5, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 1), ((_v.context.$implicit == null) ? null : _v.context.$implicit.activity_date))); var currVal_1 = ((_v.context.$implicit == null) ? null : _v.context.$implicit.activity_last); _ck(_v, 4, 0, currVal_0, currVal_1); }); }
function View_PortfolioComponent_13(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "cdk-footer-cell", [["class", "cdk-footer-cell"], ["role", "gridcell"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 16384, null, 0, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__["CdkFooterCell"], [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__["CdkColumnDef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null)], null, null); }
function View_PortfolioComponent_14(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "cdk-header-cell", [["class", "cdk-header-cell"], ["role", "columnheader"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 16384, null, 0, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__["CdkHeaderCell"], [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__["CdkColumnDef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 2, "rosa-list-header-cell", [], null, null, null, _modules_data_list_list_header_cell_list_header_cell_list_header_cell_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_ListHeaderCellComponent_0"], _modules_data_list_list_header_cell_list_header_cell_list_header_cell_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_ListHeaderCellComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 114688, null, 0, _modules_data_list_list_header_cell_list_header_cell_list_header_cell_component__WEBPACK_IMPORTED_MODULE_4__["ListHeaderCellComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, [" \u041E\u0442\u0440\u0430\u0441\u043B\u044C"]))], function (_ck, _v) { _ck(_v, 3, 0); }, null); }
function View_PortfolioComponent_15(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "cdk-cell", [["class", "cdk-cell"], ["role", "gridcell"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 16384, null, 0, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__["CdkCell"], [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__["CdkColumnDef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 2, "rosa-list-body-cell", [], null, null, null, _modules_data_list_list_body_cell_list_body_cell_list_body_cell_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_ListBodyCellComponent_0"], _modules_data_list_list_body_cell_list_body_cell_list_body_cell_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_ListBodyCellComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 114688, null, 0, _modules_data_list_list_body_cell_list_body_cell_list_body_cell_component__WEBPACK_IMPORTED_MODULE_6__["ListBodyCellComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](4, 0, ["", ""]))], function (_ck, _v) { _ck(_v, 3, 0); }, function (_ck, _v) { var currVal_0 = ((_v.context.$implicit == null) ? null : _v.context.$implicit.industry); _ck(_v, 4, 0, currVal_0); }); }
function View_PortfolioComponent_16(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "cdk-footer-cell", [["class", "cdk-footer-cell"], ["role", "gridcell"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 16384, null, 0, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__["CdkFooterCell"], [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__["CdkColumnDef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null)], null, null); }
function View_PortfolioComponent_17(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "cdk-header-cell", [["class", "cdk-header-cell"], ["role", "columnheader"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 16384, null, 0, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__["CdkHeaderCell"], [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__["CdkColumnDef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 2, "rosa-list-header-cell", [], null, null, null, _modules_data_list_list_header_cell_list_header_cell_list_header_cell_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_ListHeaderCellComponent_0"], _modules_data_list_list_header_cell_list_header_cell_list_header_cell_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_ListHeaderCellComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 114688, null, 0, _modules_data_list_list_header_cell_list_header_cell_list_header_cell_component__WEBPACK_IMPORTED_MODULE_4__["ListHeaderCellComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, [" \u0411\u0430\u043D\u043A"]))], function (_ck, _v) { _ck(_v, 3, 0); }, null); }
function View_PortfolioComponent_18(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 5, "cdk-cell", [["class", "cdk-cell"], ["role", "gridcell"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 16384, null, 0, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__["CdkCell"], [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__["CdkColumnDef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 3, "rosa-list-body-cell", [], null, null, null, _modules_data_list_list_body_cell_list_body_cell_list_body_cell_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_ListBodyCellComponent_0"], _modules_data_list_list_body_cell_list_body_cell_list_body_cell_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_ListBodyCellComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 114688, null, 0, _modules_data_list_list_body_cell_list_body_cell_list_body_cell_component__WEBPACK_IMPORTED_MODULE_6__["ListBodyCellComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](4, 0, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](5, 1)], function (_ck, _v) { _ck(_v, 3, 0); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 4, 0, _ck(_v, 5, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 0), ((_v.context.$implicit == null) ? null : _v.context.$implicit.bank_pro))); _ck(_v, 4, 0, currVal_0); }); }
function View_PortfolioComponent_19(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "cdk-footer-cell", [["class", "cdk-footer-cell"], ["role", "gridcell"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 16384, null, 0, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__["CdkFooterCell"], [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__["CdkColumnDef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null)], null, null); }
function View_PortfolioComponent_20(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "cdk-header-cell", [["class", "cdk-header-cell"], ["role", "columnheader"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 16384, null, 0, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__["CdkHeaderCell"], [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__["CdkColumnDef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 2, "rosa-list-header-cell", [], null, null, null, _modules_data_list_list_header_cell_list_header_cell_list_header_cell_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_ListHeaderCellComponent_0"], _modules_data_list_list_header_cell_list_header_cell_list_header_cell_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_ListHeaderCellComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 114688, null, 0, _modules_data_list_list_header_cell_list_header_cell_list_header_cell_component__WEBPACK_IMPORTED_MODULE_4__["ListHeaderCellComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\u0411\u044E\u0434\u0436\u0435\u0442"]))], function (_ck, _v) { _ck(_v, 3, 0); }, null); }
function View_PortfolioComponent_21(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 5, "cdk-cell", [["class", "cdk-cell"], ["role", "gridcell"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 16384, null, 0, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__["CdkCell"], [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__["CdkColumnDef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 3, "rosa-list-body-cell", [], null, null, null, _modules_data_list_list_body_cell_list_body_cell_list_body_cell_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_ListBodyCellComponent_0"], _modules_data_list_list_body_cell_list_body_cell_list_body_cell_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_ListBodyCellComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 114688, null, 0, _modules_data_list_list_body_cell_list_body_cell_list_body_cell_component__WEBPACK_IMPORTED_MODULE_6__["ListBodyCellComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](4, 0, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](5, 2)], function (_ck, _v) { _ck(_v, 3, 0); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 4, 0, _ck(_v, 5, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 2), ((_v.context.$implicit == null) ? null : _v.context.$implicit.budget_year), "RUB")); _ck(_v, 4, 0, currVal_0); }); }
function View_PortfolioComponent_22(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "cdk-footer-cell", [["class", "cdk-footer-cell"], ["role", "gridcell"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 16384, null, 0, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__["CdkFooterCell"], [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__["CdkColumnDef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null)], null, null); }
function View_PortfolioComponent_23(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "cdk-header-cell", [["class", "col-padding cdk-header-cell"], ["role", "columnheader"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 16384, null, 0, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__["CdkHeaderCell"], [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__["CdkColumnDef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 1, "rosa-list-header-cell", [], null, null, null, _modules_data_list_list_header_cell_list_header_cell_list_header_cell_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_ListHeaderCellComponent_0"], _modules_data_list_list_header_cell_list_header_cell_list_header_cell_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_ListHeaderCellComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 114688, null, 0, _modules_data_list_list_header_cell_list_header_cell_list_header_cell_component__WEBPACK_IMPORTED_MODULE_4__["ListHeaderCellComponent"], [], null, null)], function (_ck, _v) { _ck(_v, 3, 0); }, null); }
function View_PortfolioComponent_24(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "cdk-cell", [["class", "col-padding cdk-cell"], ["role", "gridcell"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 16384, null, 0, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__["CdkCell"], [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__["CdkColumnDef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 1, "rosa-list-body-cell", [], null, null, null, _modules_data_list_list_body_cell_list_body_cell_list_body_cell_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_ListBodyCellComponent_0"], _modules_data_list_list_body_cell_list_body_cell_list_body_cell_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_ListBodyCellComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 114688, null, 0, _modules_data_list_list_body_cell_list_body_cell_list_body_cell_component__WEBPACK_IMPORTED_MODULE_6__["ListBodyCellComponent"], [], null, null)], function (_ck, _v) { _ck(_v, 3, 0); }, null); }
function View_PortfolioComponent_25(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "cdk-footer-cell", [["class", "cdk-footer-cell"], ["role", "gridcell"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 16384, null, 0, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__["CdkFooterCell"], [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__["CdkColumnDef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null)], null, null); }
function View_PortfolioComponent_26(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "cdk-header-row", [["class", "cdk-header-row"], ["role", "row"]], null, null, null, _node_modules_angular_cdk_table_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["View_CdkHeaderRow_0"], _node_modules_angular_cdk_table_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["RenderType_CdkHeaderRow"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__["CdkHeaderRow"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 0, "div", [["class", "data-list-header"]], null, null, null, null, null))], null, null); }
function View_PortfolioComponent_27(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "cdk-row", [["class", "cdk-row"], ["role", "row"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.onRowClicked(_v.context.$implicit) !== false);
        ad = (pd_0 && ad);
    } return ad; }, _node_modules_angular_cdk_table_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["View_CdkRow_0"], _node_modules_angular_cdk_table_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["RenderType_CdkRow"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__["CdkRow"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 0, "div", [["class", "data-list-body"]], null, null, null, null, null))], null, null); }
function View_PortfolioComponent_29(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "rosa-pagination", [], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.loadPage((_v.context.index + 1), _co.state$.id) !== false);
        ad = (pd_0 && ad);
    } return ad; }, _modules_buttons_pagination_pagination_pagination_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__["View_PaginationComponent_0"], _modules_buttons_pagination_pagination_pagination_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__["RenderType_PaginationComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _modules_buttons_pagination_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_9__["PaginationComponent"], [], { isActive: [0, "isActive"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, 0, ["", ""]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = (_co.state$.current === (_v.context.index + 1)); _ck(_v, 1, 0, currVal_0); }, function (_ck, _v) { var currVal_1 = (_v.context.index + 1); _ck(_v, 2, 0, currVal_1); }); }
function View_PortfolioComponent_28(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "div", [["class", "pagination"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PortfolioComponent_29)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.pagesCount(_co.state$.pages); _ck(_v, 2, 0, currVal_0); }, null); }
function View_PortfolioComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](0, _modules_pipes_typograph_typograph_pipe__WEBPACK_IMPORTED_MODULE_11__["TypographPipe"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](0, _modules_pipes_custom_date_rosa_date_pipe__WEBPACK_IMPORTED_MODULE_12__["RosaDatePipe"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](0, _angular_common__WEBPACK_IMPORTED_MODULE_10__["CurrencyPipe"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 120, "div", [["class", "portfolio-wrapper portfolio-wrapper_with-sidebar"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 119, "div", [["class", "data-list__container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 118, "div", [["class", "data-list__body"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 8, "div", [["class", "page-header"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 5, "div", [["class", "breadcrumbs"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 1, "span", [["class", "breadcrumb"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\u041F\u0440\u043E\u0434\u0430\u0436\u0438"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 0, "div", [["class", "breadcrumb__arrows"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 1, "span", [["class", "breadcrumb"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](12, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PortfolioComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](14, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, null, 105, "cdk-table", [["class", "cdk-table"]], null, null, null, _node_modules_angular_cdk_table_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["View_CdkTable_0"], _node_modules_angular_cdk_table_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["RenderType_CdkTable"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](16, 2342912, null, 4, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__["CdkTable"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [8, null], [2, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_13__["Directionality"]], _angular_common__WEBPACK_IMPORTED_MODULE_10__["DOCUMENT"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_14__["Platform"]], { dataSource: [0, "dataSource"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 1, { _contentColumnDefs: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 2, { _contentRowDefs: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 3, { _contentHeaderRowDefs: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 4, { _contentFooterRowDefs: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](21, 0, null, null, 11, null, null, null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, "MAT_SORT_HEADER_COLUMN_DEF", null, [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__["CdkColumnDef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](23, 16384, [[1, 4]], 3, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__["CdkColumnDef"], [], { name: [0, "name"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 5, { cell: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 6, { headerCell: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 7, { footerCell: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 1, null, View_PortfolioComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](28, 16384, [[6, 4]], 0, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__["CdkHeaderCellDef"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 1, null, View_PortfolioComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](30, 16384, [[5, 4]], 0, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__["CdkCellDef"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 1, null, View_PortfolioComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](32, 16384, [[7, 4]], 0, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__["CdkFooterCellDef"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](33, 0, null, null, 11, null, null, null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, "MAT_SORT_HEADER_COLUMN_DEF", null, [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__["CdkColumnDef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](35, 16384, [[1, 4]], 3, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__["CdkColumnDef"], [], { name: [0, "name"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 8, { cell: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 9, { headerCell: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 10, { footerCell: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 1, null, View_PortfolioComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](40, 16384, [[9, 4]], 0, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__["CdkHeaderCellDef"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 1, null, View_PortfolioComponent_6)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](42, 16384, [[8, 4]], 0, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__["CdkCellDef"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 1, null, View_PortfolioComponent_7)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](44, 16384, [[10, 4]], 0, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__["CdkFooterCellDef"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](45, 0, null, null, 11, null, null, null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, "MAT_SORT_HEADER_COLUMN_DEF", null, [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__["CdkColumnDef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](47, 16384, [[1, 4]], 3, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__["CdkColumnDef"], [], { name: [0, "name"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 11, { cell: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 12, { headerCell: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 13, { footerCell: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 1, null, View_PortfolioComponent_8)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](52, 16384, [[12, 4]], 0, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__["CdkHeaderCellDef"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 1, null, View_PortfolioComponent_9)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](54, 16384, [[11, 4]], 0, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__["CdkCellDef"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 1, null, View_PortfolioComponent_10)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](56, 16384, [[13, 4]], 0, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__["CdkFooterCellDef"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](57, 0, null, null, 11, null, null, null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, "MAT_SORT_HEADER_COLUMN_DEF", null, [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__["CdkColumnDef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](59, 16384, [[1, 4]], 3, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__["CdkColumnDef"], [], { name: [0, "name"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 14, { cell: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 15, { headerCell: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 16, { footerCell: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 1, null, View_PortfolioComponent_11)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](64, 16384, [[15, 4]], 0, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__["CdkHeaderCellDef"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 1, null, View_PortfolioComponent_12)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](66, 16384, [[14, 4]], 0, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__["CdkCellDef"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 1, null, View_PortfolioComponent_13)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](68, 16384, [[16, 4]], 0, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__["CdkFooterCellDef"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](69, 0, null, null, 11, null, null, null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, "MAT_SORT_HEADER_COLUMN_DEF", null, [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__["CdkColumnDef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](71, 16384, [[1, 4]], 3, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__["CdkColumnDef"], [], { name: [0, "name"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 17, { cell: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 18, { headerCell: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 19, { footerCell: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 1, null, View_PortfolioComponent_14)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](76, 16384, [[18, 4]], 0, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__["CdkHeaderCellDef"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 1, null, View_PortfolioComponent_15)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](78, 16384, [[17, 4]], 0, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__["CdkCellDef"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 1, null, View_PortfolioComponent_16)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](80, 16384, [[19, 4]], 0, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__["CdkFooterCellDef"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](81, 0, null, null, 11, null, null, null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, "MAT_SORT_HEADER_COLUMN_DEF", null, [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__["CdkColumnDef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](83, 16384, [[1, 4]], 3, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__["CdkColumnDef"], [], { name: [0, "name"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 20, { cell: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 21, { headerCell: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 22, { footerCell: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 1, null, View_PortfolioComponent_17)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](88, 16384, [[21, 4]], 0, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__["CdkHeaderCellDef"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 1, null, View_PortfolioComponent_18)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](90, 16384, [[20, 4]], 0, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__["CdkCellDef"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 1, null, View_PortfolioComponent_19)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](92, 16384, [[22, 4]], 0, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__["CdkFooterCellDef"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](93, 0, null, null, 11, null, null, null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, "MAT_SORT_HEADER_COLUMN_DEF", null, [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__["CdkColumnDef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](95, 16384, [[1, 4]], 3, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__["CdkColumnDef"], [], { name: [0, "name"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 23, { cell: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 24, { headerCell: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 25, { footerCell: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 1, null, View_PortfolioComponent_20)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](100, 16384, [[24, 4]], 0, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__["CdkHeaderCellDef"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 1, null, View_PortfolioComponent_21)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](102, 16384, [[23, 4]], 0, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__["CdkCellDef"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 1, null, View_PortfolioComponent_22)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](104, 16384, [[25, 4]], 0, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__["CdkFooterCellDef"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](105, 0, null, null, 11, null, null, null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, "MAT_SORT_HEADER_COLUMN_DEF", null, [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__["CdkColumnDef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](107, 16384, [[1, 4]], 3, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__["CdkColumnDef"], [], { name: [0, "name"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 26, { cell: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 27, { headerCell: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 28, { footerCell: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 1, null, View_PortfolioComponent_23)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](112, 16384, [[27, 4]], 0, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__["CdkHeaderCellDef"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 1, null, View_PortfolioComponent_24)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](114, 16384, [[26, 4]], 0, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__["CdkCellDef"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 1, null, View_PortfolioComponent_25)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](116, 16384, [[28, 4]], 0, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__["CdkFooterCellDef"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 1, null, View_PortfolioComponent_26)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](118, 540672, [[3, 4]], 0, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__["CdkHeaderRowDef"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { columns: [0, "columns"], sticky: [1, "sticky"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 1, null, View_PortfolioComponent_27)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](120, 540672, [[2, 4]], 0, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__["CdkRowDef"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { columns: [0, "columns"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](121, 0, null, null, 2, "div", [["class", "footer"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PortfolioComponent_28)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](123, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_1 = _co.state$; _ck(_v, 14, 0, currVal_1); var currVal_2 = _co.dataSource; _ck(_v, 16, 0, currVal_2); var currVal_3 = "padding-left"; _ck(_v, 23, 0, currVal_3); var currVal_4 = "valuation"; _ck(_v, 35, 0, currVal_4); var currVal_5 = "name"; _ck(_v, 47, 0, currVal_5); var currVal_6 = "activity"; _ck(_v, 59, 0, currVal_6); var currVal_7 = "industry"; _ck(_v, 71, 0, currVal_7); var currVal_8 = "bank"; _ck(_v, 83, 0, currVal_8); var currVal_9 = "budget"; _ck(_v, 95, 0, currVal_9); var currVal_10 = "padding-right"; _ck(_v, 107, 0, currVal_10); var currVal_11 = _co.displayedColumns; var currVal_12 = true; _ck(_v, 118, 0, currVal_11, currVal_12); var currVal_13 = _co.displayedColumns; _ck(_v, 120, 0, currVal_13); var currVal_14 = _co.state$; _ck(_v, 123, 0, currVal_14); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = ((_co.state$ == null) ? null : _co.state$.name); _ck(_v, 12, 0, currVal_0); }); }
function View_PortfolioComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "rosa-portfolio", [], null, null, null, View_PortfolioComponent_0, RenderType_PortfolioComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _portfolio_component__WEBPACK_IMPORTED_MODULE_15__["PortfolioComponent"], [_services_portfolio_service__WEBPACK_IMPORTED_MODULE_16__["PortfolioService"], _angular_router__WEBPACK_IMPORTED_MODULE_17__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_17__["ActivatedRoute"], _state_state_portfolio_query__WEBPACK_IMPORTED_MODULE_18__["PortfolioQuery"], _state_state_portfoliostate_service__WEBPACK_IMPORTED_MODULE_19__["PortfoliostateService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var PortfolioComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("rosa-portfolio", _portfolio_component__WEBPACK_IMPORTED_MODULE_15__["PortfolioComponent"], View_PortfolioComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/application/crm/portfolio/portfolio/portfolio.component.scss.shim.ngstyle.js":
/*!**********************************************************************************************!*\
  !*** ./src/app/application/crm/portfolio/portfolio/portfolio.component.scss.shim.ngstyle.js ***!
  \**********************************************************************************************/
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
var styles = [".global-container[_ngcontent-%COMP%] {\n  min-width: 13; }\n\n@media (max-width: 1440px) {\n  .container[_ngcontent-%COMP%] {\n    width: 1152px;\n    margin: 0 auto;\n    position: relative;\n    padding: 0 12px; } }\n\n@media (max-width: 1680px) {\n  .container[_ngcontent-%COMP%] {\n    width: 1344px;\n    margin: 0 auto;\n    position: relative;\n    padding: 0 12px; } }\n\n@media (min-width: 1920px) {\n  .container[_ngcontent-%COMP%] {\n    width: 1632px;\n    margin: 0 auto;\n    position: relative;\n    padding: 0 12px; } }\n\n.rosa-grid-1[_ngcontent-%COMP%] {\n  width: 8.33333333%; }\n\n.rosa-grid-2[_ngcontent-%COMP%] {\n  width: 16.66666667%; }\n\n.rosa-grid-3[_ngcontent-%COMP%] {\n  width: 25%; }\n\n.rosa-grid-4[_ngcontent-%COMP%] {\n  width: 33.33333333%; }\n\n.rosa-grid-5[_ngcontent-%COMP%] {\n  width: 41.66666667%; }\n\n.rosa-grid-6[_ngcontent-%COMP%] {\n  width: 50%; }\n\n.rosa-grid-7[_ngcontent-%COMP%] {\n  width: 58.33333333%; }\n\n.rosa-grid-8[_ngcontent-%COMP%] {\n  width: 66.66666667%; }\n\n.rosa-grid-9[_ngcontent-%COMP%] {\n  width: 75%; }\n\n.rosa-grid-10[_ngcontent-%COMP%] {\n  width: 83.33333333%; }\n\n.rosa-grid-11[_ngcontent-%COMP%] {\n  width: 91.66666667%; }\n\n.rosa-grid-12[_ngcontent-%COMP%] {\n  width: 100%; }\n\n.data-list__container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%; }\n\n.data-list__body[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  height: calc(100vh - 80px);\n  overflow-x: hidden;\n  overflow-y: auto;\n  background-color: #FFF;\n  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.16), 0 0 1px 0 rgba(0, 0, 0, 0.16);\n  border-radius: 3px; }\n\n.cdk-column-budget[_ngcontent-%COMP%] {\n  text-align: right; }\n\n.cdk-header-row[_ngcontent-%COMP%], .cdk-row[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #e5e5e5; }\n\n.data-list-header[_ngcontent-%COMP%], .data-list-body[_ngcontent-%COMP%], .cdk-header-row[_ngcontent-%COMP%], .cdk-row[_ngcontent-%COMP%] {\n  position: relative;\n  background-color: #FFF;\n  width: 100%;\n  height: auto;\n  display: grid;\n  grid-template-columns: 20px 20.83333333% 64px 20.83333333% 12.5% 25% 12.5% 20px; }\n\n.list-toggle[_ngcontent-%COMP%] {\n  padding: 0;\n  border: none;\n  font-family: inherit;\n  color: inherit;\n  background-color: transparent;\n  cursor: pointer;\n  font-size: 12px;\n  line-height: 20px;\n  display: inline-block;\n  letter-spacing: .2px;\n  font-weight: 500;\n  color: var(--color-typo-secondary);\n  text-align: left;\n  text-transform: lowercase;\n  outline: none !important;\n  transition: all .3s ease-in; }\n\n.list-toggle[_ngcontent-%COMP%]:hover {\n    color: var(--color-primary);\n    outline: none !important; }\n\n.list-toggle[_ngcontent-%COMP%]:hover   svg[_ngcontent-%COMP%]   g[_ngcontent-%COMP%] {\n      stroke: var(--color-primary); }\n\n.list-toggle[_ngcontent-%COMP%]:active, .list-toggle[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:focus {\n    outline: none !important; }\n\n.list-toggle[_ngcontent-%COMP%]   .list-toggle__inner[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center; }\n\n.list-toggle[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n    margin-right: 4px;\n    display: inline-block;\n    margin-top: 3px; }\n\n.list-toggle[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   g[_ngcontent-%COMP%] {\n      transition: all .3s ease-in;\n      stroke: var(--color-typo-tertiary); }\n\n.cdk-row[_ngcontent-%COMP%]:hover {\n  background-color: #f5f5f5; }\n\n.cdk-row__active[_ngcontent-%COMP%] {\n  background-color: #f2f2f2; }\n\n.col-valuation[_ngcontent-%COMP%]     .list-body-cell {\n  justify-content: center; }\n\n.col-valuation[_ngcontent-%COMP%]     .list-body-cell span {\n    background-color: #e8ebeb;\n    border-radius: 3px;\n    margin: auto;\n    line-height: 24px !important;\n    width: 24px !important;\n    text-align: center; }\n\n.col-valuation[_ngcontent-%COMP%]     .list-header-cell {\n  justify-content: center; }\n\n.cdk-column-name[_ngcontent-%COMP%]     .list-body-cell span {\n  font-weight: 500 !important; }\n\n.cdk-column-budget[_ngcontent-%COMP%]     .list-body-cell, .cdk-column-budget[_ngcontent-%COMP%]     .list-header-cell {\n  justify-content: flex-end;\n  font-variant-numeric: tabular-nums; }\n\n.footer[_ngcontent-%COMP%] {\n  bottom: 0px;\n  position: -webkit-sticky;\n  position: sticky;\n  z-index: 100;\n  background-color: #FFF;\n  border-top: 1px solid #d4d4d4;\n  width: 100%;\n  height: 48px;\n  display: flex;\n  justify-content: flex-end;\n  padding: 0 24px 0 32px; }\n\n.pagination[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 8px 0;\n  flex-wrap: wrap;\n  align-items: center; }\n\n.page-header[_ngcontent-%COMP%] {\n  background-color: #FFF;\n  border-bottom: 1px solid var(--color-line);\n  border-radius: 3px 3px 0 0;\n  padding: 16px 20px 12px 24px; }\n\n.page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 18px;\n    line-height: 28px;\n    font-weight: 600;\n    margin: 0;\n    color: var(--color-typo-primary);\n    margin-bottom: 4px; }\n\n.data-list__border-mask[_ngcontent-%COMP%] {\n  border-radius: 3px;\n  overflow: hidden; }\n\n.handlebar-zone[_ngcontent-%COMP%] {\n  position: fixed;\n  right: 0;\n  top: 56px;\n  z-index: 100; }\n\n.breadcrumbs[_ngcontent-%COMP%] {\n  display: flex;\n  margin-bottom: 4px; }\n\n.breadcrumb[_ngcontent-%COMP%] {\n  font-size: 12px;\n  line-height: 20px;\n  margin: 0;\n  color: #666; }\n\n.breadcrumb__arrow[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  margin-top: 3px;\n  margin-right: 2px; }\n\n.breadcrumb__arrow[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n    fill: #666; }"];



/***/ }),

/***/ "./src/app/application/crm/portfolio/portfolio/portfolio.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/application/crm/portfolio/portfolio/portfolio.component.ts ***!
  \****************************************************************************/
/*! exports provided: PortfolioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioComponent", function() { return PortfolioComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _services_portfolio_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/portfolio.service */ "./src/app/application/crm/portfolio/services/portfolio.service.ts");
/* harmony import */ var _data_portfolio_data_source__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data/portfolio.data-source */ "./src/app/application/crm/portfolio/data/portfolio.data-source.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _state_state_portfolio_query__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../state/state/portfolio.query */ "./src/app/application/crm/portfolio/state/state/portfolio.query.ts");
/* harmony import */ var _state_state_portfoliostate_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../state/state/portfoliostate.service */ "./src/app/application/crm/portfolio/state/state/portfoliostate.service.ts");







var PortfolioComponent = /** @class */ (function () {
    function PortfolioComponent(_portfolioService, _router, _route, _portfolioQuery, _stateService) {
        this._portfolioService = _portfolioService;
        this._router = _router;
        this._route = _route;
        this._portfolioQuery = _portfolioQuery;
        this._stateService = _stateService;
        this.displayedColumns = ['padding-left', 'name', 'valuation', 'activity', 'budget', 'industry', 'bank', 'padding-right'];
        this.state$ = {};
        this.pageName = "\u041C\u043E\u0439 \u043F\u043E\u0440\u0442\u0444\u0435\u043B\u044C";
        this.showHandle = false;
    }
    PortfolioComponent.prototype.pagesCount = function (n) {
        return Array(n);
    };
    PortfolioComponent.prototype.ngOnInit = function () {
        this.dataSource = new _data_portfolio_data_source__WEBPACK_IMPORTED_MODULE_3__["PortfollioDataSource"](this._portfolioService);
        this.loadPage();
        this.setState({ pages: 0, current: 0, name: 'Мой портфель', id: 0 });
        this.groups$ = this._portfolioService.getGroups();
        this.getState();
    };
    PortfolioComponent.prototype.setState = function (state) {
        this._stateService.add(state);
    };
    PortfolioComponent.prototype.getState = function () {
        var _this = this;
        this._portfolioQuery.portfolioState$.subscribe(function (data) { return _this.state$ = data; }, function (err) { return console.log(err); });
    };
    PortfolioComponent.prototype.onRowClicked = function (row) {
        this._router.navigate(["/crm/client/" + row.id]);
    };
    PortfolioComponent.prototype.loadPage = function (page, group, groupName) {
        var _this = this;
        if (page === void 0) { page = 1; }
        if (group === void 0) { group = 0; }
        var pageName = groupName ? groupName : "\u041C\u043E\u0439 \u043F\u043E\u0440\u0442\u0444\u0435\u043B\u044C";
        var id = group ? group : 0;
        this.dataSource.loadPortfolio(page, group);
        this.dataSource.getPages().subscribe(function (data) { _this.setState({ pages: data.last, current: data.current, name: pageName, id: id }), _this.getState(); }, function (err) { return console.log(err); });
        if (groupName) {
            this.pageName = groupName;
        }
    };
    return PortfolioComponent;
}());



/***/ }),

/***/ "./src/app/application/crm/portfolio/state/state/portfolio.query.ts":
/*!**************************************************************************!*\
  !*** ./src/app/application/crm/portfolio/state/state/portfolio.query.ts ***!
  \**************************************************************************/
/*! exports provided: PortfolioQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioQuery", function() { return PortfolioQuery; });
/* harmony import */ var _datorama_akita__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @datorama/akita */ "./node_modules/@datorama/akita/fesm5/datorama-akita.js");
/* harmony import */ var _portfolio_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./portfolio.store */ "./src/app/application/crm/portfolio/state/state/portfolio.store.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var PortfolioQuery = /** @class */ (function (_super) {
    __extends(PortfolioQuery, _super);
    function PortfolioQuery(store) {
        var _this = _super.call(this, store) || this;
        _this.store = store;
        _this.portfolioState$ = _this.select(function (state) { return state; });
        _this.pages$ = _this.select(function (state) { return state.pages; });
        _this.current$ = _this.select(function (state) { return state.current; });
        _this.name$ = _this.select(function (state) { return state.name; });
        _this.groupId$ = _this.select(function (state) { return state.id; });
        return _this;
    }
    PortfolioQuery.prototype.add = function (state) {
        this.store.update(state);
    };
    PortfolioQuery.ngInjectableDef = _angular_core__WEBPACK_IMPORTED_MODULE_2__["defineInjectable"]({ factory: function PortfolioQuery_Factory() { return new PortfolioQuery(_angular_core__WEBPACK_IMPORTED_MODULE_2__["inject"](_portfolio_store__WEBPACK_IMPORTED_MODULE_1__["PortfolioStore"])); }, token: PortfolioQuery, providedIn: "root" });
    return PortfolioQuery;
}(_datorama_akita__WEBPACK_IMPORTED_MODULE_0__["Query"]));



/***/ }),

/***/ "./src/app/application/crm/portfolio/state/state/portfolio.store.ts":
/*!**************************************************************************!*\
  !*** ./src/app/application/crm/portfolio/state/state/portfolio.store.ts ***!
  \**************************************************************************/
/*! exports provided: createInitialState, PortfolioStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createInitialState", function() { return createInitialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioStore", function() { return PortfolioStore; });
/* harmony import */ var _datorama_akita__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @datorama/akita */ "./node_modules/@datorama/akita/fesm5/datorama-akita.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


function createInitialState() {
    return {
        pages: 0,
        current: 0,
        name: '',
        id: 0
    };
}
var PortfolioStore = /** @class */ (function (_super) {
    __extends(PortfolioStore, _super);
    function PortfolioStore() {
        return _super.call(this, createInitialState()) || this;
    }
    /*
      @transaction()
      addNewPizza() {
        const newPizza = createPizza();
        this.add(newPizza);
        this.setActive(newPizza.id);
      }
      */
    PortfolioStore.prototype.setPortfolioState = function (state) {
        // this.updateRoot(state);
    };
    PortfolioStore.ngInjectableDef = _angular_core__WEBPACK_IMPORTED_MODULE_1__["defineInjectable"]({ factory: function PortfolioStore_Factory() { return new PortfolioStore(); }, token: PortfolioStore, providedIn: "root" });
    PortfolioStore = __decorate([
        Object(_datorama_akita__WEBPACK_IMPORTED_MODULE_0__["StoreConfig"])({ name: 'portfolio' }),
        __metadata("design:paramtypes", [])
    ], PortfolioStore);
    return PortfolioStore;
}(_datorama_akita__WEBPACK_IMPORTED_MODULE_0__["Store"]));



/***/ }),

/***/ "./src/app/application/crm/portfolio/state/state/portfoliostate.service.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/application/crm/portfolio/state/state/portfoliostate.service.ts ***!
  \*********************************************************************************/
/*! exports provided: PortfoliostateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfoliostateService", function() { return PortfoliostateService; });
/* harmony import */ var _portfolio_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./portfolio.store */ "./src/app/application/crm/portfolio/state/state/portfolio.store.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");





var PortfoliostateService = /** @class */ (function () {
    function PortfoliostateService(_portfolioStore, _http) {
        this._portfolioStore = _portfolioStore;
        this._http = _http;
    }
    PortfoliostateService.prototype.get = function (entities) {
        // this._portfolioStore.select(entities);
        // this.http.get().subscribe((entities: ServerResponse) => {
        // this.portfolioStore.set(entities);
        // });
    };
    PortfoliostateService.prototype.add = function (state) {
        this._portfolioStore.update(state);
        // this.http.post().subscribe((entity: ServerResponse) => {
        // this.portfolioStore.add(entity);
        // });
    };
    PortfoliostateService.ngInjectableDef = _angular_core__WEBPACK_IMPORTED_MODULE_2__["defineInjectable"]({ factory: function PortfoliostateService_Factory() { return new PortfoliostateService(_angular_core__WEBPACK_IMPORTED_MODULE_2__["inject"](_portfolio_store__WEBPACK_IMPORTED_MODULE_0__["PortfolioStore"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); }, token: PortfoliostateService, providedIn: "root" });
    return PortfoliostateService;
}());



/***/ }),

/***/ "./src/app/modules/buttons/pagination/pagination.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/modules/buttons/pagination/pagination.module.ts ***!
  \*****************************************************************/
/*! exports provided: PaginationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationModule", function() { return PaginationModule; });
var PaginationModule = /** @class */ (function () {
    function PaginationModule() {
    }
    return PaginationModule;
}());



/***/ }),

/***/ "./src/app/modules/buttons/pagination/pagination/pagination.component.ngfactory.js":
/*!*****************************************************************************************!*\
  !*** ./src/app/modules/buttons/pagination/pagination/pagination.component.ngfactory.js ***!
  \*****************************************************************************************/
/*! exports provided: RenderType_PaginationComponent, View_PaginationComponent_0, View_PaginationComponent_Host_0, PaginationComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_PaginationComponent", function() { return RenderType_PaginationComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_PaginationComponent_0", function() { return View_PaginationComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_PaginationComponent_Host_0", function() { return View_PaginationComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationComponentNgFactory", function() { return PaginationComponentNgFactory; });
/* harmony import */ var _pagination_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pagination.component.scss.shim.ngstyle */ "./src/app/modules/buttons/pagination/pagination/pagination.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _pagination_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pagination.component */ "./src/app/modules/buttons/pagination/pagination/pagination.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 




var styles_PaginationComponent = [_pagination_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_PaginationComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_PaginationComponent, data: {} });

function View_PaginationComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "button", [["class", "pagination__button"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](2, { "pagination__button_active": 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵncd"](null, 0)], function (_ck, _v) { var _co = _v.component; var currVal_0 = "pagination__button"; var currVal_1 = _ck(_v, 2, 0, _co.isActive); _ck(_v, 1, 0, currVal_0, currVal_1); }, null); }
function View_PaginationComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "rosa-pagination", [], null, null, null, View_PaginationComponent_0, RenderType_PaginationComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _pagination_component__WEBPACK_IMPORTED_MODULE_3__["PaginationComponent"], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var PaginationComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("rosa-pagination", _pagination_component__WEBPACK_IMPORTED_MODULE_3__["PaginationComponent"], View_PaginationComponent_Host_0, { isActive: "isActive" }, { ClickEvent: "ClickEvent" }, ["*"]);



/***/ }),

/***/ "./src/app/modules/buttons/pagination/pagination/pagination.component.scss.shim.ngstyle.js":
/*!*************************************************************************************************!*\
  !*** ./src/app/modules/buttons/pagination/pagination/pagination.component.scss.shim.ngstyle.js ***!
  \*************************************************************************************************/
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
var styles = [".global-container[_ngcontent-%COMP%] {\n  min-width: 13; }\n\n@media (max-width: 1440px) {\n  .container[_ngcontent-%COMP%] {\n    width: 1152px;\n    margin: 0 auto;\n    position: relative;\n    padding: 0 12px; } }\n\n@media (max-width: 1680px) {\n  .container[_ngcontent-%COMP%] {\n    width: 1344px;\n    margin: 0 auto;\n    position: relative;\n    padding: 0 12px; } }\n\n@media (min-width: 1920px) {\n  .container[_ngcontent-%COMP%] {\n    width: 1632px;\n    margin: 0 auto;\n    position: relative;\n    padding: 0 12px; } }\n\n.rosa-grid-1[_ngcontent-%COMP%] {\n  width: 8.33333333%; }\n\n.rosa-grid-2[_ngcontent-%COMP%] {\n  width: 16.66666667%; }\n\n.rosa-grid-3[_ngcontent-%COMP%] {\n  width: 25%; }\n\n.rosa-grid-4[_ngcontent-%COMP%] {\n  width: 33.33333333%; }\n\n.rosa-grid-5[_ngcontent-%COMP%] {\n  width: 41.66666667%; }\n\n.rosa-grid-6[_ngcontent-%COMP%] {\n  width: 50%; }\n\n.rosa-grid-7[_ngcontent-%COMP%] {\n  width: 58.33333333%; }\n\n.rosa-grid-8[_ngcontent-%COMP%] {\n  width: 66.66666667%; }\n\n.rosa-grid-9[_ngcontent-%COMP%] {\n  width: 75%; }\n\n.rosa-grid-10[_ngcontent-%COMP%] {\n  width: 83.33333333%; }\n\n.rosa-grid-11[_ngcontent-%COMP%] {\n  width: 91.66666667%; }\n\n.rosa-grid-12[_ngcontent-%COMP%] {\n  width: 100%; }\n\n.pagination__button[_ngcontent-%COMP%] {\n  padding: 0;\n  border: none;\n  font-family: inherit;\n  color: inherit;\n  background-color: transparent;\n  cursor: pointer;\n  background-color: #FFF;\n  border-radius: 3px;\n  height: 32px;\n  padding: 0px 12px;\n  margin-right: 2px;\n  font-size: var(--size-typo-m);\n  color: var(--color-typo-secondary);\n  font-weight: 500;\n  line-height: 24px;\n  text-align: center;\n  outline: none !important; }\n\n.pagination__button[_ngcontent-%COMP%]:hover {\n    background-color: #f2f2f2; }\n\n.pagination__button[_ngcontent-%COMP%]:focus, .pagination__button[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:active {\n    outline: none !important; }\n\n.pagination__button_active[_ngcontent-%COMP%] {\n    background-color: #ebebeb; }"];



/***/ }),

/***/ "./src/app/modules/buttons/pagination/pagination/pagination.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/modules/buttons/pagination/pagination/pagination.component.ts ***!
  \*******************************************************************************/
/*! exports provided: PaginationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationComponent", function() { return PaginationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var PaginationComponent = /** @class */ (function () {
    function PaginationComponent() {
        this.isActive = false;
        this.ClickEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    PaginationComponent.prototype.ngOnInit = function () {
    };
    return PaginationComponent;
}());



/***/ }),

/***/ "./src/app/modules/data-list/data-list.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/modules/data-list/data-list.module.ts ***!
  \*******************************************************/
/*! exports provided: DataListModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataListModule", function() { return DataListModule; });
var DataListModule = /** @class */ (function () {
    function DataListModule() {
    }
    return DataListModule;
}());



/***/ }),

/***/ "./src/app/modules/data-list/list-body-cell/list-body-cell.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/modules/data-list/list-body-cell/list-body-cell.module.ts ***!
  \***************************************************************************/
/*! exports provided: ListBodyCellModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListBodyCellModule", function() { return ListBodyCellModule; });
var ListBodyCellModule = /** @class */ (function () {
    function ListBodyCellModule() {
    }
    return ListBodyCellModule;
}());



/***/ }),

/***/ "./src/app/modules/data-list/list-body-cell/list-body-cell/list-body-cell.component.ngfactory.js":
/*!*******************************************************************************************************!*\
  !*** ./src/app/modules/data-list/list-body-cell/list-body-cell/list-body-cell.component.ngfactory.js ***!
  \*******************************************************************************************************/
/*! exports provided: RenderType_ListBodyCellComponent, View_ListBodyCellComponent_0, View_ListBodyCellComponent_Host_0, ListBodyCellComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_ListBodyCellComponent", function() { return RenderType_ListBodyCellComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ListBodyCellComponent_0", function() { return View_ListBodyCellComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ListBodyCellComponent_Host_0", function() { return View_ListBodyCellComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListBodyCellComponentNgFactory", function() { return ListBodyCellComponentNgFactory; });
/* harmony import */ var _list_body_cell_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list-body-cell.component.scss.shim.ngstyle */ "./src/app/modules/data-list/list-body-cell/list-body-cell/list-body-cell.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _list_body_cell_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list-body-cell.component */ "./src/app/modules/data-list/list-body-cell/list-body-cell/list-body-cell.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 



var styles_ListBodyCellComponent = [_list_body_cell_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_ListBodyCellComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_ListBodyCellComponent, data: {} });

function View_ListBodyCellComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "div", [["class", "list-body-cell"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "span", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵncd"](null, 0)], null, null); }
function View_ListBodyCellComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "rosa-list-body-cell", [], null, null, null, View_ListBodyCellComponent_0, RenderType_ListBodyCellComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _list_body_cell_component__WEBPACK_IMPORTED_MODULE_2__["ListBodyCellComponent"], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var ListBodyCellComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("rosa-list-body-cell", _list_body_cell_component__WEBPACK_IMPORTED_MODULE_2__["ListBodyCellComponent"], View_ListBodyCellComponent_Host_0, {}, {}, ["*"]);



/***/ }),

/***/ "./src/app/modules/data-list/list-body-cell/list-body-cell/list-body-cell.component.scss.shim.ngstyle.js":
/*!***************************************************************************************************************!*\
  !*** ./src/app/modules/data-list/list-body-cell/list-body-cell/list-body-cell.component.scss.shim.ngstyle.js ***!
  \***************************************************************************************************************/
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
var styles = [".list-body-cell[_ngcontent-%COMP%] {\n  height: 40px;\n  padding: 0 12px;\n  width: 100%;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  box-sizing: border-box;\n  flex-grow: 0;\n  flex-shrink: 0;\n  display: flex; }\n  .list-body-cell[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-weight: 400;\n    font-size: 13px;\n    line-height: 16px;\n    color: var(--color-typo-secondary);\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    display: inline-block;\n    margin-top: auto;\n    margin-bottom: auto; }"];



/***/ }),

/***/ "./src/app/modules/data-list/list-body-cell/list-body-cell/list-body-cell.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/modules/data-list/list-body-cell/list-body-cell/list-body-cell.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: ListBodyCellComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListBodyCellComponent", function() { return ListBodyCellComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var ListBodyCellComponent = /** @class */ (function () {
    function ListBodyCellComponent() {
    }
    ListBodyCellComponent.prototype.ngOnInit = function () {
    };
    return ListBodyCellComponent;
}());



/***/ }),

/***/ "./src/app/modules/data-list/list-header-cell/list-header-cell.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/modules/data-list/list-header-cell/list-header-cell.module.ts ***!
  \*******************************************************************************/
/*! exports provided: ListHeaderCellModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListHeaderCellModule", function() { return ListHeaderCellModule; });
var ListHeaderCellModule = /** @class */ (function () {
    function ListHeaderCellModule() {
    }
    return ListHeaderCellModule;
}());



/***/ }),

/***/ "./src/app/modules/data-list/list-header-cell/list-header-cell/list-header-cell.component.ngfactory.js":
/*!*************************************************************************************************************!*\
  !*** ./src/app/modules/data-list/list-header-cell/list-header-cell/list-header-cell.component.ngfactory.js ***!
  \*************************************************************************************************************/
/*! exports provided: RenderType_ListHeaderCellComponent, View_ListHeaderCellComponent_0, View_ListHeaderCellComponent_Host_0, ListHeaderCellComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_ListHeaderCellComponent", function() { return RenderType_ListHeaderCellComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ListHeaderCellComponent_0", function() { return View_ListHeaderCellComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ListHeaderCellComponent_Host_0", function() { return View_ListHeaderCellComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListHeaderCellComponentNgFactory", function() { return ListHeaderCellComponentNgFactory; });
/* harmony import */ var _list_header_cell_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list-header-cell.component.scss.shim.ngstyle */ "./src/app/modules/data-list/list-header-cell/list-header-cell/list-header-cell.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _list_header_cell_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list-header-cell.component */ "./src/app/modules/data-list/list-header-cell/list-header-cell/list-header-cell.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 



var styles_ListHeaderCellComponent = [_list_header_cell_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_ListHeaderCellComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_ListHeaderCellComponent, data: {} });

function View_ListHeaderCellComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "div", [["class", "list-header-cell"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "span", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵncd"](null, 0)], null, null); }
function View_ListHeaderCellComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "rosa-list-header-cell", [], null, null, null, View_ListHeaderCellComponent_0, RenderType_ListHeaderCellComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _list_header_cell_component__WEBPACK_IMPORTED_MODULE_2__["ListHeaderCellComponent"], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var ListHeaderCellComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("rosa-list-header-cell", _list_header_cell_component__WEBPACK_IMPORTED_MODULE_2__["ListHeaderCellComponent"], View_ListHeaderCellComponent_Host_0, {}, {}, ["*"]);



/***/ }),

/***/ "./src/app/modules/data-list/list-header-cell/list-header-cell/list-header-cell.component.scss.shim.ngstyle.js":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/modules/data-list/list-header-cell/list-header-cell/list-header-cell.component.scss.shim.ngstyle.js ***!
  \*********************************************************************************************************************/
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
var styles = [".list-header-cell[_ngcontent-%COMP%] {\n  height: 40px;\n  padding: 12px 12px 11px;\n  width: 100%;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  box-sizing: border-box;\n  flex-grow: 0;\n  flex-shrink: 0;\n  font-size: 0;\n  line-height: 0;\n  display: flex; }\n  .list-header-cell[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-size: 12px;\n    line-height: 1;\n    display: inline-block;\n    color: var(--color-typo-primary);\n    font-weight: bold;\n    margin-top: auto;\n    margin-bottom: auto; }"];



/***/ }),

/***/ "./src/app/modules/data-list/list-header-cell/list-header-cell/list-header-cell.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/modules/data-list/list-header-cell/list-header-cell/list-header-cell.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: ListHeaderCellComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListHeaderCellComponent", function() { return ListHeaderCellComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var ListHeaderCellComponent = /** @class */ (function () {
    function ListHeaderCellComponent() {
    }
    ListHeaderCellComponent.prototype.ngOnInit = function () {
    };
    return ListHeaderCellComponent;
}());



/***/ })

}]);