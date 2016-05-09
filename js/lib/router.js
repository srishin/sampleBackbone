define(function(require) {

	// Dependencies
	var Backbone = require('backbone'),
	base = require('base'),
	 content = $('#contentDiv');

	 themerex_ready_actions();

	var router = Backbone.Router.extend({
		
		// Define routes
		routes: {
			"": "home",
			"Home": "home",
			"tutorsall": "tutors",
			"tutors": "projects",
			"about-us": "about",
			"contact-us": "contact",
			"view-tutors": "tutors",
			"Advantages": "advantages",
			"login": "login",
			"register": "register",
			"course": "course",
			"feedback": "feedback",
			"tables": "tables",
			"makepayment": "makepayment",
		  },


		  // requirejs(['base'],function(base){

		  // });



		home: function() {
			require(["views/home"], function (rtlView) {
				var view1 = new rtlView({el: content});
				view1.render();
				loadIndex();
				$('.menu_main_nav_area ul').addClass('hide');
				$('ul#guest').removeClass('hide');
			});
		},
		about:function(){
			require(["views/about"], function (rtlView) {
				var view1 = new rtlView({el: content});
				view1.render();				
				loadTheme();
				$('.menu_main_nav_area ul').addClass('hide');
				$('ul#root').removeClass('hide');
			});
		},
		contact:function(){
			require(["views/contact"], function (rtlView) {
				var view1 = new rtlView({el: content});
				view1.render();
				loadTheme();
				$('.menu_main_nav_area ul').addClass('hide');
				$('ul#admin').removeClass('hide');
			});
		},
		tutors:function(){
			require(["views/tutors"], function (rtlView) {
				var view1 = new rtlView({el: content});
				view1.render();
				loadTheme();				
				$('.menu_main_nav_area ul').addClass('hide');
				$('ul#tutor').removeClass('hide');
			});
		},
		advantages:function(){
			require(["views/advantages"], function (rtlView) {
				var view1 = new rtlView({el: content});
				view1.render();
				loadTheme();
				$('.menu_main_nav_area ul').addClass('hide');
				$('ul#guest').removeClass('hide');
			});
		},
		login:function(){
			require(["views/login"], function (rtlView) {
				var view1 = new rtlView({el: content});
				view1.render();
				loadTheme();
			});
		},
		register:function(){
			require(["views/register"], function (rtlView) {
				var view1 = new rtlView({el: content});
				view1.render();
				loadTheme();
			});
		},
		course:function(){
			require(["views/course"], function (rtlView) {
				var view1 = new rtlView({el: content});
				view1.render();
				loadTheme();
			});
		},
		feedback:function(){
			require(["views/feedback"], function (rtlView) {
				var view1 = new rtlView({el: content});
				view1.render();
				loadTheme();
				$('input').rating();
			});
		},
		tables:function(){
			require(["views/tables"], function (rtlView) {
				var view1 = new rtlView({el: content});
				view1.render();
				loadTheme();
			});
		},
		makepayment:function(){
			require(["views/makepayment"], function (rtlView) {
				var view1 = new rtlView({el: content});
				view1.render();
				loadTheme();
			});
		}
	});
	

	return router;

});

function loadIndex(){
	// require(['slider'],function(){
	// 	sliderInit();

		themerex_init_actions();
			// $(document).ready(function(){
				$('div.preload').fadeOut(3000);
			// });
	// });
}

function loadTheme(){
	console.log('Loading theme..');
	themerex_init_actions();
	$('div.preload').fadeOut(3000);
}



