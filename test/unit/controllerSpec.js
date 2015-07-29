/// <reference path="angularjs/angular.d.ts" />
/// <reference path="angularjs/angular-mocks.d.ts" />
/// <reference path="jasmine/jasmine.d.ts" />
/// <reference path="karma-jasmine/karma-jasmine.d.ts" />

'use strict';

/* jasmine specs for controllers go here */
describe('PhoneCat controllers', function () {

  describe('PhoneListCtrl', function () {
    var scope, ctrl;

    beforeEach(angular.mock.module('phonecatApp'));

    beforeEach(inject(function ($controller) {
      scope = {};
      ctrl = $controller('PhoneListCtrl', { $scope: scope });
    }));

    it('should create "phones" model with 3 phones', function () {
      expect(scope.phones.length).toBe(3);
    });

    it('should set the default value of orderProp model', function () {
      expect(scope.orderProp).toBe('age');
    });

  });
});