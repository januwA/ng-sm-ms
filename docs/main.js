(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/not-found/not-found.component */ "./src/app/pages/not-found/not-found.component.ts");
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth/auth.guard */ "./src/app/auth/auth.guard.ts");
/* harmony import */ var _pages_upload_upload_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/upload/upload.component */ "./src/app/pages/upload/upload.component.ts");
/* harmony import */ var _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/dashboard/dashboard.component */ "./src/app/pages/dashboard/dashboard.component.ts");








var routes = [
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
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/app.component.styl":
/*!************************************!*\
  !*** ./src/app/app.component.styl ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*# sourceMappingURL=src/app/app.component.css.map */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zdHlsIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9EQUFvRCIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc3R5bCJ9 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'sm-ms';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.styl */ "./src/app/app.component.styl")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/not-found/not-found.component */ "./src/app/pages/not-found/not-found.component.ts");
/* harmony import */ var _auth_auth_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./auth/auth.module */ "./src/app/auth/auth.module.ts");
/* harmony import */ var _pages_upload_upload_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/upload/upload.component */ "./src/app/pages/upload/upload.component.ts");
/* harmony import */ var _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/dashboard/dashboard.component */ "./src/app/pages/dashboard/dashboard.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _mat_mat_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./mat/mat.module */ "./src/app/mat/mat.module.ts");
/* harmony import */ var _pages_upload_components_preview_image_preview_image_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/upload/components/preview-image/preview-image.component */ "./src/app/pages/upload/components/preview-image/preview-image.component.ts");















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _pages_home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
                _pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_8__["NotFoundComponent"],
                _pages_upload_upload_component__WEBPACK_IMPORTED_MODULE_10__["UploadComponent"],
                _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_11__["DashboardComponent"],
                _pages_upload_components_preview_image_preview_image_component__WEBPACK_IMPORTED_MODULE_14__["PreviewImageComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _core_core_module__WEBPACK_IMPORTED_MODULE_6__["CoreModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                _auth_auth_module__WEBPACK_IMPORTED_MODULE_9__["AuthModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["BrowserAnimationsModule"],
                _mat_mat_module__WEBPACK_IMPORTED_MODULE_13__["MatModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
        })
    ], AppModule);
    return AppModule;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/auth/login/login.component.ts");




var routes = [
    {
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"],
    },
];
var AuthRoutingModule = /** @class */ (function () {
    function AuthRoutingModule() {
    }
    AuthRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], AuthRoutingModule);
    return AuthRoutingModule;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _shared_token_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/token.service */ "./src/app/shared/token.service.ts");





var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router, tokenService) {
        this.authService = authService;
        this.router = router;
        this.tokenService = tokenService;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        var url = state.url;
        return this.checkLogin(url);
    };
    AuthGuard.prototype.checkLogin = function (url) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this.authService.isLoggedIn;
                        if (_a) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.tokenService.token];
                    case 1:
                        _a = (_b.sent());
                        _b.label = 2;
                    case 2:
                        if (_a) {
                            return [2 /*return*/, true];
                        }
                        // 储存用户进来时的路由
                        this.authService.redirectUrl = url;
                        this.router.navigate(['/login']);
                        return [2 /*return*/, false];
                }
            });
        });
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _shared_token_service__WEBPACK_IMPORTED_MODULE_4__["TokenService"]])
    ], AuthGuard);
    return AuthGuard;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _auth_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth-routing.module */ "./src/app/auth/auth-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _mat_mat_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../mat/mat.module */ "./src/app/mat/mat.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");









var AuthModule = /** @class */ (function () {
    function AuthModule() {
    }
    AuthModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _auth_routing_module__WEBPACK_IMPORTED_MODULE_4__["AuthRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                _mat_mat_module__WEBPACK_IMPORTED_MODULE_7__["MatModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"]
            ],
            declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]],
        })
    ], AuthModule);
    return AuthModule;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_token_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/token.service */ "./src/app/shared/token.service.ts");
/* harmony import */ var _shared_api_urls__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/api-urls */ "./src/app/shared/api-urls.ts");







