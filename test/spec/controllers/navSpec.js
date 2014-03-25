/*jshint unused: vars */
define(['angular', 'angularMocks', 'app'], function(angular, mocks, app) {
  'use strict';

  describe('Controller: NavCtrl', function() {

    // load the controller's module
    beforeEach(module('cbtWaterSiteApp.controllers.NavCtrl'));

    var NavCtrl,
      scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function($controller, $rootScope) {
      scope = $rootScope.$new();
      NavCtrl = $controller('NavCtrl', {
        $scope: scope
      });
    }));

  });
});