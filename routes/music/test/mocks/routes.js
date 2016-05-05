"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var core_1 = require('angular2/core');
var router_1 = require('angular2/router');
var common_1 = require('angular2/platform/common');
var instruction_1 = require('angular2/src/router/instruction');
var testing_internal_1 = require('angular2/testing_internal');
var MockRouteParams = (function (_super) {
    __extends(MockRouteParams, _super);
    function MockRouteParams() {
        _super.call(this, router_1.RouteParams);
        this.ROUTE_PARAMS = {};
    }
    MockRouteParams.prototype.set = function (key, value) {
        this.ROUTE_PARAMS[key] = value;
    };
    MockRouteParams.prototype.get = function (key) {
        return this.ROUTE_PARAMS[key];
    };
    return MockRouteParams;
}(testing_internal_1.SpyObject));
exports.MockRouteParams = MockRouteParams;
var MockRouter = (function (_super) {
    __extends(MockRouter, _super);
    function MockRouter() {
        _super.call(this, router_1.Router);
    }
    MockRouter.prototype.isRouteActive = function (s) { return true; };
    MockRouter.prototype.generate = function (s) {
        var klass = router_1.ComponentInstruction;
        var instruction = new klass('detail', [], null, null, true, '0', null, 'Detail');
        return new instruction_1.ResolvedInstruction(instruction, null, {});
    };
    return MockRouter;
}(testing_internal_1.SpyObject));
exports.MockRouter = MockRouter;
var MockLocationStrategy = (function (_super) {
    __extends(MockLocationStrategy, _super);
    function MockLocationStrategy() {
        _super.call(this, common_1.LocationStrategy);
    }
    return MockLocationStrategy;
}(testing_internal_1.SpyObject));
exports.MockLocationStrategy = MockLocationStrategy;
var MockLocation = (function (_super) {
    __extends(MockLocation, _super);
    function MockLocation() {
        _super.call(this, common_1.Location);
    }
    return MockLocation;
}(testing_internal_1.SpyObject));
exports.MockLocation = MockLocation;
var MockRouterProvider = (function () {
    function MockRouterProvider() {
        this.mockRouter = new MockRouter();
        this.mockRouteParams = new MockRouteParams();
        this.mockLocationStrategy = new MockLocationStrategy();
        this.mockLocation = new MockLocation();
    }
    MockRouterProvider.prototype.setRouteParam = function (key, value) {
        this.mockRouteParams.set(key, value);
    };
    MockRouterProvider.prototype.getProviders = function () {
        return [
            core_1.provide(router_1.Router, { useValue: this.mockRouter }),
            core_1.provide(router_1.RouteParams, { useValue: this.mockRouteParams }),
            core_1.provide(common_1.Location, { useValue: this.mockLocation }),
            core_1.provide(common_1.LocationStrategy, { useValue: this.mockLocationStrategy })
        ];
    };
    return MockRouterProvider;
}());
exports.MockRouterProvider = MockRouterProvider;
//# sourceMappingURL=routes.js.map