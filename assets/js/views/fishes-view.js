/*global Backbone, jQuery, _, ENTER_KEY, ESC_KEY */
var app = app || {};

(function ($) {
	'use strict';

	// Fish Item View
	// --------------

	// The DOM element for a fish item...
	app.FishView = Backbone.View.extend({

		// Cache the template function for a single item.
		template: _.template($('#list-item-template').html()),


		// The FishView listens for changes to its model, re-rendering. Since
		// there's a one-to-one correspondence between a **Fish** and a
		// **FishView** in this app, we set a direct reference on the model for
		// convenience.
		initialize: function () {
			this.listenTo(this.model, 'change', this.render);
		},



		// Re-render the titles of the Ffsh item.
		render: function () {
			// Backbone LocalStorage is adding `id` attribute instantly after
			// creating a model.  This causes our FishView to render twice. Once
			// after creating a model and once on `id` change.  We want to
			// filter out the second redundant render, which is caused by this
			// `id` change.  It's known Backbone LocalStorage bug, therefore
			// we've to create a workaround.
			if (this.model.changed.id !== undefined) {
				return;
			}

			this.$el.html(this.template(this.model.toJSON()));
			return this;
		},


	});

})(jQuery);