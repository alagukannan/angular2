"use strict";
var testing_1 = require('angular2/testing');
var routes_1 = require('../mocks/routes');
var spotify_1 = require('../mocks/spotify');
var AlbumComponent_1 = require('../../app/ts/components/AlbumComponent');
testing_1.describe('AlbumComponent', function () {
    var mockSpotifyService;
    var mockRouterProvider;
    testing_1.beforeEachProviders(function () {
        mockSpotifyService = new spotify_1.MockSpotifyService();
        mockRouterProvider = new routes_1.MockRouterProvider();
        return [
            mockSpotifyService.getProviders(), mockRouterProvider.getProviders()
        ];
    });
    testing_1.describe('initialization', function () {
        testing_1.it('retrieves the album', testing_1.injectAsync([testing_1.TestComponentBuilder], function (tcb) {
            mockRouterProvider.setRouteParam('id', 1);
            return tcb.createAsync(AlbumComponent_1.AlbumComponent).then(function (fixture) {
                fixture.detectChanges();
                testing_1.expect(mockSpotifyService.getAlbumSpy).toHaveBeenCalledWith(1);
            });
        }));
    });
    testing_1.describe('back', function () {
        testing_1.it('returns to the previous location', testing_1.injectAsync([testing_1.TestComponentBuilder], function (tcb) {
            return tcb.createAsync(AlbumComponent_1.AlbumComponent).then(function (fixture) {
                var albumComponent = fixture.debugElement.componentInstance;
                var backSpy = mockRouterProvider.mockLocationStrategy.spy('back');
                albumComponent.back();
                testing_1.expect(backSpy).toHaveBeenCalled();
            });
        }));
    });
    testing_1.describe('renderAlbum', function () {
        testing_1.it('renders album info', testing_1.injectAsync([testing_1.TestComponentBuilder], function (tcb) {
            return tcb.createAsync(AlbumComponent_1.AlbumComponent).then(function (fixture) {
                var albumComponent = fixture.debugElement.componentInstance;
                var album = {
                    name: 'ALBUM NAME',
                    artists: [{ name: 'ARTIST NAME' }],
                    images: [null, { url: 'IMAGE_2' }],
                    tracks: {
                        items: [{ id: 1, name: 'TRACK 1' }, { id: 2, name: 'TRACK 2' }]
                    }
                };
                mockSpotifyService.setResponse(album);
                fixture.detectChanges();
                var compiled = fixture.debugElement.nativeElement;
                testing_1.expect(compiled.querySelector('h1')).toHaveText('ALBUM NAME');
                testing_1.expect(compiled.querySelector('h2')).toHaveText('ARTIST NAME');
                var links = compiled.querySelectorAll('a');
                testing_1.expect(links[0].innerText).toContain('TRACK 1');
                testing_1.expect(links[1].innerText).toContain('TRACK 2');
            });
        }));
    });
});
//# sourceMappingURL=AlbumComponent.spec.js.map