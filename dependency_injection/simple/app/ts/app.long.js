"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require('angular2/core');
var browser_1 = require('angular2/platform/browser');
var ApiService_1 = require('services/ApiService');
require('css/styles.scss');
require('images/ng-book-2-minibook.png');
var DiSampleApp = (function () {
    function DiSampleApp(apiService) {
        this.apiService = apiService;
    }
    DiSampleApp.prototype.invokeApi = function () {
        this.apiService.get();
    };
    DiSampleApp = __decorate([
        core_1.Component({
            selector: 'di-sample-app',
            template: "\n  <button (click)=\"invokeApi()\">Invoke API</button>\n  "
        }),
        __param(0, core_1.Inject(ApiService_1.ApiService))
    ], DiSampleApp);
    return DiSampleApp;
}());
browser_1.bootstrap(DiSampleApp, [
    core_1.provide(ApiService_1.ApiService, { useClass: ApiService_1.ApiService })
])
    .catch(function (err) { return console.error(err); });
//# sourceMappingURL=app.long.js.map