var AuthService = /** @class */ (function () {
    function AuthService(http, router, tokenService) {
        this.http = http;
        this.router = router;
        this.tokenService = tokenService;
        this._defaultRedirectUrl = '/home';
        this.isLoggedIn = false;
    }
    Object.defineProperty(AuthService.prototype, "redirectUrl", {
        get: function () {
            return this._redirectUrl
                ? this.router.parseUrl(this._redirectUrl)
                : this._defaultRedirectUrl;
        },
        set: function (url) {
            this._redirectUrl = url;
        },
        enumerable: true,
        configurable: true
    });
    AuthService.prototype.login = function (body) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var r, _token;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.http
                            .post(_shared_api_urls__WEBPACK_IMPORTED_MODULE_6__["getTokenUrl"], querystring__WEBPACK_IMPORTED_MODULE_1__["stringify"](body), {
                            headers: {
                                'content-type': 'application/x-www-form-urlencoded',
                            },
                        })
                            .toPromise()];
                    case 1:
                        r = _a.sent();
                        if (r.data && r.data.token) {
                            _token = r.data.token;
                            this.tokenService.setToken(_token);
                            this.isLoggedIn = true;
                            return [2 /*return*/, true];
                        }
                        this.isLoggedIn = false;
                        return [2 /*return*/, false];
                }
            });
        });
    };
    AuthService.prototype.logout = function () {
        this.isLoggedIn = false;
    };
    /**
     * * 获取用户的信息
     */
    AuthService.prototype.profile = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                return [2 /*return*/, this.http
                        .post(_shared_api_urls__WEBPACK_IMPORTED_MODULE_6__["profileUrl"], null, {
                        observe: 'response',
                    })
                        .toPromise()];
            });
        });
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _shared_token_service__WEBPACK_IMPORTED_MODULE_5__["TokenService"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/auth/login/login.component.html":
/*!*************************************************!*\
  !*** ./src/app/auth/login/login.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"login-form\" [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\">\r\n  <mat-form-field>\r\n    <input\r\n      matInput\r\n      type=\"text\"\r\n      formControlName=\"username\"\r\n      placeholder=\"账号\"\r\n      required\r\n    />\r\n  </mat-form-field>\r\n\r\n  <mat-form-field>\r\n    <input\r\n      matInput\r\n      type=\"password\"\r\n      formControlName=\"password\"\r\n      placeholder=\"密码\"\r\n      required\r\n    />\r\n  </mat-form-field>\r\n  <a class=\"register-button\" href=\"https://sm.ms/register\" target=\"_blank\">\r\n    没有账号?\r\n  </a>\r\n  <button\r\n    mat-raised-button\r\n    color=\"primary\"\r\n    type=\"submit\"\r\n    [disabled]=\"isLoginButtondisabled\"\r\n  >\r\n    登陆\r\n  </button>\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/auth/login/login.component.styl":
/*!*************************************************!*\
  !*** ./src/app/auth/login/login.component.styl ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  height: 100vh;\n  display: grid;\n  place-items: center;\n}\n:host .login-form {\n  display: flex;\n  flex-direction: column;\n}\n:host .register-button {\n  text-align: end;\n  font-size: 0.8em;\n}\n/*# sourceMappingURL=src/app/auth/login/login.component.css.map */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9sb2dpbi9zcmMvYXBwL2F1dGgvbG9naW4vbG9naW4uY29tcG9uZW50LnN0eWwiLCJzcmMvYXBwL2F1dGgvbG9naW4vbG9naW4uY29tcG9uZW50LnN0eWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFRO0VBQ1IsYUFBUztFQUNULG1CQUFhO0FDQ2Y7QURDRTtFQUNFLGFBQVM7RUFDVCxzQkFBZ0I7QUNDcEI7QURFRTtFQUNFLGVBQVk7RUFDWixnQkFBVztBQ0FmO0FBQ0EsaUVBQWlFIiwiZmlsZSI6InNyYy9hcHAvYXV0aC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc3R5bCIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgLmxvZ2luLWZvcm0ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgfVxyXG5cclxuICAucmVnaXN0ZXItYnV0dG9uIHtcclxuICAgIHRleHQtYWxpZ246IGVuZDtcclxuICAgIGZvbnQtc2l6ZTogMC44ZW07XHJcbiAgfVxyXG59IiwiOmhvc3Qge1xuICBoZWlnaHQ6IDEwMHZoO1xuICBkaXNwbGF5OiBncmlkO1xuICBwbGFjZS1pdGVtczogY2VudGVyO1xufVxuOmhvc3QgLmxvZ2luLWZvcm0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuOmhvc3QgLnJlZ2lzdGVyLWJ1dHRvbiB7XG4gIHRleHQtYWxpZ246IGVuZDtcbiAgZm9udC1zaXplOiAwLjhlbTtcbn1cbi8qIyBzb3VyY2VNYXBwaW5nVVJMPXNyYy9hcHAvYXV0aC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzLm1hcCAqLyJdfQ== */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var LoginComponent = /** @class */ (function () {
    function LoginComponent(fb, authService, router) {
        this.fb = fb;
        this.authService = authService;
        this.router = router;
        this.loginLoading = false;
        this.loginForm = this.fb.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    }
    Object.defineProperty(LoginComponent.prototype, "isLoginButtondisabled", {
        /**
         * * 表单[验证失败]或[登陆中]都将禁用按钮
         */
        get: function () {
            return !this.loginForm.valid || this.loginLoading;
        },
        enumerable: true,
        configurable: true
    });
    LoginComponent.prototype.ngOnInit = function () { };
    /**
     * * 点击登录按钮
     * 调用登陆服务，登陆成功后重定向路由
     */
    LoginComponent.prototype.onSubmit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var body;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.loginLoading = true;
                        body = this.loginForm.value;
                        console.log(body);
                        return [4 /*yield*/, this.authService.login(body)];
                    case 1:
                        _a.sent();
                        this.loginLoading = false;
                        if (this.authService.isLoggedIn) {
                            // 登陆成功后重定向
                            this.router.navigateByUrl(this.authService.redirectUrl);
                        }
                        else {
                            alert('登陆失败：查看f12打印信息.');
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginComponent.prototype.logout = function () {
        this.authService.logout();
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/auth/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.styl */ "./src/app/auth/login/login.component.styl")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _http_interceptors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../http-interceptors */ "./src/app/http-interceptors/index.ts");






var CoreModule = /** @class */ (function () {
    function CoreModule() {
    }
    CoreModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]],
            exports: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]],
            providers: [_http_interceptors__WEBPACK_IMPORTED_MODULE_5__["httpInterceptorProviders"]],
        })
    ], CoreModule);
    return CoreModule;
}());



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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _noop_interceptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./noop-interceptor */ "./src/app/http-interceptors/noop-interceptor.ts");


/**
 * 把http拦截器搜集起来
 */
