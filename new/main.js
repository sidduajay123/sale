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

/***/ "./src/app/Service/after-login.service.ts":
/*!************************************************!*\
  !*** ./src/app/Service/after-login.service.ts ***!
  \************************************************/
/*! exports provided: AfterLoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AfterLoginService", function() { return AfterLoginService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _token_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./token.service */ "./src/app/Service/token.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AfterLoginService = /** @class */ (function () {
    function AfterLoginService(Token) {
        this.Token = Token;
    }
    AfterLoginService.prototype.canActivate = function (route, state) {
        return this.Token.loggedIn();
    };
    AfterLoginService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_token_service__WEBPACK_IMPORTED_MODULE_1__["TokenService"]])
    ], AfterLoginService);
    return AfterLoginService;
}());



/***/ }),

/***/ "./src/app/Service/alert.service.ts":
/*!******************************************!*\
  !*** ./src/app/Service/alert.service.ts ***!
  \******************************************/
/*! exports provided: AlertService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return AlertService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AlertService = /** @class */ (function () {
    function AlertService() {
        this.alerts = [];
    }
    AlertService.prototype.add = function (message, debug) {
        this.alerts.push({ message: message, debug: debug });
    };
    AlertService.prototype.remove = function (alert) {
        this.alerts.splice(this.alerts.indexOf(alert), 1);
    };
    AlertService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        })
    ], AlertService);
    return AlertService;
}());



/***/ }),

/***/ "./src/app/Service/auth.service.ts":
/*!*****************************************!*\
  !*** ./src/app/Service/auth.service.ts ***!
  \*****************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _token_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./token.service */ "./src/app/Service/token.service.ts");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user */ "./src/app/user.ts");
/* harmony import */ var _azure_msal_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @azure/msal-angular */ "./node_modules/@azure/msal-angular/dist/index.js");
/* harmony import */ var _alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./alert.service */ "./src/app/Service/alert.service.ts");
/* harmony import */ var src_oauth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/oauth */ "./src/oauth.ts");
/* harmony import */ var _microsoft_microsoft_graph_client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @microsoft/microsoft-graph-client */ "./node_modules/@microsoft/microsoft-graph-client/lib/src/index.js");
/* harmony import */ var _microsoft_microsoft_graph_client__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_microsoft_microsoft_graph_client__WEBPACK_IMPORTED_MODULE_7__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
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
};








var AuthService = /** @class */ (function () {
    function AuthService(token, msalService, alertsService) {
        var _this = this;
        this.token = token;
        this.msalService = msalService;
        this.alertsService = alertsService;
        /* Backend authentication  */
        this.loggedIn = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this.token.loggedIn());
        this.authStatus = this.loggedIn.asObservable();
        this.authenticated = this.msalService.getUser() != null;
        this.getUser().then(function (user) { _this.user = user; });
    }
    // Prompt the user to sign in and
    // grant consent to the requested permission scopes
    AuthService.prototype.signIn = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result, _a;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.msalService.loginPopup(src_oauth__WEBPACK_IMPORTED_MODULE_6__["OAuthSettings"].scopes)
                            .catch(function (reason) {
                            _this.alertsService.add('Login failed', JSON.stringify(reason, null, 2));
                        })];
                    case 1:
                        result = _b.sent();
                        if (!result) return [3 /*break*/, 3];
                        this.authenticated = true;
                        _a = this;
                        return [4 /*yield*/, this.getUser()];
                    case 2:
                        _a.user = _b.sent();
                        _b.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    // Sign out
    AuthService.prototype.signOut = function () {
        this.msalService.logout();
        this.user = null;
        this.authenticated = false;
    };
    // Silently request an access token
    AuthService.prototype.getAccessToken = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.msalService.acquireTokenSilent(src_oauth__WEBPACK_IMPORTED_MODULE_6__["OAuthSettings"].scopes)
                            .catch(function (reason) {
                            _this.alertsService.add('Get token failed', JSON.stringify(reason, null, 2));
                        })];
                    case 1:
                        result = _a.sent();
                        /* outlook = new BehaviorSubject<boolean>(true);
                        outLogin = this.outlook.as */
                        // Temporary to display token in an error box
                        // if (result) this.alertsService.add('Token acquired', result);
                        return [2 /*return*/, result];
                }
            });
        });
    };
    AuthService.prototype.getUser = function () {
        return __awaiter(this, void 0, void 0, function () {
            var graphClient, graphUser, user;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.authenticated)
                            return [2 /*return*/, null];
                        graphClient = _microsoft_microsoft_graph_client__WEBPACK_IMPORTED_MODULE_7__["Client"].init({
                            // Initialize the Graph client with an auth
                            // provider that requests the token from the
                            // auth service
                            authProvider: function (done) { return __awaiter(_this, void 0, void 0, function () {
                                var token;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, this.getAccessToken()
                                                .catch(function (reason) {
                                                done(reason, null);
                                            })];
                                        case 1:
                                            token = _a.sent();
                                            if (token) {
                                                done(null, token);
                                            }
                                            else {
                                                done("Could not get an access token", null);
                                            }
                                            return [2 /*return*/];
                                    }
                                });
                            }); }
                        });
                        return [4 /*yield*/, graphClient.api('/me').get()];
                    case 1:
                        graphUser = _a.sent();
                        user = new _user__WEBPACK_IMPORTED_MODULE_3__["User"]();
                        user.displayName = graphUser.displayName;
                        // Prefer the mail property, but fall back to userPrincipalName
                        user.email = graphUser.mail || graphUser.userPrincipalName;
                        return [2 /*return*/, user];
                }
            });
        });
    };
    AuthService.prototype.getMails = function () {
        return __awaiter(this, void 0, void 0, function () {
            var graphClient, graphUser;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.authenticated)
                            return [2 /*return*/, null];
                        graphClient = _microsoft_microsoft_graph_client__WEBPACK_IMPORTED_MODULE_7__["Client"].init({
                            // Initialize the Graph client with an auth
                            // provider that requests the token from the
                            // auth service
                            authProvider: function (done) { return __awaiter(_this, void 0, void 0, function () {
                                var token;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, this.getAccessToken()
                                                .catch(function (reason) {
                                                done(reason, null);
                                            })];
                                        case 1:
                                            token = _a.sent();
                                            if (token) {
                                                done(null, token);
                                            }
                                            else {
                                                done("Could not get an access token", null);
                                            }
                                            return [2 /*return*/];
                                    }
                                });
                            }); }
                        });
                        return [4 /*yield*/, graphClient.api('/me/mailFolders/inbox/messages').get()];
                    case 1:
                        graphUser = _a.sent();
                        return [2 /*return*/, graphUser];
                }
            });
        });
    };
    AuthService.prototype.getviewMails = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var graphClient, graphUser;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.authenticated)
                            return [2 /*return*/, null];
                        graphClient = _microsoft_microsoft_graph_client__WEBPACK_IMPORTED_MODULE_7__["Client"].init({
                            // Initialize the Graph client with an auth
                            // provider that requests the token from the
                            // auth service
                            authProvider: function (done) { return __awaiter(_this, void 0, void 0, function () {
                                var token;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, this.getAccessToken()
                                                .catch(function (reason) {
                                                done(reason, null);
                                            })];
                                        case 1:
                                            token = _a.sent();
                                            if (token) {
                                                done(null, token);
                                            }
                                            else {
                                                done("Could not get an access token", null);
                                            }
                                            return [2 /*return*/];
                                    }
                                });
                            }); }
                        });
                        return [4 /*yield*/, graphClient.api("/me/mailFolders/inbox/messages/" + id.id).get()];
                    case 1:
                        graphUser = _a.sent();
                        return [2 /*return*/, graphUser];
                }
            });
        });
    };
    AuthService.prototype.changeAuthStatus = function (value) {
        this.loggedIn.next(value);
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_token_service__WEBPACK_IMPORTED_MODULE_2__["TokenService"],
            _azure_msal_angular__WEBPACK_IMPORTED_MODULE_4__["MsalService"],
            _alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/Service/before-login.service.ts":
/*!*************************************************!*\
  !*** ./src/app/Service/before-login.service.ts ***!
  \*************************************************/
/*! exports provided: BeforeLoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BeforeLoginService", function() { return BeforeLoginService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _token_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./token.service */ "./src/app/Service/token.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BeforeLoginService = /** @class */ (function () {
    function BeforeLoginService(Token) {
        this.Token = Token;
    }
    BeforeLoginService.prototype.canActivate = function (route, state) {
        return !this.Token.loggedIn();
    };
    BeforeLoginService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_token_service__WEBPACK_IMPORTED_MODULE_1__["TokenService"]])
    ], BeforeLoginService);
    return BeforeLoginService;
}());



/***/ }),

/***/ "./src/app/Service/jarwis.service.ts":
/*!*******************************************!*\
  !*** ./src/app/Service/jarwis.service.ts ***!
  \*******************************************/
/*! exports provided: JarwisService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JarwisService", function() { return JarwisService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var JarwisService = /** @class */ (function () {
    function JarwisService(http) {
        var _this = this;
        this.http = http;
        this.data = null;
        this.baseurl = 'http://localhost:81/sale/back/api/';
        this.userdata = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this.gbdata = this.userdata.asObservable();
        this.userdata;
        this.http.get(this.baseurl + "userDetails").subscribe(function (data) { return _this.userData(data); });
    }
    JarwisService.prototype.signup = function (data) {
        return this.http.post(this.baseurl + "userRegister", data);
    };
    JarwisService.prototype.login = function (data) {
        return this.http.post(this.baseurl + "userLogin", data);
    };
    JarwisService.prototype.changePassword = function (data) {
        return this.http.post(this.baseurl + "changePassword", data);
    };
    JarwisService.prototype.logout = function () {
        return this.http.get(this.baseurl + "logout");
    };
    JarwisService.prototype.user = function () {
        var _this = this;
        this.http.get(this.baseurl + "userDetails").subscribe(function (data) { return _this.userData(data); });
    };
    JarwisService.prototype.userProfileData = function () {
        return this.http.get(this.baseurl + "userDetails");
    };
    JarwisService.prototype.profilePicUpdate = function (data) {
        return this.http.post(this.baseurl + "profile", data);
    };
    JarwisService.prototype.userData = function (data) {
        this.userdata.next(data);
    };
    JarwisService.prototype.getalllead = function () {
        return this.http.get(this.baseurl + "gettallLead");
    };
    /* Fresh Lead API Start */
    JarwisService.prototype.getlead = function () {
        return this.http.get(this.baseurl + "lead/show");
    };
    JarwisService.prototype.addlead = function (data) {
        return this.http.post(this.baseurl + "lead/store", data);
    };
    JarwisService.prototype.excelpost = function (data) {
        return this.http.post(this.baseurl + "lead/uploadexcel", data, { headers: { 'Accept': 'application/json' } });
    };
    JarwisService.prototype.productlist = function () {
        return this.http.get(this.baseurl + "product");
    };
    JarwisService.prototype.getupdateuser = function (data) {
        return this.http.get(this.baseurl + "lead/index/" + data.id);
    };
    JarwisService.prototype.deletelead = function (data) {
        return this.http.get(this.baseurl + "lead/destroy/" + data);
    };
    JarwisService.prototype.updatelead = function (data) {
        return this.http.post(this.baseurl + "lead/update", data);
    };
    /* End Fresh Lead */
    /* Start Warm Lead */
    JarwisService.prototype.getwarmlead = function () {
        return this.http.get(this.baseurl + "warmlead/show");
    };
    JarwisService.prototype.getwarmupdateuser = function (data) {
        return this.http.get(this.baseurl + "warmlead/index/" + data.id);
    };
    JarwisService.prototype.deletewarmlead = function (data) {
        return this.http.get(this.baseurl + "warmlead/destroy/" + data);
    };
    JarwisService.prototype.updatewarmlead = function (data) {
        return this.http.post(this.baseurl + "warmlead/update", data);
    };
    /* End Warm Lead */
    /* Start Hot Lead */
    JarwisService.prototype.gethotlead = function () {
        return this.http.get(this.baseurl + "hotlead/show");
    };
    JarwisService.prototype.gethotupdateuser = function (data) {
        return this.http.get(this.baseurl + "hotlead/index/" + data.id);
    };
    JarwisService.prototype.deletehotlead = function (data) {
        return this.http.get(this.baseurl + "hotlead/destroy/" + data);
    };
    JarwisService.prototype.updatehotlead = function (data) {
        return this.http.post(this.baseurl + "hotlead/update", data);
    };
    /* End Hot Lead */
    /* Start Cold Lead */
    JarwisService.prototype.getcoldlead = function () {
        return this.http.get(this.baseurl + "coldlead/show");
    };
    JarwisService.prototype.getcoldupdateuser = function (data) {
        return this.http.get(this.baseurl + "coldlead/index/" + data.id);
    };
    JarwisService.prototype.deletecoldlead = function (data) {
        return this.http.get(this.baseurl + "coldlead/destroy/" + data);
    };
    JarwisService.prototype.updatecoldlead = function (data) {
        return this.http.post(this.baseurl + "coldlead/update", data);
    };
    /* End Cold Lead */
    /* Start Dead Lead */
    JarwisService.prototype.getdeadlead = function () {
        return this.http.get(this.baseurl + "deadlead/show");
    };
    JarwisService.prototype.getdeadupdateuser = function (data) {
        return this.http.get(this.baseurl + "deadlead/index/" + data.id);
    };
    JarwisService.prototype.deletedeadlead = function (data) {
        return this.http.get(this.baseurl + "deadlead/destroy/" + data);
    };
    JarwisService.prototype.updatedeadlead = function (data) {
        return this.http.post(this.baseurl + "deadlead/update", data);
    };
    /* End Dead Lead */
    /* Start Queue Worker */
    JarwisService.prototype.queuework = function () {
        return this.http.get(this.baseurl + "queuework");
    };
    /* End Queue Worker */
    /* Send Fresh Email */
    JarwisService.prototype.sendfreshemail = function () {
        return this.http.get(this.baseurl + "fresh");
    };
    /* End Send Fresh Email */
    /* Send Reminder Email */
    JarwisService.prototype.sendreminderemail = function () {
        return this.http.get(this.baseurl + "reminder");
    };
    /* End Send Reminder Email */
    /* Send Email Now */
    JarwisService.prototype.sendemailnow = function (data) {
        return this.http.post(this.baseurl + "sendnow", data);
    };
    /* End Send Email now */
    /* Contact API Start */
    JarwisService.prototype.getcontact = function () {
        return this.http.get(this.baseurl + "contact/show");
    };
    JarwisService.prototype.addcontact = function (data) {
        return this.http.post(this.baseurl + "contact/store", data);
    };
    JarwisService.prototype.contactexcelpost = function (data) {
        return this.http.post(this.baseurl + "contact/uploadexcel", data, { headers: { 'Accept': 'application/json' } });
    };
    JarwisService.prototype.getupdatecontact = function (data) {
        return this.http.get(this.baseurl + "contact/index/" + data.id);
    };
    JarwisService.prototype.deletecontact = function (data) {
        return this.http.get(this.baseurl + "contact/destroy/" + data);
    };
    JarwisService.prototype.updatecontact = function (data) {
        return this.http.post(this.baseurl + "contact/update", data);
    };
    /* End Fresh contact */
    /* Template Start */
    JarwisService.prototype.intro = function (data) {
        return this.http.post(this.baseurl + "template/intro", data);
    };
    JarwisService.prototype.getintro = function () {
        return this.http.get(this.baseurl + "template/getintro");
    };
    JarwisService.prototype.reminder = function (data) {
        return this.http.post(this.baseurl + "template/reminder", data);
    };
    JarwisService.prototype.getreminder = function () {
        return this.http.get(this.baseurl + "template/getreminder");
    };
    JarwisService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], JarwisService);
    return JarwisService;
}());



/***/ }),

/***/ "./src/app/Service/token-interceptor.service.ts":
/*!******************************************************!*\
  !*** ./src/app/Service/token-interceptor.service.ts ***!
  \******************************************************/
/*! exports provided: TokenInterceptorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenInterceptorService", function() { return TokenInterceptorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _token_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./token.service */ "./src/app/Service/token.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TokenInterceptorService = /** @class */ (function () {
    function TokenInterceptorService(Token) {
        this.Token = Token;
    }
    TokenInterceptorService.prototype.intercept = function (req, next) {
        var tokenizedReq = req.clone({
            setHeaders: {
                Authorization: "Bearer " + this.Token.get()
            }
        });
        return next.handle(tokenizedReq);
    };
    TokenInterceptorService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_token_service__WEBPACK_IMPORTED_MODULE_1__["TokenService"]])
    ], TokenInterceptorService);
    return TokenInterceptorService;
}());



/***/ }),

/***/ "./src/app/Service/token.service.ts":
/*!******************************************!*\
  !*** ./src/app/Service/token.service.ts ***!
  \******************************************/
/*! exports provided: TokenService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenService", function() { return TokenService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TokenService = /** @class */ (function () {
    function TokenService(http) {
        this.http = http;
    }
    TokenService.prototype.handle = function (token) {
        this.setToken(token);
    };
    TokenService.prototype.setToken = function (token) {
        localStorage.setItem('token', token);
    };
    TokenService.prototype.get = function () {
        return localStorage.getItem('token');
    };
    TokenService.prototype.remove = function () {
        localStorage.removeItem('token');
    };
    TokenService.prototype.checkLogin = function () {
        var _this = this;
        var token = this.get();
        if (token !== null) {
            this.http.get('http://localhost:81/sale/back/api/checkLogin').subscribe(
            // data => console.log(data)
            function (data) { return _this.isvalid(data); });
            return true;
        }
        else {
            return false;
        }
    };
    TokenService.prototype.isvalid = function (data) {
        if (data === 'true') {
            return true;
        }
        else {
            return false;
        }
    };
    TokenService.prototype.loggedIn = function () {
        return this.checkLogin();
    };
    TokenService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], TokenService);
    return TokenService;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/signup/signup.component */ "./src/app/components/signup/signup.component.ts");
/* harmony import */ var _components_project_profile_profile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/project/profile/profile.component */ "./src/app/components/project/profile/profile.component.ts");
/* harmony import */ var _components_project_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/project/dashboard/dashboard.component */ "./src/app/components/project/dashboard/dashboard.component.ts");
/* harmony import */ var _components_password_request_reset_request_reset_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/password/request-reset/request-reset.component */ "./src/app/components/password/request-reset/request-reset.component.ts");
/* harmony import */ var _components_password_response_reset_response_reset_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/password/response-reset/response-reset.component */ "./src/app/components/password/response-reset/response-reset.component.ts");
/* harmony import */ var _Service_before_login_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Service/before-login.service */ "./src/app/Service/before-login.service.ts");
/* harmony import */ var _Service_after_login_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Service/after-login.service */ "./src/app/Service/after-login.service.ts");
/* harmony import */ var _components_project_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/project/change-password/change-password.component */ "./src/app/components/project/change-password/change-password.component.ts");
/* harmony import */ var _components_project_leads_lead_list_lead_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/project/leads/lead-list/lead-list.component */ "./src/app/components/project/leads/lead-list/lead-list.component.ts");
/* harmony import */ var _components_project_leads_lead_add_lead_add_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/project/leads/lead-add/lead-add.component */ "./src/app/components/project/leads/lead-add/lead-add.component.ts");
/* harmony import */ var _components_project_leads_edit_lead_edit_lead_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/project/leads/edit-lead/edit-lead.component */ "./src/app/components/project/leads/edit-lead/edit-lead.component.ts");
/* harmony import */ var _components_project_dead_lead_edit_dead_lead_edit_dead_lead_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/project/dead-lead/edit-dead-lead/edit-dead-lead.component */ "./src/app/components/project/dead-lead/edit-dead-lead/edit-dead-lead.component.ts");
/* harmony import */ var _components_project_dead_lead_list_dead_lead_list_dead_lead_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/project/dead-lead/list-dead-lead/list-dead-lead.component */ "./src/app/components/project/dead-lead/list-dead-lead/list-dead-lead.component.ts");
/* harmony import */ var _components_project_cold_lead_edit_cold_lead_edit_cold_lead_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/project/cold-lead/edit-cold-lead/edit-cold-lead.component */ "./src/app/components/project/cold-lead/edit-cold-lead/edit-cold-lead.component.ts");
/* harmony import */ var _components_project_cold_lead_list_cold_lead_list_cold_lead_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/project/cold-lead/list-cold-lead/list-cold-lead.component */ "./src/app/components/project/cold-lead/list-cold-lead/list-cold-lead.component.ts");
/* harmony import */ var _components_project_hot_lead_edit_hot_lead_edit_hot_lead_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/project/hot-lead/edit-hot-lead/edit-hot-lead.component */ "./src/app/components/project/hot-lead/edit-hot-lead/edit-hot-lead.component.ts");
/* harmony import */ var _components_project_hot_lead_list_hot_lead_list_hot_lead_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/project/hot-lead/list-hot-lead/list-hot-lead.component */ "./src/app/components/project/hot-lead/list-hot-lead/list-hot-lead.component.ts");
/* harmony import */ var _components_project_warm_lead_edit_warm_lead_edit_warm_lead_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/project/warm-lead/edit-warm-lead/edit-warm-lead.component */ "./src/app/components/project/warm-lead/edit-warm-lead/edit-warm-lead.component.ts");
/* harmony import */ var _components_project_warm_lead_list_warm_lead_list_warm_lead_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/project/warm-lead/list-warm-lead/list-warm-lead.component */ "./src/app/components/project/warm-lead/list-warm-lead/list-warm-lead.component.ts");
/* harmony import */ var _components_project_mail_home_home_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/project/mail/home/home.component */ "./src/app/components/project/mail/home/home.component.ts");
/* harmony import */ var _components_project_mail_view_mail_view_mail_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/project/mail/view-mail/view-mail.component */ "./src/app/components/project/mail/view-mail/view-mail.component.ts");
/* harmony import */ var _components_project_contact_list_list_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/project/contact/list/list.component */ "./src/app/components/project/contact/list/list.component.ts");
/* harmony import */ var _components_project_contact_add_add_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/project/contact/add/add.component */ "./src/app/components/project/contact/add/add.component.ts");
/* harmony import */ var _components_project_contact_edit_edit_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/project/contact/edit/edit.component */ "./src/app/components/project/contact/edit/edit.component.ts");
/* harmony import */ var _components_project_mail_compose_mail_compose_mail_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/project/mail/compose-mail/compose-mail.component */ "./src/app/components/project/mail/compose-mail/compose-mail.component.ts");
/* harmony import */ var _components_project_template_introduction_introduction_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/project/template/introduction/introduction.component */ "./src/app/components/project/template/introduction/introduction.component.ts");
/* harmony import */ var _components_project_template_reminder_reminder_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/project/template/reminder/reminder.component */ "./src/app/components/project/template/reminder/reminder.component.ts");
/* harmony import */ var _components_project_resource_resource_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/project/resource/resource.component */ "./src/app/components/project/resource/resource.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};































