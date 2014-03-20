define(['angular'], function(angular) {
  'use strict';

  angular.module('cbtWaterSiteApp.controllers.LegendCtrl', [])
    .controller('LegendCtrl', function($scope, Layers) {
      Layers.getLayers().then(function(data) {
        $scope.layers = data;
      });
    });
});