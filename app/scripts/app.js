/*jshint unused: vars */

define(['angular', 'controllers/main']/*deps*/, function (angular, MainController)/*invoke*/ {
  'use strict';

  return angular.module('cbtWaterSiteApp', ['cbtWaterSiteApp.controllers.MainController',
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