var routes = [
    {
        path: 'login',
        component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"],
        canActivate: [_Service_before_login_service__WEBPACK_IMPORTED_MODULE_8__["BeforeLoginService"]]
    },
    {
        path: 'signup',
        component: _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_3__["SignupComponent"],
        canActivate: [_Service_before_login_service__WEBPACK_IMPORTED_MODULE_8__["BeforeLoginService"]]
    },
    {
        path: 'request-password-reset',
        component: _components_password_request_reset_request_reset_component__WEBPACK_IMPORTED_MODULE_6__["RequestResetComponent"],
        canActivate: [_Service_before_login_service__WEBPACK_IMPORTED_MODULE_8__["BeforeLoginService"]]
    },
    {
        path: 'response-password-reset',
        component: _components_password_response_reset_response_reset_component__WEBPACK_IMPORTED_MODULE_7__["ResponseResetComponent"],
        canActivate: [_Service_before_login_service__WEBPACK_IMPORTED_MODULE_8__["BeforeLoginService"]]
    },
    {
        path: 'profile',
        component: _components_project_profile_profile_component__WEBPACK_IMPORTED_MODULE_4__["ProfileComponent"],
        canActivate: [_Service_after_login_service__WEBPACK_IMPORTED_MODULE_9__["AfterLoginService"]]
    },
    {
        path: '',
        component: _components_project_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["DashboardComponent"],
        canActivate: [_Service_after_login_service__WEBPACK_IMPORTED_MODULE_9__["AfterLoginService"]]
    },
    {
        path: 'change-password',
        component: _components_project_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_10__["ChangePasswordComponent"],
        canActivate: [_Service_after_login_service__WEBPACK_IMPORTED_MODULE_9__["AfterLoginService"]]
    },
    {
        path: 'resource',
        component: _components_project_resource_resource_component__WEBPACK_IMPORTED_MODULE_30__["ResourceComponent"],
        canActivate: [_Service_after_login_service__WEBPACK_IMPORTED_MODULE_9__["AfterLoginService"]]
    },
    /* Fresh Lead URL */
    {
        path: 'lead',
        component: _components_project_leads_lead_list_lead_list_component__WEBPACK_IMPORTED_MODULE_11__["LeadListComponent"],
        canActivate: [_Service_after_login_service__WEBPACK_IMPORTED_MODULE_9__["AfterLoginService"]]
    },
    {
        path: 'lead/add',
        component: _components_project_leads_lead_add_lead_add_component__WEBPACK_IMPORTED_MODULE_12__["LeadAddComponent"],
        canActivate: [_Service_after_login_service__WEBPACK_IMPORTED_MODULE_9__["AfterLoginService"]]
    },
    {
        path: 'lead/edit/:id',
        component: _components_project_leads_edit_lead_edit_lead_component__WEBPACK_IMPORTED_MODULE_13__["EditLeadComponent"],
        canActivate: [_Service_after_login_service__WEBPACK_IMPORTED_MODULE_9__["AfterLoginService"]]
    },
    /* End Fresh Lead URL */
    /* Start Warm Lead URL */
    {
        path: 'warmlead',
        component: _components_project_warm_lead_list_warm_lead_list_warm_lead_component__WEBPACK_IMPORTED_MODULE_21__["ListWarmLeadComponent"],
        canActivate: [_Service_after_login_service__WEBPACK_IMPORTED_MODULE_9__["AfterLoginService"]]
    },
    {
        path: 'warmlead/edit/:id',
        component: _components_project_warm_lead_edit_warm_lead_edit_warm_lead_component__WEBPACK_IMPORTED_MODULE_20__["EditWarmLeadComponent"],
        canActivate: [_Service_after_login_service__WEBPACK_IMPORTED_MODULE_9__["AfterLoginService"]]
    },
    /* End Warm Lead URL */
    /* Start Hot Lead URL */
    {
        path: 'hotlead',
        component: _components_project_hot_lead_list_hot_lead_list_hot_lead_component__WEBPACK_IMPORTED_MODULE_19__["ListHotLeadComponent"],
        canActivate: [_Service_after_login_service__WEBPACK_IMPORTED_MODULE_9__["AfterLoginService"]]
    },
    {
        path: 'hotlead/edit/:id',
        component: _components_project_hot_lead_edit_hot_lead_edit_hot_lead_component__WEBPACK_IMPORTED_MODULE_18__["EditHotLeadComponent"],
        canActivate: [_Service_after_login_service__WEBPACK_IMPORTED_MODULE_9__["AfterLoginService"]]
    },
    /* End Hot Lead URL */
    /* Start Cold Lead URL */
    {
        path: 'coldlead',
        component: _components_project_cold_lead_list_cold_lead_list_cold_lead_component__WEBPACK_IMPORTED_MODULE_17__["ListColdLeadComponent"],
        canActivate: [_Service_after_login_service__WEBPACK_IMPORTED_MODULE_9__["AfterLoginService"]]
    },
    {
        path: 'coldlead/edit/:id',
        component: _components_project_cold_lead_edit_cold_lead_edit_cold_lead_component__WEBPACK_IMPORTED_MODULE_16__["EditColdLeadComponent"],
        canActivate: [_Service_after_login_service__WEBPACK_IMPORTED_MODULE_9__["AfterLoginService"]]
    },
    /* End Cold Lead URL */
    /* Start Dead Lead URL */
    {
        path: 'deadlead',
        component: _components_project_dead_lead_list_dead_lead_list_dead_lead_component__WEBPACK_IMPORTED_MODULE_15__["ListDeadLeadComponent"],
        canActivate: [_Service_after_login_service__WEBPACK_IMPORTED_MODULE_9__["AfterLoginService"]]
    },
    {
        path: 'deadlead/edit/:id',
        component: _components_project_dead_lead_edit_dead_lead_edit_dead_lead_component__WEBPACK_IMPORTED_MODULE_14__["EditDeadLeadComponent"],
        canActivate: [_Service_after_login_service__WEBPACK_IMPORTED_MODULE_9__["AfterLoginService"]]
    },
    /* End Dead Lead URL */
    /* Outlook Mail  */
    {
        path: 'mail/inbox',
        component: _components_project_mail_home_home_component__WEBPACK_IMPORTED_MODULE_22__["HomeComponent"],
        canActivate: [_Service_after_login_service__WEBPACK_IMPORTED_MODULE_9__["AfterLoginService"]]
    },
    {
        path: 'mail/compose',
        component: _components_project_mail_compose_mail_compose_mail_component__WEBPACK_IMPORTED_MODULE_27__["ComposeMailComponent"],
        canActivate: [_Service_after_login_service__WEBPACK_IMPORTED_MODULE_9__["AfterLoginService"]]
    },
    {
        path: 'mail/view/:id',
        component: _components_project_mail_view_mail_view_mail_component__WEBPACK_IMPORTED_MODULE_23__["ViewMailComponent"],
        canActivate: [_Service_after_login_service__WEBPACK_IMPORTED_MODULE_9__["AfterLoginService"]]
    },
    /* End Outlook Mail  */
    /* Contact Start */
    {
        path: 'contact',
        component: _components_project_contact_list_list_component__WEBPACK_IMPORTED_MODULE_24__["ListComponent"],
        canActivate: [_Service_after_login_service__WEBPACK_IMPORTED_MODULE_9__["AfterLoginService"]]
    },
    {
        path: 'contact/add',
        component: _components_project_contact_add_add_component__WEBPACK_IMPORTED_MODULE_25__["AddComponent"],
        canActivate: [_Service_after_login_service__WEBPACK_IMPORTED_MODULE_9__["AfterLoginService"]]
    },
    {
        path: 'contact/edit/:id',
        component: _components_project_contact_edit_edit_component__WEBPACK_IMPORTED_MODULE_26__["EditComponent"],
        canActivate: [_Service_after_login_service__WEBPACK_IMPORTED_MODULE_9__["AfterLoginService"]]
    },
    /* End Contact Start */
    /* Template start */
    {
        path: 'template/intro',
        component: _components_project_template_introduction_introduction_component__WEBPACK_IMPORTED_MODULE_28__["IntroductionComponent"],
        canActivate: [_Service_after_login_service__WEBPACK_IMPORTED_MODULE_9__["AfterLoginService"]]
    },
    {
        path: 'template/reminder',
        component: _components_project_template_reminder_reminder_component__WEBPACK_IMPORTED_MODULE_29__["ReminderComponent"],
        canActivate: [_Service_after_login_service__WEBPACK_IMPORTED_MODULE_9__["AfterLoginService"]]
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<div class=\"container\">\r\n\r\n    <router-outlet></router-outlet>\r\n\r\n</div>\r\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'angu';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/signup/signup.component */ "./src/app/components/signup/signup.component.ts");
/* harmony import */ var _components_project_profile_profile_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/project/profile/profile.component */ "./src/app/components/project/profile/profile.component.ts");
/* harmony import */ var _components_project_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/project/dashboard/dashboard.component */ "./src/app/components/project/dashboard/dashboard.component.ts");
/* harmony import */ var _components_password_request_reset_request_reset_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/password/request-reset/request-reset.component */ "./src/app/components/password/request-reset/request-reset.component.ts");
/* harmony import */ var _components_password_response_reset_response_reset_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/password/response-reset/response-reset.component */ "./src/app/components/password/response-reset/response-reset.component.ts");
/* harmony import */ var _Service_jarwis_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Service/jarwis.service */ "./src/app/Service/jarwis.service.ts");
/* harmony import */ var _Service_token_interceptor_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Service/token-interceptor.service */ "./src/app/Service/token-interceptor.service.ts");
/* harmony import */ var _components_project_left_menu_left_menu_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/project/left-menu/left-menu.component */ "./src/app/components/project/left-menu/left-menu.component.ts");
/* harmony import */ var _components_project_footer_footer_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/project/footer/footer.component */ "./src/app/components/project/footer/footer.component.ts");
/* harmony import */ var _components_project_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/project/change-password/change-password.component */ "./src/app/components/project/change-password/change-password.component.ts");
/* harmony import */ var angular_notifier__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! angular-notifier */ "./node_modules/angular-notifier/esm5/angular-notifier.js");
/* harmony import */ var _components_project_leads_lead_list_lead_list_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/project/leads/lead-list/lead-list.component */ "./src/app/components/project/leads/lead-list/lead-list.component.ts");
/* harmony import */ var _components_project_leads_lead_add_lead_add_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/project/leads/lead-add/lead-add.component */ "./src/app/components/project/leads/lead-add/lead-add.component.ts");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var _components_project_leads_edit_lead_edit_lead_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/project/leads/edit-lead/edit-lead.component */ "./src/app/components/project/leads/edit-lead/edit-lead.component.ts");
/* harmony import */ var _components_project_warm_lead_edit_warm_lead_edit_warm_lead_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/project/warm-lead/edit-warm-lead/edit-warm-lead.component */ "./src/app/components/project/warm-lead/edit-warm-lead/edit-warm-lead.component.ts");
/* harmony import */ var _components_project_warm_lead_list_warm_lead_list_warm_lead_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/project/warm-lead/list-warm-lead/list-warm-lead.component */ "./src/app/components/project/warm-lead/list-warm-lead/list-warm-lead.component.ts");
/* harmony import */ var _components_project_hot_lead_edit_hot_lead_edit_hot_lead_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/project/hot-lead/edit-hot-lead/edit-hot-lead.component */ "./src/app/components/project/hot-lead/edit-hot-lead/edit-hot-lead.component.ts");
/* harmony import */ var _components_project_hot_lead_list_hot_lead_list_hot_lead_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/project/hot-lead/list-hot-lead/list-hot-lead.component */ "./src/app/components/project/hot-lead/list-hot-lead/list-hot-lead.component.ts");
/* harmony import */ var _components_project_cold_lead_edit_cold_lead_edit_cold_lead_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/project/cold-lead/edit-cold-lead/edit-cold-lead.component */ "./src/app/components/project/cold-lead/edit-cold-lead/edit-cold-lead.component.ts");
/* harmony import */ var _components_project_cold_lead_list_cold_lead_list_cold_lead_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/project/cold-lead/list-cold-lead/list-cold-lead.component */ "./src/app/components/project/cold-lead/list-cold-lead/list-cold-lead.component.ts");
/* harmony import */ var _components_project_dead_lead_edit_dead_lead_edit_dead_lead_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/project/dead-lead/edit-dead-lead/edit-dead-lead.component */ "./src/app/components/project/dead-lead/edit-dead-lead/edit-dead-lead.component.ts");
/* harmony import */ var _components_project_dead_lead_list_dead_lead_list_dead_lead_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/project/dead-lead/list-dead-lead/list-dead-lead.component */ "./src/app/components/project/dead-lead/list-dead-lead/list-dead-lead.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm5/angular-fontawesome.js");
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ "./node_modules/@fortawesome/fontawesome-svg-core/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @fortawesome/free-regular-svg-icons */ "./node_modules/@fortawesome/free-regular-svg-icons/index.es.js");
/* harmony import */ var _components_project_mail_home_home_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./components/project/mail/home/home.component */ "./src/app/components/project/mail/home/home.component.ts");
/* harmony import */ var _components_project_mail_alert_alert_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./components/project/mail/alert/alert.component */ "./src/app/components/project/mail/alert/alert.component.ts");
/* harmony import */ var _azure_msal_angular__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @azure/msal-angular */ "./node_modules/@azure/msal-angular/dist/index.js");
/* harmony import */ var _oauth__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ../oauth */ "./src/oauth.ts");
/* harmony import */ var _components_project_mail_view_mail_view_mail_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./components/project/mail/view-mail/view-mail.component */ "./src/app/components/project/mail/view-mail/view-mail.component.ts");
/* harmony import */ var _components_project_contact_add_add_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./components/project/contact/add/add.component */ "./src/app/components/project/contact/add/add.component.ts");
/* harmony import */ var _components_project_contact_list_list_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./components/project/contact/list/list.component */ "./src/app/components/project/contact/list/list.component.ts");
/* harmony import */ var _components_project_contact_edit_edit_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./components/project/contact/edit/edit.component */ "./src/app/components/project/contact/edit/edit.component.ts");
/* harmony import */ var _components_project_mail_compose_mail_compose_mail_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./components/project/mail/compose-mail/compose-mail.component */ "./src/app/components/project/mail/compose-mail/compose-mail.component.ts");
/* harmony import */ var _components_project_template_introduction_introduction_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./components/project/template/introduction/introduction.component */ "./src/app/components/project/template/introduction/introduction.component.ts");
/* harmony import */ var _components_project_template_reminder_reminder_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./components/project/template/reminder/reminder.component */ "./src/app/components/project/template/reminder/reminder.component.ts");
/* harmony import */ var _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! @ckeditor/ckeditor5-angular */ "./node_modules/@ckeditor/ckeditor5-angular/fesm5/ckeditor-ckeditor5-angular.js");
/* harmony import */ var _components_project_resource_resource_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./components/project/resource/resource.component */ "./src/app/components/project/resource/resource.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















































_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_33__["library"].add(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_34__["faExternalLinkAlt"]);
_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_33__["library"].add(_fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_35__["faUserCircle"]);
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__["NavbarComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
                _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_8__["SignupComponent"],
                _components_project_profile_profile_component__WEBPACK_IMPORTED_MODULE_9__["ProfileComponent"],
                _components_project_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_10__["DashboardComponent"],
                _components_password_request_reset_request_reset_component__WEBPACK_IMPORTED_MODULE_11__["RequestResetComponent"],
                _components_password_response_reset_response_reset_component__WEBPACK_IMPORTED_MODULE_12__["ResponseResetComponent"],
                _components_project_left_menu_left_menu_component__WEBPACK_IMPORTED_MODULE_15__["LeftMenuComponent"],
                _components_project_footer_footer_component__WEBPACK_IMPORTED_MODULE_16__["FooterComponent"],
                _components_project_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_17__["ChangePasswordComponent"],
                _components_project_leads_lead_list_lead_list_component__WEBPACK_IMPORTED_MODULE_19__["LeadListComponent"],
                _components_project_leads_lead_add_lead_add_component__WEBPACK_IMPORTED_MODULE_20__["LeadAddComponent"],
                _components_project_leads_edit_lead_edit_lead_component__WEBPACK_IMPORTED_MODULE_22__["EditLeadComponent"],
                _components_project_warm_lead_edit_warm_lead_edit_warm_lead_component__WEBPACK_IMPORTED_MODULE_23__["EditWarmLeadComponent"],
                _components_project_warm_lead_list_warm_lead_list_warm_lead_component__WEBPACK_IMPORTED_MODULE_24__["ListWarmLeadComponent"],
                _components_project_hot_lead_edit_hot_lead_edit_hot_lead_component__WEBPACK_IMPORTED_MODULE_25__["EditHotLeadComponent"],
                _components_project_hot_lead_list_hot_lead_list_hot_lead_component__WEBPACK_IMPORTED_MODULE_26__["ListHotLeadComponent"],
                _components_project_cold_lead_edit_cold_lead_edit_cold_lead_component__WEBPACK_IMPORTED_MODULE_27__["EditColdLeadComponent"],
                _components_project_cold_lead_list_cold_lead_list_cold_lead_component__WEBPACK_IMPORTED_MODULE_28__["ListColdLeadComponent"],
                _components_project_dead_lead_edit_dead_lead_edit_dead_lead_component__WEBPACK_IMPORTED_MODULE_29__["EditDeadLeadComponent"],
                _components_project_dead_lead_list_dead_lead_list_dead_lead_component__WEBPACK_IMPORTED_MODULE_30__["ListDeadLeadComponent"],
                _components_project_mail_home_home_component__WEBPACK_IMPORTED_MODULE_36__["HomeComponent"],
                _components_project_mail_alert_alert_component__WEBPACK_IMPORTED_MODULE_37__["AlertComponent"],
                _components_project_mail_view_mail_view_mail_component__WEBPACK_IMPORTED_MODULE_40__["ViewMailComponent"],
                _components_project_contact_add_add_component__WEBPACK_IMPORTED_MODULE_41__["AddComponent"],
                _components_project_contact_list_list_component__WEBPACK_IMPORTED_MODULE_42__["ListComponent"],
                _components_project_contact_edit_edit_component__WEBPACK_IMPORTED_MODULE_43__["EditComponent"],
                _components_project_mail_compose_mail_compose_mail_component__WEBPACK_IMPORTED_MODULE_44__["ComposeMailComponent"],
                _components_project_template_introduction_introduction_component__WEBPACK_IMPORTED_MODULE_45__["IntroductionComponent"],
                _components_project_template_reminder_reminder_component__WEBPACK_IMPORTED_MODULE_46__["ReminderComponent"],
                _components_project_resource_resource_component__WEBPACK_IMPORTED_MODULE_48__["ResourceComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                angular_notifier__WEBPACK_IMPORTED_MODULE_18__["NotifierModule"],
                angular_datatables__WEBPACK_IMPORTED_MODULE_21__["DataTablesModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_31__["NgbModule"],
                _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_32__["FontAwesomeModule"],
                _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_47__["CKEditorModule"],
                _azure_msal_angular__WEBPACK_IMPORTED_MODULE_38__["MsalModule"].forRoot({
                    clientID: _oauth__WEBPACK_IMPORTED_MODULE_39__["OAuthSettings"].appId
                }),
            ],
            providers: [
                _Service_jarwis_service__WEBPACK_IMPORTED_MODULE_13__["JarwisService"],
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
                    useClass: _Service_token_interceptor_service__WEBPACK_IMPORTED_MODULE_14__["TokenInterceptorService"],
                    multi: true
                }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row login d-flex align-items-center\">\n    <div class=\"container\">\n      <form #loginform=\"ngForm\" (ngSubmit)=\"onSubmit()\">\n      <div class=\"row\">\t\n      <div class=\"col-xl-4 col-lg-4 col-md-8 col-sm-12\">\n        </div>\n        <div class=\"col-xl-4 col-lg-4 col-md-8 col-sm-12 \">\n        </div>\t\t\t\t\t\t\n        <div class=\"col-xl-4 col-lg-4 col-md-8 col-sm-12 mt-5 log\">\n          <img src=\"assets/images/quickway_user.png\" class=\"img-fluid d-block m-auto\">\t\t\n          <div class=\"clearfix\"></div>\n          <div class=\"he_ad\">\n          <div class=\"col-xl-12\">\n            <div class=\"borr\"><h1 class=\"text-center\">Login</h1></div>\n          <small class=\"d-block text-center\">Access your account</small>\n          <div class=\"clearfix\"></div>\n          <div class=\"pt-4\">\n            <div class=\"alert alert-danger\" [hidden]=\"!error\">\n              {{error}}\n            </div>\n          <div class=\"form-group\">\n          <label>User Email</label>\n          <input type=\"email\" required class=\"form-control ad\" [(ngModel)]=\"form.email\" email=\"true\" name=\"email\" placeholder=\"Enter Your Email\">\t\n          </div>\n            <div class=\"form-group\">\n              <label>Password</label>\n              <input type=\"password\" required class=\"form-control pas\" [(ngModel)]=\"form.password\" name=\"password\" placeholder=\"Password Here\">\t\n          </div>\n            <div class=\"form-group\">\n              <button type=\"submit\" class=\"btn btn-primary m-auto d-block\" [disabled]=\"!loginform.valid\" >Log In</button>\n            </div>\n            <div class=\"clearfix\"></div>\n            <div>\n                  <a href=\"\" class=\"for_pas btn btn-primary\">Forget Password</a>\n              \n                  <a routerLink=\"/signup\" class=\"for_pas btn btn-primary pull-right\">Sign Up</a>\n             \n              \n            </div>\n            </div>\n        </div>\n          </div>\n      </div>\n    </div>\n    </form>\n  </div>"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_Service_jarwis_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Service/jarwis.service */ "./src/app/Service/jarwis.service.ts");
/* harmony import */ var src_app_Service_token_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/Service/token.service */ "./src/app/Service/token.service.ts");
/* harmony import */ var src_app_Service_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/Service/auth.service */ "./src/app/Service/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = /** @class */ (function () {
    function LoginComponent(jarwis, token, Router, Auth) {
        this.jarwis = jarwis;
        this.token = token;
        this.Router = Router;
        this.Auth = Auth;
        this.error = null;
        this.form = {
            email: null,
            password: null
        };
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        this.jarwis.login(this.form).subscribe(function (data) { return _this.handleResponse(data); }, function (error) { return _this.handleError(error); });
    };
    LoginComponent.prototype.handleResponse = function (data) {
        this.token.handle(data.success.token);
        this.Auth.changeAuthStatus(true);
        this.Router.navigateByUrl('/');
    };
    LoginComponent.prototype.handleError = function (error) {
        this.error = error.error.error;
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_Service_jarwis_service__WEBPACK_IMPORTED_MODULE_2__["JarwisService"],
            src_app_Service_token_service__WEBPACK_IMPORTED_MODULE_3__["TokenService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            src_app_Service_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"main-header navbar navbar-expand bg-aqua navbar-light border-bottom\">\n  <!-- Left navbar links -->\n  <ul class=\"navbar-nav\">\n    <li class=\"nav-item\" *ngIf=\"loggedIn\">\n      <a class=\"nav-link\" data-widget=\"pushmenu\" href=\"#\"><i class=\"fa fa-bars\"></i></a>\n    </li>\n    <li class=\"nav-item d-none d-sm-inline-block\">\n      <a routerLink=\"/\" class=\"nav-link\" *ngIf=\"loggedIn\">Dashboard</a>\n    </li>\n  </ul>\n\n  <!-- Right navbar links -->\n  <ul class=\"navbar-nav ml-auto\">\n\n    <!-- User Account: style can be found in dropdown.less -->\n    <li class=\"dropdown user user-menu user-image\">\n      <a routerLink=\"login\" class=\"nav-link\" *ngIf=\"!loggedIn\">Login</a>\n    </li>\n    <li class=\"dropdown user user-menu user-image\">\n      <a routerLink=\"signup\" class=\"nav-link\" *ngIf=\"!loggedIn\">Signup</a>\n    </li>\n    <li class=\"nav-item d-none d-sm-inline-block\">\n      <a routerLink=\"resource\" class=\"nav-link\" *ngIf=\"loggedIn\">Resources</a>\n    </li>\n    <li class=\"dropdown user user-menu user-image\">\n      <a routerLink=\"signup\" class=\"nav-link\" href=\"#\" (click)=\"logout($event)\" *ngIf=\"loggedIn\">LogOut</a>\n    </li>\n    <li class=\"nav-item d-none d-sm-inline-block\">\n      <a routerLink=\"profile\" class=\"nav-link\" *ngIf=\"loggedIn\">Profile</a>\n    </li>\n  </ul>\n</nav>"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_Service_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/Service/auth.service */ "./src/app/Service/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_Service_token_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/Service/token.service */ "./src/app/Service/token.service.ts");
/* harmony import */ var src_app_Service_jarwis_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/Service/jarwis.service */ "./src/app/Service/jarwis.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(Auth, Router, Token, Jarwis) {
        this.Auth = Auth;
        this.Router = Router;
        this.Token = Token;
        this.Jarwis = Jarwis;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        // console.log(this.loggedIn);
        this.Auth.authStatus.subscribe(function (value) { return _this.loggedIn = value; });
    };
    NavbarComponent.prototype.logout = function (event) {
        event.preventDefault();
        this.Jarwis.logout().subscribe();
        this.Token.remove();
        this.Auth.changeAuthStatus(false);
        this.Router.navigateByUrl('login');
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_Service_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            src_app_Service_token_service__WEBPACK_IMPORTED_MODULE_3__["TokenService"],
            src_app_Service_jarwis_service__WEBPACK_IMPORTED_MODULE_4__["JarwisService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/password/request-reset/request-reset.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/components/password/request-reset/request-reset.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFzc3dvcmQvcmVxdWVzdC1yZXNldC9yZXF1ZXN0LXJlc2V0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/password/request-reset/request-reset.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/components/password/request-reset/request-reset.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  request-reset works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/password/request-reset/request-reset.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/components/password/request-reset/request-reset.component.ts ***!
  \******************************************************************************/
/*! exports provided: RequestResetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestResetComponent", function() { return RequestResetComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RequestResetComponent = /** @class */ (function () {
    function RequestResetComponent() {
    }
    RequestResetComponent.prototype.ngOnInit = function () {
    };
    RequestResetComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-request-reset',
            template: __webpack_require__(/*! ./request-reset.component.html */ "./src/app/components/password/request-reset/request-reset.component.html"),
            styles: [__webpack_require__(/*! ./request-reset.component.css */ "./src/app/components/password/request-reset/request-reset.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RequestResetComponent);
    return RequestResetComponent;
}());



/***/ }),

/***/ "./src/app/components/password/response-reset/response-reset.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/components/password/response-reset/response-reset.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFzc3dvcmQvcmVzcG9uc2UtcmVzZXQvcmVzcG9uc2UtcmVzZXQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/password/response-reset/response-reset.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/components/password/response-reset/response-reset.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  response-reset works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/password/response-reset/response-reset.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/components/password/response-reset/response-reset.component.ts ***!
  \********************************************************************************/
/*! exports provided: ResponseResetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResponseResetComponent", function() { return ResponseResetComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ResponseResetComponent = /** @class */ (function () {
    function ResponseResetComponent() {
    }
    ResponseResetComponent.prototype.ngOnInit = function () {
    };
    ResponseResetComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-response-reset',
            template: __webpack_require__(/*! ./response-reset.component.html */ "./src/app/components/password/response-reset/response-reset.component.html"),
            styles: [__webpack_require__(/*! ./response-reset.component.css */ "./src/app/components/password/response-reset/response-reset.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ResponseResetComponent);
    return ResponseResetComponent;
}());



/***/ }),

/***/ "./src/app/components/project/change-password/change-password.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/components/project/change-password/change-password.component.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvamVjdC9jaGFuZ2UtcGFzc3dvcmQvY2hhbmdlLXBhc3N3b3JkLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/project/change-password/change-password.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/components/project/change-password/change-password.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"continer\">\r\n    <div class=\"container-fluid\">\r\n      <div class=\"row login d-flex align-items-center\">\r\n        <div class=\"container\">\r\n          <form #changePassword=\"ngForm\" (ngSubmit)=\"onSubmit()\">\r\n            <div class=\"row\">\r\n              <div class=\"col-xl-2 col-lg-2 col-md-8 col-sm-12\">\r\n              </div>\r\n              <div class=\"col-xl-10 col-lg-10 col-md-8 col-sm-12 mt-5 log gb\">\r\n                <div class=\"he_ad\">\r\n                  <div class=\"col-xl-12\">\r\n                    <div class=\"borr\">\r\n                      <h1 class=\"text-center\">Change Password</h1>\r\n                    </div>\r\n                    <div class=\"clearfix\"></div>\r\n                    <div class=\"pt-4\">\r\n  \r\n                      <div class=\"form-group\">\r\n                        <label>Old Password</label>\r\n                        <input type=\"password\" class=\"form-control ad\" [(ngModel)]=\"form.old_password\" name=\"old_password\" placeholder=\"Enter Your Old password\">\r\n                      </div>\r\n                      <div class=\"form-group\">\r\n                          <label>New Password</label>\r\n                          <input type=\"password\" class=\"form-control ad\" [(ngModel)]=\"form.new_password\" name=\"new_password\" placeholder=\"Enter Your New password\">\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <label>Confirm Password</label>\r\n                            <input type=\"password\" class=\"form-control ad\" [(ngModel)]=\"form.confirm_password\" name=\"confirm_password\" placeholder=\"Enter Your Confirm password\">\r\n                          </div>\r\n                      <div class=\"form-group\">\r\n                        <button type=\"submit\" class=\"btn btn-primary m-auto\" [disabled]=\"!changePassword.valid\">Update Password</button>                        \r\n                      </div>\r\n                      <div class=\"clearfix\"></div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </form>\r\n        </div>\r\n      </div>\r\n      <app-left-menu></app-left-menu>\r\n      <app-footer></app-footer>\r\n      <notifier-container></notifier-container>"

/***/ }),

/***/ "./src/app/components/project/change-password/change-password.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/components/project/change-password/change-password.component.ts ***!
  \*********************************************************************************/
/*! exports provided: ChangePasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordComponent", function() { return ChangePasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_Service_jarwis_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/Service/jarwis.service */ "./src/app/Service/jarwis.service.ts");
/* harmony import */ var angular_notifier__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-notifier */ "./node_modules/angular-notifier/esm5/angular-notifier.js");
/* harmony import */ var src_app_Service_token_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/Service/token.service */ "./src/app/Service/token.service.ts");
/* harmony import */ var src_app_Service_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/Service/auth.service */ "./src/app/Service/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ChangePasswordComponent = /** @class */ (function () {
    function ChangePasswordComponent(Jarwis, Notifier, Token, Auth, Router) {
        this.Jarwis = Jarwis;
        this.Notifier = Notifier;
        this.Token = Token;
        this.Auth = Auth;
        this.Router = Router;
        this.data = null;
        this.form = {
            old_password: null,
            new_password: null,
            confirm_password: null,
        };
    }
    ChangePasswordComponent.prototype.ngOnInit = function () {
    };
    ChangePasswordComponent.prototype.onSubmit = function () {
        var _this = this;
        this.Jarwis.changePassword(this.form).subscribe(function (data) { return _this.response(data); }, function (error) { return console.log(error); });
    };
    ChangePasswordComponent.prototype.response = function (data) {
        this.data = data;
        this.Notifier.notify('success', 'Password Changed successfully');
        this.Jarwis.logout().subscribe();
        this.Token.remove();
        this.Auth.changeAuthStatus(false);
        this.Router.navigateByUrl('login');
    };
    ChangePasswordComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-change-password',
            template: __webpack_require__(/*! ./change-password.component.html */ "./src/app/components/project/change-password/change-password.component.html"),
            styles: [__webpack_require__(/*! ./change-password.component.css */ "./src/app/components/project/change-password/change-password.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_Service_jarwis_service__WEBPACK_IMPORTED_MODULE_1__["JarwisService"],
            angular_notifier__WEBPACK_IMPORTED_MODULE_2__["NotifierService"],
            src_app_Service_token_service__WEBPACK_IMPORTED_MODULE_3__["TokenService"],
            src_app_Service_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], ChangePasswordComponent);
    return ChangePasswordComponent;
}());



