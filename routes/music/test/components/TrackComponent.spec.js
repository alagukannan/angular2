"use strict";
var testing_1 = require('angular2/testing');
var routes_1 = require("../mocks/routes");
var spotify_1 = require("../mocks/spotify");
var TrackComponent_1 = require("../../app/ts/components/TrackComponent");
var mockSpotifyService = new spotify_1.MockSpotifyService();
var mockRouterProvider = new routes_1.MockRouterProvider();
testing_1.describe("TrackComponent", function () {
    var mockSpotifyService;
    var mockRouterProvider;
    var template = "<h1 *ngIf=\"track\">{{track.name}}</h1>";
    testing_1.beforeEachProviders(function () {
        mockSpotifyService = new spotify_1.MockSpotifyService();
        mockRouterProvider = new routes_1.MockRouterProvider();
        return [
            mockSpotifyService.getProviders(), mockRouterProvider.getProviders()
        ];
    });
    testing_1.describe("initialization", function () {
        testing_1.it("retrieves the track", testing_1.injectAsync([testing_1.TestComponentBuilder], function (tcb) {
            mockRouterProvider.setRouteParam('id', 1);
            return tcb.overrideTemplate(TrackComponent_1.TrackComponent, template)
                .createAsync(TrackComponent_1.TrackComponent).then(function (fixture) {
                fixture.detectChanges();
                testing_1.expect(mockSpotifyService.getTrackSpy).toHaveBeenCalledWith(1);
            });
        }));
    });
    testing_1.describe('back', function () {
        testing_1.it('returns to the previous location', testing_1.injectAsync([testing_1.TestComponentBuilder], function (tcb) {
            return tcb.overrideTemplate(TrackComponent_1.TrackComponent, template)
                .createAsync(TrackComponent_1.TrackComponent).then(function (fixture) {
                var trackComponent = fixture.debugElement.componentInstance;
                var backSpy = mockRouterProvider.mockLocationStrategy.spy('back');
                trackComponent.back();
                testing_1.expect(backSpy).toHaveBeenCalled();
            });
        }));
    });
    testing_1.describe('renderTrack', function () {
        testing_1.it('renders track info', testing_1.injectAsync([testing_1.TestComponentBuilder], function (tcb) {
            return tcb.overrideTemplate(TrackComponent_1.TrackComponent, template)
                .createAsync(TrackComponent_1.TrackComponent).then(function (fixture) {
                var trackComponent = fixture.debugElement.componentInstance;
                mockSpotifyService.setResponse({ name: 'TRACK NAME' });
                fixture.detectChanges();
                var compiled = fixture.debugElement.nativeElement;
                testing_1.expect(compiled.querySelector('h1')).toHaveText('TRACK NAME');
            });
        }));
    });
});
//# sourceMappingURL=TrackComponent.spec.js.map