var httpInterceptorProviders = [
    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HTTP_INTERCEPTORS"], useClass: _noop_interceptor__WEBPACK_IMPORTED_MODULE_1__["NoopInterceptor"], multi: true },
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_api_urls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/api-urls */ "./src/app/shared/api-urls.ts");
/* harmony import */ var _shared_token_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/token.service */ "./src/app/shared/token.service.ts");




var NoopInterceptor = /** @class */ (function () {
    function NoopInterceptor(tokenService) {
        this.tokenService = tokenService;
    }
    NoopInterceptor.prototype.intercept = function (req, next) {
        if (req.url.startsWith(_shared_api_urls__WEBPACK_IMPORTED_MODULE_2__["smMsString"])) {
            var dataUrl = req.url;
            var authToken = this.tokenService.getAuthorizationToken();
            // 拦截 /ms-sm/xxx的url，并生成新的url
            var urlPath = dataUrl.replace(new RegExp("^" + _shared_api_urls__WEBPACK_IMPORTED_MODULE_2__["smMsString"]), '');
            dataUrl = _shared_api_urls__WEBPACK_IMPORTED_MODULE_2__["smMsUrl"] + "/" + urlPath;
            var secureReq = req.clone({
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
    };
    NoopInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_token_service__WEBPACK_IMPORTED_MODULE_3__["TokenService"]])
    ], NoopInterceptor);
    return NoopInterceptor;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");



var MatModule = /** @class */ (function () {
    function MatModule() {
    }
    MatModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"]
            ],
        })
    ], MatModule);
    return MatModule;
}());



/***/ }),

/***/ "./src/app/pages/dashboard/dashboard.component.html":
/*!**********************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav mat-tab-nav-bar>\r\n  <a\r\n    mat-tab-link\r\n    *ngFor=\"let link of navLinks\"\r\n    [routerLink]=\"link.path\"\r\n    routerLinkActive\r\n    #rla=\"routerLinkActive\"\r\n    [active]=\"rla.isActive\"\r\n  >\r\n    {{ link.label }}\r\n  </a>\r\n</nav>\r\n\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/pages/dashboard/dashboard.component.styl":
/*!**********************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.component.styl ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".grid-nav {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, 100px);\n  grid-gap: 10px;\n  list-style: none;\n  margin: 0;\n  padding: 14px;\n}\n.grid-nav li {\n  text-align: center;\n}\n.grid-nav .active {\n  color: #f2758b;\n}\n.grid-nav a {\n  color: rgba(128,128,128,0.69);\n}\n/*# sourceMappingURL=src/app/pages/dashboard/dashboard.component.css.map */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZGFzaGJvYXJkL3NyYy9hcHAvcGFnZXMvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc3R5bCIsInNyYy9hcHAvcGFnZXMvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc3R5bCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQVM7RUFDVCwrQ0FBOEM7RUFDOUMsY0FBVTtFQUNWLGdCQUFZO0VBQ1osU0FBUTtFQUNSLGFBQVM7QUNDWDtBRENFO0VBQ0Usa0JBQVk7QUNDaEI7QURFRTtFQUNFLGNBQU87QUNBWDtBREdFO0VBQ0UsNkJBQU87QUNEWDtBQUNBLDBFQUEwRSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnN0eWwiLCJzb3VyY2VzQ29udGVudCI6WyIuZ3JpZC1uYXYge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCAxMDBweCk7XHJcbiAgZ3JpZC1nYXA6IDEwcHg7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMTRweDtcclxuXHJcbiAgbGkge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgLmFjdGl2ZSB7XHJcbiAgICBjb2xvcjogI2YyNzU4YjtcclxuICB9XHJcblxyXG4gIGEge1xyXG4gICAgY29sb3I6ICM4MDgwODBiMDtcclxuICB9XHJcbn0iLCIuZ3JpZC1uYXYge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIDEwMHB4KTtcbiAgZ3JpZC1nYXA6IDEwcHg7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMTRweDtcbn1cbi5ncmlkLW5hdiBsaSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5ncmlkLW5hdiAuYWN0aXZlIHtcbiAgY29sb3I6ICNmMjc1OGI7XG59XG4uZ3JpZC1uYXYgYSB7XG4gIGNvbG9yOiByZ2JhKDEyOCwxMjgsMTI4LDAuNjkpO1xufVxuLyojIHNvdXJjZU1hcHBpbmdVUkw9c3JjL2FwcC9wYWdlcy9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MubWFwICovIl19 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
        this.navLinks = [
            { path: '/home', label: 'Home' },
            { path: '/upload', label: 'Upload' },
        ];
    }
    DashboardComponent.prototype.ngOnInit = function () { };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/pages/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.styl */ "./src/app/pages/dashboard/dashboard.component.styl")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/pages/home/home.component.html":
