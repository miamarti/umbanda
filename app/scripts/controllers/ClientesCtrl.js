'use strict';
var Firebase = Firebase || {};

/**
 * @ngdoc function
 * @name umbanda.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the umbanda
 */
 angular.module('umbanda').controller('ClientesCtrl', function ($rootScope, $scope, $location, $firebaseArray) {

 	var clientesFire = new Firebase("https://agropecuariaterramax.firebaseio.com/clientes");
 	var query = clientesFire.orderByChild("timestamp").limitToLast(25);
 	$scope.clientes = $firebaseArray(query);

 	$scope.getClientesThead = function(){
 		var clientesThead = [];
 		for(var key in $scope.clientes[0]){
 			if(!new RegExp('[\$]', 'gi').test(key) && key !== 'valores' && key !== 'produtos'){
 				clientesThead.push(key);
 			}
 		}
 		return clientesThead;
 	};

 	$scope.add = function(){
		$scope.clientes.$add($scope.cliente).then(function(){
			$scope.cliente = {};
		});
 	};

 	$scope.remove = function(obj){
 		$scope.clientes.$remove(obj).then(function(ref) {
		  if(ref.key() !== obj.$id){
		  	alert('Problemas ao remover este registro');
		  }
		});
 	};

 	$scope.edit = function(obj){
 		$location.path('/cliente/' + obj.$id);
 	};

});
