(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _curriculum_curriculum_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./curriculum/curriculum.component */ "./src/app/curriculum/curriculum.component.ts");





const routes = [
    { path: 'HaroldFlores', component: _curriculum_curriculum_component__WEBPACK_IMPORTED_MODULE_2__["CurriculumComponent"] },
    { path: '**', component: _curriculum_curriculum_component__WEBPACK_IMPORTED_MODULE_2__["CurriculumComponent"] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../environments/environment.prod */ "./src/environments/environment.prod.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class AppComponent {
    constructor() {
        this.title = 'resume';
        this.environment = _environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__["environment"];
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 5, vars: 1, consts: [["id", "contenedor-total"], [1, "bg-video"], ["autoplay", "", "muted", "", "loop", "", 1, "bg-video__content"], ["type", "video/mp4", 3, "src"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "video", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "source", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "", ctx.environment.url, "/assets/videos/back.mp4", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: [".bg-video[_ngcontent-%COMP%]{\n    position: fixed;\n    top: 0;\n    left:0;\n    height: 100%;\n    width:100%;\n    z-index: -1;\n    opacity: 2;\n}\n.bg-video__content[_ngcontent-%COMP%]{\n    width: 100%;\n    height: 100%; \n    object-fit: fill;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2YsTUFBTTtJQUNOLE1BQU07SUFDTixZQUFZO0lBQ1osVUFBVTtJQUNWLFdBQVc7SUFDWCxVQUFVO0FBQ2Q7QUFDQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmctdmlkZW97XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OjA7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOjEwMCU7XG4gICAgei1pbmRleDogLTE7XG4gICAgb3BhY2l0eTogMjtcbn1cbi5iZy12aWRlb19fY29udGVudHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7IFxuICAgIG9iamVjdC1maXQ6IGZpbGw7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _curriculum_curriculum_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./curriculum/curriculum.component */ "./src/app/curriculum/curriculum.component.ts");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @scullyio/ng-lib */ "./node_modules/@scullyio/ng-lib/__ivy_ngcc__/fesm2015/scullyio-ng-lib.js");










class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
            _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_8__["ScullyLibModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _curriculum_curriculum_component__WEBPACK_IMPORTED_MODULE_5__["CurriculumComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
        _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_8__["ScullyLibModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _curriculum_curriculum_component__WEBPACK_IMPORTED_MODULE_5__["CurriculumComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                    _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_8__["ScullyLibModule"],
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/curriculum/curriculum.component.ts":
/*!****************************************************!*\
  !*** ./src/app/curriculum/curriculum.component.ts ***!
  \****************************************************/
/*! exports provided: CurriculumComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurriculumComponent", function() { return CurriculumComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _services_git_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../services/git.service */ "./src/app/services/git.service.ts");
/* harmony import */ var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../environments/environment.prod */ "./src/environments/environment.prod.ts");
/* harmony import */ var _services_aboutme_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../services/aboutme.service */ "./src/app/services/aboutme.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");










function CurriculumComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const harold_r3 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](harold_r3.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](harold_r3.bio);
} }
function CurriculumComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const parragraph_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](parragraph_r4.value);
} }
const _c0 = function (a0) { return { "background-image": a0, "background-size": "cover" }; };
function CurriculumComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const experience_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, "url(" + experience_r5.img + ")"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](experience_r5.enterprise);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", experience_r5.content, " ");
} }
class CurriculumComponent {
    constructor(_data, _git, _about) {
        this._data = _data;
        this._git = _git;
        this._about = _about;
        this.environment = _environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["environment"];
        this.data = this._data;
        this.about = this._about;
        console.log(this.about.aboutMe);
    }
    ngOnInit() {
    }
}
CurriculumComponent.ɵfac = function CurriculumComponent_Factory(t) { return new (t || CurriculumComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_git_service__WEBPACK_IMPORTED_MODULE_2__["GitService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_aboutme_service__WEBPACK_IMPORTED_MODULE_4__["AboutmeService"])); };
CurriculumComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CurriculumComponent, selectors: [["app-curriculum"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"], _services_git_service__WEBPACK_IMPORTED_MODULE_2__["GitService"]])], decls: 84, vars: 12, consts: [[1, "contenedor"], [1, "header"], ["class", "img-github hijo", 4, "ngIf"], [1, "skill"], [4, "ngFor", "ngForOf"], [1, "image-popup-container"], ["alt", "", "srcset", "", 1, "image-popup", 3, "src"], [1, "experience"], ["href", "https://ieeexplore.ieee.org/document/8940385", "target", "_blank", 1, "projects"], ["href", "https://haroldmaster.github.io/borradore4f/", "target", "_blank", 1, "projects"], ["href", "https://haroldmaster.github.io/Tutorial-Git/", "target", "_blank", 1, "projects"], ["href", "https://haroldmaster.github.io/Tutorial-Github/", "target", "_blank", 1, "projects"], ["href", "https://haroldmaster.github.io/Tips-y-metodos-utiles-de-Javascript/", "target", "_blank", 1, "projects"], ["href", "https://haroldmaster.github.io/calculator/", "target", "_blank", 1, "projects"], ["href", "https://haroldmaster.github.io/verifyCode/", "target", "_blank", 1, "projects"], ["href", "https://haroldmaster.github.io/formulario-solo-con-DOM-validado/", "target", "_blank", 1, "projects"], ["href", "https://haroldmaster.github.io/fetch/", "target", "_blank", 1, "projects"], ["href", "https://haroldmaster.github.io/prank-propuesta/", "target", "_blank", 1, "projects"], ["href", "https://haroldmaster.github.io/sass-and-css/", "target", "_blank", 1, "projects"], ["href", "https://haroldmaster.github.io/animaciones-eventos-jquery/", "target", "_blank", 1, "projects"], ["id", "popup1", 1, "overlay"], [1, "popup"], [1, "meet-me"], [1, "close", 3, "href"], [1, "content"], [1, "img-github", "hijo"], [1, "nombre"], ["href", "https://github.com/HaroldMaster", "target", "_blank"], [1, "fab", "fa-github"], ["href", "mailto:bhflores1994@gmail.com", "target", "_blank"], [1, "fas", "fa-envelope-square"], ["href", "https://api.whatsapp.com/send?phone=593999981332", "target", "_blank"], [1, "fab", "fa-whatsapp"], [1, "card"], ["mat-card-avatar", "", 1, "mat-card-avatar-white", 3, "ngStyle"]], template: function CurriculumComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CurriculumComponent_div_2_Template, 11, 2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "ABOUT ME");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, CurriculumComponent_div_9_Template, 3, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "keyvalue");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "EXPERIENCE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, CurriculumComponent_div_19_Template, 11, 5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "LANGUAGES");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "English - B1 Certificate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "HIGHLIGHTS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " Publication of a scientific article in the IEEE database with the topic: Serious Game, Gamified Applications, Educational Software: A Comparative Study (10.1109 / ICI2ST.2019.00015) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "https://ieeexplore.ieee.org/document/8940385");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "PROJECTS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Tourism Operator Template with Sass");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Git Tutorial");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Github Tutorial");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Javascript Methods");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Calculator (Using Jest and Storybooks)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Code Verificator (Using Jest (TDD), Storybooks and Figma Template)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "DOM Formulary");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Fetch Use");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Prank");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Sass");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "JQuery");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "h2", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Meet me");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Hi, I\u2019m Harold, I\u2019m a Systems Engineer who likes frontend development, I have estudied to develop Angular apps with responsive designs that could work across all browsers with interfaces that are usable and pleasant for people.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "I am a person who likes learn new tecnologies and that is why i have been studied some courses in udemy like Typescript, Sass and Css, Angular, Javascript and more. Also I like help other people and that is why I have been doing tutorials about several things in github using github pages.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "My professional life started building websites for small businesses with Wordpress where I learned several complementary skills such as Digital Marketing, SEO and others, also I have worked with Databases, Infraestructure and recently I was working doing banking software using Javascript, Java and SQL Databases.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Right now, I\u2019m excited about front end web development and I hope becoming better each day with new challenges and goals to meet.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 8, ctx._git.getUser));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 10, ctx.about.aboutMe));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "", ctx.environment.url, "/assets/img/angular.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "", ctx.environment.url, "/assets/img/css.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "", ctx.environment.url, "/assets/img/sass.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "", ctx.environment.url, "/assets/img/typescript.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.data.experience);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "", ctx.environment.url, "/#", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardAvatar"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgStyle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardContent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["KeyValuePipe"]], styles: ["[_nghost-%COMP%]{\n    height: 100%;\n}\nh1[_ngcontent-%COMP%]{\n    font-size: 40px;\n}\n.nombre[_ngcontent-%COMP%] {\n    font-weight: 500;\n}\n.contenedor[_ngcontent-%COMP%]{\n    margin: 25px auto;\n    background-color: white;\n    width: 75%;\n    height: auto;\n    border-radius: 10px;\n    color: black;\n    overflow: hidden;\n}\n.header[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n}\n.hijo[_ngcontent-%COMP%] {\n    margin: 20px;\n    overflow: hidden;\n    text-align: center;\n}\n.skill[_ngcontent-%COMP%] {\n    border-right: 1px solid grey;\n    justify-content: start;\n    width: 50%;\n    padding: 10px;\n    overflow: hidden;\n}\n.experience[_ngcontent-%COMP%] {\n    width: 50%;\n    padding: 10px;\n    overflow: hidden;\n    overflow-wrap: break-word;\n}\nimg[_ngcontent-%COMP%] {\n    width: 100%;\n    margin: auto;\n    object-fit: contain;\n    margin-bottom: 15px;\n}\n.card[_ngcontent-%COMP%]{\n    border: 1px solid grey;\n}\n.avatar-harold[_ngcontent-%COMP%]{\n    border-radius: 100%;\n    width: 30%;\n}\n.avatar-harold[_ngcontent-%COMP%]:hover{\n    position: relative;\n    transform: rotateY(360deg);\n    transition: transform 3s ease-out;\n      \n}\ni[_ngcontent-%COMP%]{\n    transition: all .3s;\n    font-size:40px;\n    padding: 10px;\n    display: inline-block;\n    color: black;\n    cursor: pointer;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n            user-select: none;\n}\ni[_ngcontent-%COMP%]:hover, i[_ngcontent-%COMP%]:active{\n    transform: translateY(-10px) scale(1.3);\n}\na[_ngcontent-%COMP%]{\n    text-decoration: none;\n}\n.img-content[_ngcontent-%COMP%]{\n    max-height: 200px;\n}\n.card[_ngcontent-%COMP%]:hover{\n    transform: translateY(-8px);\n    box-shadow: 5px 10px #0b6096;\n}\n.mat-card-avatar[_ngcontent-%COMP%]{\n    position: relative;\n    display: inline-block;\n    -webkit-backface-visibility: hidden;\n            backface-visibility: hidden;\n}\n.mat-card-avatar[_ngcontent-%COMP%]:hover{\n    transform: translateY(0px);\n    box-shadow: 0 1rem 2rem rgba(black, 0.2);\n}\n.mat-card-avatar[_ngcontent-%COMP%]:hover::after{\n    transform: scale(1.4);\n    opacity: 0;\n}\n.mat-card-avatar[_ngcontent-%COMP%]::after {\n    content: \"\";\n    width: 100%;\n    height: 100%;\n    display: inline-block;\n    border-radius: 10rem;\n    position: absolute;\n    top: 0px;\n    right: 0px;\n    z-index: -1;\n    transition: all 0.5s;\n  }\n.mat-card-avatar-white[_ngcontent-%COMP%]{\n    background-color: white;\n}\n.mat-card-avatar-white[_ngcontent-%COMP%]::after{\n    background-color: #0b6096;\n}\n.overlay[_ngcontent-%COMP%] {\n    position: fixed;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    background: rgba(0, 0, 0, 0.7);\n    transition: opacity 500ms;\n    visibility: hidden;\n    opacity: 0;\n  }\n.overlay[_ngcontent-%COMP%]:target {\n    visibility: visible;\n    opacity: 1;\n  }\n.popup[_ngcontent-%COMP%] {\n    margin: 70px auto;\n    padding: 20px;\n    background: #fff;\n    border-radius: 5px;\n    width: 50%;\n    position: relative;\n  }\n.popup[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    margin-top: 0;\n    color: #333;\n    font-family: Tahoma, Arial, sans-serif;\n  }\n.popup[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 20px;\n    right: 30px;\n    transition: all 200ms;\n    font-size: 30px;\n    font-weight: bold;\n    text-decoration: none;\n    color: #333;\n  }\n.popup[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%]:hover {\n    color: #0b6096;\n  }\n.popup[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n    max-height: 30%;\n    overflow: auto;\n  }\n.image-popup-container[_ngcontent-%COMP%]{\n      display: flex;\n      flex-direction: column;\n      margin: 40px;\n  }\n.image-popup[_ngcontent-%COMP%]{\n      padding-top: 30px;\n      max-height: 100px;\n      max-width: 100px;\n  }\n.about-me[_ngcontent-%COMP%]{\n      border: 2px solid 45494C;\n      appearance: button;\n      -moz-appearance: button;\n      -webkit-appearance: button;\n      border-radius: 30px;\n      font-size: 17px;\n      margin-bottom: 5px;\n      background: #45494C;\n      color:white;\n      cursor: pointer;\n      padding: 10px;\n      font-weight: 500;\n  }\n.about-me[_ngcontent-%COMP%]:visited{\n      color: white;\n  }\n.about-me[_ngcontent-%COMP%]:active{\n      transform: translateY(1px);\n  }\n.about-me[_ngcontent-%COMP%]:hover{\n      font-size: 18px;\n  }\na[_ngcontent-%COMP%]{\n      color: #0b6096;\n      cursor: pointer;\n  }\na[_ngcontent-%COMP%]:visited{\n      color: #0b6096;\n  }\n.meet-me[_ngcontent-%COMP%]{\n      font-weight: bold;\n  }\n.projects[_ngcontent-%COMP%]:hover{\n    font-size: 17px;\n    -webkit-text-decoration: underline #0b6096;\n            text-decoration: underline #0b6096;\n  }\n@media only screen and (max-width: 600px) {\n    .header[_ngcontent-%COMP%]{\n        display: block;\n    }\n    .skill[_ngcontent-%COMP%], .experience[_ngcontent-%COMP%]{\n        width: 92%;\n    }\n    .skill[_ngcontent-%COMP%]{\n        border: none;\n    }\n    .card[_ngcontent-%COMP%]:hover{\n        box-shadow: 5px 10px #45494C;\n    }\n    .mat-card-avatar-white[_ngcontent-%COMP%]::after{\n        background-color: #45494C;\n    }\n    .image-popup-container[_ngcontent-%COMP%]{\n        display: flex;\n        flex-direction: column;\n    }\n    i[_ngcontent-%COMP%]:hover, i[_ngcontent-%COMP%]:active{\n        transform: none;\n        -webkit-user-select: none;\n           -moz-user-select: none;\n                user-select: none;\n    } \n\n}\n@media only screen and (max-width: 1000px) {\n    .popup[_ngcontent-%COMP%]{\n        width: 80%;\n    }\n    #popup1[_ngcontent-%COMP%]{\n        overflow: scroll;\n    }\n    \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3VycmljdWx1bS9jdXJyaWN1bHVtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQix1QkFBdUI7SUFDdkIsVUFBVTtJQUNWLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLDRCQUE0QjtJQUM1QixzQkFBc0I7SUFDdEIsVUFBVTtJQUNWLGFBQWE7SUFDYixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLFVBQVU7SUFDVixhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLHlCQUF5QjtBQUM3QjtBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQixVQUFVO0FBQ2Q7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQiwwQkFBMEI7SUFDMUIsaUNBQWlDOztBQUVyQztBQUNBO0lBQ0ksbUJBQW1CO0lBQ25CLGNBQWM7SUFDZCxhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLFlBQVk7SUFDWixlQUFlO0lBQ2YseUJBQWlCO09BQWpCLHNCQUFpQjtZQUFqQixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLHVDQUF1QztBQUMzQztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSxpQkFBaUI7QUFDckI7QUFFQTtJQUNJLDJCQUEyQjtJQUMzQiw0QkFBNEI7QUFDaEM7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsbUNBQTJCO1lBQTNCLDJCQUEyQjtBQUMvQjtBQUNBO0lBQ0ksMEJBQTBCO0lBQzFCLHdDQUF3QztBQUM1QztBQUNBO0lBQ0kscUJBQXFCO0lBQ3JCLFVBQVU7QUFDZDtBQUVBO0lBQ0ksV0FBVztJQUNYLFdBQVc7SUFDWCxZQUFZO0lBQ1oscUJBQXFCO0lBQ3JCLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFVBQVU7SUFDVixXQUFXO0lBQ1gsb0JBQW9CO0VBQ3RCO0FBQ0Y7SUFDSSx1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLHlCQUF5QjtBQUM3QjtBQUVBO0lBQ0ksZUFBZTtJQUNmLE1BQU07SUFDTixTQUFTO0lBQ1QsT0FBTztJQUNQLFFBQVE7SUFDUiw4QkFBOEI7SUFDOUIseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixVQUFVO0VBQ1o7QUFDQTtJQUNFLG1CQUFtQjtJQUNuQixVQUFVO0VBQ1o7QUFFQTtJQUNFLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1Ysa0JBQWtCO0VBQ3BCO0FBRUE7SUFDRSxhQUFhO0lBQ2IsV0FBVztJQUNYLHNDQUFzQztFQUN4QztBQUNBO0lBQ0Usa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxXQUFXO0lBQ1gscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixpQkFBaUI7SUFDakIscUJBQXFCO0lBQ3JCLFdBQVc7RUFDYjtBQUNBO0lBQ0UsY0FBYztFQUNoQjtBQUNBO0lBQ0UsZUFBZTtJQUNmLGNBQWM7RUFDaEI7QUFFQTtNQUNJLGFBQWE7TUFDYixzQkFBc0I7TUFDdEIsWUFBWTtFQUNoQjtBQUNBO01BQ0ksaUJBQWlCO01BQ2pCLGlCQUFpQjtNQUNqQixnQkFBZ0I7RUFDcEI7QUFDQTtNQUNJLHdCQUF3QjtNQUN4QixrQkFBa0I7TUFDbEIsdUJBQXVCO01BQ3ZCLDBCQUEwQjtNQUMxQixtQkFBbUI7TUFDbkIsZUFBZTtNQUNmLGtCQUFrQjtNQUNsQixtQkFBbUI7TUFDbkIsV0FBVztNQUNYLGVBQWU7TUFDZixhQUFhO01BQ2IsZ0JBQWdCO0VBQ3BCO0FBQ0E7TUFDSSxZQUFZO0VBQ2hCO0FBQ0E7TUFDSSwwQkFBMEI7RUFDOUI7QUFDQTtNQUNJLGVBQWU7RUFDbkI7QUFFQTtNQUNJLGNBQWM7TUFDZCxlQUFlO0VBQ25CO0FBRUE7TUFDSSxjQUFjO0VBQ2xCO0FBQ0E7TUFDSSxpQkFBaUI7RUFDckI7QUFDQTtJQUNFLGVBQWU7SUFDZiwwQ0FBa0M7WUFBbEMsa0NBQWtDO0VBQ3BDO0FBQ0Y7SUFDSTtRQUNJLGNBQWM7SUFDbEI7SUFDQTtRQUNJLFVBQVU7SUFDZDtJQUNBO1FBQ0ksWUFBWTtJQUNoQjtJQUNBO1FBQ0ksNEJBQTRCO0lBQ2hDO0lBQ0E7UUFDSSx5QkFBeUI7SUFDN0I7SUFDQTtRQUNJLGFBQWE7UUFDYixzQkFBc0I7SUFDMUI7SUFDQTtRQUNJLGVBQWU7UUFDZix5QkFBaUI7V0FBakIsc0JBQWlCO2dCQUFqQixpQkFBaUI7SUFDckI7O0FBRUo7QUFDQTtJQUNJO1FBQ0ksVUFBVTtJQUNkO0lBQ0E7UUFDSSxnQkFBZ0I7SUFDcEI7O0FBRUoiLCJmaWxlIjoic3JjL2FwcC9jdXJyaWN1bHVtL2N1cnJpY3VsdW0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0e1xuICAgIGhlaWdodDogMTAwJTtcbn1cbmgxe1xuICAgIGZvbnQtc2l6ZTogNDBweDtcbn1cbi5ub21icmUge1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG4uY29udGVuZWRvcntcbiAgICBtYXJnaW46IDI1cHggYXV0bztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICB3aWR0aDogNzUlO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLmhlYWRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5oaWpvIHtcbiAgICBtYXJnaW46IDIwcHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uc2tpbGwge1xuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIGdyZXk7XG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcbiAgICB3aWR0aDogNTAlO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5leHBlcmllbmNlIHtcbiAgICB3aWR0aDogNTAlO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xufVxuXG5pbWcge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBvYmplY3QtZml0OiBjb250YWluO1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG4uY2FyZHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xufVxuLmF2YXRhci1oYXJvbGR7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICB3aWR0aDogMzAlO1xufVxuLmF2YXRhci1oYXJvbGQ6aG92ZXJ7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRyYW5zZm9ybTogcm90YXRlWSgzNjBkZWcpO1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAzcyBlYXNlLW91dDtcbiAgICAgIFxufVxuaXtcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjNzO1xuICAgIGZvbnQtc2l6ZTo0MHB4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG5pOmhvdmVyLCBpOmFjdGl2ZXtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwcHgpIHNjYWxlKDEuMyk7XG59IFxuXG5he1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbi5pbWctY29udGVudHtcbiAgICBtYXgtaGVpZ2h0OiAyMDBweDtcbn1cblxuLmNhcmQ6aG92ZXJ7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC04cHgpO1xuICAgIGJveC1zaGFkb3c6IDVweCAxMHB4ICMwYjYwOTY7XG59XG5cbi5tYXQtY2FyZC1hdmF0YXJ7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG59XG4ubWF0LWNhcmQtYXZhdGFyOmhvdmVye1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xuICAgIGJveC1zaGFkb3c6IDAgMXJlbSAycmVtIHJnYmEoYmxhY2ssIDAuMik7XG59XG4ubWF0LWNhcmQtYXZhdGFyOmhvdmVyOjphZnRlcntcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuNCk7XG4gICAgb3BhY2l0eTogMDtcbn1cblxuLm1hdC1jYXJkLWF2YXRhcjo6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBib3JkZXItcmFkaXVzOiAxMHJlbTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwcHg7XG4gICAgcmlnaHQ6IDBweDtcbiAgICB6LWluZGV4OiAtMTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cztcbiAgfVxuLm1hdC1jYXJkLWF2YXRhci13aGl0ZXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cbi5tYXQtY2FyZC1hdmF0YXItd2hpdGU6OmFmdGVye1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwYjYwOTY7XG59XG5cbi5vdmVybGF5IHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC43KTtcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDUwMG1zO1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIC5vdmVybGF5OnRhcmdldCB7XG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG4gIFxuICAucG9wdXAge1xuICAgIG1hcmdpbjogNzBweCBhdXRvO1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cbiAgXG4gIC5wb3B1cCBoMiB7XG4gICAgbWFyZ2luLXRvcDogMDtcbiAgICBjb2xvcjogIzMzMztcbiAgICBmb250LWZhbWlseTogVGFob21hLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgfVxuICAucG9wdXAgLmNsb3NlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAyMHB4O1xuICAgIHJpZ2h0OiAzMHB4O1xuICAgIHRyYW5zaXRpb246IGFsbCAyMDBtcztcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGNvbG9yOiAjMzMzO1xuICB9XG4gIC5wb3B1cCAuY2xvc2U6aG92ZXIge1xuICAgIGNvbG9yOiAjMGI2MDk2O1xuICB9XG4gIC5wb3B1cCAuY29udGVudCB7XG4gICAgbWF4LWhlaWdodDogMzAlO1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICB9XG4gIFxuICAuaW1hZ2UtcG9wdXAtY29udGFpbmVye1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBtYXJnaW46IDQwcHg7XG4gIH1cbiAgLmltYWdlLXBvcHVwe1xuICAgICAgcGFkZGluZy10b3A6IDMwcHg7XG4gICAgICBtYXgtaGVpZ2h0OiAxMDBweDtcbiAgICAgIG1heC13aWR0aDogMTAwcHg7XG4gIH1cbiAgLmFib3V0LW1le1xuICAgICAgYm9yZGVyOiAycHggc29saWQgNDU0OTRDO1xuICAgICAgYXBwZWFyYW5jZTogYnV0dG9uO1xuICAgICAgLW1vei1hcHBlYXJhbmNlOiBidXR0b247XG4gICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gICAgICBmb250LXNpemU6IDE3cHg7XG4gICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgICBiYWNrZ3JvdW5kOiAjNDU0OTRDO1xuICAgICAgY29sb3I6d2hpdGU7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgfVxuICAuYWJvdXQtbWU6dmlzaXRlZHtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxuICAuYWJvdXQtbWU6YWN0aXZle1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDFweCk7XG4gIH1cbiAgLmFib3V0LW1lOmhvdmVye1xuICAgICAgZm9udC1zaXplOiAxOHB4O1xuICB9XG4gIFxuICBhe1xuICAgICAgY29sb3I6ICMwYjYwOTY7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cblxuICBhOnZpc2l0ZWR7XG4gICAgICBjb2xvcjogIzBiNjA5NjtcbiAgfVxuICAubWVldC1tZXtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG4gIC5wcm9qZWN0czpob3ZlcntcbiAgICBmb250LXNpemU6IDE3cHg7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgIzBiNjA5NjtcbiAgfVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgIC5oZWFkZXJ7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cbiAgICAuc2tpbGwsIC5leHBlcmllbmNle1xuICAgICAgICB3aWR0aDogOTIlO1xuICAgIH1cbiAgICAuc2tpbGx7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICB9XG4gICAgLmNhcmQ6aG92ZXJ7XG4gICAgICAgIGJveC1zaGFkb3c6IDVweCAxMHB4ICM0NTQ5NEM7XG4gICAgfVxuICAgIC5tYXQtY2FyZC1hdmF0YXItd2hpdGU6OmFmdGVye1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDU0OTRDO1xuICAgIH1cbiAgICAuaW1hZ2UtcG9wdXAtY29udGFpbmVye1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIH1cbiAgICBpOmhvdmVyLGk6YWN0aXZle1xuICAgICAgICB0cmFuc2Zvcm06IG5vbmU7XG4gICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgIH0gXG5cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAwMHB4KSB7XG4gICAgLnBvcHVwe1xuICAgICAgICB3aWR0aDogODAlO1xuICAgIH1cbiAgICAjcG9wdXAxe1xuICAgICAgICBvdmVyZmxvdzogc2Nyb2xsO1xuICAgIH1cbiAgICBcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CurriculumComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-curriculum',
                templateUrl: './curriculum.component.html',
                styleUrls: ['./curriculum.component.css'],
                providers: [_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"], _services_git_service__WEBPACK_IMPORTED_MODULE_2__["GitService"]]
            }]
    }], function () { return [{ type: _services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"] }, { type: _services_git_service__WEBPACK_IMPORTED_MODULE_2__["GitService"] }, { type: _services_aboutme_service__WEBPACK_IMPORTED_MODULE_4__["AboutmeService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/aboutme.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/aboutme.service.ts ***!
  \*********************************************/
/*! exports provided: AboutmeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutmeService", function() { return AboutmeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class AboutmeService {
    constructor() {
        this.aboutMe = {
            parragraph1: 'Hi, I’m Harold, I’m a Systems Engineer who likes frontend development, I have estudied to develop Angular apps with responsive designs that could work across all browsers with interfaces that are usable and pleasant for people.',
            parragraph2: 'I am a person who likes learn new tecnologies and that is why i have been studied some courses in udemy like Typescript, Sass and Css, Angular, Javascript and more. Also I like help other people and that is why I have been doing tutorials about several things in github using github pages.',
            parragraph3: 'My professional life as a developer started building websites for small businesses with Wordpress where I learned several complementary skills such as Digital Marketing, SEO and others, also I have worked with Databases, Infraestructure and recently I was working doing banking software using Javascript, Java and SQL Databases.',
            parragraph4: ' Right now, I’m excited about front end web development and I hope becoming better each day with new challenges and goals to meet.'
        };
    }
}
AboutmeService.ɵfac = function AboutmeService_Factory(t) { return new (t || AboutmeService)(); };
AboutmeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AboutmeService, factory: AboutmeService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutmeService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/services/data.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/data.service.ts ***!
  \******************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment.prod */ "./src/environments/environment.prod.ts");



class DataService {
    constructor() {
        this.skills = [
            {
                name: "Programming Languages",
                icono: src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__["environment"].url + "/assets/img/algoritmo.png",
                img: src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__["environment"].url + "/assets/img/programming.png",
                content: "Knowledge of Java, C #, JavaScript (Node, React, React Native with Expo, Angular, Typescript), HTML, CSS, Sass (BEM)"
            },
            {
                name: "Databases",
                icono: src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__["environment"].url + "/assets/img/db-icon.png",
                img: src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__["environment"].url + "/assets/img/db-img.png",
                content: "Knowledge of SQL Server, PostgreSQL, Oracle (PL/SQL), MongoDB, Business Intelligence (Pentaho)."
            },
            {
                name: "Repositories",
                icono: src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__["environment"].url + "/assets/img/repo-icon.png",
                img: src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__["environment"].url + "/assets/img/repo-img.png",
                content: "Knowledge of Git, Github, Bitbucket. Link: https://github.com/HaroldMaster"
            },
            {
                name: "Courses and Other Skills",
                icono: src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__["environment"].url + "/assets/img/other-icon.png",
                img: src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__["environment"].url + "/assets/img/other-img.png",
                content: "I have had the oportunity to study Udemy courses as Advanced Sass and Css, Typescript, Angular, JQuery, Javascript, React. Also, because of my work experience, I have managed to obtain knowledge of computer manteinance, Wordpress, SEO, Digital Marketing, Networks, Linux, BPMN, etc."
            }
        ];
        this.experience = [
            {
                enterprise: "Grupo TVCable",
                img: src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__["environment"].url + "/assets/img/tvcable.jfif",
                content: "Intern at Grupo TVCable company, in the Systems area.  In this job, I carried out quality control activities and support in the development of new company plans handling PL / SQL. Also I use SCRUM methodology in this company"
            },
            {
                enterprise: "Imprenta Mariscal",
                img: src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__["environment"].url + "/assets/img/imprenta.png",
                content: "Intern at Imprenta Mariscal industry, in the area of Systems and Databases. I carried out activities such as network management, computer and printer maintenance, user support, backup management, database management, among others."
            },
            {
                enterprise: "PACO",
                img: src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__["environment"].url + "/assets/img/paco.png",
                content: "Developer analyst at PACO comercial company. I managed the billing system developed in Java with PostgreSQL database, also handling stored procedures in the SQL Server database."
            },
            {
                enterprise: "CLEARMINDS",
                img: src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__["environment"].url + "/assets/img/clearminds.jfif",
                content: "Software Developer at Clearminds company. I worked in banking software consulting services where I used Scrum Methodology and tools such as Angular, Javascript, Java, Sql Server as well as the company's own tools."
            }
        ];
    }
}
DataService.ɵfac = function DataService_Factory(t) { return new (t || DataService)(); };
DataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DataService, factory: DataService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/services/git.service.ts":
/*!*****************************************!*\
  !*** ./src/app/services/git.service.ts ***!
  \*****************************************/
/*! exports provided: GitService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GitService", function() { return GitService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



class GitService {
    constructor(_http) {
        this._http = _http;
        this.url = "https://api.github.com/users/HaroldMaster";
        this.getUser = this._http.get(this.url);
    }
}
GitService.ɵfac = function GitService_Factory(t) { return new (t || GitService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
GitService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: GitService, factory: GitService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GitService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/environments/environment.prod.ts":
/*!**********************************************!*\
  !*** ./src/environments/environment.prod.ts ***!
  \**********************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
const environment = {
    production: true,
    url: "curriculum"
};


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
const environment = {
    production: false,
    url: ""
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/runner/work/curriculum/curriculum/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map