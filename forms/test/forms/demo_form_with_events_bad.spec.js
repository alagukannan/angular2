"use strict";
var testing_1 = require('angular2/testing');
var testing_internal_1 = require('angular2/testing_internal');
var browser_1 = require('angular2/platform/browser');
var common_1 = require('angular2/common');
var demo_form_with_events_1 = require('../../app/ts/forms/demo_form_with_events');
testing_1.describe('DemoFormWithEvents (bad)', function () {
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
    testing_1.beforeEachProviders(function () {
        return [common_1.FormBuilder];
    });
    testing_1.it('validates and trigger events', testing_1.inject([testing_1.TestComponentBuilder], testing_1.fakeAsync(function (tcb) {
        tcb.createAsync(demo_form_with_events_1.DemoFormWithEvents).then(function (fixture) {
            var el = fixture.debugElement.nativeElement;
            var input = fixture.debugElement.query(browser_1.By.css("input")).nativeElement;
            var form = fixture.debugElement.query(browser_1.By.css("form")).nativeElement;
            fixture.detectChanges();
            input.value = '';
            testing_internal_1.dispatchEvent(input, 'input');
            fixture.detectChanges();
            testing_1.tick();
            var msgs = el.querySelectorAll('.ui.error.message');
            testing_1.expect(msgs[0]).toHaveText('SKU is invalid');
            testing_1.expect(msgs[1]).toHaveText('SKU is required');
            input.value = 'XYZ';
            testing_internal_1.dispatchEvent(input, 'input');
            fixture.detectChanges();
            testing_1.tick();
            msgs = el.querySelectorAll('.ui.error.message');
            testing_1.expect(msgs.length).toEqual(0);
            fixture.detectChanges();
            testing_internal_1.dispatchEvent(form, 'submit');
            testing_1.tick();
            testing_1.expect(fakeConsole._logs).toContain('you submitted value: XYZ');
        });
    })));
});
//# sourceMappingURL=demo_form_with_events_bad.spec.js.map