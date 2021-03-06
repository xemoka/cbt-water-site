/*jshint unused: vars */
require.config({
  paths: {
    angular: '../../bower_components/angular/angular',
    angularRoute: '../../bower_components/angular-route/angular-route',
    angularSanitize: '../../bower_components/angular-sanitize/angular-sanitize',
    angularResource: '../../bower_components/angular-resource/angular-resource',
    angularMocks: '../../bower_components/angular-mocks/angular-mocks',
    text: '../../bower_components/requirejs-text/text',
    lodash: '../../bower_components/lodash/dist/lodash'
  },
  shim: {
    'angular': {
      'exports': 'angular'
    },
    'angularRoute': ['angular'],
    'angularSanitize': ['angular'],
    'angularResource': ['angular'],
    'angularMocks': {
      deps: ['angular'],
      'exports': 'angular.mock'
    }
  },
  priority: [
    'angular'
  ]
});

//http://code.angularjs.org/1.2.1/docs/guide/bootstrap#overview_deferred-bootstrap
window.name = 'NG_DEFER_BOOTSTRAP!';

require([
  'angular',
  'app',
  'angularRoute',
  'angularSanitize',
  'angularResource'
], function(angular, app, ngRoutes, ngSanitize, ngResource) {
  'use strict';
  /* jshint ignore:start */
  var $html = angular.element(document.getElementsByTagName('html')[0]);
  /* jshint ignore:end */
  angular.element().ready(function() {
    angular.resumeBootstrap([app.name]);
  });
});