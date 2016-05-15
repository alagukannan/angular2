"use strict";
var testing_1 = require('angular2/testing');
var routes_1 = require("../mocks/routes");
var spotify_1 = require("../mocks/spotify");
var ArtistComponent_1 = require("../../app/ts/components/ArtistComponent");
testing_1.describe("ArtistComponent", function () {
    var mockSpotifyService;
    var mockRouterProvider;
    testing_1.beforeEachProviders(function () {
        mockSpotifyService = new spotify_1.MockSpotifyService();
        mockRouterProvider = new routes_1.MockRouterProvider();
        return [
            mockSpotifyService.getProviders(), mockRouterProvider.getProviders()
        ];
    });
    testing_1.describe("initialization", function () {
        testing_1.it("retrieves the artist", testing_1.injectAsync([testing_1.TestComponentBuilder], function (tcb) {
            mockRouterProvider.setRouteParam('id', 2);
            return tcb.createAsync(ArtistComponent_1.ArtistComponent).then(function (fixture) {
                fixture.detectChanges();
                testing_1.expect(mockSpotifyService.getArtistSpy).toHaveBeenCalledWith(2);
            });
        }));
    });
    testing_1.describe('back', function () {
        testing_1.it('returns to the previous location', testing_1.injectAsync([testing_1.TestComponentBuilder], function (tcb) {
            return tcb.createAsync(ArtistComponent_1.ArtistComponent).then(function (fixture) {
                var artistComponent = fixture.debugElement.componentInstance;
                var backSpy = mockRouterProvider.mockLocationStrategy.spy('back');
                artistComponent.back();
                testing_1.expect(backSpy).toHaveBeenCalled();
            });
        }));
    });
    testing_1.describe('renderArtist', function () {
        testing_1.it('renders artist info', testing_1.injectAsync([testing_1.TestComponentBuilder], function (tcb) {
            return tcb.createAsync(ArtistComponent_1.ArtistComponent).then(function (fixture) {
                var artistComponent = fixture.debugElement.componentInstance;
                var artist = { name: 'ARTIST NAME', images: [{ url: 'IMAGE_1' }] };
                mockSpotifyService.setResponse(artist);
                fixture.detectChanges();
                var compiled = fixture.debugElement.nativeElement;
                testing_1.expect(compiled.querySelector('h1')).toHaveText('ARTIST NAME');
                testing_1.expect(compiled.querySelector('img').src).toContain('IMAGE_1');
            });
        }));
    });
});
//# sourceMappingURL=ArtistComponent.spec.js.map