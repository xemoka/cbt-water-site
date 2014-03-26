define(['angular'], function(angular) {
	'use strict';

	angular.module('cbtWaterSiteApp.controllers.InfoCtrl', [])
		.controller('InfoCtrl', function($scope, Layers) {
			$scope.selected = Layers.selected;
			$scope.$watch(function() {
					return Layers.selected;
				},
				function(newVal, oldVal) {
					if (newVal && newVal !== oldVal) {
						$scope.selected = newVal;
					}
				});
			$scope.clearSelected = function() {
				$scope.selected = null;
			};
		});
});