/*!************************************************!*\
  !*** ./src/app/pages/home/home.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section>\r\n  <h2>用户资料</h2>\r\n  <ng-container\r\n    *ngIf=\"userInfo; then userinfoView; else loading\"\r\n  ></ng-container>\r\n  <ng-template #userinfoView>\r\n    <mat-card>\r\n      <mat-card-header>\r\n        <mat-card-title>\r\n          {{ userInfo.username }}\r\n        </mat-card-title>\r\n        <mat-card-subtitle>\r\n          {{ userInfo.email }}\r\n        </mat-card-subtitle>\r\n      </mat-card-header>\r\n      <mat-card-content>\r\n        <p>总磁盘: {{ userInfo.disk_limit }}</p>\r\n        <p>已使用: {{ userInfo.disk_usage }}</p>\r\n      </mat-card-content>\r\n    </mat-card>\r\n  </ng-template>\r\n</section>\r\n<app-sized-box height=\"20\"></app-sized-box>\r\n<section class=\"images-grid\">\r\n  <h2>Pictures</h2>\r\n  <ng-container\r\n    *ngIf=\"images && images.length; then thenTemp; else loading\"\r\n  ></ng-container>\r\n\r\n  <ng-template #thenTemp>\r\n    <section class=\"images-container\">\r\n      <ng-container *ngFor=\"let image of images\">\r\n        <mat-card class=\"image-card\">\r\n          <img mat-card-image [src]=\"image.url\" (click)=\"open(image.url)\" />\r\n          <mat-card-content>\r\n            <p>{{ image.filename }}</p>\r\n            <p>{{ image.size | imageSize }}</p>\r\n            <button\r\n              mat-button\r\n              class=\"image-url-button\"\r\n              [attr.data-clipboard-text]=\"image.url\"\r\n              title=\"点击复制\"\r\n            >\r\n              {{ image.url }}\r\n            </button>\r\n          </mat-card-content>\r\n          <mat-card-actions>\r\n            <button\r\n              mat-raised-button\r\n              title=\"注意：这将永久删除资源\"\r\n              (click)=\"delete(image.hash)\"\r\n            >\r\n              删除资源\r\n            </button>\r\n          </mat-card-actions>\r\n        </mat-card>\r\n      </ng-container>\r\n    </section>\r\n  </ng-template>\r\n</section>\r\n\r\n<ng-template #loading>\r\n  <mat-spinner></mat-spinner>\r\n</ng-template>\r\n"

/***/ }),

/***/ "./src/app/pages/home/home.component.styl":
/*!************************************************!*\
  !*** ./src/app/pages/home/home.component.styl ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  position: absolute;\n  padding: 1rem;\n}\n.image-card {\n  float: left;\n  min-width: 400px;\n  max-width: 400px;\n  margin: 1em;\n}\n.image-card img {\n  width: auto;\n  height: auto;\n  max-width: 100%;\n  margin-left: 50%;\n  transform: translateX(-50%);\n}\n/*# sourceMappingURL=src/app/pages/home/home.component.css.map */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS9zcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS5jb21wb25lbnQuc3R5bCIsInNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLmNvbXBvbmVudC5zdHlsIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQVU7RUFDVixhQUFTO0FDQ1g7QURFQTtFQUNFLFdBQU87RUFDUCxnQkFBVztFQUNYLGdCQUFXO0VBQ1gsV0FBUTtBQ0FWO0FERUU7RUFDRSxXQUFPO0VBQ1AsWUFBUTtFQUNSLGVBQVc7RUFDWCxnQkFBYTtFQUNiLDJCQUEwQjtBQ0E5QjtBQUNBLGdFQUFnRSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS5jb21wb25lbnQuc3R5bCIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcGFkZGluZzogMXJlbTtcclxufVxyXG5cclxuLmltYWdlLWNhcmQge1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIG1pbi13aWR0aDogNDAwcHg7XHJcbiAgbWF4LXdpZHRoOiA0MDBweDtcclxuICBtYXJnaW46IDFlbTtcclxuXHJcbiAgaW1nIHtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxuICB9XHJcbn0iLCI6aG9zdCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcGFkZGluZzogMXJlbTtcbn1cbi5pbWFnZS1jYXJkIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1pbi13aWR0aDogNDAwcHg7XG4gIG1heC13aWR0aDogNDAwcHg7XG4gIG1hcmdpbjogMWVtO1xufVxuLmltYWdlLWNhcmQgaW1nIHtcbiAgd2lkdGg6IGF1dG87XG4gIGhlaWdodDogYXV0bztcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBtYXJnaW4tbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG59XG4vKiMgc291cmNlTWFwcGluZ1VSTD1zcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzLm1hcCAqLyJdfQ== */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _home_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.service */ "./src/app/pages/home/home.service.ts");
/* harmony import */ var clipboard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! clipboard */ "./node_modules/clipboard/dist/clipboard.js");
/* harmony import */ var clipboard__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(clipboard__WEBPACK_IMPORTED_MODULE_3__);




var HomeComponent = /** @class */ (function () {
    function HomeComponent(homeService) {
        this.homeService = homeService;
        this.userInfoLoading = true;
        this.images = [];
        this.imagesLoading = true;
    }
    Object.defineProperty(HomeComponent.prototype, "diskUsageValue", {
        get: function () {
            var _a = this.userInfo, disk_usage_raw = _a.disk_usage_raw, disk_limit_raw = _a.disk_limit_raw;
            return (disk_usage_raw / disk_limit_raw) * 100;
        },
        enumerable: true,
        configurable: true
    });
    HomeComponent.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a, images;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.userInfoLoading = true;
                        _a = this;
                        return [4 /*yield*/, this.homeService.getUserInfo()];
                    case 1:
                        _a.userInfo = _b.sent();
                        this.userInfoLoading = false;
                        this.imagesLoading = true;
                        return [4 /*yield*/, this.homeService.images()];
                    case 2:
                        images = _b.sent();
                        this.images = images.reverse() || [];
                        this.imagesLoading = false;
                        new clipboard__WEBPACK_IMPORTED_MODULE_3__('.image-url-button');
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * 永久删除图片资源
     */
    HomeComponent.prototype.delete = function (hash) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a, success, message;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.homeService.deleteImage(hash)];
                    case 1:
                        _a = _b.sent(), success = _a.success, message = _a.message;
                        // 删除成功更新ui
                        if (success) {
                            this.images = this.images.filter(function (f) { return f.hash != hash; });
                        }
                        else {
                            alert("\u5220\u9664\u5931\u8D25: " + message);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * * 显示原图
     * @param url
     */
    HomeComponent.prototype.open = function (url) {
        window.open(url);
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/pages/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.styl */ "./src/app/pages/home/home.component.styl")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_home_service__WEBPACK_IMPORTED_MODULE_2__["HomeService"]])
    ], HomeComponent);
    return HomeComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var src_app_shared_api_urls__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/api-urls */ "./src/app/shared/api-urls.ts");





