define(function (require) {
    "use strict";
    var  tpl      = require('text!../../partials/advantages.html'), 
    template = _.template(tpl);

    return Backbone.View.extend({
        initialize: function() {},
        render: function () {
            this.$el.html(template());
            return this;
        }
    });
});

