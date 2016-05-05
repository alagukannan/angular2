"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('angular2/core');
var Popup = (function () {
    function Popup(_elementRef) {
        console.log(_elementRef);
    }
    Popup.prototype.displayMessage = function () {
        alert(this.message);
    };
    Popup = __decorate([
        core_1.Directive({
            selector: '[popup]',
            inputs: ['message'],
            host: {
                '(click)': 'displayMessage()'
            }
        })
    ], Popup);
    return Popup;
}());
var HostSampleApp3 = (function () {
    function HostSampleApp3() {
    }
    HostSampleApp3 = __decorate([
        core_1.Component({
            selector: 'host-sample-app',
            directives: [Popup],
            template: "\n  <div class=\"ui message\" popup\n       message=\"Clicked the message\">\n    <div class=\"header\">\n      Learning Directives\n    </div>\n\n    <p>\n      This should use our Popup diretive\n    </p>\n  </div>\n\n  <i class=\"alarm icon\" popup\n     message=\"Clicked the alarm icon\"></i>\n  "
        })
    ], HostSampleApp3);
    return HostSampleApp3;
}());
exports.HostSampleApp3 = HostSampleApp3;
//# sourceMappingURL=host_03.js.map