/***/ }),

/***/ "./src/app/components/project/cold-lead/edit-cold-lead/edit-cold-lead.component.css":
/*!******************************************************************************************!*\
  !*** ./src/app/components/project/cold-lead/edit-cold-lead/edit-cold-lead.component.css ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvamVjdC9jb2xkLWxlYWQvZWRpdC1jb2xkLWxlYWQvZWRpdC1jb2xkLWxlYWQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/project/cold-lead/edit-cold-lead/edit-cold-lead.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/components/project/cold-lead/edit-cold-lead/edit-cold-lead.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrapper\">\n  <!-- Content Header (Page header) -->\n  <section class=\"content-header\">\n    <div class=\"container-fluid\">\n      <div class=\"row mb-2\">\n        <div class=\"col-sm-6\">\n          <h1>Update Lead Data</h1>\n        </div>\n        <div class=\"col-sm-6\">\n          <ol class=\"breadcrumb float-sm-right\">\n            <li class=\"breadcrumb-item\"><a routerLink='/lead'>Lead</a></li>\n            <li class=\"breadcrumb-item active\">Update</li>\n          </ol>\n        </div>\n      </div>\n    </div><!-- /.container-fluid -->\n  </section>\n  <section class=\"content\">\n    <div class=\"container-fluid\">\n      <div class=\"row\">\n        <div class=\"col-md-12\">\n          <div class=\"card card-primary\">\n            <div class=\"card-header\">\n              <h3 class=\"card-title\">Update Lead</h3>\n            </div>\n            <form [formGroup]=\"editForm\" (ngSubmit)=\"onSubmit()\">\n              <div class=\"card-body\">\n                <div class=\"card col-md-12\">\n                  <div class=\"row\">\n                    <div class=\"col-md-6\">\n                      <div class=\"form-group\">\n                        <label>Name</label>\n                        <input type=\"text\" required formControlName=\"person_name\"  class=\"form-control\"  placeholder=\"Enter person name\">\n                        <input type=\"hidden\" required formControlName=\"_id\">\n                      </div>\n                    </div>\n                    <div class=\"col-md-6\">\n                      <div class=\"form-group\">\n                        <label>Company</label>\n                        <input type=\"text\" required formControlName=\"person_company\" name=\"person_company\" class=\"form-control\" placeholder=\"Enter person company\">\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"card col-md-12\">\n                  <div class=\"row\">\n                    <div class=\"col-md-6\">\n                      <div class=\"form-group\">\n                        <label>Email address</label>\n                        <input type=\"email\" required formControlName=\"person_email\" email=\"true\" name=\"person_email\"  class=\"form-control\" placeholder=\"Enter person email\">\n                      </div>\n                    </div>\n                    <div class=\"col-md-6\">\n                      <div class=\"form-group\">\n                        <label>Number</label>\n                        <input type=\"tel\" required formControlName=\"person_phone\" name=\"person_phone\" id=\"person_number\" class=\"form-control\" maxlength=10 pattern=\"[0-9]+\" placeholder=\"Enter person phone number\">\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"card col-md-12\">\n                  <div class=\"row\">\n                    <div class=\"col-md-6\">\n                      <div class=\"form-group\">\n                        <label>Designation</label>\n                        <input type=\"text\" required formControlName=\"person_designation\" name=\"person_designation\" class=\"form-control\" placeholder=\"Enter person Designation\">\n                      </div>\n                    </div>\n                    <div class=\"col-md-6\">\n                      <div class=\"form-group\">\n                        <label>Source</label>\n                        <input type=\"text\" required formControlName=\"contact_source\" name=\"contact_source\" class=\"form-control\" placeholder=\"Enter contacting Source\">\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"card col-md-12\">\n                  <div class=\"row\">\n                    <div class=\"col-md-6\">\n                      <div class=\"form-group\">\n                        <label>Interseted Product</label>\n                        <select  class=\"form-control\" required formControlName=\"interseted_product\"> \n                            <option class=\"form-control\" disabled>Choose a Product</option>                         \n                          <option *ngFor=\"let product of products\"  [ngValue]=\"product.product\">{{product.product}}</option>\n                        </select>\n                        </div>\n                    </div>\n                    <div class=\"col-md-6\">\n                      <div class=\"form-group\">\n                        <label>Location</label>\n                        <input type=\"text\" required formControlName=\"person_location\" name=\"person_location\" class=\"form-control\" placeholder=\"Enter person location\">\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"card col-md-12\">\n                  <div class=\"row\">\n                    <div class=\"col-md-6\">\n                      <div class=\"form-group\">\n                        <label>Date</label>\n                        <input type=\"date\" required formControlName=\"contacted_date\" name=\"contacted_date\" class=\"form-control\" placeholder=\"Enter date\">\n                      </div>\n                    </div>\n                    <div class=\"col-md-6\">\n                      <div class=\"form-group\">\n                        <label>Remark</label>\n                        <input type=\"text\" required formControlName=\"remark\" name=\"remark\" class=\"form-control\" placeholder=\"Enter remark\">\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"card col-md-12\">\n                  <div class=\"row\">\n                    <div class=\"col-md-6\">\n                      <div class=\"form-group\">\n                        <label>Status</label>\n                        <select  class=\"form-control\" required formControlName=\"status\"> \n                            <option class=\"form-control\" disabled>Choose Lead Status</option>                         \n                          <option [ngValue]=0>Fresh Lead</option>\n                          <option [ngValue]=1>Warm Lead</option>\n                          <option [ngValue]=2>Hot Lead</option>\n                          <option [ngValue]=3>Cold Lead</option>\n                          <option [ngValue]=4>Dead Lead</option>\n                        </select>\n                        </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <!-- /.card-body -->\n\n              <div class=\"card-footer\">\n                <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!editForm.valid\">Update</button>\n              </div>\n            </form>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n  <app-left-menu></app-left-menu>\n  <app-footer></app-footer>\n\n</div>"

/***/ }),

/***/ "./src/app/components/project/cold-lead/edit-cold-lead/edit-cold-lead.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/project/cold-lead/edit-cold-lead/edit-cold-lead.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: EditColdLeadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditColdLeadComponent", function() { return EditColdLeadComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_Service_jarwis_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Service/jarwis.service */ "./src/app/Service/jarwis.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EditColdLeadComponent = /** @class */ (function () {
    function EditColdLeadComponent(Router, activateroute, Jarwis, formBuilder) {
        this.Router = Router;
        this.activateroute = activateroute;
        this.Jarwis = Jarwis;
        this.formBuilder = formBuilder;
        this.editForm = this.formBuilder.group({
            _id: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            person_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            person_company: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            person_email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            person_phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            interseted_product: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            person_location: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            contacted_date: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            person_designation: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            contact_source: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            remark: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            status: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
        });
        this.currentUrl = this.activateroute.snapshot.params;
    }
    EditColdLeadComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.Jarwis.getcoldupdateuser(this.currentUrl).subscribe(function (data) { return _this.setvalue(data); });
        this.Jarwis.productlist().subscribe(function (data) { return _this.productlist(data); });
    };
    EditColdLeadComponent.prototype.productlist = function (data) {
        this.products = data.success;
    };
    EditColdLeadComponent.prototype.setvalue = function (data) {
        this.editForm.setValue({
            _id: data._id,
            person_name: data.person_name,
            person_company: data.person_company,
            person_email: data.person_email,
            person_phone: data.person_phone,
            interseted_product: data.interseted_product,
            person_location: data.person_location,
            contacted_date: data.contacted_date,
            person_designation: data.person_designation,
            contact_source: data.contact_source,
            remark: data.remark,
            status: data.status
        });
    };
    EditColdLeadComponent.prototype.onSubmit = function () {
        var _this = this;
        this.Jarwis.updatecoldlead(this.editForm.value).subscribe(function (data) { return _this.updated(data); });
    };
    EditColdLeadComponent.prototype.updated = function (data) {
        if (data.success) {
            this.Router.navigateByUrl('/coldlead');
        }
    };
    EditColdLeadComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-cold-lead',
            template: __webpack_require__(/*! ./edit-cold-lead.component.html */ "./src/app/components/project/cold-lead/edit-cold-lead/edit-cold-lead.component.html"),
            styles: [__webpack_require__(/*! ./edit-cold-lead.component.css */ "./src/app/components/project/cold-lead/edit-cold-lead/edit-cold-lead.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            src_app_Service_jarwis_service__WEBPACK_IMPORTED_MODULE_2__["JarwisService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], EditColdLeadComponent);
    return EditColdLeadComponent;
}());



/***/ }),

/***/ "./src/app/components/project/cold-lead/list-cold-lead/list-cold-lead.component.css":
/*!******************************************************************************************!*\
  !*** ./src/app/components/project/cold-lead/list-cold-lead/list-cold-lead.component.css ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvamVjdC9jb2xkLWxlYWQvbGlzdC1jb2xkLWxlYWQvbGlzdC1jb2xkLWxlYWQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/project/cold-lead/list-cold-lead/list-cold-lead.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/components/project/cold-lead/list-cold-lead/list-cold-lead.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-left-menu></app-left-menu>\n\n<div class=\"content-wrapper\">\n  <!-- Content Header (Page header) -->\n  <section class=\"content-header\">\n    <div class=\"container-fluid\">\n      <div class=\"row mb-2\">\n        <div class=\"col-sm-6\">\n          <h1>Cold Leads</h1>\n        </div>\n        <div class=\"col-sm-6\">\n          <ol class=\"breadcrumb float-sm-right\">\n            <li class=\"breadcrumb-item active\">Cold Leads List</li>\n          </ol>\n        </div>\n      </div>\n    </div><!-- /.container-fluid -->\n  </section>\n  <!-- Main content -->\n  <section class=\"content\">\n    <div class=\"row\">\n      <div class=\"col-12\">\n        <div class=\"card\">\n          <div class=\"card-header\">\n            <h3 class=\"card-title\">Leads Data Listing</h3>\n          </div>\n          <!-- /.card-header -->\n        <div class=\"table-responsive\" *ngIf=\"tData\">\n            <table class=\"table table-striped table-bordered table-sm row-border hover\">\n              <thead>\n                <tr>\n                  <th>Name</th>\n                  <th>Company</th>\n                  <th>Email</th>\n                  <th>Phone</th>\n                  <th>Designation</th>\n                  <th>Interseted In</th>\n                  <th>Location</th>\n                  <th>Date</th>\n                  <th>Source</th>\n                  <th>Remark</th>\n                  <th>Status</th>\n                  <th>Email Sent</th>\n                  <th>Email Response</th>\n                  <th>Action</th>                  \n                </tr>\n              </thead>\n              <tbody *ngIf=\"data?.length > 0\">\n                <tr *ngFor=\"let lead of data\">\n                  <td>{{lead.person_name}}</td>\n                  <td>{{lead.person_company}}</td>\n                  <td>{{lead.person_email}}</td>\n                  <td>{{lead.person_phone}}</td>\n                  <td>{{lead.person_designation}}</td>\n                  <td>{{lead.interseted_product}}</td>\n                  <td>{{lead.person_location}}</td>\n                  <td>{{lead.contacted_date}}</td>\n                  <td>{{lead.contact_source}}</td>\n                  <td>{{lead.remark}}</td>\n                  <td *ngIf=\"lead.status == 3\">Cold Lead</td>\n                  <td>{{lead.email_sent}}</td>\n                  <td>{{lead.email_response}}</td>       \n                  <td><a routerLink=\"edit/{{lead._id}}\"><i class=\"fa fa-eye\"></i></a><i class=\"fa fa-trash\" (click)=\"delete(lead._id)\"></i></td>           \n                </tr>\n              </tbody>\n            </table>\n          </div>\n          <!-- /.card-body -->\n        </div>\n        <!-- /.card -->\n      </div>\n      <!-- /.col -->\n    </div>\n    <!-- /.row -->\n  </section>\n  <!-- /.content -->\n  <app-footer></app-footer>\n</div>"

/***/ }),

/***/ "./src/app/components/project/cold-lead/list-cold-lead/list-cold-lead.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/project/cold-lead/list-cold-lead/list-cold-lead.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: ListColdLeadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListColdLeadComponent", function() { return ListColdLeadComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_Service_jarwis_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/Service/jarwis.service */ "./src/app/Service/jarwis.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListColdLeadComponent = /** @class */ (function () {
    function ListColdLeadComponent(Jarwis, chRef) {
        this.Jarwis = Jarwis;
        this.chRef = chRef;
        this.data = [];
    }
    ListColdLeadComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.Jarwis.getcoldlead().subscribe(function (data) {
            _this.tData = true;
            _this.data = data.success;
            // You'll have to wait that changeDetection occurs and projects data into 
            // the HTML template, you can ask Angular to that for you ;-)
            _this.chRef.detectChanges();
            // Now you can use jQuery DataTables :
            var table = $('table');
            _this.dataTable = table.DataTable({
                "scrollX": true
            });
        });
    };
    ListColdLeadComponent.prototype.delete = function (id) {
        var _this = this;
        this.Jarwis.deletecoldlead(id).subscribe(function (data) { return _this.deletesuccess(data); });
    };
    ListColdLeadComponent.prototype.deletesuccess = function (data) {
        if (data.success) {
            this.tData = false;
            this.ngOnInit();
        }
    };
    ListColdLeadComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-list-cold-lead',
            template: __webpack_require__(/*! ./list-cold-lead.component.html */ "./src/app/components/project/cold-lead/list-cold-lead/list-cold-lead.component.html"),
            styles: [__webpack_require__(/*! ./list-cold-lead.component.css */ "./src/app/components/project/cold-lead/list-cold-lead/list-cold-lead.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_Service_jarwis_service__WEBPACK_IMPORTED_MODULE_1__["JarwisService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], ListColdLeadComponent);
    return ListColdLeadComponent;
}());



/***/ }),

/***/ "./src/app/components/project/contact/add/add.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/project/contact/add/add.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvamVjdC9jb250YWN0L2FkZC9hZGQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/project/contact/add/add.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/project/contact/add/add.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrapper\">\n  <!-- Content Header (Page header) -->\n  <section class=\"content-header\">\n    <div class=\"container-fluid\">\n      <div class=\"row mb-2\">\n        <div class=\"col-sm-6\">\n          <h1>Add contact Data</h1>\n        </div>\n        <div class=\"col-sm-6\">\n          <ol class=\"breadcrumb float-sm-right\">\n            <li class=\"breadcrumb-item\"><a routerLink='/contact'>contact</a></li>\n            <li class=\"breadcrumb-item active\">Add</li>\n          </ol>\n        </div>\n      </div>\n    </div><!-- /.container-fluid -->\n  </section>\n  <section class=\"content\">\n    <div class=\"container-fluid\">\n      <div class=\"row\">\n        <div class=\"col-md-12\">\n          <div class=\"card card-primary\">\n            <div class=\"card-header\">\n              <h3 class=\"card-title\">Add contact</h3>\n            </div>\n            <form #contactAdd=\"ngForm\" (ngSubmit)=\"onSubmit();contactAdd.resetForm()\">\n              <div class=\"card-body\">\n                <div class=\"card col-md-12\">\n                  <div class=\"row\">\n                    <div class=\"col-md-6\">\n                      <div class=\"form-group\">\n                        <label>Name</label>\n                        <input type=\"text\" required [(ngModel)]=\"form.contact_name\" name=\"contact_name\" class=\"form-control\" placeholder=\"Enter person name\">\n                      </div>\n                    </div>\n                    <div class=\"col-md-6\">\n                      <div class=\"form-group\">\n                        <label>Company</label>\n                        <input type=\"text\" required [(ngModel)]=\"form.contact_company\" name=\"contact_company\" class=\"form-control\" placeholder=\"Enter person company\">\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"card col-md-12\">\n                  <div class=\"row\">\n                    <div class=\"col-md-6\">\n                      <div class=\"form-group\">\n                        <label>Email address</label>\n                        <input type=\"email\" required [(ngModel)]=\"form.contact_email\" email=\"true\" name=\"contact_email\" class=\"form-control\" placeholder=\"Enter person email\">\n                      </div>\n                    </div>\n                    <div class=\"col-md-6\">\n                      <div class=\"form-group\">\n                        <label>Number</label>\n                        <input type=\"tel\" required [(ngModel)]=\"form.contact_phone\" name=\"contact_phone\" id=\"contact_number\" class=\"form-control\" maxlength=10 pattern=\"[0-9]+\" placeholder=\"Enter person phone number\">\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <!-- /.card-body -->\n\n              <div class=\"card-footer\">\n                <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!contactAdd.valid\">Submit</button>\n              </div>\n            </form>\n          </div>\n        </div>\n        <div class=\"col-md-12\">\n          <div class=\"card card-primary\">\n            <div class=\"card-header\">\n              <h3 class=\"card-title\">Upload Contact</h3>\n            </div>\n              <div class=\"col-md-10\">\n                <div class=\"form-group\">\n                  <label for=\"exampleInputFile\">File input</label>\n                  \n                    <div class=\"form-control\">\n                      <input type=\"file\" name=\"excel_upload\" required (change)=\"handleFileInput($event)\" accept=\".xlsx/*\" class=\"form-group\">\n                    </div>\n                  <span>upload .xlsx file format</span>\n                </div>\n              </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n  <app-left-menu></app-left-menu>\n  <app-footer></app-footer>\n\n</div>"

/***/ }),

/***/ "./src/app/components/project/contact/add/add.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/project/contact/add/add.component.ts ***!
  \*****************************************************************/
/*! exports provided: AddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddComponent", function() { return AddComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_Service_jarwis_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/Service/jarwis.service */ "./src/app/Service/jarwis.service.ts");
/* harmony import */ var angular_notifier__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-notifier */ "./node_modules/angular-notifier/esm5/angular-notifier.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! xlsx */ "./node_modules/xlsx/xlsx.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AddComponent = /** @class */ (function () {
    function AddComponent(Jarwis, Notifier, Router) {
        this.Jarwis = Jarwis;
        this.Notifier = Notifier;
        this.Router = Router;
        this.form = {
            contact_name: null,
            contact_company: null,
            contact_email: null,
            contact_phone: null
        };
    }
    AddComponent.prototype.ngOnInit = function () {
    };
    AddComponent.prototype.onSubmit = function () {
        var _this = this;
        this.Jarwis.addcontact(this.form).subscribe(function (data) { return _this.formsuccess(data); });
    };
    AddComponent.prototype.formsuccess = function (data) {
        if (data.success) {
            this.Notifier.notify('success', 'Contact Data added successfully');
        }
    };
    AddComponent.prototype.handleFileInput = function (evt) {
        var _this = this;
        /* wire up file reader */
        var target = (evt.target);
        if (target.files.length !== 1)
            throw new Error('Cannot use multiple files');
        var reader = new FileReader();
        reader.onload = function (e) {
            /* read workbook */
            var bstr = e.target.result;
            var wb = xlsx__WEBPACK_IMPORTED_MODULE_4__["read"](bstr, { type: 'binary' });
            /* grab first sheet */
            var wsname = wb.SheetNames[0];
            var ws = wb.Sheets[wsname];
            /* save data */
            /* this.data = <AOA>(XLSX.utils.sheet_to_json(ws, { header: 1 })); */
            _this.data = xlsx__WEBPACK_IMPORTED_MODULE_4__["utils"].sheet_to_json(ws, { raw: true });
            // this.form2.excel_upload = JSON.stringify(this.data)
            var formData = new FormData();
            formData.append('file', JSON.stringify(_this.data));
            _this.Jarwis.contactexcelpost(formData).subscribe(function (data) { return _this.excelresp(data); });
        };
        reader.readAsBinaryString(target.files[0]);
    };
    AddComponent.prototype.excelresp = function (data) {
        this.Notifier.notify('success', 'Excel file uploaded successfully');
        this.Router.navigateByUrl('/lead');
        if (data.error) {
            this.Notifier.notify('success', 'Excel file uploaded successfully');
        }
        else {
            this.Notifier.notify('danger', 'Data already exists');
        }
    };
    AddComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add',
            template: __webpack_require__(/*! ./add.component.html */ "./src/app/components/project/contact/add/add.component.html"),
            styles: [__webpack_require__(/*! ./add.component.css */ "./src/app/components/project/contact/add/add.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_Service_jarwis_service__WEBPACK_IMPORTED_MODULE_1__["JarwisService"],
            angular_notifier__WEBPACK_IMPORTED_MODULE_2__["NotifierService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AddComponent);
    return AddComponent;
}());



/***/ }),

/***/ "./src/app/components/project/contact/edit/edit.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/project/contact/edit/edit.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvamVjdC9jb250YWN0L2VkaXQvZWRpdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/project/contact/edit/edit.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/project/contact/edit/edit.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrapper\">\n  <!-- Content Header (Page header) -->\n  <section class=\"content-header\">\n    <div class=\"container-fluid\">\n      <div class=\"row mb-2\">\n        <div class=\"col-sm-6\">\n          <h1>Update contact Data</h1>\n        </div>\n        <div class=\"col-sm-6\">\n          <ol class=\"breadcrumb float-sm-right\">\n            <li class=\"breadcrumb-item\"><a routerLink='/contact'>contact</a></li>\n            <li class=\"breadcrumb-item active\">Update</li>\n          </ol>\n        </div>\n      </div>\n    </div><!-- /.container-fluid -->\n  </section>\n  <section class=\"content\">\n    <div class=\"container-fluid\">\n      <div class=\"row\">\n        <div class=\"col-md-12\">\n          <div class=\"card card-primary\">\n            <div class=\"card-header\">\n              <h3 class=\"card-title\">Update contact</h3>\n            </div>\n            <form [formGroup]=\"editForm\" (ngSubmit)=\"onSubmit()\">\n              <div class=\"card-body\">\n                <div class=\"card col-md-12\">\n                  <div class=\"row\">\n                    <div class=\"col-md-6\">\n                      <div class=\"form-group\">\n                        <label>Name</label>\n                        <input type=\"text\" required formControlName=\"contact_name\"  class=\"form-control\"  placeholder=\"Enter person name\">\n                        <input type=\"hidden\" required formControlName=\"_id\">\n                      </div>\n                    </div>\n                    <div class=\"col-md-6\">\n                      <div class=\"form-group\">\n                        <label>Company</label>\n                        <input type=\"text\" required formControlName=\"contact_company\" name=\"contact_company\" class=\"form-control\" placeholder=\"Enter person company\">\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"card col-md-12\">\n                  <div class=\"row\">\n                    <div class=\"col-md-6\">\n                      <div class=\"form-group\">\n                        <label>Email address</label>\n                        <input type=\"email\" required formControlName=\"contact_email\" email=\"true\" name=\"contact_email\"  class=\"form-control\" placeholder=\"Enter person email\">\n                      </div>\n                    </div>\n                    <div class=\"col-md-6\">\n                      <div class=\"form-group\">\n                        <label>Number</label>\n                        <input type=\"tel\" required formControlName=\"contact_phone\" name=\"contact_phone\" id=\"contact_number\" class=\"form-control\" maxlength=10 pattern=\"[0-9]+\" placeholder=\"Enter person phone number\">\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <!-- /.card-body -->\n\n              <div class=\"card-footer\">\n                <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!editForm.valid\">Update</button>\n              </div>\n            </form>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n  <app-left-menu></app-left-menu>\n  <app-footer></app-footer>\n\n</div>"

/***/ }),

