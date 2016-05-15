"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('angular2/core');
var Popup = (function () {
    function Popup() {
        console.log('Directive bound');
    }
    Popup = __decorate([
        core_1.Directive({
            selector: '[popup]'
        })
    ], Popup);
    return Popup;
}());
var HostSampleApp1 = (function () {
    function HostSampleApp1() {
    }
    HostSampleApp1 = __decorate([
        core_1.Component({
            selector: 'host-sample-app',
            directives: [Popup],
            template: "\n  <div class=\"ui message\" popup>\n    <div class=\"header\">\n      Learning Directives\n    </div>\n\n    <p>\n      This should use our Popup diretive\n    </p>\n  </div>\n  "
        })
    ], HostSampleApp1);
    return HostSampleApp1;
}());
exports.HostSampleApp1 = HostSampleApp1;
//# sourceMappingURL=host_01.js.map