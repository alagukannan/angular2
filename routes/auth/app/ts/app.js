"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('angular2/core');
var browser_1 = require('angular2/platform/browser');
var router_1 = require('angular2/router');
var common_1 = require('angular2/platform/common');
var LoginComponent_1 = require('components/LoginComponent');
var HomeComponent_1 = require('components/HomeComponent');
var AboutComponent_1 = require('components/AboutComponent');
var ContactComponent_1 = require('components/ContactComponent');
var ProtectedComponent_1 = require('components/ProtectedComponent');
var AuthService_1 = require('services/AuthService');
require('css/styles.scss');
var RoutesDemoApp = (function () {
    function RoutesDemoApp(router) {
        this.router = router;
    }
    RoutesDemoApp = __decorate([
        core_1.Component({
            selector: 'router-app',
            directives: [router_1.ROUTER_DIRECTIVES, LoginComponent_1.LoginComponent],
            template: "\n  <div class=\"page-header\">\n    <div class=\"container\">\n      <h1>Router Sample</h1>\n      <div class=\"navLinks\">\n        <a [routerLink]=\"['/Home']\">Home</a>\n        <a [routerLink]=\"['/About']\">About</a>\n        <a [routerLink]=\"['/Contact']\">Contact us</a>\n        <a [routerLink]=\"['/Protected']\">Protected</a>\n      </div>\n    </div>\n  </div>\n\n  <div id=\"content\">\n    <div class=\"container\">\n\n      <login></login>\n\n      <hr>\n\n      <router-outlet></router-outlet>\n    </div>\n  </div>\n  "
        }),
        router_1.RouteConfig([
            { path: '/', name: 'root', redirectTo: ['Home'] },
            { path: '/home', name: 'Home', component: HomeComponent_1.HomeComponent },
            { path: '/about', name: 'About', component: AboutComponent_1.AboutComponent },
            { path: '/contact', name: 'Contact', component: ContactComponent_1.ContactComponent },
            { path: '/protected', name: 'Protected', component: ProtectedComponent_1.ProtectedComponent },
        ])
    ], RoutesDemoApp);
    return RoutesDemoApp;
}());
browser_1.bootstrap(RoutesDemoApp, [
    router_1.ROUTER_PROVIDERS,
    AuthService_1.AUTH_PROVIDERS,
    core_1.provide(common_1.LocationStrategy, { useClass: common_1.HashLocationStrategy })
]);
//# sourceMappingURL=app.js.map