requirejs.config({
	baseUrl:"js",

	urlArgs: "bust=" + (new Date()).getTime(),
	stubModules: ['text'],
	paths:{
		underscore:"lib/underscore",
		backbone:"lib/backbone",
		jquery:'theme/jquery/jquery-1.11.3',
		router:'lib/router',

		// Theme JS
		isotope:'theme/jquery.isotope.min',
		slider:'theme/slider',
		swiper:"theme/idangerous.swiper-2.7.min",
		mapapi:"//maps.google.com/maps/api/js?sensor=false",
		mapcore:'theme/core.googlemap',
		base:'/js/theme/base',
		dtpicker:'/js/theme/bootstrap-datetimepicker.min',
		rating:'/js/theme/bootstrap-rating.min',
		moment:'/js/theme/moment.min',
		fullcalendar:'/js/theme/fullcalendar.min'
	},
	shim:{
		  "backbone": {
                  deps: [ "underscore", "jquery",'moment' ],
                  exports: "Backbone"  //attaches "Backbone" to the window object
            },
		'jquery':{
			exports:'jQuery',
      // if this function returns false or undefined load the script from the cdn
      validate: function () {
      	return window.jQuery;
      }
  },
  'base':{
  	deps:['backbone','swiper','moment']
  }

}

});

define('main', function (require) {


	 // This is the router.js file.  Note, it gets invoked before DOM is loaded


	require(['moment'],function(moment){
		var Router = require('router');
		var router = new Router();
		Backbone.history.start();
	});


	
	//router.navigate("project/some-slug", {trigger:true})
	
});

// Start the application
require(['main']);