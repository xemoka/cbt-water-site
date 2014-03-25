/*jshint unused: vars */
define(['angular', 'angularMocks', 'app'], function(angular, mocks, app) {
  'use strict';

  describe('Controller: LegendCtrl', function() {

    // load the controller's module
    beforeEach(module('cbtWaterSiteApp.controllers.LegendCtrl'));

    var LegendCtrl,
      scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function($controller, $rootScope) {
      scope = $rootScope.$new();
      LegendCtrl = $controller('LegendCtrl', {
        $scope: scope
      });
    }));

  });
});