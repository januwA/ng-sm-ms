(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/login/login.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/login/login.component.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<a-center>\r\n  <form class=\"login-form\" [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\">\r\n    <mat-form-field>\r\n      <input matInput type=\"text\" formControlName=\"username\" placeholder=\"账号\" required />\r\n    </mat-form-field>\r\n\r\n    <mat-form-field>\r\n      <input matInput type=\"password\" formControlName=\"password\" placeholder=\"密码\" required />\r\n    </mat-form-field>\r\n    <a class=\"register-button\" href=\"https://sm.ms/register\" target=\"_blank\">\r\n      没有账号?\r\n    </a>\r\n    <button mat-raised-button color=\"primary\" type=\"submit\" [disabled]=\"formInvalid\">\r\n      登陆\r\n    </button>\r\n\r\n  </form>\r\n</a-center>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/dashboard.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/dashboard.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav mat-tab-nav-bar>\r\n  <a\r\n    mat-tab-link\r\n    *ngFor=\"let link of navLinks\"\r\n    [routerLink]=\"link.path\"\r\n    routerLinkActive\r\n    #rla=\"routerLinkActive\"\r\n    [active]=\"rla.isActive\"\r\n  >\r\n    {{ link.label }}\r\n  </a>\r\n</nav>\r\n\r\n<router-outlet></router-outlet>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section>\r\n  <ng-container *ngIf=\"images && images.length; then thenTemp; else loading\"></ng-container>\r\n\r\n  <ng-template #thenTemp>\r\n    <section class=\"images-container\">\r\n      <ng-container *ngFor=\"let image of images\">\r\n        <div class=\"item\">\r\n          <mat-card class=\"image-card\">\r\n            <img mat-card-image [src]=\"image.url\" (click)=\"open(image.url)\" />\r\n            <mat-card-content>\r\n              <p style=\"word-break: break-all;\">{{ image.filename }}</p>\r\n              <p>{{ image.size | imageSize }}</p>\r\n              <button mat-button class=\"image-url-button\" [attr.data-clipboard-text]=\"image.url\" title=\"点击复制\">\r\n                {{ image.url }}\r\n              </button>\r\n            </mat-card-content>\r\n            <mat-card-actions>\r\n              <button mat-raised-button title=\"注意：这将永久删除资源\" (click)=\"delete(image.hash)\">\r\n                删除资源\r\n              </button>\r\n            </mat-card-actions>\r\n          </mat-card>\r\n        </div>\r\n      </ng-container>\r\n    </section>\r\n  </ng-template>\r\n</section>\r\n\r\n<ng-template #loading>\r\n  <a-center>\r\n    <mat-spinner></mat-spinner>\r\n  </a-center>\r\n</ng-template>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/mine/mine.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/mine/mine.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section>\r\n  <ng-container *ngIf=\"userInfo; then userinfoView; else loading\"></ng-container>\r\n  <ng-template #userinfoView>\r\n    <mat-card>\r\n      <mat-card-header>\r\n        <mat-card-title>\r\n          {{ userInfo.username }}\r\n        </mat-card-title>\r\n        <mat-card-subtitle>\r\n          {{ userInfo.email }}\r\n        </mat-card-subtitle>\r\n      </mat-card-header>\r\n      <mat-card-content>\r\n        <p>总磁盘: {{ userInfo.disk_limit }}</p>\r\n        <p>已使用: {{ userInfo.disk_usage }}</p>\r\n      </mat-card-content>\r\n      <mat-card-actions>\r\n        <button mat-button color=\"primary\" (click)=\"logout()\">退出登录</button>\r\n      </mat-card-actions>\r\n    </mat-card>\r\n  </ng-template>\r\n</section>\r\n\r\n<ng-template #loading>\r\n  <a-center>\r\n    <mat-spinner></mat-spinner>\r\n  </a-center>\r\n</ng-template>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/not-found/not-found.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/not-found/not-found.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1>\r\n  404 页面未找到\r\n</h1>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/upload/components/preview-image/preview-image.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/upload/components/preview-image/preview-image.component.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-card class=\"preview-image-card\" [title]=\"image.file.name\">\r\n  <img\r\n    mat-card-image\r\n    [src]=\"image.src\"\r\n    title=\"查看原图\"\r\n    (click)=\"handleZoomIn()\"\r\n  />\r\n  <mat-card-content>\r\n    <p>{{ image.file.name }}</p>\r\n    <p>{{ image.file.size | imageSize }}</p>\r\n    <mat-progress-bar\r\n      *ngIf=\"image?.progress > 0\"\r\n      mode=\"determinate\"\r\n      [value]=\"image?.progress\"\r\n    ></mat-progress-bar>\r\n    <p *ngIf=\"uploadError\" class=\"mat-error\">\r\n      {{ image.message }}\r\n    </p>\r\n     <p *ngIf=\"!uploadError\" style=\"color: #2b9f5b\">\r\n      {{ image.message }}\r\n     </p>\r\n  </mat-card-content>\r\n  <mat-card-actions>\r\n    <button mat-raised-button title=\"删除\" (click)=\"handleDelete()\">\r\n      删除\r\n    </button>\r\n    <button mat-raised-button title=\"上传\" (click)=\"handleUpload()\">\r\n      上传\r\n    </button>\r\n  </mat-card-actions>\r\n</mat-card>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/upload/upload.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/upload/upload.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\r\n  <p class=\"mat-error\"><em>切勿上传文件名相同的图片</em></p>\r\n  <input\r\n    style=\"display: none;\"\r\n    type=\"file\"\r\n    name=\"file\"\r\n    id=\"upfiles\"\r\n    accept=\"image/*\"\r\n    multiple\r\n    (change)=\"onFileChange($event)\"\r\n    #input\r\n  />\r\n\r\n  <div class=\"d-flex flex-row\">\r\n    <button\r\n      mat-raised-button\r\n      (drag)=\"hadler($event)\"\r\n      (drop)=\"dropEvent($event)\"\r\n      (dragover)=\"hadler($event)\"\r\n      (click)=\"input.click()\"\r\n    >\r\n      点击/拖拽上传({{ previewFiles?.length || '0' }})\r\n    </button>\r\n    <app-sized-box width=\"20\"></app-sized-box>\r\n    <button (click)=\"uploadAll()\" mat-raised-button color=\"primary\">\r\n      全部上传\r\n    </button>\r\n  </div>\r\n  <app-sized-box height=\"20\"></app-sized-box>\r\n\r\n  <ng-container *ngIf=\"previewFiles\">\r\n    <section class=\"preview-images-container\">\r\n      <ng-container *ngFor=\"let file of previewFiles\">\r\n        <app-preview-image\r\n          [image]=\"file\"\r\n          (delete)=\"deletePreviewImage(file)\"\r\n          (zoomIn)=\"displayOriginalImage(file.src)\"\r\n          (upload)=\"upload(file)\"\r\n        ></app-preview-image>\r\n      </ng-container>\r\n    </section>\r\n  </ng-container>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/sized-box/sized-box.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/sized-box/sized-box.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div [ngStyle]=\"styles\"></div>\r\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/not-found/not-found.component */ "./src/app/pages/not-found/not-found.component.ts");
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth/auth.guard */ "./src/app/auth/auth.guard.ts");
/* harmony import */ var _pages_upload_upload_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/upload/upload.component */ "./src/app/pages/upload/upload.component.ts");
/* harmony import */ var _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/dashboard/dashboard.component */ "./src/app/pages/dashboard/dashboard.component.ts");
/* harmony import */ var _pages_mine_mine_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/mine/mine.component */ "./src/app/pages/mine/mine.component.ts");









