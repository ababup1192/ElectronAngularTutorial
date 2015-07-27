/// <reference path="angularjs/angular.d.ts" />
/// <reference path="jquery/jquery.d.ts" />

var phonecatApp: ng.IModule = angular.module('phonecatApp', []);

phonecatApp.controller('PhoneListCtrl', function($scope){
	$scope.phones = [
		{'name': 'Nexus S',
		 'snippet': 'Fast just got faster with Nexus S.'},
		{'name': 'Motorola XOOM™ with Wi-Fi',
		 'snippet': 'The Next, Next Generation tablet.'},
		{'name': 'Motorola XOOM™',
		 'snippet': 'The Next, Next Generation tablet.'}
	]
});