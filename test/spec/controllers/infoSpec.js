/*jshint unused: vars */
define(['angular', 'angularMocks', 'app'], function(angular, mocks, app) {
  'use strict';

  describe('Controller: InfoCtrl', function() {

    // load the controller's module
    beforeEach(module('cbtWaterSiteApp.controllers.InfoCtrl'));

    var InfoCtrl,
      scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function($controller, $rootScope) {
      scope = $rootScope.$new();
      InfoCtrl = $controller('InfoCtrl', {
        $scope: scope
      });
    }));

  });
});