/***/ "./src/app/components/project/contact/edit/edit.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/project/contact/edit/edit.component.ts ***!
  \*******************************************************************/
/*! exports provided: EditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditComponent", function() { return EditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_Service_jarwis_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Service/jarwis.service */ "./src/app/Service/jarwis.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EditComponent = /** @class */ (function () {
    function EditComponent(Router, activateroute, Jarwis, formBuilder) {
        this.Router = Router;
        this.activateroute = activateroute;
        this.Jarwis = Jarwis;
        this.formBuilder = formBuilder;
        this.editForm = this.formBuilder.group({
            _id: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            contact_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            contact_company: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            contact_email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            contact_phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
        });
        this.currentUrl = this.activateroute.snapshot.params;
    }
    EditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.Jarwis.getupdatecontact(this.currentUrl).subscribe(function (data) { return _this.setvalue(data); });
    };
    EditComponent.prototype.setvalue = function (data) {
        this.editForm.setValue({
            _id: data._id,
            contact_name: data.contact_name,
            contact_company: data.contact_company,
            contact_email: data.contact_email,
            contact_phone: data.contact_phone
        });
    };
    EditComponent.prototype.onSubmit = function () {
        var _this = this;
        this.Jarwis.updatecontact(this.editForm.value).subscribe(function (data) { return _this.updated(data); });
    };
    EditComponent.prototype.updated = function (data) {
        if (data.success) {
            this.Router.navigateByUrl('/contact');
        }
    };
    EditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit',
            template: __webpack_require__(/*! ./edit.component.html */ "./src/app/components/project/contact/edit/edit.component.html"),
            styles: [__webpack_require__(/*! ./edit.component.css */ "./src/app/components/project/contact/edit/edit.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            src_app_Service_jarwis_service__WEBPACK_IMPORTED_MODULE_2__["JarwisService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], EditComponent);
    return EditComponent;
}());



/***/ }),

/***/ "./src/app/components/project/contact/list/list.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/project/contact/list/list.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvamVjdC9jb250YWN0L2xpc3QvbGlzdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/project/contact/list/list.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/project/contact/list/list.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-left-menu></app-left-menu>\n\n<div class=\"content-wrapper\">\n  <!-- Content Header (Page header) -->\n  <section class=\"content-header\">\n    <div class=\"container-fluid\">\n      <div class=\"row mb-2\">\n        <div class=\"col-sm-6\">\n          <h1>contacts</h1>\n        </div>\n        <div class=\"col-sm-6\">\n          <ol class=\"breadcrumb float-sm-right\">\n            <li class=\"breadcrumb-item active\">contacts List</li>\n          </ol>\n        </div>\n      </div>\n    </div><!-- /.container-fluid -->\n  </section>\n  <!-- Main content -->\n  <section class=\"content\">\n    <div class=\"row\">\n      <div class=\"col-12\">\n        <div class=\"card\">\n          <div class=\"card-header\">\n            <h3 class=\"card-title\">Contact Data Listing</h3>\n          </div>\n          <!-- /.card-header -->\n        <div class=\"table-responsive\" *ngIf=\"tData\">\n            <table class=\"table table-striped table-bordered table-sm row-border hover\">\n              <thead>\n                <tr>\n                  <th>Name</th>\n                  <th>Company</th>\n                  <th>Email</th>\n                  <th>Phone</th>\n                  <th>Action</th>                  \n                </tr>\n              </thead>\n              <tbody *ngIf=\"data?.length > 0\">\n                <tr *ngFor=\"let contact of data\">\n                  <td>{{contact.contact_name}}</td>\n                  <td>{{contact.contact_company}}</td>\n                  <td>{{contact.contact_email}}</td>\n                  <td>{{contact.contact_phone}}</td>      \n                  <td><a routerLink=\"edit/{{contact._id}}\"><i class=\"fa fa-eye\"></i></a><i class=\"fa fa-trash\" (click)=\"delete(contact._id)\"></i></td>           \n                </tr>\n              </tbody>\n            </table>\n          </div>\n          <!-- /.card-body -->\n        </div>\n        <!-- /.card -->\n      </div>\n      <!-- /.col -->\n    </div>\n    <!-- /.row -->\n  </section>\n  <!-- /.content -->\n  <app-footer></app-footer>\n</div>"

/***/ }),

/***/ "./src/app/components/project/contact/list/list.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/project/contact/list/list.component.ts ***!
  \*******************************************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_Service_jarwis_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/Service/jarwis.service */ "./src/app/Service/jarwis.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListComponent = /** @class */ (function () {
    function ListComponent(Jarwis, chRef) {
        this.Jarwis = Jarwis;
        this.chRef = chRef;
        this.data = [];
    }
    ListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.Jarwis.getcontact().subscribe(function (data) {
            _this.tData = true;
            _this.data = data.success;
            // You'll have to wait that changeDetection occurs and projects data into 
            // the HTML template, you can ask Angular to that for you ;-)
            _this.chRef.detectChanges();
            // Now you can use jQuery DataTables :
            var table = $('table');
            _this.dataTable = table.DataTable({});
        });
    };
    ListComponent.prototype.delete = function (id) {
        var _this = this;
        this.Jarwis.deletecontact(id).subscribe(function (data) { return _this.deletesuccess(data); });
    };
    ListComponent.prototype.deletesuccess = function (data) {
        if (data.success) {
            this.tData = false;
            this.ngOnInit();
        }
    };
    ListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-list',
            template: __webpack_require__(/*! ./list.component.html */ "./src/app/components/project/contact/list/list.component.html"),
            styles: [__webpack_require__(/*! ./list.component.css */ "./src/app/components/project/contact/list/list.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_Service_jarwis_service__WEBPACK_IMPORTED_MODULE_1__["JarwisService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], ListComponent);
    return ListComponent;
}());



/***/ }),

/***/ "./src/app/components/project/dashboard/dashboard.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/project/dashboard/dashboard.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvamVjdC9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/project/dashboard/dashboard.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/project/dashboard/dashboard.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Content Wrapper. Contains page content -->\r\n<div class=\"content-wrapper\">\r\n    <!-- Content Header (Page header) -->\r\n    <div class=\"content-header\">\r\n        <div class=\"container-fluid\">\r\n            <div class=\"row mb-2\">\r\n                <div class=\"col-sm-6\">\r\n                    <h1 class=\"m-0 text-dark\">Welcome {{username?.name}}</h1>\r\n                </div><!-- /.col -->\r\n                <div class=\"col-sm-6\">\r\n                    <ol class=\"breadcrumb float-sm-right\">\r\n                        <li class=\"breadcrumb-item\"><a href=\"#\">Home</a></li>\r\n                        <li class=\"breadcrumb-item active\">Dashboard v2</li>\r\n                    </ol>\r\n                </div><!-- /.col -->\r\n            </div><!-- /.row -->\r\n        </div><!-- /.container-fluid -->\r\n    </div>\r\n\r\n    <!-- Main content -->\r\n    <section class=\"content\">\r\n        <div class=\"container-fluid\">\r\n            <!-- Small boxes (Stat box) -->\r\n            <div class=\"row\">\r\n                <div class=\"col-lg-3 col-6\">\r\n                    <!-- small box -->\r\n                    <div class=\"small-box bg-primary\">\r\n                        <div class=\"inner\">\r\n                            <h3>{{allLead?.length}}</h3>\r\n\r\n                            <p>All Leads</p>\r\n                        </div>\r\n                        <div class=\"icon\">\r\n                            <i class=\"ion ion-bag\"></i>\r\n                        </div>\r\n                        <a href=\"#\" class=\"small-box-footer\">More info <i class=\"fa fa-arrow-circle-right\"></i></a>\r\n                    </div>\r\n                </div>\r\n                <!-- ./col -->\r\n                <div class=\"col-lg-3 col-6\">\r\n                    <!-- small box -->\r\n                    <div class=\"small-box bg-success\">\r\n                        <div class=\"inner\">\r\n                            <h3>{{freshlead?.success?.length}}</h3>\r\n\r\n                            <p>Fresh Leads</p>\r\n                        </div>\r\n                        <div class=\"icon\">\r\n                            <i class=\"ion ion-stats-bars\"></i>\r\n                        </div>\r\n                        <a href=\"#\" class=\"small-box-footer\">More info <i class=\"fa fa-arrow-circle-right\"></i></a>\r\n                    </div>\r\n                </div>\r\n                <!-- ./col -->\r\n                <div class=\"col-lg-3 col-6\">\r\n                    <!-- small box -->\r\n                    <div class=\"small-box bg-warning\">\r\n                        <div class=\"inner\">\r\n                            <h3>{{warmlead?.success?.length}}</h3>\r\n\r\n                            <p>Warm Leads</p>\r\n                        </div>\r\n                        <div class=\"icon\">\r\n                            <i class=\"ion ion-person-add\"></i>\r\n                        </div>\r\n                        <a href=\"#\" class=\"small-box-footer\">More info <i class=\"fa fa-arrow-circle-right\"></i></a>\r\n                    </div>\r\n                </div>\r\n                <!-- ./col -->\r\n                <div class=\"col-lg-3 col-6\">\r\n                    <!-- small box -->\r\n                    <div class=\"small-box bg-info\">\r\n                        <div class=\"inner\">\r\n                            <h3>{{hotlead?.success?.length}}</h3>\r\n\r\n                            <p>Hot Leads</p>\r\n                        </div>\r\n                        <div class=\"icon\">\r\n                            <i class=\"ion ion-pie-graph\"></i>\r\n                        </div>\r\n                        <a href=\"#\" class=\"small-box-footer\">More info <i class=\"fa fa-arrow-circle-right\"></i></a>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-lg-3 col-6\">\r\n                    <!-- small box -->\r\n                    <div class=\"small-box bg-secondary\">\r\n                        <div class=\"inner\">\r\n                            <h3>{{coldlead?.success?.length}}</h3>\r\n\r\n                            <p>Cold Leads</p>\r\n                        </div>\r\n                        <div class=\"icon\">\r\n                            <i class=\"ion ion-pie-graph\"></i>\r\n                        </div>\r\n                        <a href=\"#\" class=\"small-box-footer\">More info <i class=\"fa fa-arrow-circle-right\"></i></a>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-lg-3 col-6\">\r\n                    <!-- small box -->\r\n                    <div class=\"small-box bg-danger\">\r\n                        <div class=\"inner\">\r\n                            <h3>{{deadlead?.success?.length}}</h3>\r\n\r\n                            <p>Dead Leads</p>\r\n                        </div>\r\n                        <div class=\"icon\">\r\n                            <i class=\"ion ion-pie-graph\"></i>\r\n                        </div>\r\n                        <a href=\"#\" class=\"small-box-footer\">More info <i class=\"fa fa-arrow-circle-right\"></i></a>\r\n                    </div>\r\n                </div>\r\n                <!-- ./col -->\r\n            </div>\r\n\r\n        </div>\r\n    </section>\r\n    <section>\r\n        <div class=\"col-lg-12 col-6\">\r\n            <div class=\"small-box bg-dark\">\r\n                <div class=\"inner\">\r\n                    <button class=\"btn btn-primary\" (click)=\"freshmail()\">Send Intro Mail</button>\r\n                </div>\r\n                <div class=\"inner\">\r\n                    <button class=\"btn btn-primary\" (click)=\"reminder()\">Reminder Mail</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </section>\r\n    <app-left-menu></app-left-menu>\r\n</div>\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/components/project/dashboard/dashboard.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/project/dashboard/dashboard.component.ts ***!
  \*********************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_Service_jarwis_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/Service/jarwis.service */ "./src/app/Service/jarwis.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(Jarwis) {
        this.Jarwis = Jarwis;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.Jarwis.userProfileData().subscribe(function (data) { return _this.response(data); });
        this.Jarwis.getalllead().subscribe(function (data) { return _this.allLead = data; });
        this.Jarwis.getlead().subscribe(function (data) { return _this.freshlead = data; });
        this.Jarwis.getwarmlead().subscribe(function (data) { return _this.warmlead = data; });
        this.Jarwis.gethotlead().subscribe(function (data) { return _this.hotlead = data; });
        this.Jarwis.getcoldlead().subscribe(function (data) { return _this.coldlead = data; });
        this.Jarwis.getdeadlead().subscribe(function (data) { return _this.deadlead = data; });
    };
    DashboardComponent.prototype.response = function (data) {
        this.username = data.success;
    };
    DashboardComponent.prototype.freshmail = function () {
        // console.log('hello')
        this.Jarwis.sendfreshemail().subscribe();
        this.Jarwis.queuework().subscribe();
    };
    DashboardComponent.prototype.reminder = function () {
        // console.log('hello')
        this.Jarwis.sendreminderemail().subscribe();
        this.Jarwis.queuework().subscribe();
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/components/project/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/components/project/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_Service_jarwis_service__WEBPACK_IMPORTED_MODULE_1__["JarwisService"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/components/project/dead-lead/edit-dead-lead/edit-dead-lead.component.css":
/*!******************************************************************************************!*\
  !*** ./src/app/components/project/dead-lead/edit-dead-lead/edit-dead-lead.component.css ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvamVjdC9kZWFkLWxlYWQvZWRpdC1kZWFkLWxlYWQvZWRpdC1kZWFkLWxlYWQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/project/dead-lead/edit-dead-lead/edit-dead-lead.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/components/project/dead-lead/edit-dead-lead/edit-dead-lead.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrapper\">\n  <!-- Content Header (Page header) -->\n  <section class=\"content-header\">\n    <div class=\"container-fluid\">\n      <div class=\"row mb-2\">\n        <div class=\"col-sm-6\">\n          <h1>Update Lead Data</h1>\n        </div>\n        <div class=\"col-sm-6\">\n          <ol class=\"breadcrumb float-sm-right\">\n            <li class=\"breadcrumb-item\"><a routerLink='/lead'>Lead</a></li>\n            <li class=\"breadcrumb-item active\">Update</li>\n          </ol>\n        </div>\n      </div>\n    </div><!-- /.container-fluid -->\n  </section>\n  <section class=\"content\">\n    <div class=\"container-fluid\">\n      <div class=\"row\">\n        <div class=\"col-md-12\">\n          <div class=\"card card-primary\">\n            <div class=\"card-header\">\n              <h3 class=\"card-title\">Update Lead</h3>\n            </div>\n            <form [formGroup]=\"editForm\" (ngSubmit)=\"onSubmit()\">\n              <div class=\"card-body\">\n                <div class=\"card col-md-12\">\n                  <div class=\"row\">\n                    <div class=\"col-md-6\">\n                      <div class=\"form-group\">\n                        <label>Name</label>\n                        <input type=\"text\" required formControlName=\"person_name\"  class=\"form-control\"  placeholder=\"Enter person name\">\n                        <input type=\"hidden\" required formControlName=\"_id\">\n                      </div>\n                    </div>\n                    <div class=\"col-md-6\">\n                      <div class=\"form-group\">\n                        <label>Company</label>\n                        <input type=\"text\" required formControlName=\"person_company\" name=\"person_company\" class=\"form-control\" placeholder=\"Enter person company\">\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"card col-md-12\">\n                  <div class=\"row\">\n                    <div class=\"col-md-6\">\n                      <div class=\"form-group\">\n                        <label>Email address</label>\n                        <input type=\"email\" required formControlName=\"person_email\" email=\"true\" name=\"person_email\"  class=\"form-control\" placeholder=\"Enter person email\">\n                      </div>\n                    </div>\n                    <div class=\"col-md-6\">\n                      <div class=\"form-group\">\n                        <label>Number</label>\n                        <input type=\"tel\" required formControlName=\"person_phone\" name=\"person_phone\" id=\"person_number\" class=\"form-control\" maxlength=10 pattern=\"[0-9]+\" placeholder=\"Enter person phone number\">\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"card col-md-12\">\n                  <div class=\"row\">\n                    <div class=\"col-md-6\">\n                      <div class=\"form-group\">\n                        <label>Designation</label>\n                        <input type=\"text\" required formControlName=\"person_designation\" name=\"person_designation\" class=\"form-control\" placeholder=\"Enter person Designation\">\n                      </div>\n                    </div>\n                    <div class=\"col-md-6\">\n                      <div class=\"form-group\">\n                        <label>Source</label>\n                        <input type=\"text\" required formControlName=\"contact_source\" name=\"contact_source\" class=\"form-control\" placeholder=\"Enter contacting Source\">\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"card col-md-12\">\n                  <div class=\"row\">\n                    <div class=\"col-md-6\">\n                      <div class=\"form-group\">\n                        <label>Interseted Product</label>\n                        <select  class=\"form-control\" required formControlName=\"interseted_product\"> \n                            <option class=\"form-control\" disabled>Choose a Product</option>                         \n                          <option *ngFor=\"let product of products\"  [ngValue]=\"product.product\">{{product.product}}</option>\n                        </select>\n                        </div>\n                    </div>\n                    <div class=\"col-md-6\">\n                      <div class=\"form-group\">\n                        <label>Location</label>\n                        <input type=\"text\" required formControlName=\"person_location\" name=\"person_location\" class=\"form-control\" placeholder=\"Enter person location\">\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"card col-md-12\">\n                  <div class=\"row\">\n                    <div class=\"col-md-6\">\n                      <div class=\"form-group\">\n                        <label>Date</label>\n                        <input type=\"date\" required formControlName=\"contacted_date\" name=\"contacted_date\" class=\"form-control\" placeholder=\"Enter date\">\n                      </div>\n                    </div>\n                    <div class=\"col-md-6\">\n                      <div class=\"form-group\">\n                        <label>Remark</label>\n                        <input type=\"text\" required formControlName=\"remark\" name=\"remark\" class=\"form-control\" placeholder=\"Enter remark\">\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"card col-md-12\">\n                  <div class=\"row\">\n                    <div class=\"col-md-6\">\n                      <div class=\"form-group\">\n                        <label>Status</label>\n                        <select  class=\"form-control\" required formControlName=\"status\"> \n                            <option class=\"form-control\" disabled>Choose Lead Status</option>                         \n                          <option [ngValue]=0>Fresh Lead</option>\n                          <option [ngValue]=1>Warm Lead</option>\n                          <option [ngValue]=2>Hot Lead</option>\n                          <option [ngValue]=3>Cold Lead</option>\n                          <option [ngValue]=4>Dead Lead</option>\n                        </select>\n                        </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <!-- /.card-body -->\n\n              <div class=\"card-footer\">\n                <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!editForm.valid\">Update</button>\n              </div>\n            </form>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n  <app-left-menu></app-left-menu>\n  <app-footer></app-footer>\n\n</div>"

/***/ }),

/***/ "./src/app/components/project/dead-lead/edit-dead-lead/edit-dead-lead.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/project/dead-lead/edit-dead-lead/edit-dead-lead.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: EditDeadLeadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditDeadLeadComponent", function() { return EditDeadLeadComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_Service_jarwis_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Service/jarwis.service */ "./src/app/Service/jarwis.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EditDeadLeadComponent = /** @class */ (function () {
    function EditDeadLeadComponent(Router, activateroute, Jarwis, formBuilder) {
        this.Router = Router;
        this.activateroute = activateroute;
        this.Jarwis = Jarwis;
        this.formBuilder = formBuilder;
        this.editForm = this.formBuilder.group({
            _id: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            person_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            person_company: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            person_email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            person_phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            interseted_product: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            person_location: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            contacted_date: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            person_designation: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            contact_source: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            remark: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            status: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
        });
        this.currentUrl = this.activateroute.snapshot.params;
    }
    EditDeadLeadComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.Jarwis.getdeadupdateuser(this.currentUrl).subscribe(function (data) { return _this.setvalue(data); });
        this.Jarwis.productlist().subscribe(function (data) { return _this.productlist(data); });
    };
    EditDeadLeadComponent.prototype.productlist = function (data) {
        this.products = data.success;
    };
    EditDeadLeadComponent.prototype.setvalue = function (data) {
        this.editForm.setValue({
            _id: data._id,
            person_name: data.person_name,
            person_company: data.person_company,
            person_email: data.person_email,
            person_phone: data.person_phone,
            interseted_product: data.interseted_product,
            person_location: data.person_location,
            contacted_date: data.contacted_date,
            person_designation: data.person_designation,
            contact_source: data.contact_source,
            remark: data.remark,
            status: data.status
        });
    };
    EditDeadLeadComponent.prototype.onSubmit = function () {
        var _this = this;
        this.Jarwis.updatedeadlead(this.editForm.value).subscribe(function (data) { return _this.updated(data); });
    };
    EditDeadLeadComponent.prototype.updated = function (data) {
        if (data.success) {
            this.Router.navigateByUrl('/deadlead');
        }
    };
    EditDeadLeadComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-dead-lead',
            template: __webpack_require__(/*! ./edit-dead-lead.component.html */ "./src/app/components/project/dead-lead/edit-dead-lead/edit-dead-lead.component.html"),
            styles: [__webpack_require__(/*! ./edit-dead-lead.component.css */ "./src/app/components/project/dead-lead/edit-dead-lead/edit-dead-lead.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            src_app_Service_jarwis_service__WEBPACK_IMPORTED_MODULE_2__["JarwisService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], EditDeadLeadComponent);
    return EditDeadLeadComponent;
}());



/***/ }),

