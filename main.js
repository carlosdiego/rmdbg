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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media (max-width: 767px) {\r\n  /* On small screens, the nav menu spans the full width of the screen. Leave a space for it. */\r\n  .body-content {\r\n    padding-top: 50px;\r\n  }\r\n}\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body>\r\n  <app-nav-menu></app-nav-menu>\r\n  <div class=\"container\">\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n</body>\r\n"

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
        this.title = 'app';
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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./nav-menu/nav-menu.component */ "./src/app/nav-menu/nav-menu.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _counter_counter_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./counter/counter.component */ "./src/app/counter/counter.component.ts");
/* harmony import */ var _fetch_data_fetch_data_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./fetch-data/fetch-data.component */ "./src/app/fetch-data/fetch-data.component.ts");
/* harmony import */ var _fileupload_fileupload_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./fileupload/fileupload.component */ "./src/app/fileupload/fileupload.component.ts");
/* harmony import */ var _report_rmdbgreport_app_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./report/rmdbgreport.app.component */ "./src/app/report/rmdbgreport.app.component.ts");
/* harmony import */ var _tab_tabs_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./tab/tabs.component */ "./src/app/tab/tabs.component.ts");
/* harmony import */ var _tab_tab_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./tab/tab.component */ "./src/app/tab/tab.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_6__["NavMenuComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
                _counter_counter_component__WEBPACK_IMPORTED_MODULE_8__["CounterComponent"],
                _fetch_data_fetch_data_component__WEBPACK_IMPORTED_MODULE_9__["FetchDataComponent"],
                _fileupload_fileupload_component__WEBPACK_IMPORTED_MODULE_10__["FileuploadComponent"],
                _report_rmdbgreport_app_component__WEBPACK_IMPORTED_MODULE_11__["RMDbgAppComponent"],
                _tab_tabs_component__WEBPACK_IMPORTED_MODULE_12__["TabsComponent"],
                _tab_tab_component__WEBPACK_IMPORTED_MODULE_13__["TabComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"].withServerTransition({ appId: 'ng-cli-universal' }),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot([
                    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"], pathMatch: 'full' },
                ])
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _report_rmdbgreport_app_component__WEBPACK_IMPORTED_MODULE_11__["RMDbgAppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/counter/counter.component.html":
/*!************************************************!*\
  !*** ./src/app/counter/counter.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Counter</h1>\r\n\r\n<p>This is a simple example of an Angular component.</p>\r\n\r\n<p>Current count: <strong>{{ currentCount }}</strong></p>\r\n\r\n<button class=\"btn btn-primary\" (click)=\"incrementCounter()\">Increment</button>\r\n"

/***/ }),

/***/ "./src/app/counter/counter.component.ts":
/*!**********************************************!*\
  !*** ./src/app/counter/counter.component.ts ***!
  \**********************************************/
/*! exports provided: CounterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CounterComponent", function() { return CounterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CounterComponent = /** @class */ (function () {
    function CounterComponent() {
        this.currentCount = 0;
    }
    CounterComponent.prototype.incrementCounter = function () {
        this.currentCount++;
    };
    CounterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-counter-component',
            template: __webpack_require__(/*! ./counter.component.html */ "./src/app/counter/counter.component.html")
        })
    ], CounterComponent);
    return CounterComponent;
}());



/***/ }),

/***/ "./src/app/fetch-data/fetch-data.component.html":
/*!******************************************************!*\
  !*** ./src/app/fetch-data/fetch-data.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Weather forecast</h1>\r\n\r\n<p>This component demonstrates fetching data from the server.</p>\r\n\r\n<p *ngIf=\"!forecasts\"><em>Loading...</em></p>\r\n\r\n<table class='table table-striped' *ngIf=\"forecasts\">\r\n  <thead>\r\n    <tr>\r\n      <th>Date</th>\r\n      <th>Temp. (C)</th>\r\n      <th>Temp. (F)</th>\r\n      <th>Summary</th>\r\n    </tr>\r\n  </thead>\r\n  <tbody>\r\n    <tr *ngFor=\"let forecast of forecasts\">\r\n      <td>{{ forecast.dateFormatted }}</td>\r\n      <td>{{ forecast.temperatureC }}</td>\r\n      <td>{{ forecast.temperatureF }}</td>\r\n      <td>{{ forecast.summary }}</td>\r\n    </tr>\r\n  </tbody>\r\n</table>\r\n"

/***/ }),

