define(['angular'], function (angular) {
  'use strict';

  angular.module('cbtWaterSiteApp.services.Layers', [])
	.factory('Layers', function Layers($http) {
		// AngularJS will instantiate a singleton by calling "new" on this function
		return {
			getLayers: function() {
				return $http.get('data/layers.json').then(function(data){
					return data.data;
				});
			}
		}
	});
});
