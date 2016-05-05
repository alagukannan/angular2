"use strict";
var testing_1 = require('angular2/testing');
var testing_2 = require('angular2/http/testing');
var core_1 = require('angular2/core');
var http_1 = require('angular2/http');
var SpotifyService_1 = require('../../app/ts/services/SpotifyService');
testing_1.describe('SpotifyService', function () {
    testing_1.beforeEachProviders(function () {
        return [
            http_1.BaseRequestOptions,
            testing_2.MockBackend,
            SpotifyService_1.SpotifyService,
            core_1.provide(http_1.Http, { useFactory: function (backend, defaultOptions) {
                    return new http_1.Http(backend, defaultOptions);
                }, deps: [testing_2.MockBackend, http_1.BaseRequestOptions] }),
        ];
    });
    function expectURL(backend, url) {
        backend.connections.subscribe(function (c) {
            testing_1.expect(c.request.url).toBe(url);
            var response = new http_1.ResponseOptions({ body: '{"name": "felipe"}' });
            c.mockRespond(new http_1.Response(response));
        });
    }
    testing_1.describe('getTrack', function () {
        testing_1.it('retrieves using the track ID', testing_1.inject([SpotifyService_1.SpotifyService, testing_2.MockBackend], testing_1.fakeAsync(function (svc, backend) {
            var res;
            expectURL(backend, 'https://api.spotify.com/v1/tracks/TRACK_ID');
            svc.getTrack('TRACK_ID').subscribe(function (_res) {
                res = _res;
            });
            testing_1.tick();
            testing_1.expect(res.name).toBe('felipe');
        })));
    });
    testing_1.describe('getArtist', function () {
        testing_1.it('retrieves using the artist ID', testing_1.inject([SpotifyService_1.SpotifyService, testing_2.MockBackend], testing_1.fakeAsync(function (svc, backend) {
            var res;
            expectURL(backend, 'https://api.spotify.com/v1/artists/ARTIST_ID');
            svc.getArtist('ARTIST_ID').subscribe(function (_res) {
                res = _res;
            });
            testing_1.tick();
            testing_1.expect(res.name).toBe('felipe');
        })));
    });
    testing_1.describe('getAlbum', function () {
        testing_1.it('retrieves using the album ID', testing_1.inject([SpotifyService_1.SpotifyService, testing_2.MockBackend], testing_1.fakeAsync(function (svc, backend) {
            var res;
            expectURL(backend, 'https://api.spotify.com/v1/albums/ALBUM_ID');
            svc.getAlbum('ALBUM_ID').subscribe(function (_res) {
                res = _res;
            });
            testing_1.tick();
            testing_1.expect(res.name).toBe('felipe');
        })));
    });
    testing_1.describe('searchTrack', function () {
        testing_1.it('searches type and term', testing_1.inject([SpotifyService_1.SpotifyService, testing_2.MockBackend], testing_1.fakeAsync(function (svc, backend) {
            var res;
            expectURL(backend, 'https://api.spotify.com/v1/search?q=TERM&type=track');
            svc.searchTrack("TERM").subscribe(function (_res) {
                res = _res;
            });
            testing_1.tick();
            testing_1.expect(res.name).toBe('felipe');
        })));
    });
});
//# sourceMappingURL=SpotifyService.spec.js.map