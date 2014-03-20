/*jshint unused: vars */
define(['angular', 'angularMocks', 'app'], function(angular, mocks, app) {
  'use strict';

  describe('Service: Layers', function () {

    // load the service's module
    beforeEach(module('cbtWaterSiteApp.services.Layers'));

    // instantiate service
    var Layers;
    beforeEach(inject(function (_Layers_) {
      Layers = _Layers_;
    }));

    it('should do something', function () {
      expect(!!Layers).toBe(true);
    });

  });
});