/***/ "./src/app/components/project/dead-lead/list-dead-lead/list-dead-lead.component.css":
/*!******************************************************************************************!*\
  !*** ./src/app/components/project/dead-lead/list-dead-lead/list-dead-lead.component.css ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvamVjdC9kZWFkLWxlYWQvbGlzdC1kZWFkLWxlYWQvbGlzdC1kZWFkLWxlYWQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/project/dead-lead/list-dead-lead/list-dead-lead.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/components/project/dead-lead/list-dead-lead/list-dead-lead.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-left-menu></app-left-menu>\n\n<div class=\"content-wrapper\">\n  <!-- Content Header (Page header) -->\n  <section class=\"content-header\">\n    <div class=\"container-fluid\">\n      <div class=\"row mb-2\">\n        <div class=\"col-sm-6\">\n          <h1>Dead Leads</h1>\n        </div>\n        <div class=\"col-sm-6\">\n          <ol class=\"breadcrumb float-sm-right\">\n            <li class=\"breadcrumb-item active\">Dead Leads List</li>\n          </ol>\n        </div>\n      </div>\n    </div><!-- /.container-fluid -->\n  </section>\n  <!-- Main content -->\n  <section class=\"content\">\n    <div class=\"row\">\n      <div class=\"col-12\">\n        <div class=\"card\">\n          <div class=\"card-header\">\n            <h3 class=\"card-title\">Leads Data Listing</h3>\n          </div>\n          <!-- /.card-header -->\n        <div class=\"table-responsive\" *ngIf=\"tData\">\n            <table class=\"table table-striped table-bordered table-sm row-border hover\">\n              <thead>\n                <tr>\n                  <th>Name</th>\n                  <th>Company</th>\n                  <th>Email</th>\n                  <th>Phone</th>\n                  <th>Designation</th>\n                  <th>Interseted In</th>\n                  <th>Location</th>\n                  <th>Date</th>\n                  <th>Source</th>\n                  <th>Remark</th>\n                  <th>Status</th>\n                  <th>Email Sent</th>\n                  <th>Email Response</th>\n                  <th>Action</th>                  \n                </tr>\n              </thead>\n              <tbody *ngIf=\"data?.length > 0\">\n                <tr *ngFor=\"let lead of data\">\n                  <td>{{lead.person_name}}</td>\n                  <td>{{lead.person_company}}</td>\n                  <td>{{lead.person_email}}</td>\n                  <td>{{lead.person_phone}}</td>\n                  <td>{{lead.person_designation}}</td>\n                  <td>{{lead.interseted_product}}</td>\n                  <td>{{lead.person_location}}</td>\n                  <td>{{lead.contacted_date}}</td>\n                  <td>{{lead.contact_source}}</td>\n                  <td>{{lead.remark}}</td>\n                  <td *ngIf=\"lead.status == 4\">Dead Lead</td>\n                  <td>{{lead.email_sent}}</td>\n                  <td>{{lead.email_response}}</td>       \n                  <td><a routerLink=\"edit/{{lead._id}}\"><i class=\"fa fa-eye\"></i></a><i class=\"fa fa-trash\" (click)=\"delete(lead._id)\"></i></td>           \n                </tr>\n              </tbody>\n            </table>\n          </div>\n          <!-- /.card-body -->\n        </div>\n        <!-- /.card -->\n      </div>\n      <!-- /.col -->\n    </div>\n    <!-- /.row -->\n  </section>\n  <!-- /.content -->\n  <app-footer></app-footer>\n</div>"

/***/ }),

/***/ "./src/app/components/project/dead-lead/list-dead-lead/list-dead-lead.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/project/dead-lead/list-dead-lead/list-dead-lead.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: ListDeadLeadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListDeadLeadComponent", function() { return ListDeadLeadComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_Service_jarwis_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/Service/jarwis.service */ "./src/app/Service/jarwis.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListDeadLeadComponent = /** @class */ (function () {
    function ListDeadLeadComponent(Jarwis, chRef) {
        this.Jarwis = Jarwis;
        this.chRef = chRef;
        this.data = [];
    }
    ListDeadLeadComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.Jarwis.getdeadlead().subscribe(function (data) {
            _this.tData = true;
            _this.data = data.success;
            // You'll have to wait that changeDetection occurs and projects data into 
            // the HTML template, you can ask Angular to that for you ;-)
            _this.chRef.detectChanges();
            // Now you can use jQuery DataTables :
            var table = $('table');
            _this.dataTable = table.DataTable({
                "scrollX": true
            });
        });
    };
    ListDeadLeadComponent.prototype.delete = function (id) {
        var _this = this;
        this.Jarwis.deletedeadlead(id).subscribe(function (data) { return _this.deletesuccess(data); });
    };
    ListDeadLeadComponent.prototype.deletesuccess = function (data) {
        if (data.success) {
            this.tData = false;
            this.ngOnInit();
        }
    };
    ListDeadLeadComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-list-dead-lead',
            template: __webpack_require__(/*! ./list-dead-lead.component.html */ "./src/app/components/project/dead-lead/list-dead-lead/list-dead-lead.component.html"),
            styles: [__webpack_require__(/*! ./list-dead-lead.component.css */ "./src/app/components/project/dead-lead/list-dead-lead/list-dead-lead.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_Service_jarwis_service__WEBPACK_IMPORTED_MODULE_1__["JarwisService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], ListDeadLeadComponent);
    return ListDeadLeadComponent;
}());



/***/ }),

/***/ "./src/app/components/project/footer/footer.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/project/footer/footer.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvamVjdC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/project/footer/footer.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/project/footer/footer.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"main-footer\">\r\n  <strong>Copyright &copy; 2014-2019.</strong>\r\n  All rights reserved.\r\n  <div class=\"float-right d-none d-sm-inline-block\">\r\n    <b>Version</b> 3.0.0-alpha\r\n  </div>\r\n</footer>"

/***/ }),

/***/ "./src/app/components/project/footer/footer.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/project/footer/footer.component.ts ***!
  \***************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/components/project/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/components/project/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/project/hot-lead/edit-hot-lead/edit-hot-lead.component.css":
/*!***************************************************************************************!*\
  !*** ./src/app/components/project/hot-lead/edit-hot-lead/edit-hot-lead.component.css ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvamVjdC9ob3QtbGVhZC9lZGl0LWhvdC1sZWFkL2VkaXQtaG90LWxlYWQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/project/hot-lead/edit-hot-lead/edit-hot-lead.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/components/project/hot-lead/edit-hot-lead/edit-hot-lead.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrapper\">\n  <!-- Content Header (Page header) -->\n  <section class=\"content-header\">\n    <div class=\"container-fluid\">\n      <div class=\"row mb-2\">\n        <div class=\"col-sm-6\">\n          <h1>Update Lead Data</h1>\n        </div>\n        <div class=\"col-sm-6\">\n          <ol class=\"breadcrumb float-sm-right\">\n            <li class=\"breadcrumb-item\"><a routerLink='/lead'>Lead</a></li>\n            <li class=\"breadcrumb-item active\">Update</li>\n          </ol>\n        </div>\n      </div>\n    </div><!-- /.container-fluid -->\n  </section>\n  <section class=\"content\">\n    <div class=\"container-fluid\">\n      <div class=\"row\">\n        <div class=\"col-md-12\">\n          <div class=\"card card-primary\">\n            <div class=\"card-header\">\n              <h3 class=\"card-title\">Update Lead</h3>\n            </div>\n            <form [formGroup]=\"editForm\" (ngSubmit)=\"onSubmit()\">\n              <div class=\"card-body\">\n                <div class=\"card col-md-12\">\n                  <div class=\"row\">\n                    <div class=\"col-md-6\">\n                      <div class=\"form-group\">\n                        <label>Name</label>\n                        <input type=\"text\" required formControlName=\"person_name\"  class=\"form-control\"  placeholder=\"Enter person name\">\n                        <input type=\"hidden\" required formControlName=\"_id\">\n                      </div>\n                    </div>\n                    <div class=\"col-md-6\">\n                      <div class=\"form-group\">\n                        <label>Company</label>\n                        <input type=\"text\" required formControlName=\"person_company\" name=\"person_company\" class=\"form-control\" placeholder=\"Enter person company\">\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"card col-md-12\">\n                  <div class=\"row\">\n                    <div class=\"col-md-6\">\n                      <div class=\"form-group\">\n                        <label>Email address</label>\n                        <input type=\"email\" required formControlName=\"person_email\" email=\"true\" name=\"person_email\"  class=\"form-control\" placeholder=\"Enter person email\">\n                      </div>\n                    </div>\n                    <div class=\"col-md-6\">\n                      <div class=\"form-group\">\n                        <label>Number</label>\n                        <input type=\"tel\" required formControlName=\"person_phone\" name=\"person_phone\" id=\"person_number\" class=\"form-control\" maxlength=10 pattern=\"[0-9]+\" placeholder=\"Enter person phone number\">\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"card col-md-12\">\n                  <div class=\"row\">\n                    <div class=\"col-md-6\">\n                      <div class=\"form-group\">\n                        <label>Designation</label>\n                        <input type=\"text\" required formControlName=\"person_designation\" name=\"person_designation\" class=\"form-control\" placeholder=\"Enter person Designation\">\n                      </div>\n                    </div>\n                    <div class=\"col-md-6\">\n                      <div class=\"form-group\">\n                        <label>Source</label>\n                        <input type=\"text\" required formControlName=\"contact_source\" name=\"contact_source\" class=\"form-control\" placeholder=\"Enter contacting Source\">\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"card col-md-12\">\n                  <div class=\"row\">\n                    <div class=\"col-md-6\">\n                      <div class=\"form-group\">\n                        <label>Interseted Product</label>\n                        <select  class=\"form-control\" required formControlName=\"interseted_product\"> \n                            <option class=\"form-control\" disabled>Choose a Product</option>                         \n                          <option *ngFor=\"let product of products\"  [ngValue]=\"product.product\">{{product.product}}</option>\n                        </select>\n                        </div>\n                    </div>\n                    <div class=\"col-md-6\">\n                      <div class=\"form-group\">\n                        <label>Location</label>\n                        <input type=\"text\" required formControlName=\"person_location\" name=\"person_location\" class=\"form-control\" placeholder=\"Enter person location\">\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"card col-md-12\">\n                  <div class=\"row\">\n                    <div class=\"col-md-6\">\n                      <div class=\"form-group\">\n                        <label>Date</label>\n                        <input type=\"date\" required formControlName=\"contacted_date\" name=\"contacted_date\" class=\"form-control\" placeholder=\"Enter date\">\n                      </div>\n                    </div>\n                    <div class=\"col-md-6\">\n                      <div class=\"form-group\">\n                        <label>Remark</label>\n                        <input type=\"text\" required formControlName=\"remark\" name=\"remark\" class=\"form-control\" placeholder=\"Enter remark\">\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"card col-md-12\">\n                  <div class=\"row\">\n                    <div class=\"col-md-6\">\n                      <div class=\"form-group\">\n                        <label>Status</label>\n                        <select  class=\"form-control\" required formControlName=\"status\"> \n                            <option class=\"form-control\" disabled>Choose Lead Status</option>                         \n                          <option [ngValue]=0>Fresh Lead</option>\n                          <option [ngValue]=1>Warm Lead</option>\n                          <option [ngValue]=2>Hot Lead</option>\n                          <option [ngValue]=3>Cold Lead</option>\n                          <option [ngValue]=4>Dead Lead</option>\n                        </select>\n                        </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <!-- /.card-body -->\n\n              <div class=\"card-footer\">\n                <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!editForm.valid\">Update</button>\n              </div>\n            </form>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n  <app-left-menu></app-left-menu>\n  <app-footer></app-footer>\n\n</div>"

/***/ }),

/***/ "./src/app/components/project/hot-lead/edit-hot-lead/edit-hot-lead.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/components/project/hot-lead/edit-hot-lead/edit-hot-lead.component.ts ***!
  \**************************************************************************************/
/*! exports provided: EditHotLeadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditHotLeadComponent", function() { return EditHotLeadComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_Service_jarwis_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Service/jarwis.service */ "./src/app/Service/jarwis.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EditHotLeadComponent = /** @class */ (function () {
    function EditHotLeadComponent(Router, activateroute, Jarwis, formBuilder) {
        this.Router = Router;
        this.activateroute = activateroute;
        this.Jarwis = Jarwis;
        this.formBuilder = formBuilder;
        this.editForm = this.formBuilder.group({
            _id: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            person_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            person_company: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            person_email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            person_phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            interseted_product: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            person_location: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            contacted_date: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            person_designation: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            contact_source: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            remark: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            status: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
        });
        this.currentUrl = this.activateroute.snapshot.params;
    }
    EditHotLeadComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.Jarwis.gethotupdateuser(this.currentUrl).subscribe(function (data) { return _this.setvalue(data); });
        this.Jarwis.productlist().subscribe(function (data) { return _this.productlist(data); });
    };
    EditHotLeadComponent.prototype.productlist = function (data) {
        this.products = data.success;
    };
    EditHotLeadComponent.prototype.setvalue = function (data) {
        this.editForm.setValue({
            _id: data._id,
            person_name: data.person_name,
            person_company: data.person_company,
            person_email: data.person_email,
            person_phone: data.person_phone,
            interseted_product: data.interseted_product,
            person_location: data.person_location,
            contacted_date: data.contacted_date,
            person_designation: data.person_designation,
            contact_source: data.contact_source,
            remark: data.remark,
            status: data.status
        });
    };
    EditHotLeadComponent.prototype.onSubmit = function () {
        var _this = this;
        this.Jarwis.updatehotlead(this.editForm.value).subscribe(function (data) { return _this.updated(data); });
    };
    EditHotLeadComponent.prototype.updated = function (data) {
        if (data.success) {
            this.Router.navigateByUrl('/hotlead');
        }
    };
    EditHotLeadComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-hot-lead',
            template: __webpack_require__(/*! ./edit-hot-lead.component.html */ "./src/app/components/project/hot-lead/edit-hot-lead/edit-hot-lead.component.html"),
            styles: [__webpack_require__(/*! ./edit-hot-lead.component.css */ "./src/app/components/project/hot-lead/edit-hot-lead/edit-hot-lead.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            src_app_Service_jarwis_service__WEBPACK_IMPORTED_MODULE_2__["JarwisService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], EditHotLeadComponent);
    return EditHotLeadComponent;
}());



/***/ }),

/***/ "./src/app/components/project/hot-lead/list-hot-lead/list-hot-lead.component.css":
/*!***************************************************************************************!*\
  !*** ./src/app/components/project/hot-lead/list-hot-lead/list-hot-lead.component.css ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvamVjdC9ob3QtbGVhZC9saXN0LWhvdC1sZWFkL2xpc3QtaG90LWxlYWQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/project/hot-lead/list-hot-lead/list-hot-lead.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/components/project/hot-lead/list-hot-lead/list-hot-lead.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-left-menu></app-left-menu>\n\n<div class=\"content-wrapper\">\n  <!-- Content Header (Page header) -->\n  <section class=\"content-header\">\n    <div class=\"container-fluid\">\n      <div class=\"row mb-2\">\n        <div class=\"col-sm-6\">\n          <h1>Hot Leads</h1>\n        </div>\n        <div class=\"col-sm-6\">\n          <ol class=\"breadcrumb float-sm-right\">\n            <li class=\"breadcrumb-item active\">Hot Leads List</li>\n          </ol>\n        </div>\n      </div>\n    </div><!-- /.container-fluid -->\n  </section>\n  <!-- Main content -->\n  <section class=\"content\">\n    <div class=\"row\">\n      <div class=\"col-12\">\n        <div class=\"card\">\n          <div class=\"card-header\">\n            <h3 class=\"card-title\">Leads Data Listing</h3>\n          </div>\n          <!-- /.card-header -->\n        <div class=\"table-responsive\" *ngIf=\"tData\">\n            <table class=\"table table-striped table-bordered table-sm row-border hover\">\n              <thead>\n                <tr>\n                  <th>Name</th>\n                  <th>Company</th>\n                  <th>Email</th>\n                  <th>Phone</th>\n                  <th>Designation</th>\n                  <th>Interseted In</th>\n                  <th>Location</th>\n                  <th>Date</th>\n                  <th>Source</th>\n                  <th>Remark</th>\n                  <th>Status</th>\n                  <th>Email Sent</th>\n                  <th>Email Response</th>\n                  <th>Action</th>                  \n                </tr>\n              </thead>\n              <tbody *ngIf=\"data?.length > 0\">\n                <tr *ngFor=\"let lead of data\">\n                  <td>{{lead.person_name}}</td>\n                  <td>{{lead.person_company}}</td>\n                  <td>{{lead.person_email}}</td>\n                  <td>{{lead.person_phone}}</td>\n                  <td>{{lead.person_designation}}</td>\n                  <td>{{lead.interseted_product}}</td>\n                  <td>{{lead.person_location}}</td>\n                  <td>{{lead.contacted_date}}</td>\n                  <td>{{lead.contact_source}}</td>\n                  <td>{{lead.remark}}</td>\n                  <td *ngIf=\"lead.status == 2\">Hot Lead</td>\n                  <td>{{lead.email_sent}}</td>\n                  <td>{{lead.email_response}}</td>       \n                  <td><a routerLink=\"edit/{{lead._id}}\"><i class=\"fa fa-eye\"></i></a><i class=\"fa fa-trash\" (click)=\"delete(lead._id)\"></i></td>           \n                </tr>\n              </tbody>\n            </table>\n          </div>\n          <!-- /.card-body -->\n        </div>\n        <!-- /.card -->\n      </div>\n      <!-- /.col -->\n    </div>\n    <!-- /.row -->\n  </section>\n  <!-- /.content -->\n  <app-footer></app-footer>\n</div>"

/***/ }),

/***/ "./src/app/components/project/hot-lead/list-hot-lead/list-hot-lead.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/components/project/hot-lead/list-hot-lead/list-hot-lead.component.ts ***!
  \**************************************************************************************/
/*! exports provided: ListHotLeadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListHotLeadComponent", function() { return ListHotLeadComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_Service_jarwis_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/Service/jarwis.service */ "./src/app/Service/jarwis.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListHotLeadComponent = /** @class */ (function () {
    function ListHotLeadComponent(Jarwis, chRef) {
        this.Jarwis = Jarwis;
        this.chRef = chRef;
        this.data = [];
    }
    ListHotLeadComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.Jarwis.gethotlead().subscribe(function (data) {
            _this.tData = true;
            _this.data = data.success;
            // You'll have to wait that changeDetection occurs and projects data into 
            // the HTML template, you can ask Angular to that for you ;-)
            _this.chRef.detectChanges();
            // Now you can use jQuery DataTables :
            var table = $('table');
            _this.dataTable = table.DataTable({
                "scrollX": true
            });
        });
    };
    ListHotLeadComponent.prototype.delete = function (id) {
        var _this = this;
        this.Jarwis.deletehotlead(id).subscribe(function (data) { return _this.deletesuccess(data); });
    };
    ListHotLeadComponent.prototype.deletesuccess = function (data) {
        if (data.success) {
            this.tData = false;
            this.ngOnInit();
        }
    };
    ListHotLeadComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-list-hot-lead',
            template: __webpack_require__(/*! ./list-hot-lead.component.html */ "./src/app/components/project/hot-lead/list-hot-lead/list-hot-lead.component.html"),
            styles: [__webpack_require__(/*! ./list-hot-lead.component.css */ "./src/app/components/project/hot-lead/list-hot-lead/list-hot-lead.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_Service_jarwis_service__WEBPACK_IMPORTED_MODULE_1__["JarwisService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], ListHotLeadComponent);
    return ListHotLeadComponent;
}());



/***/ }),

/***/ "./src/app/components/project/leads/edit-lead/edit-lead.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/components/project/leads/edit-lead/edit-lead.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvamVjdC9sZWFkcy9lZGl0LWxlYWQvZWRpdC1sZWFkLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/project/leads/edit-lead/edit-lead.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components/project/leads/edit-lead/edit-lead.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrapper\">\n  <!-- Content Header (Page header) -->\n  <section class=\"content-header\">\n    <div class=\"container-fluid\">\n      <div class=\"row mb-2\">\n        <div class=\"col-sm-6\">\n          <h1>Update Lead Data</h1>\n        </div>\n        <div class=\"col-sm-6\">\n          <ol class=\"breadcrumb float-sm-right\">\n            <li class=\"breadcrumb-item\"><a routerLink='/lead'>Lead</a></li>\n            <li class=\"breadcrumb-item active\">Update</li>\n          </ol>\n        </div>\n      </div>\n    </div><!-- /.container-fluid -->\n  </section>\n  <section class=\"content\">\n    <div class=\"container-fluid\">\n      <div class=\"row\">\n        <div class=\"col-md-12\">\n          <div class=\"card card-primary\">\n            <div class=\"card-header\">\n              <h3 class=\"card-title\">Update Lead</h3>\n            </div>\n            <form [formGroup]=\"editForm\" (ngSubmit)=\"onSubmit()\">\n              <div class=\"card-body\">\n                <div class=\"card col-md-12\">\n                  <div class=\"row\">\n                    <div class=\"col-md-6\">\n                      <div class=\"form-group\">\n                        <label>Name</label>\n                        <input type=\"text\" required formControlName=\"person_name\"  class=\"form-control\"  placeholder=\"Enter person name\">\n                        <input type=\"hidden\" required formControlName=\"_id\">\n                      </div>\n                    </div>\n                    <div class=\"col-md-6\">\n                      <div class=\"form-group\">\n                        <label>Company</label>\n                        <input type=\"text\" required formControlName=\"person_company\" name=\"person_company\" class=\"form-control\" placeholder=\"Enter person company\">\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"card col-md-12\">\n                  <div class=\"row\">\n                    <div class=\"col-md-6\">\n                      <div class=\"form-group\">\n                        <label>Email address</label>\n                        <input type=\"email\" required formControlName=\"person_email\" email=\"true\" name=\"person_email\"  class=\"form-control\" placeholder=\"Enter person email\">\n                      </div>\n                    </div>\n                    <div class=\"col-md-6\">\n                      <div class=\"form-group\">\n                        <label>Number</label>\n                        <input type=\"tel\" required formControlName=\"person_phone\" name=\"person_phone\" id=\"person_number\" class=\"form-control\" maxlength=10 pattern=\"[0-9]+\" placeholder=\"Enter person phone number\">\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"card col-md-12\">\n                  <div class=\"row\">\n                    <div class=\"col-md-6\">\n                      <div class=\"form-group\">\n                        <label>Designation</label>\n                        <input type=\"text\" required formControlName=\"person_designation\" name=\"person_designation\" class=\"form-control\" placeholder=\"Enter person Designation\">\n                      </div>\n                    </div>\n                    <div class=\"col-md-6\">\n                      <div class=\"form-group\">\n                        <label>Source</label>\n                        <input type=\"text\" required formControlName=\"contact_source\" name=\"contact_source\" class=\"form-control\" placeholder=\"Enter contacting Source\">\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"card col-md-12\">\n                  <div class=\"row\">\n                    <div class=\"col-md-6\">\n                      <div class=\"form-group\">\n                        <label>Interseted Product</label>\n                        <select  class=\"form-control\" required formControlName=\"interseted_product\"> \n                            <option class=\"form-control\" disabled>Choose a Product</option>                         \n                          <option *ngFor=\"let product of products\"  [ngValue]=\"product.product\">{{product.product}}</option>\n                        </select>\n                        </div>\n                    </div>\n                    <div class=\"col-md-6\">\n                      <div class=\"form-group\">\n                        <label>Location</label>\n                        <input type=\"text\" required formControlName=\"person_location\" name=\"person_location\" class=\"form-control\" placeholder=\"Enter person location\">\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"card col-md-12\">\n                  <div class=\"row\">\n                    <div class=\"col-md-6\">\n                      <div class=\"form-group\">\n                        <label>Date</label>\n                        <input type=\"date\" required formControlName=\"contacted_date\" name=\"contacted_date\" class=\"form-control\" placeholder=\"Enter date\">\n                      </div>\n                    </div>\n                    <div class=\"col-md-6\">\n                      <div class=\"form-group\">\n                        <label>Remark</label>\n                        <input type=\"text\" required formControlName=\"remark\" name=\"remark\" class=\"form-control\" placeholder=\"Enter remark\">\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"card col-md-12\">\n                  <div class=\"row\">\n                    <div class=\"col-md-6\">\n                      <div class=\"form-group\">\n                        <label>Status</label>\n                        <select  class=\"form-control\" required formControlName=\"status\"> \n                            <option class=\"form-control\" disabled>Choose Lead Status</option>                         \n                          <option [ngValue]=0>Fresh Lead</option>\n                          <option [ngValue]=1>Warm Lead</option>\n                          <option [ngValue]=2>Hot Lead</option>\n                          <option [ngValue]=3>Cold Lead</option>\n                          <option [ngValue]=4>Dead Lead</option>\n                        </select>\n                        </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <!-- /.card-body -->\n\n              <div class=\"card-footer\">\n                <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!editForm.valid\">Update</button>\n              </div>\n            </form>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n  <app-left-menu></app-left-menu>\n  <app-footer></app-footer>\n\n</div>"

/***/ }),

/***/ "./src/app/components/project/leads/edit-lead/edit-lead.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/project/leads/edit-lead/edit-lead.component.ts ***!
  \***************************************************************************/
/*! exports provided: EditLeadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditLeadComponent", function() { return EditLeadComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_Service_jarwis_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Service/jarwis.service */ "./src/app/Service/jarwis.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EditLeadComponent = /** @class */ (function () {
    function EditLeadComponent(Router, activateroute, Jarwis, formBuilder) {
        this.Router = Router;
        this.activateroute = activateroute;
        this.Jarwis = Jarwis;
        this.formBuilder = formBuilder;
        this.editForm = this.formBuilder.group({
            _id: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            person_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            person_company: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            person_email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            person_phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            interseted_product: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            person_location: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            contacted_date: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            person_designation: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            contact_source: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            remark: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            status: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
        });
        this.currentUrl = this.activateroute.snapshot.params;
    }
    EditLeadComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.Jarwis.getupdateuser(this.currentUrl).subscribe(function (data) { return _this.setvalue(data); });
        this.Jarwis.productlist().subscribe(function (data) { return _this.productlist(data); }
        // data => console.log(data)
        );
        // console.log(this.products)
    };
    EditLeadComponent.prototype.productlist = function (data) {
        // console.log(data)
        this.products = data.success;
    };
    EditLeadComponent.prototype.setvalue = function (data) {
        console.log(data);
        this.editForm.setValue({
            _id: data._id,
            person_name: data.person_name,
            person_company: data.person_company,
            person_email: data.person_email,
            person_phone: data.person_phone,
            interseted_product: data.interseted_product,
            person_location: data.person_location,
            contacted_date: data.contacted_date,
            person_designation: data.person_designation,
            contact_source: data.contact_source,
            remark: data.remark,
            status: data.status
        });
    };
    EditLeadComponent.prototype.onSubmit = function () {
        var _this = this;
        this.Jarwis.updatelead(this.editForm.value).subscribe(function (data) { return _this.updated(data); });
    };
    EditLeadComponent.prototype.updated = function (data) {
        if (data.success) {
            this.Router.navigateByUrl('/lead');
        }
    };
    EditLeadComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-lead',
            template: __webpack_require__(/*! ./edit-lead.component.html */ "./src/app/components/project/leads/edit-lead/edit-lead.component.html"),
            styles: [__webpack_require__(/*! ./edit-lead.component.css */ "./src/app/components/project/leads/edit-lead/edit-lead.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            src_app_Service_jarwis_service__WEBPACK_IMPORTED_MODULE_2__["JarwisService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], EditLeadComponent);
    return EditLeadComponent;
}());



