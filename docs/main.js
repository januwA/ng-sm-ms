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














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _pages_home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"], _pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_8__["NotFoundComponent"], _pages_upload_upload_component__WEBPACK_IMPORTED_MODULE_10__["UploadComponent"], _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_11__["DashboardComponent"]],
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
            var _a, _b, _c;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _b = (_a = console).log;
                        return [4 /*yield*/, this.tokenService.token];
                    case 1:
                        _b.apply(_a, [_d.sent()]);
                        _c = this.authService.isLoggedIn;
                        if (_c) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.tokenService.token];
                    case 2:
                        _c = (_d.sent());
                        _d.label = 3;
                    case 3:
                        if (_c) {
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
            var r;
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
                            this.tokenService.setToken(r.data.token);
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
            var _a, _b, _c, _d, _e, _f;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_g) {
                switch (_g.label) {
                    case 0:
                        _b = (_a = this.http).post;
                        _c = [_shared_api_urls__WEBPACK_IMPORTED_MODULE_6__["profileUrl"], null];
                        _d = {};
                        _e = {};
                        _f = "";
                        return [4 /*yield*/, this.tokenService.token];
                    case 1: return [2 /*return*/, _b.apply(_a, _c.concat([(_d.headers = (_e.Authorization = _f + (_g.sent()),
                                _e),
                                _d.observe = 'response',
                                _d)]))
                            .toPromise()];
                }
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

module.exports = "<form class=\"login-form\" [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\">\r\n  <input type=\"text\" formControlName=\"username\" placeholder=\"账号\" required />\r\n  <input\r\n    type=\"password\"\r\n    formControlName=\"password\"\r\n    placeholder=\"密码\"\r\n    required\r\n  />\r\n  <a class=\"register-button\" href=\"https://sm.ms/register\" target=\"_blank\">\r\n    没有账号?\r\n  </a>\r\n  <button type=\"submit\" [disabled]=\"isLoginButtondisabled\">\r\n    登陆\r\n  </button>\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/auth/login/login.component.styl":
/*!*************************************************!*\
  !*** ./src/app/auth/login/login.component.styl ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  height: 100vh;\n  display: grid;\n  place-items: center;\n}\n:host .login-form {\n  display: grid;\n  grid-template-columns: repeat(1, 1fr);\n  grid-gap: 8px;\n}\n:host .register-button {\n  text-align: end;\n  font-size: 0.8em;\n}\n/*# sourceMappingURL=src/app/auth/login/login.component.css.map */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9sb2dpbi9zcmMvYXBwL2F1dGgvbG9naW4vbG9naW4uY29tcG9uZW50LnN0eWwiLCJzcmMvYXBwL2F1dGgvbG9naW4vbG9naW4uY29tcG9uZW50LnN0eWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFRO0VBQ1IsYUFBUztFQUNULG1CQUFhO0FDQ2Y7QURDRTtFQUNFLGFBQVM7RUFDVCxxQ0FBb0M7RUFDcEMsYUFBVTtBQ0NkO0FERUU7RUFDRSxlQUFZO0VBQ1osZ0JBQVc7QUNBZjtBQUNBLGlFQUFpRSIsImZpbGUiOiJzcmMvYXBwL2F1dGgvbG9naW4vbG9naW4uY29tcG9uZW50LnN0eWwiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gIC5sb2dpbi1mb3JtIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxLCAxZnIpO1xyXG4gICAgZ3JpZC1nYXA6IDhweDtcclxuICB9XHJcblxyXG4gIC5yZWdpc3Rlci1idXR0b24ge1xyXG4gICAgdGV4dC1hbGlnbjogZW5kO1xyXG4gICAgZm9udC1zaXplOiAwLjhlbTtcclxuICB9XHJcbn0iLCI6aG9zdCB7XG4gIGhlaWdodDogMTAwdmg7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XG59XG46aG9zdCAubG9naW4tZm9ybSB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEsIDFmcik7XG4gIGdyaWQtZ2FwOiA4cHg7XG59XG46aG9zdCAucmVnaXN0ZXItYnV0dG9uIHtcbiAgdGV4dC1hbGlnbjogZW5kO1xuICBmb250LXNpemU6IDAuOGVtO1xufVxuLyojIHNvdXJjZU1hcHBpbmdVUkw9c3JjL2FwcC9hdXRoL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MubWFwICovIl19 */"

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





var CoreModule = /** @class */ (function () {
    function CoreModule() {
    }
    CoreModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]],
            exports: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]],
        })
    ], CoreModule);
    return CoreModule;
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
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTabsModule"],
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

