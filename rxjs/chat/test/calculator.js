"use strict";
var Calculator = (function () {
    function Calculator() {
    }
    Calculator.prototype.add = function (op1, op2) {
        return op1 + op2;
    };
    Calculator.prototype.subtract = function (op1, op2) {
        return op1 - op2;
    };
    return Calculator;
}());
exports.Calculator = Calculator;
//# sourceMappingURL=calculator.js.map