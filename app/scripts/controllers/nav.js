define(['angular'], function (angular) {
  'use strict';

  angular.module('cbtWaterSiteApp.controllers.NavCtrl', [])
    .controller('NavCtrl', function ($scope, Layers) {
    	$scope.categories = {};
    	$scope.categories.list = ["test", "this"];
    });
});