module.exports = "<section>\r\n  <h2>用户资料</h2>\r\n  <ng-container\r\n    *ngIf=\"userInfo; then userinfoView; else loading\"\r\n  ></ng-container>\r\n  <ng-template #userinfoView>\r\n    <section class=\"user-info\" *ngIf=\"userInfo\">\r\n      <div class=\"title\">\r\n        <div class=\"mat-headline\">\r\n          {{ userInfo.username }}\r\n        </div>\r\n        <app-sized-box width=\"15\"></app-sized-box>\r\n        <div class=\"mat-subheading-1\">\r\n          {{ userInfo.email }}\r\n        </div>\r\n      </div>\r\n      <div class=\"disk\">\r\n        <div>\r\n          <div>总磁盘: {{ userInfo.disk_limit }}</div>\r\n          <div>已使用: {{ userInfo.disk_usage }}</div>\r\n        </div>\r\n        <app-sized-box width='10'></app-sized-box>\r\n        <mat-progress-spinner mode=\"determinate\" [value]=\"diskUsageValue\">\r\n        </mat-progress-spinner>\r\n      </div>\r\n    </section>\r\n  </ng-template>\r\n</section>\r\n<app-sized-box height=\"20\"></app-sized-box>\r\n<section class=\"images-grid\">\r\n  <h2>Pictures</h2>\r\n  <ng-container\r\n    *ngIf=\"images && images.length; then thenTemp; else loading\"\r\n  ></ng-container>\r\n\r\n  <ng-template #thenTemp>\r\n    <ng-container *ngFor=\"let image of images.reverse()\">\r\n      <div class=\"image-info\">\r\n        <mat-icon\r\n          class=\"del\"\r\n          title=\"注意：这将永久删除资源\"\r\n          (click)=\"delete(image.hash)\"\r\n          >delete</mat-icon\r\n        >\r\n        <img [src]=\"image.url\" (click)=\"open(image.url)\" />\r\n\r\n        <div class=\"info\">\r\n          <p>{{ image.filename }}</p>\r\n          <p>{{ image.size | imageSize }}</p>\r\n\r\n          <button\r\n            mat-button\r\n            class=\"image-url-button\"\r\n            [attr.data-clipboard-text]=\"image.url\"\r\n            title=\"点击复制\"\r\n          >\r\n            {{ image.url }}\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </ng-container>\r\n  </ng-template>\r\n</section>\r\n\r\n<ng-template #loading>\r\n  <mat-spinner></mat-spinner>\r\n</ng-template>\r\n"

/***/ }),