var HomeService = /** @class */ (function () {
    function HomeService(http, authService) {
        this.http = http;
        this.authService = authService;
    }
    HomeService.prototype.images = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var r;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.http
                            .post(src_app_shared_api_urls__WEBPACK_IMPORTED_MODULE_4__["uploadHistoryUrl"], null, {
                            observe: 'response',
                        })
                            .toPromise()];
                    case 1:
                        r = _a.sent();
                        if (r.status == 200) {
                            return [2 /*return*/, r.body.data];
                        }
                        else {
                            alert('获取图片失败');
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    HomeService.prototype.getUserInfo = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var r;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.authService.profile()];
                    case 1:
                        r = _a.sent();
                        if (r.status == 200) {
                            return [2 /*return*/, r.body.data];
                        }
                        else {
                            alert('获取用户信息失败!!!');
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * 永久删除image
     * @param id 图片hash
     */
    HomeService.prototype.deleteImage = function (id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                return [2 /*return*/, this.http.get(src_app_shared_api_urls__WEBPACK_IMPORTED_MODULE_4__["deleteUrl"] + ("/" + id)).toPromise()];
            });
        });
    };
    HomeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], HomeService);
    return HomeService;
}());



/***/ }),

/***/ "./src/app/pages/not-found/not-found.component.html":
/*!**********************************************************!*\
  !*** ./src/app/pages/not-found/not-found.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>\r\n  404 页面未找到\r\n</h1>\r\n"

/***/ }),

/***/ "./src/app/pages/not-found/not-found.component.styl":
/*!**********************************************************!*\
  !*** ./src/app/pages/not-found/not-found.component.styl ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  height: 100vh;\n  display: grid;\n  place-items: center;\n}\n/*# sourceMappingURL=src/app/pages/not-found/not-found.component.css.map */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbm90LWZvdW5kL3NyYy9hcHAvcGFnZXMvbm90LWZvdW5kL25vdC1mb3VuZC5jb21wb25lbnQuc3R5bCIsInNyYy9hcHAvcGFnZXMvbm90LWZvdW5kL25vdC1mb3VuZC5jb21wb25lbnQuc3R5bCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQVE7RUFDUixhQUFTO0VBQ1QsbUJBQWE7QUNDZjtBQUNBLDBFQUEwRSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL25vdC1mb3VuZC9ub3QtZm91bmQuY29tcG9uZW50LnN0eWwiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XHJcbn0iLCI6aG9zdCB7XG4gIGhlaWdodDogMTAwdmg7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XG59XG4vKiMgc291cmNlTWFwcGluZ1VSTD1zcmMvYXBwL3BhZ2VzL25vdC1mb3VuZC9ub3QtZm91bmQuY29tcG9uZW50LmNzcy5tYXAgKi8iXX0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-not-found',
            template: __webpack_require__(/*! ./not-found.component.html */ "./src/app/pages/not-found/not-found.component.html"),
            styles: [__webpack_require__(/*! ./not-found.component.styl */ "./src/app/pages/not-found/not-found.component.styl")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/app/pages/upload/components/preview-image/preview-image.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/pages/upload/components/preview-image/preview-image.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"preview-image-card\" [title]=\"image.file.name\">\n  <img\n    mat-card-image\n    [src]=\"image.src\"\n    title=\"查看原图\"\n    (click)=\"handleZoomIn()\"\n  />\n  <mat-card-content>\n    <p>{{ image.file.name }}</p>\n    <p>{{ image.file.size | imageSize }}</p>\n    <mat-progress-bar\n      *ngIf=\"image?.progress > 0\"\n      mode=\"determinate\"\n      [value]=\"image?.progress\"\n    ></mat-progress-bar>\n    <p *ngIf=\"uploadError\" class=\"mat-error\">\n      {{ image.message }}\n    </p>\n     <p *ngIf=\"!uploadError\" style=\"color: #2b9f5b\">\n      {{ image.message }}\n     </p>\n  </mat-card-content>\n  <mat-card-actions>\n    <button mat-raised-button title=\"删除\" (click)=\"handleDelete()\">\n      删除\n    </button>\n    <button mat-raised-button title=\"上传\" (click)=\"handleUpload()\">\n      上传\n    </button>\n  </mat-card-actions>\n</mat-card>\n"

/***/ }),

