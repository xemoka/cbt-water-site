/*jshint unused: vars */

define(['angular', 'controllers/main', 'controllers/legend']/*deps*/, function (angular, MainCtrl, LegendCtrl)/*invoke*/ {
  'use strict';

  return angular.module('cbtWaterSiteApp', ['cbtWaterSiteApp.controllers.MainCtrl',
'cbtWaterSiteApp.controllers.LegendCtrl',
/*angJSDeps*/
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
    .config(function ($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'views/main.html',
          controller: 'MainCtrl'
        })
        .otherwise({
          redirectTo: '/'
        });
    });
});
