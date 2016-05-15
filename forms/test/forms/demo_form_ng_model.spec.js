"use strict";
var testing_1 = require('angular2/testing');
var common_1 = require('angular2/common');
var demo_form_ng_model_1 = require('../../app/ts/forms/demo_form_ng_model');
testing_1.beforeEachProviders(function () { return [common_1.FormBuilder]; });
testing_1.describe('DemoFormNgModel', function () {
    testing_1.it('requires product name', testing_1.injectAsync([testing_1.TestComponentBuilder], function (tcb) {
        return tcb.createAsync(demo_form_ng_model_1.DemoFormNgModel).then(function (fixture) {
            var comp = fixture.debugElement.componentInstance;
            var el = fixture.debugElement.nativeElement;
            comp.productName = '';
            fixture.detectChanges();
            testing_1.expect(el.querySelector('.ui.error.message')).toHaveText('Form is invalid');
            comp.productName = 'something';
            fixture.detectChanges();
            testing_1.expect(el.querySelector('.ui.error.message')).toBeNull();
        });
    }));
});
//# sourceMappingURL=demo_form_ng_model.spec.js.map