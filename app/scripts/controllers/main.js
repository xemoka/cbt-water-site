define(['angular'], function (angular) {
  'use strict';

  angular.module('cbtWaterSiteApp.controllers.MainCtrl', [])
    .controller('MainController', function ($scope) {
      $scope.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
      ];
    })
    .controller('MapController');
});
