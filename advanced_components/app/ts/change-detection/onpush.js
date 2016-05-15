"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('angular2/core');
var Profile = (function () {
    function Profile(first, last) {
        this.first = first;
        this.last = last;
    }
    Profile.prototype.lastChanged = function () {
        return new Date();
    };
    return Profile;
}());
var DefaultCmp = (function () {
    function DefaultCmp() {
    }
    __decorate([
        core_1.Input()
    ], DefaultCmp.prototype, "profile");
    DefaultCmp = __decorate([
        core_1.Component({
            selector: 'default',
            inputs: ['profile'],
            template: "\n  <h4 class=\"ui horizontal divider header\">\n    Default Strategy\n  </h4>\n\n  <form class=\"ui form\">\n    <div class=\"field\">\n      <label>First Name</label>\n      <input\n        type=\"text\"\n        [(ngModel)]=\"profile.first\"\n        placeholder=\"First Name\">\n    </div>\n    <div class=\"field\">\n      <label>Last Name</label>\n      <input\n        type=\"text\"\n        [(ngModel)]=\"profile.last\"\n        placeholder=\"Last Name\">\n    </div>\n  </form>\n  <div>\n    {{profile.lastChanged() | date:'medium'}}\n  </div>\n  "
        })
    ], DefaultCmp);
    return DefaultCmp;
}());
var OnPushCmp = (function () {
    function OnPushCmp() {
    }
    __decorate([
        core_1.Input()
    ], OnPushCmp.prototype, "profile");
    OnPushCmp = __decorate([
        core_1.Component({
            selector: 'on-push',
            inputs: ['profile'],
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
            template: "\n  <h4 class=\"ui horizontal divider header\">\n    OnPush Strategy\n  </h4>\n\n  <form class=\"ui form\">\n    <div class=\"field\">\n      <label>First Name</label>\n      <input\n        type=\"text\"\n        [(ngModel)]=\"profile.first\"\n        placeholder=\"First Name\">\n    </div>\n    <div class=\"field\">\n      <label>Last Name</label>\n      <input\n        type=\"text\"\n        [(ngModel)]=\"profile.last\"\n        placeholder=\"Last Name\">\n    </div>\n  </form>\n  <div>\n    {{profile.lastChanged() | date:'medium'}}\n  </div>\n  "
        })
    ], OnPushCmp);
    return OnPushCmp;
}());
var OnPushChangeDetectionSampleApp = (function () {
    function OnPushChangeDetectionSampleApp() {
        this.profile1 = new Profile('Felipe', 'Coury');
        this.profile2 = new Profile('Nate', 'Murray');
    }
    OnPushChangeDetectionSampleApp = __decorate([
        core_1.Component({
            selector: 'change-detection-sample-app',
            directives: [DefaultCmp, OnPushCmp],
            template: "\n  <div class=\"ui page grid\">\n    <div class=\"two column row\">\n      <div class=\"column area\">\n        <default [profile]=\"profile1\"></default>\n      </div>\n      <div class=\"column area\">\n        <on-push [profile]=\"profile2\"></on-push>\n      </div>\n    </div>\n  </div>\n  "
        })
    ], OnPushChangeDetectionSampleApp);
    return OnPushChangeDetectionSampleApp;
}());
exports.OnPushChangeDetectionSampleApp = OnPushChangeDetectionSampleApp;
//# sourceMappingURL=onpush.js.map