define(['angular'], function (angular) {
  'use strict';

  angular.module('cbtWaterSiteApp.controllers.LegendCtrl', [])
    .controller('LegendCtrl', function ($scope, Layers) {
      $scope.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
      ];
      Layers.getLayers().then(function(data) {
      	$scope.layers = data;
      })
    });
});