/***/ "./src/app/pages/upload/components/preview-image/preview-image.component.styl":
/*!************************************************************************************!*\
  !*** ./src/app/pages/upload/components/preview-image/preview-image.component.styl ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".preview-image-card {\n  width: 400px;\n  max-width: 400px;\n  margin: 1em;\n}\n/*# sourceMappingURL=src/app/pages/upload/components/preview-image/preview-image.component.css.map */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdXBsb2FkL2NvbXBvbmVudHMvcHJldmlldy1pbWFnZS9zcmMvYXBwL3BhZ2VzL3VwbG9hZC9jb21wb25lbnRzL3ByZXZpZXctaW1hZ2UvcHJldmlldy1pbWFnZS5jb21wb25lbnQuc3R5bCIsInNyYy9hcHAvcGFnZXMvdXBsb2FkL2NvbXBvbmVudHMvcHJldmlldy1pbWFnZS9wcmV2aWV3LWltYWdlLmNvbXBvbmVudC5zdHlsIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBTztFQUNQLGdCQUFXO0VBQ1gsV0FBUTtBQ0NWO0FBQ0Esb0dBQW9HIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdXBsb2FkL2NvbXBvbmVudHMvcHJldmlldy1pbWFnZS9wcmV2aWV3LWltYWdlLmNvbXBvbmVudC5zdHlsIiwic291cmNlc0NvbnRlbnQiOlsiLnByZXZpZXctaW1hZ2UtY2FyZCB7XHJcbiAgd2lkdGg6IDQwMHB4O1xyXG4gIG1heC13aWR0aDogNDAwcHg7XHJcbiAgbWFyZ2luOiAxZW07XHJcbn0iLCIucHJldmlldy1pbWFnZS1jYXJkIHtcbiAgd2lkdGg6IDQwMHB4O1xuICBtYXgtd2lkdGg6IDQwMHB4O1xuICBtYXJnaW46IDFlbTtcbn1cbi8qIyBzb3VyY2VNYXBwaW5nVVJMPXNyYy9hcHAvcGFnZXMvdXBsb2FkL2NvbXBvbmVudHMvcHJldmlldy1pbWFnZS9wcmV2aWV3LWltYWdlLmNvbXBvbmVudC5jc3MubWFwICovIl19 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PreviewImageComponent = /** @class */ (function () {
    function PreviewImageComponent() {
        this.delete = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.zoomIn = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.upload = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    Object.defineProperty(PreviewImageComponent.prototype, "uploadError", {
        get: function () {
            return this.image.success === false;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * 删除
     */
    PreviewImageComponent.prototype.handleDelete = function () {
        this.delete.emit();
    };
    /**
     * 放大
     */
    PreviewImageComponent.prototype.handleZoomIn = function () {
        this.zoomIn.emit();
    };
    /**
     * 上传（单张）图片
     */
    PreviewImageComponent.prototype.handleUpload = function () {
        this.upload.emit();
    };
    PreviewImageComponent.prototype.ngOnInit = function () { };
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
            template: __webpack_require__(/*! ./preview-image.component.html */ "./src/app/pages/upload/components/preview-image/preview-image.component.html"),
            styles: [__webpack_require__(/*! ./preview-image.component.styl */ "./src/app/pages/upload/components/preview-image/preview-image.component.styl")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PreviewImageComponent);
    return PreviewImageComponent;
}());



/***/ }),

/***/ "./src/app/pages/upload/upload.component.html":
/*!****************************************************!*\
  !*** ./src/app/pages/upload/upload.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <p class=\"mat-error\"><em>切勿上传文件名相同的图片</em></p>\r\n  <input\r\n    style=\"display: none;\"\r\n    type=\"file\"\r\n    name=\"file\"\r\n    id=\"upfiles\"\r\n    accept=\"image/*\"\r\n    multiple\r\n    (change)=\"onFileChange($event)\"\r\n    #input\r\n  />\r\n\r\n  <div class=\"d-flex flex-row\">\r\n    <button\r\n      mat-raised-button\r\n      (drag)=\"hadler($event)\"\r\n      (drop)=\"dropEvent($event)\"\r\n      (dragover)=\"hadler($event)\"\r\n      (click)=\"input.click()\"\r\n    >\r\n      点击/拖拽上传({{ previewFiles?.length || '0' }})\r\n    </button>\r\n    <app-sized-box width=\"20\"></app-sized-box>\r\n    <button (click)=\"uploadAll()\" mat-raised-button color=\"primary\">\r\n      全部上传\r\n    </button>\r\n  </div>\r\n  <app-sized-box height=\"20\"></app-sized-box>\r\n\r\n  <ng-container *ngIf=\"previewFiles\">\r\n    <section class=\"preview-images-container\">\r\n      <ng-container *ngFor=\"let file of previewFiles\">\r\n        <app-preview-image\r\n          [image]=\"file\"\r\n          (delete)=\"deletePreviewImage(file)\"\r\n          (zoomIn)=\"displayOriginalImage(file.src)\"\r\n          (upload)=\"upload(file)\"\r\n        ></app-preview-image>\r\n      </ng-container>\r\n    </section>\r\n  </ng-container>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/upload/upload.component.styl":
/*!****************************************************!*\
  !*** ./src/app/pages/upload/upload.component.styl ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  position: absolute;\n  padding: 1rem;\n}\n:host .preview-images-container {\n  display: flex;\n  flex-wrap: wrap;\n}\n/*# sourceMappingURL=src/app/pages/upload/upload.component.css.map */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdXBsb2FkL3NyYy9hcHAvcGFnZXMvdXBsb2FkL3VwbG9hZC5jb21wb25lbnQuc3R5bCIsInNyYy9hcHAvcGFnZXMvdXBsb2FkL3VwbG9hZC5jb21wb25lbnQuc3R5bCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFVO0VBQ1YsYUFBUztBQ0NYO0FEQ0U7RUFDRSxhQUFTO0VBQ1QsZUFBVztBQ0NmO0FBQ0Esb0VBQW9FIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdXBsb2FkL3VwbG9hZC5jb21wb25lbnQuc3R5bCIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcGFkZGluZzogMXJlbTtcclxuXHJcbiAgLnByZXZpZXctaW1hZ2VzLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gIH1cclxufSIsIjpob3N0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBwYWRkaW5nOiAxcmVtO1xufVxuOmhvc3QgLnByZXZpZXctaW1hZ2VzLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cbi8qIyBzb3VyY2VNYXBwaW5nVVJMPXNyYy9hcHAvcGFnZXMvdXBsb2FkL3VwbG9hZC5jb21wb25lbnQuY3NzLm1hcCAqLyJdfQ== */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _upload_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./upload.service */ "./src/app/pages/upload/upload.service.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);





var UploadComponent = /** @class */ (function () {
    function UploadComponent(sanitizer, uploadService) {
        this.sanitizer = sanitizer;
        this.uploadService = uploadService;
        this.previewFiles = [];
    }
    UploadComponent.prototype.ngOnInit = function () { };
    /**
     * * dispose
     */
    UploadComponent.prototype.ngOnDestroy = function () {
        lodash__WEBPACK_IMPORTED_MODULE_4__(this.previewFiles).forEach(function (file) {
            window.URL.revokeObjectURL(file.src);
        });
    };
    UploadComponent.prototype.hadler = function (e) {
        e.preventDefault();
    };
    /**
     * * 拖拽时获取图片
     * @param e
     */
    UploadComponent.prototype.dropEvent = function (e) {
        e.preventDefault();
        this._setFiles(e.dataTransfer.files);
    };
    /**
     * * 点击上传获取图片
     * @param e
     */
    UploadComponent.prototype.onFileChange = function (e) {
        this._setFiles(e.target.files);
    };
    /**
     * * 记录图片
     * @param files
     */
    UploadComponent.prototype._setFiles = function (files) {
        if (files.length <= 0)
            return null;
        var _files = this._createPreviewImages(files);
        // 每次上传，将过滤掉重复项，用[file.name]过滤
        this.previewFiles = lodash__WEBPACK_IMPORTED_MODULE_4__["unionWith"](this.previewFiles, _files, this._equalName);
    };
    /**
     * 过滤掉name相同的图片
     * @param a
     * @param b
     */
    UploadComponent.prototype._equalName = function (a, b) {
        return a.file.name === b.file.name;
    };
    /**
     * 使用 file[] 创建 PreviewImage[]
     * @param files fileList
     */
    UploadComponent.prototype._createPreviewImages = function (files) {
        var _this = this;
        // 避免假数组
        return lodash__WEBPACK_IMPORTED_MODULE_4__["map"](lodash__WEBPACK_IMPORTED_MODULE_4__["toArray"](files), function (file) {
            var src = window.URL.createObjectURL(new Blob([file], {
                type: file.type,
            }));
            return {
                // see also:  https://angular.io/guide/security#xss
                src: _this.sanitizer.bypassSecurityTrustUrl(src),
                file: file,
            };
        });
    };
    /**
     * * 查看原图
     */
    UploadComponent.prototype.displayOriginalImage = function (url) {
        window.open(url.changingThisBreaksApplicationSecurity);
    };
    /**
     * * 删除预览图片
     */
    UploadComponent.prototype.deletePreviewImage = function (file) {
        lodash__WEBPACK_IMPORTED_MODULE_4__["pull"](this.previewFiles, file);
    };
    /**
     * * 点击[全部上传]，上传所有的图片
     * * 上传完毕清理预览图片
     * TODO: 大型图片上传失败，但还是提示上传成功
     */
    UploadComponent.prototype.uploadAll = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.uploadService.uploadAll(this.previewFiles)];
                    case 1:
                        _a.sent();
                        this.clearPreviewImages();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * 单张上传
     * 上传成功删除图片
     * @param image
     */
    UploadComponent.prototype.upload = function (image) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.uploadService.uploadImage(image)];
                    case 1:
                        _a.sent();
                        if (image.success) {
                            lodash__WEBPACK_IMPORTED_MODULE_4__["pull"](this.previewFiles, image);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * * 清理上传成功的图片
     */
    UploadComponent.prototype.clearPreviewImages = function () {
        this.previewFiles = this.previewFiles.filter(function (image) { return !image.success; });
    };
    UploadComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-upload',
            template: __webpack_require__(/*! ./upload.component.html */ "./src/app/pages/upload/upload.component.html"),
            styles: [__webpack_require__(/*! ./upload.component.styl */ "./src/app/pages/upload/upload.component.styl")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"],
            _upload_service__WEBPACK_IMPORTED_MODULE_3__["UploadService"]])
    ], UploadComponent);
    return UploadComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_api_urls__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/api-urls */ "./src/app/shared/api-urls.ts");