/***/ }),

/***/ "./src/app/components/project/leads/lead-add/lead-add.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/project/leads/lead-add/lead-add.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvamVjdC9sZWFkcy9sZWFkLWFkZC9sZWFkLWFkZC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/project/leads/lead-add/lead-add.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/project/leads/lead-add/lead-add.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrapper\">\n  <!-- Content Header (Page header) -->\n  <section class=\"content-header\">\n    <div class=\"container-fluid\">\n      <div class=\"row mb-2\">\n        <div class=\"col-sm-6\">\n          <h1>Add Lead Data</h1>\n        </div>\n        <div class=\"col-sm-6\">\n          <ol class=\"breadcrumb float-sm-right\">\n            <li class=\"breadcrumb-item\"><a routerLink='/lead'>Lead</a></li>\n            <li class=\"breadcrumb-item active\">Add</li>\n          </ol>\n        </div>\n      </div>\n    </div><!-- /.container-fluid -->\n  </section>\n  <section class=\"content\">\n    <div class=\"container-fluid\">\n      <div class=\"row\">\n        <div class=\"col-md-12\">\n          <div class=\"card card-primary\">\n            <div class=\"card-header\">\n              <h3 class=\"card-title\">Add Lead</h3>\n            </div>\n            <form #leadAdd=\"ngForm\" (ngSubmit)=\"onSubmit();leadAdd.resetForm()\">\n              <div class=\"card-body\">\n                <div class=\"card col-md-12\">\n                  <div class=\"row\">\n                    <div class=\"col-md-6\">\n                      <div class=\"form-group\">\n                        <label>Name</label>\n                        <input type=\"text\" required [(ngModel)]=\"form.person_name\" name=\"person_name\" class=\"form-control\" placeholder=\"Enter person name\">\n                      </div>\n                    </div>\n                    <div class=\"col-md-6\">\n                      <div class=\"form-group\">\n                        <label>Company</label>\n                        <input type=\"text\" required [(ngModel)]=\"form.person_company\" name=\"person_company\" class=\"form-control\" placeholder=\"Enter person company\">\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"card col-md-12\">\n                  <div class=\"row\">\n                    <div class=\"col-md-6\">\n                      <div class=\"form-group\">\n                        <label>Email address</label>\n                        <input type=\"email\" required [(ngModel)]=\"form.person_email\" email=\"true\" name=\"person_email\" class=\"form-control\" placeholder=\"Enter person email\">\n                      </div>\n                    </div>\n                    <div class=\"col-md-6\">\n                      <div class=\"form-group\">\n                        <label>Number</label>\n                        <input type=\"tel\" required [(ngModel)]=\"form.person_phone\" name=\"person_phone\" id=\"person_number\" class=\"form-control\" maxlength=10 pattern=\"[0-9]+\" placeholder=\"Enter person phone number\">\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"card col-md-12\">\n                  <div class=\"row\">\n                    <div class=\"col-md-6\">\n                      <div class=\"form-group\">\n                        <label>Designation</label>\n                        <input type=\"text\" required [(ngModel)]=\"form.person_designation\" name=\"person_designation\" class=\"form-control\" placeholder=\"Enter person Designation\">\n                      </div>\n                    </div>\n                    <div class=\"col-md-6\">\n                      <div class=\"form-group\">\n                        <label>Source</label>\n                        <input type=\"text\" required [(ngModel)]=\"form.contact_source\" name=\"contact_source\" class=\"form-control\" placeholder=\"Enter contacting Source\">\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"card col-md-12\">\n                  <div class=\"row\">\n                    <div class=\"col-md-6\">\n                      <div class=\"form-group\">\n                        <label>Interseted Product</label>\n                        <select [(ngModel)]=\"form.interseted_product\" class=\"form-control\" required name=\"interseted_product\"> \n                            <option class=\"form-control\" disabled>Choose a Product</option>                         \n                          <option *ngFor=\"let product of products\" [ngValue]=\"product.product\">{{product.product}}</option>\n                        </select>\n                        </div>\n                    </div>\n                    <div class=\"col-md-6\">\n                      <div class=\"form-group\">\n                        <label>Location</label>\n                        <input type=\"text\" required [(ngModel)]=\"form.person_location\" name=\"person_location\" class=\"form-control\" placeholder=\"Enter person location\">\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"card col-md-12\">\n                  <div class=\"row\">\n                    <div class=\"col-md-6\">\n                      <div class=\"form-group\">\n                        <label>Date</label>\n                        <input type=\"date\" required [(ngModel)]=\"form.contacted_date\" name=\"contacted_date\" class=\"form-control\" placeholder=\"Enter date\">\n                      </div>\n                    </div>\n                    <div class=\"col-md-6\">\n                      <div class=\"form-group\">\n                        <label>Remark</label>\n                        <input type=\"text\" required [(ngModel)]=\"form.remark\" name=\"remark\" class=\"form-control\" placeholder=\"Enter remark\">\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <!-- /.card-body -->\n\n              <div class=\"card-footer\">\n                <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!leadAdd.valid\">Submit</button>\n              </div>\n            </form>\n          </div>\n        </div>\n        <div class=\"col-md-12\">\n          <div class=\"card card-primary\">\n            <div class=\"card-header\">\n              <h3 class=\"card-title\">Upload Leads</h3>\n            </div>\n              <div class=\"col-md-10\">\n                <div class=\"form-group\">\n                  <label for=\"exampleInputFile\">File input</label>\n                  \n                    <div class=\"form-control\">\n                      <input type=\"file\" name=\"excel_upload\" required (change)=\"handleFileInput($event)\" accept=\".xlsx/*\" class=\"form-group\">\n                    </div>\n                  <span>upload .xlsx file format</span>\n                </div>\n              </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n  <app-left-menu></app-left-menu>\n  <app-footer></app-footer>\n\n</div>"

/***/ }),

/***/ "./src/app/components/project/leads/lead-add/lead-add.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/project/leads/lead-add/lead-add.component.ts ***!
  \*************************************************************************/
/*! exports provided: LeadAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeadAddComponent", function() { return LeadAddComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_Service_jarwis_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/Service/jarwis.service */ "./src/app/Service/jarwis.service.ts");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! xlsx */ "./node_modules/xlsx/xlsx.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var angular_notifier__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-notifier */ "./node_modules/angular-notifier/esm5/angular-notifier.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LeadAddComponent = /** @class */ (function () {
    function LeadAddComponent(Jarwis, Notifier, Router) {
        this.Jarwis = Jarwis;
        this.Notifier = Notifier;
        this.Router = Router;
        this.form = {
            person_name: null,
            person_company: null,
            person_email: null,
            person_phone: null,
            interseted_product: null,
            person_location: null,
            contacted_date: null,
            person_designation: null,
            contact_source: null,
            remark: null,
        };
    }
    LeadAddComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.Jarwis.productlist().subscribe(function (data) { return _this.productlist(data); });
    };
    LeadAddComponent.prototype.productlist = function (data) {
        this.products = data.success;
    };
    LeadAddComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log(this.form);
        this.Jarwis.addlead(this.form).subscribe(function (data) { return _this.formsuccess(data); });
    };
    LeadAddComponent.prototype.formsuccess = function (data) {
        if (data.success) {
            this.Notifier.notify('success', 'Lead Data added successfully');
        }
    };
    LeadAddComponent.prototype.handleFileInput = function (evt) {
        var _this = this;
        /* wire up file reader */
        var target = (evt.target);
        if (target.files.length !== 1)
            throw new Error('Cannot use multiple files');
        var reader = new FileReader();
        reader.onload = function (e) {
            /* read workbook */
            var bstr = e.target.result;
            var wb = xlsx__WEBPACK_IMPORTED_MODULE_2__["read"](bstr, { type: 'binary' });
            /* grab first sheet */
            var wsname = wb.SheetNames[0];
            var ws = wb.Sheets[wsname];
            /* save data */
            /* this.data = <AOA>(XLSX.utils.sheet_to_json(ws, { header: 1 })); */
            _this.data = xlsx__WEBPACK_IMPORTED_MODULE_2__["utils"].sheet_to_json(ws, { raw: true });
            // this.form2.excel_upload = JSON.stringify(this.data)
            var formData = new FormData();
            formData.append('file', JSON.stringify(_this.data));
            _this.Jarwis.excelpost(formData).subscribe(function (data) { return _this.excelresp(data); });
        };
        reader.readAsBinaryString(target.files[0]);
    };
    LeadAddComponent.prototype.excelresp = function (data) {
        this.Notifier.notify('success', 'Excel file uploaded successfully');
        this.Router.navigateByUrl('/lead');
        if (data.error) {
            this.Notifier.notify('success', 'Excel file uploaded successfully');
        }
        else {
            this.Notifier.notify('danger', 'Data already exists');
        }
    };
    LeadAddComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-lead-add',
            template: __webpack_require__(/*! ./lead-add.component.html */ "./src/app/components/project/leads/lead-add/lead-add.component.html"),
            styles: [__webpack_require__(/*! ./lead-add.component.css */ "./src/app/components/project/leads/lead-add/lead-add.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_Service_jarwis_service__WEBPACK_IMPORTED_MODULE_1__["JarwisService"],
            angular_notifier__WEBPACK_IMPORTED_MODULE_3__["NotifierService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], LeadAddComponent);
    return LeadAddComponent;
}());



/***/ }),

/***/ "./src/app/components/project/leads/lead-list/lead-list.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/components/project/leads/lead-list/lead-list.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvamVjdC9sZWFkcy9sZWFkLWxpc3QvbGVhZC1saXN0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/project/leads/lead-list/lead-list.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components/project/leads/lead-list/lead-list.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-left-menu></app-left-menu>\n\n<div class=\"content-wrapper\">\n  <!-- Content Header (Page header) -->\n  <section class=\"content-header\">\n    <div class=\"container-fluid\">\n      <div class=\"row mb-2\">\n        <div class=\"col-sm-6\">\n          <h1>Leads</h1>\n        </div>\n        <div class=\"col-sm-6\">\n          <ol class=\"breadcrumb float-sm-right\">\n            <li class=\"breadcrumb-item active\">Leads List</li>\n          </ol>\n        </div>\n      </div>\n    </div><!-- /.container-fluid -->\n  </section>\n  <!-- Main content -->\n  <section class=\"content\">\n    <div class=\"row\">\n      <div class=\"col-12\">\n        <div class=\"card\">\n          <div class=\"card-header\">\n            <h3 class=\"card-title\">Leads Data Listing</h3>\n          </div>\n          <!-- /.card-header -->\n        <div class=\"table-responsive\" *ngIf=\"tData\">\n            <table class=\"table table-striped table-bordered table-sm row-border hover\">\n              <thead>\n                <tr>\n                  <th>Name</th>\n                  <th>Company</th>\n                  <th>Email</th>\n                  <th>Phone</th>\n                  <th>Designation</th>\n                  <th>Interseted In</th>\n                  <th>Location</th>\n                  <th>Date</th>\n                  <th>Source</th>\n                  <th>Remark</th>\n                  <th>Status</th>\n                  <th>Email Sent</th>\n                  <th>Email Response</th>\n                  <th>Action</th>                  \n                </tr>\n              </thead>\n              <tbody *ngIf=\"data?.length > 0\">\n                <tr *ngFor=\"let lead of data\">\n                  <td>{{lead.person_name}}</td>\n                  <td>{{lead.person_company}}</td>\n                  <td>{{lead.person_email}}</td>\n                  <td>{{lead.person_phone}}</td>\n                  <td>{{lead.person_designation}}</td>\n                  <td>{{lead.interseted_product}}</td>\n                  <td>{{lead.person_location}}</td>\n                  <td>{{lead.contacted_date}}</td>\n                  <td>{{lead.contact_source}}</td>\n                  <td>{{lead.remark}}</td>\n                  <td *ngIf=\"lead.status == 0\">Fresh Lead</td>\n                  <td>{{lead.email_sent}}</td>\n                  <td>{{lead.email_response}}</td>       \n                  <td><a routerLink=\"edit/{{lead._id}}\"><i class=\"fa fa-eye\"></i></a><i class=\"fa fa-trash\" (click)=\"delete(lead._id)\"></i></td>           \n                </tr>\n              </tbody>\n            </table>\n          </div>\n          <!-- /.card-body -->\n        </div>\n        <!-- /.card -->\n      </div>\n      <!-- /.col -->\n    </div>\n    <!-- /.row -->\n  </section>\n  <!-- /.content -->\n  <app-footer></app-footer>\n</div>"

/***/ }),

/***/ "./src/app/components/project/leads/lead-list/lead-list.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/project/leads/lead-list/lead-list.component.ts ***!
  \***************************************************************************/
/*! exports provided: LeadListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeadListComponent", function() { return LeadListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_Service_jarwis_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/Service/jarwis.service */ "./src/app/Service/jarwis.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LeadListComponent = /** @class */ (function () {
    function LeadListComponent(Jarwis, chRef) {
        this.Jarwis = Jarwis;
        this.chRef = chRef;
        this.data = [];
    }
    LeadListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.Jarwis.getlead().subscribe(function (data) {
            _this.tData = true;
            _this.data = data.success;
            // You'll have to wait that changeDetection occurs and projects data into 
            // the HTML template, you can ask Angular to that for you ;-)
            _this.chRef.detectChanges();
            // Now you can use jQuery DataTables :
            var table = $('table');
            _this.dataTable = table.DataTable({
                "scrollX": true
            });
        });
    };
    LeadListComponent.prototype.delete = function (id) {
        var _this = this;
        this.Jarwis.deletelead(id).subscribe(function (data) { return _this.deletesuccess(data); });
    };
    LeadListComponent.prototype.deletesuccess = function (data) {
        if (data.success) {
            this.tData = false;
            this.ngOnInit();
        }
    };
    LeadListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-lead-list',
            template: __webpack_require__(/*! ./lead-list.component.html */ "./src/app/components/project/leads/lead-list/lead-list.component.html"),
            styles: [__webpack_require__(/*! ./lead-list.component.css */ "./src/app/components/project/leads/lead-list/lead-list.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_Service_jarwis_service__WEBPACK_IMPORTED_MODULE_1__["JarwisService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], LeadListComponent);
    return LeadListComponent;
}());



/***/ }),

/***/ "./src/app/components/project/left-menu/left-menu.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/project/left-menu/left-menu.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".elevation-2{height: 60px !important; width: 60px !important}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9qZWN0L2xlZnQtbWVudS9sZWZ0LW1lbnUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxhQUFhLHdCQUF3QixDQUFDLHNCQUFzQixDQUFDIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wcm9qZWN0L2xlZnQtbWVudS9sZWZ0LW1lbnUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5lbGV2YXRpb24tMntoZWlnaHQ6IDYwcHggIWltcG9ydGFudDsgd2lkdGg6IDYwcHggIWltcG9ydGFudH0iXX0= */"

/***/ }),

/***/ "./src/app/components/project/left-menu/left-menu.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/project/left-menu/left-menu.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<aside class=\"main-sidebar sidebar-dark-primary elevation-4\">\r\n    <!-- Brand Logo -->\r\n    <a href=\"index3.html\" class=\"brand-link\">\r\n      <img src=\"assets/dist/img/AdminLTELogo.png\" alt=\"AdminLTE Logo\" class=\"brand-image img-circle elevation-3\"\r\n           style=\"opacity: .8\">\r\n      <span class=\"brand-text font-weight-light\">AdminLTE 3</span>\r\n    </a>\r\n\r\n    <!-- Sidebar -->\r\n    <div class=\"sidebar\">\r\n      <!-- Sidebar user panel (optional) -->\r\n      <div class=\"user-panel mt-3 pb-3 mb-3 d-flex\">\r\n          <div class=\"image\">\r\n            <img src=\"{{image}}\" class=\"img-circle elevation-2\" alt=\"User Image\">\r\n          </div>\r\n          <div class=\"info\">\r\n            <a href=\"#\" class=\"d-block\">{{data?.success?.name}}</a>\r\n          </div>\r\n        </div>\r\n\r\n      <!-- Sidebar Menu -->\r\n      <nav class=\"mt-2\">\r\n        <ul class=\"nav nav-pills nav-sidebar flex-column\" data-widget=\"treeview\" role=\"menu\" data-accordion=\"false\">\r\n          <!-- Add icons to the links using the .nav-icon class\r\n               with font-awesome or any other icon font library -->\r\n          <li class=\"nav-item has-treeview\" routerLinkActive=\"menu-open\">\r\n            <a href=\"\" class=\"nav-link\" routerLinkActive=\"active\">\r\n              <i class=\"nav-icon fa fa-dashboard\"></i>\r\n              <p>\r\n                Dashboard\r\n                <i class=\"right fa fa-angle-left\"></i>\r\n              </p>\r\n            </a>\r\n            <ul class=\"nav nav-treeview\">\r\n              <li class=\"nav-item\">\r\n                <a routerLink=\"/\" class=\"nav-link\" routerLinkActive=\"active-link active\">\r\n                  <i class=\"fa fa-circle-o nav-icon\"></i>\r\n                  <p>Dashboard</p>\r\n                </a>\r\n              </li>\r\n            </ul>\r\n          </li>\r\n          <li class=\"nav-item has-treeview\" routerLinkActive=\"menu-open\">\r\n            <a href=\"#\" class=\"nav-link\" routerLinkActive=\"active\">\r\n              <i class=\"nav-icon fa fa-pie-chart\"></i>\r\n              <p>\r\n                Fresh Lead\r\n                <i class=\"right fa fa-angle-left\"></i>\r\n              </p>\r\n            </a>\r\n            <ul class=\"nav nav-treeview\">\r\n              <li class=\"nav-item\">\r\n                <a routerLink=\"/lead\" class=\"nav-link\" routerLinkActive=\"active-link active\">\r\n                  <i class=\"fa fa-circle-o nav-icon\"></i>\r\n                  <p>List</p>\r\n                </a>\r\n              </li>\r\n              <li class=\"nav-item\">\r\n                <a routerLink=\"/lead/add\" class=\"nav-link\" routerLinkActive=\"active-link active\">\r\n                  <i class=\"fa fa-circle-o nav-icon\"></i>\r\n                  <p>Add</p>\r\n                </a>\r\n              </li>\r\n            </ul>\r\n          </li>\r\n          <li class=\"nav-item has-treeview\" routerLinkActive=\"menu-open\">\r\n            <a href=\"#\" class=\"nav-link\" routerLinkActive=\"active\">\r\n              <i class=\"nav-icon fa fa-tree\"></i>\r\n              <p>\r\n                Cold Lead\r\n                <i class=\"fa fa-angle-left right\"></i>\r\n              </p>\r\n            </a>\r\n            <ul class=\"nav nav-treeview\">\r\n              <li class=\"nav-item\">\r\n                <a routerLink=\"/coldlead\" class=\"nav-link\" routerLinkActive=\"active-link active\">\r\n                  <i class=\"fa fa-circle-o nav-icon\"></i>\r\n                  <p>List</p>\r\n                </a>\r\n              </li>\r\n            </ul>\r\n          </li>\r\n          <li class=\"nav-item has-treeview\" routerLinkActive=\"menu-open\">\r\n            <a href=\"#\" class=\"nav-link\" routerLinkActive=\"active\">\r\n              <i class=\"nav-icon fa fa-edit\"></i>\r\n              <p>\r\n                Warm Lead\r\n                <i class=\"fa fa-angle-left right\"></i>\r\n              </p>\r\n            </a>\r\n            <ul class=\"nav nav-treeview\">\r\n              <li class=\"nav-item\">\r\n                <a routerLink=\"/warmlead\" class=\"nav-link\" routerLinkActive=\"active-link active\">\r\n                  <i class=\"fa fa-circle-o nav-icon\"></i>\r\n                  <p>List</p>\r\n                </a>\r\n              </li>\r\n            </ul>\r\n          </li>\r\n          <li class=\"nav-item has-treeview\" routerLinkActive=\"menu-open\">\r\n            <a href=\"#\" class=\"nav-link\" routerLinkActive=\"active\">\r\n              <i class=\"nav-icon fa fa-fire\"></i>\r\n              <p>\r\n                Hot Lead\r\n                <i class=\"fa fa-angle-left right\"></i>\r\n              </p>\r\n            </a>\r\n            <ul class=\"nav nav-treeview\">\r\n              <li class=\"nav-item\">\r\n                <a routerLink=\"/hotlead\" class=\"nav-link\" routerLinkActive=\"active-link active\">\r\n                  <i class=\"fa fa-circle-o nav-icon\"></i>\r\n                  <p>List</p>\r\n                </a>\r\n              </li>\r\n            </ul>\r\n          </li>\r\n          <li class=\"nav-item has-treeview\" routerLinkActive=\"menu-open\">\r\n            <a href=\"#\" class=\"nav-link\" routerLinkActive=\"active\">\r\n              <i class=\"nav-icon fa fa-book\"></i>\r\n              <p>\r\n                Dead Lead\r\n                <i class=\"fa fa-angle-left right\"></i>\r\n              </p>\r\n            </a>\r\n            <ul class=\"nav nav-treeview\">\r\n              <li class=\"nav-item\">\r\n                <a routerLink=\"/deadlead\" class=\"nav-link\" routerLinkActive=\"active-link active\">\r\n                  <i class=\"fa fa-circle-o nav-icon\"></i>\r\n                  <p>List</p>\r\n                </a>\r\n              </li>\r\n            </ul>\r\n          </li>\r\n          <li class=\"nav-item has-treeview\" routerLinkActive=\"menu-open\">\r\n            <a href=\"#\" class=\"nav-link\" routerLinkActive=\"active\">\r\n              <i class=\"nav-icon fa fa-envelope-o\"></i>\r\n              <p>\r\n                Mailbox\r\n                <i class=\"fa fa-angle-left right\"></i>\r\n              </p>\r\n            </a>\r\n            <ul class=\"nav nav-treeview\">\r\n              <li class=\"nav-item\">\r\n                <a routerLink=\"/mail/inbox\" class=\"nav-link\" routerLinkActive=\"active-link active\">\r\n                  <i class=\"fa fa-circle-o nav-icon\"></i>\r\n                  <p>Inbox</p>\r\n                </a>\r\n              </li>\r\n              <li class=\"nav-item\">\r\n                <a routerLink=\"/mail/compose\" class=\"nav-link\" routerLinkActive=\"active-link active\">\r\n                  <i class=\"fa fa-circle-o nav-icon\"></i>\r\n                  <p>Compose</p>\r\n                </a>\r\n              </li>\r\n            </ul>\r\n          </li>\r\n          <li class=\"nav-item has-treeview\" routerLinkActive=\"menu-open\">\r\n            <a href=\"#\" class=\"nav-link\" routerLinkActive=\"active\">\r\n              <i class=\"nav-icon fa fa-book\"></i>\r\n              <p>\r\n                Template\r\n                <i class=\"fa fa-angle-left right\"></i>\r\n              </p>\r\n            </a>\r\n            <ul class=\"nav nav-treeview\">\r\n              <li class=\"nav-item\">\r\n                <a routerLink=\"/template/intro\" class=\"nav-link\" routerLinkActive=\"active-link active\">\r\n                  <i class=\"fa fa-circle-o nav-icon\"></i>\r\n                  <p>Introductory</p>\r\n                </a>\r\n              </li>              \r\n              <li class=\"nav-item\">\r\n                <a routerLink=\"/template/reminder\" class=\"nav-link\" routerLinkActive=\"active-link active\">\r\n                  <i class=\"fa fa-circle-o nav-icon\"></i>\r\n                  <p>Reminder</p>\r\n                </a>\r\n              </li>\r\n            </ul>\r\n          </li>\r\n          <li class=\"nav-item has-treeview\" routerLinkActive=\"menu-open\">\r\n            <a href=\"#\" class=\"nav-link\" routerLinkActive=\"active\">\r\n              <i class=\"nav-icon fa fa-plus-square-o\"></i>\r\n              <p>\r\n                Contact\r\n                <i class=\"fa fa-angle-left right\"></i>\r\n              </p>\r\n            </a>\r\n            <ul class=\"nav nav-treeview\">\r\n              <li class=\"nav-item\">\r\n                <a routerLink=\"/contact\" class=\"nav-link\" routerLinkActive=\"active-link active\">\r\n                  <i class=\"fa fa-circle-o nav-icon\"></i>\r\n                  <p>List</p>\r\n                </a>\r\n              </li>\r\n              <li class=\"nav-item\">\r\n                <a routerLink=\"/contact/add\" class=\"nav-link\" routerLinkActive=\"active-link active\">\r\n                  <i class=\"fa fa-circle-o nav-icon\"></i>\r\n                  <p>Add</p>\r\n                </a>\r\n              </li>\r\n            </ul>\r\n          </li>\r\n        </ul>\r\n      </nav>\r\n      <!-- /.sidebar-menu -->\r\n    </div>\r\n    <!-- /.sidebar -->\r\n  </aside>"

