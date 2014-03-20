/*jshint unused: vars */

define(['angular', 'controllers/main']/*deps*/, function (angular, MainCtrl)/*invoke*/ {
  'use strict';

  return angular.module('cbtWaterSiteApp', ['cbtWaterSiteApp.controllers.MainCtrl',
/*angJSDeps*/
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
    .config(function ($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'views/main.html',
          controller: 'MainController'
        })
        .otherwise({
          redirectTo: '/'
        });
    });
});