const routes = [
    {
        path: '',
        component: _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__["DashboardComponent"],
        canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]],
        children: [
            {
                path: '',
                children: [
                    {
                        path: '',
                        redirectTo: 'home',
                        pathMatch: 'full',
                    },
                    {
                        path: 'home',
                        component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
                    },
                    {
                        path: 'upload',
                        component: _pages_upload_upload_component__WEBPACK_IMPORTED_MODULE_6__["UploadComponent"],
                    },
                    {
                        path: 'mine',
                        component: _pages_mine_mine_component__WEBPACK_IMPORTED_MODULE_8__["MineComponent"],
                    },
                ],
            },
        ],
    },
    {
        path: 'not-found',
        component: _pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_4__["NotFoundComponent"],
    },
    {
        path: '**',
        redirectTo: 'not-found',
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.styl":
/*!************************************!*\
  !*** ./src/app/app.component.styl ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/*# sourceMappingURL=src/app/app.component.css.map */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zdHlsIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9EQUFvRCIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc3R5bCJ9 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'sm-ms';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.styl */ "./src/app/app.component.styl")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ajanuw_widgets_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ajanuw-widgets-angular */ "./node_modules/ajanuw-widgets-angular/fesm2015/ajanuw-widgets-angular.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/not-found/not-found.component */ "./src/app/pages/not-found/not-found.component.ts");
/* harmony import */ var _auth_auth_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./auth/auth.module */ "./src/app/auth/auth.module.ts");
/* harmony import */ var _pages_upload_upload_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/upload/upload.component */ "./src/app/pages/upload/upload.component.ts");
/* harmony import */ var _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/dashboard/dashboard.component */ "./src/app/pages/dashboard/dashboard.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _mat_mat_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./mat/mat.module */ "./src/app/mat/mat.module.ts");
/* harmony import */ var _pages_upload_components_preview_image_preview_image_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/upload/components/preview-image/preview-image.component */ "./src/app/pages/upload/components/preview-image/preview-image.component.ts");
/* harmony import */ var _pages_mine_mine_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/mine/mine.component */ "./src/app/pages/mine/mine.component.ts");

















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _pages_home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
            _pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_9__["NotFoundComponent"],
            _pages_upload_upload_component__WEBPACK_IMPORTED_MODULE_11__["UploadComponent"],
            _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_12__["DashboardComponent"],
            _pages_upload_components_preview_image_preview_image_component__WEBPACK_IMPORTED_MODULE_15__["PreviewImageComponent"],
            _pages_mine_mine_component__WEBPACK_IMPORTED_MODULE_16__["MineComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _core_core_module__WEBPACK_IMPORTED_MODULE_7__["CoreModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
            _auth_auth_module__WEBPACK_IMPORTED_MODULE_10__["AuthModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["BrowserAnimationsModule"],
            _mat_mat_module__WEBPACK_IMPORTED_MODULE_14__["MatModule"],
            ajanuw_widgets_angular__WEBPACK_IMPORTED_MODULE_3__["AjanuwWidgetsModule"],
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
    })
], AppModule);



/***/ }),

/***/ "./src/app/auth/auth-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/auth/auth-routing.module.ts ***!
  \*********************************************/
/*! exports provided: AuthRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthRoutingModule", function() { return AuthRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/auth/login/login.component.ts");




const routes = [
    {
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"],
    },
];
let AuthRoutingModule = class AuthRoutingModule {
};
AuthRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AuthRoutingModule);



/***/ }),

/***/ "./src/app/auth/auth.guard.ts":
/*!************************************!*\
  !*** ./src/app/auth/auth.guard.ts ***!
  \************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _shared_token_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/token.service */ "./src/app/shared/token.service.ts");





let AuthGuard = class AuthGuard {
    constructor(authService, router, tokenService) {
        this.authService = authService;
        this.router = router;
        this.tokenService = tokenService;
    }
    canActivate(route, state) {
        let url = state.url;
        return this.checkLogin(url);
    }
    checkLogin(url) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (this.authService.isLoggedIn || (yield this.tokenService.token)) {
                return true;
            }
            // 储存用户进来时的路由
            this.authService.redirectUrl = url;
            this.router.navigate(['/login']);
            return false;
        });
    }
};
AuthGuard.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _shared_token_service__WEBPACK_IMPORTED_MODULE_4__["TokenService"] }
];
AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _shared_token_service__WEBPACK_IMPORTED_MODULE_4__["TokenService"]])
], AuthGuard);



/***/ }),

/***/ "./src/app/auth/auth.module.ts":
/*!*************************************!*\
  !*** ./src/app/auth/auth.module.ts ***!
  \*************************************/
/*! exports provided: AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _auth_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth-routing.module */ "./src/app/auth/auth-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _mat_mat_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../mat/mat.module */ "./src/app/mat/mat.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var ajanuw_widgets_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ajanuw-widgets-angular */ "./node_modules/ajanuw-widgets-angular/fesm2015/ajanuw-widgets-angular.js");










let AuthModule = class AuthModule {
};
AuthModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _auth_routing_module__WEBPACK_IMPORTED_MODULE_4__["AuthRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
            _mat_mat_module__WEBPACK_IMPORTED_MODULE_7__["MatModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"],
            ajanuw_widgets_angular__WEBPACK_IMPORTED_MODULE_9__["AjanuwWidgetsModule"],
        ],
        declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]],
    })
], AuthModule);



/***/ }),

