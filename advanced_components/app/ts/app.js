"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('angular2/core');
var browser_1 = require('angular2/platform/browser');
var router_1 = require('angular2/router');
var common_1 = require('angular2/platform/common');
var intro_component_1 = require('./app/intro_component');
var styling_1 = require('./styling/styling');
var host_1 = require('./host/host');
var host_01_1 = require('./host/steps/host_01');
var host_02_1 = require('./host/steps/host_02');
var host_03_1 = require('./host/steps/host_03');
var host_04_1 = require('./host/steps/host_04');
var tabs_1 = require('./tabs/tabs');
var lifecycle_01_1 = require('./lifecycle-hooks/lifecycle_01');
var lifecycle_02_1 = require('./lifecycle-hooks/lifecycle_02');
var lifecycle_03_1 = require('./lifecycle-hooks/lifecycle_03');
var lifecycle_04_1 = require('./lifecycle-hooks/lifecycle_04');
var for_1 = require('./templates/for');
var if_1 = require('./templates/if');
var transclusion_1 = require('./transclusion/transclusion');
var onpush_1 = require('./change-detection/onpush');
var observables_1 = require('./change-detection/observables');
var sidebar_1 = require('./app/sidebar');
require('./assets');
var examples = [
    { label: 'Intro', name: 'Root', path: '/', component: intro_component_1.IntroComponent },
    { label: 'Styling', name: 'Styling', path: '/styling', component: styling_1.StyleSampleApp },
    { label: 'Modifying the Host (Step 1)', name: 'Host1', path: '/host-step-1', component: host_01_1.HostSampleApp1, dev: true },
    { label: 'Modifying the Host (Step 2)', name: 'Host2', path: '/host-step-2', component: host_02_1.HostSampleApp2, dev: true },
    { label: 'Modifying the Host (Step 3)', name: 'Host3', path: '/host-step-3', component: host_03_1.HostSampleApp3, dev: true },
    { label: 'Modifying the Host (Step 4)', name: 'Host4', path: '/host-step-4', component: host_04_1.HostSampleApp4, dev: true },
    { label: 'Modifying the Host', name: 'Host', path: '/host-final', component: host_1.HostSampleApp },
    { label: 'Tabs - Component Querying', name: 'Tabs', path: '/tabs', component: tabs_1.TabsSampleApp },
    { label: 'Lifecycle 1 - OnInit / OnDestroy', name: 'Lifecycle1', path: '/lifecycle-hooks-1', component: lifecycle_01_1.LifecycleSampleApp1 },
    { label: 'Lifecycle 2 - OnChanges', name: 'Lifecycle2', path: '/lifecycle-hooks-2', component: lifecycle_02_1.LifecycleSampleApp2 },
    { label: 'Lifecycle 3 - Differs', name: 'Lifecycle3', path: '/lifecycle-hooks-3', component: lifecycle_03_1.LifecycleSampleApp3 },
    { label: 'Lifecycle 4 - Full', name: 'Lifecycle4', path: '/lifecycle-hooks-4', component: lifecycle_04_1.LifecycleSampleApp4 },
    { label: 'ngBookFor', name: 'NgBookFor', path: '/ng-book-for', component: for_1.ForTemplateSampleApp },
    { label: 'ngBookIf', name: 'NgBookIf', path: '/ng-book-if', component: if_1.IfTemplateSampleApp },
    { label: 'Transclusion', name: 'Transclusion', path: '/transclusion', component: transclusion_1.TransclusionSampleApp },
    { label: 'Change Detection - OnPush', name: 'ChangeDetectionOnPush', path: 'change-detection-onpush', component: onpush_1.OnPushChangeDetectionSampleApp },
    { label: 'Change Detection - Observables', name: 'ChangeDetectionObservables', path: 'change-detection-observ', component: observables_1.ObservableChangeDetectionSampleApp },
];
var AdvancedComponentsApp = (function () {
    function AdvancedComponentsApp(router) {
        this.router = router;
        this.examples = examples;
        var routeDefinitions = examples
            .map(function (example) { return ({
            path: example.path, name: example.name, component: example.component
        }); });
        router.config(routeDefinitions);
    }
    AdvancedComponentsApp = __decorate([
        core_1.Component({
            selector: 'advanced-components-app',
            directives: [sidebar_1.SidebarComponent, router_1.ROUTER_DIRECTIVES],
            template: "\n  <!-- Menu Bar -->\n  <div class=\"ui menu\">\n    <div class=\"ui container\">\n      <a href=\"#\" class=\"header item\">\n        <img class=\"logo\" \n             src=\"" + require('images/logos/ng-book-2-minibook.png') + "\" />\n        ng-book 2\n      </a>\n      <div class=\"header item borderless\">\n        <h1 class=\"ui header\">\n          Angular 2 Advanced Components\n        </h1>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"ui grid container\">\n    <div class=\"four wide column\">\n      <sidebar [items]=\"examples\"></sidebar>\n    </div>\n\n    <div class=\"ui main text container eight wide column\">\n      <router-outlet></router-outlet>\n    </div>\n  </div>\n  "
        })
    ], AdvancedComponentsApp);
    return AdvancedComponentsApp;
}());
browser_1.bootstrap(AdvancedComponentsApp, [
    router_1.ROUTER_PROVIDERS,
    core_1.provide(common_1.APP_BASE_HREF, { useValue: '/' }),
    core_1.provide(common_1.LocationStrategy, { useClass: common_1.HashLocationStrategy })
]).catch(function (err) { return console.error(err); });
//# sourceMappingURL=app.js.map