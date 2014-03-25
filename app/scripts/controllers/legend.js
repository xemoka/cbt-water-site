define(['angular', 'lodash'], function(angular, _) {
  'use strict';

  angular.module('cbtWaterSiteApp.controllers.LegendCtrl', [])
    .controller('LegendCtrl', function($scope, Layers, $routeParams) {
      Layers.getLayers().then(function(data) {

        if ($routeParams.category) {
          // filter data by category
          data = _.filter(data, function(item) {
            return _.contains(item.categories, $routeParams.category);
          });
        }
        $scope.layers = data;
      });
    });
});