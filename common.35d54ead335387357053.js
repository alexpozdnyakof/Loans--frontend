(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/application/crm/list/list.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/application/crm/list/list.module.ts ***!
  \*****************************************************/
/*! exports provided: ListModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListModule", function() { return ListModule; });
var ListModule = /** @class */ (function () {
    function ListModule() {
    }
    return ListModule;
}());



/***/ }),

/***/ "./src/app/modules/pipes/custom-date/custom-date.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/modules/pipes/custom-date/custom-date.module.ts ***!
  \*****************************************************************/
/*! exports provided: CustomDateModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomDateModule", function() { return CustomDateModule; });
var CustomDateModule = /** @class */ (function () {
    function CustomDateModule() {
    }
    return CustomDateModule;
}());



/***/ }),

/***/ "./src/app/modules/pipes/custom-date/rosa-date.pipe.ts":
/*!*************************************************************!*\
  !*** ./src/app/modules/pipes/custom-date/rosa-date.pipe.ts ***!
  \*************************************************************/
/*! exports provided: RosaDatePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RosaDatePipe", function() { return RosaDatePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
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


var RosaDatePipe = /** @class */ (function (_super) {
    __extends(RosaDatePipe, _super);
    function RosaDatePipe() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RosaDatePipe.prototype.transform = function (date, args) {
        if (!date) {
            return;
        }
        var milliseconds = date * 1000;
        var dateFormat = new Date().getFullYear() === new Date(milliseconds).getFullYear() ? 'dd MMM HH:mm' : 'dd MMM yy HH:mm';
        return _super.prototype.transform.call(this, milliseconds, dateFormat);
    };
    return RosaDatePipe;
}(_angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]));



/***/ }),

/***/ "./src/app/modules/pipes/typograph/typograph.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/modules/pipes/typograph/typograph.module.ts ***!
  \*************************************************************/
/*! exports provided: TypographModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypographModule", function() { return TypographModule; });
var TypographModule = /** @class */ (function () {
    function TypographModule() {
    }
    return TypographModule;
}());



/***/ }),

/***/ "./src/app/modules/pipes/typograph/typograph.pipe.ts":
/*!***********************************************************!*\
  !*** ./src/app/modules/pipes/typograph/typograph.pipe.ts ***!
  \***********************************************************/
/*! exports provided: TypographPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypographPipe", function() { return TypographPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var TypographPipe = /** @class */ (function () {
    function TypographPipe() {
        this.exceptions = ["\u043E\u043E\u043E", "\u0437\u0430\u043E", "\u043F\u0430\u043E", "\u0430\u043E", "\u0438\u043F", "\u043D\u043A\u043E", "\u0430\u043D\u043E", "\u043D\u0430\u043E", "\u0433\u043A", "\u0433\u043A\u0444\u0445", 'ук'];
        this.quotes = ["'", "\"", "\u00AB", "\u00BB"];
    }
    TypographPipe.prototype.transform = function (text, args) {
        var _this = this;
        if (!text) {
            return;
        }
        var splittedText = this.textSplitter(text);
        var formatted = splittedText.map(function (item) {
            return _this.typographString(item.toLowerCase(), _this.hasQuote(item));
        });
        // проверяем есть ли слово в исключениях, если да то ничего не деалем, если нет то  переводим слово в нижний регистр
        // а потом первий  символ в верхний
        // TODO смотрим наличие кавычки  " или ', если есть то определяем позицию, если в начале слова то кавычка слева если в конце то справа
        return formatted.join("\u00A0");
    };
    TypographPipe.prototype.textSplitter = function (textToSplit) {
        if (textToSplit.indexOf('_') !== -1) {
            return textToSplit.split('_');
        }
        if (textToSplit.indexOf(' ') !== -1) {
            return textToSplit.split(' ');
        }
        return new Array(textToSplit);
    };
    TypographPipe.prototype.typographString = function (word, hasQuote) {
        // if 0 position - check for exception without quote if hasnt next
        //  start upper from 1 and add yolka before
        // else start upper from 0 and yolka after;
        // TODO reassemble to match case ООО "КИФ "ПИРУЗ"
        // TODO reassemble to match case ООО «Невидалия У-у» ООО «Нци»
        var laquo = '«';
        var raquo = '»';
        switch (hasQuote) {
            case -1:
                if (this.checkException(word) !== -1) {
                    return "" + word.toUpperCase();
                }
                return word.charAt(0).toUpperCase() + word.slice(1);
            case 0: {
                if (this.checkException(word.slice(1)) !== -1) {
                    return "" + laquo + word.slice(1).toUpperCase();
                }
                return "" + laquo + (word.charAt(1).toUpperCase() + word.slice(2));
            }
            case -10: {
                if (this.checkException(word.slice(1)) !== -1) {
                    return "" + laquo + word.slice(1, word.length - 1).toUpperCase() + raquo;
                }
                return "" + laquo + (word.charAt(1).toUpperCase() + word.slice(2, word.length - 1)) + raquo;
            }
            default: {
                return "" + (word.charAt(0).toUpperCase() + word.slice(1, word.length - 1)) + raquo;
            }
        }
    };
    TypographPipe.prototype.hasQuote = function (word) {
        var firstChar = this.quotes.indexOf(word.charAt(0));
        var lastChar = this.quotes.indexOf(word.charAt(word.length - 1));
        if (firstChar === -1 && lastChar === -1) {
            return -1;
        }
        if (firstChar !== -1 && lastChar !== -1) {
            return -10;
        } // if quotes in both sides
        return firstChar !== -1 ? 0 : word.length - 1;
    };
    TypographPipe.prototype.checkException = function (word) {
        return this.exceptions.indexOf(word);
    };
    return TypographPipe;
}());



/***/ })

}]);