"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('angular2/core');
var common_1 = require('angular2/common');
function skuValidator(control) {
    if (!control.value.match(/^123/)) {
        return { invalidSku: true };
    }
}
var DemoFormWithCustomValidations = (function () {
    function DemoFormWithCustomValidations(fb) {
        this.myForm = fb.group({
            'sku': ['', common_1.Validators.compose([
                    common_1.Validators.required, skuValidator])]
        });
        this.sku = this.myForm.controls['sku'];
    }
    DemoFormWithCustomValidations.prototype.onSubmit = function (value) {
        console.log('you submitted value: ', value);
    };
    DemoFormWithCustomValidations = __decorate([
        core_1.Component({
            selector: 'demo-form-with-custom-validations',
            directives: [common_1.CORE_DIRECTIVES, common_1.FORM_DIRECTIVES],
            template: "\n  <div class=\"ui raised segment\">\n    <h2 class=\"ui header\">Demo Form: with custom validations</h2>\n    <form [ngFormModel]=\"myForm\"\n          (ngSubmit)=\"onSubmit(myForm.value)\"\n          class=\"ui form\">\n\n      <div class=\"field\"\n          [class.error]=\"!sku.valid && sku.touched\">\n        <label for=\"skuInput\">SKU</label>\n        <input type=\"text\"\n               id=\"skuInput\"\n               placeholder=\"SKU\"\n               [ngFormControl]=\"sku\">\n         <div *ngIf=\"!sku.valid\"\n           class=\"ui error message\">SKU is invalid</div>\n         <div *ngIf=\"sku.hasError('required')\"\n           class=\"ui error message\">SKU is required</div>\n         <div *ngIf=\"sku.hasError('invalidSku')\"\n           class=\"ui error message\">SKU must begin with <tt>123</tt></div>\n      </div>\n\n      <div *ngIf=\"!myForm.valid\"\n        class=\"ui error message\">Form is invalid</div>\n      <button type=\"submit\" class=\"ui button\">Submit</button>\n    </form>\n  </div>\n  "
        })
    ], DemoFormWithCustomValidations);
    return DemoFormWithCustomValidations;
}());
exports.DemoFormWithCustomValidations = DemoFormWithCustomValidations;
//# sourceMappingURL=demo_form_with_custom_validations.js.map