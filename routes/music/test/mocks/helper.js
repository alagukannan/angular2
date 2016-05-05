"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var http_1 = require('angular2/http');
var common_dom_1 = require('angular2/platform/common_dom');
var MockResponse = (function (_super) {
    __extends(MockResponse, _super);
    function MockResponse(json) {
        _super.call(this, new http_1.ResponseOptions());
        this._json = json;
    }
    MockResponse.prototype.json = function () {
        return this._json;
    };
    return MockResponse;
}(http_1.Response));
var TestHelper = (function () {
    function TestHelper() {
    }
    TestHelper.getChildByTagName = function (parent, tagName) {
        return parent.query(function (debugEl) { return debugEl.nativeElement.tagName.toLowerCase() == tagName; });
    };
    TestHelper.getChildrenBySelector = function (parent, selector) {
        var results = [];
        parent.queryAll(common_dom_1.By.css(selector)).forEach(function (el) { return results.push(el); });
        parent.children.forEach(function (de) {
            TestHelper.getChildrenBySelector(de, selector).forEach(function (el) { return results.push(el); });
        });
        return results;
    };
    TestHelper.isPhantomJS = function () {
        return navigator && navigator.userAgent
            && navigator.userAgent.indexOf('PhantomJS') > -1;
    };
    TestHelper.mockJSONResponse = function (payload) {
        return new MockResponse(payload);
    };
    return TestHelper;
}());
exports.TestHelper = TestHelper;
//# sourceMappingURL=helper.js.map