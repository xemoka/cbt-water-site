/*jshint unused: vars */

define(['angular', 'controllers/main', 'controllers/legend', 'services/layers']/*deps*/, function (angular, MainCtrl, LegendCtrl, LayersService)/*invoke*/ {
  'use strict';

  return angular.module('cbtWaterSiteApp', ['cbtWaterSiteApp.controllers.MainCtrl',
'cbtWaterSiteApp.controllers.LegendCtrl',
'cbtWaterSiteApp.services.Layers',
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
