define(['angular'], function(angular) {
  'use strict';

  angular.module('cbtWaterSiteApp.services.Layers', [])
    .factory('Layers', function Layers($http) {
      // AngularJS will instantiate a singleton by calling "new" on this function
      var selected = {};
      return {
        getLayers: function() {
          var layers = $http.get('data/layers.json').then(function(response) {
            return response.data;
          });
          return layers;
        },
        selected: selected
      };
    });
});