/* global Backbone */
var app = app || {};

(function($){
	'use strict';

	// Fish Collection
	//----------------

	// The collection of fishes backed by sample-fishes.js instead of remote or localStorage

	var Fishes = Backbone.Collection.extend({
		// Reference to this collection model
		model: app.Fish

	});

	// Create global collection of "Fishes"
	app.fishes = new Fishes();

})(jQuery);