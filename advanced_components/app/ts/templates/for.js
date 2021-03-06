"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('angular2/core');
var MyRepeatIf = (function () {
    function MyRepeatIf(viewContainer, template, changeDetector, differs) {
        this.viewContainer = viewContainer;
        this.template = template;
        this.changeDetector = changeDetector;
        this.differs = differs;
        this.views = new Map();
    }
    Object.defineProperty(MyRepeatIf.prototype, "ngBookRepeatOf", {
        set: function (items) {
            this.items = items;
            if (this.items && !this.differ) {
                this.differ = this.differs.find(items).create(this.changeDetector);
            }
        },
        enumerable: true,
        configurable: true
    });
    MyRepeatIf.prototype.ngDoCheck = function () {
        var _this = this;
        if (this.differ) {
            var changes = this.differ.diff(this.items);
            if (changes) {
                console.log('template', this.template);
                changes.forEachAddedItem(function (change) {
                    var view = _this.viewContainer.createEmbeddedView(_this.template);
                    view.setLocal('\$implicit', change.item);
                    _this.views.set(change.item, view);
                });
                changes.forEachRemovedItem(function (change) {
                    var view = _this.views.get(change.item);
                    var idx = _this.viewContainer.indexOf(view);
                    _this.viewContainer.remove(idx);
                    _this.views.delete(change.item);
                });
            }
        }
    };
    MyRepeatIf = __decorate([
        core_1.Directive({
            selector: '[ngBookRepeat]',
            inputs: ['ngBookRepeatOf']
        })
    ], MyRepeatIf);
    return MyRepeatIf;
}());
var ForTemplateSampleApp = (function () {
    function ForTemplateSampleApp() {
        this.people = [
            { name: 'Joe', age: 10 },
            { name: 'Patrick', age: 21 },
            { name: 'Melissa', age: 12 },
            { name: 'Kate', age: 19 }
        ];
    }
    ForTemplateSampleApp.prototype.remove = function (p) {
        var idx = this.people.indexOf(p);
        this.people.splice(idx, 1);
        return false;
    };
    ForTemplateSampleApp.prototype.add = function (name, age) {
        this.people.push({ name: name.value, age: age.value });
        name.value = '';
        age.value = '';
    };
    ForTemplateSampleApp = __decorate([
        core_1.Component({
            selector: 'template-sample-app',
            directives: [MyRepeatIf],
            template: "\n  <ul>\n    <li *ngBookRepeat=\"#p of people\">\n      {{ p.name }} is {{ p.age }}\n      <a href (click)=\"remove(p)\">Remove</a>\n    </li>\n  </ul>\n\n  <div class=\"ui form\">\n    <div class=\"fields\">\n      <div class=\"field\">\n        <label>Name</label>\n        <input type=\"text\" #name placeholder=\"Name\">\n      </div>\n      <div class=\"field\">\n        <label>Age</label>\n        <input type=\"text\" #age placeholder=\"Age\">\n      </div>\n    </div>\n  </div>\n  <div class=\"ui submit button\"\n       (click)=\"add(name, age)\">\n    Add\n  </div>\n  "
        })
    ], ForTemplateSampleApp);
    return ForTemplateSampleApp;
}());
exports.ForTemplateSampleApp = ForTemplateSampleApp;
//# sourceMappingURL=for.js.map