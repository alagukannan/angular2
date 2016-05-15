"use strict";
var services_1 = require("../app/ts/services/services");
var calculator_1 = require("calculator");
describe('Hello', function () {
    it('should test', function () {
        var m = services_1.MessagesService;
    });
    it('should add', function () {
        var c = new calculator_1.Calculator();
        expect(true).toBe(true);
        expect(c.add(1, 2)).toBe(3);
    });
});
//# sourceMappingURL=app.spec_BASE_40440.js.map