/***/ "./src/app/fetch-data/fetch-data.component.ts":
/*!****************************************************!*\
  !*** ./src/app/fetch-data/fetch-data.component.ts ***!
  \****************************************************/
/*! exports provided: FetchDataComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FetchDataComponent", function() { return FetchDataComponent; });
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
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var FetchDataComponent = /** @class */ (function () {
    function FetchDataComponent(http, baseUrl) {
        var _this = this;
        http.get(baseUrl + 'api/SampleData/WeatherForecasts').subscribe(function (result) {
            _this.forecasts = result;
        }, function (error) { return console.error(error); });
    }
    FetchDataComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-fetch-data',
            template: __webpack_require__(/*! ./fetch-data.component.html */ "./src/app/fetch-data/fetch-data.component.html")
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])('BASE_URL')),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], String])
    ], FetchDataComponent);
    return FetchDataComponent;
}());



/***/ }),

/***/ "./src/app/fileupload/fileupload.component.css":
/*!*****************************************************!*\
  !*** ./src/app/fileupload/fileupload.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/fileupload/fileupload.component.html":
/*!******************************************************!*\
  !*** ./src/app/fileupload/fileupload.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<h1>Upload de arquivos RM Debugger</h1>\r\n<input #file type=\"file\" multiple (change)=\"upload(file.files)\" />\r\n<br />\r\n<span style=\"font-weight:bold;color:green;\" *ngIf=\"progress > 0 && progress < 100\">\r\n  {{progress}}%\r\n</span>\r\n\r\n<span style=\"font-weight:bold;color:green;\" *ngIf=\"message\">\r\n  {{message}}\r\n</span>-->\r\n"

/***/ }),

/***/ "./src/app/fileupload/fileupload.component.ts":
/*!****************************************************!*\
  !*** ./src/app/fileupload/fileupload.component.ts ***!
  \****************************************************/
