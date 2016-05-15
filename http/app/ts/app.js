"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('angular2/core');
var browser_1 = require('angular2/platform/browser');
var http_1 = require('angular2/http');
var SimpleHTTPComponent_1 = require('components/SimpleHTTPComponent');
var MoreHTTPRequests_1 = require('components/MoreHTTPRequests');
var YouTubeSearchComponent_1 = require('components/YouTubeSearchComponent');
var YouTubeSearchComponent_2 = require('components/YouTubeSearchComponent');
require('css/styles.scss');
var HttpApp = (function () {
    function HttpApp() {
    }
    HttpApp = __decorate([
        core_1.Component({
            selector: 'http-app',
            directives: [
                SimpleHTTPComponent_1.SimpleHTTPComponent,
                MoreHTTPRequests_1.MoreHTTPRequests,
                YouTubeSearchComponent_1.YouTubeSearchComponent
            ],
            template: "\n  <div class=\"container\">\n    <simple-http></simple-http>\n    <hr/>\n    <more-http></more-http>\n    <hr/>\n    <youtube-search></youtube-search>\n  </div>\n  "
        })
    ], HttpApp);
    return HttpApp;
}());
browser_1.bootstrap(HttpApp, [
    http_1.HTTP_PROVIDERS,
    YouTubeSearchComponent_2.youTubeServiceInjectables
]);
//# sourceMappingURL=app.js.map