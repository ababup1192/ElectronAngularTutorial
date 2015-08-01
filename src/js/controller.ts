/// <reference path="angularjs/angular.d.ts" />
/// <reference path="jquery/jquery.d.ts" />

var phonecatApp: ng.IModule = angular.module('phonecatApp', []);

phonecatApp.controller('PhoneListCtrl', function($scope, $http){
	$http.get('phones/phones.json').success(function(data){
		$scope.phones = data;
	});

	$scope.orderProp = 'age';
});