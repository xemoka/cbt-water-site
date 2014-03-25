define(['angular', 'lodash'], function(angular, _) {
  'use strict';

  angular.module('cbtWaterSiteApp.controllers.NavCtrl', [])
    .controller('NavCtrl', function($scope, Layers) {
      $scope.categories = {};
      Layers.getLayers().then(function(data) {
        $scope.categories.list = _.chain(data).map(function(layer) {
          return layer.categories;
        }).flatten().uniq().value();
      });
    });
});