/***/ "./src/app/pages/home/home.component.styl":
/*!************************************************!*\
  !*** ./src/app/pages/home/home.component.styl ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  position: absolute;\n  padding: 1rem;\n}\n.user-info .title {\n  display: flex;\n  flex-flow: row;\n  justify-content: flex-start;\n  align-items: baseline;\n}\n.user-info .disk {\n  display: flex;\n  flex-direction: row;\n}\n.images-grid .image-info {\n  position: relative;\n  border-radius: 6px;\n  margin: 1em;\n  display: inline-flex;\n  flex-direction: column;\n  box-shadow: 0px 1px 3px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12);\n}\n.images-grid .image-info img {\n  max-width: 100%;\n  align-self: center;\n}\n.images-grid .image-info .info {\n  padding: 16px;\n}\n.images-grid .image-info .del {\n  position: absolute;\n  right: 0;\n  top: 0;\n  color: #f00;\n  padding: 8px;\n  background-color: rgba(0,0,0,0.2);\n}\n/*# sourceMappingURL=src/app/pages/home/home.component.css.map */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS9zcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS5jb21wb25lbnQuc3R5bCIsInNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLmNvbXBvbmVudC5zdHlsIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQVU7RUFDVixhQUFTO0FDQ1g7QURHRTtFQUNFLGFBQVM7RUFDVCxjQUFXO0VBQ1gsMkJBQWlCO0VBQ2pCLHFCQUFhO0FDRGpCO0FESUU7RUFDRSxhQUFTO0VBQ1QsbUJBQWdCO0FDRnBCO0FET0U7RUFDRSxrQkFBVTtFQUNWLGtCQUFlO0VBQ2YsV0FBUTtFQUNSLG9CQUFTO0VBQ1Qsc0JBQWdCO0VBQ2hCLGdIQUE4QztBQ0xsRDtBRE9JO0VBRUUsZUFBVztFQUNYLGtCQUFZO0FDTmxCO0FEU0k7RUFDRSxhQUFTO0FDUGY7QURVSTtFQUNFLGtCQUFVO0VBQ1YsUUFBTztFQUNQLE1BQUs7RUFDTCxXQUFPO0VBQ1AsWUFBUztFQUNULGlDQUFtQztBQ1J6QztBQUNBLGdFQUFnRSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS5jb21wb25lbnQuc3R5bCIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcGFkZGluZzogMXJlbTtcclxufVxyXG5cclxuLnVzZXItaW5mbyB7XHJcbiAgLnRpdGxlIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWZsb3c6IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcclxuICB9XHJcblxyXG4gIC5kaXNrIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIH1cclxufVxyXG5cclxuLmltYWdlcy1ncmlkIHtcclxuICAuaW1hZ2UtaW5mbyB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICBtYXJnaW46IDFlbTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGJveC1zaGFkb3c6IDBweCAxcHggM3B4IDBweCByZ2JhKDAsIDAsIDAsIDAuMiksIDBweCAxcHggMXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwcHggMnB4IDFweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XHJcblxyXG4gICAgaW1nIHtcclxuICAgICAgLy8g6YG/5YWN5aSn5Z6L5Zu+54mHXHJcbiAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgfVxyXG5cclxuICAgIC5pbmZvIHtcclxuICAgICAgcGFkZGluZzogMTZweDtcclxuICAgIH1cclxuXHJcbiAgICAuZGVsIHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICByaWdodDogMDtcclxuICAgICAgdG9wOiAwO1xyXG4gICAgICBjb2xvcjogcmVkO1xyXG4gICAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICAgIH1cclxuICB9XHJcbn0iLCI6aG9zdCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcGFkZGluZzogMXJlbTtcbn1cbi51c2VyLWluZm8gLnRpdGxlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiByb3c7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xufVxuLnVzZXItaW5mbyAuZGlzayB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG59XG4uaW1hZ2VzLWdyaWQgLmltYWdlLWluZm8ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgbWFyZ2luOiAxZW07XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBib3gtc2hhZG93OiAwcHggMXB4IDNweCAwcHggcmdiYSgwLDAsMCwwLjIpLCAwcHggMXB4IDFweCAwcHggcmdiYSgwLDAsMCwwLjE0KSwgMHB4IDJweCAxcHggLTFweCByZ2JhKDAsMCwwLDAuMTIpO1xufVxuLmltYWdlcy1ncmlkIC5pbWFnZS1pbmZvIGltZyB7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xufVxuLmltYWdlcy1ncmlkIC5pbWFnZS1pbmZvIC5pbmZvIHtcbiAgcGFkZGluZzogMTZweDtcbn1cbi5pbWFnZXMtZ3JpZCAuaW1hZ2UtaW5mbyAuZGVsIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgdG9wOiAwO1xuICBjb2xvcjogI2YwMDtcbiAgcGFkZGluZzogOHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuMik7XG59XG4vKiMgc291cmNlTWFwcGluZ1VSTD1zcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzLm1hcCAqLyJdfQ== */"

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
            var _a, _b;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_c) {
                switch (_c.label) {
                    case 0:
                        this.userInfoLoading = true;
                        _a = this;
                        return [4 /*yield*/, this.homeService.getUserInfo()];
                    case 1:
                        _a.userInfo = _c.sent();
                        this.userInfoLoading = false;
                        this.imagesLoading = true;
                        _b = this;
                        return [4 /*yield*/, this.homeService.images()];
                    case 2:
                        _b.images = _c.sent();
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
/* harmony import */ var src_app_shared_token_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/token.service */ "./src/app/shared/token.service.ts");
/* harmony import */ var src_app_shared_api_urls__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/api-urls */ "./src/app/shared/api-urls.ts");






