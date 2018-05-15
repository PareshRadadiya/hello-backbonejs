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

		// Delegated events for creating new items, and clearing completed ones.

		// At initialization we bind to the relevant events on the `Fihes`
		// collection, when items are added or changed. Kick things off by
		// loading preexisting fishes that might be saved in *localStorage*.
		initialize: function () {

			this.$fish_menu = $('.list-of-fishes');
			this.$inventory_list = $('.fish-edit-wrap');

			this.listenTo(app.fishes, 'reset', this.addAll);
			this.listenTo(app.fishes, 'all', _.debounce(this.render, 0));

			// Suppresses 'add' events with {reset: true} and prevents the app view
			// from being re-rendered for every model. Only renders when the 'reset'
			// event is triggered at the end of the fetch.
			app.fishes.reset(sampleFishes);
		},

		// Add a single fish item to the list by creating a view for it, and
		// appending its element to the `<ul>`.
		addOne: function (fish) {

			// Render Menu item
			var fishMenuView = new app.FishMenuView({ model: fish });
			this.$fish_menu.append(fishMenuView.render().el);

			// Render Inventory item
			var inventoryListView = new app.InventoryListView({ model: fish });
			this.$inventory_list.append(inventoryListView.render().el);
		},


		// Add all items in the **Fishes** collection at once.
		addAll: function () {
			this.$fish_menu.html('');
			this.$inventory_list.html('');
			app.fishes.each(this.addOne, this);
		},

	});

})(jQuery);