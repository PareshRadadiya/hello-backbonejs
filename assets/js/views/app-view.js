
/*global Backbone, jQuery, _, ENTER_KEY */
var app = app || {};

(function ($) {
	'use strict';


	// The Application
	// ---------------

	// Our overall **AppView** is the top-level piece of UI.
	app.AppView = Backbone.View.extend({


		// Instead of generating a new element, bind to the existing skeleton of
		// the App already present in the HTML.
		el: '#main',


		// At initialization we bind to the relevant events on the `Todos`
		// collection, when items are added or changed. Kick things off by
		// loading any preexisting todos that might be saved in *localStorage*.
		initialize: function () {

			this.$list = $('.list-of-fishes');

			this.listenTo(app.fishes, 'reset', this.addAll);
			this.listenTo(app.fishes, 'all', _.debounce(this.render, 0));

			// Suppresses 'add' events with {reset: true} and prevents the app view
			// from being re-rendered for every model. Only renders when the 'reset'
			// event is triggered at the end of the fetch.
			app.fishes.reset(sampleFishes);
		},

		// Add a single todo item to the list by creating a view for it, and
		// appending its element to the `<ul>`.
		addOne: function (fish) {
			var view = new app.FishView({ model: fish });
			this.$list.append(view.render().el);
		},


		// Add all items in the **Todos** collection at once.
		addAll: function () {
			this.$list.html('');
			app.fishes.each(this.addOne, this);
		},




	});


})(jQuery);