/***/ }),

/***/ "./src/app/components/project/left-menu/left-menu.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/project/left-menu/left-menu.component.ts ***!
  \*********************************************************************/
/*! exports provided: LeftMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeftMenuComponent", function() { return LeftMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_Service_jarwis_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/Service/jarwis.service */ "./src/app/Service/jarwis.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LeftMenuComponent = /** @class */ (function () {
    function LeftMenuComponent(Jarwis) {
        this.Jarwis = Jarwis;
        this.data = null;
        this.value = null;
        this.image = null;
    }
    LeftMenuComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.Jarwis.userProfileData().subscribe(function (data) { return _this.response(data); });
    };
    LeftMenuComponent.prototype.response = function (data) {
        this.data = data;
        if (data.success.image != "") {
            this.image = this.data.success.imgUrl;
        }
        else {
            this.image = 'assets/images/quickway_user.png';
        }
    };
    LeftMenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-left-menu',
            template: __webpack_require__(/*! ./left-menu.component.html */ "./src/app/components/project/left-menu/left-menu.component.html"),
            styles: [__webpack_require__(/*! ./left-menu.component.css */ "./src/app/components/project/left-menu/left-menu.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_Service_jarwis_service__WEBPACK_IMPORTED_MODULE_1__["JarwisService"]])
    ], LeftMenuComponent);
    return LeftMenuComponent;
}());



/***/ }),

/***/ "./src/app/components/project/mail/alert/alert.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/components/project/mail/alert/alert.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvamVjdC9tYWlsL2FsZXJ0L2FsZXJ0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/project/mail/alert/alert.component.html":
/*!********************************************************************!*\
  !*** ./src/app/components/project/mail/alert/alert.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"left: 135px;position: relative;\" *ngFor=\"let alert of alertsService.alerts\">\n  <ngb-alert type=\"danger\" (close)=\"close(alert)\">\n    <p>{{alert.message}}</p>\n    <pre *ngIf=\"alert.debug\" class=\"alert-pre border bg-light p-2\"><code>{{alert.debug}}</code></pre>\n  </ngb-alert>\n</div>"

/***/ }),

/***/ "./src/app/components/project/mail/alert/alert.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/components/project/mail/alert/alert.component.ts ***!
  \******************************************************************/
/*! exports provided: AlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertComponent", function() { return AlertComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_Service_alert_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/Service/alert.service */ "./src/app/Service/alert.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AlertComponent = /** @class */ (function () {
    function AlertComponent(alertsService) {
        this.alertsService = alertsService;
    }
    AlertComponent.prototype.ngOnInit = function () {
    };
    AlertComponent.prototype.close = function (alert) {
        this.alertsService.remove(alert);
    };
    AlertComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-alert',
            template: __webpack_require__(/*! ./alert.component.html */ "./src/app/components/project/mail/alert/alert.component.html"),
            styles: [__webpack_require__(/*! ./alert.component.css */ "./src/app/components/project/mail/alert/alert.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_Service_alert_service__WEBPACK_IMPORTED_MODULE_1__["AlertService"]])
    ], AlertComponent);
    return AlertComponent;
}());



/***/ }),

/***/ "./src/app/components/project/mail/compose-mail/compose-mail.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/components/project/mail/compose-mail/compose-mail.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvamVjdC9tYWlsL2NvbXBvc2UtbWFpbC9jb21wb3NlLW1haWwuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/project/mail/compose-mail/compose-mail.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/components/project/mail/compose-mail/compose-mail.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\" style=\"left: 135px;position: relative;\">\n  <div class=\"col-md-12\">\n    <div class=\"card card-primary card-outline\">\n      <div class=\"card-header\">\n        <h3 class=\"card-title\">Compose New Message</h3>\n      </div>\n      <!-- /.card-header -->\n      <form #mail='ngForm' (ngSubmit)=\"onSubmit();mail.resetForm()\">\n        <div class=\"card-body\">\n          <div class=\"form-group\">\n            <input class=\"form-control\" type=\"email\" email=\"true\" required [(ngModel)]=\"form.mail_to\" name=\"mail_to\" placeholder=\"To:\">\n          </div>\n          <div class=\"form-group\">\n            <input class=\"form-control\" type=\"text\" required [(ngModel)]=\"form.mail_subject\" name=\"mail_subject\" placeholder=\"Subject:\">\n          </div>\n          <div class=\"form-group\">\n            <textarea type=\"text\" required [(ngModel)]=\"form.mail_content\" name=\"mail_content\" class=\"form-control\" style=\"height: 300px\" placeholder=\"Enter your message here\"></textarea>\n          </div>\n        </div>\n        <!-- /.card-body -->\n        <div class=\"card-footer\">\n          <div class=\"float-right\">\n            <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!mail.valid\"><i class=\"fa fa-envelope-o\"></i> Send</button>\n          </div>\n        </div>\n      </form>\n      <!-- /.card-footer -->\n    </div>\n  </div>\n</div>\n<app-left-menu></app-left-menu>"

/***/ }),

/***/ "./src/app/components/project/mail/compose-mail/compose-mail.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/components/project/mail/compose-mail/compose-mail.component.ts ***!
  \********************************************************************************/
/*! exports provided: ComposeMailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComposeMailComponent", function() { return ComposeMailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_Service_jarwis_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/Service/jarwis.service */ "./src/app/Service/jarwis.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ComposeMailComponent = /** @class */ (function () {
    function ComposeMailComponent(Jarwis) {
        this.Jarwis = Jarwis;
        this.form = {
            mail_to: null,
            mail_subject: null,
            mail_content: null
        };
    }
    ComposeMailComponent.prototype.ngOnInit = function () {
    };
    ComposeMailComponent.prototype.onSubmit = function () {
        this.Jarwis.sendemailnow(this.form).subscribe(function (data) { return console.log(data); });
    };
    ComposeMailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-compose-mail',
            template: __webpack_require__(/*! ./compose-mail.component.html */ "./src/app/components/project/mail/compose-mail/compose-mail.component.html"),
            styles: [__webpack_require__(/*! ./compose-mail.component.css */ "./src/app/components/project/mail/compose-mail/compose-mail.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_Service_jarwis_service__WEBPACK_IMPORTED_MODULE_1__["JarwisService"]])
    ], ComposeMailComponent);
    return ComposeMailComponent;
}());



/***/ }),

/***/ "./src/app/components/project/mail/home/home.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/components/project/mail/home/home.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvamVjdC9tYWlsL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/project/mail/home/home.component.html":
/*!******************************************************************!*\
  !*** ./src/app/components/project/mail/home/home.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\" style=\"left: 135px;position: relative;\">\n\n  <div *ngIf=\"authenticated; then welcomeUser else signInPrompt\"></div>\n  <ng-template #welcomeUser>\n    <div class=\"col-md-12\">\n      <div class=\"card card-primary card-outline\">\n        <div class=\"card-header\">\n          <h3 class=\"card-title\">Inbox</h3>\n          <!-- /.card-tools -->\n        </div>\n        <!-- /.card-header -->\n        <div class=\"card-body p-0\">\n          <div class=\"mailbox-controls\">\n            <!-- /.float-right -->\n          </div>\n          <div class=\"table-responsive\">\n            <table class=\"table table-striped table-bordered table-sm row-border hover\">\n              <tbody *ngIf=\"user?.value\">\n              <tr *ngFor=\"let mails of user?.value\">\n                <td class=\"mailbox-star\"><i class=\"fa fa-star text-warning\"></i></td>\n                <td class=\"mailbox-name\"><a routerLink=\"/mail/view/{{mails.id}}\">{{mails.from.emailAddress.name}}</a></td>\n                <td class=\"mailbox-subject\">{{mails.subject}}</td>\n                <td class=\"mailbox-date\">{{mails.receivedDateTime | date: 'M/d/yy, h:mm a'}}</td>\n              </tr>\n              </tbody>\n            </table>\n            <!-- /.table -->\n          </div>\n          <!-- /.mail-box-messages -->\n        </div>\n        <!-- /.card-body -->\n        \n      </div>\n      <!-- /. box -->\n    </div>\n  </ng-template>\n  <ng-template #signInPrompt>\n    <h1>Login with outlook</h1>\n    <p class=\"lead\">You need to login with outlook to acces this feature</p>\n    <a href=\"javascript:undefined\" class=\"btn btn-primary btn-large\" role=\"button\" (click)=\"signIn()\">Connect to Outlook</a>\n\n    <p>Please refresh page if inbox did not appear after outlook login</p>\n  </ng-template>\n</div>\n<app-left-menu></app-left-menu>"

/***/ }),

/***/ "./src/app/components/project/mail/home/home.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/components/project/mail/home/home.component.ts ***!
  \****************************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_Service_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/Service/auth.service */ "./src/app/Service/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
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
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent(authService) {
        this.authService = authService;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getAccessToken().then(function (data) {
            _this.userP(data);
        });
        var table = $('table');
        this.datatable = table.DataTable({});
    };
    HomeComponent.prototype.userP = function (data) {
        var _this = this;
        if (data) {
            this.authenticated = true;
            this.authService.getMails().then(function (res) { return _this.userdata(res); });
        }
        else {
            this.authenticated = false;
            this.user = {};
        }
    };
    HomeComponent.prototype.userdata = function (data) {
        this.user = data;
    };
    HomeComponent.prototype.signIn = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.authService.signIn()];
                    case 1:
                        _a.sent();
                        this.user = this.authService.getUser();
                        return [2 /*return*/];
                }
            });
        });
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/project/mail/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/project/mail/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_Service_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/project/mail/view-mail/view-mail.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/components/project/mail/view-mail/view-mail.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvamVjdC9tYWlsL3ZpZXctbWFpbC92aWV3LW1haWwuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/project/mail/view-mail/view-mail.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/components/project/mail/view-mail/view-mail.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12\" style=\"left: 135px;position: relative;\">\n  <a routerLink=\"/mail/inbox\"><button class=\"btn btn-primary\">Back</button></a>\n    <div class=\"card card-primary card-outline\">\n      <div class=\"card-header\">\n        <h3 class=\"card-title\">Read Mail</h3>\n        \n      </div>\n      <!-- /.card-header -->\n      <div class=\"card-body p-0\">\n        <div class=\"mailbox-read-info\">\n          <h5>{{data?.subject}}</h5>\n          <h6>From: {{data?.from?.emailAddress?.address}}\n            <span class=\"mailbox-read-time float-right\">{{data?.receivedDateTime | date: 'M/d/yy, h:mm a'}}</span></h6>\n        </div>\n       \n        <!-- /.mailbox-controls -->\n        <div class=\"mailbox-read-message\" [innerHTML]=\"maildes\">          \n        </div>\n        <!-- /.mailbox-read-message -->\n      </div>     \n     \n      <!-- /.card-footer -->\n    </div>\n    <!-- /. box -->\n  </div>\n  <app-left-menu></app-left-menu>\n"

/***/ }),

/***/ "./src/app/components/project/mail/view-mail/view-mail.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/components/project/mail/view-mail/view-mail.component.ts ***!
  \**************************************************************************/
/*! exports provided: ViewMailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewMailComponent", function() { return ViewMailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_Service_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Service/auth.service */ "./src/app/Service/auth.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ViewMailComponent = /** @class */ (function () {
    function ViewMailComponent(activateroute, authService, sanitizer) {
        this.activateroute = activateroute;
        this.authService = authService;
        this.sanitizer = sanitizer;
        this.currentUrl = this.activateroute.snapshot.params;
    }
    ViewMailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getviewMails(this.currentUrl).then(function (data) { return _this.viewmail(data); });
    };
    ViewMailComponent.prototype.viewmail = function (data) {
        this.data = data;
        this.maildes = this.sanitizer.bypassSecurityTrustHtml(data.body.content);
        console.log(this.maildes);
    };
    ViewMailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-view-mail',
            template: __webpack_require__(/*! ./view-mail.component.html */ "./src/app/components/project/mail/view-mail/view-mail.component.html"),
            styles: [__webpack_require__(/*! ./view-mail.component.css */ "./src/app/components/project/mail/view-mail/view-mail.component.css")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            src_app_Service_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"]])
    ], ViewMailComponent);
    return ViewMailComponent;
}());



/***/ }),

/***/ "./src/app/components/project/profile/profile.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/project/profile/profile.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".gb{position: relative}\r\n.gb1{position: absolute; left: 495px; top: 100px; background: #ccc; border-radius: 100px; padding: 07px; border: 01px #000 dashed}\r\n.file-upload{ position: absolute; left: 500px; z-index: 55; top: 105px; opacity: 0;}\r\nimg {\r\n    width: 127px;\r\n    height: 118px;\r\n    border-radius: 76%;\r\n\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9qZWN0L3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLElBQUksa0JBQWtCLENBQUM7QUFDdkIsS0FBSyxtQkFBbUIsQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLGlCQUFpQixDQUFDLHFCQUFxQixDQUFDLGNBQWMsQ0FBQyx3QkFBd0IsQ0FBQztBQUNsSSxjQUFjLG1CQUFtQixDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQztBQUNwRjtJQUNJLGFBQWE7SUFDYixjQUFjO0lBQ2QsbUJBQW1COztDQUV0QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvamVjdC9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5nYntwb3NpdGlvbjogcmVsYXRpdmV9XHJcbi5nYjF7cG9zaXRpb246IGFic29sdXRlOyBsZWZ0OiA0OTVweDsgdG9wOiAxMDBweDsgYmFja2dyb3VuZDogI2NjYzsgYm9yZGVyLXJhZGl1czogMTAwcHg7IHBhZGRpbmc6IDA3cHg7IGJvcmRlcjogMDFweCAjMDAwIGRhc2hlZH1cclxuLmZpbGUtdXBsb2FkeyBwb3NpdGlvbjogYWJzb2x1dGU7IGxlZnQ6IDUwMHB4OyB6LWluZGV4OiA1NTsgdG9wOiAxMDVweDsgb3BhY2l0eTogMDt9XHJcbmltZyB7XHJcbiAgICB3aWR0aDogMTI3cHg7XHJcbiAgICBoZWlnaHQ6IDExOHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNzYlO1xyXG5cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/project/profile/profile.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/project/profile/profile.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"continer\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row login d-flex align-items-center\">\r\n      <div class=\"container\">\r\n        <form #profileform=\"ngForm\" (ngSubmit)=\"onSubmit()\">\r\n          <div class=\"row\">\r\n            <div class=\"col-xl-2 col-lg-2 col-md-8 col-sm-12\">\r\n            </div>\r\n            <div class=\"col-xl-10 col-lg-10 col-md-8 col-sm-12 mt-5 log gb\">\r\n              <img [src]=\"imageURl\" class=\"img-fluid d-block m-auto\">\r\n              <i class=\"fa fa-camera gb1\"></i>\r\n              <input type=\"file\" #Image (change)=\"handleFileInput($event.target.files)\" accept=\"image/*\" name=\"image\"\r\n                class=\"file-upload\">\r\n              <div class=\"clearfix\"></div>\r\n              <div class=\"he_ad\">\r\n                <div class=\"col-xl-12\">\r\n                  <div class=\"borr\">\r\n                    <h1 class=\"text-center\">Profile</h1>\r\n                  </div>\r\n                  <small class=\"d-block text-center\">Your account details</small>\r\n                  <div class=\"clearfix\"></div>\r\n                  <div class=\"pt-4\">\r\n\r\n                    <div class=\"form-group\">\r\n                      <label>Name</label>\r\n                      <input type=\"email\" class=\"form-control ad\" [(ngModel)]=\"form.name\" name=\"name\" value={{data?.success?.name}}\r\n                        placeholder=\"Enter Your Name\">\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                      <label>Your Email</label>\r\n                      <span class=\"form-control ad\">{{data?.success?.email}}</span>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                      <button type=\"submit\" class=\"btn btn-primary m-auto\" [disabled]=\"!profileform.valid\">Update Profile</button>\r\n                      <a routerLink=\"/change-password\" class=\"btn btn-primary float-right\">Change Password</a>\r\n                    </div>\r\n                    <div class=\"clearfix\"></div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n    <app-left-menu></app-left-menu>\r\n    <app-footer></app-footer>\r\n    <notifier-container></notifier-container>"

/***/ }),

/***/ "./src/app/components/project/profile/profile.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/project/profile/profile.component.ts ***!
  \*****************************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_Service_jarwis_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/Service/jarwis.service */ "./src/app/Service/jarwis.service.ts");
/* harmony import */ var angular_notifier__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-notifier */ "./node_modules/angular-notifier/esm5/angular-notifier.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(Jarwis, Notifier) {
        this.Jarwis = Jarwis;
        this.Notifier = Notifier;
        this.fileToUpload = null;
        this.base_img = null;
        this.form = {
            image: null,
            name: null
        };
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.Jarwis.userProfileData().subscribe(function (data) { return _this.response(data); });
    };
    ProfileComponent.prototype.response = function (data) {
        this.data = data;
        if (data.success.image != "") {
            this.imageURl = this.data.success.imgUrl;
        }
        else {
            this.imageURl = 'assets/images/quickway_user.png';
        }
    };
    ProfileComponent.prototype.onSubmit = function () {
        var _this = this;
        this.Jarwis.profilePicUpdate(this.form).subscribe(function (data) { return _this.aftersubmit(data); });
    };
    ProfileComponent.prototype.aftersubmit = function (data) {
        this.data = data;
        if (this.data.success !== 'fail') {
            this.Notifier.notify('success', 'Profile updated successfully');
            window.location.reload();
        }
        else {
            this.Notifier.notify('danger', 'Profile not updated');
        }
    };
    ProfileComponent.prototype.handleFileInput = function (file) {
        var _this = this;
        this.fileToUpload = file.item(0);
        if ((this.fileToUpload.type === 'image/jpeg') || (this.fileToUpload.type === 'image/jpg') || (this.fileToUpload.type === 'image/png')) {
            // Show Image
            var reader = new FileReader();
            reader.onload = function (event) {
                _this.imageURl = event.target.result;
                _this.form.image = event.target.result;
            };
            reader.readAsDataURL(this.fileToUpload);
        }
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/components/project/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/components/project/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_Service_jarwis_service__WEBPACK_IMPORTED_MODULE_1__["JarwisService"],
            angular_notifier__WEBPACK_IMPORTED_MODULE_2__["NotifierService"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/components/project/resource/resource.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/project/resource/resource.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvamVjdC9yZXNvdXJjZS9yZXNvdXJjZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/project/resource/resource.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/project/resource/resource.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-left-menu></app-left-menu>\r\n<div style=\"left: 150px;position: relative;\">\r\n    <table width=\"683\" border='2'>\r\n        <tbody>\r\n            <tr>\r\n                <td width=\"137\">&nbsp;</td>\r\n                <td width=\"265\">\r\n                    <p><strong>STAGE</strong></p>\r\n                </td>\r\n                <td width=\"280\">&nbsp;</td>\r\n            </tr>\r\n            <tr>\r\n                <td width=\"137\">\r\n                    <p>Stages in Sales</p>\r\n                </td>\r\n                <td width=\"265\">\r\n                    <p>Explanation of Stages</p>\r\n                </td>\r\n                <td width=\"280\">\r\n                    <p>Case scenarios</p>\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n                <td width=\"137\">\r\n                    <p>Prospecting</p>\r\n                </td>\r\n                <td width=\"265\">\r\n                    <p>Opportunities in the prospecting stage represent your long term pipeline. No budget or timescale\r\n                        has been identified. This stage is when the closed date is uncertain or either no solid\r\n                        opportunity could be driven out from first conversation to any stage. However, there is a\r\n                        possibility that some of these opportunities will mature into viable and important pipeline\r\n                        deals.</p>\r\n                </td>\r\n                <td width=\"280\">\r\n                    <p>Client wants to think about it and get back/ Client isn&rsquo;t giving any clear picture on\r\n                        meetings/ Client didn&rsquo;t respond to any introductory mail / Clients details are just tapped\r\n                        and we need to still get in touch with him</p>\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n                <td width=\"137\">\r\n                    <p>Qualifying</p>\r\n                </td>\r\n                <td width=\"265\">\r\n                    <p>This stage determines if there is a NEED or there&nbsp; could be a NEED. This stage determines\r\n                        whether the customer sees some interest and is looking forward to talk more on the product or\r\n                        enquire on the same. Also, are we a good fit among potential other suppliers for the client</p>\r\n                </td>\r\n                <td width=\"280\">\r\n                    <p>Customer is using jars / customer is unhappy with the current vendor etc.</p>\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n                <td width=\"137\">\r\n                    <p>Need Analysis</p>\r\n                </td>\r\n                <td width=\"265\">\r\n                    <p>This stage is when we do an analysis on kind of solution client is looking for. This stage can be\r\n                        defined in a nutshell by taking the details over the phone via workbook or going for Site survey\r\n                    </p>\r\n                </td>\r\n                <td width=\"280\">\r\n                    <p>Site survey/ Workbook filling/ seeking the clients site details</p>\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n                <td width=\"137\">\r\n                    <p>Value Proposition</p>\r\n                </td>\r\n                <td width=\"265\">\r\n                    <p>This stage is when the client asks us for cost analysis / proposal submission etc.</p>\r\n                </td>\r\n                <td width=\"280\">\r\n                    <p>&nbsp;</p>\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n                <td width=\"137\">\r\n                    <p>Evaluating</p>\r\n                </td>\r\n                <td width=\"265\">\r\n                    <p>This stage is when the client is making a decision to come back post submitting the proposal.\r\n                        Product Demo can also fall under Evaluating</p>\r\n                </td>\r\n                <td width=\"280\">\r\n                    <p>&nbsp;</p>\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n                <td width=\"137\">\r\n                    <p>Negotiating</p>\r\n                </td>\r\n                <td width=\"265\">\r\n                    <p>This stage includes agreeing on commercial terms</p>\r\n                </td>\r\n                <td width=\"280\">\r\n                    <p>&nbsp;</p>\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n                <td width=\"137\">\r\n                    <p>Closure</p>\r\n                </td>\r\n                <td width=\"265\">\r\n                    <p>The customer made a commitment to go ahead.</p>\r\n                </td>\r\n                <td width=\"280\">\r\n                    <p>&nbsp;</p>\r\n                </td>\r\n            </tr>\r\n        </tbody>\r\n    </table>\r\n    <p>&nbsp;</p>\r\n    <p>&nbsp;</p>\r\n    <p>&nbsp;</p>\r\n</div>\r\n<div style=\"left: 150px;position: relative;\">\r\n    <table width=\"683\" border=\"2\">\r\n        <tbody>\r\n            <tr>\r\n                <td width=\"137\">&nbsp;</td>\r\n                <td width=\"265\">\r\n                    <p><strong>STATUS</strong></p>\r\n                </td>\r\n                <td width=\"280\">&nbsp;</td>\r\n            </tr>\r\n            <tr>\r\n                <td rowspan=\"4\" width=\"137\">\r\n                    <p>COLD</p>\r\n                </td>\r\n                <td width=\"265\">\r\n                    <p>Prospecting</p>\r\n                </td>\r\n                <td rowspan=\"4\" width=\"280\">\r\n                    <p>These all stages shall fall under COLD STATUS</p>\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n                <td width=\"265\">\r\n                    <p>Qualifying</p>\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n                <td width=\"265\">\r\n                    <p>Need Analysis</p>\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n                <td width=\"265\">\r\n                    <p>Value Proposition</p>\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n                <td width=\"137\">\r\n                    <p>&nbsp;</p>\r\n                </td>\r\n                <td width=\"265\">\r\n                    <p>&nbsp;</p>\r\n                </td>\r\n                <td width=\"280\">\r\n                    <p>&nbsp;</p>\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n                <td width=\"137\">\r\n                    <p>&nbsp;</p>\r\n                </td>\r\n                <td width=\"265\">\r\n                    <p>&nbsp;</p>\r\n                </td>\r\n                <td width=\"280\">\r\n                    <p>&nbsp;</p>\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n                <td rowspan=\"2\" width=\"137\">\r\n                    <p>WARM</p>\r\n                </td>\r\n                <td width=\"265\">\r\n                    <p>Evaluating</p>\r\n                </td>\r\n                <td rowspan=\"2\" width=\"280\">\r\n                    <p>These stages shall fall under WARM STATUS</p>\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n                <td width=\"265\">\r\n                    <p>Negotiating</p>\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n                <td width=\"137\">\r\n                    <p>&nbsp;</p>\r\n                </td>\r\n                <td width=\"265\">\r\n                    <p>&nbsp;</p>\r\n                </td>\r\n                <td width=\"280\">\r\n                    <p>&nbsp;</p>\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n                <td width=\"137\">\r\n                    <p>HOT</p>\r\n                </td>\r\n                <td width=\"265\">\r\n                    <p>The stage between Negotiaiting and Closure is HOT. However, in certain cases it may vary if the\r\n                        cleint is not taking too long and gives a green signal to take the product</p>\r\n                </td>\r\n                <td width=\"280\">\r\n                    <p>&nbsp;</p>\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n                <td width=\"137\">\r\n                    <p>&nbsp;</p>\r\n                </td>\r\n                <td width=\"265\">\r\n                    <p>&nbsp;</p>\r\n                </td>\r\n                <td width=\"280\">\r\n                    <p>&nbsp;</p>\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n                <td width=\"137\">\r\n                    <p>DEAD</p>\r\n                </td>\r\n                <td width=\"265\">\r\n                    <p>Any account where the contact mentions that he is not looking to change anything in next 3 years\r\n                        etc/Client asks us to subscribe himself ias DO NOT CALL or asks us to not send any communication\r\n                        as he is not interested at all.</p>\r\n                </td>\r\n                <td width=\"280\">\r\n                    <p>&nbsp;</p>\r\n                </td>\r\n            </tr>\r\n        </tbody>\r\n    </table>\r\n    <p>&nbsp;</p>\r\n</div>"

/***/ }),

