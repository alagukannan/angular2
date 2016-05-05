"use strict";
var testing_1 = require('angular2/testing');
var router_1 = require("angular2/router");
var routes_1 = require('../mocks/routes');
var spotify_1 = require('../mocks/spotify');
var SearchComponent_1 = require('../../app/ts/components/SearchComponent');
testing_1.describe('SearchComponent', function () {
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
        testing_1.it("doesn't search for a track without a query", testing_1.injectAsync([testing_1.TestComponentBuilder], function (tcb) {
            var search = mockSpotifyService.spy('searchTrack');
            return tcb.createAsync(SearchComponent_1.SearchComponent).then(function (fixture) {
                fixture.detectChanges();
                testing_1.expect(search).not.toHaveBeenCalled();
            });
        }));
        testing_1.it('searches for a track if a query is provided', testing_1.injectAsync([testing_1.TestComponentBuilder], function (tcb) {
            var search = mockSpotifyService.spy('searchTrack');
            mockRouterProvider.setRouteParam('query', 'QUERY');
            return tcb.createAsync(SearchComponent_1.SearchComponent).then(function (rootTC) {
                rootTC.detectChanges();
                testing_1.expect(search).toHaveBeenCalled();
            });
        }));
    });
    testing_1.describe('submit', function () {
        testing_1.describe('testing the method', function () {
            testing_1.it('navigates to the Search route', testing_1.injectAsync([testing_1.TestComponentBuilder], function (tcb) {
                var navigate = mockRouterProvider.mockRouter.spy('navigate');
                return tcb.createAsync(SearchComponent_1.SearchComponent).then(function (fixture) {
                    var searchComponent = fixture.debugElement.componentInstance;
                    searchComponent.submit("QUERY");
                    testing_1.expect(navigate).toHaveBeenCalledWith(["/Search", { query: "QUERY" }]);
                });
            }));
            testing_1.it('performs the search', testing_1.injectAsync([testing_1.TestComponentBuilder], function (tcb) {
                return tcb.createAsync(SearchComponent_1.SearchComponent).then(function (fixture) {
                    var searchComponent = fixture.debugElement.componentInstance;
                    var search = spyOn(searchComponent, 'search');
                    searchComponent.submit("QUERY");
                    testing_1.expect(search).toHaveBeenCalled();
                });
            }));
        });
        testing_1.describe('testing the interaction', function () {
            testing_1.it('navigates to the Search route', testing_1.injectAsync([testing_1.TestComponentBuilder], function (tcb) {
                var navigate = mockRouterProvider.mockRouter.spy('navigate');
                return tcb.createAsync(SearchComponent_1.SearchComponent).then(function (fixture) {
                    var compiled = fixture.debugElement.nativeElement;
                    var input = compiled.querySelector('input');
                    var button = compiled.querySelector('button');
                    fixture.detectChanges();
                    input.value = "QUERY";
                    button.click();
                    testing_1.expect(navigate).toHaveBeenCalledWith(["/Search", { query: "QUERY" }]);
                });
            }));
        });
    });
    testing_1.describe('search', function () {
        testing_1.it('searches when a query is present', testing_1.injectAsync([testing_1.TestComponentBuilder], function (tcb) {
            return tcb.createAsync(SearchComponent_1.SearchComponent).then(function (fixture) {
                var searchComponent = fixture.debugElement.componentInstance;
                mockRouterProvider.setRouteParam('query', 'QUERY');
                searchComponent.search();
                testing_1.expect(mockSpotifyService.searchTrackSpy).toHaveBeenCalledWith("QUERY");
            });
        }));
        testing_1.it("doesn't search when a query is absent", testing_1.injectAsync([testing_1.TestComponentBuilder], function (tcb) {
            return tcb.createAsync(SearchComponent_1.SearchComponent).then(function (fixture) {
                var searchComponent = fixture.debugElement.componentInstance;
                searchComponent.search();
                testing_1.expect(mockSpotifyService.searchTrackSpy).not.toHaveBeenCalled();
            });
        }));
    });
    testing_1.describe('renderResults', function () {
        testing_1.it('display a message when no results are found', testing_1.injectAsync([router_1.Router, testing_1.TestComponentBuilder], function (router, tcb) {
            return tcb.createAsync(SearchComponent_1.SearchComponent).then(function (fixture) {
                mockSpotifyService.setResponse({ tracks: { items: [] } });
                mockRouterProvider.setRouteParam('query', 'QUERY');
                var searchComponent = fixture.debugElement.componentInstance;
                var compiled = fixture.debugElement.nativeElement;
                var input = compiled.querySelector('input');
                var button = compiled.querySelector('button');
                fixture.detectChanges();
                input.value = "QUERY";
                button.click();
                testing_1.expect(compiled.innerText)
                    .toContain("No tracks were found with the term 'QUERY'");
            });
        }));
        testing_1.it('display results', testing_1.injectAsync([router_1.Router, testing_1.TestComponentBuilder], function (router, tcb) {
            return tcb.createAsync(SearchComponent_1.SearchComponent).then(function (fixture) {
                var searchComponent = fixture.debugElement.componentInstance;
                var response = {
                    tracks: {
                        items: [
                            {
                                id: 1,
                                name: 'TRACK',
                                album: { id: 2, name: 'ALBUM', images: [{ url: 'IMAGE_1' }] },
                                artists: [{ id: 3, name: 'ARTIST' }]
                            }
                        ]
                    }
                };
                searchComponent.renderResults(response);
                fixture.detectChanges();
                var compiled = fixture.debugElement.nativeElement;
                testing_1.expect(compiled.querySelector('img').src).toContain('IMAGE_1');
                var links = compiled.querySelectorAll('a');
                testing_1.expect(links.length).toEqual(3);
                testing_1.expect(links[0].innerText).toEqual('ARTIST');
                testing_1.expect(links[1].innerText).toEqual('TRACK');
                testing_1.expect(links[2].innerText).toEqual('ALBUM');
            });
        }));
    });
});
//# sourceMappingURL=SearchComponent.spec.js.map