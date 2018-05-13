/*global Backbone, jQuery, _, ENTER_KEY, ESC_KEY */
var app = app || {};

(function ($) {
	'use strict';

	// Inventory View
	// --------------

	// The DOM element for a Inventory item...
	app.InventoryListView = Backbone.View.extend({

		className: 'fish-edit',

		// Cache the template function for a single item.
		template: _.template($('#fish-edit-template').html()),

		// At initialization we bind to the relevant events on the `Fish`
		// collection, when items are added or changed. Kick things off by
		// loading preexisting fishes that might be saved in *localStorage*.
		initialize: function () {
			this.listenTo(this.model, 'change', this.render);
		},

		// Re-render the Fish item.
		render: function () {
			if (this.model.changed.id !== undefined) {
				return;
			}

			this.$el.html(this.template(this.model.toJSON()));
			return this;
		},

	});

})(jQuery);