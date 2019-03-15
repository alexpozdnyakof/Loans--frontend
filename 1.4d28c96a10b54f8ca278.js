(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/@datorama/akita-ng-forms-manager/fesm5/datorama-akita-ng-forms-manager.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@datorama/akita-ng-forms-manager/fesm5/datorama-akita-ng-forms-manager.js ***!
  \************************************************************************************************/
/*! exports provided: AkitaNgFormsManager, setValidators, setAsyncValidators, FormsStore, FormsQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AkitaNgFormsManager", function() { return AkitaNgFormsManager; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setValidators", function() { return setValidators; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setAsyncValidators", function() { return setAsyncValidators; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormsStore", function() { return FormsStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormsQuery", function() { return FormsQuery; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _datorama_akita__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @datorama/akita */ "./node_modules/@datorama/akita/fesm5/datorama-akita.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");







var FormsStore = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(FormsStore, _super);
    function FormsStore(state) {
        return _super.call(this, state) || this;
    }
    FormsStore = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_datorama_akita__WEBPACK_IMPORTED_MODULE_1__["StoreConfig"])({
            name: 'formsManager'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object])
    ], FormsStore);
    return FormsStore;
}(_datorama_akita__WEBPACK_IMPORTED_MODULE_1__["Store"]));

var FormsQuery = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(FormsQuery, _super);
    function FormsQuery(store) {
        return _super.call(this, store) || this;
    }
    return FormsQuery;
}(_datorama_akita__WEBPACK_IMPORTED_MODULE_1__["Query"]));

