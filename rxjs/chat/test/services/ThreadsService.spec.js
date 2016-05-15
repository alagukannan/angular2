"use strict";
var testing_1 = require('angular2/testing');
var services_1 = require('../../app/ts/services/services');
var models_1 = require('../../app/ts/models');
var _ = require('underscore');
testing_1.describe('ThreadsService', function () {
    testing_1.it('should collect the Threads from Messages', function () {
        var nate = new models_1.User('Nate Murray', '');
        var felipe = new models_1.User('Felipe Coury', '');
        var t1 = new models_1.Thread('t1', 'Thread 1', '');
        var t2 = new models_1.Thread('t2', 'Thread 2', '');
        var m1 = new models_1.Message({
            author: nate,
            text: 'Hi!',
            thread: t1
        });
        var m2 = new models_1.Message({
            author: felipe,
            text: 'Where did you get that hat?',
            thread: t1
        });
        var m3 = new models_1.Message({
            author: nate,
            text: 'Did you bring the briefcase?',
            thread: t2
        });
        var messagesService = new services_1.MessagesService();
        var threadsService = new services_1.ThreadsService(messagesService);
        threadsService.threads
            .subscribe(function (threadIdx) {
            var threads = _.values(threadIdx);
            var threadNames = _.map(threads, function (t) { return t.name; })
                .join(', ');
            console.log("=> threads (" + threads.length + "): " + threadNames + " ");
        });
        messagesService.addMessage(m1);
        messagesService.addMessage(m2);
        messagesService.addMessage(m3);
    });
});
//# sourceMappingURL=ThreadsService.spec.js.map