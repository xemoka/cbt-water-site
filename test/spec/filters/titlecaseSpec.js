/*jshint unused: vars */
define(['angular', 'angularMocks', 'app'], function(angular, mocks, app) {
  'use strict';

  describe('Filter: titleCase', function() {

    // load the filter's module
    beforeEach(module('cbtWaterSiteApp.filters.Titlecase'));

    // initialize a new instance of the filter before each test
    var titleCase;
    beforeEach(inject(function($filter) {
      titleCase = $filter('titleCase');
    }));

    it('should return tile cased words for non-all caps content"', function() {
      var lowercase = 'angularjs';
      expect(titleCase(lowercase)).toBe('Angularjs');
      var longstring = 'angular js';
      expect(titleCase(longstring)).toBe('Angular Js');
      var abbr = 'ANGJS';
      expect(titleCase(abbr)).toBe('ANGJS');
    });

  });
});