var HomeService = /** @class */ (function () {
    function HomeService(http, tokenService, authService) {
        this.http = http;
        this.tokenService = tokenService;
        this.authService = authService;
    }
    HomeService.prototype.images = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var r, _a, _b, _c, _d, _e, _f;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_g) {
                switch (_g.label) {
                    case 0:
                        _b = (_a = this.http).post;
                        _c = [src_app_shared_api_urls__WEBPACK_IMPORTED_MODULE_5__["uploadHistoryUrl"], null];
                        _d = {};
                        _e = {};
                        _f = "";
                        return [4 /*yield*/, this.tokenService.token];
                    case 1: return [4 /*yield*/, _b.apply(_a, _c.concat([(_d.headers = (_e.Authorization = _f + (_g.sent()),
                                _e),
                                _d.observe = 'response',
                                _d)]))
                            .toPromise()];
                    case 2:
                        r = _g.sent();
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
                return [2 /*return*/, this.http.get(src_app_shared_api_urls__WEBPACK_IMPORTED_MODULE_5__["deleteUrl"] + ("/" + id)).toPromise()];
            });
        });
    };
    HomeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            src_app_shared_token_service__WEBPACK_IMPORTED_MODULE_4__["TokenService"],
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

/***/ "./src/app/pages/upload/upload.component.html":
/*!****************************************************!*\
  !*** ./src/app/pages/upload/upload.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <input type=\"file\" name=\"file\" id=\"\" accept=\"image/*\" multiple (change)=\"onFileChange($event)\" />\r\n\r\n    <button (click)=\"uploadAll()\">全部上传</button>\r\n\r\n\r\n    <div class=\"upload-wrap\" style=\"width:200px;height:200px;background-color:#999;text-align:center;\" (drag)=\"hadler($event)\" (drop)=\"dropEvent($event)\" (dragover)=\"hadler($event)\">\r\n        往里面进行拖拽\r\n    </div>\r\n    <app-sized-box height=\"20\"></app-sized-box>\r\n\r\n    <ng-container *ngIf=\"files\">\r\n        <ng-container *ngFor=\"let file of files\">\r\n            <div class=\"preview-item\">\r\n                <div class=\"image\">\r\n                    <img [src]=\"file.src\" />\r\n                </div>\r\n                <div class=\"info\">\r\n                    <div class=\"mat-body-1\">{{ file.file.name }}</div>\r\n                    <div class=\"mat-caption\">{{ file.file.size | imageSize }}</div>\r\n                </div>\r\n                <div class=\"icons\">\r\n                    <mat-icon title=\"删除\" (click)=\"deletePreviewImage(file)\">delete_forever</mat-icon>\r\n                    <mat-icon title=\"查看原图\" (click)=\"displayOriginalImage(file.src)\">zoom_in</mat-icon>\r\n                </div>\r\n            </div>\r\n        </ng-container>\r\n    </ng-container>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/upload/upload.component.styl":
/*!****************************************************!*\
  !*** ./src/app/pages/upload/upload.component.styl ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  position: absolute;\n  padding: 1rem;\n}\n:host .preview-item {\n  display: inline-grid;\n  grid-template-columns: repeat(1, 1fr);\n  grid-row-gap: 8px;\n  width: 220px;\n  margin: 1em;\n  padding-bottom: 8px;\n  box-shadow: 0px 1px 3px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12);\n}\n:host .preview-item .image {\n  width: 100%;\n  height: 160px;\n  display: flex;\n  justify-content: center;\n}\n:host .preview-item .image img {\n  align-self: center;\n  width: auto;\n  height: auto;\n  max-width: 100%;\n  max-height: 100%;\n  vertical-align: middle;\n  border-style: none;\n}\n:host .preview-item .info {\n  display: grid;\n  grid-row-gap: 4px;\n  padding: 0 8px;\n}\n:host .preview-item .icons {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, 24px);\n  grid-column-gap: 4px;\n  padding: 0 8px;\n}\n/*# sourceMappingURL=src/app/pages/upload/upload.component.css.map */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdXBsb2FkL3NyYy9hcHAvcGFnZXMvdXBsb2FkL3VwbG9hZC5jb21wb25lbnQuc3R5bCIsInNyYy9hcHAvcGFnZXMvdXBsb2FkL3VwbG9hZC5jb21wb25lbnQuc3R5bCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFVO0VBQ1YsYUFBUztBQ0NYO0FEQ0U7RUFDRSxvQkFBUztFQUNULHFDQUFvQztFQUNwQyxpQkFBYztFQUNkLFlBQU87RUFDUCxXQUFRO0VBQ1IsbUJBQWdCO0VBQ2hCLGdIQUE4QztBQ0NsRDtBRENJO0VBQ0UsV0FBTztFQUNQLGFBQVE7RUFDUixhQUFTO0VBQ1QsdUJBQWlCO0FDQ3ZCO0FEQ007RUFDRSxrQkFBWTtFQUNaLFdBQU87RUFDUCxZQUFRO0VBQ1IsZUFBVztFQUNYLGdCQUFZO0VBQ1osc0JBQWdCO0VBQ2hCLGtCQUFjO0FDQ3RCO0FER0k7RUFDRSxhQUFTO0VBQ1QsaUJBQWM7RUFDZCxjQUFTO0FDRGY7QURJSTtFQUNFLGFBQVM7RUFDVCw4Q0FBNkM7RUFDN0Msb0JBQWlCO0VBQ2pCLGNBQVM7QUNGZjtBQUNBLG9FQUFvRSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3VwbG9hZC91cGxvYWQuY29tcG9uZW50LnN0eWwiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHBhZGRpbmc6IDFyZW07XHJcblxyXG4gIC5wcmV2aWV3LWl0ZW0ge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxLCAxZnIpO1xyXG4gICAgZ3JpZC1yb3ctZ2FwOiA4cHg7XHJcbiAgICB3aWR0aDogMjIwcHg7XHJcbiAgICBtYXJnaW46IDFlbTtcclxuICAgIHBhZGRpbmctYm90dG9tOiA4cHg7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMXB4IDNweCAwcHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwcHggMXB4IDFweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMHB4IDJweCAxcHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xyXG5cclxuICAgIC5pbWFnZSB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IDE2MHB4O1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgICAgIGltZyB7XHJcbiAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgbWF4LWhlaWdodDogMTAwJTtcclxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICAgIGJvcmRlci1zdHlsZTogbm9uZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5pbmZvIHtcclxuICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgZ3JpZC1yb3ctZ2FwOiA0cHg7XHJcbiAgICAgIHBhZGRpbmc6IDAgOHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5pY29ucyB7XHJcbiAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgMjRweCk7XHJcbiAgICAgIGdyaWQtY29sdW1uLWdhcDogNHB4O1xyXG4gICAgICBwYWRkaW5nOiAwIDhweDtcclxuICAgIH1cclxuICB9XHJcbn0iLCI6aG9zdCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcGFkZGluZzogMXJlbTtcbn1cbjpob3N0IC5wcmV2aWV3LWl0ZW0ge1xuICBkaXNwbGF5OiBpbmxpbmUtZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMSwgMWZyKTtcbiAgZ3JpZC1yb3ctZ2FwOiA4cHg7XG4gIHdpZHRoOiAyMjBweDtcbiAgbWFyZ2luOiAxZW07XG4gIHBhZGRpbmctYm90dG9tOiA4cHg7XG4gIGJveC1zaGFkb3c6IDBweCAxcHggM3B4IDBweCByZ2JhKDAsMCwwLDAuMiksIDBweCAxcHggMXB4IDBweCByZ2JhKDAsMCwwLDAuMTQpLCAwcHggMnB4IDFweCAtMXB4IHJnYmEoMCwwLDAsMC4xMik7XG59XG46aG9zdCAucHJldmlldy1pdGVtIC5pbWFnZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDE2MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbjpob3N0IC5wcmV2aWV3LWl0ZW0gLmltYWdlIGltZyB7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgd2lkdGg6IGF1dG87XG4gIGhlaWdodDogYXV0bztcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBtYXgtaGVpZ2h0OiAxMDAlO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBib3JkZXItc3R5bGU6IG5vbmU7XG59XG46aG9zdCAucHJldmlldy1pdGVtIC5pbmZvIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC1yb3ctZ2FwOiA0cHg7XG4gIHBhZGRpbmc6IDAgOHB4O1xufVxuOmhvc3QgLnByZXZpZXctaXRlbSAuaWNvbnMge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIDI0cHgpO1xuICBncmlkLWNvbHVtbi1nYXA6IDRweDtcbiAgcGFkZGluZzogMCA4cHg7XG59XG4vKiMgc291cmNlTWFwcGluZ1VSTD1zcmMvYXBwL3BhZ2VzL3VwbG9hZC91cGxvYWQuY29tcG9uZW50LmNzcy5tYXAgKi8iXX0= */"

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
    }
    UploadComponent.prototype.ngOnInit = function () { };
    UploadComponent.prototype.ngOnDestroy = function () {
        if (this.files) {
            lodash__WEBPACK_IMPORTED_MODULE_4__(this.files).forEach(function (file) {
                window.URL.revokeObjectURL(file.src);
            });
        }
    };
    UploadComponent.prototype.hadler = function (e) {
        e.preventDefault();
    };
    UploadComponent.prototype.dropEvent = function (e) {
        var _this = this;
        var _a;
        e.preventDefault();
        var files = []; //e.target.files 返回的值为空，换一种方式来获取File
        [].forEach.call(e.dataTransfer.files, function (file) {
            files.push(file);
        }, false);
        var _files = Array.from(files);
        _files = _files.map(function (file) {
            var src = window.URL.createObjectURL(new Blob([file], {
                type: file.type,
            }));
            return {
                // see also:  https://angular.io/guide/security#xss
                src: _this.sanitizer.bypassSecurityTrustUrl(src),
                file: file,
            };
        });
        if (this.files) {
            (_a = this.files).push.apply(_a, _files);
        }
        else {
            this.files = _files;
        }
        this.uploadAll();
    };
    UploadComponent.prototype.onFileChange = function (e) {
        var _this = this;
        var _a;
        if (0 > e.target.files)
            return null;
        var _files = Array.from(e.target.files);
        _files = _files.map(function (file) {
            var src = window.URL.createObjectURL(new Blob([file], {
                type: file.type,
            }));
            return {
                // see also:  https://angular.io/guide/security#xss
                src: _this.sanitizer.bypassSecurityTrustUrl(src),
                file: file,
            };
        });
        if (this.files) {
            (_a = this.files).push.apply(_a, _files);
        }
        else {
            this.files = _files;
        }
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
        this.files = this.files.filter(function (f) { return f !== file; });
    };
    /**
     * * 上传所有的图片
     */
    UploadComponent.prototype.uploadAll = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.uploadService.upload(this.files.map(function (f) { return f.file; }))];
                    case 1:
                        _a.sent();
                        alert('全部已上传...');
                        return [2 /*return*/];
                }
            });
        });
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