/* harmony import */ var _shared_token_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/token.service */ "./src/app/shared/token.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");







var UploadService = /** @class */ (function () {
    function UploadService(http, tokenService) {
        this.http = http;
        this.tokenService = tokenService;
    }
    /**
     * 上传图片组，单张递归上传
     * @param previewImages
     */
    UploadService.prototype.uploadAll = function (previewImages) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var image;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (previewImages.length <= 0) {
                            return [2 /*return*/];
                        }
                        image = previewImages[0];
                        return [4 /*yield*/, this.uploadImage(image)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, this.uploadAll(previewImages.slice(1))];
                }
            });
        });
    };
    /**
     * 上传到图床
     * @param image
     */
    UploadService.prototype.uploadImage = function (image) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var data, file, req, r;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        data = new FormData();
                        file = image.file;
                        data.append('smfile', file);
                        req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', _shared_api_urls__WEBPACK_IMPORTED_MODULE_3__["uploadUrl"], data, {
                            reportProgress: true,
                        });
                        return [4 /*yield*/, this.http
                                .request(req)
                                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function (event) {
                                // 设置进度
                                if (event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpEventType"].UploadProgress) {
                                    var progress = Math.round((100 * event.loaded) / event.total);
                                    image.progress = progress;
                                }
                                else if (event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpEventType"].Response) {
                                    image.progress = 100;
                                }
                            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (event) {
                                // 上传完成返回响应body
                                if (event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpEventType"].Response) {
                                    return event.body;
                                }
                            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["last"])())
                                .toPromise()];
                    case 1:
                        r = _a.sent();
                        image.success = r.success;
                        image.message = r.message;
                        return [2 /*return*/, r];
                }
            });
        });
    };
    UploadService.prototype.handleError = function (error) {
        if (error.error instanceof ErrorEvent) {
            // 发生客户端或网络错误。 相应地处理它。
            console.error('An error occurred:', error.error.message);
        }
        else {
            // 后端返回的响应代码失败。
            // 响应主体可能包含有关出了什么问题的线索，
            console.error("Backend returned code " + error.status + ", " + ("body was: " + error.error));
        }
        // 返回可观察到的并带有面向用户的错误消息
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["throwError"])('Something bad happened; please try again later.');
    };
    UploadService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _shared_token_service__WEBPACK_IMPORTED_MODULE_4__["TokenService"]])
    ], UploadService);
    return UploadService;
}());



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
var smMsUrl = 'https://sm.ms/api/v2';
var smMsString = '/sm-ms/';
var getTokenUrl = smMsString + 'token';
var uploadUrl = smMsString + 'upload';
var uploadHistoryUrl = smMsString + 'upload_history';
var profileUrl = smMsString + 'profile';
var deleteUrl = smMsString + 'delete';