/*! exports provided: FileuploadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileuploadComponent", function() { return FileuploadComponent; });
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


var FileuploadComponent = /** @class */ (function () {
    function FileuploadComponent(http) {
        this.http = http;
    }
    FileuploadComponent.prototype.upload = function (files, callbackObj) {
        var _this = this;
        if (files.length === 0)
            return null;
        var _loop_1 = function (file) {
            var fileReader = new FileReader();
            fileReader.readAsText(file, "UTF-8");
            fileReader.onload = function () {
                var analyzeReport = JSON.parse(fileReader.result.toString(), _this.toCamelCase);
                var fObj = analyzeReport;
                console.log(fObj);
                _this.message = 'Finalizado';
                _this.report = fObj;
                callbackObj.callbackReport(_this.report, _this.message);
            };
            fileReader.onerror = function (error) {
                console.log(error);
            };
        };
        for (var _i = 0, files_1 = files; _i < files_1.length; _i++) {
            var file = files_1[_i];
            _loop_1(file);
        }
    };
    FileuploadComponent.prototype.toCamelCase = function (key, value) {
        if (value && typeof value === 'object') {
            for (var k in value) {
                if (/^[A-Z]/.test(k) && Object.hasOwnProperty.call(value, k)) {
                    value[k.charAt(0).toLowerCase() + k.substring(1)] = value[k];
                    delete value[k];
                }
            }
        }
        return value;
    };
    FileuploadComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-fileupload',
            template: __webpack_require__(/*! ./fileupload.component.html */ "./src/app/fileupload/fileupload.component.html"),
            styles: [__webpack_require__(/*! ./fileupload.component.css */ "./src/app/fileupload/fileupload.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], FileuploadComponent);
    return FileuploadComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Upload de arquivos RM Debugger</h1>\r\n<input #file type=\"file\" multiple (change)=\"uploadfile(file.files)\" />\r\n<br />\r\n<span style=\"font-weight:bold;color:green;\" *ngIf=\"progress > 0 && progress < 100\">\r\n  {{progress}}%\r\n</span>\r\n\r\n<span style=\"font-weight:bold;color:green;\" *ngIf=\"message\">\r\n  {{message}}\r\n</span>\r\n\r\n&nbsp;\r\n&nbsp;\r\n&nbsp;\r\n&nbsp;\r\n\r\n<report>Loading...</report>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fileupload_fileupload_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../fileupload/fileupload.component */ "./src/app/fileupload/fileupload.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _report_rmdbgreport_app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../report/rmdbgreport.app.component */ "./src/app/report/rmdbgreport.app.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomeComponent = /** @class */ (function () {
    function HomeComponent(http) {
        this.http = http;
    }
    HomeComponent.prototype.uploadfile = function (files) {
        this.fileupload = new _fileupload_fileupload_component__WEBPACK_IMPORTED_MODULE_1__["FileuploadComponent"](this.http);
        this.fileupload.upload(files, this);
    };
    HomeComponent.prototype.callbackReport = function (report, message) {
        this.message = message;
        this.tab.setReport(report);
    };
    HomeComponent.prototype.callbackProgress = function (progress) {
        this.progress = progress;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_report_rmdbgreport_app_component__WEBPACK_IMPORTED_MODULE_3__["RMDbgAppComponent"]),
        __metadata("design:type", _report_rmdbgreport_app_component__WEBPACK_IMPORTED_MODULE_3__["RMDbgAppComponent"])
    ], HomeComponent.prototype, "tab", void 0);
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/nav-menu/nav-menu.component.css":
/*!*************************************************!*\
  !*** ./src/app/nav-menu/nav-menu.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a.navbar-brand {\r\n  white-space: normal;\r\n  text-align: center;\r\n  word-break: break-all;\r\n}\r\n\r\nhtml {\r\n  font-size: 14px;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  html {\r\n    font-size: 16px;\r\n  }\r\n}\r\n\r\n.box-shadow {\r\n  box-shadow: 0 .25rem .75rem rgba(0, 0, 0, .05);\r\n}\r\n"

/***/ }),

/***/ "./src/app/nav-menu/nav-menu.component.html":
/*!**************************************************!*\
  !*** ./src/app/nav-menu/nav-menu.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\r\n  <nav class='navbar navbar-expand-sm navbar-toggleable-sm navbar-light bg-white border-bottom box-shadow mb-3'>\r\n    <div class=\"container\">\r\n      <a class=\"navbar-brand\" [routerLink]='[\"/\"]'>ReportViewer</a>\r\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\".navbar-collapse\" aria-label=\"Toggle navigation\"\r\n        [attr.aria-expanded]=\"isExpanded\" (click)=\"toggle()\">\r\n        <span class=\"navbar-toggler-icon\"></span>\r\n      </button>\r\n      <div class=\"navbar-collapse collapse d-sm-inline-flex flex-sm-row-reverse\" [ngClass]='{\"show\": isExpanded}'>\r\n        <ul class=\"navbar-nav flex-grow\">\r\n          <li class=\"nav-item\" [routerLinkActive]='[\"link-active\"]' [routerLinkActiveOptions]='{ exact: true }'>\r\n            <a class=\"nav-link text-dark\" [routerLink]='[\"/\"]'>Home</a>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </nav>\r\n</header>\r\n"

/***/ }),

/***/ "./src/app/nav-menu/nav-menu.component.ts":
/*!************************************************!*\
  !*** ./src/app/nav-menu/nav-menu.component.ts ***!
  \************************************************/
/*! exports provided: NavMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavMenuComponent", function() { return NavMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NavMenuComponent = /** @class */ (function () {
    function NavMenuComponent() {
        this.isExpanded = false;
    }
    NavMenuComponent.prototype.collapse = function () {
        this.isExpanded = false;
    };
    NavMenuComponent.prototype.toggle = function () {
        this.isExpanded = !this.isExpanded;
    };
    NavMenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nav-menu',
            template: __webpack_require__(/*! ./nav-menu.component.html */ "./src/app/nav-menu/nav-menu.component.html"),
            styles: [__webpack_require__(/*! ./nav-menu.component.css */ "./src/app/nav-menu/nav-menu.component.css")]
        })
    ], NavMenuComponent);
    return NavMenuComponent;
}());



