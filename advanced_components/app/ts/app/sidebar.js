"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('angular2/core');
var router_1 = require('angular2/router');
var SidebarItemComponent = (function () {
    function SidebarItemComponent(router) {
        this.router = router;
    }
    SidebarItemComponent.prototype.isActive = function () {
        return this.isRouteActive(this.item.name);
    };
    SidebarItemComponent.prototype.isRouteActive = function (route) {
        return this.router.isRouteActive(this.router.generate([route]));
    };
    __decorate([
        core_1.Input('item')
    ], SidebarItemComponent.prototype, "item");
    SidebarItemComponent = __decorate([
        core_1.Component({
            selector: 'sidebar-item',
            inputs: ['item'],
            directives: [router_1.ROUTER_DIRECTIVES],
            template: "\n<a class=\"item\" \n  [ngClass]=\"{ active: isActive() }\"\n  [routerLink]=\"[item.name]\">\n  {{ item.label }}\n</a>\n  "
        })
    ], SidebarItemComponent);
    return SidebarItemComponent;
}());
var SidebarComponent = (function () {
    function SidebarComponent() {
    }
    __decorate([
        core_1.Input('items')
    ], SidebarComponent.prototype, "items");
    SidebarComponent = __decorate([
        core_1.Component({
            selector: 'sidebar',
            inputs: ['items'],
            directives: [SidebarItemComponent],
            template: "\n<div class=\"ui vertical pointing menu\">\n  <sidebar-item \n    [item]=\"item\"\n    *ngFor=\"#item of items\">\n    </sidebar-item>\n</div>\n  "
        })
    ], SidebarComponent);
    return SidebarComponent;
}());
exports.SidebarComponent = SidebarComponent;
//# sourceMappingURL=sidebar.js.map