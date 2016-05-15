"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('angular2/core');
var NgBookIf = (function () {
    function NgBookIf(viewContainer, template) {
        this.viewContainer = viewContainer;
        this.template = template;
    }
    Object.defineProperty(NgBookIf.prototype, "ngBookIf", {
        set: function (condition) {
            if (condition) {
                this.viewContainer.createEmbeddedView(this.template);
            }
            else {
                this.viewContainer.clear();
            }
        },
        enumerable: true,
        configurable: true
    });
    NgBookIf = __decorate([
        core_1.Directive({
            selector: '[ngBookIf]',
            inputs: ['ngBookIf']
        })
    ], NgBookIf);
    return NgBookIf;
}());
var IfTemplateSampleApp = (function () {
    function IfTemplateSampleApp() {
        this.display = true;
    }
    IfTemplateSampleApp.prototype.toggle = function () {
        this.display = !this.display;
    };
    IfTemplateSampleApp = __decorate([
        core_1.Component({
            selector: 'template-sample-app',
            directives: [NgBookIf],
            template: "\n  <button class=\"ui primary button\" (click)=\"toggle()\">\n    Toggle\n  </button>\n\n  <div *ngBookIf=\"display\">\n    The message is displayed\n  </div>\n\n  "
        })
    ], IfTemplateSampleApp);
    return IfTemplateSampleApp;
}());
exports.IfTemplateSampleApp = IfTemplateSampleApp;
//# sourceMappingURL=if.js.map