/***/ "./src/app/auth/auth.service.ts":
/*!**************************************!*\
  !*** ./src/app/auth/auth.service.ts ***!
  \**************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var querystring__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! querystring */ "./node_modules/querystring/index.js");
/* harmony import */ var querystring__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(querystring__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared_token_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/token.service */ "./src/app/shared/token.service.ts");
/* harmony import */ var _shared_api_urls__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/api-urls */ "./src/app/shared/api-urls.ts");







let AuthService = class AuthService {
    constructor(http, router, tokenService) {
        this.http = http;
        this.router = router;
        this.tokenService = tokenService;
        this._defaultRedirectUrl = '/home';
        this.isLoggedIn = false;
    }
    get redirectUrl() {
        return this._redirectUrl
            ? this.router.parseUrl(this._redirectUrl)
            : this._defaultRedirectUrl;
    }
    set redirectUrl(url) {
        this._redirectUrl = url;
    }
    login(body) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const r = yield this.http
                .post(_shared_api_urls__WEBPACK_IMPORTED_MODULE_6__["getTokenUrl"], querystring__WEBPACK_IMPORTED_MODULE_1__["stringify"](body), {
                headers: {
                    'content-type': 'application/x-www-form-urlencoded',
                },
            })
                .toPromise();
            if (r.success && r.data.token) {
                const _token = r.data.token;
                yield this.tokenService.setToken(_token);
                this.isLoggedIn = true;
                return true;
            }
            this.isLoggedIn = false;
            alert(r.message);
            return false;
        });
    }
    /**
     * * 退出登陆，清理token
     */
    logout() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.isLoggedIn = false;
            yield this.tokenService.removeToken();
        });
    }
    /**
     * * 获取用户的信息
     */
    profile() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return this.http
                .post(_shared_api_urls__WEBPACK_IMPORTED_MODULE_6__["profileUrl"], null, {
                observe: 'response',
            })
                .toPromise();
        });
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _shared_token_service__WEBPACK_IMPORTED_MODULE_5__["TokenService"] }
];
AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root',
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _shared_token_service__WEBPACK_IMPORTED_MODULE_5__["TokenService"]])
], AuthService);



/***/ }),

/***/ "./src/app/auth/login/login.component.styl":
/*!*************************************************!*\
  !*** ./src/app/auth/login/login.component.styl ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  display: block;\n  height: 100vh;\n}\n.login-form {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n.register-button {\n  text-align: end;\n  font-size: 0.8em;\n  padding-bottom: 12px;\n}\n/*# sourceMappingURL=src/app/auth/login/login.component.css.map */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9sb2dpbi9zcmMvYXBwL2F1dGgvbG9naW4vbG9naW4uY29tcG9uZW50LnN0eWwiLCJzcmMvYXBwL2F1dGgvbG9naW4vbG9naW4uY29tcG9uZW50LnN0eWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFTO0VBQ1QsYUFBUTtBQ0NWO0FERUE7RUFDRSxvQkFBUztFQUFULGFBQVM7RUFDVCw0QkFBZ0I7RUFBaEIsNkJBQWdCO1VBQWhCLHNCQUFnQjtBQ0FsQjtBREdBO0VBQ0UsZUFBWTtFQUNaLGdCQUFXO0VBQ1gsb0JBQWdCO0FDRGxCO0FBQ0EsaUVBQWlFIiwiZmlsZSI6InNyYy9hcHAvYXV0aC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc3R5bCIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG59XHJcblxyXG4ubG9naW4tZm9ybSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4ucmVnaXN0ZXItYnV0dG9uIHtcclxuICB0ZXh0LWFsaWduOiBlbmQ7XHJcbiAgZm9udC1zaXplOiAwLjhlbTtcclxuICBwYWRkaW5nLWJvdHRvbTogMTJweDtcclxufSIsIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGhlaWdodDogMTAwdmg7XG59XG4ubG9naW4tZm9ybSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4ucmVnaXN0ZXItYnV0dG9uIHtcbiAgdGV4dC1hbGlnbjogZW5kO1xuICBmb250LXNpemU6IDAuOGVtO1xuICBwYWRkaW5nLWJvdHRvbTogMTJweDtcbn1cbi8qIyBzb3VyY2VNYXBwaW5nVVJMPXNyYy9hcHAvYXV0aC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzLm1hcCAqLyJdfQ== */");

/***/ }),

/***/ "./src/app/auth/login/login.component.ts":
/*!***********************************************!*\
  !*** ./src/app/auth/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let LoginComponent = class LoginComponent {
    constructor(fb, authService, router) {
        this.fb = fb;
        this.authService = authService;
        this.router = router;
        /**
         * 登陆中
         */
        this.landing = false;
        this.loginForm = this.fb.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    }
    /**
     * * 表单[验证失败]或[登陆中]都将禁用按钮
     */
    get formInvalid() {
        return this.loginForm.invalid || this.landing;
    }
    ngOnInit() { }
    /**
     * * 点击登录按钮
     * 调用登陆服务，登陆成功后重定向路由
     */
    onSubmit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.landing = true;
            const body = this.loginForm.value;
            yield this.authService.login(body);
            this.landing = false;
            if (this.authService.isLoggedIn) {
                // 登陆成功后重定向
                this.router.navigateByUrl(this.authService.redirectUrl);
            }
        });
    }
};
LoginComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/login/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.styl */ "./src/app/auth/login/login.component.styl")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
], LoginComponent);



/***/ }),

/***/ "./src/app/core/core.module.ts":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _http_interceptors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../http-interceptors */ "./src/app/http-interceptors/index.ts");






let CoreModule = class CoreModule {
};
CoreModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]],
        exports: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]],
        providers: [_http_interceptors__WEBPACK_IMPORTED_MODULE_5__["httpInterceptorProviders"]],
    })
], CoreModule);



/***/ }),

/***/ "./src/app/http-interceptors/index.ts":
/*!********************************************!*\
  !*** ./src/app/http-interceptors/index.ts ***!
  \********************************************/
/*! exports provided: httpInterceptorProviders */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "httpInterceptorProviders", function() { return httpInterceptorProviders; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _noop_interceptor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./noop-interceptor */ "./src/app/http-interceptors/noop-interceptor.ts");



/**
 * 把http拦截器搜集起来
 */
const httpInterceptorProviders = [
    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"], useClass: _noop_interceptor__WEBPACK_IMPORTED_MODULE_2__["NoopInterceptor"], multi: true },
];


/***/ }),

/***/ "./src/app/http-interceptors/noop-interceptor.ts":
/*!*******************************************************!*\
  !*** ./src/app/http-interceptors/noop-interceptor.ts ***!
  \*******************************************************/