var UploadService = /** @class */ (function () {
    function UploadService(http, tokenService) {
        this.http = http;
        this.tokenService = tokenService;
    }
    /**
     * 上传图片组，单张递归上传
     * @param files
     */
    UploadService.prototype.upload = function (files) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var data, file, r, _a, _b, _c, _d, _e, _f, s;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_g) {
                switch (_g.label) {
                    case 0:
                        if (files.length === 0) {
                            return [2 /*return*/, true];
                        }
                        data = new FormData();
                        file = files[0];
                        data.append('smfile', file);
                        _b = (_a = this.http).post;
                        _c = [_shared_api_urls__WEBPACK_IMPORTED_MODULE_3__["uploadUrl"], data];
                        _d = {};
                        _e = {};
                        _f = "";
                        return [4 /*yield*/, this.tokenService.token];
                    case 1: return [4 /*yield*/, _b.apply(_a, _c.concat([(_d.headers = (_e.Authorization = _f + (_g.sent()),
                                _e),
                                _d)]))
                            .toPromise()];
                    case 2:
                        r = _g.sent();
                        if (!r.success) {
                            s = "\n      " + file.name + "\n      message: " + r.message + "\n      ";
                            alert(s);
                        }
                        return [2 /*return*/, this.upload(files.slice(1))];
                }
            });
        });
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
/*! exports provided: baseUrl, getTokenUrl, uploadUrl, uploadHistoryUrl, profileUrl, deleteUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "baseUrl", function() { return baseUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTokenUrl", function() { return getTokenUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uploadUrl", function() { return uploadUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uploadHistoryUrl", function() { return uploadHistoryUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "profileUrl", function() { return profileUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteUrl", function() { return deleteUrl; });
var baseUrl = 'https://sm.ms/api/v2';
var getTokenUrl = baseUrl + '/token';
var uploadUrl = baseUrl + '/upload';
var uploadHistoryUrl = baseUrl + '/upload_history';
var profileUrl = baseUrl + '/profile';
var deleteUrl = baseUrl + '/delete';


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
        this._tokenKey = 'login_token';
    }
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