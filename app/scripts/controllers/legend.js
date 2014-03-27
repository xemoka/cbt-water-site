define(['angular', 'lodash'], function(angular, _) {
  'use strict';

  angular.module('cbtWaterSiteApp.controllers.LegendCtrl', [])
    .controller('LegendCtrl', function($scope, Layers, $routeParams) {
      $scope.enabledLayers = Layers.enabledLayers;
      $scope.routefilter = $routeParams.category;

      Layers.getLayers().then(function(data) {
        $scope.layers = data;
      });

      // filter data by category
      $scope.filterCategory = function(category) {
        return function(layer) {
          _.contains(layer.categories, category);
        }
      }

      $scope.selectLayer = function(item) {
        Layers.selected = item;
      };

      $scope.toggleLayer = function(layer) {
        if (_.contains($scope.enabledLayers, layer.name)) {
          $scope.enabledLayers = _.without($scope.enabledLayers, layer.name);
        } else {
          $scope.enabledLayers.push(layer.name);
        }
        console.log($scope.enabledLayers);
      };

      $scope.checkboxStatus = function(layer) {
        if (_.contains($scope.enabledLayers, layer.name)) {
          return true;
        }
      };
    });
});