/*! exports provided: NoopInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoopInterceptor", function() { return NoopInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_api_urls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/api-urls */ "./src/app/shared/api-urls.ts");
/* harmony import */ var _shared_token_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/token.service */ "./src/app/shared/token.service.ts");




let NoopInterceptor = class NoopInterceptor {
    constructor(tokenService) {
        this.tokenService = tokenService;
    }
    intercept(req, next) {
        if (req.url.startsWith(_shared_api_urls__WEBPACK_IMPORTED_MODULE_2__["smMsString"])) {
            let dataUrl = req.url;
            const authToken = this.tokenService.getAuthorizationToken();
            // 拦截 /ms-sm/xxx的url，并生成新的url
            const urlPath = dataUrl.replace(new RegExp(`^${_shared_api_urls__WEBPACK_IMPORTED_MODULE_2__["smMsString"]}`), '');
            dataUrl = `${_shared_api_urls__WEBPACK_IMPORTED_MODULE_2__["smMsUrl"]}/${urlPath}`;
            const secureReq = req.clone({
                url: dataUrl,
                setHeaders: {
                    Authorization: authToken,
                },
            });
            return next.handle(secureReq);
        }
        else {
            return next.handle(req);
        }
    }
};
NoopInterceptor.ctorParameters = () => [
    { type: _shared_token_service__WEBPACK_IMPORTED_MODULE_3__["TokenService"] }
];
NoopInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_token_service__WEBPACK_IMPORTED_MODULE_3__["TokenService"]])
], NoopInterceptor);



/***/ }),

/***/ "./src/app/mat/mat.module.ts":
/*!***********************************!*\
  !*** ./src/app/mat/mat.module.ts ***!
  \***********************************/
/*! exports provided: MatModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatModule", function() { return MatModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm2015/card.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/esm2015/progress-bar.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/esm2015/progress-spinner.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm2015/tabs.js");









let MatModule = class MatModule {
};
MatModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        exports: [
            _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_7__["MatProgressSpinnerModule"],
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_6__["MatProgressBarModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__["MatTabsModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"]
        ],
    })
], MatModule);



/***/ }),

/***/ "./src/app/pages/dashboard/dashboard.component.styl":
/*!**********************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.component.styl ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".grid-nav {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, 100px);\n  grid-gap: 10px;\n  list-style: none;\n  margin: 0;\n  padding: 14px;\n}\n.grid-nav li {\n  text-align: center;\n}\n.grid-nav .active {\n  color: #f2758b;\n}\n.grid-nav a {\n  color: rgba(128,128,128,0.69);\n}\n/*# sourceMappingURL=src/app/pages/dashboard/dashboard.component.css.map */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZGFzaGJvYXJkL3NyYy9hcHAvcGFnZXMvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc3R5bCIsInNyYy9hcHAvcGFnZXMvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc3R5bCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQVM7RUFDVCwrQ0FBOEM7RUFDOUMsY0FBVTtFQUNWLGdCQUFZO0VBQ1osU0FBUTtFQUNSLGFBQVM7QUNDWDtBRENFO0VBQ0Usa0JBQVk7QUNDaEI7QURFRTtFQUNFLGNBQU87QUNBWDtBREdFO0VBQ0UsNkJBQU87QUNEWDtBQUNBLDBFQUEwRSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnN0eWwiLCJzb3VyY2VzQ29udGVudCI6WyIuZ3JpZC1uYXYge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCAxMDBweCk7XHJcbiAgZ3JpZC1nYXA6IDEwcHg7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMTRweDtcclxuXHJcbiAgbGkge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgLmFjdGl2ZSB7XHJcbiAgICBjb2xvcjogI2YyNzU4YjtcclxuICB9XHJcblxyXG4gIGEge1xyXG4gICAgY29sb3I6ICM4MDgwODBiMDtcclxuICB9XHJcbn0iLCIuZ3JpZC1uYXYge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIDEwMHB4KTtcbiAgZ3JpZC1nYXA6IDEwcHg7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMTRweDtcbn1cbi5ncmlkLW5hdiBsaSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5ncmlkLW5hdiAuYWN0aXZlIHtcbiAgY29sb3I6ICNmMjc1OGI7XG59XG4uZ3JpZC1uYXYgYSB7XG4gIGNvbG9yOiByZ2JhKDEyOCwxMjgsMTI4LDAuNjkpO1xufVxuLyojIHNvdXJjZU1hcHBpbmdVUkw9c3JjL2FwcC9wYWdlcy9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MubWFwICovIl19 */");

/***/ }),

/***/ "./src/app/pages/dashboard/dashboard.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.component.ts ***!
  \********************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DashboardComponent = class DashboardComponent {
    constructor() {
        this.navLinks = [
            { path: '/home', label: '图片' },
            { path: '/upload', label: '上传' },
            { path: '/mine', label: '我的' },
        ];
    }
    ngOnInit() { }
};
DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dashboard',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/dashboard.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dashboard.component.styl */ "./src/app/pages/dashboard/dashboard.component.styl")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], DashboardComponent);



/***/ }),