var AkitaNgFormsManager = /** @class */ (function () {
    function AkitaNgFormsManager() {
        this.valueChanges = {};
        this._store = new FormsStore({});
        this._query = new FormsQuery(this.store);
    }
    Object.defineProperty(AkitaNgFormsManager.prototype, "query", {
        get: function () {
            return this._query;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AkitaNgFormsManager.prototype, "store", {
        get: function () {
            return this._store;
        },
        enumerable: true,
        configurable: true
    });
    AkitaNgFormsManager.prototype.selectValid = function (formName, path) {
        return this.selectControl(formName, path).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (control) { return control.valid; }));
    };
    AkitaNgFormsManager.prototype.selectDirty = function (formName, path) {
        return this.selectControl(formName, path).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (control) { return control.dirty; }));
    };
    AkitaNgFormsManager.prototype.selectDisabled = function (formName, path) {
        return this.selectControl(formName, path).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (control) { return control.disabled; }));
    };
    AkitaNgFormsManager.prototype.selectValue = function (formName, path) {
        return this.selectControl(formName, path).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (control) { return control.value; }));
    };
    AkitaNgFormsManager.prototype.selectErrors = function (formName, path) {
        return this.selectControl(formName, path).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (control) { return control.errors; }));
    };
    /**
     * If no path specified it means that it's a single FormControl or FormArray
     */
    AkitaNgFormsManager.prototype.selectControl = function (formName, path) {
        var _this = this;
        if (!path) {
            return this.selectForm(formName);
        }
        return this.query
            .select(function (state) { return state[formName]; })
            .pipe(_datorama_akita__WEBPACK_IMPORTED_MODULE_1__["filterNil"], Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (form) { return _this.resolveControl(form, path); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])(function (a, b) { return JSON.stringify(a) === JSON.stringify(b); }));
    };
    AkitaNgFormsManager.prototype.getControl = function (formName, path) {
        if (!path) {
            return this.getForm(formName);
        }
        if (this.hasForm(formName)) {
            var form = this.getForm(formName);
            return this.resolveControl(form, path);
        }
        return null;
    };
    AkitaNgFormsManager.prototype.selectForm = function (formName) {
        return this.query.select(function (state) { return state[formName]; }).pipe(_datorama_akita__WEBPACK_IMPORTED_MODULE_1__["filterNil"]);
    };
    AkitaNgFormsManager.prototype.getForm = function (formName) {
        return this.query.getSnapshot()[formName];
    };
    AkitaNgFormsManager.prototype.hasForm = function (formName) {
        return !!this.getForm(formName);
    };
    AkitaNgFormsManager.prototype.upsert = function (formName, form, config) {
        var _this = this;
        if (config === void 0) { config = {}; }
        var merged = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ debounceTime: 300, emitEvent: false }, config);
        /** If the form already exist, patch the form with the store value */
        if (this.hasForm(formName) === true) {
            form.patchValue(this.resolveStoreToForm(formName, form, merged.arrControlFactory), {
                emitEvent: merged.emitEvent
            });
        }
        else {
            /** else update the store with the current form state */
            this.updateStore(formName, form, true);
        }
        this.valueChanges[formName] = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["merge"])(form.valueChanges, form.statusChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])()))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(merged.debounceTime))
            .subscribe(function () { return _this.updateStore(formName, form); });
        return this;
    };
    AkitaNgFormsManager.prototype.remove = function (formName) {
        var _this = this;
        var snapshot = this.query.getSnapshot();
        var newState = Object.keys(snapshot).reduce(function (acc, currentFormName) {
            if (formName !== currentFormName) {
                acc[currentFormName] = snapshot[currentFormName];
            }
            else {
                acc[currentFormName] = null;
            }
            return acc;
        }, {});
        Object(_datorama_akita__WEBPACK_IMPORTED_MODULE_1__["applyAction"])(function () {
            _this.store.setState(function () { return newState; });
        }, { type: "Clear " + formName });
    };
    AkitaNgFormsManager.prototype.unsubscribe = function (formName) {
        var e_1, _a;
        if (formName) {
            this.valueChanges[formName].unsubscribe();
            delete this.valueChanges[formName];
        }
        else {
            try {
                for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(Object.keys(this.valueChanges)), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var name_1 = _c.value;
                    this.valueChanges[name_1].unsubscribe();
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
            this.valueChanges = {};
        }
    };
    AkitaNgFormsManager.prototype.resolveControl = function (form, path) {
        var _a = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(path.split('.')), first = _a[0], rest = _a.slice(1);
        if (rest.length === 0) {
            return form.controls[first];
        }
        return this.find(form.controls[first], rest);
    };
    AkitaNgFormsManager.prototype.find = function (control, path) {
        return path.reduce(function (current, name) {
            return current.controls.hasOwnProperty(name) ? current.controls[name] : null;
        }, control);
    };
    AkitaNgFormsManager.prototype.resolveStoreToForm = function (formName, control, arrControlFactory) {
        var form = this.getForm(formName);
        var value = form.value;
        /** It means it a single control */
        if (!form.controls) {
            return value;
        }
        this.handleFormArray(value, control, arrControlFactory);
        return value;
    };
    AkitaNgFormsManager.prototype.handleFormArray = function (formValue, control, arrControlFactory) {
        var _this = this;
        if (Array.isArray(formValue)) {
            this.cleanArray(control);
            if (!arrControlFactory) {
                throw new Error('Please provide arrControlFactory');
            }
            formValue.forEach(function (v, i) { return control.insert(i, arrControlFactory(v)); });
        }
        else {
            Object.keys(formValue).forEach(function (controlName) {
                var value = formValue[controlName];
                if (Array.isArray(value) && value instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArray"]) {
                    var current_1 = control.get(controlName);
                    var fc_1 = arrControlFactory[controlName];
                    if (!fc_1) {
                        throw new Error("Please provide arrControlFactory for " + controlName);
                    }
                    _this.cleanArray(current_1);
                    value.forEach(function (v, i) { return current_1.insert(i, fc_1(v)); });
                }
            });
        }
    };
    AkitaNgFormsManager.prototype.cleanArray = function (control) {
        while (control.length !== 0) {
            control.removeAt(0);
        }
    };
    AkitaNgFormsManager.prototype.buildFormStoreState = function (formName, form) {
        var e_2, _a;
        var value;
        if (form instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]) {
            value = this.resolveFormToStore(form);
        }
        if (form instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"] || form instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArray"]) {
            // The root form group
            value = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.resolveFormToStore(form), { controls: {} });
            try {
                for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(Object.keys(form.controls)), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var key = _c.value;
                    var control = form.controls[key];
                    if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"] || form instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArray"]) {
                        value.controls[key] = this.buildFormStoreState(formName, control);
                    }
                    else {
                        value.controls[key] = this.resolveFormToStore(control);
                    }
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_2) throw e_2.error; }
            }
        }
        return value;
    };
    AkitaNgFormsManager.prototype.updateStore = function (formName, form, initial) {
        var _this = this;
        if (initial === void 0) { initial = false; }
        var value = this.buildFormStoreState(formName, form);
        Object(_datorama_akita__WEBPACK_IMPORTED_MODULE_1__["applyAction"])(function () {
            var _a;
            _this.store.update((_a = {},
                _a[formName] = value,
                _a));
        }, { type: (initial ? 'Create' : 'Update') + " " + formName });
    };
    AkitaNgFormsManager.prototype.resolveFormToStore = function (control) {
        return {
            value: control.value,
            valid: control.valid,
            dirty: control.dirty,
            invalid: control.invalid,
            disabled: control.disabled,
            errors: control.errors,
            touched: control.touched,
            pristine: control.pristine,
            pending: control.pending
        };
    };
    AkitaNgFormsManager.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Injectable"], args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    AkitaNgFormsManager.ctorParameters = function () { return []; };
    AkitaNgFormsManager.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["defineInjectable"])({ factory: function AkitaNgFormsManager_Factory() { return new AkitaNgFormsManager(); }, token: AkitaNgFormsManager, providedIn: "root" });
    return AkitaNgFormsManager;
}());
function setValidators(control, validator) {
    control.setValidators(Object(_datorama_akita__WEBPACK_IMPORTED_MODULE_1__["coerceArray"])(validator));
    control.updateValueAndValidity();
}
function setAsyncValidators(control, validator) {
    control.setValidators(Object(_datorama_akita__WEBPACK_IMPORTED_MODULE_1__["coerceArray"])(validator));
    control.updateValueAndValidity();
}

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0b3JhbWEtYWtpdGEtbmctZm9ybXMtbWFuYWdlci5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vQGRhdG9yYW1hL2FraXRhLW5nLWZvcm1zLW1hbmFnZXIvbGliL2Zvcm1zLW1hbmFnZXIuc3RvcmUudHMiLCJuZzovL0BkYXRvcmFtYS9ha2l0YS1uZy1mb3Jtcy1tYW5hZ2VyL2xpYi9mb3Jtcy1tYW5hZ2VyLnF1ZXJ5LnRzIiwibmc6Ly9AZGF0b3JhbWEvYWtpdGEtbmctZm9ybXMtbWFuYWdlci9saWIvZm9ybXMtbWFuYWdlci50cyIsIm5nOi8vQGRhdG9yYW1hL2FraXRhLW5nLWZvcm1zLW1hbmFnZXIvZGF0b3JhbWEtYWtpdGEtbmctZm9ybXMtbWFuYWdlci50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTdG9yZSwgU3RvcmVDb25maWcgfSBmcm9tICdAZGF0b3JhbWEvYWtpdGEnO1xuXG5AU3RvcmVDb25maWcoe1xuICBuYW1lOiAnZm9ybXNNYW5hZ2VyJ1xufSlcbmV4cG9ydCBjbGFzcyBGb3Jtc1N0b3JlPFQ+IGV4dGVuZHMgU3RvcmU8VD4ge1xuICBjb25zdHJ1Y3RvcihzdGF0ZTogVCkge1xuICAgIHN1cGVyKHN0YXRlKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgUXVlcnkgfSBmcm9tICdAZGF0b3JhbWEvYWtpdGEnO1xuaW1wb3J0IHsgRm9ybXNTdG9yZSB9IGZyb20gJy4vZm9ybXMtbWFuYWdlci5zdG9yZSc7XG5cbmV4cG9ydCBjbGFzcyBGb3Jtc1F1ZXJ5PFQ+IGV4dGVuZHMgUXVlcnk8VD4ge1xuICBjb25zdHJ1Y3RvcihzdG9yZTogRm9ybXNTdG9yZTxUPikge1xuICAgIHN1cGVyKHN0b3JlKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQWJzdHJhY3RDb250cm9sLCBBc3luY1ZhbGlkYXRvckZuLCBGb3JtQXJyYXksIEZvcm1Db250cm9sLCBGb3JtR3JvdXAsIFZhbGlkYXRvckZuIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgZGVib3VuY2VUaW1lLCBkaXN0aW5jdFVudGlsQ2hhbmdlZCwgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3Vic2NyaXB0aW9uLCBtZXJnZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSGFzaE1hcCwgZmlsdGVyTmlsLCBhcHBseUFjdGlvbiwgY29lcmNlQXJyYXkgfSBmcm9tICdAZGF0b3JhbWEvYWtpdGEnO1xuaW1wb3J0IHsgRm9ybXNTdG9yZSB9IGZyb20gJy4vZm9ybXMtbWFuYWdlci5zdG9yZSc7XG5pbXBvcnQgeyBGb3Jtc1F1ZXJ5IH0gZnJvbSAnLi9mb3Jtcy1tYW5hZ2VyLnF1ZXJ5JztcblxuZXhwb3J0IHR5cGUgQWtpdGFBYnN0cmFjdENvbnRyb2wgPSBQaWNrPFxuICBBYnN0cmFjdENvbnRyb2wsXG4gICd2YWx1ZScgfCAndmFsaWQnIHwgJ2ludmFsaWQnIHwgJ2Rpc2FibGVkJyB8ICdlcnJvcnMnIHwgJ3RvdWNoZWQnIHwgJ3ByaXN0aW5lJyB8ICdwZW5kaW5nJyB8ICdkaXJ0eSdcbj47XG5cbmV4cG9ydCBpbnRlcmZhY2UgQWtpdGFBYnN0cmFjdEdyb3VwPEMgPSBhbnk+IGV4dGVuZHMgQWtpdGFBYnN0cmFjdENvbnRyb2wge1xuICBjb250cm9sczogeyByZWFkb25seSBbUCBpbiBrZXlvZiBDXTogQWtpdGFBYnN0cmFjdENvbnRyb2wgfTtcbn1cblxuZXhwb3J0IHR5cGUgQXJyYXlDb250cm9sRmFjdG9yeSA9ICh2YWx1ZTogYW55KSA9PiBBYnN0cmFjdENvbnRyb2w7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEFraXRhTmdGb3Jtc01hbmFnZXI8Rm9ybXNTdGF0ZSA9IGFueT4ge1xuICBwcml2YXRlIHJlYWRvbmx5IF9zdG9yZTogRm9ybXNTdG9yZTxGb3Jtc1N0YXRlPjtcbiAgcHJpdmF0ZSByZWFkb25seSBfcXVlcnk6IEZvcm1zUXVlcnk8Rm9ybXNTdGF0ZT47XG4gIHByaXZhdGUgdmFsdWVDaGFuZ2VzOiBIYXNoTWFwPFN1YnNjcmlwdGlvbj4gPSB7fTtcblxuICBnZXQgcXVlcnkoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3F1ZXJ5O1xuICB9XG5cbiAgZ2V0IHN0b3JlKCkge1xuICAgIHJldHVybiB0aGlzLl9zdG9yZTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuX3N0b3JlID0gbmV3IEZvcm1zU3RvcmUoe30gYXMgRm9ybXNTdGF0ZSk7XG4gICAgdGhpcy5fcXVlcnkgPSBuZXcgRm9ybXNRdWVyeSh0aGlzLnN0b3JlKTtcbiAgfVxuXG4gIHNlbGVjdFZhbGlkKGZvcm1OYW1lOiBrZXlvZiBGb3Jtc1N0YXRlLCBwYXRoPzogc3RyaW5nKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMuc2VsZWN0Q29udHJvbChmb3JtTmFtZSwgcGF0aCkucGlwZShtYXAoY29udHJvbCA9PiBjb250cm9sLnZhbGlkKSk7XG4gIH1cblxuICBzZWxlY3REaXJ0eShmb3JtTmFtZToga2V5b2YgRm9ybXNTdGF0ZSwgcGF0aD86IHN0cmluZyk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLnNlbGVjdENvbnRyb2woZm9ybU5hbWUsIHBhdGgpLnBpcGUobWFwKGNvbnRyb2wgPT4gY29udHJvbC5kaXJ0eSkpO1xuICB9XG5cbiAgc2VsZWN0RGlzYWJsZWQoZm9ybU5hbWU6IGtleW9mIEZvcm1zU3RhdGUsIHBhdGg/OiBzdHJpbmcpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5zZWxlY3RDb250cm9sKGZvcm1OYW1lLCBwYXRoKS5waXBlKG1hcChjb250cm9sID0+IGNvbnRyb2wuZGlzYWJsZWQpKTtcbiAgfVxuXG4gIHNlbGVjdFZhbHVlPFQgPSBhbnk+KGZvcm1OYW1lOiBrZXlvZiBGb3Jtc1N0YXRlLCBwYXRoPzogc3RyaW5nKTogT2JzZXJ2YWJsZTxUPiB7XG4gICAgcmV0dXJuIHRoaXMuc2VsZWN0Q29udHJvbChmb3JtTmFtZSwgcGF0aCkucGlwZShtYXAoY29udHJvbCA9PiBjb250cm9sLnZhbHVlKSk7XG4gIH1cblxuICBzZWxlY3RFcnJvcnMoZm9ybU5hbWU6IGtleW9mIEZvcm1zU3RhdGUsIHBhdGg/OiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLnNlbGVjdENvbnRyb2woZm9ybU5hbWUsIHBhdGgpLnBpcGUobWFwKGNvbnRyb2wgPT4gY29udHJvbC5lcnJvcnMpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJZiBubyBwYXRoIHNwZWNpZmllZCBpdCBtZWFucyB0aGF0IGl0J3MgYSBzaW5nbGUgRm9ybUNvbnRyb2wgb3IgRm9ybUFycmF5XG4gICAqL1xuICBzZWxlY3RDb250cm9sKGZvcm1OYW1lOiBrZXlvZiBGb3Jtc1N0YXRlLCBwYXRoPzogc3RyaW5nKTogT2JzZXJ2YWJsZTxBa2l0YUFic3RyYWN0Q29udHJvbD4ge1xuICAgIGlmICghcGF0aCkge1xuICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0Rm9ybShmb3JtTmFtZSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnF1ZXJ5XG4gICAgICAuc2VsZWN0KHN0YXRlID0+IHN0YXRlW2Zvcm1OYW1lIGFzIGFueV0pXG4gICAgICAucGlwZShcbiAgICAgICAgZmlsdGVyTmlsLFxuICAgICAgICBtYXAoZm9ybSA9PiB0aGlzLnJlc29sdmVDb250cm9sKGZvcm0sIHBhdGgpKSxcbiAgICAgICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKGEsIGIpID0+IEpTT04uc3RyaW5naWZ5KGEpID09PSBKU09OLnN0cmluZ2lmeShiKSlcbiAgICAgICk7XG4gIH1cblxuICBnZXRDb250cm9sKGZvcm1OYW1lOiBrZXlvZiBGb3Jtc1N0YXRlLCBwYXRoPzogc3RyaW5nKTogQWtpdGFBYnN0cmFjdENvbnRyb2wge1xuICAgIGlmICghcGF0aCkge1xuICAgICAgcmV0dXJuIHRoaXMuZ2V0Rm9ybShmb3JtTmFtZSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuaGFzRm9ybShmb3JtTmFtZSkpIHtcbiAgICAgIGNvbnN0IGZvcm0gPSB0aGlzLmdldEZvcm0oZm9ybU5hbWUpO1xuICAgICAgcmV0dXJuIHRoaXMucmVzb2x2ZUNvbnRyb2woZm9ybSwgcGF0aCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBzZWxlY3RGb3JtKGZvcm1OYW1lOiBrZXlvZiBGb3Jtc1N0YXRlKTogT2JzZXJ2YWJsZTxBa2l0YUFic3RyYWN0R3JvdXA+IHtcbiAgICByZXR1cm4gdGhpcy5xdWVyeS5zZWxlY3Qoc3RhdGUgPT4gc3RhdGVbZm9ybU5hbWUgYXMgYW55XSkucGlwZShmaWx0ZXJOaWwpO1xuICB9XG5cbiAgZ2V0Rm9ybTxOYW1lIGV4dGVuZHMga2V5b2YgRm9ybXNTdGF0ZT4oZm9ybU5hbWU6IGtleW9mIEZvcm1zU3RhdGUpOiBBa2l0YUFic3RyYWN0R3JvdXA8Rm9ybXNTdGF0ZVtOYW1lXT4ge1xuICAgIHJldHVybiB0aGlzLnF1ZXJ5LmdldFNuYXBzaG90KClbZm9ybU5hbWUgYXMgYW55XTtcbiAgfVxuXG4gIGhhc0Zvcm0oZm9ybU5hbWU6IGtleW9mIEZvcm1zU3RhdGUpOiBib29sZWFuIHtcbiAgICByZXR1cm4gISF0aGlzLmdldEZvcm0oZm9ybU5hbWUpO1xuICB9XG5cbiAgdXBzZXJ0KFxuICAgIGZvcm1OYW1lOiBrZXlvZiBGb3Jtc1N0YXRlLFxuICAgIGZvcm06IEFic3RyYWN0Q29udHJvbCxcbiAgICBjb25maWc6IHtcbiAgICAgIGRlYm91bmNlVGltZT86IG51bWJlcjtcbiAgICAgIGVtaXRFdmVudD86IGJvb2xlYW47XG4gICAgICBhcnJDb250cm9sRmFjdG9yeT86IEFycmF5Q29udHJvbEZhY3RvcnkgfCBIYXNoTWFwPEFycmF5Q29udHJvbEZhY3Rvcnk+O1xuICAgIH0gPSB7fVxuICApIHtcbiAgICBjb25zdCBtZXJnZWQgPSB7IC4uLnsgZGVib3VuY2VUaW1lOiAzMDAsIGVtaXRFdmVudDogZmFsc2UgfSwgLi4uY29uZmlnIH07XG5cbiAgICAvKiogSWYgdGhlIGZvcm0gYWxyZWFkeSBleGlzdCwgcGF0Y2ggdGhlIGZvcm0gd2l0aCB0aGUgc3RvcmUgdmFsdWUgKi9cbiAgICBpZiAodGhpcy5oYXNGb3JtKGZvcm1OYW1lKSA9PT0gdHJ1ZSkge1xuICAgICAgZm9ybS5wYXRjaFZhbHVlKHRoaXMucmVzb2x2ZVN0b3JlVG9Gb3JtKGZvcm1OYW1lLCBmb3JtLCBtZXJnZWQuYXJyQ29udHJvbEZhY3RvcnkpLCB7XG4gICAgICAgIGVtaXRFdmVudDogbWVyZ2VkLmVtaXRFdmVudFxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8qKiBlbHNlIHVwZGF0ZSB0aGUgc3RvcmUgd2l0aCB0aGUgY3VycmVudCBmb3JtIHN0YXRlICovXG4gICAgICB0aGlzLnVwZGF0ZVN0b3JlKGZvcm1OYW1lLCBmb3JtLCB0cnVlKTtcbiAgICB9XG5cbiAgICB0aGlzLnZhbHVlQ2hhbmdlc1tmb3JtTmFtZSBhcyBhbnldID0gbWVyZ2UoZm9ybS52YWx1ZUNoYW5nZXMsIGZvcm0uc3RhdHVzQ2hhbmdlcy5waXBlKGRpc3RpbmN0VW50aWxDaGFuZ2VkKCkpKVxuICAgICAgLnBpcGUoZGVib3VuY2VUaW1lKG1lcmdlZC5kZWJvdW5jZVRpbWUpKVxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB0aGlzLnVwZGF0ZVN0b3JlKGZvcm1OYW1lLCBmb3JtKSk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHJlbW92ZShmb3JtTmFtZToga2V5b2YgRm9ybXNTdGF0ZSkge1xuICAgIGNvbnN0IHNuYXBzaG90ID0gdGhpcy5xdWVyeS5nZXRTbmFwc2hvdCgpO1xuICAgIGNvbnN0IG5ld1N0YXRlOiBQYXJ0aWFsPEZvcm1zU3RhdGU+ID0gT2JqZWN0LmtleXMoc25hcHNob3QpLnJlZHVjZSgoYWNjLCBjdXJyZW50Rm9ybU5hbWUpID0+IHtcbiAgICAgIGlmIChmb3JtTmFtZSAhPT0gY3VycmVudEZvcm1OYW1lKSB7XG4gICAgICAgIGFjY1tjdXJyZW50Rm9ybU5hbWVdID0gc25hcHNob3RbY3VycmVudEZvcm1OYW1lXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFjY1tjdXJyZW50Rm9ybU5hbWVdID0gbnVsbDtcbiAgICAgIH1cbiAgICAgIHJldHVybiBhY2M7XG4gICAgfSwge30pO1xuXG4gICAgYXBwbHlBY3Rpb24oXG4gICAgICAoKSA9PiB7XG4gICAgICAgIHRoaXMuc3RvcmUuc2V0U3RhdGUoKCkgPT4gbmV3U3RhdGUgYXMgYW55KTtcbiAgICAgIH0sXG4gICAgICB7IHR5cGU6IGBDbGVhciAke2Zvcm1OYW1lfWAgfVxuICAgICk7XG4gIH1cblxuICB1bnN1YnNjcmliZShmb3JtTmFtZT86IGtleW9mIEZvcm1zU3RhdGUpIHtcbiAgICBpZiAoZm9ybU5hbWUpIHtcbiAgICAgIHRoaXMudmFsdWVDaGFuZ2VzW2Zvcm1OYW1lIGFzIGFueV0udW5zdWJzY3JpYmUoKTtcbiAgICAgIGRlbGV0ZSB0aGlzLnZhbHVlQ2hhbmdlc1tmb3JtTmFtZSBhcyBhbnldO1xuICAgIH0gZWxzZSB7XG4gICAgICBmb3IgKGNvbnN0IG5hbWUgb2YgT2JqZWN0LmtleXModGhpcy52YWx1ZUNoYW5nZXMpKSB7XG4gICAgICAgIHRoaXMudmFsdWVDaGFuZ2VzW25hbWVdLnVuc3Vic2NyaWJlKCk7XG4gICAgICB9XG4gICAgICB0aGlzLnZhbHVlQ2hhbmdlcyA9IHt9O1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgcmVzb2x2ZUNvbnRyb2woZm9ybSwgcGF0aDogc3RyaW5nKSB7XG4gICAgY29uc3QgW2ZpcnN0LCAuLi5yZXN0XSA9IHBhdGguc3BsaXQoJy4nKTtcbiAgICBpZiAocmVzdC5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiBmb3JtLmNvbnRyb2xzW2ZpcnN0XTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5maW5kKGZvcm0uY29udHJvbHNbZmlyc3RdLCByZXN0KTtcbiAgfVxuXG4gIHByaXZhdGUgZmluZChjb250cm9sOiBBa2l0YUFic3RyYWN0R3JvdXAsIHBhdGg6IHN0cmluZ1tdKSB7XG4gICAgcmV0dXJuIHBhdGgucmVkdWNlKChjdXJyZW50OiBBa2l0YUFic3RyYWN0R3JvdXAsIG5hbWU6IHN0cmluZykgPT4ge1xuICAgICAgcmV0dXJuIGN1cnJlbnQuY29udHJvbHMuaGFzT3duUHJvcGVydHkobmFtZSkgPyBjdXJyZW50LmNvbnRyb2xzW25hbWVdIDogbnVsbDtcbiAgICB9LCBjb250cm9sKTtcbiAgfVxuXG4gIHByaXZhdGUgcmVzb2x2ZVN0b3JlVG9Gb3JtKFxuICAgIGZvcm1OYW1lOiBrZXlvZiBGb3Jtc1N0YXRlLFxuICAgIGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCxcbiAgICBhcnJDb250cm9sRmFjdG9yeTogQXJyYXlDb250cm9sRmFjdG9yeSB8IEhhc2hNYXA8QXJyYXlDb250cm9sRmFjdG9yeT5cbiAgKSB7XG4gICAgY29uc3QgZm9ybSA9IHRoaXMuZ2V0Rm9ybShmb3JtTmFtZSk7XG4gICAgY29uc3QgdmFsdWUgPSBmb3JtLnZhbHVlO1xuICAgIC8qKiBJdCBtZWFucyBpdCBhIHNpbmdsZSBjb250cm9sICovXG4gICAgaWYgKCFmb3JtLmNvbnRyb2xzKSB7XG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuXG4gICAgdGhpcy5oYW5kbGVGb3JtQXJyYXkodmFsdWUsIGNvbnRyb2wsIGFyckNvbnRyb2xGYWN0b3J5KTtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZUZvcm1BcnJheShcbiAgICBmb3JtVmFsdWU6IEhhc2hNYXA8YW55PiB8IGFueVtdLFxuICAgIGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCxcbiAgICBhcnJDb250cm9sRmFjdG9yeTogQXJyYXlDb250cm9sRmFjdG9yeSB8IEhhc2hNYXA8QXJyYXlDb250cm9sRmFjdG9yeT5cbiAgKSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoZm9ybVZhbHVlKSkge1xuICAgICAgdGhpcy5jbGVhbkFycmF5KGNvbnRyb2wgYXMgRm9ybUFycmF5KTtcbiAgICAgIGlmICghYXJyQ29udHJvbEZhY3RvcnkpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdQbGVhc2UgcHJvdmlkZSBhcnJDb250cm9sRmFjdG9yeScpO1xuICAgICAgfVxuICAgICAgZm9ybVZhbHVlLmZvckVhY2goKHYsIGkpID0+IChjb250cm9sIGFzIEZvcm1BcnJheSkuaW5zZXJ0KGksIChhcnJDb250cm9sRmFjdG9yeSBhcyBGdW5jdGlvbikodikpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgT2JqZWN0LmtleXMoZm9ybVZhbHVlKS5mb3JFYWNoKGNvbnRyb2xOYW1lID0+IHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBmb3JtVmFsdWVbY29udHJvbE5hbWVdO1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkgJiYgdmFsdWUgaW5zdGFuY2VvZiBGb3JtQXJyYXkpIHtcbiAgICAgICAgICBjb25zdCBjdXJyZW50ID0gY29udHJvbC5nZXQoY29udHJvbE5hbWUpIGFzIEZvcm1BcnJheTtcbiAgICAgICAgICBjb25zdCBmYyA9IGFyckNvbnRyb2xGYWN0b3J5W2NvbnRyb2xOYW1lXTtcbiAgICAgICAgICBpZiAoIWZjKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFBsZWFzZSBwcm92aWRlIGFyckNvbnRyb2xGYWN0b3J5IGZvciAke2NvbnRyb2xOYW1lfWApO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLmNsZWFuQXJyYXkoY3VycmVudCk7XG4gICAgICAgICAgdmFsdWUuZm9yRWFjaCgodiwgaSkgPT4gY3VycmVudC5pbnNlcnQoaSwgZmModikpKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBjbGVhbkFycmF5KGNvbnRyb2w6IEZvcm1BcnJheSkge1xuICAgIHdoaWxlIChjb250cm9sLmxlbmd0aCAhPT0gMCkge1xuICAgICAgY29udHJvbC5yZW1vdmVBdCgwKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGJ1aWxkRm9ybVN0b3JlU3RhdGUoZm9ybU5hbWU6IGtleW9mIEZvcm1zU3RhdGUsIGZvcm06IEFic3RyYWN0Q29udHJvbCkge1xuICAgIGxldCB2YWx1ZTtcblxuICAgIGlmIChmb3JtIGluc3RhbmNlb2YgRm9ybUNvbnRyb2wpIHtcbiAgICAgIHZhbHVlID0gdGhpcy5yZXNvbHZlRm9ybVRvU3RvcmUoZm9ybSk7XG4gICAgfVxuXG4gICAgaWYgKGZvcm0gaW5zdGFuY2VvZiBGb3JtR3JvdXAgfHwgZm9ybSBpbnN0YW5jZW9mIEZvcm1BcnJheSkge1xuICAgICAgLy8gVGhlIHJvb3QgZm9ybSBncm91cFxuICAgICAgdmFsdWUgPSB7XG4gICAgICAgIC4uLnRoaXMucmVzb2x2ZUZvcm1Ub1N0b3JlKGZvcm0pLFxuICAgICAgICBjb250cm9sczoge31cbiAgICAgIH07XG5cbiAgICAgIGZvciAoY29uc3Qga2V5IG9mIE9iamVjdC5rZXlzKGZvcm0uY29udHJvbHMpKSB7XG4gICAgICAgIGNvbnN0IGNvbnRyb2wgPSBmb3JtLmNvbnRyb2xzW2tleV07XG4gICAgICAgIGlmIChjb250cm9sIGluc3RhbmNlb2YgRm9ybUdyb3VwIHx8IGZvcm0gaW5zdGFuY2VvZiBGb3JtQXJyYXkpIHtcbiAgICAgICAgICB2YWx1ZS5jb250cm9sc1trZXldID0gdGhpcy5idWlsZEZvcm1TdG9yZVN0YXRlKGZvcm1OYW1lLCBjb250cm9sKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YWx1ZS5jb250cm9sc1trZXldID0gdGhpcy5yZXNvbHZlRm9ybVRvU3RvcmUoY29udHJvbCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZVN0b3JlKGZvcm1OYW1lOiBrZXlvZiBGb3Jtc1N0YXRlLCBmb3JtOiBBYnN0cmFjdENvbnRyb2wsIGluaXRpYWwgPSBmYWxzZSkge1xuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5idWlsZEZvcm1TdG9yZVN0YXRlKGZvcm1OYW1lLCBmb3JtKTtcbiAgICBhcHBseUFjdGlvbihcbiAgICAgICgpID0+IHtcbiAgICAgICAgdGhpcy5zdG9yZS51cGRhdGUoe1xuICAgICAgICAgIFtmb3JtTmFtZV06IHZhbHVlXG4gICAgICAgIH0gYXMgYW55KTtcbiAgICAgIH0sXG4gICAgICB7IHR5cGU6IGAke2luaXRpYWwgPyAnQ3JlYXRlJyA6ICdVcGRhdGUnfSAke2Zvcm1OYW1lfWAgfVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIHJlc29sdmVGb3JtVG9TdG9yZShjb250cm9sOiBQYXJ0aWFsPEFic3RyYWN0Q29udHJvbD4pOiBBa2l0YUFic3RyYWN0Q29udHJvbCB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHZhbHVlOiBjb250cm9sLnZhbHVlLFxuICAgICAgdmFsaWQ6IGNvbnRyb2wudmFsaWQsXG4gICAgICBkaXJ0eTogY29udHJvbC5kaXJ0eSxcbiAgICAgIGludmFsaWQ6IGNvbnRyb2wuaW52YWxpZCxcbiAgICAgIGRpc2FibGVkOiBjb250cm9sLmRpc2FibGVkLFxuICAgICAgZXJyb3JzOiBjb250cm9sLmVycm9ycyxcbiAgICAgIHRvdWNoZWQ6IGNvbnRyb2wudG91Y2hlZCxcbiAgICAgIHByaXN0aW5lOiBjb250cm9sLnByaXN0aW5lLFxuICAgICAgcGVuZGluZzogY29udHJvbC5wZW5kaW5nXG4gICAgfTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0VmFsaWRhdG9ycyhjb250cm9sOiBBYnN0cmFjdENvbnRyb2wsIHZhbGlkYXRvcjogVmFsaWRhdG9yRm4gfCBWYWxpZGF0b3JGbltdIHwgbnVsbCkge1xuICBjb250cm9sLnNldFZhbGlkYXRvcnMoY29lcmNlQXJyYXkodmFsaWRhdG9yKSk7XG4gIGNvbnRyb2wudXBkYXRlVmFsdWVBbmRWYWxpZGl0eSgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0QXN5bmNWYWxpZGF0b3JzKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCwgdmFsaWRhdG9yOiBBc3luY1ZhbGlkYXRvckZuIHwgQXN5bmNWYWxpZGF0b3JGbltdIHwgbnVsbCkge1xuICBjb250cm9sLnNldFZhbGlkYXRvcnMoY29lcmNlQXJyYXkodmFsaWRhdG9yKSk7XG4gIGNvbnRyb2wudXBkYXRlVmFsdWVBbmRWYWxpZGl0eSgpO1xufVxuIiwiLyoqXG4gKiBHZW5lcmF0ZWQgYnVuZGxlIGluZGV4LiBEbyBub3QgZWRpdC5cbiAqL1xuXG5leHBvcnQgKiBmcm9tICcuL3B1YmxpY19hcGknO1xuIl0sIm5hbWVzIjpbInRzbGliXzEuX19leHRlbmRzIiwidHNsaWJfMS5fX3ZhbHVlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7SUFLbUNBLDhCQUFRO0lBQ3pDLG9CQUFZLEtBQVE7ZUFDbEIsa0JBQU0sS0FBSyxDQUFDO0tBQ2I7SUFIVSxVQUFVO1FBSHRCLFdBQVcsQ0FBQztZQUNYLElBQUksRUFBRSxjQUFjO1NBQ3JCLENBQUM7O09BQ1csVUFBVSxDQUl0QjtJQUFELGlCQUFDO0NBQUEsQ0FKa0MsS0FBSzs7O0lDRkxBLDhCQUFRO0lBQ3pDLG9CQUFZLEtBQW9CO2VBQzlCLGtCQUFNLEtBQUssQ0FBQztLQUNiO0lBQ0gsaUJBQUM7Q0FKRCxDQUFtQyxLQUFLOzs7SUNnQ3RDO1FBVlEsaUJBQVksR0FBMEIsRUFBRSxDQUFDO1FBVy9DLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxVQUFVLENBQUMsRUFBZ0IsQ0FBQyxDQUFDO1FBQy9DLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQzFDO0lBWEQsc0JBQUksc0NBQUs7YUFBVDtZQUNFLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztTQUNwQjs7O09BQUE7SUFFRCxzQkFBSSxzQ0FBSzthQUFUO1lBQ0UsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO1NBQ3BCOzs7T0FBQTtJQU9ELHlDQUFXLEdBQVgsVUFBWSxRQUEwQixFQUFFLElBQWE7UUFDbkQsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQUEsT0FBTyxJQUFJLE9BQUEsT0FBTyxDQUFDLEtBQUssR0FBQSxDQUFDLENBQUMsQ0FBQztLQUMvRTtJQUVELHlDQUFXLEdBQVgsVUFBWSxRQUEwQixFQUFFLElBQWE7UUFDbkQsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQUEsT0FBTyxJQUFJLE9BQUEsT0FBTyxDQUFDLEtBQUssR0FBQSxDQUFDLENBQUMsQ0FBQztLQUMvRTtJQUVELDRDQUFjLEdBQWQsVUFBZSxRQUEwQixFQUFFLElBQWE7UUFDdEQsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQUEsT0FBTyxJQUFJLE9BQUEsT0FBTyxDQUFDLFFBQVEsR0FBQSxDQUFDLENBQUMsQ0FBQztLQUNsRjtJQUVELHlDQUFXLEdBQVgsVUFBcUIsUUFBMEIsRUFBRSxJQUFhO1FBQzVELE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFBLE9BQU8sSUFBSSxPQUFBLE9BQU8sQ0FBQyxLQUFLLEdBQUEsQ0FBQyxDQUFDLENBQUM7S0FDL0U7SUFFRCwwQ0FBWSxHQUFaLFVBQWEsUUFBMEIsRUFBRSxJQUFhO1FBQ3BELE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFBLE9BQU8sSUFBSSxPQUFBLE9BQU8sQ0FBQyxNQUFNLEdBQUEsQ0FBQyxDQUFDLENBQUM7S0FDaEY7Ozs7SUFLRCwyQ0FBYSxHQUFiLFVBQWMsUUFBMEIsRUFBRSxJQUFhO1FBQXZELGlCQVdDO1FBVkMsSUFBSSxDQUFDLElBQUksRUFBRTtZQUNULE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUNsQztRQUNELE9BQU8sSUFBSSxDQUFDLEtBQUs7YUFDZCxNQUFNLENBQUMsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFLLENBQUMsUUFBZSxDQUFDLEdBQUEsQ0FBQzthQUN2QyxJQUFJLENBQ0gsU0FBUyxFQUNULEdBQUcsQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLEtBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxHQUFBLENBQUMsRUFDNUMsb0JBQW9CLENBQUMsVUFBQyxDQUFDLEVBQUUsQ0FBQyxJQUFLLE9BQUEsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsS0FBSyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxHQUFBLENBQUMsQ0FDeEUsQ0FBQztLQUNMO0lBRUQsd0NBQVUsR0FBVixVQUFXLFFBQTBCLEVBQUUsSUFBYTtRQUNsRCxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ1QsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQy9CO1FBRUQsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQzFCLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDcEMsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztTQUN4QztRQUVELE9BQU8sSUFBSSxDQUFDO0tBQ2I7SUFFRCx3Q0FBVSxHQUFWLFVBQVcsUUFBMEI7UUFDbkMsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUssQ0FBQyxRQUFlLENBQUMsR0FBQSxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0tBQzNFO0lBRUQscUNBQU8sR0FBUCxVQUF1QyxRQUEwQjtRQUMvRCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUMsUUFBZSxDQUFDLENBQUM7S0FDbEQ7SUFFRCxxQ0FBTyxHQUFQLFVBQVEsUUFBMEI7UUFDaEMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztLQUNqQztJQUVELG9DQUFNLEdBQU4sVUFDRSxRQUEwQixFQUMxQixJQUFxQixFQUNyQixNQUlNO1FBUFIsaUJBMEJDO1FBdkJDLHVCQUFBLEVBQUEsV0FJTTtRQUVOLElBQU0sTUFBTSxZQUFRLEVBQUUsWUFBWSxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLEVBQUssTUFBTSxDQUFFLENBQUM7O1FBR3pFLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsS0FBSyxJQUFJLEVBQUU7WUFDbkMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsUUFBUSxFQUFFLElBQUksRUFBRSxNQUFNLENBQUMsaUJBQWlCLENBQUMsRUFBRTtnQkFDakYsU0FBUyxFQUFFLE1BQU0sQ0FBQyxTQUFTO2FBQzVCLENBQUMsQ0FBQztTQUNKO2FBQU07O1lBRUwsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1NBQ3hDO1FBRUQsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFlLENBQUMsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDLENBQUM7YUFDM0csSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUM7YUFDdkMsU0FBUyxDQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsR0FBQSxDQUFDLENBQUM7UUFFckQsT0FBTyxJQUFJLENBQUM7S0FDYjtJQUVELG9DQUFNLEdBQU4sVUFBTyxRQUEwQjtRQUFqQyxpQkFpQkM7UUFoQkMsSUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUMxQyxJQUFNLFFBQVEsR0FBd0IsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLENBQUMsVUFBQyxHQUFHLEVBQUUsZUFBZTtZQUN0RixJQUFJLFFBQVEsS0FBSyxlQUFlLEVBQUU7Z0JBQ2hDLEdBQUcsQ0FBQyxlQUFlLENBQUMsR0FBRyxRQUFRLENBQUMsZUFBZSxDQUFDLENBQUM7YUFDbEQ7aUJBQU07Z0JBQ0wsR0FBRyxDQUFDLGVBQWUsQ0FBQyxHQUFHLElBQUksQ0FBQzthQUM3QjtZQUNELE9BQU8sR0FBRyxDQUFDO1NBQ1osRUFBRSxFQUFFLENBQUMsQ0FBQztRQUVQLFdBQVcsQ0FDVDtZQUNFLEtBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLGNBQU0sT0FBQSxRQUFlLEdBQUEsQ0FBQyxDQUFDO1NBQzVDLEVBQ0QsRUFBRSxJQUFJLEVBQUUsV0FBUyxRQUFVLEVBQUUsQ0FDOUIsQ0FBQztLQUNIO0lBRUQseUNBQVcsR0FBWCxVQUFZLFFBQTJCOztRQUNyQyxJQUFJLFFBQVEsRUFBRTtZQUNaLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBZSxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDakQsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQWUsQ0FBQyxDQUFDO1NBQzNDO2FBQU07O2dCQUNMLEtBQW1CLElBQUEsS0FBQUMsU0FBQSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQSxnQkFBQSw0QkFBRTtvQkFBOUMsSUFBTSxNQUFJLFdBQUE7b0JBQ2IsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFJLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztpQkFDdkM7Ozs7Ozs7OztZQUNELElBQUksQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDO1NBQ3hCO0tBQ0Y7SUFFTyw0Q0FBYyxHQUF0QixVQUF1QixJQUFJLEVBQUUsSUFBWTtRQUNqQyxJQUFBLDRCQUFrQyxFQUFqQyxhQUFLLEVBQUUsa0JBQTBCLENBQUM7UUFDekMsSUFBSSxJQUFJLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtZQUNyQixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDN0I7UUFFRCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztLQUM5QztJQUVPLGtDQUFJLEdBQVosVUFBYSxPQUEyQixFQUFFLElBQWM7UUFDdEQsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQUMsT0FBMkIsRUFBRSxJQUFZO1lBQzNELE9BQU8sT0FBTyxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUM7U0FDOUUsRUFBRSxPQUFPLENBQUMsQ0FBQztLQUNiO0lBRU8sZ0RBQWtCLEdBQTFCLFVBQ0UsUUFBMEIsRUFDMUIsT0FBd0IsRUFDeEIsaUJBQXFFO1FBRXJFLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDcEMsSUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQzs7UUFFekIsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDbEIsT0FBTyxLQUFLLENBQUM7U0FDZDtRQUVELElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxFQUFFLE9BQU8sRUFBRSxpQkFBaUIsQ0FBQyxDQUFDO1FBQ3hELE9BQU8sS0FBSyxDQUFDO0tBQ2Q7SUFFTyw2Q0FBZSxHQUF2QixVQUNFLFNBQStCLEVBQy9CLE9BQXdCLEVBQ3hCLGlCQUFxRTtRQUh2RSxpQkF5QkM7UUFwQkMsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxFQUFFO1lBQzVCLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBb0IsQ0FBQyxDQUFDO1lBQ3RDLElBQUksQ0FBQyxpQkFBaUIsRUFBRTtnQkFDdEIsTUFBTSxJQUFJLEtBQUssQ0FBQyxrQ0FBa0MsQ0FBQyxDQUFDO2FBQ3JEO1lBQ0QsU0FBUyxDQUFDLE9BQU8sQ0FBQyxVQUFDLENBQUMsRUFBRSxDQUFDLElBQUssT0FBQyxPQUFxQixDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUcsaUJBQThCLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBQSxDQUFDLENBQUM7U0FDbkc7YUFBTTtZQUNMLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQUEsV0FBVztnQkFDeEMsSUFBTSxLQUFLLEdBQUcsU0FBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDO2dCQUNyQyxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksS0FBSyxZQUFZLFNBQVMsRUFBRTtvQkFDdEQsSUFBTSxTQUFPLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQWMsQ0FBQztvQkFDdEQsSUFBTSxJQUFFLEdBQUcsaUJBQWlCLENBQUMsV0FBVyxDQUFDLENBQUM7b0JBQzFDLElBQUksQ0FBQyxJQUFFLEVBQUU7d0JBQ1AsTUFBTSxJQUFJLEtBQUssQ0FBQywwQ0FBd0MsV0FBYSxDQUFDLENBQUM7cUJBQ3hFO29CQUNELEtBQUksQ0FBQyxVQUFVLENBQUMsU0FBTyxDQUFDLENBQUM7b0JBQ3pCLEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBQyxDQUFDLEVBQUUsQ0FBQyxJQUFLLE9BQUEsU0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsSUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUEsQ0FBQyxDQUFDO2lCQUNuRDthQUNGLENBQUMsQ0FBQztTQUNKO0tBQ0Y7SUFFTyx3Q0FBVSxHQUFsQixVQUFtQixPQUFrQjtRQUNuQyxPQUFPLE9BQU8sQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBQzNCLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDckI7S0FDRjtJQUVPLGlEQUFtQixHQUEzQixVQUE0QixRQUEwQixFQUFFLElBQXFCOztRQUMzRSxJQUFJLEtBQUssQ0FBQztRQUVWLElBQUksSUFBSSxZQUFZLFdBQVcsRUFBRTtZQUMvQixLQUFLLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3ZDO1FBRUQsSUFBSSxJQUFJLFlBQVksU0FBUyxJQUFJLElBQUksWUFBWSxTQUFTLEVBQUU7O1lBRTFELEtBQUssZ0JBQ0EsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxJQUNoQyxRQUFRLEVBQUUsRUFBRSxHQUNiLENBQUM7O2dCQUVGLEtBQWtCLElBQUEsS0FBQUEsU0FBQSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQSxnQkFBQSw0QkFBRTtvQkFBekMsSUFBTSxHQUFHLFdBQUE7b0JBQ1osSUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDbkMsSUFBSSxPQUFPLFlBQVksU0FBUyxJQUFJLElBQUksWUFBWSxTQUFTLEVBQUU7d0JBQzdELEtBQUssQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQztxQkFDbkU7eUJBQU07d0JBQ0wsS0FBSyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsT0FBTyxDQUFDLENBQUM7cUJBQ3hEO2lCQUNGOzs7Ozs7Ozs7U0FDRjtRQUVELE9BQU8sS0FBSyxDQUFDO0tBQ2Q7SUFFTyx5Q0FBVyxHQUFuQixVQUFvQixRQUEwQixFQUFFLElBQXFCLEVBQUUsT0FBZTtRQUF0RixpQkFVQztRQVZzRSx3QkFBQSxFQUFBLGVBQWU7UUFDcEYsSUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUN2RCxXQUFXLENBQ1Q7O1lBQ0UsS0FBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUM7Z0JBQ2hCLEdBQUMsUUFBUSxJQUFHLEtBQUs7a0JBQ1gsRUFBQyxDQUFDO1NBQ1gsRUFDRCxFQUFFLElBQUksRUFBRSxDQUFHLE9BQU8sR0FBRyxRQUFRLEdBQUcsUUFBUSxVQUFJLFFBQVUsRUFBRSxDQUN6RCxDQUFDO0tBQ0g7SUFFTyxnREFBa0IsR0FBMUIsVUFBMkIsT0FBaUM7UUFDMUQsT0FBTztZQUNMLEtBQUssRUFBRSxPQUFPLENBQUMsS0FBSztZQUNwQixLQUFLLEVBQUUsT0FBTyxDQUFDLEtBQUs7WUFDcEIsS0FBSyxFQUFFLE9BQU8sQ0FBQyxLQUFLO1lBQ3BCLE9BQU8sRUFBRSxPQUFPLENBQUMsT0FBTztZQUN4QixRQUFRLEVBQUUsT0FBTyxDQUFDLFFBQVE7WUFDMUIsTUFBTSxFQUFFLE9BQU8sQ0FBQyxNQUFNO1lBQ3RCLE9BQU8sRUFBRSxPQUFPLENBQUMsT0FBTztZQUN4QixRQUFRLEVBQUUsT0FBTyxDQUFDLFFBQVE7WUFDMUIsT0FBTyxFQUFFLE9BQU8sQ0FBQyxPQUFPO1NBQ3pCLENBQUM7S0FDSDs7Z0JBaFFGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7OzhCQXJCRDtDQW1CQSxJQWlRQztTQUVlLGFBQWEsQ0FBQyxPQUF3QixFQUFFLFNBQTZDO0lBQ25HLE9BQU8sQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7SUFDOUMsT0FBTyxDQUFDLHNCQUFzQixFQUFFLENBQUM7Q0FDbEM7QUFFRCxTQUFnQixrQkFBa0IsQ0FBQyxPQUF3QixFQUFFLFNBQXVEO0lBQ2xILE9BQU8sQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7SUFDOUMsT0FBTyxDQUFDLHNCQUFzQixFQUFFLENBQUM7Q0FDbEM7O0FDOVJEOztHQUVHOzs7OyJ9

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
/* harmony import */ var _modules_forms_datepicker_datepicker_datepicker_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../modules/forms/datepicker/datepicker/datepicker.component.ngfactory */ "./src/app/modules/forms/datepicker/datepicker/datepicker.component.ngfactory.js");
/* harmony import */ var _modules_overlay_tooltip_tooltip_tooltip_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../modules/overlay/tooltip/tooltip/tooltip.component.ngfactory */ "./src/app/modules/overlay/tooltip/tooltip/tooltip.component.ngfactory.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/esm5/overlay.es5.js");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/bidi */ "./node_modules/@angular/cdk/esm5/bidi.es5.js");
/* harmony import */ var _services_form_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/form.service */ "./src/app/application/loans/calculator/services/form.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _calculator_routing_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./calculator-routing.module */ "./src/app/application/loans/calculator/calculator-routing.module.ts");
/* harmony import */ var _modules_forms_card_card_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../modules/forms/card/card.module */ "./src/app/modules/forms/card/card.module.ts");
/* harmony import */ var _modules_forms_form_shared_form_shared_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../modules/forms/form-shared/form-shared.module */ "./src/app/modules/forms/form-shared/form-shared.module.ts");
/* harmony import */ var _modules_forms_checkbox_checkbox_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../modules/forms/checkbox/checkbox.module */ "./src/app/modules/forms/checkbox/checkbox.module.ts");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/cdk/platform */ "./node_modules/@angular/cdk/esm5/platform.es5.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm5/scrolling.es5.js");
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
/* harmony import */ var _modules_buttons_button_button_module__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ../../../modules/buttons/button/button.module */ "./src/app/modules/buttons/button/button.module.ts");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/esm5/portal.es5.js");
/* harmony import */ var _shared_cdk_cdk_module__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ../../../shared/cdk/cdk.module */ "./src/app/shared/cdk/cdk.module.ts");
/* harmony import */ var _modules_overlay_tooltip_tooltip_module__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ../../../modules/overlay/tooltip/tooltip.module */ "./src/app/modules/overlay/tooltip/tooltip.module.ts");
/* harmony import */ var _calculator_calculator_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./calculator/calculator.component */ "./src/app/application/loans/calculator/calculator/calculator.component.ts");
/* harmony import */ var _config_config_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./config/config.component */ "./src/app/application/loans/calculator/config/config.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 











































var CalculatorModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_calculator_module__WEBPACK_IMPORTED_MODULE_1__["CalculatorModule"], [], function (_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, [_node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ɵEmptyOutletComponentNgFactory"], _calculator_calculator_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["CalculatorComponentNgFactory"], _config_config_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["ConfigComponentNgFactory"], _modules_forms_datepicker_datepicker_datepicker_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["DatepickerComponentNgFactory"], _modules_overlay_tooltip_tooltip_tooltip_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["TooltipComponentNgFactory"]]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_common_common_a"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_j"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_j"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__["Overlay"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__["Overlay"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__["ScrollStrategyOptions"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__["OverlayContainer"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__["OverlayPositionBuilder"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__["OverlayKeyboardDispatcher"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["DOCUMENT"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__["Directionality"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_7__["Location"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__["ɵc"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__["ɵd"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _services_form_service__WEBPACK_IMPORTED_MODULE_11__["FormService"], _services_form_service__WEBPACK_IMPORTED_MODULE_11__["FormService"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClient"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_router__WEBPACK_IMPORTED_MODULE_13__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_13__["RouterModule"], [[2, _angular_router__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_router_router_a"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_13__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _calculator_routing_module__WEBPACK_IMPORTED_MODULE_14__["CalculatorRoutingModule"], _calculator_routing_module__WEBPACK_IMPORTED_MODULE_14__["CalculatorRoutingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _modules_forms_card_card_module__WEBPACK_IMPORTED_MODULE_15__["CardModule"], _modules_forms_card_card_module__WEBPACK_IMPORTED_MODULE_15__["CardModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_bc"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_bc"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _modules_forms_form_shared_form_shared_module__WEBPACK_IMPORTED_MODULE_16__["FormSharedModule"], _modules_forms_form_shared_form_shared_module__WEBPACK_IMPORTED_MODULE_16__["FormSharedModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _modules_forms_checkbox_checkbox_module__WEBPACK_IMPORTED_MODULE_17__["CheckboxModule"], _modules_forms_checkbox_checkbox_module__WEBPACK_IMPORTED_MODULE_17__["CheckboxModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__["BidiModule"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__["BidiModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_18__["PlatformModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_18__["PlatformModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_19__["ScrollingModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_19__["ScrollingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_20__["LayoutModule"], _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_20__["LayoutModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ngx_scrollbar__WEBPACK_IMPORTED_MODULE_21__["SmoothScrollModule"], ngx_scrollbar__WEBPACK_IMPORTED_MODULE_21__["SmoothScrollModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ngx_scrollbar__WEBPACK_IMPORTED_MODULE_21__["NgScrollbarModule"], ngx_scrollbar__WEBPACK_IMPORTED_MODULE_21__["NgScrollbarModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _modules_forms_dropdown_dropdown_module__WEBPACK_IMPORTED_MODULE_22__["DropdownModule"], _modules_forms_dropdown_dropdown_module__WEBPACK_IMPORTED_MODULE_22__["DropdownModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _modules_forms_form_layout_form_layout_module__WEBPACK_IMPORTED_MODULE_23__["FormLayoutModule"], _modules_forms_form_layout_form_layout_module__WEBPACK_IMPORTED_MODULE_23__["FormLayoutModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _modules_forms_hint_hint_module__WEBPACK_IMPORTED_MODULE_24__["HintModule"], _modules_forms_hint_hint_module__WEBPACK_IMPORTED_MODULE_24__["HintModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, angular2_text_mask__WEBPACK_IMPORTED_MODULE_25__["TextMaskModule"], angular2_text_mask__WEBPACK_IMPORTED_MODULE_25__["TextMaskModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _modules_forms_input_input_module__WEBPACK_IMPORTED_MODULE_26__["InputModule"], _modules_forms_input_input_module__WEBPACK_IMPORTED_MODULE_26__["InputModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _modules_forms_label_label_module__WEBPACK_IMPORTED_MODULE_27__["LabelModule"], _modules_forms_label_label_module__WEBPACK_IMPORTED_MODULE_27__["LabelModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _modules_forms_radio_radio_module__WEBPACK_IMPORTED_MODULE_28__["RadioModule"], _modules_forms_radio_radio_module__WEBPACK_IMPORTED_MODULE_28__["RadioModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _modules_forms_select_select_module__WEBPACK_IMPORTED_MODULE_29__["SelectModule"], _modules_forms_select_select_module__WEBPACK_IMPORTED_MODULE_29__["SelectModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _modules_forms_suggest_suggest_module__WEBPACK_IMPORTED_MODULE_30__["SuggestModule"], _modules_forms_suggest_suggest_module__WEBPACK_IMPORTED_MODULE_30__["SuggestModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _modules_forms_textarea_textarea_module__WEBPACK_IMPORTED_MODULE_31__["TextareaModule"], _modules_forms_textarea_textarea_module__WEBPACK_IMPORTED_MODULE_31__["TextareaModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _modules_forms_number_number_module__WEBPACK_IMPORTED_MODULE_32__["NumberModule"], _modules_forms_number_number_module__WEBPACK_IMPORTED_MODULE_32__["NumberModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _modules_forms_datepicker_datepicker_module__WEBPACK_IMPORTED_MODULE_33__["DatepickerModule"], _modules_forms_datepicker_datepicker_module__WEBPACK_IMPORTED_MODULE_33__["DatepickerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _modules_forms_switch_switch_module__WEBPACK_IMPORTED_MODULE_34__["SwitchModule"], _modules_forms_switch_switch_module__WEBPACK_IMPORTED_MODULE_34__["SwitchModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _modules_forms_iconinput_iconinput_module__WEBPACK_IMPORTED_MODULE_35__["IconinputModule"], _modules_forms_iconinput_iconinput_module__WEBPACK_IMPORTED_MODULE_35__["IconinputModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _modules_forms_form_module__WEBPACK_IMPORTED_MODULE_36__["FormModule"], _modules_forms_form_module__WEBPACK_IMPORTED_MODULE_36__["FormModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _modules_buttons_button_button_module__WEBPACK_IMPORTED_MODULE_37__["ButtonModule"], _modules_buttons_button_button_module__WEBPACK_IMPORTED_MODULE_37__["ButtonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_38__["PortalModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_38__["PortalModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__["OverlayModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__["OverlayModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _shared_cdk_cdk_module__WEBPACK_IMPORTED_MODULE_39__["CdkModule"], _shared_cdk_cdk_module__WEBPACK_IMPORTED_MODULE_39__["CdkModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _modules_overlay_tooltip_tooltip_module__WEBPACK_IMPORTED_MODULE_40__["TooltipModule"], _modules_overlay_tooltip_tooltip_module__WEBPACK_IMPORTED_MODULE_40__["TooltipModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _calculator_module__WEBPACK_IMPORTED_MODULE_1__["CalculatorModule"], _calculator_module__WEBPACK_IMPORTED_MODULE_1__["CalculatorModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_13__["ROUTES"], function () { return [[{ path: "", children: [{ path: "", component: _calculator_calculator_component__WEBPACK_IMPORTED_MODULE_41__["CalculatorComponent"] }, { path: "config", component: _config_config_component__WEBPACK_IMPORTED_MODULE_42__["ConfigComponent"] }] }]]; }, [])]); });



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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _modules_forms_form_layout_form_group_form_group_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../modules/forms/form-layout/form-group/form-group.component.ngfactory */ "./src/app/modules/forms/form-layout/form-group/form-group.component.ngfactory.js");
/* harmony import */ var _modules_forms_form_layout_form_group_form_group_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../modules/forms/form-layout/form-group/form-group.component */ "./src/app/modules/forms/form-layout/form-group/form-group.component.ts");
/* harmony import */ var _modules_forms_label_rosa_label_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../modules/forms/label/rosa-label.directive */ "./src/app/modules/forms/label/rosa-label.directive.ts");
/* harmony import */ var _modules_forms_iconinput_iconinput_iconinput_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../modules/forms/iconinput/iconinput/iconinput.component.ngfactory */ "./src/app/modules/forms/iconinput/iconinput/iconinput.component.ngfactory.js");
/* harmony import */ var _modules_forms_iconinput_iconinput_iconinput_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../modules/forms/iconinput/iconinput/iconinput.component */ "./src/app/modules/forms/iconinput/iconinput/iconinput.component.ts");
/* harmony import */ var _modules_forms_select_rosaselect_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../modules/forms/select/rosaselect.directive */ "./src/app/modules/forms/select/rosaselect.directive.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _modules_forms_hint_hint_hint_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../modules/forms/hint/hint/hint.component.ngfactory */ "./src/app/modules/forms/hint/hint/hint.component.ngfactory.js");
/* harmony import */ var _modules_forms_hint_hint_hint_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../modules/forms/hint/hint/hint.component */ "./src/app/modules/forms/hint/hint/hint.component.ts");
/* harmony import */ var _modules_forms_switch_switch_switch_component_ngfactory__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../modules/forms/switch/switch/switch.component.ngfactory */ "./src/app/modules/forms/switch/switch/switch.component.ngfactory.js");
/* harmony import */ var _modules_forms_switch_switch_switch_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../modules/forms/switch/switch/switch.component */ "./src/app/modules/forms/switch/switch/switch.component.ts");
/* harmony import */ var _components_story_card_story_card_component_ngfactory__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/story-card/story-card.component.ngfactory */ "./src/app/application/loans/calculator/components/story-card/story-card.component.ngfactory.js");
/* harmony import */ var _components_story_card_story_card_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/story-card/story-card.component */ "./src/app/application/loans/calculator/components/story-card/story-card.component.ts");
/* harmony import */ var _modules_forms_radio_radio_radio_component_ngfactory__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../modules/forms/radio/radio/radio.component.ngfactory */ "./src/app/modules/forms/radio/radio/radio.component.ngfactory.js");
/* harmony import */ var _modules_forms_radio_radio_radio_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../modules/forms/radio/radio/radio.component */ "./src/app/modules/forms/radio/radio/radio.component.ts");
/* harmony import */ var _modules_forms_checkbox_checkbox_checkbox_component_ngfactory__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../modules/forms/checkbox/checkbox/checkbox.component.ngfactory */ "./src/app/modules/forms/checkbox/checkbox/checkbox.component.ngfactory.js");
/* harmony import */ var _modules_forms_checkbox_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../../modules/forms/checkbox/checkbox/checkbox.component */ "./src/app/modules/forms/checkbox/checkbox/checkbox.component.ts");
/* harmony import */ var _modules_forms_input_input_directive__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../../modules/forms/input/input.directive */ "./src/app/modules/forms/input/input.directive.ts");
/* harmony import */ var _modules_buttons_button_button_button_component_ngfactory__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../../modules/buttons/button/button/button.component.ngfactory */ "./src/app/modules/buttons/button/button/button.component.ngfactory.js");
/* harmony import */ var _modules_buttons_button_button_button_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../../modules/buttons/button/button/button.component */ "./src/app/modules/buttons/button/button/button.component.ts");
/* harmony import */ var _calculator_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./calculator.component */ "./src/app/application/loans/calculator/calculator/calculator.component.ts");
/* harmony import */ var _services_form_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../services/form.service */ "./src/app/application/loans/calculator/services/form.service.ts");
/* harmony import */ var _bstorage_indexed_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../../../bstorage/indexed.service */ "./src/app/bstorage/indexed.service.ts");
/* harmony import */ var _state_calculator_query__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../state/calculator.query */ "./src/app/application/loans/calculator/state/calculator.query.ts");
/* harmony import */ var _state_calculator_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../state/calculator.service */ "./src/app/application/loans/calculator/state/calculator.service.ts");
/* harmony import */ var _datorama_akita_ng_forms_manager__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @datorama/akita-ng-forms-manager */ "./node_modules/@datorama/akita-ng-forms-manager/fesm5/datorama-akita-ng-forms-manager.js");
/* harmony import */ var _store_user_user_query__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../../../../store/user/user.query */ "./src/app/store/user/user.query.ts");
/* harmony import */ var _data_data_query__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../data/data.query */ "./src/app/application/loans/calculator/data/data.query.ts");
/* harmony import */ var _data_data_service__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../data/data.service */ "./src/app/application/loans/calculator/data/data.service.ts");
/* harmony import */ var _modules_overlay_toast_toast_service__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../../../../modules/overlay/toast/toast.service */ "./src/app/modules/overlay/toast/toast.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 

































var styles_CalculatorComponent = [_calculator_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_CalculatorComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_CalculatorComponent, data: {} });

function View_CalculatorComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "option", [], [[8, "selected", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectControlValueAccessor"]]], { ngValue: [0, "ngValue"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_s"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [8, null]], { ngValue: [0, "ngValue"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](3, null, ["", ""]))], function (_ck, _v) { var currVal_1 = _v.context.$implicit.key; _ck(_v, 1, 0, currVal_1); var currVal_2 = _v.context.$implicit.key; _ck(_v, 2, 0, currVal_2); }, function (_ck, _v) { var currVal_0 = (_v.context.index === 0); _ck(_v, 0, 0, currVal_0); var currVal_3 = _v.context.$implicit.value; _ck(_v, 3, 0, currVal_3); }); }
function View_CalculatorComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 19, "rosa-form-group", [], null, null, null, _modules_forms_form_layout_form_group_form_group_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_FormGroupComponent_0"], _modules_forms_form_layout_form_group_form_group_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_FormGroupComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _modules_forms_form_layout_form_group_form_group_component__WEBPACK_IMPORTED_MODULE_4__["FormGroupComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, 0, 2, "label", [["form-group", "label"], ["rosaLabel", ""]], [[2, "rosa-label", null], [2, "rosa-label__m", null], [2, "rosa-label__lg", null]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 16384, null, 0, _modules_forms_label_rosa_label_directive__WEBPACK_IMPORTED_MODULE_5__["RosaLabelDirective"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\u041B\u0438\u043C\u0438\u0442"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, 1, 11, "rosa-iconinput", [["form-group", "control"]], null, null, null, _modules_forms_iconinput_iconinput_iconinput_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["View_IconinputComponent_0"], _modules_forms_iconinput_iconinput_iconinput_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["RenderType_IconinputComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 114688, null, 0, _modules_forms_iconinput_iconinput_iconinput_component__WEBPACK_IMPORTED_MODULE_7__["IconinputComponent"], [], { icon: [0, "icon"], position: [1, "position"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, 0, 9, "select", [["rosaSelect", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [2, "rosa-select", null]], [[null, "change"], [null, "blur"]], function (_v, en, $event) { var ad = true; if (("change" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).onChange($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).onTouched() !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectControlValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectControlValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 540672, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlDirective"], [[8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_k"]]], { form: [0, "form"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlDirective"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](12, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](13, 16384, null, 0, _modules_forms_select_rosaselect_directive__WEBPACK_IMPORTED_MODULE_8__["RosaselectDirective"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 2, null, View_CalculatorComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](15, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](0, _angular_common__WEBPACK_IMPORTED_MODULE_9__["KeyValuePipe"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](17, 0, null, 2, 2, "rosa-hint", [["form-group", "hint"]], null, null, null, _modules_forms_hint_hint_hint_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__["View_HintComponent_0"], _modules_forms_hint_hint_hint_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__["RenderType_HintComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](18, 114688, null, 0, _modules_forms_hint_hint_hint_component__WEBPACK_IMPORTED_MODULE_11__["HintComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\u0414\u043B\u044F \u043E\u0432\u0435\u0434\u0440\u0430\u0444\u0442\u0430 \u043B\u0438\u043C\u0438\u0442 \u043D\u0435 \u0443\u043A\u0430\u0437\u044B\u0432\u0430\u0435\u0442\u0441\u044F"]))], function (_ck, _v) { var _co = _v.component; _ck(_v, 1, 0); var currVal_3 = "dropdown"; var currVal_4 = "right"; _ck(_v, 6, 0, currVal_3, currVal_4); var currVal_13 = _co.calculator.controls["amount"]; _ck(_v, 10, 0, currVal_13); var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 15, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).transform(_co.amount)); _ck(_v, 15, 0, currVal_14); _ck(_v, 18, 0); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).label; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).medium; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).large; _ck(_v, 2, 0, currVal_0, currVal_1, currVal_2); var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).ngClassUntouched; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).ngClassTouched; var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).ngClassPristine; var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).ngClassDirty; var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).ngClassValid; var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).ngClassInvalid; var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).ngClassPending; var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13).medium; _ck(_v, 7, 0, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12); }); }
function View_CalculatorComponent_4(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "option", [], [[8, "selected", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectControlValueAccessor"]]], { ngValue: [0, "ngValue"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_s"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [8, null]], { ngValue: [0, "ngValue"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](3, null, ["", ""]))], function (_ck, _v) { var currVal_1 = _v.context.$implicit.key; _ck(_v, 1, 0, currVal_1); var currVal_2 = _v.context.$implicit.key; _ck(_v, 2, 0, currVal_2); }, function (_ck, _v) { var currVal_0 = (_v.context.index === 0); _ck(_v, 0, 0, currVal_0); var currVal_3 = _v.context.$implicit.value; _ck(_v, 3, 0, currVal_3); }); }
function View_CalculatorComponent_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 19, "rosa-form-group", [], null, null, null, _modules_forms_form_layout_form_group_form_group_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_FormGroupComponent_0"], _modules_forms_form_layout_form_group_form_group_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_FormGroupComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _modules_forms_form_layout_form_group_form_group_component__WEBPACK_IMPORTED_MODULE_4__["FormGroupComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, 0, 2, "label", [["form-group", "label"], ["rosaLabel", ""]], [[2, "rosa-label", null], [2, "rosa-label__m", null], [2, "rosa-label__lg", null]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 16384, null, 0, _modules_forms_label_rosa_label_directive__WEBPACK_IMPORTED_MODULE_5__["RosaLabelDirective"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\u041E\u0431\u0435\u0441\u043F\u0435\u0447\u0435\u043D\u0438\u0435"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, 1, 11, "rosa-iconinput", [["form-group", "control"]], null, null, null, _modules_forms_iconinput_iconinput_iconinput_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["View_IconinputComponent_0"], _modules_forms_iconinput_iconinput_iconinput_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["RenderType_IconinputComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 114688, null, 0, _modules_forms_iconinput_iconinput_iconinput_component__WEBPACK_IMPORTED_MODULE_7__["IconinputComponent"], [], { icon: [0, "icon"], position: [1, "position"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, 0, 9, "select", [["rosaSelect", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [2, "rosa-select", null]], [[null, "change"], [null, "blur"]], function (_v, en, $event) { var ad = true; if (("change" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).onChange($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).onTouched() !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectControlValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectControlValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 540672, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlDirective"], [[8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_k"]]], { form: [0, "form"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlDirective"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](12, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](13, 16384, null, 0, _modules_forms_select_rosaselect_directive__WEBPACK_IMPORTED_MODULE_8__["RosaselectDirective"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 2, null, View_CalculatorComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](15, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](0, _angular_common__WEBPACK_IMPORTED_MODULE_9__["KeyValuePipe"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](17, 0, null, 2, 2, "rosa-hint", [["form-group", "hint"]], null, null, null, _modules_forms_hint_hint_hint_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__["View_HintComponent_0"], _modules_forms_hint_hint_hint_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__["RenderType_HintComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](18, 114688, null, 0, _modules_forms_hint_hint_hint_component__WEBPACK_IMPORTED_MODULE_11__["HintComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["*\u00A0\u0414\u043E\u043B\u044F \u043A\u0440\u0435\u0434\u0438\u0442\u0430/\u043B\u0438\u043C\u0438\u0442\u0430, \u043E\u0431\u0435\u0441\u043F\u0435\u0447\u0435\u043D\u043D\u043E\u0433\u043E \u043D\u0435\u0434\u0432\u0438\u0436\u0438\u043C\u043E\u0441\u0442\u044C\u044E/\u043F\u043E\u0440\u0443\u0447\u0438\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u043E\u043C \u0424\u043E\u043D\u0434\u0430"]))], function (_ck, _v) { var _co = _v.component; _ck(_v, 1, 0); var currVal_3 = "dropdown"; var currVal_4 = "right"; _ck(_v, 6, 0, currVal_3, currVal_4); var currVal_13 = _co.calculator.controls["collateral"]; _ck(_v, 10, 0, currVal_13); var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 15, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).transform(_co.collateral)); _ck(_v, 15, 0, currVal_14); _ck(_v, 18, 0); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).label; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).medium; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).large; _ck(_v, 2, 0, currVal_0, currVal_1, currVal_2); var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).ngClassUntouched; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).ngClassTouched; var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).ngClassPristine; var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).ngClassDirty; var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).ngClassValid; var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).ngClassInvalid; var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).ngClassPending; var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13).medium; _ck(_v, 7, 0, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12); }); }
function View_CalculatorComponent_5(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["\u0414\u0435\u0439\u0441\u0442\u0432\u0443\u044E\u0449\u0438\u0435 \u0441\u0442\u0430\u0432\u043A\u0438 \u043E\u0442 ", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](2, 2)], null, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 1, 0, _ck(_v, 2, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 0), _v.context.ngIf, "dd MMM")); _ck(_v, 1, 0, currVal_0); }); }
function View_CalculatorComponent_6(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 7, "rosa-switch", [], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], null, null, _modules_forms_switch_switch_switch_component_ngfactory__WEBPACK_IMPORTED_MODULE_12__["View_SwitchComponent_0"], _modules_forms_switch_switch_switch_component_ngfactory__WEBPACK_IMPORTED_MODULE_12__["RenderType_SwitchComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _modules_forms_switch_switch_switch_component__WEBPACK_IMPORTED_MODULE_13__["SwitchComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_modules_forms_switch_switch_switch_component__WEBPACK_IMPORTED_MODULE_13__["SwitchComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 540672, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlDirective"], [[8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_k"]]], { form: [0, "form"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlDirective"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](6, 0, ["\u0420\u0430\u0441\u0441\u0447\u0438\u0442\u0430\u0442\u044C \u043F\u043E \u0432\u0435\u0440\u0441\u0438\u0438 \u043E\u0442 ", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](7, 2)], function (_ck, _v) { var _co = _v.component; _ck(_v, 1, 0); var currVal_7 = _co.version.controls["toggle"]; _ck(_v, 3, 0, currVal_7); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).ngClassUntouched; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).ngClassTouched; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).ngClassPristine; var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).ngClassDirty; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).ngClassValid; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).ngClassInvalid; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).ngClassPending; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6); var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 6, 0, _ck(_v, 7, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 0), _v.context.ngIf, "dd MMM")); _ck(_v, 6, 0, currVal_8); }); }
function View_CalculatorComponent_8(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "rosa-story-card", [], null, [[null, "copied"], ["document", "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("document:click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).onClick($event.target) !== false);
        ad = (pd_0 && ad);
    } if (("copied" === en)) {
        var pd_1 = (_co.showToastMessage($event) !== false);
        ad = (pd_1 && ad);
    } return ad; }, _components_story_card_story_card_component_ngfactory__WEBPACK_IMPORTED_MODULE_14__["View_StoryCardComponent_0"], _components_story_card_story_card_component_ngfactory__WEBPACK_IMPORTED_MODULE_14__["RenderType_StoryCardComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _components_story_card_story_card_component__WEBPACK_IMPORTED_MODULE_15__["StoryCardComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], { story: [0, "story"] }, { copied: "copied" })], function (_ck, _v) { var currVal_0 = _v.context.$implicit; _ck(_v, 1, 0, currVal_0); }, null); }
