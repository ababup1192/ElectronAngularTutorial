/// <reference path="angularjs/angular.d.ts" />
/// <reference path="angularjs/angular-mocks.d.ts" />
/// <reference path="jasmine/jasmine.d.ts" />
/// <reference path="karma-jasmine/karma-jasmine.d.ts" />

'use strict';

/* jasmine specs for controllers go here */
describe('PhoneCat controllers', function() {

  describe('PhoneListCtrl', function(){

    beforeEach(angular.mock.module('phonecatApp'));

    it('should create "phones" model with 3 phones', inject(function($controller) {
      var scope = {},
          ctrl = $controller('PhoneListCtrl', {$scope:scope});

      expect(scope.phones.length).toBe(3);
    }));

  });
});