/***/ "./src/app/pages/home/home.component.styl":
/*!************************************************!*\
  !*** ./src/app/pages/home/home.component.styl ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  position: absolute;\n  padding: 1rem;\n  width: 100vw;\n  height: 100vh;\n}\n.images-container {\n  position: relative;\n  width: 100%;\n}\n.item {\n  width: 300px;\n  padding: 1em;\n  -webkit-transition: all 1s;\n  transition: all 1s;\n}\n.image-card {\n  min-width: 100%;\n  max-width: 100%;\n}\n.image-card img {\n  width: auto;\n  height: auto;\n  max-width: 100%;\n  margin-left: 50%;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n}\n.image-url-button {\n  width: 100%;\n  word-break: break-all;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n/*# sourceMappingURL=src/app/pages/home/home.component.css.map */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS9zcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS5jb21wb25lbnQuc3R5bCIsInNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLmNvbXBvbmVudC5zdHlsIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQVU7RUFDVixhQUFTO0VBQ1QsWUFBTztFQUNQLGFBQVE7QUNDVjtBREVBO0VBQ0Usa0JBQVU7RUFDVixXQUFPO0FDQVQ7QURHQTtFQUNFLFlBQU87RUFDUCxZQUFTO0VBQ1QsMEJBQVk7RUFBWixrQkFBWTtBQ0RkO0FESUE7RUFDRSxlQUFXO0VBQ1gsZUFBVztBQ0ZiO0FESUU7RUFDRSxXQUFPO0VBQ1AsWUFBUTtFQUNSLGVBQVc7RUFDWCxnQkFBYTtFQUNiLG1DQUEwQjtVQUExQiwyQkFBMEI7QUNGOUI7QURNQTtFQUNFLFdBQU87RUFDUCxxQkFBWTtFQUNaLGdCQUFVO0VBQ1YsdUJBQWU7QUNKakI7QUFDQSxnRUFBZ0UiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9ob21lL2hvbWUuY29tcG9uZW50LnN0eWwiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHBhZGRpbmc6IDFyZW07XHJcbiAgd2lkdGg6IDEwMHZ3O1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbn1cclxuXHJcbi5pbWFnZXMtY29udGFpbmVyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5pdGVtIHtcclxuICB3aWR0aDogMzAwcHg7XHJcbiAgcGFkZGluZzogMWVtO1xyXG4gIHRyYW5zaXRpb246IGFsbCAxcztcclxufVxyXG5cclxuLmltYWdlLWNhcmQge1xyXG4gIG1pbi13aWR0aDogMTAwJTtcclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcblxyXG4gIGltZyB7XHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbiAgfVxyXG59XHJcblxyXG4uaW1hZ2UtdXJsLWJ1dHRvbiB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgd29yZC1icmVhazogYnJlYWstYWxsO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbn1cclxuIiwiOmhvc3Qge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHBhZGRpbmc6IDFyZW07XG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiAxMDB2aDtcbn1cbi5pbWFnZXMtY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbn1cbi5pdGVtIHtcbiAgd2lkdGg6IDMwMHB4O1xuICBwYWRkaW5nOiAxZW07XG4gIHRyYW5zaXRpb246IGFsbCAxcztcbn1cbi5pbWFnZS1jYXJkIHtcbiAgbWluLXdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDEwMCU7XG59XG4uaW1hZ2UtY2FyZCBpbWcge1xuICB3aWR0aDogYXV0bztcbiAgaGVpZ2h0OiBhdXRvO1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1sZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbn1cbi5pbWFnZS11cmwtYnV0dG9uIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG4vKiMgc291cmNlTWFwcGluZ1VSTD1zcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzLm1hcCAqLyJdfQ== */");

/***/ }),

/***/ "./src/app/pages/home/home.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _home_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.service */ "./src/app/pages/home/home.service.ts");
/* harmony import */ var ajanuw_waterfall_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ajanuw-waterfall.js */ "./node_modules/ajanuw-waterfall.js/lib/waterfall.js");
/* harmony import */ var ajanuw_waterfall_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ajanuw_waterfall_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var clipboard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! clipboard */ "./node_modules/clipboard/dist/clipboard.js");
/* harmony import */ var clipboard__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(clipboard__WEBPACK_IMPORTED_MODULE_5__);






let HomeComponent = class HomeComponent {
    constructor(homeService) {
        this.homeService = homeService;
        this.images = [];
        this.imagesLoading = true;
    }
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.imagesLoading = true;
            const images = yield this.homeService.images();
            if (images && !lodash__WEBPACK_IMPORTED_MODULE_4__["isEmpty"](images)) {
                this.images = images.reverse();
                new clipboard__WEBPACK_IMPORTED_MODULE_5__(".image-url-button");
            }
            else {
                this.images = [];
            }
            setTimeout(() => {
                this._wf = new ajanuw_waterfall_js__WEBPACK_IMPORTED_MODULE_3__["Waterfall"]({
                    root: ".images-container",
                    item: ".item",
                    alignment: ajanuw_waterfall_js__WEBPACK_IMPORTED_MODULE_3__["WaterfallAlignment"].between
                });
            }, 1000);
            this.imagesLoading = false;
        });
    }
    ngOnDestroy() {
        if (this._wf)
            this._wf.dispose();
    }
    /**
     * 永久删除图片资源
     */
    delete(hash) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const { success, message } = yield this.homeService.deleteImage(hash);
            // 删除成功更新ui
            if (success) {
                this.images = this.images.filter(f => f.hash != hash);
            }
            else {
                alert(`删除失败: ${message}`);
            }
        });
    }
    /**
     * * 显示原图
     * @param url
     */
    open(url) {
        window.open(url);
    }
};
HomeComponent.ctorParameters = () => [
    { type: _home_service__WEBPACK_IMPORTED_MODULE_2__["HomeService"] }
];
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-home",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.styl */ "./src/app/pages/home/home.component.styl")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_home_service__WEBPACK_IMPORTED_MODULE_2__["HomeService"]])
], HomeComponent);



/***/ }),

/***/ "./src/app/pages/home/home.service.ts":
/*!********************************************!*\
  !*** ./src/app/pages/home/home.service.ts ***!
  \********************************************/
/*! exports provided: HomeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeService", function() { return HomeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_app_shared_api_urls__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/api-urls */ "./src/app/shared/api-urls.ts");




let HomeService = class HomeService {
    constructor(http) {
        this.http = http;
    }
    images() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const r = yield this.http
                .get(src_app_shared_api_urls__WEBPACK_IMPORTED_MODULE_3__["uploadHistoryUrl"], {
                observe: 'response',
            })
                .toPromise();
            if (r.status == 200 && r.body.success) {
                return r.body.data;
            }
            else {
                alert('获取图片失败');
                return [];
            }
        });
    }
    /**
     * 永久删除image
     * @param id 图片hash
     */
    deleteImage(id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return this.http.get(src_app_shared_api_urls__WEBPACK_IMPORTED_MODULE_3__["deleteUrl"] + `/${id}`).toPromise();
        });
    }
};
HomeService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
HomeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], HomeService);



/***/ }),

/***/ "./src/app/pages/mine/mine.component.styl":
/*!************************************************!*\
  !*** ./src/app/pages/mine/mine.component.styl ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  display: block;\n  height: 100vh;\n}\n/*# sourceMappingURL=src/app/pages/mine/mine.component.css.map */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbWluZS9zcmMvYXBwL3BhZ2VzL21pbmUvbWluZS5jb21wb25lbnQuc3R5bCIsInNyYy9hcHAvcGFnZXMvbWluZS9taW5lLmNvbXBvbmVudC5zdHlsIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBUztFQUNULGFBQVE7QUNDWjtBQUNBLGdFQUFnRSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21pbmUvbWluZS5jb21wb25lbnQuc3R5bCIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxufSIsIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGhlaWdodDogMTAwdmg7XG59XG4vKiMgc291cmNlTWFwcGluZ1VSTD1zcmMvYXBwL3BhZ2VzL21pbmUvbWluZS5jb21wb25lbnQuY3NzLm1hcCAqLyJdfQ== */");

