"use strict";
var testing_1 = require('angular2/testing');
var calculator_1 = require('calculator');
testing_1.describe('Hello', function () {
    testing_1.it('should test', function () {
    });
    testing_1.it('should add', function () {
        var c = new calculator_1.Calculator();
        testing_1.expect(true).toBe(true);
        testing_1.expect(c.add(1, 2)).toBe(3);
    });
});
//# sourceMappingURL=app.spec.js.map