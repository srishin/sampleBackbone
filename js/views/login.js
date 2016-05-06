define(function (require) {
    "use strict";
    var _  = require('underscore'),
    Backbone = require('backbone'),
    tpl      = require('text!../../partials/login.html'), 
    template = _.template(tpl);

    return Backbone.View.extend({
        initialize: function() {},
        render: function () {
            this.$el.html(template());
            return this;
        }
    });
});