/***/ }),

/***/ "./src/app/pages/mine/mine.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/mine/mine.component.ts ***!
  \**********************************************/
/*! exports provided: MineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MineComponent", function() { return MineComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _mine_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mine.service */ "./src/app/pages/mine/mine.service.ts");



let MineComponent = class MineComponent {
    constructor(mineService) {
        this.mineService = mineService;
    }
    get diskUsageValue() {
        const { disk_usage_raw, disk_limit_raw } = this.userInfo;
        return (disk_usage_raw / disk_limit_raw) * 100;
    }
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.userInfo = yield this.mineService.getUserInfo();
        });
    }
    logout() {
        this.mineService.logout();
    }
};
MineComponent.ctorParameters = () => [
    { type: _mine_service__WEBPACK_IMPORTED_MODULE_2__["MineService"] }
];
MineComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-mine',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./mine.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/mine/mine.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./mine.component.styl */ "./src/app/pages/mine/mine.component.styl")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_mine_service__WEBPACK_IMPORTED_MODULE_2__["MineService"]])
], MineComponent);



/***/ }),

/***/ "./src/app/pages/mine/mine.service.ts":
/*!********************************************!*\
  !*** ./src/app/pages/mine/mine.service.ts ***!
  \********************************************/
/*! exports provided: MineService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MineService", function() { return MineService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let MineService = class MineService {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    getUserInfo() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const r = yield this.authService.profile();
            if (r.status == 200) {
                return r.body.data;
            }
            else {
                alert('获取用户信息失败!!!');
            }
        });
    }
    /**
     * * 退出登陆，重定向登陆页面
     */
    logout() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.authService.logout();
            yield this.router.navigateByUrl('/login');
        });
    }
};
MineService.ctorParameters = () => [
    { type: src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
MineService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], MineService);



/***/ }),

/***/ "./src/app/pages/not-found/not-found.component.styl":
/*!**********************************************************!*\
  !*** ./src/app/pages/not-found/not-found.component.styl ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  height: 100vh;\n  display: grid;\n  place-items: center;\n}\n/*# sourceMappingURL=src/app/pages/not-found/not-found.component.css.map */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbm90LWZvdW5kL3NyYy9hcHAvcGFnZXMvbm90LWZvdW5kL25vdC1mb3VuZC5jb21wb25lbnQuc3R5bCIsInNyYy9hcHAvcGFnZXMvbm90LWZvdW5kL25vdC1mb3VuZC5jb21wb25lbnQuc3R5bCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQVE7RUFDUixhQUFTO0VBQ1QsbUJBQWE7QUNDZjtBQUNBLDBFQUEwRSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL25vdC1mb3VuZC9ub3QtZm91bmQuY29tcG9uZW50LnN0eWwiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XHJcbn0iLCI6aG9zdCB7XG4gIGhlaWdodDogMTAwdmg7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XG59XG4vKiMgc291cmNlTWFwcGluZ1VSTD1zcmMvYXBwL3BhZ2VzL25vdC1mb3VuZC9ub3QtZm91bmQuY29tcG9uZW50LmNzcy5tYXAgKi8iXX0= */");

/***/ }),

/***/ "./src/app/pages/not-found/not-found.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/not-found/not-found.component.ts ***!
  \********************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NotFoundComponent = class NotFoundComponent {
    constructor() { }
    ngOnInit() {
    }
};
NotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-not-found',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./not-found.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/not-found/not-found.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./not-found.component.styl */ "./src/app/pages/not-found/not-found.component.styl")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], NotFoundComponent);



/***/ }),

/***/ "./src/app/pages/upload/components/preview-image/preview-image.component.styl":
/*!************************************************************************************!*\
  !*** ./src/app/pages/upload/components/preview-image/preview-image.component.styl ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".preview-image-card {\n  width: 400px;\n  max-width: 400px;\n  margin: 1em;\n}\n/*# sourceMappingURL=src/app/pages/upload/components/preview-image/preview-image.component.css.map */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdXBsb2FkL2NvbXBvbmVudHMvcHJldmlldy1pbWFnZS9zcmMvYXBwL3BhZ2VzL3VwbG9hZC9jb21wb25lbnRzL3ByZXZpZXctaW1hZ2UvcHJldmlldy1pbWFnZS5jb21wb25lbnQuc3R5bCIsInNyYy9hcHAvcGFnZXMvdXBsb2FkL2NvbXBvbmVudHMvcHJldmlldy1pbWFnZS9wcmV2aWV3LWltYWdlLmNvbXBvbmVudC5zdHlsIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBTztFQUNQLGdCQUFXO0VBQ1gsV0FBUTtBQ0NWO0FBQ0Esb0dBQW9HIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdXBsb2FkL2NvbXBvbmVudHMvcHJldmlldy1pbWFnZS9wcmV2aWV3LWltYWdlLmNvbXBvbmVudC5zdHlsIiwic291cmNlc0NvbnRlbnQiOlsiLnByZXZpZXctaW1hZ2UtY2FyZCB7XHJcbiAgd2lkdGg6IDQwMHB4O1xyXG4gIG1heC13aWR0aDogNDAwcHg7XHJcbiAgbWFyZ2luOiAxZW07XHJcbn0iLCIucHJldmlldy1pbWFnZS1jYXJkIHtcbiAgd2lkdGg6IDQwMHB4O1xuICBtYXgtd2lkdGg6IDQwMHB4O1xuICBtYXJnaW46IDFlbTtcbn1cbi8qIyBzb3VyY2VNYXBwaW5nVVJMPXNyYy9hcHAvcGFnZXMvdXBsb2FkL2NvbXBvbmVudHMvcHJldmlldy1pbWFnZS9wcmV2aWV3LWltYWdlLmNvbXBvbmVudC5jc3MubWFwICovIl19 */");

/***/ }),

/***/ "./src/app/pages/upload/components/preview-image/preview-image.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/pages/upload/components/preview-image/preview-image.component.ts ***!
  \**********************************************************************************/
/*! exports provided: PreviewImageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreviewImageComponent", function() { return PreviewImageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PreviewImageComponent = class PreviewImageComponent {
    constructor() {
        this.delete = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.zoomIn = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.upload = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    get uploadError() {
        return this.image.success === false;
    }
    /**
     * 删除
     */
    handleDelete() {
        this.delete.emit();
    }
    /**
     * 放大
     */
    handleZoomIn() {
        this.zoomIn.emit();
    }
    /**
     * 上传（单张）图片
     */
    handleUpload() {
        this.upload.emit();
    }
    ngOnInit() { }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], PreviewImageComponent.prototype, "image", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], PreviewImageComponent.prototype, "delete", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], PreviewImageComponent.prototype, "zoomIn", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], PreviewImageComponent.prototype, "upload", void 0);
PreviewImageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-preview-image',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./preview-image.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/upload/components/preview-image/preview-image.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./preview-image.component.styl */ "./src/app/pages/upload/components/preview-image/preview-image.component.styl")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], PreviewImageComponent);



/***/ }),

/***/ "./src/app/pages/upload/upload.component.styl":
/*!****************************************************!*\
  !*** ./src/app/pages/upload/upload.component.styl ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  position: absolute;\n  padding: 1rem;\n}\n:host .preview-images-container {\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: wrap;\n}\n/*# sourceMappingURL=src/app/pages/upload/upload.component.css.map */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdXBsb2FkL3NyYy9hcHAvcGFnZXMvdXBsb2FkL3VwbG9hZC5jb21wb25lbnQuc3R5bCIsInNyYy9hcHAvcGFnZXMvdXBsb2FkL3VwbG9hZC5jb21wb25lbnQuc3R5bCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFVO0VBQ1YsYUFBUztBQ0NYO0FEQ0U7RUFDRSxvQkFBUztFQUFULGFBQVM7RUFDVCxlQUFXO0FDQ2Y7QUFDQSxvRUFBb0UiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy91cGxvYWQvdXBsb2FkLmNvbXBvbmVudC5zdHlsIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBwYWRkaW5nOiAxcmVtO1xyXG5cclxuICAucHJldmlldy1pbWFnZXMtY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgfVxyXG59IiwiOmhvc3Qge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHBhZGRpbmc6IDFyZW07XG59XG46aG9zdCAucHJldmlldy1pbWFnZXMtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuLyojIHNvdXJjZU1hcHBpbmdVUkw9c3JjL2FwcC9wYWdlcy91cGxvYWQvdXBsb2FkLmNvbXBvbmVudC5jc3MubWFwICovIl19 */");

/***/ }),

/***/ "./src/app/pages/upload/upload.component.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/upload/upload.component.ts ***!
  \**************************************************/
/*! exports provided: UploadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadComponent", function() { return UploadComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _upload_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./upload.service */ "./src/app/pages/upload/upload.service.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);





let UploadComponent = class UploadComponent {
    constructor(sanitizer, uploadService) {
        this.sanitizer = sanitizer;
        this.uploadService = uploadService;
        this.previewFiles = [];
    }
    ngOnInit() { }
    /**
     * * dispose
     */
    ngOnDestroy() {
        lodash__WEBPACK_IMPORTED_MODULE_4__(this.previewFiles).forEach((file) => {
            window.URL.revokeObjectURL(file.src);
        });
    }
    hadler(e) {
        e.preventDefault();
    }
    /**
     * * 拖拽时获取图片
     * @param e
     */
    dropEvent(e) {
        e.preventDefault();
        this._setFiles(e.dataTransfer.files);
    }
    /**
     * * 点击上传获取图片
     * @param e
     */
    onFileChange(e) {
        this._setFiles(e.target.files);
    }
    /**
     * * 记录图片
     * @param files
     */
    _setFiles(files) {
        if (files.length <= 0)
            return null;
        let _files = this._createPreviewImages(files);
        // 每次上传，将过滤掉重复项，用[file.name]过滤
        this.previewFiles = lodash__WEBPACK_IMPORTED_MODULE_4__["unionWith"](this.previewFiles, _files, this._equalName);
    }
    /**
     * 过滤掉name相同的图片
     * @param a
     * @param b
     */
    _equalName(a, b) {
        return a.file.name === b.file.name;
    }
    /**
     * 使用 file[] 创建 PreviewImage[]
     * @param files fileList
     */
    _createPreviewImages(files) {
        // 避免假数组
        return lodash__WEBPACK_IMPORTED_MODULE_4__["map"](lodash__WEBPACK_IMPORTED_MODULE_4__["toArray"](files), file => {
            const src = window.URL.createObjectURL(new Blob([file], {
                type: file.type,
            }));
            return {
                // see also:  https://angular.io/guide/security#xss
                src: this.sanitizer.bypassSecurityTrustUrl(src),
                file,
            };
        });
    }
    /**
     * * 查看原图
     */
    displayOriginalImage(url) {
        window.open(url.changingThisBreaksApplicationSecurity);
    }
    /**
     * * 删除预览图片
     */
    deletePreviewImage(file) {
        lodash__WEBPACK_IMPORTED_MODULE_4__["pull"](this.previewFiles, file);
    }
    /**
     * * 点击[全部上传]，上传所有的图片
     * * 上传完毕清理预览图片
     * TODO: 大型图片上传失败，但还是提示上传成功
     */
    uploadAll() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.uploadService.uploadAll(this.previewFiles);
            this.clearPreviewImages();
        });
    }
    /**
     * 单张上传
     * 上传成功删除图片
     * @param image
     */
    upload(image) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.uploadService.uploadImage(image);
            if (image.success) {
                lodash__WEBPACK_IMPORTED_MODULE_4__["pull"](this.previewFiles, image);
            }
        });
    }
    /**
     * * 清理上传成功的图片
     */
    clearPreviewImages() {
        this.previewFiles = this.previewFiles.filter(image => !image.success);
    }
};
UploadComponent.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] },
    { type: _upload_service__WEBPACK_IMPORTED_MODULE_3__["UploadService"] }
];
UploadComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-upload',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./upload.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/upload/upload.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./upload.component.styl */ "./src/app/pages/upload/upload.component.styl")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"],
        _upload_service__WEBPACK_IMPORTED_MODULE_3__["UploadService"]])
], UploadComponent);



/***/ }),

/***/ "./src/app/pages/upload/upload.service.ts":
/*!************************************************!*\
  !*** ./src/app/pages/upload/upload.service.ts ***!
  \************************************************/
/*! exports provided: UploadService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadService", function() { return UploadService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _shared_api_urls__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/api-urls */ "./src/app/shared/api-urls.ts");
/* harmony import */ var _shared_token_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/token.service */ "./src/app/shared/token.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");







