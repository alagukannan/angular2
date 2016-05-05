"use strict";
var testing_1 = require('angular2/testing');
var testing_internal_1 = require('angular2/testing_internal');
var browser_1 = require('angular2/platform/browser');
var demo_form_sku_1 = require('../../app/ts/forms/demo_form_sku');
testing_1.describe('DemoFormSku', function () {
    var _console;
    var fakeConsole;
    var el, input, form;
    beforeEach(function () {
        fakeConsole = {};
        fakeConsole._logs = [];
        fakeConsole.log = function () {
            var theArgs = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                theArgs[_i - 0] = arguments[_i];
            }
            return fakeConsole._logs.push(theArgs.join(' '));
        };
        _console = window.console;
        window.console = fakeConsole;
    });
    afterAll(function () { return window.console = _console; });
    function createComponent(tcb) {
        return tcb.createAsync(demo_form_sku_1.DemoFormSku).then(function (fixture) {
            el = fixture.debugElement.nativeElement;
            input = fixture.debugElement.query(browser_1.By.css("input")).nativeElement;
            form = fixture.debugElement.query(browser_1.By.css("form")).nativeElement;
            fixture.detectChanges();
            return fixture;
        });
    }
    testing_1.it('logs the submitted value', testing_1.inject([testing_1.TestComponentBuilder], testing_1.fakeAsync(function (tcb) {
        createComponent(tcb).then(function (fixture) {
            input.value = 'MY-SKU';
            testing_internal_1.dispatchEvent(input, 'input');
            fixture.detectChanges();
            testing_1.tick();
            fixture.detectChanges();
            testing_internal_1.dispatchEvent(form, 'submit');
            testing_1.tick();
            testing_1.expect(fakeConsole._logs).toContain('you submitted value: [object Object]');
        });
    })));
});
//# sourceMappingURL=demo_form_sku.spec.js.map