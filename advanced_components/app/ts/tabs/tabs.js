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
var Tab = (function () {
    function Tab() {
        this.active = false;
    }
    __decorate([
        core_1.Input('title')
    ], Tab.prototype, "title");
    Tab = __decorate([
        core_1.Component({
            selector: 'tab',
            inputs: ['title'],
            template: "\n  <div class=\"ui bottom attached tab segment\"\n       [class.active]=\"active\">\n\n    <ng-content></ng-content>\n\n  </div>\n  "
        })
    ], Tab);
    return Tab;
}());
var Tabset = (function () {
    function Tabset(tabs) {
        this.tabs = tabs;
    }
    Tabset.prototype.ngAfterContentInit = function () {
        this.tabs.toArray()[0].active = true;
    };
    Tabset.prototype.setActive = function (tab) {
        this.tabs.toArray().forEach(function (t) { return t.active = false; });
        tab.active = true;
    };
    Tabset = __decorate([
        core_1.Component({
            selector: 'tabset',
            template: "\n  <div class=\"ui top attached tabular menu\">\n    <a *ngFor=\"#tab of tabs\"\n       class=\"item\"\n       [class.active]=\"tab.active\"\n       (click)=\"setActive(tab)\">\n\n      {{ tab.title }}\n\n    </a>\n  </div>\n  <ng-content></ng-content>\n  "
        }),
        __param(0, core_1.Query(Tab))
    ], Tabset);
    return Tabset;
}());
var TabsSampleApp = (function () {
    function TabsSampleApp() {
        this.tabs = [
            { title: 'About', content: 'This is the About tab' },
            { title: 'Blog', content: 'This is our blog' },
            { title: 'Contact us', content: 'Contact us here' },
        ];
    }
    TabsSampleApp = __decorate([
        core_1.Component({
            selector: 'tabs-sample-app',
            directives: [Tabset, Tab],
            template: "\n  <tabset>\n    <tab title=\"First tab\">\n      Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n      Quibusdam magni quia ut harum facilis, ullam deleniti porro\n      dignissimos quasi at molestiae sapiente natus, neque voluptatum\n      ad consequuntur cupiditate nemo sunt.\n    </tab>\n    <tab *ngFor=\"#tab of tabs\" [title]=\"tab.title\">\n      {{ tab.content }}\n    </tab>\n  </tabset>\n  "
        })
    ], TabsSampleApp);
    return TabsSampleApp;
}());
exports.TabsSampleApp = TabsSampleApp;
//# sourceMappingURL=tabs.js.map