/***/ }),

/***/ "./src/app/report/rmdbgreport.app.component.html":
/*!*******************************************************!*\
  !*** ./src/app/report/rmdbgreport.app.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<my-tabs>\r\n  <my-tab [tabTitle]=\"'Assemblies'\">\r\n    {{assemblies}}\r\n  </my-tab>\r\n  <my-tab tabTitle=\"Threads\">\r\n    {{threads}}\r\n  </my-tab>\r\n  <my-tab tabTitle=\"Tipos de objetos em memória\" style=\"font-family: 'Courier New', Courier, monospace;width:max-content\">\r\n    {{dumpHeapStat}}\r\n  </my-tab>\r\n  <my-tab tabTitle=\"Tipos de objetos na fila de finalização em memória\" style=\"font-family: 'Courier New', Courier, monospace;width:max-content\">\r\n    {{dumpFinalizeQueue}}\r\n  </my-tab>\r\n  <my-tab tabTitle=\"Tipos de objetos RM em memória\" style=\"font-family: 'Courier New', Courier, monospace;width:max-content\">\r\n    {{rmTypes}}\r\n  </my-tab>\r\n  <my-tab tabTitle=\"Grandes Data Tables em memória\">\r\n    {{dataTables}}\r\n  </my-tab>\r\n  <my-tab tabTitle=\"DataTables de mesmo nome que somam grandes volumes de registros\">\r\n    {{aggregatedDataTables}}\r\n  </my-tab>\r\n  <my-tab tabTitle=\"Objetos de mesmo tipo em grandes volumes\">\r\n    {{largeObjects}}\r\n  </my-tab>\r\n  <my-tab tabTitle=\"Relatórios em memória\">\r\n    {{reports}}\r\n  </my-tab>\r\n</my-tabs>\n<hr>\n"

/***/ }),

/***/ "./src/app/report/rmdbgreport.app.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/report/rmdbgreport.app.component.ts ***!
  \*****************************************************/
