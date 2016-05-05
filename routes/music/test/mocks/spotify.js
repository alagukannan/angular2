"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var core_1 = require('angular2/core');
var testing_internal_1 = require('angular2/testing_internal');
var SpotifyService_1 = require('../../app/ts/services/SpotifyService');
var MockSpotifyService = (function (_super) {
    __extends(MockSpotifyService, _super);
    function MockSpotifyService() {
        _super.call(this, SpotifyService_1.SpotifyService);
        this.fakeResponse = null;
        this.getAlbumSpy = this.spy('getAlbum').andReturn(this);
        this.getArtistSpy = this.spy('getArtist').andReturn(this);
        this.getTrackSpy = this.spy('getTrack').andReturn(this);
        this.searchTrackSpy = this.spy('searchTrack').andReturn(this);
    }
    MockSpotifyService.prototype.subscribe = function (callback) {
        callback(this.fakeResponse);
    };
    MockSpotifyService.prototype.setResponse = function (json) {
        this.fakeResponse = json;
    };
    MockSpotifyService.prototype.getProviders = function () {
        return [core_1.provide(SpotifyService_1.SpotifyService, { useValue: this })];
    };
    return MockSpotifyService;
}(testing_internal_1.SpyObject));
exports.MockSpotifyService = MockSpotifyService;
//# sourceMappingURL=spotify.js.map