let UploadService = class UploadService {
    constructor(http, tokenService) {
        this.http = http;
        this.tokenService = tokenService;
    }
    /**
     * 上传图片组，单张递归上传
     * @param previewImages
     */
    uploadAll(previewImages) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (previewImages.length <= 0) {
                return;
            }
            const image = previewImages[0];
            yield this.uploadImage(image);
            return this.uploadAll(previewImages.slice(1));
        });
    }
    /**
     * 上传到图床
     * @param image
     */
    uploadImage(image) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const data = new FormData();
            const file = image.file;
            data.append('smfile', file);
            // see also: https://angular.cn/guide/http#listening-to-progress-events
            const req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', _shared_api_urls__WEBPACK_IMPORTED_MODULE_3__["uploadUrl"], data, {
                reportProgress: true,
            });
            const r = yield this.http
                .request(req)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(event => {
                // 设置进度
                if (event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpEventType"].UploadProgress) {
                    let progress = Math.round((100 * event.loaded) / event.total);
                    image.progress = progress;
                }
                else if (event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpEventType"].Response) {
                    image.progress = 100;
                }
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(event => {
                // 上传完成返回响应body
                if (event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpEventType"].Response) {
                    return event.body;
                }
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["last"])())
                .toPromise();
            image.success = r.success;
            image.message = r.message;
            return r;
        });
    }
    handleError(error) {
        if (error.error instanceof ErrorEvent) {
            // 发生客户端或网络错误。 相应地处理它。
            console.error('An error occurred:', error.error.message);
        }
        else {
            // 后端返回的响应代码失败。
            // 响应主体可能包含有关出了什么问题的线索，
            console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
        }
        // 返回可观察到的并带有面向用户的错误消息
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["throwError"])('Something bad happened; please try again later.');
    }
};
UploadService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _shared_token_service__WEBPACK_IMPORTED_MODULE_4__["TokenService"] }
];
UploadService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _shared_token_service__WEBPACK_IMPORTED_MODULE_4__["TokenService"]])
], UploadService);



/***/ }),

/***/ "./src/app/shared/api-urls.ts":
/*!************************************!*\
  !*** ./src/app/shared/api-urls.ts ***!
  \************************************/
/*! exports provided: smMsUrl, smMsString, getTokenUrl, uploadUrl, uploadHistoryUrl, profileUrl, deleteUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "smMsUrl", function() { return smMsUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "smMsString", function() { return smMsString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTokenUrl", function() { return getTokenUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uploadUrl", function() { return uploadUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uploadHistoryUrl", function() { return uploadHistoryUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "profileUrl", function() { return profileUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteUrl", function() { return deleteUrl; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

const smMsUrl = 'https://sm.ms/api/v2';
const smMsString = '/sm-ms/';
const getTokenUrl = smMsString + 'token';
const uploadUrl = smMsString + 'upload';
const uploadHistoryUrl = smMsString + 'upload_history';
const profileUrl = smMsString + 'profile';
const deleteUrl = smMsString + 'delete';


/***/ }),

/***/ "./src/app/shared/components/sized-box/sized-box.component.styl":
/*!**********************************************************************!*\
  !*** ./src/app/shared/components/sized-box/sized-box.component.styl ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/*# sourceMappingURL=src/app/shared/components/sized-box/sized-box.component.css.map */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvc2l6ZWQtYm94L3NpemVkLWJveC5jb21wb25lbnQuc3R5bCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxzRkFBc0YiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9zaXplZC1ib3gvc2l6ZWQtYm94LmNvbXBvbmVudC5zdHlsIn0= */");

/***/ }),

/***/ "./src/app/shared/components/sized-box/sized-box.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/shared/components/sized-box/sized-box.component.ts ***!
  \********************************************************************/
/*! exports provided: SizedBoxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SizedBoxComponent", function() { return SizedBoxComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SizedBoxComponent = class SizedBoxComponent {
    constructor() { }
    ngOnInit() {
        this.styles = {
            width: this.width + 'px',
            height: this.height + 'px',
        };
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], SizedBoxComponent.prototype, "width", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], SizedBoxComponent.prototype, "height", void 0);
SizedBoxComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sized-box',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./sized-box.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/sized-box/sized-box.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./sized-box.component.styl */ "./src/app/shared/components/sized-box/sized-box.component.styl")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], SizedBoxComponent);



/***/ }),

/***/ "./src/app/shared/pipes/image-size.pipe.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/pipes/image-size.pipe.ts ***!
  \*************************************************/
/*! exports provided: ImageSizePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageSizePipe", function() { return ImageSizePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ImageSizePipe = class ImageSizePipe {
    constructor() {
        this._base = 1024;
    }
    transform(value, args) {
        if (value < this._base) {
            return value + ' B';
        }
        else {
            return (value / 1024).toFixed(2) + ' KB';
        }
    }
};
ImageSizePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'imageSize',
    })
], ImageSizePipe);



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _components_sized_box_sized_box_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/sized-box/sized-box.component */ "./src/app/shared/components/sized-box/sized-box.component.ts");
/* harmony import */ var _pipes_image_size_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pipes/image-size.pipe */ "./src/app/shared/pipes/image-size.pipe.ts");





let SharedModule = class SharedModule {
};
SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_components_sized_box_sized_box_component__WEBPACK_IMPORTED_MODULE_3__["SizedBoxComponent"], _pipes_image_size_pipe__WEBPACK_IMPORTED_MODULE_4__["ImageSizePipe"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
        ],
        exports: [_components_sized_box_sized_box_component__WEBPACK_IMPORTED_MODULE_3__["SizedBoxComponent"], _pipes_image_size_pipe__WEBPACK_IMPORTED_MODULE_4__["ImageSizePipe"]]
    })
], SharedModule);



/***/ }),

/***/ "./src/app/shared/token.service.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/token.service.ts ***!
  \*****************************************/
/*! exports provided: TokenService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenService", function() { return TokenService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var localforage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! localforage */ "./node_modules/localforage/dist/localforage.js");
/* harmony import */ var localforage__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(localforage__WEBPACK_IMPORTED_MODULE_2__);



let TokenService = class TokenService {
    constructor() {
        this._tokenKey = 'login_token';
        this._token = '';
        this.token.then(token => {
            this._token = token || '';
        });
    }
    getAuthorizationToken() {
        return this._token;
    }
    get token() {
        return this.getToken();
    }
    /**
     * * 把token字符串保存起来
     * @param token
     */
    setToken(token) {
        return localforage__WEBPACK_IMPORTED_MODULE_2__["setItem"](this._tokenKey, token);
    }
    /**
     * * 获取保存的token
     */
    getToken() {
        return localforage__WEBPACK_IMPORTED_MODULE_2__["getItem"](this._tokenKey);
    }
    /**
     * * 清理掉token
     */
    removeToken() {
        return localforage__WEBPACK_IMPORTED_MODULE_2__["removeItem"](this._tokenKey);
    }
};
TokenService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], TokenService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\ajanuw\ng-sm-ms\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);