/*! exports provided: RMDbgAppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RMDbgAppComponent", function() { return RMDbgAppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var typescript_string_operations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! typescript-string-operations */ "./node_modules/typescript-string-operations/dist/index.min.js");
/* harmony import */ var typescript_string_operations__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(typescript_string_operations__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var RMDbgAppComponent = /** @class */ (function () {
    function RMDbgAppComponent() {
    }
    RMDbgAppComponent.prototype.setReport = function (report) {
        this.report = report;
        this.loadReport();
    };
    RMDbgAppComponent.prototype.loadReport = function () {
        this.loadAssemblies();
        this.loadThreads();
        this.loadPercentageInFinalizerQueue();
        this.loadDumpHeapStat();
        this.loadDumpFinalizeQueue();
        this.loadRMTypes();
        this.loadDataTables();
        this.loadAggregatedDataTables();
        this.loadLargeObjects();
        this.loadReports();
    };
    RMDbgAppComponent.prototype.loadPercentageInFinalizerQueue = function () {
        var count = 0;
        var countInFinalizeQueue = 0;
        this.report.dumpFinalizeQueue.forEach(function (element) {
            countInFinalizeQueue += element.count;
        });
        this.report.dumpHeapStat.forEach(function (element) {
            count += element.count;
        });
        this.percentageInFinalizeque = ((countInFinalizeQueue / count) * 100).toString().substring(0, 5);
    };
    RMDbgAppComponent.prototype.getJustifiedString = function (lenght, text) {
        var result = ' '.repeat(lenght - text.length) + text;
        return result;
    };
    RMDbgAppComponent.prototype.loadReports = function () {
        var _this = this;
        this.reports = "Listando informações sobre relatórios em memória. \n\n";
        this.report.reports.forEach(function (element) {
            _this.reports += typescript_string_operations__WEBPACK_IMPORTED_MODULE_1__["String"].Format("Descrição do relatório: {0} \n", element.descReport);
            _this.reports += typescript_string_operations__WEBPACK_IMPORTED_MODULE_1__["String"].Format("Código do relatório: {0} \n", element.codReport);
            _this.reports += typescript_string_operations__WEBPACK_IMPORTED_MODULE_1__["String"].Format("Código da coligada do relatório: {0} \n\n", element.codColigada);
            _this.reports += typescript_string_operations__WEBPACK_IMPORTED_MODULE_1__["String"].Format("Quantidade de memória referenciado pelo relatório (estimado em bytes) {0} \n", element.size);
            _this.reports += typescript_string_operations__WEBPACK_IMPORTED_MODULE_1__["String"].Format("Stack de execução {0} \n\n", element.executionStack);
            _this.reports += "###################################################################################################### \n\n";
        });
    };
    RMDbgAppComponent.prototype.loadLargeObjects = function () {
        var _this = this;
        this.largeObjects = "Listando grandes volumes de objetos do mesmo tipo. \n\n";
        this.report.largeObjects.forEach(function (element) {
            _this.largeObjects += typescript_string_operations__WEBPACK_IMPORTED_MODULE_1__["String"].Format("Nome do Tipo de objeto: {0} \n", element.typeName);
            _this.largeObjects += typescript_string_operations__WEBPACK_IMPORTED_MODULE_1__["String"].Format("Quantidade de objetos: {0} \n", element.count);
            _this.largeObjects += typescript_string_operations__WEBPACK_IMPORTED_MODULE_1__["String"].Format("Quantidade de memória referenciado por todos os objetos (estimado em bytes) {0} \n\n", element.estimatedSize);
            _this.largeObjects += typescript_string_operations__WEBPACK_IMPORTED_MODULE_1__["String"].Format("Caminhos que fazem referência:  \n  {0} \n\n", element.roots.join('\n\n'));
            _this.largeObjects += "###################################################################################################### \n\n";
        });
    };
    RMDbgAppComponent.prototype.loadAggregatedDataTables = function () {
        var _this = this;
        this.aggregatedDataTables = "Listando os maiores Data Tables em memória \n\n";
        this.report.dataTables.filter(function (x) { return x.count > 1; }).forEach(function (element) {
            _this.aggregatedDataTables += typescript_string_operations__WEBPACK_IMPORTED_MODULE_1__["String"].Format("Nome do Data Table: {0} \n", element.name);
            _this.aggregatedDataTables += typescript_string_operations__WEBPACK_IMPORTED_MODULE_1__["String"].Format("Número de Data Tables {0}: {1} \n", element.name, element.count);
            _this.aggregatedDataTables += typescript_string_operations__WEBPACK_IMPORTED_MODULE_1__["String"].Format("Número de registros totais: {0} \n\n", element.rowCount);
            _this.aggregatedDataTables += typescript_string_operations__WEBPACK_IMPORTED_MODULE_1__["String"].Format("Propriedades estendidas: \n {0} \n\n", element.extendedProperties);
            _this.aggregatedDataTables += typescript_string_operations__WEBPACK_IMPORTED_MODULE_1__["String"].Format("Caminhos que fazem referência:  \n  {0} \n\n", element.roots.join('\n\n'));
            _this.aggregatedDataTables += "###################################################################################################### \n\n";
        });
    };
    RMDbgAppComponent.prototype.loadDataTables = function () {
        var _this = this;
        this.dataTables = "Listando os maiores Data Tables em memória \n\n";
        this.report.dataTables.filter(function (x) { return x.count == 1; }).forEach(function (element) {
            _this.dataTables += typescript_string_operations__WEBPACK_IMPORTED_MODULE_1__["String"].Format("Nome do Data Table: {0} \n", element.name);
            _this.dataTables += typescript_string_operations__WEBPACK_IMPORTED_MODULE_1__["String"].Format("Endereço em memória: {0} \n", element.address);
            _this.dataTables += typescript_string_operations__WEBPACK_IMPORTED_MODULE_1__["String"].Format("Número de registros: {0} \n", element.rowCount);
            _this.dataTables += typescript_string_operations__WEBPACK_IMPORTED_MODULE_1__["String"].Format("Quantidade de memória referenciada (aproximada em bytes): {0} \n\n", element.size);
            _this.dataTables += typescript_string_operations__WEBPACK_IMPORTED_MODULE_1__["String"].Format("Propriedades estendidas: \n {0} \n\n", element.extendedProperties);
            _this.dataTables += typescript_string_operations__WEBPACK_IMPORTED_MODULE_1__["String"].Format("Caminhos que fazem referência:  \n  {0} \n\n", element.roots.join('\n\n'));
            _this.dataTables += "###################################################################################################### \n\n";
        });
    };
    RMDbgAppComponent.prototype.loadRMTypes = function () {
        var _this = this;
        this.rmTypes = "Comando similar ao !dumpheap -stat filtrando somente tipos do RM \n\n";
        this.report.rmTypes.sort(function (x, y) { return x.count > y.count ? -1 : 1; }).forEach(function (element) {
            _this.rmTypes += typescript_string_operations__WEBPACK_IMPORTED_MODULE_1__["String"].Format("{0} {1} {2} \n", _this.getJustifiedString(12, element.size.toString()), _this.getJustifiedString(12, element.count.toString()), element.name);
        });
    };
    RMDbgAppComponent.prototype.loadDumpHeapStat = function () {
        var _this = this;
        this.dumpHeapStat = "Comando similar ao !dumpheap -stat do windbg. \n\n";
        this.report.dumpHeapStat.forEach(function (element) {
            _this.dumpHeapStat += typescript_string_operations__WEBPACK_IMPORTED_MODULE_1__["String"].Format("{0} {1} {2} \n", _this.getJustifiedString(12, element.size.toString()), _this.getJustifiedString(12, element.count.toString()), element.typeName);
        });
    };
    RMDbgAppComponent.prototype.loadDumpFinalizeQueue = function () {
        var _this = this;
        this.dumpFinalizeQueue = "Comando similar ao !dumpheap -stat do windbg para fila de finalização. \n\n";
        this.dumpFinalizeQueue += typescript_string_operations__WEBPACK_IMPORTED_MODULE_1__["String"].Format("Percentual de objetos na fila de finalização = {0}% \n\n", this.percentageInFinalizeque);
        this.report.dumpFinalizeQueue.forEach(function (element) {
            _this.dumpFinalizeQueue += typescript_string_operations__WEBPACK_IMPORTED_MODULE_1__["String"].Format("{0} {1} {2} \n", _this.getJustifiedString(12, element.size.toString()), _this.getJustifiedString(12, element.count.toString()), element.typeName);
        });
    };
    RMDbgAppComponent.prototype.loadThreads = function () {
        var _this = this;
        this.threads = typescript_string_operations__WEBPACK_IMPORTED_MODULE_1__["String"].Format("Threads executando no momento em que o dump foi gerado. \n\n");
        this.report.threads.forEach(function (element) {
            _this.threads += typescript_string_operations__WEBPACK_IMPORTED_MODULE_1__["String"].Format("Id da Thread: {0} \n", element.id);
            _this.threads += typescript_string_operations__WEBPACK_IMPORTED_MODULE_1__["String"].Format("É Background: {0} \n", element.isBackground);
            _this.threads += typescript_string_operations__WEBPACK_IMPORTED_MODULE_1__["String"].Format("Está ativa: {0} \n", element.isAlive);
            _this.threads += typescript_string_operations__WEBPACK_IMPORTED_MODULE_1__["String"].Format("\nStack Trace: \n {0} \n", element.stackTrace);
            if (element.exception != undefined && element.exception != typescript_string_operations__WEBPACK_IMPORTED_MODULE_1__["String"].Empty) {
                _this.threads += typescript_string_operations__WEBPACK_IMPORTED_MODULE_1__["String"].Format("\nException: \n {0} \n", element.exception);
                if (element.innerException != undefined && element.innerException != typescript_string_operations__WEBPACK_IMPORTED_MODULE_1__["String"].Empty) {
                    _this.threads += typescript_string_operations__WEBPACK_IMPORTED_MODULE_1__["String"].Format("Inner Exception: \n {0} \n", element.innerException);
                }
            }
            _this.threads += "###################################################################################################### \n\n";
        });
    };
    RMDbgAppComponent.prototype.loadAssemblies = function () {
        var _this = this;
        this.assemblies = typescript_string_operations__WEBPACK_IMPORTED_MODULE_1__["String"].Format("Foram encontrados {0} assemblies carregados. \n\n", this.report.assemblies.length);
        this.report.assemblies.sort(function (x, y) { return x.types.length > y.types.length ? 1 : -1; }).forEach(function (element) {
            if (element != undefined && element.name != undefined) {
                _this.assemblies += element.name + "\n";
                if (element.types != undefined && element.types.length > 0) {
                    _this.assemblies += "     Tipos: \n";
                    element.types.forEach(function (type) {
                        _this.assemblies += "     " + type + "\n";
                    });
                }
            }
        });
    };
    RMDbgAppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'report',
            template: __webpack_require__(/*! ./rmdbgreport.app.component.html */ "./src/app/report/rmdbgreport.app.component.html")
        })
    ], RMDbgAppComponent);
    return RMDbgAppComponent;
}());



