'use strict';
var Firebase = Firebase || {};

/**
 * @ngdoc function
 * @name umbanda.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the umbanda
 */
angular.module('umbanda').controller('OrixasCtrl', function ($rootScope, $scope) {
	$scope.open = function(obj){
		document.location.hash = '#/orixas/' + obj.key;
	};
});
