"use strict";
var testing_1 = require('angular2/testing');
var services_1 = require('../../app/ts/services/services');
var models_1 = require('../../app/ts/models');
testing_1.describe('MessagesService', function () {
    testing_1.it('should test', function () {
        var user = new models_1.User('Nate', '');
        var thread = new models_1.Thread('t1', 'Nate', '');
        var m1 = new models_1.Message({
            author: user,
            text: 'Hi!',
            thread: thread
        });
        var m2 = new models_1.Message({
            author: user,
            text: 'Bye!',
            thread: thread
        });
        var messagesService = new services_1.MessagesService();
        messagesService.newMessages
            .subscribe(function (message) {
            console.log('=> newMessages: ' + message.text);
        });
        messagesService.messages
            .subscribe(function (messages) {
            console.log('=> messages: ' + messages.length);
        });
        messagesService.addMessage(m1);
        messagesService.addMessage(m2);
    });
});
//# sourceMappingURL=MessagesService.spec.js.map