/***/ }),

/***/ "./src/app/tab/tab.component.html":
/*!****************************************!*\
  !*** ./src/app/tab/tab.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"white-space: pre-wrap;\" [hidden]=\"!selected\">\n  <ng-content></ng-content>\n</div>\n"

/***/ }),

/***/ "./src/app/tab/tab.component.ts":
/*!**************************************!*\
  !*** ./src/app/tab/tab.component.ts ***!
  \**************************************/
/*! exports provided: TabComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabComponent", function() { return TabComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _tabs_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs.component */ "./src/app/tab/tabs.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TabComponent = /** @class */ (function () {
    function TabComponent(tabsComponent) {
        this.tabsComponent = tabsComponent;
    }
    TabComponent.prototype.ngOnInit = function () {
        this.tabsComponent.addTab(this);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TabComponent.prototype, "tabTitle", void 0);
    TabComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'my-tab',
            template: __webpack_require__(/*! ./tab.component.html */ "./src/app/tab/tab.component.html")
        }),
        __metadata("design:paramtypes", [_tabs_component__WEBPACK_IMPORTED_MODULE_1__["TabsComponent"]])
    ], TabComponent);
    return TabComponent;
}());



/***/ }),

/***/ "./src/app/tab/tabs.component.html":
/*!*****************************************!*\
  !*** ./src/app/tab/tabs.component.html ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul>\n  <li *ngFor=\"let tab of tabs\">\n    <a href=\"#\" (click)=\"selectTab(tab)\">{{tab.tabTitle}}</a>\n  </li>\n</ul>\n<ng-content></ng-content>"

/***/ }),

