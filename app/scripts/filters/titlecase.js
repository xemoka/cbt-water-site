define(['angular'], function(angular) {
	'use strict';

	angular.module('cbtWaterSiteApp.filters.Titlecase', [])
		.filter('titleCase', function() {
			return function(input) {
				if (input.charAt(1) === input.charAt(1).toUpperCase()) {
					return input;
				} else {
					return input.replace(/\w\S*/g, function(txt) {
						return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
					});
				}
			};
		});
});