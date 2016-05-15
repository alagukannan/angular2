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
var HomeComponent_1 = require('components/HomeComponent');
var AboutComponent_1 = require('components/AboutComponent');
var ContactComponent_1 = require('components/ContactComponent');
require('css/styles.scss');
var RoutesDemoApp = (function () {
    function RoutesDemoApp() {
    }
    RoutesDemoApp = __decorate([
        core_1.Component({
            selector: 'router-app',
            directives: [router_1.ROUTER_DIRECTIVES],
            template: "\n  <div>\n    <nav>\n      <a>Navigation:</a>\n      <ul>\n        <li><a [routerLink]=\"['/Home']\">Home</a></li>\n        <li><a [routerLink]=\"['/About']\">About</a></li>\n        <li><a [routerLink]=\"['/Contact']\">Contact us</a></li>\n      </ul>\n    </nav>\n\n    <router-outlet></router-outlet>\n  </div>\n  "
        }),
        router_1.RouteConfig([
            { path: '/', name: 'root', redirectTo: ['/Home'] },
            { path: '/home', name: 'Home', component: HomeComponent_1.HomeComponent },
            { path: '/about', name: 'About', component: AboutComponent_1.AboutComponent },
            { path: '/contact', name: 'Contact', component: ContactComponent_1.ContactComponent },
            { path: '/contactus', name: 'ContactUs', redirectTo: ['/Contact'] },
        ])
    ], RoutesDemoApp);
    return RoutesDemoApp;
}());
browser_1.bootstrap(RoutesDemoApp, [
    router_1.ROUTER_PROVIDERS,
    core_1.provide(common_1.LocationStrategy, { useClass: common_1.HashLocationStrategy })
]);
//# sourceMappingURL=app.js.map