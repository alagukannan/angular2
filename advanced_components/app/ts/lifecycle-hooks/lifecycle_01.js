"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('angular2/core');
var OnInitCmp = (function () {
    function OnInitCmp() {
    }
    OnInitCmp.prototype.ngOnInit = function () {
        console.log('On init');
    };
    OnInitCmp.prototype.ngOnDestroy = function () {
        console.log('On destroy');
    };
    OnInitCmp = __decorate([
        core_1.Component({
            selector: 'on-init',
            template: "\n  <div class=\"ui label\">\n    <i class=\"cubes icon\"></i> Init/Destroy\n  </div>\n  "
        })
    ], OnInitCmp);
    return OnInitCmp;
}());
var LifecycleSampleApp1 = (function () {
    function LifecycleSampleApp1() {
        this.display = true;
    }
    LifecycleSampleApp1.prototype.toggle = function () {
        this.display = !this.display;
    };
    LifecycleSampleApp1 = __decorate([
        core_1.Component({
            selector: 'lifecycle-sample-app',
            directives: [OnInitCmp],
            template: "\n  <h4 class=\"ui horizontal divider header\">\n    OnInit and OnDestroy\n  </h4>\n\n  <button class=\"ui primary button\" (click)=\"toggle()\">\n    Toggle\n  </button>\n  <on-init *ngIf=\"display\"></on-init>\n  "
        })
    ], LifecycleSampleApp1);
    return LifecycleSampleApp1;
}());
exports.LifecycleSampleApp1 = LifecycleSampleApp1;
//# sourceMappingURL=lifecycle_01.js.map