/***/ "./src/app/tab/tabs.component.ts":
/*!***************************************!*\
  !*** ./src/app/tab/tabs.component.ts ***!
  \***************************************/
/*! exports provided: TabsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsComponent", function() { return TabsComponent; });
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

var TabsComponent = /** @class */ (function () {
    function TabsComponent() {
        this.tabs = [];
        this.selected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    TabsComponent.prototype.addTab = function (tab) {
        if (!this.tabs.length) {
            tab.selected = true;
        }
        this.tabs.push(tab);
    };
    TabsComponent.prototype.selectTab = function (tab) {
        this.tabs.map(function (tab) {
            tab.selected = false;
        });
        tab.selected = true;
        this.selected.emit({ selectedTab: tab });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], TabsComponent.prototype, "selected", void 0);
    TabsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'my-tabs',
            template: __webpack_require__(/*! ./tabs.component.html */ "./src/app/tab/tabs.component.html")
        })
    ], TabsComponent);
    return TabsComponent;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! exports provided: getBaseUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBaseUrl", function() { return getBaseUrl; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




function getBaseUrl() {
    return document.getElementsByTagName('base')[0].href;
}
var providers = [
    { provide: 'BASE_URL', useFactory: getBaseUrl, deps: [] }
];
if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])(providers).bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\RM\Tribes\Framework\Foundation\RMDebuggerTool\ReportViewer\ClientApp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map