/***/ }),

/***/ "./src/app/shared/components/sized-box/sized-box.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/shared/components/sized-box/sized-box.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [ngStyle]=\"styles\"></div>\r\n"

/***/ }),

/***/ "./src/app/shared/components/sized-box/sized-box.component.styl":
/*!**********************************************************************!*\
  !*** ./src/app/shared/components/sized-box/sized-box.component.styl ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*# sourceMappingURL=src/app/shared/components/sized-box/sized-box.component.css.map */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvc2l6ZWQtYm94L3NpemVkLWJveC5jb21wb25lbnQuc3R5bCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxzRkFBc0YiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9zaXplZC1ib3gvc2l6ZWQtYm94LmNvbXBvbmVudC5zdHlsIn0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SizedBoxComponent = /** @class */ (function () {
    function SizedBoxComponent() {
    }
    SizedBoxComponent.prototype.ngOnInit = function () {
        this.styles = {
            width: this.width + 'px',
            height: this.height + 'px',
        };
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
            template: __webpack_require__(/*! ./sized-box.component.html */ "./src/app/shared/components/sized-box/sized-box.component.html"),
            styles: [__webpack_require__(/*! ./sized-box.component.styl */ "./src/app/shared/components/sized-box/sized-box.component.styl")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SizedBoxComponent);
    return SizedBoxComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ImageSizePipe = /** @class */ (function () {
    function ImageSizePipe() {
        this._base = 1024;
    }
    ImageSizePipe.prototype.transform = function (value, args) {
        if (value < this._base) {
            return value + ' B';
        }
        else {
            return (value / 1024).toFixed(2) + ' KB';
        }
    };
    ImageSizePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'imageSize',
        })
    ], ImageSizePipe);
    return ImageSizePipe;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _components_sized_box_sized_box_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/sized-box/sized-box.component */ "./src/app/shared/components/sized-box/sized-box.component.ts");
/* harmony import */ var _pipes_image_size_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pipes/image-size.pipe */ "./src/app/shared/pipes/image-size.pipe.ts");





var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_components_sized_box_sized_box_component__WEBPACK_IMPORTED_MODULE_3__["SizedBoxComponent"], _pipes_image_size_pipe__WEBPACK_IMPORTED_MODULE_4__["ImageSizePipe"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
            ],
            exports: [_components_sized_box_sized_box_component__WEBPACK_IMPORTED_MODULE_3__["SizedBoxComponent"], _pipes_image_size_pipe__WEBPACK_IMPORTED_MODULE_4__["ImageSizePipe"]]
        })
    ], SharedModule);
    return SharedModule;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var localforage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! localforage */ "./node_modules/localforage/dist/localforage.js");
/* harmony import */ var localforage__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(localforage__WEBPACK_IMPORTED_MODULE_2__);



var TokenService = /** @class */ (function () {
    function TokenService() {
        var _this = this;
        this._tokenKey = 'login_token';
        this._token = '';
        this.token.then(function (token) {
            _this._token = token || '';
        });
    }
    TokenService.prototype.getAuthorizationToken = function () {
        return this._token;
    };
    Object.defineProperty(TokenService.prototype, "token", {
        get: function () {
            return this.getToken();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * * 把token字符串保存起来
     * @param token
     */
    TokenService.prototype.setToken = function (token) {
        return localforage__WEBPACK_IMPORTED_MODULE_2__["setItem"](this._tokenKey, token);
    };
    /**
     * 获取保存的token
     */
    TokenService.prototype.getToken = function () {
        return localforage__WEBPACK_IMPORTED_MODULE_2__["getItem"](this._tokenKey);
    };
    /**
     * * 清理掉token
     */
    TokenService.prototype.removeToken = function () {
        return localforage__WEBPACK_IMPORTED_MODULE_2__["removeItem"](this._tokenKey);
    };
    TokenService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TokenService);
    return TokenService;
}());



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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


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
//# sourceMappingURL=main.js.map