function View_CalculatorComponent_7(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "div", [["class", "calculator-history"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CalculatorComponent_8)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var currVal_0 = _v.context.ngIf; _ck(_v, 2, 0, currVal_0); }, null); }
function View_CalculatorComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](0, _angular_common__WEBPACK_IMPORTED_MODULE_9__["DatePipe"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 140, "div", [["class", "calculator-wrapper"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 139, "div", [["class", "pane"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 138, "div", [["class", "calculator-grid"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 74, "div", [["class", "calculator-form col-7"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 2, "div", [["class", "calculator-header"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 1, "h1", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\u041A\u0440\u0435\u0434\u0438\u0442\u043D\u044B\u0439 \u043A\u0430\u043B\u044C\u043A\u0443\u043B\u044F\u0442\u043E\u0440"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 70, "form", [["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "submit"], [null, "reset"]], function (_v, en, $event) { var ad = true; if (("submit" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).onSubmit($event) !== false);
        ad = (pd_0 && ad);
    } if (("reset" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).onReset() !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_bh"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 540672, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], [[8, null], [8, null]], { form: [0, "form"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](12, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 14, "rosa-form-group", [], null, null, null, _modules_forms_form_layout_form_group_form_group_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_FormGroupComponent_0"], _modules_forms_form_layout_form_group_form_group_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_FormGroupComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](14, 114688, null, 0, _modules_forms_form_layout_form_group_form_group_component__WEBPACK_IMPORTED_MODULE_4__["FormGroupComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, 0, 2, "label", [["form-group", "label"], ["rosaLabel", ""]], [[2, "rosa-label", null], [2, "rosa-label__m", null], [2, "rosa-label__lg", null]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](16, 16384, null, 0, _modules_forms_label_rosa_label_directive__WEBPACK_IMPORTED_MODULE_5__["RosaLabelDirective"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\u0421\u0435\u0433\u043C\u0435\u043D\u0442"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, 1, 4, "rosa-radio", [["form-group", "control"]], null, null, null, _modules_forms_radio_radio_radio_component_ngfactory__WEBPACK_IMPORTED_MODULE_16__["View_RadioComponent_0"], _modules_forms_radio_radio_radio_component_ngfactory__WEBPACK_IMPORTED_MODULE_16__["RenderType_RadioComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](5120, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_modules_forms_radio_radio_radio_component__WEBPACK_IMPORTED_MODULE_17__["RadioComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](5120, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"], function (p0_0) { return [p0_0]; }, [_modules_forms_radio_radio_radio_component__WEBPACK_IMPORTED_MODULE_17__["RadioComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](21, 114688, null, 0, _modules_forms_radio_radio_radio_component__WEBPACK_IMPORTED_MODULE_17__["RadioComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], { name: [0, "name"], value: [1, "value"], controlOptions: [2, "controlOptions"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\u041C\u0430\u043B\u044B\u0439 \u0431\u0438\u0437\u043D\u0435\u0441"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](23, 0, null, 1, 4, "rosa-radio", [["form-group", "control"]], null, null, null, _modules_forms_radio_radio_radio_component_ngfactory__WEBPACK_IMPORTED_MODULE_16__["View_RadioComponent_0"], _modules_forms_radio_radio_radio_component_ngfactory__WEBPACK_IMPORTED_MODULE_16__["RenderType_RadioComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](5120, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_modules_forms_radio_radio_radio_component__WEBPACK_IMPORTED_MODULE_17__["RadioComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](5120, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"], function (p0_0) { return [p0_0]; }, [_modules_forms_radio_radio_radio_component__WEBPACK_IMPORTED_MODULE_17__["RadioComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](26, 114688, null, 0, _modules_forms_radio_radio_radio_component__WEBPACK_IMPORTED_MODULE_17__["RadioComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], { name: [0, "name"], value: [1, "value"], controlOptions: [2, "controlOptions"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\u041C\u0438\u043A\u0440\u043E-\u0431\u0438\u0437\u043D\u0435\u0441"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](28, 0, null, null, 9, "rosa-form-group", [], null, null, null, _modules_forms_form_layout_form_group_form_group_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_FormGroupComponent_0"], _modules_forms_form_layout_form_group_form_group_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_FormGroupComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](29, 114688, null, 0, _modules_forms_form_layout_form_group_form_group_component__WEBPACK_IMPORTED_MODULE_4__["FormGroupComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](30, 0, null, 0, 2, "label", [["form-group", "label"], ["rosaLabel", ""]], [[2, "rosa-label", null], [2, "rosa-label__m", null], [2, "rosa-label__lg", null]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](31, 16384, null, 0, _modules_forms_label_rosa_label_directive__WEBPACK_IMPORTED_MODULE_5__["RosaLabelDirective"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\u0414\u043E\u0431\u0440\u043E\u0441\u043E\u0432\u0435\u0441\u0442\u043D\u044B\u0439 \u043A\u043B\u0438\u0435\u043D\u0442"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](33, 0, null, 1, 4, "rosa-checkbox", [["form-group", "control"]], null, null, null, _modules_forms_checkbox_checkbox_checkbox_component_ngfactory__WEBPACK_IMPORTED_MODULE_18__["View_CheckboxComponent_0"], _modules_forms_checkbox_checkbox_checkbox_component_ngfactory__WEBPACK_IMPORTED_MODULE_18__["RenderType_CheckboxComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](5120, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_modules_forms_checkbox_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_19__["CheckboxComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](35, 114688, null, 0, _modules_forms_checkbox_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_19__["CheckboxComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], { name: [0, "name"], value: [1, "value"], controlOptions: [2, "controlOptions"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](36, 0, null, 0, 1, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0441\u043A\u0438\u0434\u043A\u0443 0.3%"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](38, 0, null, null, 17, "rosa-form-group", [], null, null, null, _modules_forms_form_layout_form_group_form_group_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_FormGroupComponent_0"], _modules_forms_form_layout_form_group_form_group_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_FormGroupComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](39, 114688, null, 0, _modules_forms_form_layout_form_group_form_group_component__WEBPACK_IMPORTED_MODULE_4__["FormGroupComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](40, 0, null, 0, 2, "label", [["form-group", "label"], ["labelSize", "medium"], ["rosaLabel", ""]], [[2, "rosa-label", null], [2, "rosa-label__m", null], [2, "rosa-label__lg", null]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](41, 16384, null, 0, _modules_forms_label_rosa_label_directive__WEBPACK_IMPORTED_MODULE_5__["RosaLabelDirective"], [], { setSize: [0, "setSize"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\u0422\u0438\u043F \u043A\u0440\u0435\u0434\u0438\u0442\u0430"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](43, 0, null, 1, 4, "rosa-radio", [["form-group", "control"]], null, null, null, _modules_forms_radio_radio_radio_component_ngfactory__WEBPACK_IMPORTED_MODULE_16__["View_RadioComponent_0"], _modules_forms_radio_radio_radio_component_ngfactory__WEBPACK_IMPORTED_MODULE_16__["RenderType_RadioComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](5120, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_modules_forms_radio_radio_radio_component__WEBPACK_IMPORTED_MODULE_17__["RadioComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](5120, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"], function (p0_0) { return [p0_0]; }, [_modules_forms_radio_radio_radio_component__WEBPACK_IMPORTED_MODULE_17__["RadioComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](46, 114688, null, 0, _modules_forms_radio_radio_radio_component__WEBPACK_IMPORTED_MODULE_17__["RadioComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], { name: [0, "name"], value: [1, "value"], controlOptions: [2, "controlOptions"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\u041A\u0440\u0435\u0434\u0438\u0442"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](48, 0, null, 1, 4, "rosa-radio", [["form-group", "control"]], null, null, null, _modules_forms_radio_radio_radio_component_ngfactory__WEBPACK_IMPORTED_MODULE_16__["View_RadioComponent_0"], _modules_forms_radio_radio_radio_component_ngfactory__WEBPACK_IMPORTED_MODULE_16__["RenderType_RadioComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](5120, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_modules_forms_radio_radio_radio_component__WEBPACK_IMPORTED_MODULE_17__["RadioComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](5120, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"], function (p0_0) { return [p0_0]; }, [_modules_forms_radio_radio_radio_component__WEBPACK_IMPORTED_MODULE_17__["RadioComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](51, 114688, null, 0, _modules_forms_radio_radio_radio_component__WEBPACK_IMPORTED_MODULE_17__["RadioComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], { name: [0, "name"], value: [1, "value"], controlOptions: [2, "controlOptions"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\u041E\u0432\u0435\u0440\u0434\u0440\u0430\u0444\u0442"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](53, 0, null, 2, 2, "rosa-hint", [["form-group", "hint"]], null, null, null, _modules_forms_hint_hint_hint_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__["View_HintComponent_0"], _modules_forms_hint_hint_hint_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__["RenderType_HintComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](54, 114688, null, 0, _modules_forms_hint_hint_hint_component__WEBPACK_IMPORTED_MODULE_11__["HintComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\u0414\u043B\u044F \u043E\u0432\u0435\u0434\u0440\u0430\u0444\u0442\u0430 \u0441\u0440\u043E\u043A \u043D\u0435 \u0443\u043A\u0430\u0437\u044B\u0432\u0430\u0435\u0442\u0441\u044F"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](56, 0, null, null, 18, "rosa-form-group", [], null, null, null, _modules_forms_form_layout_form_group_form_group_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_FormGroupComponent_0"], _modules_forms_form_layout_form_group_form_group_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_FormGroupComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](57, 114688, null, 0, _modules_forms_form_layout_form_group_form_group_component__WEBPACK_IMPORTED_MODULE_4__["FormGroupComponent"], [], { layout: [0, "layout"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](58, 0, null, 0, 2, "label", [["form-group", "label"], ["rosaLabel", ""]], [[2, "rosa-label", null], [2, "rosa-label__m", null], [2, "rosa-label__lg", null]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](59, 16384, null, 0, _modules_forms_label_rosa_label_directive__WEBPACK_IMPORTED_MODULE_5__["RosaLabelDirective"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](60, null, ["\u0421\u0440\u043E\u043A \u043A\u0440\u0435\u0434\u0438\u0442\u0430 (\u043E\u0442 ", " \u0434\u043E ", " \u043C\u0435\u0441.)"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](61, 0, null, 1, 10, "div", [["class", "input__suffix-group"], ["form-group", "control"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](62, 0, null, null, 7, "input", [["rosaInput", ""], ["type", "number"]], [[8, "min", 0], [8, "max", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [2, "rosa-input", null], [2, "rosa-textarea", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"], [null, "change"]], function (_v, en, $event) { var ad = true; if (("input" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 63)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 63).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 63)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 63)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } if (("change" === en)) {
        var pd_4 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 64).onChange($event.target.value) !== false);
        ad = (pd_4 && ad);
    } if (("input" === en)) {
        var pd_5 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 64).onChange($event.target.value) !== false);
        ad = (pd_5 && ad);
    } if (("blur" === en)) {
        var pd_6 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 64).onTouched() !== false);
        ad = (pd_6 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](63, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](64, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_be"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"], function (p0_0, p1_0) { return [p0_0, p1_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_be"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](66, 540672, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlDirective"], [[8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_k"]]], { form: [0, "form"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlDirective"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](68, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](69, 16384, null, 0, _modules_forms_input_input_directive__WEBPACK_IMPORTED_MODULE_20__["RosainputDirective"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](70, 0, null, null, 1, "div", [["class", "input-suffix"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\u043C\u0435\u0441."])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](72, 0, null, 2, 2, "rosa-hint", [["form-group", "hint"]], null, null, null, _modules_forms_hint_hint_hint_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__["View_HintComponent_0"], _modules_forms_hint_hint_hint_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__["RenderType_HintComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](73, 114688, null, 0, _modules_forms_hint_hint_hint_component__WEBPACK_IMPORTED_MODULE_11__["HintComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\u041F\u0440\u0438 \u0441\u0440\u043E\u043A\u0435 \u0431\u043E\u043B\u0435\u0435 60 \u043C\u0435\u0441. \u0443\u043A\u0430\u0437\u044B\u0432\u0430\u0435\u0442\u0441\u044F \u0441\u0440\u043E\u043A 84 \u043C\u0435\u0441."])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CalculatorComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](76, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CalculatorComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](78, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](79, 0, null, null, 62, "div", [["class", "calculator-result col-5"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](80, 0, null, null, 16, "div", [["class", "calculator-version"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 2, null, View_CalculatorComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](82, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _angular_common__WEBPACK_IMPORTED_MODULE_9__["AsyncPipe"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](84, 0, null, null, 0, "div", [["class", "divider"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](85, 0, null, null, 11, "div", [["class", "calculator-version_previous"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](86, 0, null, null, 7, "form", [["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "submit"], [null, "reset"]], function (_v, en, $event) { var ad = true; if (("submit" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 88).onSubmit($event) !== false);
        ad = (pd_0 && ad);
    } if (("reset" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 88).onReset() !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](87, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_bh"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](88, 540672, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], [[8, null], [8, null]], { form: [0, "form"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](90, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 2, null, View_CalculatorComponent_6)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](92, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _angular_common__WEBPACK_IMPORTED_MODULE_9__["AsyncPipe"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](94, 0, null, null, 2, "rosa-hint", [], null, null, null, _modules_forms_hint_hint_hint_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__["View_HintComponent_0"], _modules_forms_hint_hint_hint_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__["RenderType_HintComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](95, 114688, null, 0, _modules_forms_hint_hint_hint_component__WEBPACK_IMPORTED_MODULE_11__["HintComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\u043D\u0430\u0436\u043C\u0438\u0442\u0435 \u0447\u0442\u043E\u0431\u044B \u0440\u0430\u0441\u0441\u0447\u0438\u0442\u0430\u0442\u044C \u043F\u043E \u0441\u0442\u0430\u0432\u043A\u0430\u043C \u043F\u0440\u043E\u0448\u043B\u043E\u0433\u043E \u043F\u0435\u0440\u0438\u043E\u0434\u0430"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](97, 0, null, null, 41, "div", [["class", "calculator-result_card"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](98, 0, null, null, 1, "h3", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\u0418\u0442\u043E\u0433\u043E\u0432\u0430\u044F \u0441\u0442\u0430\u0432\u043A\u0430"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](100, 0, null, null, 4, "div", [["class", "result_value"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](101, 0, null, null, 1, "span", [["class", "key"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["FTP"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](103, 0, null, null, 1, "span", [["class", "value"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](104, null, ["", "%"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](105, 0, null, null, 4, "div", [["class", "result_value"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](106, 0, null, null, 1, "span", [["class", "key"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\u0412\u0430\u043B.\u043C\u0430\u0440\u0436\u0430"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](108, 0, null, null, 1, "span", [["class", "value"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](109, null, ["", "%"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](110, 0, null, null, 4, "div", [["class", "result_value"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](111, 0, null, null, 1, "span", [["class", "key"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\u0421\u043A\u0438\u0434\u043A\u0430"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](113, 0, null, null, 1, "span", [["class", "value"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](114, null, ["", "%"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](115, 0, null, null, 0, "div", [["class", "divider"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](116, 0, null, null, 4, "div", [["class", "result_value summary"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](117, 0, null, null, 1, "span", [["class", "key"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\u0418\u0442\u043E\u0433\u043E"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](119, 0, null, null, 1, "span", [["class", "value"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](120, null, ["", "%"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](121, 0, null, null, 17, "div", [["class", "result_save-form"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](122, 0, null, null, 1, "h3", [["class", "saveform-header"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u0440\u0430\u0441\u0441\u0447\u0435\u0442"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](124, 0, null, null, 14, "form", [["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "submit"], [null, "reset"]], function (_v, en, $event) { var ad = true; if (("submit" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 126).onSubmit($event) !== false);
        ad = (pd_0 && ad);
    } if (("reset" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 126).onReset() !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](125, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_bh"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](126, 540672, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], [[8, null], [8, null]], { form: [0, "form"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](128, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](129, 0, null, null, 6, "input", [["placeholder", "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043A\u043B\u0438\u0435\u043D\u0442\u0430"], ["rosaInput", ""], ["type", "text"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [2, "rosa-input", null], [2, "rosa-textarea", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; if (("input" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 130)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 130).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 130)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 130)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](130, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](132, 540672, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlDirective"], [[8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_k"]]], { form: [0, "form"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlDirective"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](134, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](135, 16384, null, 0, _modules_forms_input_input_directive__WEBPACK_IMPORTED_MODULE_20__["RosainputDirective"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](136, 0, null, null, 2, "rosa-button", [["form-group", "control"], ["type", "'submit'"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.saveCalculateResult() !== false);
        ad = (pd_0 && ad);
    } return ad; }, _modules_buttons_button_button_button_component_ngfactory__WEBPACK_IMPORTED_MODULE_21__["View_ButtonComponent_0"], _modules_buttons_button_button_button_component_ngfactory__WEBPACK_IMPORTED_MODULE_21__["RenderType_ButtonComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](137, 638976, [["saveHistory", 4]], 0, _modules_buttons_button_button_button_component__WEBPACK_IMPORTED_MODULE_22__["ButtonComponent"], [], { type: [0, "type"], button: [1, "button"], size: [2, "size"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 2, null, View_CalculatorComponent_7)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](140, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _angular_common__WEBPACK_IMPORTED_MODULE_9__["AsyncPipe"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])], function (_ck, _v) { var _co = _v.component; var currVal_7 = _co.calculator; _ck(_v, 10, 0, currVal_7); _ck(_v, 14, 0); var currVal_11 = "segment"; var currVal_12 = "small"; var currVal_13 = _co.calculator.controls["segment"]; _ck(_v, 21, 0, currVal_11, currVal_12, currVal_13); var currVal_14 = "segment"; var currVal_15 = "micro"; var currVal_16 = _co.calculator.controls["segment"]; _ck(_v, 26, 0, currVal_14, currVal_15, currVal_16); _ck(_v, 29, 0); var currVal_20 = "decent"; var currVal_21 = "decent"; var currVal_22 = _co.calculator.controls["decent"]; _ck(_v, 35, 0, currVal_20, currVal_21, currVal_22); _ck(_v, 39, 0); var currVal_26 = "medium"; _ck(_v, 41, 0, currVal_26); var currVal_27 = "type"; var currVal_28 = "credit"; var currVal_29 = _co.calculator.controls["type"]; _ck(_v, 46, 0, currVal_27, currVal_28, currVal_29); var currVal_30 = "type"; var currVal_31 = "overdraft"; var currVal_32 = _co.calculator.controls["type"]; _ck(_v, 51, 0, currVal_30, currVal_31, currVal_32); _ck(_v, 54, 0); var currVal_33 = "form-group_group"; _ck(_v, 57, 0, currVal_33); var currVal_50 = _co.calculator.controls["range"]; _ck(_v, 66, 0, currVal_50); _ck(_v, 73, 0); var currVal_51 = _co.amount; _ck(_v, 76, 0, currVal_51); var currVal_52 = _co.collateral; _ck(_v, 78, 0, currVal_52); var currVal_53 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 82, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 83).transform(_co.lastVersion$)); _ck(_v, 82, 0, currVal_53); var currVal_61 = _co.version; _ck(_v, 88, 0, currVal_61); var currVal_62 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 92, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 93).transform(_co.prevVersion$)); _ck(_v, 92, 0, currVal_62); _ck(_v, 95, 0); var currVal_74 = _co.history; _ck(_v, 126, 0, currVal_74); var currVal_84 = _co.history.controls["note"]; _ck(_v, 132, 0, currVal_84); var currVal_85 = "'submit'"; var currVal_86 = "secondary"; var currVal_87 = "inline"; _ck(_v, 137, 0, currVal_85, currVal_86, currVal_87); var currVal_88 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 140, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 141).transform(_co.history$)); _ck(_v, 140, 0, currVal_88); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).ngClassUntouched; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).ngClassTouched; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).ngClassPristine; var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).ngClassDirty; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).ngClassValid; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).ngClassInvalid; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).ngClassPending; _ck(_v, 8, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6); var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).label; var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).medium; var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).large; _ck(_v, 15, 0, currVal_8, currVal_9, currVal_10); var currVal_17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 31).label; var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 31).medium; var currVal_19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 31).large; _ck(_v, 30, 0, currVal_17, currVal_18, currVal_19); var currVal_23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 41).label; var currVal_24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 41).medium; var currVal_25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 41).large; _ck(_v, 40, 0, currVal_23, currVal_24, currVal_25); var currVal_34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 59).label; var currVal_35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 59).medium; var currVal_36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 59).large; _ck(_v, 58, 0, currVal_34, currVal_35, currVal_36); var currVal_37 = _co.range.min; var currVal_38 = _co.range.max; _ck(_v, 60, 0, currVal_37, currVal_38); var currVal_39 = 3; var currVal_40 = 84; var currVal_41 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 68).ngClassUntouched; var currVal_42 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 68).ngClassTouched; var currVal_43 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 68).ngClassPristine; var currVal_44 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 68).ngClassDirty; var currVal_45 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 68).ngClassValid; var currVal_46 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 68).ngClassInvalid; var currVal_47 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 68).ngClassPending; var currVal_48 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 69).medium; var currVal_49 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 69).textarea; _ck(_v, 62, 1, [currVal_39, currVal_40, currVal_41, currVal_42, currVal_43, currVal_44, currVal_45, currVal_46, currVal_47, currVal_48, currVal_49]); var currVal_54 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 90).ngClassUntouched; var currVal_55 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 90).ngClassTouched; var currVal_56 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 90).ngClassPristine; var currVal_57 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 90).ngClassDirty; var currVal_58 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 90).ngClassValid; var currVal_59 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 90).ngClassInvalid; var currVal_60 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 90).ngClassPending; _ck(_v, 86, 0, currVal_54, currVal_55, currVal_56, currVal_57, currVal_58, currVal_59, currVal_60); var currVal_63 = _co.ftp; _ck(_v, 104, 0, currVal_63); var currVal_64 = _co.gross; _ck(_v, 109, 0, currVal_64); var currVal_65 = _co.decent; _ck(_v, 114, 0, currVal_65); var currVal_66 = _co.score; _ck(_v, 120, 0, currVal_66); var currVal_67 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 128).ngClassUntouched; var currVal_68 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 128).ngClassTouched; var currVal_69 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 128).ngClassPristine; var currVal_70 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 128).ngClassDirty; var currVal_71 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 128).ngClassValid; var currVal_72 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 128).ngClassInvalid; var currVal_73 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 128).ngClassPending; _ck(_v, 124, 0, currVal_67, currVal_68, currVal_69, currVal_70, currVal_71, currVal_72, currVal_73); var currVal_75 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 134).ngClassUntouched; var currVal_76 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 134).ngClassTouched; var currVal_77 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 134).ngClassPristine; var currVal_78 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 134).ngClassDirty; var currVal_79 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 134).ngClassValid; var currVal_80 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 134).ngClassInvalid; var currVal_81 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 134).ngClassPending; var currVal_82 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 135).medium; var currVal_83 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 135).textarea; _ck(_v, 129, 0, currVal_75, currVal_76, currVal_77, currVal_78, currVal_79, currVal_80, currVal_81, currVal_82, currVal_83); }); }
function View_CalculatorComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "rosa-calculator", [], null, null, null, View_CalculatorComponent_0, RenderType_CalculatorComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 245760, null, 0, _calculator_component__WEBPACK_IMPORTED_MODULE_23__["CalculatorComponent"], [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _services_form_service__WEBPACK_IMPORTED_MODULE_24__["FormService"], _bstorage_indexed_service__WEBPACK_IMPORTED_MODULE_25__["IndexedService"], _state_calculator_query__WEBPACK_IMPORTED_MODULE_26__["CalculatorQuery"], _state_calculator_service__WEBPACK_IMPORTED_MODULE_27__["CalculatorService"], _datorama_akita_ng_forms_manager__WEBPACK_IMPORTED_MODULE_28__["AkitaNgFormsManager"], _store_user_user_query__WEBPACK_IMPORTED_MODULE_29__["UserQuery"], _data_data_query__WEBPACK_IMPORTED_MODULE_30__["CalculatorResultQuery"], _data_data_service__WEBPACK_IMPORTED_MODULE_31__["CalculatorStoryService"], _modules_overlay_toast_toast_service__WEBPACK_IMPORTED_MODULE_32__["ToastService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var CalculatorComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("rosa-calculator", _calculator_component__WEBPACK_IMPORTED_MODULE_23__["CalculatorComponent"], View_CalculatorComponent_Host_0, {}, {}, []);



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
var styles = [".col-7[_ngcontent-%COMP%] {\n  flex: 0 0 58.333333%;\n  max-width: 58.333333%; }\n\n.col-5[_ngcontent-%COMP%] {\n  flex: 0 0 41.666667%;\n  max-width: 41.666667%; }\n\n.pane[_ngcontent-%COMP%] {\n  width: 100%;\n  background: #FFF;\n  border-radius: 3px;\n  box-sizing: border-box;\n  overflow: hidden;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.13); }\n\n.calculator-form[_ngcontent-%COMP%] {\n  padding: 32px 48px;\n  border-right: 1px solid #f2f2f2; }\n\n.calculator-result[_ngcontent-%COMP%] {\n  background-color: #fdfdfd;\n  padding: 24px 32px;\n  overflow: hidden; }\n\n.divider[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 1px;\n  background-color: #eaeeef;\n  margin: 12px 0 16px 0; }\n\n.calculator-result_card[_ngcontent-%COMP%] {\n  min-height: 180px;\n  width: 100%;\n  background: #fFF;\n  border-radius: 3px;\n  border: 1px solid #eaeeef;\n  padding: 16px 24px; }\n\n.calculator-result_card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    margin: 0;\n    font-size: 16px;\n    font-weight: 500;\n    line-height: 24px;\n    color: #1b1b1b;\n    margin-bottom: 12px; }\n\n.calculator-version[_ngcontent-%COMP%] {\n  width: 100%;\n  background: #fFF;\n  border-radius: 3px;\n  border: 1px solid #eaeeef;\n  padding: 16px;\n  margin-bottom: 16px; }\n\n.calculator-version[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    color: #464648;\n    font-size: 16px;\n    line-height: 20px;\n    font-weight: 500;\n    margin-bottom: 16px;\n    display: block; }\n\n.result_value[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 4px; }\n\n.result_value[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    color: #464648;\n    font-size: 14px;\n    line-height: 20px; }\n\n.summary[_ngcontent-%COMP%]   .key[_ngcontent-%COMP%] {\n  font-size: 16px;\n  line-height: 20px;\n  font-weight: 500; }\n\n.summary[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {\n  font-size: 16px;\n  line-height: 20px;\n  font-weight: 500; }\n\n.calculator-header[_ngcontent-%COMP%] {\n  margin-bottom: 28px; }\n\nh1[_ngcontent-%COMP%] {\n  font-size: 20px;\n  line-height: 28px;\n  font-weight: 500;\n  color: #1b1b1b;\n  margin: 0; }\n\n.calculator-grid[_ngcontent-%COMP%] {\n  display: flex; }\n\n.input__suffix-group[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center; }\n\n.input__suffix-group[_ngcontent-%COMP%]   .input-suffix[_ngcontent-%COMP%] {\n    padding-left: 12px; }\n\n.calculator-wrapper[_ngcontent-%COMP%] {\n  margin: 48px auto;\n  position: relative;\n  width: 1080px; }\n\n.form-group_margin[_ngcontent-%COMP%] {\n  width: 50%; }\n\n.form-group_save[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between; }\n\n.form-group_save[_ngcontent-%COMP%]  rosa-input {\n    width: 65%; }\n\n.score-cards[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  padding: 0 16px;\n  box-sizing: border-box;\n  height: 604px;\n  overflow-x: hidden;\n  overflow-y: scroll; }\n\n.result_save-form[_ngcontent-%COMP%] {\n  margin-top: 24px; }\n\n.result_save-form[_ngcontent-%COMP%]   .saveform-header[_ngcontent-%COMP%] {\n    font-size: 14px !important;\n    margin-bottom: 8px !important;\n    line-height: 20px !important;\n    color: #464648 !important; }\n\n.result_save-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: flex-start; }\n\n.result_save-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n      margin-right: 8px; }\n\n.result_save-form   form   [_nghost-%COMP%]   rosa-button[_ngcontent-%COMP%] {\n      margin-top: -2px; }\n\n.calculator-history[_ngcontent-%COMP%] {\n  margin-top: 16px;\n  height: 264px;\n  overflow: scroll; }"];



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
/* harmony import */ var _state_calculator_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../state/calculator.service */ "./src/app/application/loans/calculator/state/calculator.service.ts");
/* harmony import */ var _datorama_akita_ng_forms_manager__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @datorama/akita-ng-forms-manager */ "./node_modules/@datorama/akita-ng-forms-manager/fesm5/datorama-akita-ng-forms-manager.js");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../state */ "./src/app/application/loans/calculator/state/index.ts");
/* harmony import */ var _app_store_user_user_query__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @app/store/user/user.query */ "./src/app/store/user/user.query.ts");
/* harmony import */ var _data_data_query__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../data/data.query */ "./src/app/application/loans/calculator/data/data.query.ts");
/* harmony import */ var _data_data_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../data/data.service */ "./src/app/application/loans/calculator/data/data.service.ts");
/* harmony import */ var _app_modules_overlay_toast_toast_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @app/modules/overlay/toast/toast.service */ "./src/app/modules/overlay/toast/toast.service.ts");













var CalculatorComponent = /** @class */ (function () {
    // collateral or security 100, 100-75, 75-50, 50-0,
    // amount or limit 10 10+ 20
    // period range 0-12, 12-36, 36-60, 64-84
    function CalculatorComponent(_fb, _formService, _indexedStore, _calculatorQuery, _calculatorService, _formsManager, _userQuery, _dataQuery, _dataService, _toastService) {
        this._fb = _fb;
        this._formService = _formService;
        this._indexedStore = _indexedStore;
        this._calculatorQuery = _calculatorQuery;
        this._calculatorService = _calculatorService;
        this._formsManager = _formsManager;
        this._userQuery = _userQuery;
        this._dataQuery = _dataQuery;
        this._dataService = _dataService;
        this._toastService = _toastService;
        this.activeSettings$ = this._calculatorService.getState$();
        this.lastVersion$ = this._calculatorQuery.lastVersion$;
        this.prevVersion$ = this._calculatorQuery.prevVersion$;
        this.history$ = this._dataQuery.selectHistory$;
        this.manager = {
            name: '',
            id: ''
        };
        this.gross = 0.00;
        this.ftp = 0.00;
        this.decent = 0.00;
        this.score = 0.00;
        this.isOverdraft = false;
        this.range = {
            min: 3,
            max: 84
        };
        this.initialValues = {
            collateral: {
                credit: {
                    '100': "100% \u0434\u0435\u043D\u0435\u0436\u043D\u043E\u0435 \u043E\u0431\u0435\u0441\u043F\u0435\u0447\u0435\u043D\u0438\u0435",
                    '100-75': "100 - 75% *",
                    '75-50': "75 (\u0432\u043A\u043B\u044E\u0447) - 50% *",
                    '50-0': "50 (\u0432\u043A\u043B\u044E\u0447) - 0% *"
                },
                overdraft: {
                    '100-75': "100 - 75% *",
                    '75-50': "75 (\u0432\u043A\u043B\u044E\u0447) - 50% *",
                    '50-0': "50 (\u0432\u043A\u043B\u044E\u0447) - 0% *",
                    '0': 'Без обеспечения'
                }
            },
            amount: {
                micro: {
                    '10': "\u0414\u043E 10 \u043C\u043B\u043D. \u0440\u0443\u0431. (\u0432\u043A\u043B\u044E\u0447\u0438\u0442\u0435\u043B\u044C\u043D\u043E)",
                    '11': "\u0421\u0432\u044B\u0448\u0435 10 \u043C\u043B\u043D. \u0440\u0443\u0431."
                },
                small: {
                    '10': "\u0414\u043E 10 \u043C\u043B\u043D. \u0440\u0443\u0431. (\u0432\u043A\u043B\u044E\u0447\u0438\u0442\u0435\u043B\u044C\u043D\u043E)",
                    '11': "\u0421\u0432\u044B\u0448\u0435 10 \u043C\u043B\u043D. \u0440\u0443\u0431.",
                    '20': "\u0421\u0432\u044B\u0448\u0435 20 \u043C\u043B\u043D. \u0440\u0443\u0431."
                }
            }
        };
        this.amount = this.initialValues.amount.small;
        this.collateral = this.initialValues.collateral.credit;
    }
    CalculatorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.initForm();
        this._onChanges();
        this._calculatorService.lastRevision().subscribe();
        this.activeSettings$.subscribe(function (data) {
            console.log(data);
            console.log(_this._isStateNullable(data));
            if (!_this._isStateNullable(data)) {
                _this._calculateScores(data);
            }
            _this.storeValue = data;
        });
        this._userQuery.user$.subscribe(function (data) { return _this._setUser(data); }, function (err) { return console.error(err); });
        var state = {
            type: this.calculator.controls['type'].value,
            collateral: Object.keys(this.collateral)[0],
            amount: Object.keys(this.amount)[0],
            segment: this.calculator.controls['segment'].value,
            isPrevious: this.version.controls['toggle'].value,
            range: this.calculator.controls['range'].value,
        };
        this._initState(state);
        this._dataService.getCalculateHistory(2).subscribe(function (data) { return console.log(data); }, function (err) { return console.log(err); });
        this._dataQuery.selectHistory$.subscribe(function (data) { return console.log(data); }, function (err) { return console.log(err); });
    };
    CalculatorComponent.prototype._setUser = function (user) {
        this.manager = {
            name: user.name,
            id: user.id
        };
    };
    CalculatorComponent.prototype._calculateScores = function (state) {
        var _this = this;
        this._calculatorService.calculateScore(state).subscribe(function (data) { return _this.setCalculatorValues(data); }, function (err) { return console.log(err); });
    };
    CalculatorComponent.prototype.setCalculatorValues = function (data) {
        this.gross = data.gross;
        this.ftp = data.ftp;
        this.calculateResultScore();
    };
    CalculatorComponent.prototype.calculateResultScore = function () {
        this.score = parseFloat(this.gross) + parseFloat(this.ftp) + parseFloat(this.decent);
        this.score = this.score.toFixed(2);
    };
    CalculatorComponent.prototype._isStateNullable = function (state) {
        return Object.keys(state).every(function (x) {
            return state[x] === '' || state[x] === null;
        });
    };
    CalculatorComponent.prototype._onChanges = function () {
        var _this = this;
        this.calculator.get('type').valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(300)).subscribe(function (val) {
            _this.isOverdraft = val === 'overdraft' ? true : false;
            if (_this.isOverdraft) {
                _this.calculator.get('decent').disable();
                _this.calculator.get('decent').setValue(false);
            }
            else {
                _this.calculator.get('decent').enable();
            }
            _this.collateral = val === "credit" ? _this.initialValues.collateral.credit : _this.initialValues.collateral.overdraft;
            _this.calculator.controls['collateral'].setValue(Object.keys(_this.collateral)[0]);
            _this._calculatorService.updateState({ type: val, collateral: Object.keys(_this.collateral)[0] });
        });
        this.calculator.get('segment').valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(300)).subscribe(function (val) {
            _this.amount = val === "micro" ? _this.initialValues.amount.micro : _this.initialValues.amount.small,
                _this.calculator.controls['amount'].setValue(Object.keys(_this.amount)[0]);
            _this._calculatorService.updateState({ segment: val, amount: Object.keys(_this.amount)[0] });
        });
        this.calculator.get('amount').valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(300)).subscribe(function (val) {
            _this._calculatorService.updateState({ amount: val });
        });
        this.calculator.get('collateral').valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(300)).subscribe(function (val) {
            _this._calculatorService.updateState({ collateral: val });
        });
        this.calculator.get('range').valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(300)).subscribe(function (val) {
            _this._calculatorService.updateState({ range: val });
        });
        this.calculator.get('decent').valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(300)).subscribe(function (val) {
            _this.decent = val ? -0.3 : 0;
            _this.calculateResultScore();
        });
        this.version.get('toggle').valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(300)).subscribe(function (val) {
            _this._calculatorService.updateState({ isPrevious: val });
        });
    };
    CalculatorComponent.prototype.initForm = function () {
        this.calculator = this._fb.group({
            type: ['credit', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            range: [3, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            segment: ["small", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            collateral: [Object.keys(this.collateral)[0], [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            amount: [Object.keys(this.amount)[0], [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            margin: ['', []],
            decent: [{ value: '', disabled: this.isOverdraft }, []],
        });
        this.version = this._fb.group({
            toggle: [false, []],
        });
        this.history = this._fb.group({
            note: ['', []],
        });
        this._formsManager.upsert('calculator', this.calculator);
        // this._changeCalculatorSettings();
        this._formsManager.selectForm('calculator').subscribe(function (form) {
        });
    };
    CalculatorComponent.prototype._initState = function (state) {
        this._calculatorService.updateState(state);
    };
    CalculatorComponent.prototype.saveCalculateResult = function () {
        var _this = this;
        var result = {
            ftp: this.ftp,
            gross: this.gross,
            decent: this.decent,
            result: this.score,
            type: this.isOverdraft ? 'Оведрафт' : 'Кредит',
            note: this.history.controls['note'].value,
            managerName: this.manager.name,
            id: this.manager.id
        };
        console.log(result);
        this._dataService.saveCalculate(result).subscribe(function (data) { return _this._pushToStore(data); }, function (err) { return console.log(err); });
    };
    CalculatorComponent.prototype._pushToStore = function (data) {
        this._dataService.addCalculateToStore(data);
    };
    CalculatorComponent.prototype.setActive = function (id) {
        this._dataService.toggleActive(id);
    };
    CalculatorComponent.prototype.showToastMessage = function (text) {
        this._toastService.show({
            text: "" + text,
            type: 'message',
        });
    };
    CalculatorComponent.prototype.ngOnDestroy = function () {
        // this.storageData$.unsubscribe();
    };
    return CalculatorComponent;
}());



/***/ }),

/***/ "./src/app/application/loans/calculator/components/story-card/story-card.component.ngfactory.js":
/*!******************************************************************************************************!*\
  !*** ./src/app/application/loans/calculator/components/story-card/story-card.component.ngfactory.js ***!
  \******************************************************************************************************/
/*! exports provided: RenderType_StoryCardComponent, View_StoryCardComponent_0, View_StoryCardComponent_Host_0, StoryCardComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_StoryCardComponent", function() { return RenderType_StoryCardComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_StoryCardComponent_0", function() { return View_StoryCardComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_StoryCardComponent_Host_0", function() { return View_StoryCardComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoryCardComponentNgFactory", function() { return StoryCardComponentNgFactory; });
/* harmony import */ var _story_card_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./story-card.component.scss.shim.ngstyle */ "./src/app/application/loans/calculator/components/story-card/story-card.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _modules_buttons_button_button_button_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../modules/buttons/button/button/button.component.ngfactory */ "./src/app/modules/buttons/button/button/button.component.ngfactory.js");
/* harmony import */ var _modules_buttons_button_button_button_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../modules/buttons/button/button/button.component */ "./src/app/modules/buttons/button/button/button.component.ts");
/* harmony import */ var _story_card_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./story-card.component */ "./src/app/application/loans/calculator/components/story-card/story-card.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 






var styles_StoryCardComponent = [_story_card_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_StoryCardComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_StoryCardComponent, data: {} });

function View_StoryCardComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](2, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 57, "div", [["class", "calculator-story_card"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](3, { "story_card-expanded": 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 11, "div", [["class", "story_preview"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 4, "div", [["class", "story_card-info"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](7, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](9, null, ["", "%"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 5, "div", [["class", "story_card-meta"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 2, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](12, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](13, 2), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\u043F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, null, 42, "div", [["class", "story_full"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](17, 0, null, null, 8, "div", [["class", "story_full-title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, null, 4, "div", [["class", "story_title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](19, 0, null, null, 1, "span", [["class", "note"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](20, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](21, 0, null, null, 1, "span", [["class", "type"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](22, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](23, 0, null, null, 2, "span", [["class", "date"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](24, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](25, 2), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](26, 0, null, null, 21, "div", [["class", "story_full-result"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](27, 0, null, null, 20, "ul", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](28, 0, null, null, 4, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](29, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["FTP:"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](31, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](32, null, ["", "%"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](33, 0, null, null, 4, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](34, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\u0412\u0430\u043B\u043E\u0432\u0430\u044F \u043C\u0430\u0440\u0436\u0430:"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](36, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](37, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](38, 0, null, null, 4, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](39, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\u0421\u043A\u0438\u0434\u043A\u0430:"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](41, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](42, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](43, 0, null, null, 4, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](44, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\u0418\u0442\u043E\u0433\u043E:"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](46, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](47, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](48, 0, null, null, 10, "div", [["class", "story_full-action"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](49, 0, null, null, 9, "rosa-button", [["type", "'button'"]], null, null, null, _modules_buttons_button_button_button_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_ButtonComponent_0"], _modules_buttons_button_button_button_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_ButtonComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](50, 638976, null, 0, _modules_buttons_button_button_button_component__WEBPACK_IMPORTED_MODULE_4__["ButtonComponent"], [], { type: [0, "type"], button: [1, "button"], size: [2, "size"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](51, 0, null, 0, 7, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](52, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\u0421\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0441\u0441\u044B\u043B\u043A\u0443"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](54, 0, null, null, 4, ":svg:svg", [["xmlns", "http://www.w3.org/2000/svg"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](55, 0, null, null, 3, ":svg:g", [["fill", "none"], ["fill-rule", "evenodd"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](56, 0, null, null, 0, ":svg:rect", [["height", "12"], ["rx", "2"], ["stroke", "currentColor"], ["width", "12"], ["x", "4.5"], ["y", "7.5"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](57, 0, null, null, 0, ":svg:path", [["d", "M19 16.72V6a1 1 0 0 0-1-1H7.28c.17-.32.43-.56.74-.73.33-.18.65-.27 1.54-.27h7.88c.89 0 1.21.1 1.54.27.32.17.58.43.75.75.18.33.27.65.27 1.54v7.88c0 .89-.1 1.21-.27 1.54-.17.31-.41.57-.73.74zm-1.56.28H9.56h7.88z"], ["fill", "currentColor"], ["fill-rule", "nonzero"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](58, 0, null, null, 0, ":svg:path", [["d", "M12.3 11H9.5a.5.5 0 1 1 0-1h4a.5.5 0 0 1 .5.5v4a.5.5 0 1 1-1 0v-2.8l-4.15 4.15a.5.5 0 0 1-.7-.7L12.29 11z"], ["fill", "currentColor"]], null, null, null, null, null))], function (_ck, _v) { var _co = _v.component; var currVal_0 = "calculator-story_card"; var currVal_1 = _ck(_v, 3, 0, _co.isExpanded); _ck(_v, 2, 0, currVal_0, currVal_1); var currVal_12 = "'button'"; var currVal_13 = "link"; var currVal_14 = "small"; _ck(_v, 50, 0, currVal_12, currVal_13, currVal_14); }, function (_ck, _v) { var _co = _v.component; var currVal_2 = _co.story.note; _ck(_v, 7, 0, currVal_2); var currVal_3 = _co.story.result; _ck(_v, 9, 0, currVal_3); var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 12, 0, _ck(_v, 13, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 0), _co.story.date, "d MMM y")); _ck(_v, 12, 0, currVal_4); var currVal_5 = _co.story.note; _ck(_v, 20, 0, currVal_5); var currVal_6 = _co.story.type; _ck(_v, 22, 0, currVal_6); var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 24, 0, _ck(_v, 25, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 0), _co.story.date, "d MMM y")); _ck(_v, 24, 0, currVal_7); var currVal_8 = _co.story.ftp; _ck(_v, 32, 0, currVal_8); var currVal_9 = _co.story.gross; _ck(_v, 37, 0, currVal_9); var currVal_10 = _co.story.decent; _ck(_v, 42, 0, currVal_10); var currVal_11 = _co.story.result; _ck(_v, 47, 0, currVal_11); }); }
function View_StoryCardComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "rosa-story-card", [], null, [["document", "click"]], function (_v, en, $event) { var ad = true; if (("document:click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).onClick($event.target) !== false);
        ad = (pd_0 && ad);
    } return ad; }, View_StoryCardComponent_0, RenderType_StoryCardComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _story_card_component__WEBPACK_IMPORTED_MODULE_5__["StoryCardComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var StoryCardComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("rosa-story-card", _story_card_component__WEBPACK_IMPORTED_MODULE_5__["StoryCardComponent"], View_StoryCardComponent_Host_0, { story: "story" }, { copied: "copied" }, []);



/***/ }),

/***/ "./src/app/application/loans/calculator/components/story-card/story-card.component.scss.shim.ngstyle.js":
/*!**************************************************************************************************************!*\
  !*** ./src/app/application/loans/calculator/components/story-card/story-card.component.scss.shim.ngstyle.js ***!
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
var styles = ["[_nghost-%COMP%] {\n  width: 100%;\n  height: auto;\n  background: #fFF;\n  border-radius: 3px;\n  border: 1px solid #eaeeef;\n  padding: 16px;\n  margin-bottom: 12px;\n  box-shadow: 0 1px 7px rgba(0, 0, 0, 0.05);\n  position: relative;\n  display: block; }\n\n.calculator-story_card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #464648;\n  font-size: 14px;\n  line-height: 20px;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none; }\n\n.calculator-story_card[_ngcontent-%COMP%]   .story_card-info[_ngcontent-%COMP%], .calculator-story_card[_ngcontent-%COMP%]   .story_card-meta[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between; }\n\n.calculator-story_card[_ngcontent-%COMP%]   .story_card-info[_ngcontent-%COMP%] {\n  margin-bottom: 4px; }\n\n.calculator-story_card[_ngcontent-%COMP%]   .story_card-info[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-weight: 500; }\n\n.calculator-story_card[_ngcontent-%COMP%]   .story_full[_ngcontent-%COMP%] {\n  display: none; }\n\n.story_card-expanded[_ngcontent-%COMP%]   .story_preview[_ngcontent-%COMP%] {\n  display: none; }\n\n.story_card-expanded[_ngcontent-%COMP%]   .story_full[_ngcontent-%COMP%] {\n  display: block; }\n\n.story_full-title[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start; }\n\n.story_full-title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    display: block;\n    color: #76767c; }\n\n.story_full-title[_ngcontent-%COMP%]   .note[_ngcontent-%COMP%] {\n    font-size: 16px;\n    font-weight: 500;\n    line-height: 20px;\n    color: #464648; }\n\n.story_full-title[_ngcontent-%COMP%]   .type[_ngcontent-%COMP%] {\n    margin-top: 4px;\n    text-transform: lowercase; }\n\n.story_full-result[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  padding: 0;\n  list-style: none;\n  margin: 12px 0 16px; }\n\n.story_full-result[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n  margin-bottom: 8px; }\n\n.story_full-result[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-size: 14px;\n    line-height: 20px;\n    color: #464648; }\n\n.story_full-result[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child   span[_ngcontent-%COMP%] {\n    font-weight: 500 !important; }\n\n.story_full-action[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end; }\n\n.story_full-action[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    line-height: 24px;\n    font-size: 13px;\n    color: #e60028;\n    transition: color .3s ease; }\n\n.story_full-action[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:hover {\n      color: #464648; }\n\n.story_full-action[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n    width: 20px;\n    height: 24px;\n    margin-left: 4px; }"];



/***/ }),

/***/ "./src/app/application/loans/calculator/components/story-card/story-card.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/application/loans/calculator/components/story-card/story-card.component.ts ***!
  \********************************************************************************************/
/*! exports provided: StoryCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoryCardComponent", function() { return StoryCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var StoryCardComponent = /** @class */ (function () {
    function StoryCardComponent(_elementRef) {
        this._elementRef = _elementRef;
        this.copied = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.isExpanded = false;
        this.windowNavigator = window.navigator; // fix because ts doesn't know navigator type
        this.clicked = 0;
    }
    StoryCardComponent.prototype.onClick = function (targetElement) {
        var _this = this;
        var clickedInside = this._elementRef.nativeElement.contains(targetElement);
        if (!clickedInside) {
            return;
        }
        console.log("clicked " + this.clicked);
        console.log(targetElement);
        if (targetElement.className === "rosa-button rosa-button__link rosa-button__small") {
            this.windowNavigator.clipboard.writeText("http://localhost:8088/api/loans/calculator/history/" + this.story.id).then(function () {
                _this.copied.emit("\u0421\u0441\u044B\u043B\u043A\u0430 \u0441\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u043D\u0430. \u0414\u043B\u044F \u0432\u0441\u0442\u0430\u0432\u043A\u0438 \u043D\u0430\u0436\u043C\u0438\u0442\u0435 CTRL + V");
            }).catch(function (err) {
                _this.copied.emit("\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0441\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u0442\u044C. \u041F\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u0435 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443 \u0438 \u043F\u043E\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435 \u0441\u043D\u043E\u0432\u0430");
            });
        }
        this.isExpanded = !this.isExpanded;
    };
    StoryCardComponent.prototype.ngOnInit = function () {
    };
    return StoryCardComponent;
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
/* harmony import */ var _modules_forms_form_layout_form_group_form_group_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../modules/forms/form-layout/form-group/form-group.component.ngfactory */ "./src/app/modules/forms/form-layout/form-group/form-group.component.ngfactory.js");
/* harmony import */ var _modules_forms_form_layout_form_group_form_group_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../modules/forms/form-layout/form-group/form-group.component */ "./src/app/modules/forms/form-layout/form-group/form-group.component.ts");
/* harmony import */ var _modules_forms_label_rosa_label_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../modules/forms/label/rosa-label.directive */ "./src/app/modules/forms/label/rosa-label.directive.ts");
/* harmony import */ var _modules_forms_input_input_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../modules/forms/input/input.directive */ "./src/app/modules/forms/input/input.directive.ts");
/* harmony import */ var _modules_forms_hint_hint_hint_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../modules/forms/hint/hint/hint.component.ngfactory */ "./src/app/modules/forms/hint/hint/hint.component.ngfactory.js");
/* harmony import */ var _modules_forms_hint_hint_hint_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../modules/forms/hint/hint/hint.component */ "./src/app/modules/forms/hint/hint/hint.component.ts");
/* harmony import */ var _modules_forms_iconinput_iconinput_iconinput_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../modules/forms/iconinput/iconinput/iconinput.component.ngfactory */ "./src/app/modules/forms/iconinput/iconinput/iconinput.component.ngfactory.js");
/* harmony import */ var _modules_forms_iconinput_iconinput_iconinput_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../modules/forms/iconinput/iconinput/iconinput.component */ "./src/app/modules/forms/iconinput/iconinput/iconinput.component.ts");
/* harmony import */ var _modules_forms_datepicker_datepicker_input_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../modules/forms/datepicker/datepicker-input.directive */ "./src/app/modules/forms/datepicker/datepicker-input.directive.ts");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/esm5/overlay.es5.js");
/* harmony import */ var _modules_buttons_button_button_button_component_ngfactory__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../modules/buttons/button/button/button.component.ngfactory */ "./src/app/modules/buttons/button/button/button.component.ngfactory.js");
/* harmony import */ var _modules_buttons_button_button_button_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../modules/buttons/button/button/button.component */ "./src/app/modules/buttons/button/button/button.component.ts");
/* harmony import */ var _config_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./config.component */ "./src/app/application/loans/calculator/config/config.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_config_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../services/config.service */ "./src/app/application/loans/calculator/services/config.service.ts");
/* harmony import */ var _modules_overlay_toast_toast_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../modules/overlay/toast/toast.service */ "./src/app/modules/overlay/toast/toast.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 



















var styles_ConfigComponent = [_config_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_ConfigComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_ConfigComponent, data: {} });

function View_ConfigComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](402653184, 1, { submitConfig: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 50, "div", [["class", "calculator-wrapper"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 49, "div", [["class", "pane"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 48, "div", [["class", "calculator-grid"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 4, "div", [["class", "calculator-config-nav col-3"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 1, "a", [["class", "nav-item"], ["href", ""]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\u0421\u0442\u0430\u0432\u043A\u0430 FTP"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 1, "a", [["class", "nav-item"], ["href", ""]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\u0412\u0430\u043B\u043E\u0432\u0430\u044F \u043C\u0430\u0440\u0436\u0430"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 42, "div", [["class", "calculator-config-workspace col-9"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 1, "h1", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\u041A\u043E\u043D\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044F \u043A\u0430\u043B\u044C\u043A\u0443\u043B\u044F\u0442\u043E\u0440\u0430"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 39, "form", [["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngSubmit"], [null, "submit"], [null, "reset"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("submit" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).onSubmit($event) !== false);
        ad = (pd_0 && ad);
    } if (("reset" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).onReset() !== false);
        ad = (pd_1 && ad);
    } if (("ngSubmit" === en)) {
        var pd_2 = (_co.onSubmit() !== false);
        ad = (pd_2 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](13, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_bh"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](14, 540672, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], [[8, null], [8, null]], { form: [0, "form"] }, { ngSubmit: "ngSubmit" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](16, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](17, 0, null, null, 14, "rosa-form-group", [], null, null, null, _modules_forms_form_layout_form_group_form_group_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_FormGroupComponent_0"], _modules_forms_form_layout_form_group_form_group_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_FormGroupComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](18, 114688, null, 0, _modules_forms_form_layout_form_group_form_group_component__WEBPACK_IMPORTED_MODULE_4__["FormGroupComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](19, 0, null, 0, 2, "label", [["form-group", "label"], ["rosaLabel", ""]], [[2, "rosa-label", null], [2, "rosa-label__m", null], [2, "rosa-label__lg", null]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](20, 16384, null, 0, _modules_forms_label_rosa_label_directive__WEBPACK_IMPORTED_MODULE_5__["RosaLabelDirective"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\u0421\u0442\u0430\u0432\u043A\u0438 FTP"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](22, 0, null, 1, 6, "textarea", [["fieldSize", "textarea"], ["form-group", "control"], ["rosaInput", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [2, "rosa-input", null], [2, "rosa-textarea", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; if (("input" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](23, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](25, 540672, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlDirective"], [[8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_k"]]], { form: [0, "form"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlDirective"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](27, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](28, 16384, null, 0, _modules_forms_input_input_directive__WEBPACK_IMPORTED_MODULE_6__["RosainputDirective"], [], { setSize: [0, "setSize"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](29, 0, null, 2, 2, "rosa-hint", [["form-group", "hint"]], null, null, null, _modules_forms_hint_hint_hint_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__["View_HintComponent_0"], _modules_forms_hint_hint_hint_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__["RenderType_HintComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](30, 114688, null, 0, _modules_forms_hint_hint_hint_component__WEBPACK_IMPORTED_MODULE_8__["HintComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\u0414\u043B\u044F \u043E\u0432\u0435\u0434\u0440\u0430\u0444\u0442\u0430 \u043B\u0438\u043C\u0438\u0442 \u043D\u0435 \u0443\u043A\u0430\u0437\u044B\u0432\u0430\u0435\u0442\u0441\u044F"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](32, 0, null, null, 14, "rosa-form-group", [], null, null, null, _modules_forms_form_layout_form_group_form_group_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_FormGroupComponent_0"], _modules_forms_form_layout_form_group_form_group_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_FormGroupComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](33, 114688, null, 0, _modules_forms_form_layout_form_group_form_group_component__WEBPACK_IMPORTED_MODULE_4__["FormGroupComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](34, 0, null, 0, 2, "label", [["form-group", "label"], ["labelSize", "medium"], ["rosaLabel", ""]], [[2, "rosa-label", null], [2, "rosa-label__m", null], [2, "rosa-label__lg", null]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](35, 16384, null, 0, _modules_forms_label_rosa_label_directive__WEBPACK_IMPORTED_MODULE_5__["RosaLabelDirective"], [], { setSize: [0, "setSize"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\u0421\u0440\u043E\u043A \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F \u0441\u0442\u0430\u0432\u043A\u0438"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](37, 0, null, 1, 9, "rosa-iconinput", [["form-group", "control"]], null, null, null, _modules_forms_iconinput_iconinput_iconinput_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__["View_IconinputComponent_0"], _modules_forms_iconinput_iconinput_iconinput_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__["RenderType_IconinputComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](38, 114688, null, 0, _modules_forms_iconinput_iconinput_iconinput_component__WEBPACK_IMPORTED_MODULE_10__["IconinputComponent"], [], { position: [0, "position"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](39, 0, [["dateInput", 1]], 0, 7, "input", [["rosaDatepickerInput", ""], ["rosaInput", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [2, "rosa-input", null], [2, "rosa-textarea", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"], [null, "click"], ["document", "click"]], function (_v, en, $event) { var ad = true; if (("input" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 40)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 40).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 40)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 40)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } if (("click" === en)) {
        var pd_4 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 46).show() !== false);
        ad = (pd_4 && ad);
    } if (("blur" === en)) {
        var pd_5 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 46).hide() !== false);
        ad = (pd_5 && ad);
    } if (("document:click" === en)) {
        var pd_6 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 46).onClick($event.target) !== false);
        ad = (pd_6 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](40, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](42, 540672, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlDirective"], [[8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_k"]]], { form: [0, "form"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlDirective"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](44, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](45, 16384, null, 0, _modules_forms_input_input_directive__WEBPACK_IMPORTED_MODULE_6__["RosainputDirective"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](46, 81920, null, 0, _modules_forms_datepicker_datepicker_input_directive__WEBPACK_IMPORTED_MODULE_11__["DatepickerInputDirective"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_12__["OverlayPositionBuilder"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_12__["Overlay"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_12__["ScrollStrategyOptions"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](47, 0, null, null, 4, "rosa-form-group", [], null, null, null, _modules_forms_form_layout_form_group_form_group_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_FormGroupComponent_0"], _modules_forms_form_layout_form_group_form_group_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_FormGroupComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](48, 114688, null, 0, _modules_forms_form_layout_form_group_form_group_component__WEBPACK_IMPORTED_MODULE_4__["FormGroupComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](49, 0, null, 1, 2, "rosa-button", [["form-group", "control"], ["type", "'submit'"]], [[8, "className", 0]], null, null, _modules_buttons_button_button_button_component_ngfactory__WEBPACK_IMPORTED_MODULE_13__["View_ButtonComponent_0"], _modules_buttons_button_button_button_component_ngfactory__WEBPACK_IMPORTED_MODULE_13__["RenderType_ButtonComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](50, 638976, [[1, 4], ["updateFtp", 4]], 0, _modules_buttons_button_button_button_component__WEBPACK_IMPORTED_MODULE_14__["ButtonComponent"], [], { type: [0, "type"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\u041E\u0431\u043D\u043E\u0432\u0438\u0442\u044C \u0441\u0442\u0430\u0432\u043A\u0438"]))], function (_ck, _v) { var _co = _v.component; var currVal_7 = _co.parseForm; _ck(_v, 14, 0, currVal_7); _ck(_v, 18, 0); var currVal_20 = _co.parseForm.controls["parser"]; _ck(_v, 25, 0, currVal_20); var currVal_21 = "textarea"; _ck(_v, 28, 0, currVal_21); _ck(_v, 30, 0); _ck(_v, 33, 0); var currVal_25 = "medium"; _ck(_v, 35, 0, currVal_25); var currVal_26 = "right"; _ck(_v, 38, 0, currVal_26); var currVal_36 = _co.parseForm.controls["date"]; _ck(_v, 42, 0, currVal_36); _ck(_v, 46, 0); _ck(_v, 48, 0); var currVal_38 = "'submit'"; _ck(_v, 50, 0, currVal_38); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).ngClassUntouched; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).ngClassTouched; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).ngClassPristine; var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).ngClassDirty; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).ngClassValid; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).ngClassInvalid; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).ngClassPending; _ck(_v, 12, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6); var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 20).label; var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 20).medium; var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 20).large; _ck(_v, 19, 0, currVal_8, currVal_9, currVal_10); var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 27).ngClassUntouched; var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 27).ngClassTouched; var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 27).ngClassPristine; var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 27).ngClassDirty; var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 27).ngClassValid; var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 27).ngClassInvalid; var currVal_17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 27).ngClassPending; var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 28).medium; var currVal_19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 28).textarea; _ck(_v, 22, 0, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16, currVal_17, currVal_18, currVal_19); var currVal_22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 35).label; var currVal_23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 35).medium; var currVal_24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 35).large; _ck(_v, 34, 0, currVal_22, currVal_23, currVal_24); var currVal_27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 44).ngClassUntouched; var currVal_28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 44).ngClassTouched; var currVal_29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 44).ngClassPristine; var currVal_30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 44).ngClassDirty; var currVal_31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 44).ngClassValid; var currVal_32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 44).ngClassInvalid; var currVal_33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 44).ngClassPending; var currVal_34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 45).medium; var currVal_35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 45).textarea; _ck(_v, 39, 0, currVal_27, currVal_28, currVal_29, currVal_30, currVal_31, currVal_32, currVal_33, currVal_34, currVal_35); var currVal_37 = "red size__m padding__l"; _ck(_v, 49, 0, currVal_37); }); }
function View_ConfigComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "rosa-config", [], null, null, null, View_ConfigComponent_0, RenderType_ConfigComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _config_component__WEBPACK_IMPORTED_MODULE_15__["ConfigComponent"], [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HttpClient"], _services_config_service__WEBPACK_IMPORTED_MODULE_17__["ConfigService"], _modules_overlay_toast_toast_service__WEBPACK_IMPORTED_MODULE_18__["ToastService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var ConfigComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("rosa-config", _config_component__WEBPACK_IMPORTED_MODULE_15__["ConfigComponent"], View_ConfigComponent_Host_0, {}, {}, []);



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
var styles = [".global-container[_ngcontent-%COMP%] {\n  min-width: 13; }\n\n@media (max-width: 1440px) {\n  .container[_ngcontent-%COMP%] {\n    width: 1152px;\n    margin: 0 auto;\n    position: relative;\n    padding: 0 12px; } }\n\n@media (max-width: 1680px) {\n  .container[_ngcontent-%COMP%] {\n    width: 1344px;\n    margin: 0 auto;\n    position: relative;\n    padding: 0 12px; } }\n\n@media (min-width: 1920px) {\n  .container[_ngcontent-%COMP%] {\n    width: 1632px;\n    margin: 0 auto;\n    position: relative;\n    padding: 0 12px; } }\n\n.rosa-grid-1[_ngcontent-%COMP%] {\n  width: 8.33333333%; }\n\n.rosa-grid-2[_ngcontent-%COMP%] {\n  width: 16.66666667%; }\n\n.rosa-grid-3[_ngcontent-%COMP%] {\n  width: 25%; }\n\n.rosa-grid-4[_ngcontent-%COMP%] {\n  width: 33.33333333%; }\n\n.rosa-grid-5[_ngcontent-%COMP%] {\n  width: 41.66666667%; }\n\n.rosa-grid-6[_ngcontent-%COMP%] {\n  width: 50%; }\n\n.rosa-grid-7[_ngcontent-%COMP%] {\n  width: 58.33333333%; }\n\n.rosa-grid-8[_ngcontent-%COMP%] {\n  width: 66.66666667%; }\n\n.rosa-grid-9[_ngcontent-%COMP%] {\n  width: 75%; }\n\n.rosa-grid-10[_ngcontent-%COMP%] {\n  width: 83.33333333%; }\n\n.rosa-grid-11[_ngcontent-%COMP%] {\n  width: 91.66666667%; }\n\n.rosa-grid-12[_ngcontent-%COMP%] {\n  width: 100%; }\n\n.pane[_ngcontent-%COMP%] {\n  width: 100%;\n  background: #FFF;\n  border-radius: 3px;\n  box-sizing: border-box;\n  overflow: hidden;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.13); }\n\n.calculator-grid[_ngcontent-%COMP%] {\n  display: flex; }\n\n.calculator-config-nav[_ngcontent-%COMP%] {\n  border-right: 1px solid #eaeeef;\n  background: #fdfdfd;\n  padding: 16px 0; }\n\n.calculator-wrapper[_ngcontent-%COMP%] {\n  margin: 48px auto;\n  position: relative;\n  width: 1080px; }\n\n.calculator-config-workspace[_ngcontent-%COMP%] {\n  padding: 32px 48px; }\n\nh1[_ngcontent-%COMP%] {\n  font-size: 20px;\n  line-height: 28px;\n  font-weight: 500;\n  color: #1b1b1b;\n  margin: 0; }\n\nform[_ngcontent-%COMP%] {\n  margin-top: 32px; }\n\n.nav-item[_ngcontent-%COMP%] {\n  padding: 16px 32px;\n  font-size: 16px;\n  line-height: 18px;\n  color: #1b1b1b;\n  text-decoration: none;\n  display: block; }\n\n.nav-item[_ngcontent-%COMP%]:hover {\n    transition: all .3s ease;\n    background-color: #f2f2f2; }\n\n.col-12[_ngcontent-%COMP%] {\n  flex: 0 0 100%;\n  max-width: 100%; }\n\n.col-11[_ngcontent-%COMP%] {\n  flex: 0 0 91.666667%;\n  max-width: 91.666667%; }\n\n.col-10[_ngcontent-%COMP%] {\n  flex: 0 0 83.333333%;\n  max-width: 83.333333%; }\n\n.col-9[_ngcontent-%COMP%] {\n  flex: 0 0 75%;\n  max-width: 75%; }\n\n.col-8[_ngcontent-%COMP%] {\n  flex: 0 0 66.666667%;\n  max-width: 66.666667%; }\n\n.col-7[_ngcontent-%COMP%] {\n  flex: 0 0 58.333333%;\n  max-width: 58.333333%; }\n\n.col-6[_ngcontent-%COMP%] {\n  flex: 0 0 50%;\n  max-width: 50%; }\n\n.col-5[_ngcontent-%COMP%] {\n  flex: 0 0 41.666667%;\n  max-width: 41.666667%; }\n\n.col-4[_ngcontent-%COMP%] {\n  flex: 0 0 33.333333%;\n  max-width: 33.333333%; }\n\n.col-3[_ngcontent-%COMP%] {\n  flex: 0 0 25%;\n  max-width: 25%; }\n\n.col-2[_ngcontent-%COMP%] {\n  flex: 0 0 16.666667%;\n  max-width: 16.666667%; }\n\n.col-1[_ngcontent-%COMP%] {\n  flex: 0 0 8.333333%;\n  max-width: 8.333333%; }"];



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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _model_row_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./model/row.model */ "./src/app/application/loans/calculator/config/model/row.model.ts");
/* harmony import */ var _services_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/config.service */ "./src/app/application/loans/calculator/services/config.service.ts");
/* harmony import */ var _app_modules_overlay_toast_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/modules/overlay/toast/toast.service */ "./src/app/modules/overlay/toast/toast.service.ts");
/* harmony import */ var _modules_buttons_button_button_button_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../modules/buttons/button/button/button.component */ "./src/app/modules/buttons/button/button/button.component.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");








var ConfigComponent = /** @class */ (function () {
    function ConfigComponent(_fb, _http, _configService, _toastService) {
        this._fb = _fb;
        this._http = _http;
        this._configService = _configService;
        this._toastService = _toastService;
        this.parsed = [];
    }
    Object.defineProperty(ConfigComponent.prototype, "f", {
        get: function () { return this.parseForm.controls; },
        enumerable: true,
        configurable: true
    });
    ConfigComponent.prototype.ngOnInit = function () {
        this.parseForm = this._fb.group({
            parser: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            date: ["", {
                    validators: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                }],
        });
        this.parseForm.get('date').valueChanges.subscribe(function (val) { return console.log(val); });
    };
    ConfigComponent.prototype.onSubmit = function () {
        var _this = this;
        if (!this.parseForm.valid) {
            return;
        }
        this.submitConfig.isDisabled = true;
        this.submitConfig.isLoading = true;
        var parsedData = this.convertCsvToObject();
        var startDate = this.f.date.value;
        this._configService.updateFtp(parsedData, startDate)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["tap"])(function (d) {
            _this.submitConfig.isDisabled = false;
            _this.submitConfig.isLoading = false;
        }))
            .subscribe(function (data) { return _this.showToastMessage('Успешно обновлено', 'success'); }, function (err) { return _this.showToastMessage("\u041F\u0440\u043E\u0438\u0437\u043E\u0448\u043B\u0430 \u043E\u0448\u0438\u0431\u043A\u0430 " + err, 'error'); });
    };
    ConfigComponent.prototype.convertCsvToObject = function () {
        var csv = this.f.parser.value.split(/\n/g);
        csv = csv.map(function (row) { return row.replace(/\t\t/g, '\t'); }).map(function (row) { return row.split(/\t/g); });
        for (var _i = 0, csv_1 = csv; _i < csv_1.length; _i++) {
            var row = csv_1[_i];
            var RowType = new _model_row_model__WEBPACK_IMPORTED_MODULE_3__["RowTable"](row[0], row[1], row[2], row[3], row[5], row[6], row[7]);
            this.parsed.push(RowType);
        }
        return this.parsed;
    };
    /*
    public showToast() {
      this._toastService.show({
        text: `Toast message ${this.count}`,
        type: 'success',
      });
      this.toastType = `success`;
      this.count += 1;
    }
    */
    ConfigComponent.prototype.showToastMessage = function (text, type) {
        this._toastService.show({
            text: "" + text,
            type: type,
        });
    };
    return ConfigComponent;
}());



/***/ }),

/***/ "./src/app/application/loans/calculator/config/model/row.model.ts":
/*!************************************************************************!*\
  !*** ./src/app/application/loans/calculator/config/model/row.model.ts ***!
  \************************************************************************/
/*! exports provided: RowTable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RowTable", function() { return RowTable; });
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



/***/ }),

/***/ "./src/app/application/loans/calculator/data/data.query.ts":
/*!*****************************************************************!*\
  !*** ./src/app/application/loans/calculator/data/data.query.ts ***!
  \*****************************************************************/
/*! exports provided: CalculatorResultQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalculatorResultQuery", function() { return CalculatorResultQuery; });
/* harmony import */ var _data_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data.store */ "./src/app/application/loans/calculator/data/data.store.ts");
/* harmony import */ var _datorama_akita__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @datorama/akita */ "./node_modules/@datorama/akita/fesm5/datorama-akita.js");
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




var CalculatorResultQuery = /** @class */ (function (_super) {
    __extends(CalculatorResultQuery, _super);
    function CalculatorResultQuery(store) {
        var _this = _super.call(this, store) || this;
        _this.store = store;
        // selectUiState$ = this.select(state => state.config);
        // lastVersion$ = this.select(state => state.config.lastVersion);
        // prevVersion$ = this.select(state => state.config.prevVersion);
        //  getCalculator = this.select(calculator => state.calculator[])
        _this.selectHistory$ = _this.selectAll();
        return _this;
    }
    CalculatorResultQuery.ngInjectableDef = _angular_core__WEBPACK_IMPORTED_MODULE_2__["defineInjectable"]({ factory: function CalculatorResultQuery_Factory() { return new CalculatorResultQuery(_angular_core__WEBPACK_IMPORTED_MODULE_2__["inject"](_data_store__WEBPACK_IMPORTED_MODULE_0__["CalculatorResultStore"])); }, token: CalculatorResultQuery, providedIn: "root" });
    return CalculatorResultQuery;
}(_datorama_akita__WEBPACK_IMPORTED_MODULE_1__["QueryEntity"]));



/***/ }),

/***/ "./src/app/application/loans/calculator/data/data.service.ts":
/*!*******************************************************************!*\
  !*** ./src/app/application/loans/calculator/data/data.service.ts ***!
  \*******************************************************************/
/*! exports provided: CalculatorStoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalculatorStoryService", function() { return CalculatorStoryService; });
/* harmony import */ var _datorama_akita__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @datorama/akita */ "./node_modules/@datorama/akita/fesm5/datorama-akita.js");
/* harmony import */ var _data_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data.store */ "./src/app/application/loans/calculator/data/data.store.ts");
/* harmony import */ var _data_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data.query */ "./src/app/application/loans/calculator/data/data.query.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @env/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};



// import { CalculatorDataService } from './calculator-data.service';







var CalculatorStoryService = /** @class */ (function () {
    function CalculatorStoryService(
    // private calculatorDataService: CalculatorDataService,
    _calculatorStore, _calculatorQuery, _http) {
        this._calculatorStore = _calculatorStore;
        this._calculatorQuery = _calculatorQuery;
        this._http = _http;
    }
    // getStudents(): Observable<Array<Calculator>> {
    /*
    const request = this.studentDataService.getStudents().pipe(
      tap(s => this.studentStore.set(s))
    );
    */
    //  return this.studentQuery.isPristine ? request : noop(); // request
    // }
    CalculatorStoryService.prototype.getCalculateHistory = function (userId) {
        var _this = this;
        var request = this._http.get(_env_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].endpoint + "/loans/calculator/historylist/" + userId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (data) { return console.log(data); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (data) { return _this._calculatorStore.add(data); }));
        return request;
    };
    /*
    public getState$(): Observable<any> {
        return this._calculatorQuery.selectUiState$;
    }
    */
    CalculatorStoryService.prototype.addCalculateToStore = function (calculate) {
        console.log(calculate);
        var date = calculate.date.date;
        var calcdata = __assign({}, calculate, { date: date });
        console.log(date);
        console.log(calcdata);
        this._calculatorStore.add(calcdata);
    };
    CalculatorStoryService.prototype.saveCalculate = function (result) {
        var _headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({ 'Content-Type': 'application/x-www-form-urlencoded' });
        var _body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpParams"]().append('result', JSON.stringify(result));
        return this._http.post(_env_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].endpoint + "/loans/calculator/save", _body, { headers: _headers });
    };
    CalculatorStoryService.prototype.toggleActive = function (id) {
        this._calculatorStore.toggleActive(id);
    };
    CalculatorStoryService.ngInjectableDef = _angular_core__WEBPACK_IMPORTED_MODULE_6__["defineInjectable"]({ factory: function CalculatorStoryService_Factory() { return new CalculatorStoryService(_angular_core__WEBPACK_IMPORTED_MODULE_6__["inject"](_data_store__WEBPACK_IMPORTED_MODULE_1__["CalculatorResultStore"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["inject"](_data_query__WEBPACK_IMPORTED_MODULE_2__["CalculatorResultQuery"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])); }, token: CalculatorStoryService, providedIn: "root" });
    return CalculatorStoryService;
}());



/***/ }),

/***/ "./src/app/application/loans/calculator/data/data.store.ts":
/*!*****************************************************************!*\
  !*** ./src/app/application/loans/calculator/data/data.store.ts ***!
  \*****************************************************************/
/*! exports provided: CalculatorResultStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalculatorResultStore", function() { return CalculatorResultStore; });
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


var initState = {
    active: []
};
var CalculatorResultStore = /** @class */ (function (_super) {
    __extends(CalculatorResultStore, _super);
    function CalculatorResultStore() {
        return _super.call(this, initState) || this;
    }
    CalculatorResultStore.ngInjectableDef = _angular_core__WEBPACK_IMPORTED_MODULE_1__["defineInjectable"]({ factory: function CalculatorResultStore_Factory() { return new CalculatorResultStore(); }, token: CalculatorResultStore, providedIn: "root" });
    CalculatorResultStore = __decorate([
        Object(_datorama_akita__WEBPACK_IMPORTED_MODULE_0__["StoreConfig"])({ name: 'calculateresult' }),
        __metadata("design:paramtypes", [])
    ], CalculatorResultStore);
    return CalculatorResultStore;
}(_datorama_akita__WEBPACK_IMPORTED_MODULE_0__["EntityStore"]));



/***/ }),

/***/ "./src/app/application/loans/calculator/services/config.service.ts":
/*!*************************************************************************!*\
  !*** ./src/app/application/loans/calculator/services/config.service.ts ***!
  \*************************************************************************/
/*! exports provided: ConfigService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigService", function() { return ConfigService; });
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @env/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");




var ConfigService = /** @class */ (function () {
    function ConfigService(_http) {
        this._http = _http;
    }
    ConfigService.prototype.updateFtp = function (newFtp, startDate) {
        var stringify = JSON.stringify(newFtp);
        var body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            .append('data', stringify)
            .append('startDate', startDate);
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/x-www-form-urlencoded' });
        return this._http.post(_env_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].endpoint + "/parsetable", body, { headers: headers });
    };
    ConfigService.ngInjectableDef = _angular_core__WEBPACK_IMPORTED_MODULE_2__["defineInjectable"]({ factory: function ConfigService_Factory() { return new ConfigService(_angular_core__WEBPACK_IMPORTED_MODULE_2__["inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); }, token: ConfigService, providedIn: "root" });
    return ConfigService;
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

/***/ "./src/app/application/loans/calculator/state/calculator.model.ts":
/*!************************************************************************!*\
  !*** ./src/app/application/loans/calculator/state/calculator.model.ts ***!
  \************************************************************************/
/*! exports provided: createCalculator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCalculator", function() { return createCalculator; });
/* harmony import */ var _datorama_akita__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @datorama/akita */ "./node_modules/@datorama/akita/fesm5/datorama-akita.js");
// Here models definition

function createCalculator(data) {
    return {
        id: Object(_datorama_akita__WEBPACK_IMPORTED_MODULE_0__["guid"])(),
        ftp: data.ftp,
        gross: data.gross,
        decent: data.decent,
        result: data.result
    };
}


/***/ }),

/***/ "./src/app/application/loans/calculator/state/calculator.query.ts":
/*!************************************************************************!*\
  !*** ./src/app/application/loans/calculator/state/calculator.query.ts ***!
  \************************************************************************/
/*! exports provided: CalculatorQuery, todosQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalculatorQuery", function() { return CalculatorQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "todosQuery", function() { return todosQuery; });
/* harmony import */ var _calculator_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calculator.store */ "./src/app/application/loans/calculator/state/calculator.store.ts");
/* harmony import */ var _datorama_akita__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @datorama/akita */ "./node_modules/@datorama/akita/fesm5/datorama-akita.js");
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




var CalculatorQuery = /** @class */ (function (_super) {
    __extends(CalculatorQuery, _super);
    //getCalculator = this.select(calculator => state.calculator[])
    function CalculatorQuery(store) {
        var _this = _super.call(this, store) || this;
        _this.store = store;
        _this.selectUiState$ = _this.select(function (state) { return state.config; });
        _this.lastVersion$ = _this.select(function (state) { return state.config.lastVersion; });
        _this.prevVersion$ = _this.select(function (state) { return state.config.prevVersion; });
        return _this;
    }
    CalculatorQuery.ngInjectableDef = _angular_core__WEBPACK_IMPORTED_MODULE_2__["defineInjectable"]({ factory: function CalculatorQuery_Factory() { return new CalculatorQuery(_angular_core__WEBPACK_IMPORTED_MODULE_2__["inject"](_calculator_store__WEBPACK_IMPORTED_MODULE_0__["CalculatorStore"])); }, token: CalculatorQuery, providedIn: "root" });
    return CalculatorQuery;
}(_datorama_akita__WEBPACK_IMPORTED_MODULE_1__["QueryEntity"]));

var todosQuery = new CalculatorQuery(_calculator_store__WEBPACK_IMPORTED_MODULE_0__["calculatorStore"]);


/***/ }),

/***/ "./src/app/application/loans/calculator/state/calculator.service.ts":
/*!**************************************************************************!*\
  !*** ./src/app/application/loans/calculator/state/calculator.service.ts ***!
  \**************************************************************************/
/*! exports provided: CalculatorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalculatorService", function() { return CalculatorService; });
/* harmony import */ var _calculator_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calculator.store */ "./src/app/application/loans/calculator/state/calculator.store.ts");
/* harmony import */ var _calculator_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./calculator.query */ "./src/app/application/loans/calculator/state/calculator.query.ts");
/* harmony import */ var _calculator_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./calculator.model */ "./src/app/application/loans/calculator/state/calculator.model.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @env/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


// import { CalculatorDataService } from './calculator-data.service';








var CalculatorService = /** @class */ (function () {
    function CalculatorService(
    // private calculatorDataService: CalculatorDataService,
    _calculatorStore, _calculatorQuery, _http) {
        this._calculatorStore = _calculatorStore;
        this._calculatorQuery = _calculatorQuery;
        this._http = _http;
    }
    // getStudents(): Observable<Array<Calculator>> {
    /*
    const request = this.studentDataService.getStudents().pipe(
      tap(s => this.studentStore.set(s))
    );
    */
    //  return this.studentQuery.isPristine ? request : noop(); // request
    // }
    CalculatorService.prototype.calculateScore = function (state) {
        var _this = this;
        var _headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({ 'Content-Type': 'application/x-www-form-urlencoded' });
        var _body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpParams"]().append('config', JSON.stringify(state));
        return this._http.post(_env_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].endpoint + "/loans/calculator/calculate", _body, { headers: _headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (data) {
            var newCalculator = Object(_calculator_model__WEBPACK_IMPORTED_MODULE_2__["createCalculator"])(data);
            _this._calculatorStore.add(newCalculator);
            //this._calculatorStore.setActive(newCalculator);
        }));
    };
    CalculatorService.prototype.lastRevision = function () {
        var _this = this;
        var request = this._http.get(_env_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].endpoint + "/loans/calculator/revision").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (data) { return _this._calculatorStore.updateState(data); }));
        return request;
    };
    CalculatorService.prototype.calculate = function () {
        var _this = this;
        var request = this._http.get(_env_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].endpoint + "/loans/calculator/revision").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (data) { return _this._calculatorStore.add(Object(_calculator_model__WEBPACK_IMPORTED_MODULE_2__["createCalculator"])(data)); }));
        return request;
    };
    CalculatorService.prototype.updateState = function (state) {
        return this._calculatorStore.updateState(state);
    };
    CalculatorService.prototype.getState$ = function () {
        return this._calculatorQuery.selectUiState$;
    };
    CalculatorService.prototype.saveCalculate = function (result) {
        var _headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({ 'Content-Type': 'application/x-www-form-urlencoded' });
        var _body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpParams"]().append('result', JSON.stringify(result));
        return this._http.post(_env_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].endpoint + "/loans/calculator/save", _body, { headers: _headers });
    };
    CalculatorService.ngInjectableDef = _angular_core__WEBPACK_IMPORTED_MODULE_6__["defineInjectable"]({ factory: function CalculatorService_Factory() { return new CalculatorService(_angular_core__WEBPACK_IMPORTED_MODULE_6__["inject"](_calculator_store__WEBPACK_IMPORTED_MODULE_0__["CalculatorStore"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["inject"](_calculator_query__WEBPACK_IMPORTED_MODULE_1__["CalculatorQuery"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])); }, token: CalculatorService, providedIn: "root" });
    return CalculatorService;
}());



/***/ }),

/***/ "./src/app/application/loans/calculator/state/calculator.store.ts":
/*!************************************************************************!*\
  !*** ./src/app/application/loans/calculator/state/calculator.store.ts ***!
  \************************************************************************/
/*! exports provided: createCalculator, CalculatorStore, calculatorStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCalculator", function() { return createCalculator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalculatorStore", function() { return CalculatorStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calculatorStore", function() { return calculatorStore; });
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
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



function createCalculator(calculator) {
    return __assign({}, calculator);
}
var initialState = {
    config: {
        type: null,
        segment: null,
        collateral: null,
        amount: null,
        isPrevious: null,
        range: null,
        lastVersion: null,
        prevVersion: null,
    }
};
var CalculatorStore = /** @class */ (function (_super) {
    __extends(CalculatorStore, _super);
    function CalculatorStore() {
        return _super.call(this, initialState) || this;
    }
    CalculatorStore.prototype.updateState = function (newState) {
        var _this = this;
        Object(_datorama_akita__WEBPACK_IMPORTED_MODULE_0__["applyTransaction"])(function () {
            _this.updateRoot(function (state) { return ({
                config: __assign({}, state.config, newState)
            }); });
        });
    };
    CalculatorStore.ngInjectableDef = _angular_core__WEBPACK_IMPORTED_MODULE_1__["defineInjectable"]({ factory: function CalculatorStore_Factory() { return new CalculatorStore(); }, token: CalculatorStore, providedIn: "root" });
    CalculatorStore = __decorate([
        Object(_datorama_akita__WEBPACK_IMPORTED_MODULE_0__["StoreConfig"])({ name: 'calculator' }),
        __metadata("design:paramtypes", [])
    ], CalculatorStore);
    return CalculatorStore;
}(_datorama_akita__WEBPACK_IMPORTED_MODULE_0__["EntityStore"]));

var calculatorStore = new CalculatorStore();


/***/ }),

/***/ "./src/app/application/loans/calculator/state/index.ts":
/*!*************************************************************!*\
  !*** ./src/app/application/loans/calculator/state/index.ts ***!
  \*************************************************************/
/*! exports provided: createCalculator, CalculatorStore, calculatorStore, CalculatorQuery, todosQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _calculator_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calculator.store */ "./src/app/application/loans/calculator/state/calculator.store.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createCalculator", function() { return _calculator_store__WEBPACK_IMPORTED_MODULE_0__["createCalculator"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CalculatorStore", function() { return _calculator_store__WEBPACK_IMPORTED_MODULE_0__["CalculatorStore"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "calculatorStore", function() { return _calculator_store__WEBPACK_IMPORTED_MODULE_0__["calculatorStore"]; });

/* harmony import */ var _calculator_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./calculator.query */ "./src/app/application/loans/calculator/state/calculator.query.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CalculatorQuery", function() { return _calculator_query__WEBPACK_IMPORTED_MODULE_1__["CalculatorQuery"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "todosQuery", function() { return _calculator_query__WEBPACK_IMPORTED_MODULE_1__["todosQuery"]; });





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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _button_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./button.component */ "./src/app/modules/buttons/button/button/button.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 




var styles_ButtonComponent = [_button_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_ButtonComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_ButtonComponent, data: {} });

function View_ButtonComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 10, "button", [], [[8, "disabled", 0], [8, "type", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.ClickEvent.emit($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](2, { "rosa-loading": 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 5, "div", [["class", "state-loading"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 2, "i", [["class", "rosa-icon rosa-loading"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 1, ":svg:svg", [["aria-hidden", "true"], ["class", "anticon-spin"], ["data-icon", "loading"], ["fill", "currentColor"], ["height", "1em"], ["viewBox", "0 0 1024 1024"], ["width", "1em"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 0, ":svg:path", [["d", "M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 0 0-94.3-139.9 437.71 437.71 0 0 0-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 1, "span", [["class", "button-value"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵncd"](null, 0)], function (_ck, _v) { var _co = _v.component; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](2, "rosa-button ", _co.getButtonType(_co.button), " ", _co.getButtonSize(_co.size), ""); var currVal_3 = _ck(_v, 2, 0, _co.isLoading); _ck(_v, 1, 0, currVal_2, currVal_3); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.isDisabled; var currVal_1 = _co.type; _ck(_v, 0, 0, currVal_0, currVal_1); }); }
function View_ButtonComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "rosa-button", [], null, null, null, View_ButtonComponent_0, RenderType_ButtonComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 638976, null, 0, _button_component__WEBPACK_IMPORTED_MODULE_3__["ButtonComponent"], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var ButtonComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("rosa-button", _button_component__WEBPACK_IMPORTED_MODULE_3__["ButtonComponent"], View_ButtonComponent_Host_0, { tabindex: "tabindex", type: "type", button: "button", size: "size", isDisabled: "isDisabled", isLoading: "isLoading" }, { ClickEvent: "ClickEvent" }, ["*"]);



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
var styles = ["[_nghost-%COMP%] {\n  transition: all .3s ease;\n  line-height: 1em; }\n  [_nghost-%COMP%]:focus {\n    outline: none; }\n  [_nghost-%COMP%]:active {\n    outline: rgba(0, 0, 0, 0) auto 0; }\n  .rosa-button__primary[_ngcontent-%COMP%] {\n  color: #fff !important;\n  background-color: #e60028 !important;\n  border-color: #e60028 !important; }\n  .rosa-button__secondary[_ngcontent-%COMP%] {\n  color: #464648 !important;\n  background-color: #eaeeef !important;\n  border-color: #eaeeef !important; }\n  .rosa-button__ghost[_ngcontent-%COMP%] {\n  color: #464648;\n  background-color: #FFF;\n  border-color: #464648; }\n  .rosa-button__black[_ngcontent-%COMP%] {\n  color: #cfcfcf;\n  background-color: #20201b;\n  border-color: #20201b; }\n  .rosa-button__white[_ngcontent-%COMP%] {\n  color: #464648;\n  background-color: #FFF;\n  border-color: #FFF; }\n  .rosa-button__medium[_ngcontent-%COMP%] {\n  line-height: 32px;\n  height: 36px;\n  padding: 0 16px !important; }\n  .rosa-button__medium[_ngcontent-%COMP%] {\n  line-height: 24px;\n  height: 24px;\n  padding: 0 16px !important; }\n  .rosa-button__inline[_ngcontent-%COMP%] {\n  line-height: 28px;\n  height: 30px;\n  padding: 0 12px !important; }\n  .rosa-button__link[_ngcontent-%COMP%] {\n  color: #e60028 !important;\n  box-shadow: none !important;\n  padding: 0 !important; }\n  .rosa-button__link[_ngcontent-%COMP%]:hover {\n    color: #464648 !important; }\n  .rosa-button__link[_nghost-%COMP%]   span[_ngcontent-%COMP%] {\n    color: #e60028 !important;\n    box-shadow: none !important;\n    padding: 0 !important; }\n  .rosa-button[_ngcontent-%COMP%] {\n  padding: 0;\n  border: none;\n  font-family: inherit;\n  color: inherit;\n  background-color: transparent;\n  cursor: pointer;\n  font-size: 13px;\n  font-weight: 500;\n  box-shadow: 0 2px 0 rgba(0, 0, 0, 0.045);\n  border-radius: 4px;\n  min-width: 80px;\n  box-sizing: border-box;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  outline: none; }\n  .rosa-button[_ngcontent-%COMP%]:active {\n    outline: rgba(0, 0, 0, 0) auto 0; }\n  .rosa-button[_ngcontent-%COMP%]:disabled {\n    opacity: 0.65 !important; }\n  .button-value[_ngcontent-%COMP%] {\n  display: flex;\n  pointer-events: none; }\n  .state-loading[_ngcontent-%COMP%] {\n  display: none; }\n  .state-loading[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    margin-left: 8px; }\n  .rosa-loading[_ngcontent-%COMP%]   .button-value[_ngcontent-%COMP%] {\n  display: none; }\n  .rosa-loading[_ngcontent-%COMP%]   .state-loading[_ngcontent-%COMP%] {\n  display: inline-block !important; }\n  .rosa-icon[_ngcontent-%COMP%] {\n  margin-left: -8px;\n  transition: margin-left 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);\n  -webkit-animation: loadingCircle 1s infinite linear;\n          animation: loadingCircle 1s infinite linear; }\n  .rosa-button.state-loading[_ngcontent-%COMP%]::before {\n  display: block; }\n  .rosa-button[_ngcontent-%COMP%]::before {\n  position: absolute;\n  top: -1px;\n  right: -1px;\n  bottom: -1px;\n  left: -1px;\n  z-index: 1;\n  display: none;\n  background: #fff;\n  border-radius: inherit;\n  opacity: .35;\n  transition: opacity .2s;\n  pointer-events: none;\n  content: ''; }\n  .rosa-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  display: inline-block;\n  transition: margin-left 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);\n  -webkit-animation: loadingCircle 1s infinite linear;\n          animation: loadingCircle 1s infinite linear; }\n  @-webkit-keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg); } }\n  @keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg); } }\n  .rosa-icon[_ngcontent-%COMP%] {\n  line-height: 1; }\n  .ant-btn[_ngcontent-%COMP%]    > i[_ngcontent-%COMP%], .ant-btn[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  display: inline-block;\n  pointer-events: none; }\n  .rosa-icon[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-style: normal;\n  line-height: 0;\n  text-align: center;\n  text-transform: none;\n  vertical-align: -0.125em;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale; }\n  .rosa-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  display: inline-block; }\n  .rosa-loading[_ngcontent-%COMP%] {\n  display: inline-block; }\n  .ant-btn[_ngcontent-%COMP%]    > .anticon[_ngcontent-%COMP%]    + span[_ngcontent-%COMP%], .ant-btn[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]    + .anticon[_ngcontent-%COMP%] {\n  margin-left: 8px; }\n  .ant-btn[_ngcontent-%COMP%]    > i[_ngcontent-%COMP%], .ant-btn[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  display: inline-block;\n  pointer-events: none; }\n  .ant-btn-primary[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #1890ff;\n  border-color: #1890ff;\n  text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.12);\n  box-shadow: 0 2px 0 rgba(0, 0, 0, 0.045); }"];



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
        this.type = 'button';
        this.button = 'primary';
        this.size = 'medium';
        // ----- Params ------- //
        this.isDisabled = false;
        this.isLoading = false;
        // ----- Outputs ------- //
        this.ClickEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ButtonComponent.prototype.getButtonType = function (type) {
        if (type === void 0) { type = 'primary'; }
        switch (type) {
            case 'primary':
                return 'rosa-button__primary';
            case 'secondary':
                return 'rosa-button__secondary';
            case 'ghost':
                return 'rosa-button__ghost';
            case 'black':
                return 'rosa-button__black';
            case 'white':
                return 'rosa-button__white';
            case 'link':
                return 'rosa-button__link';
        }
    };
    ButtonComponent.prototype.getButtonSize = function (size) {
        if (size === void 0) { size = 'medium'; }
        switch (size) {
            case 'medium':
                return 'rosa-button__medium';
            case 'small':
                return 'rosa-button__small';
            case 'large':
                return 'rosa-button__large';
            case 'inline':
                return 'rosa-button__inline';
        }
    };
    ButtonComponent.prototype.ngOnInit = function () {
    };
    ButtonComponent.prototype.ngOnChanges = function (changes) {
    };
    return ButtonComponent;
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _checkbox_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./checkbox.component */ "./src/app/modules/forms/checkbox/checkbox/checkbox.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 





var styles_CheckboxComponent = [_checkbox_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_CheckboxComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_CheckboxComponent, data: {} });

function View_CheckboxComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](402653184, 1, { _radioControl: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 14, "div", [["class", "checkbox__container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, [["checkbox", 1]], null, 5, "input", [["class", "checkbox__input"], ["type", "checkbox"]], [[8, "value", 0], [8, "name", 0], [8, "id", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "blur"], [null, "change"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("change" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).onChange($event.target.checked) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("blur" === en)) {
        var pd_2 = (_co.onTouched() !== false);
        ad = (pd_2 && ad);
    } if (("change" === en)) {
        var pd_3 = (_co.onChange($event.target.value) !== false);
        ad = (pd_3 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["CheckboxControlValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["CheckboxControlValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 540672, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlDirective"], [[8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_k"]]], { form: [0, "form"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlDirective"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 7, "div", [["class", "checkbox__label"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 4, "label", [], [[8, "htmlFor", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { ngClass: [0, "ngClass"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](11, { "label__medium": 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 1, "span", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵncd"](null, 0), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, null, 1, "span", [["class", "helper"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵncd"](null, 1)], function (_ck, _v) { var _co = _v.component; var currVal_10 = _co.controlOptions; _ck(_v, 5, 0, currVal_10); var currVal_12 = _ck(_v, 11, 0, (_co.labelWeight == "medium")); _ck(_v, 10, 0, currVal_12); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.value; var currVal_1 = _co.name; var currVal_2 = _co.index; var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).ngClassUntouched; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).ngClassTouched; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).ngClassPristine; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).ngClassDirty; var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).ngClassValid; var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).ngClassInvalid; var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).ngClassPending; _ck(_v, 2, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9); var currVal_11 = _co.index; _ck(_v, 9, 0, currVal_11); }); }
function View_CheckboxComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "rosa-checkbox", [], null, null, null, View_CheckboxComponent_0, RenderType_CheckboxComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](5120, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_checkbox_component__WEBPACK_IMPORTED_MODULE_4__["CheckboxComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 114688, null, 0, _checkbox_component__WEBPACK_IMPORTED_MODULE_4__["CheckboxComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null)], function (_ck, _v) { _ck(_v, 2, 0); }, null); }
var CheckboxComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("rosa-checkbox", _checkbox_component__WEBPACK_IMPORTED_MODULE_4__["CheckboxComponent"], View_CheckboxComponent_Host_0, { name: "name", value: "value", labelWeight: "labelWeight", controlOptions: "controlOptions" }, {}, ["[checkbox-group=label]", "[checkbox-group=helper]"]);



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
var styles = [".checkbox__container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  padding-top: 4px; }\n\ninput[type=checkbox][_ngcontent-%COMP%] {\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  outline: none;\n  box-shadow: none;\n  width: 18px;\n  height: 18px;\n  margin: 0;\n  border-radius: 2px;\n  margin-right: 8px;\n  border: 1px solid #d4d4d4;\n  background-color: #fff; }\n\ninput[type=checkbox][_ngcontent-%COMP%]:disabled {\n  cursor: not-allowed;\n  border: 1px solid #d4d4d4;\n  background-color: #f5f5f5; }\n\ninput[type=checkbox][_ngcontent-%COMP%]:disabled    ~ .checkbox__label[_ngcontent-%COMP%] {\n    opacity: .65; }\n\ninput[type=checkbox][_ngcontent-%COMP%]:disabled:before {\n    background-color: #bbbec7 !important; }\n\ninput[type=checkbox][_ngcontent-%COMP%]:disabled:after {\n    background-color: #bbbec7 !important; }\n\ninput[type=checkbox][_ngcontent-%COMP%]:checked {\n  position: relative; }\n\ninput[type=checkbox][_ngcontent-%COMP%]:checked:before, input[type=checkbox][_ngcontent-%COMP%]:checked:after {\n  content: '';\n  display: block;\n  position: absolute;\n  width: 2px;\n  background-color: var(--color-typo-primary); }\n\ninput[type=checkbox][_ngcontent-%COMP%]:checked:after {\n  bottom: 4px;\n  left: 5px;\n  height: 5px;\n  -webkit-transform: rotate(-45deg);\n          transform: rotate(-45deg); }\n\ninput[type=checkbox][_ngcontent-%COMP%]:checked:before {\n  top: 4px;\n  right: 5px;\n  height: 9px;\n  -webkit-transform: rotate(45deg);\n          transform: rotate(45deg); }\n\nlabel[_ngcontent-%COMP%] {\n  letter-spacing: 0;\n  color: var(--color-typo-primary);\n  font-size: var(--size-typo-m);\n  line-height: 18px;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  display: block;\n  cursor: pointer; }\n\nlabel.disabled[_ngcontent-%COMP%] {\n    opacity: .5; }\n\n.label__default[_ngcontent-%COMP%] {\n  font-weight: 400; }\n\n.label__medium[_ngcontent-%COMP%] {\n  font-weight: 500; }\n\n.helper[_ngcontent-%COMP%] {\n  color: #76767c;\n  font-size: 14px;\n  line-height: 20px; }"];



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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");


var CheckboxComponent = /** @class */ (function () {
    function CheckboxComponent(_renderer, _elementRef) {
        this._renderer = _renderer;
        this._elementRef = _elementRef;
        this.labelWeight = "regular";
        this.index = "checkbox_" + this.randomInteger(10, 1000);
        this.onChange = function (_) { };
        this.onTouched = function () { };
    }
    Object.defineProperty(CheckboxComponent.prototype, "controlOptions", {
        get: function () {
            return this._controlOptions;
        },
        set: function (controlOptions) {
            this._controlOptions = controlOptions;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CheckboxComponent.prototype, "inputElement", {
        get: function () {
            return this._radioControl;
        },
        enumerable: true,
        configurable: true
    });
    CheckboxComponent.prototype.ngOnInit = function () {
    };
    CheckboxComponent.prototype.writeValue = function (value) {
        this._renderer.setElementProperty(this._elementRef.nativeElement, 'checked', value === this._elementRef.nativeElement.value);
    };
    CheckboxComponent.prototype.registerOnChange = function (fn) { this.onChange = fn; };
    CheckboxComponent.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
    CheckboxComponent.prototype.randomInteger = function (min, max) {
        var rand = min - 0.5 + Math.random() * (max - min + 1);
        rand = Math.round(rand);
        return rand;
    };
    return CheckboxComponent;
}());

/*
import { Component, OnInit, Output, EventEmitter, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'rosa-checkbox',
  templateUrl: './checkbox.component.pug',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {
  // ----- Default ------- //
  @Input() public value: any;
  @Input() public label = 'заголовок';
  @Input() public name = '';
  // ----- State ------- //
  @Input() public checked = false;
  // ----- Initial ------- //
  @ViewChild('checkbox') checkboxControl: ElementRef;
  public index = `radio_${this.randomInteger(10, 1000)}`;
  // ----- Output ------- //
  @Output() ClickEvent: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
    const isChecked = this.checked && this.setChecked(this.checkboxControl.nativeElement);
  }
  public setChecked(radio: HTMLInputElement) {
    radio.checked = true;
    this.emitValue(this.value);
  }
  public emitValue(value): void {
    this.ClickEvent.emit({value: value, checked: this.checkboxControl.nativeElement.checked});
  }

  public randomInteger(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    rand = Math.round(rand);
    return rand;
  }
}
*/


/***/ }),

/***/ "./src/app/modules/forms/datepicker/datepicker-input.directive.ts":
/*!************************************************************************!*\
  !*** ./src/app/modules/forms/datepicker/datepicker-input.directive.ts ***!
  \************************************************************************/
/*! exports provided: DatepickerInputDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatepickerInputDirective", function() { return DatepickerInputDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _datepicker_datepicker_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./datepicker/datepicker.component */ "./src/app/modules/forms/datepicker/datepicker/datepicker.component.ts");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/esm5/portal.es5.js");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/esm5/overlay.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");





var DatepickerInputDirective = /** @class */ (function () {
    function DatepickerInputDirective(overlayPositionBuilder, _elementRef, overlay, scrollStrategyOpt, control) {
        this.overlayPositionBuilder = overlayPositionBuilder;
        this._elementRef = _elementRef;
        this.overlay = overlay;
        this.scrollStrategyOpt = scrollStrategyOpt;
        this.control = control;
        this.isActive = false;
        this.setValue = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.scrollStrategy = this.scrollStrategyOpt.block();
    }
    // private componentRef: ComponentRef<DatepickerComponent>;
    DatepickerInputDirective.prototype.show = function () {
        var _this = this;
        if (this.overlayRef.hasAttached()) {
            return this.overlayRef.detach();
        }
        var datepickerPortal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__["ComponentPortal"](_datepicker_datepicker_component__WEBPACK_IMPORTED_MODULE_1__["DatepickerComponent"]);
        this.datepickerRef = this.overlayRef.attach(datepickerPortal);
        this.datepickerRef.instance.selected.subscribe(function (data) {
            _this.control.control.setValue(data);
            // this._elementRef.nativeElement.value = data;
            console.log(data);
            _this.overlayRef.detach();
        });
    };
    DatepickerInputDirective.prototype.hide = function () {
        if (this.overlayRef.hasAttached()) {
            // return this.overlayRef.detach();
        }
    };
    DatepickerInputDirective.prototype.onClick = function (targetElement) {
        var clickedInside = this._elementRef.nativeElement.contains(targetElement);
        if (!clickedInside) {
            // this.clickOutside.emit(null);
        }
    };
    DatepickerInputDirective.prototype.ngOnInit = function () {
        var positionStrategy = this.overlayPositionBuilder
            // Create position attached to the elementRef
            .flexibleConnectedTo(this._elementRef)
            // Describe how to connect overlay to the elementRef
            // Means, attach overlay's center bottom point to the
            // top center point of the elementRef.
            .withViewportMargin(16)
            .withLockedPosition()
            .withPositions([
            {
                originX: 'start',
                originY: 'bottom',
                overlayX: 'start',
                overlayY: 'top'
            },
            {
                originX: 'start',
                originY: 'top',
                overlayX: 'start',
                overlayY: 'bottom'
            },
            {
                originX: 'end',
                originY: 'bottom',
                overlayX: 'end',
                overlayY: 'top'
            },
            {
                originX: 'end',
                originY: 'top',
                overlayX: 'end',
                overlayY: 'bottom'
            }
        ]);
        this.overlayRef = this.overlay.create({ positionStrategy: positionStrategy, scrollStrategy: this.scrollStrategy });
    };
    return DatepickerInputDirective;
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
var styles = [".form-group[_ngcontent-%COMP%] {\n  width: 100%;\n  position: relative; }\n\n.size-default[_ngcontent-%COMP%] {\n  margin-bottom: 24px; }\n\n.size-submit[_ngcontent-%COMP%] {\n  margin-top: 12px;\n  margin-bottom: 24px; }\n\n.size-submit[_ngcontent-%COMP%]   .form-group__label[_ngcontent-%COMP%] {\n    display: none; }\n\n.form-group__label[_ngcontent-%COMP%] {\n  margin-bottom: 8px; }\n\n.form-group__control[_ngcontent-%COMP%] {\n  position: relative; }\n\n.form-group__hint[_ngcontent-%COMP%] {\n  margin-top: 4px; }\n\n.form-group_group[_ngcontent-%COMP%] {\n  display: flex; }\n\n.form-group_group[_ngcontent-%COMP%]   rosa-radio[_ngcontent-%COMP%] {\n    padding-right: 16px; }"];



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
var styles = [".hint[_ngcontent-%COMP%] {\n  letter-spacing: 0.1px;\n  font-size: var(--size-typo-xs);\n  line-height: 16px;\n  font-weight: 500;\n  display: inline-block;\n  width: 100%; }\n\n.state_default[_ngcontent-%COMP%] {\n  color: #76767c; }\n\n.state_error[_ngcontent-%COMP%] {\n  color: var(--color-alert); }\n\n.state_success[_ngcontent-%COMP%] {\n  color: var(--color-success); }\n\n.state_warning[_ngcontent-%COMP%] {\n  color: var(--color-warning); }\n\n.state_dark[_ngcontent-%COMP%] {\n  border: 1px solid var(--color-typo-secondary) !important; }"];



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

/***/ "./src/app/modules/forms/iconinput/iconinput/iconinput.component.ngfactory.js":
/*!************************************************************************************!*\
  !*** ./src/app/modules/forms/iconinput/iconinput/iconinput.component.ngfactory.js ***!
  \************************************************************************************/
/*! exports provided: RenderType_IconinputComponent, View_IconinputComponent_0, View_IconinputComponent_Host_0, IconinputComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_IconinputComponent", function() { return RenderType_IconinputComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_IconinputComponent_0", function() { return View_IconinputComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_IconinputComponent_Host_0", function() { return View_IconinputComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconinputComponentNgFactory", function() { return IconinputComponentNgFactory; });
/* harmony import */ var _iconinput_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./iconinput.component.scss.shim.ngstyle */ "./src/app/modules/forms/iconinput/iconinput/iconinput.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _iconinput_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./iconinput.component */ "./src/app/modules/forms/iconinput/iconinput/iconinput.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 




var styles_IconinputComponent = [_iconinput_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_IconinputComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_IconinputComponent, data: {} });

function View_IconinputComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "div", [["class", "icon__date"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 1, ":svg:svg", [["xmlns", "http://www.w3.org/2000/svg"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 0, ":svg:path", [["d", "M20 8v9.436c0 .892-.093 1.215-.267 1.54a1.81 1.81 0 0 1-.756.757c-.326.174-.65.267-1.54.267H6.563c-.892 0-1.215-.093-1.54-.267a1.817 1.817 0 0 1-.757-.756c-.174-.326-.267-.65-.267-1.54V6a2 2 0 0 1 2-2h1V2.5a.5.5 0 0 1 1 0V4h8V2.5a.5.5 0 1 1 1 0V4h1a2 2 0 0 1 2 2v2zM6.564 8c-.662 0-.864.039-1.07.149a.818.818 0 0 0-.345.346C5.039 8.7 5 8.902 5 9.564v7.872c0 .662.039.864.149 1.07a.818.818 0 0 0 .346.345c.205.11.407.149 1.069.149h10.872c.662 0 .864-.039 1.07-.149a.818.818 0 0 0 .345-.346c.11-.205.149-.407.149-1.069V9.564c0-.662-.039-.864-.149-1.07a.818.818 0 0 0-.346-.345C18.3 8.039 18.098 8 17.436 8H6.564zM8 13a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm4 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm4 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm-8 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm4 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm4 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"], ["fill", "#464648"], ["fill-rule", "evenodd"]], null, null, null, null, null))], function (_ck, _v) { var _co = _v.component; var currVal_0 = "icon__date"; var currVal_1 = _co.iconPositionClass; _ck(_v, 1, 0, currVal_0, currVal_1); }, null); }
function View_IconinputComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 5, "div", [["class", "icon__dropdown"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 3, ":svg:svg", [["viewBox", "0 0 12 6"], ["xmlns", "http://www.w3.org/2000/svg"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 2, ":svg:g", [["fill", "#464648"], ["transform", "translate(-396.000000, -235.000000)"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 1, ":svg:g", [["transform", "translate(128.000000, 213.000000)"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 0, ":svg:path", [["d", "M280,22.7581818 L279.1564,22 L273.9922,26.506 L273.4414,26.0254545 L273.4444,26.0281818 L268.8562,22.0245455 L268,22.7712727 C269.2678,23.878 272.8084,26.9674545 273.9922,28 C274.8718,27.2330909 274.0144,27.9809091 280,22.7581818"]], null, null, null, null, null))], function (_ck, _v) { var _co = _v.component; var currVal_0 = "icon__dropdown"; var currVal_1 = _co.iconPositionClass; _ck(_v, 1, 0, currVal_0, currVal_1); }, null); }
function View_IconinputComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 6, "div", [["class", "icon-input_container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_IconinputComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_IconinputComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 1, "div", [["class", "input"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵncd"](null, 0)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.getIcon("calendar"); _ck(_v, 2, 0, currVal_0); var currVal_1 = _co.getIcon("dropdown"); _ck(_v, 4, 0, currVal_1); }, null); }
function View_IconinputComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "rosa-iconinput", [], null, null, null, View_IconinputComponent_0, RenderType_IconinputComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _iconinput_component__WEBPACK_IMPORTED_MODULE_3__["IconinputComponent"], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var IconinputComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("rosa-iconinput", _iconinput_component__WEBPACK_IMPORTED_MODULE_3__["IconinputComponent"], View_IconinputComponent_Host_0, { icon: "icon", position: "position" }, {}, ["*"]);



/***/ }),

/***/ "./src/app/modules/forms/iconinput/iconinput/iconinput.component.scss.shim.ngstyle.js":
/*!********************************************************************************************!*\
  !*** ./src/app/modules/forms/iconinput/iconinput/iconinput.component.scss.shim.ngstyle.js ***!
  \********************************************************************************************/
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
var styles = [".icon__dropdown[_ngcontent-%COMP%] {\n  width: 14px;\n  height: 14px;\n  display: inline-block;\n  position: absolute;\n  top: 9px; }\n  .icon__dropdown[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 100%;\n    display: inline-block; }\n  .icon__date[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  display: inline-block;\n  position: absolute;\n  top: 4px; }\n  .icon__date[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 100%;\n    display: inline-block; }\n  .icon-input_container[_ngcontent-%COMP%] {\n  position: relative;\n  width: auto;\n  height: auto; }\n  .icon__right[_ngcontent-%COMP%] {\n  right: 12px; }\n  .icon__left[_ngcontent-%COMP%] {\n  left: 8px; }\n  .input   [_nghost-%COMP%]   .rosa-input[_ngcontent-%COMP%] {\n  padding-left: 28px !important; }"];



/***/ }),

/***/ "./src/app/modules/forms/iconinput/iconinput/iconinput.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/modules/forms/iconinput/iconinput/iconinput.component.ts ***!
  \**************************************************************************/
/*! exports provided: IconinputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconinputComponent", function() { return IconinputComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var IconinputComponent = /** @class */ (function () {
    function IconinputComponent() {
        this.icon = "calendar";
        this.position = "left";
    }
    IconinputComponent.prototype.ngOnInit = function () {
        this.iconPositionClass = this.getPosition(this.position);
    };
    IconinputComponent.prototype.getPosition = function (position) {
        switch (position) {
            case "left":
                return "icon__left";
            case "right":
                return "icon__right";
        }
    };
    IconinputComponent.prototype.getIcon = function (value) {
        return this.icon === value;
    };
    return IconinputComponent;
}());



/***/ }),

/***/ "./src/app/modules/forms/input/input.directive.ts":
/*!********************************************************!*\
  !*** ./src/app/modules/forms/input/input.directive.ts ***!
  \********************************************************/
/*! exports provided: RosainputDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RosainputDirective", function() { return RosainputDirective; });
var RosainputDirective = /** @class */ (function () {
    function RosainputDirective() {
        this._size = "medium";
    }
    Object.defineProperty(RosainputDirective.prototype, "setSize", {
        set: function (value) {
            this._size = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RosainputDirective.prototype, "medium", {
        get: function () {
            return this._size === "medium";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RosainputDirective.prototype, "textarea", {
        get: function () {
            return this._size === "textarea";
        },
        enumerable: true,
        configurable: true
    });
    RosainputDirective.SIZE_MEDIUM = 'medium';
    return RosainputDirective;
}());



/***/ }),

/***/ "./src/app/modules/forms/label/rosa-label.directive.ts":
/*!*************************************************************!*\
  !*** ./src/app/modules/forms/label/rosa-label.directive.ts ***!
  \*************************************************************/
/*! exports provided: RosaLabelDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RosaLabelDirective", function() { return RosaLabelDirective; });
var RosaLabelDirective = /** @class */ (function () {
    function RosaLabelDirective() {
        this.size = "medium";
        this.label = true;
    }
    Object.defineProperty(RosaLabelDirective.prototype, "setSize", {
        set: function (value) {
            this.size = value || 'medium';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RosaLabelDirective.prototype, "medium", {
        get: function () {
            return this.size === "medium";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RosaLabelDirective.prototype, "large", {
        get: function () {
            return this.size === "large";
        },
        enumerable: true,
        configurable: true
    });
    RosaLabelDirective.SIZE_MEDIUM = 'medium';
    return RosaLabelDirective;
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _radio_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./radio.component */ "./src/app/modules/forms/radio/radio/radio.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 




var styles_RadioComponent = [_radio_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_RadioComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_RadioComponent, data: {} });

function View_RadioComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](402653184, 1, { _radioControl: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 9, "div", [["class", "radio__container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, [["radio", 1]], null, 6, "input", [["class", "radio__radio"], ["type", "radio"]], [[8, "id", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "blur"], [null, "change"], [null, "input"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("input" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } if (("change" === en)) {
        var pd_4 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).onChange() !== false);
        ad = (pd_4 && ad);
    } if (("blur" === en)) {
        var pd_5 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).onTouched() !== false);
        ad = (pd_5 && ad);
    } if (("blur" === en)) {
        var pd_6 = (_co.onTouched() !== false);
        ad = (pd_6 && ad);
    } if (("change" === en)) {
        var pd_7 = (_co.onChange($event.target.value) !== false);
        ad = (pd_7 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 212992, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RadioControlValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_j"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]], { name: [0, "name"], value: [1, "value"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"], function (p0_0, p1_0) { return [p0_0, p1_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RadioControlValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 540672, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlDirective"], [[8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_k"]]], { form: [0, "form"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlDirective"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 1, "label", [], [[8, "htmlFor", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵncd"](null, 0)], function (_ck, _v) { var _co = _v.component; var currVal_8 = _co.name; var currVal_9 = _co.value; _ck(_v, 4, 0, currVal_8, currVal_9); var currVal_10 = _co.controlOptions; _ck(_v, 6, 0, currVal_10); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", _co.index, ""); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).ngClassUntouched; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).ngClassTouched; var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).ngClassPristine; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).ngClassDirty; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).ngClassValid; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).ngClassInvalid; var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).ngClassPending; _ck(_v, 2, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7); var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", _co.index, ""); _ck(_v, 9, 0, currVal_11); }); }
function View_RadioComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "rosa-radio", [], null, null, null, View_RadioComponent_0, RenderType_RadioComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](5120, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_radio_component__WEBPACK_IMPORTED_MODULE_3__["RadioComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](5120, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"], function (p0_0) { return [p0_0]; }, [_radio_component__WEBPACK_IMPORTED_MODULE_3__["RadioComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 114688, null, 0, _radio_component__WEBPACK_IMPORTED_MODULE_3__["RadioComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null)], function (_ck, _v) { _ck(_v, 3, 0); }, null); }
var RadioComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("rosa-radio", _radio_component__WEBPACK_IMPORTED_MODULE_3__["RadioComponent"], View_RadioComponent_Host_0, { name: "name", value: "value", controlOptions: "controlOptions" }, {}, ["*"]);



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
var styles = [".radio__container[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n  height: 24px;\n  margin-right: 16px;\n  margin-bottom: 4px; }\n\n.radio__radio[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  background-color: var(--color-default);\n  border: 3px solid #d4d4d4;\n  box-sizing: border-box;\n  border-radius: 50%;\n  margin-right: 8px;\n  -moz-appearance: none;\n       appearance: none;\n  -webkit-appearance: none;\n  outline: none !important;\n  transition: border .15s ease; }\n\n.radio__radio[_ngcontent-%COMP%]:checked {\n    border: 5px solid #e60028;\n    transition: border .15s ease; }\n\nlabel[_ngcontent-%COMP%] {\n  letter-spacing: 0;\n  color: var(--color-typo-primary);\n  font-size: var(--size-typo-m);\n  line-height: var(--line-height-typo-m); }\n\nlabel.disabled[_ngcontent-%COMP%] {\n    opacity: .5; }"];



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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");


var RadioComponent = /** @class */ (function () {
    function RadioComponent(_renderer, _elementRef) {
        this._renderer = _renderer;
        this._elementRef = _elementRef;
        this.index = "radio_" + this.randomInteger(10, 1000);
        this.onChange = function (_) { };
        this.onTouched = function () { };
    }
    Object.defineProperty(RadioComponent.prototype, "controlOptions", {
        get: function () {
            return this._controlOptions;
        },
        set: function (controlOptions) {
            this._controlOptions = controlOptions;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RadioComponent.prototype, "inputElement", {
        get: function () {
            return this._radioControl;
        },
        enumerable: true,
        configurable: true
    });
    RadioComponent.prototype.ngOnInit = function () {
    };
    RadioComponent.prototype.writeValue = function (value) {
        this._renderer.setElementProperty(this._elementRef.nativeElement, 'checked', value === this._elementRef.nativeElement.value);
    };
    RadioComponent.prototype.registerOnChange = function (fn) { this.onChange = fn; };
    RadioComponent.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
    RadioComponent.prototype.randomInteger = function (min, max) {
        var rand = min - 0.5 + Math.random() * (max - min + 1);
        rand = Math.round(rand);
        return rand;
    };
    return RadioComponent;
}());



/***/ }),

/***/ "./src/app/modules/forms/select/rosaselect.directive.ts":
/*!**************************************************************!*\
  !*** ./src/app/modules/forms/select/rosaselect.directive.ts ***!
  \**************************************************************/
/*! exports provided: RosaselectDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RosaselectDirective", function() { return RosaselectDirective; });
var RosaselectDirective = /** @class */ (function () {
    function RosaselectDirective() {
        this.size = "medium";
    }
    Object.defineProperty(RosaselectDirective.prototype, "medium", {
        get: function () {
            return this.size === "medium";
        },
        enumerable: true,
        configurable: true
    });
    RosaselectDirective.SIZE_MEDIUM = 'medium';
    return RosaselectDirective;
}());



/***/ }),

/***/ "./src/app/modules/forms/switch/switch/switch.component.ngfactory.js":
/*!***************************************************************************!*\
  !*** ./src/app/modules/forms/switch/switch/switch.component.ngfactory.js ***!
  \***************************************************************************/
/*! exports provided: RenderType_SwitchComponent, View_SwitchComponent_0, View_SwitchComponent_Host_0, SwitchComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_SwitchComponent", function() { return RenderType_SwitchComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_SwitchComponent_0", function() { return View_SwitchComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_SwitchComponent_Host_0", function() { return View_SwitchComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwitchComponentNgFactory", function() { return SwitchComponentNgFactory; });
/* harmony import */ var _switch_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./switch.component.scss.shim.ngstyle */ "./src/app/modules/forms/switch/switch/switch.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _switch_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./switch.component */ "./src/app/modules/forms/switch/switch/switch.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 





var styles_SwitchComponent = [_switch_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_SwitchComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_SwitchComponent, data: {} });

function View_SwitchComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "i", [["aria-label", "icon: check"], ["class", "rosa-switch-icon rosa-icon-check"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, ":svg:svg", [["aria-hidden", "true"], ["data-icon", "check"], ["fill", "currentColor"], ["height", "1em"], ["viewBox", "64 64 896 896"], ["width", "1em"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 0, ":svg:path", [["d", "M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 0 0-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"]], null, null, null, null, null))], null, null); }
function View_SwitchComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "i", [["aria-label", "icon: close"], ["class", "rosa-switch-icon rosa-icon-close"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, ":svg:svg", [["aria-hidden", "true"], ["data-icon", "close"], ["fill", "currentColor"], ["height", "1em"], ["viewBox", "64 64 896 896"], ["width", "1em"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 0, ":svg:path", [["d", "M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"]], null, null, null, null, null))], null, null); }
function View_SwitchComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](402653184, 1, { _switchControl: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 9, "div", [["class", "rosa-switch-group"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, [[1, 0], ["switchControl", 1]], null, 6, "button", [["class", "rosa-switch"], ["role", "switch"], ["rosa-click-animating", "true"], ["type", "button"]], [[8, "id", 0], [8, "disabled", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.toggle($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 4, "span", [["class", "rosa-switch__inner"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_SwitchComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_SwitchComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 0, "div", [["class", "rosa-click-animating-node"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 1, "label", [], [[8, "htmlFor", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵncd"](null, 0)], function (_ck, _v) { var _co = _v.component; var currVal_2 = _co.value; _ck(_v, 5, 0, currVal_2); var currVal_3 = !_co.value; _ck(_v, 7, 0, currVal_3); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.index; var currVal_1 = _co.disabled; _ck(_v, 2, 0, currVal_0, currVal_1); var currVal_4 = _co.index; _ck(_v, 9, 0, currVal_4); }); }
function View_SwitchComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "rosa-switch", [], null, null, null, View_SwitchComponent_0, RenderType_SwitchComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](5120, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_switch_component__WEBPACK_IMPORTED_MODULE_4__["SwitchComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 114688, null, 0, _switch_component__WEBPACK_IMPORTED_MODULE_4__["SwitchComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null)], function (_ck, _v) { _ck(_v, 2, 0); }, null); }
var SwitchComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("rosa-switch", _switch_component__WEBPACK_IMPORTED_MODULE_4__["SwitchComponent"], View_SwitchComponent_Host_0, {}, {}, ["*"]);



/***/ }),

/***/ "./src/app/modules/forms/switch/switch/switch.component.scss.shim.ngstyle.js":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/forms/switch/switch/switch.component.scss.shim.ngstyle.js ***!
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
var styles = ["label[_ngcontent-%COMP%] {\n  color: #464648;\n  font-size: 14px;\n  line-height: 20px;\n  margin-left: 8px;\n  font-weight: 500; }\n\n.rosa-switch-group[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-left: 2px;\n  margin-bottom: 4px; }\n\n.rosa-switch[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  color: rgba(0, 0, 0, 0.65);\n  font-size: 14px;\n  font-variant: tabular-nums;\n  line-height: 1.5;\n  list-style: none;\n  -webkit-font-feature-settings: 'tnum';\n          font-feature-settings: 'tnum';\n  position: relative;\n  display: inline-block;\n  box-sizing: border-box;\n  min-width: 44px;\n  height: 22px;\n  line-height: 20px;\n  vertical-align: middle;\n  background-color: #bbbdc7;\n  border: 1px solid transparent;\n  border-radius: 100px;\n  cursor: pointer;\n  transition: all .36s;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  -webkit-appearance: none; }\n\n.rosa-switch[_ngcontent-%COMP%]::after {\n    position: absolute;\n    top: 1px;\n    left: 1px;\n    width: 18px;\n    height: 18px;\n    background-color: #fff;\n    border-radius: 18px;\n    cursor: pointer;\n    transition: all 0.36s cubic-bezier(0.78, 0.14, 0.15, 0.86);\n    content: ' ';\n    box-shadow: 0 2px 4px 0 rgba(35, 0, 11, 0.2); }\n\n.rosa-switch[_ngcontent-%COMP%]:focus {\n    outline: 0;\n    box-shadow: 0 0 0 2px rgba(230, 0, 40, 0.2); }\n\n.rosa-switch__inner[_ngcontent-%COMP%] {\n  display: block;\n  margin-right: 6px;\n  margin-left: 24px;\n  color: #fff;\n  font-size: 12px;\n  margin-top: -1px; }\n\n.rosa-switch-checked[_ngcontent-%COMP%] {\n  background-color: #e60028; }\n\n.rosa-switch-checked[_ngcontent-%COMP%]::after {\n    left: 100%;\n    margin-left: -1px;\n    -webkit-transform: translateX(-100%);\n    transform: translateX(-100%); }\n\n.rosa-switch-checked[_ngcontent-%COMP%]   .rosa-switch__inner[_ngcontent-%COMP%] {\n    margin-right: 24px;\n    margin-left: 6px; }\n\n[rosa-click-animating-without-extra-node='true'][_ngcontent-%COMP%]::after, .rosa-click-animating-node[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -1px;\n  right: -1px;\n  bottom: -1px;\n  left: -1px;\n  display: block;\n  border: 0 solid #e60028;\n  border-radius: inherit;\n  opacity: .2;\n  -webkit-animation: fadeEffect 2s cubic-bezier(0.08, 0.82, 0.17, 1), waveEffect 0.4s cubic-bezier(0.08, 0.82, 0.17, 1);\n          animation: fadeEffect 2s cubic-bezier(0.08, 0.82, 0.17, 1), waveEffect 0.4s cubic-bezier(0.08, 0.82, 0.17, 1);\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  pointer-events: none;\n  content: ''; }\n\n.rosa-switch-icon[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-style: normal;\n  line-height: 0;\n  text-align: center;\n  text-transform: none;\n  vertical-align: -0.125em;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased; }\n\n.rosa-switch-loading[_ngcontent-%COMP%], .rosa-switch-disabled[_ngcontent-%COMP%] {\n  cursor: not-allowed;\n  opacity: .4; }\n\n.ant-switch-checked.ant-switch-loading[_ngcontent-%COMP%]   .ant-switch-loading-icon[_ngcontent-%COMP%] {\n  color: #1890ff; }\n\n.ant-switch-checked[_ngcontent-%COMP%]   .ant-switch-loading-icon[_ngcontent-%COMP%] {\n  left: 100%;\n  margin-left: -19px; }\n\n.ant-switch-loading[_ngcontent-%COMP%]   .ant-switch-loading-icon[_ngcontent-%COMP%] {\n  display: inline-block;\n  color: rgba(0, 0, 0, 0.65); }\n\n.ant-switch-loading[_ngcontent-%COMP%]   *[_ngcontent-%COMP%], .ant-switch-disabled[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  cursor: not-allowed; }\n\n.ant-switch-loading-icon[_ngcontent-%COMP%] {\n  z-index: 1;\n  display: none;\n  font-size: 12px;\n  background: transparent; }\n\n.ant-switch-loading-icon[_ngcontent-%COMP%], .ant-switch[_ngcontent-%COMP%]::after {\n  position: absolute;\n  top: 1px;\n  left: 1px;\n  width: 18px;\n  height: 18px;\n  background-color: #fff;\n  border-radius: 18px;\n  cursor: pointer;\n  transition: all 0.36s cubic-bezier(0.78, 0.14, 0.15, 0.86);\n  content: ' '; }"];



/***/ }),

/***/ "./src/app/modules/forms/switch/switch/switch.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/modules/forms/switch/switch/switch.component.ts ***!
  \*****************************************************************/
/*! exports provided: SWITCH_CONTROL_VALUE_ACCESSOR, SwitchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SWITCH_CONTROL_VALUE_ACCESSOR", function() { return SWITCH_CONTROL_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwitchComponent", function() { return SwitchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");


var SWITCH_CONTROL_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return SwitchComponent; }),
    multi: true
};
var SwitchComponent = /** @class */ (function () {
    function SwitchComponent(_renderer, _elementRef) {
        this._renderer = _renderer;
        this._elementRef = _elementRef;
        this.value = false;
        this.index = "switch_" + this.randomInteger(10, 1000);
        this.onChange = function (_) { };
        this.onTouched = function () { };
        this.disabled = false;
    }
    SwitchComponent.prototype.toggle = function (e) {
        this.value = !this.value;
        this.writeValue(this.value);
        this.onChange(this.value);
        this.onTouched();
    };
    SwitchComponent.prototype.ngOnInit = function () {
    };
    SwitchComponent.prototype.writeValue = function (obj) {
        this.value = obj;
        this.setStateToggle(this.value, 'registerOnChange');
    };
    SwitchComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    SwitchComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    SwitchComponent.prototype.setDisabledState = function (isDisabled) {
        this.disabled = isDisabled;
    };
    SwitchComponent.prototype.setStateToggle = function (value, runner) {
        var toggleClass = value ?
            this._renderer.addClass(this._switchControl.nativeElement, 'rosa-switch-checked') :
            this._renderer.removeClass(this._switchControl.nativeElement, 'rosa-switch-checked');
    };
    SwitchComponent.prototype.randomInteger = function (min, max) {
        var rand = min - 0.5 + Math.random() * (max - min + 1);
        rand = Math.round(rand);
        return rand;
    };
    return SwitchComponent;
}());



/***/ }),

/***/ "./src/app/modules/overlay/toast/toast.service.ts":
/*!********************************************************!*\
  !*** ./src/app/modules/overlay/toast/toast.service.ts ***!
  \********************************************************/
/*! exports provided: ToastService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastService", function() { return ToastService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/esm5/overlay.es5.js");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/esm5/portal.es5.js");
/* harmony import */ var _toast_toast_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./toast/toast.component */ "./src/app/modules/overlay/toast/toast/toast.component.ts");
/* harmony import */ var _toast_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./toast-config */ "./src/app/modules/overlay/toast/toast-config.ts");
/* harmony import */ var _toast_ref__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./toast-ref */ "./src/app/modules/overlay/toast/toast-ref.ts");









var ToastService = /** @class */ (function () {
    function ToastService(overlay, parentInjector, toastConfig) {
        this.overlay = overlay;
        this.parentInjector = parentInjector;
        this.toastConfig = toastConfig;
    }
    ToastService.prototype.show = function (data) {
        console.log(data);
        var positionStrategy = this.getPositionStrategy();
        var overlayRef = this.overlay.create({ positionStrategy: positionStrategy });
        if (overlayRef.hasAttached()) {
            // return this.overlayRef.detach();
        }
        var toastRef = new _toast_ref__WEBPACK_IMPORTED_MODULE_5__["ToastRef"](overlayRef);
        this.lastToast = toastRef;
        var injector = this.getInjector(data, toastRef, this.parentInjector);
        var toastPortal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__["ComponentPortal"](_toast_toast_component__WEBPACK_IMPORTED_MODULE_3__["ToastComponent"], null, injector);
        overlayRef.attach(toastPortal);
        return toastRef;
    };
    ToastService.prototype.getPositionStrategy = function () {
        return this.overlay.position()
            .global()
            .bottom(this.getPosition())
            .left(this.toastConfig.position.left + 'px');
    };
    ToastService.prototype.getPosition = function () {
        var lastToastIsVisible = this.lastToast && this.lastToast.isVisible();
        var position = lastToastIsVisible
            ? this.lastToast.getPosition().bottom
            : this.toastConfig.position.bottom;
        return position + 'px';
    };
    ToastService.prototype.getInjector = function (data, toastRef, parentInjector) {
        var tokens = new WeakMap();
        tokens.set(_toast_config__WEBPACK_IMPORTED_MODULE_4__["ToastData"], data);
        tokens.set(_toast_ref__WEBPACK_IMPORTED_MODULE_5__["ToastRef"], toastRef);
        return new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__["PortalInjector"](parentInjector, tokens);
    };
    ToastService.ngInjectableDef = _angular_core__WEBPACK_IMPORTED_MODULE_0__["defineInjectable"]({ factory: function ToastService_Factory() { return new ToastService(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__["Overlay"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["INJECTOR"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"](_toast_config__WEBPACK_IMPORTED_MODULE_4__["TOAST_CONFIG_TOKEN"])); }, token: ToastService, providedIn: "root" });
    return ToastService;
}());



/***/ }),

/***/ "./src/app/modules/overlay/tooltip/tooltip.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/modules/overlay/tooltip/tooltip.module.ts ***!
  \***********************************************************/
/*! exports provided: TooltipModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TooltipModule", function() { return TooltipModule; });
var TooltipModule = /** @class */ (function () {
    function TooltipModule() {
    }
    return TooltipModule;
}());



/***/ }),

/***/ "./src/app/modules/overlay/tooltip/tooltip/tooltip.component.ngfactory.js":
/*!********************************************************************************!*\
  !*** ./src/app/modules/overlay/tooltip/tooltip/tooltip.component.ngfactory.js ***!
  \********************************************************************************/
/*! exports provided: RenderType_TooltipComponent, View_TooltipComponent_0, View_TooltipComponent_Host_0, TooltipComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_TooltipComponent", function() { return RenderType_TooltipComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_TooltipComponent_0", function() { return View_TooltipComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_TooltipComponent_Host_0", function() { return View_TooltipComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TooltipComponentNgFactory", function() { return TooltipComponentNgFactory; });
/* harmony import */ var _tooltip_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tooltip.component.scss.shim.ngstyle */ "./src/app/modules/overlay/tooltip/tooltip/tooltip.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _tooltip_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tooltip.component */ "./src/app/modules/overlay/tooltip/tooltip/tooltip.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 



var styles_TooltipComponent = [_tooltip_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_TooltipComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_TooltipComponent, data: {} });

function View_TooltipComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["", ""]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.text; _ck(_v, 1, 0, currVal_0); }); }
function View_TooltipComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "rosa-tooltip", [], null, null, null, View_TooltipComponent_0, RenderType_TooltipComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _tooltip_component__WEBPACK_IMPORTED_MODULE_2__["TooltipComponent"], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var TooltipComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("rosa-tooltip", _tooltip_component__WEBPACK_IMPORTED_MODULE_2__["TooltipComponent"], View_TooltipComponent_Host_0, { text: "text" }, {}, []);



/***/ }),

/***/ "./src/app/modules/overlay/tooltip/tooltip/tooltip.component.scss.shim.ngstyle.js":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/overlay/tooltip/tooltip/tooltip.component.scss.shim.ngstyle.js ***!
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
var styles = [".cdk-global-overlay-wrapper[_ngcontent-%COMP%], .cdk-overlay-container[_ngcontent-%COMP%]{pointer-events:none;top:0;left:0;height:100%;width:100%}.cdk-overlay-container[_ngcontent-%COMP%]{position:fixed;z-index:1000}.cdk-overlay-container[_ngcontent-%COMP%]:empty{display:none}.cdk-global-overlay-wrapper[_ngcontent-%COMP%]{display:flex;position:absolute;z-index:1000}.cdk-overlay-pane[_ngcontent-%COMP%]{position:absolute;pointer-events:auto;box-sizing:border-box;z-index:1000;display:flex;max-width:100%;max-height:100%}.cdk-overlay-backdrop[_ngcontent-%COMP%]{position:absolute;top:0;bottom:0;left:0;right:0;z-index:1000;pointer-events:auto;-webkit-tap-highlight-color:transparent;transition:opacity .4s cubic-bezier(.25,.8,.25,1);opacity:0}.cdk-overlay-backdrop.cdk-overlay-backdrop-showing[_ngcontent-%COMP%]{opacity:1}@media screen and (-ms-high-contrast:active){.cdk-overlay-backdrop.cdk-overlay-backdrop-showing[_ngcontent-%COMP%]{opacity:.6}}.cdk-overlay-dark-backdrop[_ngcontent-%COMP%]{background:rgba(0,0,0,.32)}.cdk-overlay-transparent-backdrop[_ngcontent-%COMP%], .cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing[_ngcontent-%COMP%]{opacity:0}.cdk-overlay-connected-position-bounding-box[_ngcontent-%COMP%]{position:absolute;z-index:1000;display:flex;flex-direction:column;min-width:1px;min-height:1px}.cdk-global-scrollblock[_ngcontent-%COMP%]{position:fixed;width:100%;overflow-y:scroll}[_nghost-%COMP%] {\n  width: auto;\n  padding: 4px 12px;\n  background-color: #3d3837;\n  display: inline-block;\n  position: relative;\n  color: #dcdcdc;\n  border-radius: 4px;\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.12); }"];



/***/ }),

/***/ "./src/app/modules/overlay/tooltip/tooltip/tooltip.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/modules/overlay/tooltip/tooltip/tooltip.component.ts ***!
  \**********************************************************************/
/*! exports provided: TooltipComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TooltipComponent", function() { return TooltipComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var TooltipComponent = /** @class */ (function () {
    function TooltipComponent() {
        this.text = "";
    }
    TooltipComponent.prototype.ngOnInit = function () {
    };
    return TooltipComponent;
}());



/***/ })

}]);