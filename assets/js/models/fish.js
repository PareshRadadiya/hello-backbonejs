/*global Backbone */
var app = app || {};

(function () {
	'use strict';

	// Fish Model
	// ----------

	// Our basic **Fish** model has `title`, `order`, and `completed` attributes.
	app.Fish = Backbone.Model.extend({
		// Default attributes for the fish
		// and ensure that each fish created has `title` and `completed` keys.
		defaults: {
			name: '',
			image: '',
			desc: '',
			price: 0,
			status: 'unknown'
		},

	});
})();
