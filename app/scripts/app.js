/*jshint unused: vars */

define(['angular', 'controllers/main', 'controllers/legend', 'services/layers', 'controllers/nav', 'controllers/info']/*deps*/, function (angular, MainCtrl, LegendCtrl, LayersService, NavCtrl, InfoCtrl)/*invoke*/ {
  'use strict';

  return angular.module('cbtWaterSiteApp', ['cbtWaterSiteApp.controllers.MainCtrl',
'cbtWaterSiteApp.controllers.LegendCtrl',
'cbtWaterSiteApp.services.Layers',
'cbtWaterSiteApp.controllers.NavCtrl',
'cbtWaterSiteApp.controllers.InfoCtrl',
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
