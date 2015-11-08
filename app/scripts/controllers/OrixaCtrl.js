'use strict';
var Firebase = Firebase || {};

/**
* @ngdoc function
* @name umbanda.controller:MainCtrl
* @description
* # MainCtrl
* Controller of the umbanda
*/
angular.module('umbanda').controller('OrixaCtrl', function ($rootScope, $scope, $routeParams) {
	$scope.key = $routeParams.key;
	$scope.voltar = function(){
		document.location.hash = '#/orixas';
	};

	$scope.$on('youtube.player.ended', function ($event, player) {
	    // play it again
	    player.playVideo();
	});
});