/***/ "./src/app/components/project/resource/resource.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/project/resource/resource.component.ts ***!
  \*******************************************************************/
/*! exports provided: ResourceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourceComponent", function() { return ResourceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ResourceComponent = /** @class */ (function () {
    function ResourceComponent() {
    }
    ResourceComponent.prototype.ngOnInit = function () {
    };
    ResourceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-resource',
            template: __webpack_require__(/*! ./resource.component.html */ "./src/app/components/project/resource/resource.component.html"),
            styles: [__webpack_require__(/*! ./resource.component.css */ "./src/app/components/project/resource/resource.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ResourceComponent);
    return ResourceComponent;
}());



/***/ }),

/***/ "./src/app/components/project/template/introduction/introduction.component.css":
/*!*************************************************************************************!*\
  !*** ./src/app/components/project/template/introduction/introduction.component.css ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvamVjdC90ZW1wbGF0ZS9pbnRyb2R1Y3Rpb24vaW50cm9kdWN0aW9uLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/project/template/introduction/introduction.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/components/project/template/introduction/introduction.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-left-menu></app-left-menu>\n<div style=\"left: 135px;position: relative;\">\n  <ckeditor [editor]=\"Editor\" (ready)=\"onReady($event)\" [data]='editordata?.success.template' (change)=\"onChange($event)\"></ckeditor>\n  <button (click)='submit()'>Submit</button>\n</div>"

/***/ }),

/***/ "./src/app/components/project/template/introduction/introduction.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/components/project/template/introduction/introduction.component.ts ***!
  \************************************************************************************/
/*! exports provided: IntroductionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroductionComponent", function() { return IntroductionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ckeditor/ckeditor5-build-classic */ "./node_modules/@ckeditor/ckeditor5-build-classic/build/ckeditor.js");
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_app_Service_jarwis_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Service/jarwis.service */ "./src/app/Service/jarwis.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var IntroductionComponent = /** @class */ (function () {
    function IntroductionComponent(Jarwis) {
        var _this = this;
        this.Jarwis = Jarwis;
        this.Editor = _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_1__;
        this.editordata = this.Jarwis.getintro().subscribe(function (data) { return _this.editordata = data; });
        this.form = {
            template: null
        };
    }
    IntroductionComponent.prototype.ngOnInit = function () {
    };
    IntroductionComponent.prototype.onReady = function (editor) {
        editor.ui.view.editable.element.parentElement.insertBefore(editor.ui.view.toolbar.element, editor.ui.view.editable.element);
    };
    IntroductionComponent.prototype.onChange = function (_a) {
        var editor = _a.editor;
        this.form.template = editor.getData();
    };
    IntroductionComponent.prototype.submit = function () {
        this.Jarwis.intro(this.form).subscribe();
        window.location.reload();
    };
    IntroductionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-introduction',
            template: __webpack_require__(/*! ./introduction.component.html */ "./src/app/components/project/template/introduction/introduction.component.html"),
            styles: [__webpack_require__(/*! ./introduction.component.css */ "./src/app/components/project/template/introduction/introduction.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_Service_jarwis_service__WEBPACK_IMPORTED_MODULE_2__["JarwisService"]])
    ], IntroductionComponent);
    return IntroductionComponent;
}());



/***/ }),

/***/ "./src/app/components/project/template/reminder/reminder.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/components/project/template/reminder/reminder.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvamVjdC90ZW1wbGF0ZS9yZW1pbmRlci9yZW1pbmRlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/project/template/reminder/reminder.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/components/project/template/reminder/reminder.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-left-menu></app-left-menu>\n<div style=\"left: 135px;position: relative;\">\n  <ckeditor [editor]=\"Editor\" (ready)=\"onReady($event)\" [data]='editordata?.success.template' (change)=\"onChange($event)\"></ckeditor>\n  <button (click)='submit()'>Submit</button>\n</div>"

/***/ }),

/***/ "./src/app/components/project/template/reminder/reminder.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/components/project/template/reminder/reminder.component.ts ***!
  \****************************************************************************/
/*! exports provided: ReminderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReminderComponent", function() { return ReminderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ckeditor/ckeditor5-build-classic */ "./node_modules/@ckeditor/ckeditor5-build-classic/build/ckeditor.js");
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_app_Service_jarwis_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Service/jarwis.service */ "./src/app/Service/jarwis.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ReminderComponent = /** @class */ (function () {
    function ReminderComponent(Jarwis) {
        var _this = this;
        this.Jarwis = Jarwis;
        this.Editor = _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_1__;
        this.editordata = this.Jarwis.getreminder().subscribe(function (data) { return _this.editordata = data; });
        this.form = {
            template: null
        };
    }
    ReminderComponent.prototype.ngOnInit = function () {
    };
    ReminderComponent.prototype.onReady = function (editor) {
        editor.ui.view.editable.element.parentElement.insertBefore(editor.ui.view.toolbar.element, editor.ui.view.editable.element);
    };
    ReminderComponent.prototype.onChange = function (_a) {
        var editor = _a.editor;
        this.form.template = editor.getData();
    };
    ReminderComponent.prototype.submit = function () {
        this.Jarwis.reminder(this.form).subscribe();
        window.location.reload();
    };
    ReminderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-reminder',
            template: __webpack_require__(/*! ./reminder.component.html */ "./src/app/components/project/template/reminder/reminder.component.html"),
            styles: [__webpack_require__(/*! ./reminder.component.css */ "./src/app/components/project/template/reminder/reminder.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_Service_jarwis_service__WEBPACK_IMPORTED_MODULE_2__["JarwisService"]])
    ], ReminderComponent);
    return ReminderComponent;
}());



/***/ }),

/***/ "./src/app/components/project/warm-lead/edit-warm-lead/edit-warm-lead.component.css":
/*!******************************************************************************************!*\
  !*** ./src/app/components/project/warm-lead/edit-warm-lead/edit-warm-lead.component.css ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvamVjdC93YXJtLWxlYWQvZWRpdC13YXJtLWxlYWQvZWRpdC13YXJtLWxlYWQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/project/warm-lead/edit-warm-lead/edit-warm-lead.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/components/project/warm-lead/edit-warm-lead/edit-warm-lead.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrapper\">\n  <!-- Content Header (Page header) -->\n  <section class=\"content-header\">\n    <div class=\"container-fluid\">\n      <div class=\"row mb-2\">\n        <div class=\"col-sm-6\">\n          <h1>Update Lead Data</h1>\n        </div>\n        <div class=\"col-sm-6\">\n          <ol class=\"breadcrumb float-sm-right\">\n            <li class=\"breadcrumb-item\"><a routerLink='/lead'>Lead</a></li>\n            <li class=\"breadcrumb-item active\">Update</li>\n          </ol>\n        </div>\n      </div>\n    </div><!-- /.container-fluid -->\n  </section>\n  <section class=\"content\">\n    <div class=\"container-fluid\">\n      <div class=\"row\">\n        <div class=\"col-md-12\">\n          <div class=\"card card-primary\">\n            <div class=\"card-header\">\n              <h3 class=\"card-title\">Update Lead</h3>\n            </div>\n            <form [formGroup]=\"editForm\" (ngSubmit)=\"onSubmit()\">\n              <div class=\"card-body\">\n                <div class=\"card col-md-12\">\n                  <div class=\"row\">\n                    <div class=\"col-md-6\">\n                      <div class=\"form-group\">\n                        <label>Name</label>\n                        <input type=\"text\" required formControlName=\"person_name\"  class=\"form-control\"  placeholder=\"Enter person name\">\n                        <input type=\"hidden\" required formControlName=\"_id\">\n                      </div>\n                    </div>\n                    <div class=\"col-md-6\">\n                      <div class=\"form-group\">\n                        <label>Company</label>\n                        <input type=\"text\" required formControlName=\"person_company\" name=\"person_company\" class=\"form-control\" placeholder=\"Enter person company\">\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"card col-md-12\">\n                  <div class=\"row\">\n                    <div class=\"col-md-6\">\n                      <div class=\"form-group\">\n                        <label>Email address</label>\n                        <input type=\"email\" required formControlName=\"person_email\" email=\"true\" name=\"person_email\"  class=\"form-control\" placeholder=\"Enter person email\">\n                      </div>\n                    </div>\n                    <div class=\"col-md-6\">\n                      <div class=\"form-group\">\n                        <label>Number</label>\n                        <input type=\"tel\" required formControlName=\"person_phone\" name=\"person_phone\" id=\"person_number\" class=\"form-control\" maxlength=10 pattern=\"[0-9]+\" placeholder=\"Enter person phone number\">\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"card col-md-12\">\n                  <div class=\"row\">\n                    <div class=\"col-md-6\">\n                      <div class=\"form-group\">\n                        <label>Designation</label>\n                        <input type=\"text\" required formControlName=\"person_designation\" name=\"person_designation\" class=\"form-control\" placeholder=\"Enter person Designation\">\n                      </div>\n                    </div>\n                    <div class=\"col-md-6\">\n                      <div class=\"form-group\">\n                        <label>Source</label>\n                        <input type=\"text\" required formControlName=\"contact_source\" name=\"contact_source\" class=\"form-control\" placeholder=\"Enter contacting Source\">\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"card col-md-12\">\n                  <div class=\"row\">\n                    <div class=\"col-md-6\">\n                      <div class=\"form-group\">\n                        <label>Interseted Product</label>\n                        <select  class=\"form-control\" required formControlName=\"interseted_product\"> \n                            <option class=\"form-control\" disabled>Choose a Product</option>                         \n                          <option *ngFor=\"let product of products\"  [ngValue]=\"product.product\">{{product.product}}</option>\n                        </select>\n                        </div>\n                    </div>\n                    <div class=\"col-md-6\">\n                      <div class=\"form-group\">\n                        <label>Location</label>\n                        <input type=\"text\" required formControlName=\"person_location\" name=\"person_location\" class=\"form-control\" placeholder=\"Enter person location\">\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"card col-md-12\">\n                  <div class=\"row\">\n                    <div class=\"col-md-6\">\n                      <div class=\"form-group\">\n                        <label>Date</label>\n                        <input type=\"date\" required formControlName=\"contacted_date\" name=\"contacted_date\" class=\"form-control\" placeholder=\"Enter date\">\n                      </div>\n                    </div>\n                    <div class=\"col-md-6\">\n                      <div class=\"form-group\">\n                        <label>Remark</label>\n                        <input type=\"text\" required formControlName=\"remark\" name=\"remark\" class=\"form-control\" placeholder=\"Enter remark\">\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"card col-md-12\">\n                  <div class=\"row\">\n                    <div class=\"col-md-6\">\n                      <div class=\"form-group\">\n                        <label>Status</label>\n                        <select  class=\"form-control\" required formControlName=\"status\"> \n                            <option class=\"form-control\" disabled>Choose Lead Status</option>                         \n                          <option [ngValue]=0>Fresh Lead</option>\n                          <option [ngValue]=1>Warm Lead</option>\n                          <option [ngValue]=2>Hot Lead</option>\n                          <option [ngValue]=3>Cold Lead</option>\n                          <option [ngValue]=4>Dead Lead</option>\n                        </select>\n                        </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <!-- /.card-body -->\n\n              <div class=\"card-footer\">\n                <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!editForm.valid\">Update</button>\n              </div>\n            </form>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n  <app-left-menu></app-left-menu>\n  <app-footer></app-footer>\n\n</div>"

/***/ }),

/***/ "./src/app/components/project/warm-lead/edit-warm-lead/edit-warm-lead.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/project/warm-lead/edit-warm-lead/edit-warm-lead.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: EditWarmLeadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditWarmLeadComponent", function() { return EditWarmLeadComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_Service_jarwis_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Service/jarwis.service */ "./src/app/Service/jarwis.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EditWarmLeadComponent = /** @class */ (function () {
    function EditWarmLeadComponent(Router, activateroute, Jarwis, formBuilder) {
        this.Router = Router;
        this.activateroute = activateroute;
        this.Jarwis = Jarwis;
        this.formBuilder = formBuilder;
        this.editForm = this.formBuilder.group({
            _id: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            person_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            person_company: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            person_email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            person_phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            interseted_product: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            person_location: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            contacted_date: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            person_designation: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            contact_source: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            remark: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            status: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
        });
        this.currentUrl = this.activateroute.snapshot.params;
    }
    EditWarmLeadComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.Jarwis.getwarmupdateuser(this.currentUrl).subscribe(function (data) { return _this.setvalue(data); });
        this.Jarwis.productlist().subscribe(function (data) { return _this.productlist(data); });
    };
    EditWarmLeadComponent.prototype.productlist = function (data) {
        this.products = data.success;
    };
    EditWarmLeadComponent.prototype.setvalue = function (data) {
        this.editForm.setValue({
            _id: data._id,
            person_name: data.person_name,
            person_company: data.person_company,
            person_email: data.person_email,
            person_phone: data.person_phone,
            interseted_product: data.interseted_product,
            person_location: data.person_location,
            contacted_date: data.contacted_date,
            person_designation: data.person_designation,
            contact_source: data.contact_source,
            remark: data.remark,
            status: data.status
        });
    };
    EditWarmLeadComponent.prototype.onSubmit = function () {
        var _this = this;
        this.Jarwis.updatewarmlead(this.editForm.value).subscribe(function (data) { return _this.updated(data); });
    };
    EditWarmLeadComponent.prototype.updated = function (data) {
        if (data.success) {
            this.Router.navigateByUrl('/warmlead');
        }
    };
    EditWarmLeadComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-warm-lead',
            template: __webpack_require__(/*! ./edit-warm-lead.component.html */ "./src/app/components/project/warm-lead/edit-warm-lead/edit-warm-lead.component.html"),
            styles: [__webpack_require__(/*! ./edit-warm-lead.component.css */ "./src/app/components/project/warm-lead/edit-warm-lead/edit-warm-lead.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            src_app_Service_jarwis_service__WEBPACK_IMPORTED_MODULE_2__["JarwisService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], EditWarmLeadComponent);
    return EditWarmLeadComponent;
}());



/***/ }),

/***/ "./src/app/components/project/warm-lead/list-warm-lead/list-warm-lead.component.css":
/*!******************************************************************************************!*\
  !*** ./src/app/components/project/warm-lead/list-warm-lead/list-warm-lead.component.css ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvamVjdC93YXJtLWxlYWQvbGlzdC13YXJtLWxlYWQvbGlzdC13YXJtLWxlYWQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/project/warm-lead/list-warm-lead/list-warm-lead.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/components/project/warm-lead/list-warm-lead/list-warm-lead.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-left-menu></app-left-menu>\n\n<div class=\"content-wrapper\">\n  <!-- Content Header (Page header) -->\n  <section class=\"content-header\">\n    <div class=\"container-fluid\">\n      <div class=\"row mb-2\">\n        <div class=\"col-sm-6\">\n          <h1>Warm Leads</h1>\n        </div>\n        <div class=\"col-sm-6\">\n          <ol class=\"breadcrumb float-sm-right\">\n            <li class=\"breadcrumb-item active\">Warm Leads List</li>\n          </ol>\n        </div>\n      </div>\n    </div><!-- /.container-fluid -->\n  </section>\n  <!-- Main content -->\n  <section class=\"content\">\n    <div class=\"row\">\n      <div class=\"col-12\">\n        <div class=\"card\">\n          <div class=\"card-header\">\n            <h3 class=\"card-title\">Leads Data Listing</h3>\n          </div>\n          <!-- /.card-header -->\n        <div class=\"table-responsive\" *ngIf=\"tData\">\n            <table class=\"table table-striped table-bordered table-sm row-border hover\">\n              <thead>\n                <tr>\n                  <th>Name</th>\n                  <th>Company</th>\n                  <th>Email</th>\n                  <th>Phone</th>\n                  <th>Designation</th>\n                  <th>Interseted In</th>\n                  <th>Location</th>\n                  <th>Date</th>\n                  <th>Source</th>\n                  <th>Remark</th>\n                  <th>Status</th>\n                  <th>Email Sent</th>\n                  <th>Email Response</th>\n                  <th>Action</th>                  \n                </tr>\n              </thead>\n              <tbody *ngIf=\"data?.length > 0\">\n                <tr *ngFor=\"let lead of data\">\n                  <td>{{lead.person_name}}</td>\n                  <td>{{lead.person_company}}</td>\n                  <td>{{lead.person_email}}</td>\n                  <td>{{lead.person_phone}}</td>\n                  <td>{{lead.person_designation}}</td>\n                  <td>{{lead.interseted_product}}</td>\n                  <td>{{lead.person_location}}</td>\n                  <td>{{lead.contacted_date}}</td>\n                  <td>{{lead.contact_source}}</td>\n                  <td>{{lead.remark}}</td>\n                  <td *ngIf=\"lead.status == 1\">Warm Lead</td>\n                  <td>{{lead.email_sent}}</td>\n                  <td>{{lead.email_response}}</td>       \n                  <td><a routerLink=\"edit/{{lead._id}}\"><i class=\"fa fa-eye\"></i></a><i class=\"fa fa-trash\" (click)=\"delete(lead._id)\"></i></td>           \n                </tr>\n              </tbody>\n            </table>\n          </div>\n          <!-- /.card-body -->\n        </div>\n        <!-- /.card -->\n      </div>\n      <!-- /.col -->\n    </div>\n    <!-- /.row -->\n  </section>\n  <!-- /.content -->\n  <app-footer></app-footer>\n</div>"

/***/ }),

/***/ "./src/app/components/project/warm-lead/list-warm-lead/list-warm-lead.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/project/warm-lead/list-warm-lead/list-warm-lead.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: ListWarmLeadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListWarmLeadComponent", function() { return ListWarmLeadComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_Service_jarwis_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/Service/jarwis.service */ "./src/app/Service/jarwis.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListWarmLeadComponent = /** @class */ (function () {
    function ListWarmLeadComponent(Jarwis, chRef) {
        this.Jarwis = Jarwis;
        this.chRef = chRef;
        this.data = [];
    }
    ListWarmLeadComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.Jarwis.getwarmlead().subscribe(function (data) {
            _this.tData = true;
            _this.data = data.success;
            // You'll have to wait that changeDetection occurs and projects data into 
            // the HTML template, you can ask Angular to that for you ;-)
            _this.chRef.detectChanges();
            // Now you can use jQuery DataTables :
            var table = $('table');
            _this.dataTable = table.DataTable({
                "scrollX": true
            });
        });
    };
    ListWarmLeadComponent.prototype.delete = function (id) {
        var _this = this;
        this.Jarwis.deletewarmlead(id).subscribe(function (data) { return _this.deletesuccess(data); });
    };
    ListWarmLeadComponent.prototype.deletesuccess = function (data) {
        if (data.success) {
            this.tData = false;
            this.ngOnInit();
        }
    };
    ListWarmLeadComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-list-warm-lead',
            template: __webpack_require__(/*! ./list-warm-lead.component.html */ "./src/app/components/project/warm-lead/list-warm-lead/list-warm-lead.component.html"),
            styles: [__webpack_require__(/*! ./list-warm-lead.component.css */ "./src/app/components/project/warm-lead/list-warm-lead/list-warm-lead.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_Service_jarwis_service__WEBPACK_IMPORTED_MODULE_1__["JarwisService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], ListWarmLeadComponent);
    return ListWarmLeadComponent;
}());



/***/ }),

/***/ "./src/app/components/signup/signup.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/signup/signup.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/signup/signup.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/signup/signup.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row login d-flex align-items-center\">\n    <div class=\"container\">\n      <form #signupform=\"ngForm\" (ngSubmit)=\"onSubmit()\">\n        \n        <div class=\"row\">\n          <div class=\"col-xl-4 col-lg-4 col-md-8 col-sm-12\">\n          </div>\n          <div class=\"col-xl-4 col-lg-4 col-md-8 col-sm-12 \">\n          </div>\n          <div class=\"col-xl-4 col-lg-4 col-md-8 col-sm-12 mt-5 log\">\n            <img src=\"assets/images/quickway_user.png\" class=\"img-fluid d-block m-auto\">\n            <div class=\"clearfix\"></div>\n            <div class=\"he_ad\">\n              <div class=\"col-xl-12\">\n                <div class=\"borr\">\n                  <h1 class=\"text-center\">Sign Up</h1>\n                </div>\n                <small class=\"d-block text-center\">Create your account</small>\n                <div class=\"clearfix\"></div>\n                <div class=\"pt-4\">\n                    <div class=\"alert alert-danger\" [hidden]=\"!error\">\n                        {{error}}\n                      </div>\n                  <div class=\"form-group\">\n                      \n                    <label>Name</label>\n                    <input type=\"text\" required class=\"form-control ad\" [(ngModel)]=\"form.name\" name=\"name\" placeholder=\"Enter Your Name\">\n                    <div class=\"alert alert-danger\" [hidden]=\"!error.name\">\n                        {{error?.name}}\n                      </div>\n                  </div>\n                  <div class=\"form-group\">\n                      \n                    <label>Email</label>\n                    <input type=\"email\" required class=\"form-control ad\" [(ngModel)]=\"form.email\" email=\"true\" name=\"email\" placeholder=\"Enter Your Email\">\n                    <div class=\"alert alert-danger\" [hidden]=\"!error.email\">\n                        {{error?.email}}\n                      </div>\n                  </div>\n                  <div class=\"form-group\">\n                      \n                    <label>Password</label>\n                    <input type=\"password\" required class=\"form-control pas\" [(ngModel)]=\"form.password\" name=\"password\" placeholder=\"Password Here\">\n                    <div class=\"alert alert-danger\" [hidden]=\"!error.password\">\n                        {{error?.password}}\n                      </div>\n                  </div>\n                  <div class=\"form-group\">\n                      \n                    <label>Confirm Password</label>\n                    <input type=\"password\" required class=\"form-control pas\" [(ngModel)]=\"form.c_password\" name=\"c_password\" placeholder=\"Confirm Password Here\">\n                    <div class=\"alert alert-danger\" [hidden]=\"!error.c_password\">\n                        {{error?.c_password}}\n                      </div>\n                  </div>\n                  <div class=\"form-group\">\n                    <input type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!signupform.valid\" value=\"Sign Up\">\n                  </div>\n                  <div class=\"clearfix\"></div>\n                  <div class=\"login text-center\">\n                    <h5>Have a account ?</h5>\n                    <a routerLink=\"/\" class=\"for_pas btn btn-primary pull-right\" >Login</a>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </form>\n    </div>"

/***/ }),

/***/ "./src/app/components/signup/signup.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/signup/signup.component.ts ***!
  \*******************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_Service_jarwis_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/Service/jarwis.service */ "./src/app/Service/jarwis.service.ts");
/* harmony import */ var src_app_Service_token_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Service/token.service */ "./src/app/Service/token.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SignupComponent = /** @class */ (function () {
    function SignupComponent(jarwish, token, Router) {
        this.jarwish = jarwish;
        this.token = token;
        this.Router = Router;
        this.error = [];
        this.form = {
            name: null,
            email: null,
            password: null,
            c_password: null
        };
    }
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent.prototype.onSubmit = function () {
        var _this = this;
        this.jarwish.signup(this.form).subscribe(function (data) { return _this.handleResponse(data); }, function (error) { return _this.handleError(error); });
    };
    SignupComponent.prototype.handleResponse = function (data) {
        // console.log(data.success.token);
        this.token.handle(data.success.token);
        this.Router.navigateByUrl('dashboard');
    };
    SignupComponent.prototype.handleError = function (error) {
        this.error = error.error.error;
    };
    SignupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/components/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/components/signup/signup.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_Service_jarwis_service__WEBPACK_IMPORTED_MODULE_1__["JarwisService"],
            src_app_Service_token_service__WEBPACK_IMPORTED_MODULE_2__["TokenService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/user.ts":
/*!*************************!*\
  !*** ./src/app/user.ts ***!
  \*************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User() {
    }
    return User;
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ "./src/oauth.ts":
/*!**********************!*\
  !*** ./src/oauth.ts ***!
  \**********************/
/*! exports provided: OAuthSettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OAuthSettings", function() { return OAuthSettings; });
var OAuthSettings = {
    appId: '096a3e60-bf2b-4ca5-8bb4-e3a5be05d923',
    scopes: [
        "user.read",
        "mail.read"
    ]
};


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! F:\xampp\htdocs\sale\angu\src\main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/*!************************!*\
  !*** stream (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map