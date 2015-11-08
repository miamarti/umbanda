'use strict';
var Firebase = Firebase || {};

/**
* @ngdoc function
* @name umbanda.controller:MainCtrl
* @description
* # MainCtrl
* Controller of the umbanda
*/
angular.module('umbanda').controller('ClienteCtrl', function ($rootScope, $scope, $routeParams, $firebaseArray, $firebaseObject) {

 	$scope.produtoValor = {};

	var clientesFire;
	var clienteValoresFire;
	var clientes;
	var $this = {
		main: function(){
	 		clientesFire = new Firebase("https://agropecuariaterramax.firebaseio.com/clientes");
	 		clienteValoresFire = new Firebase("https://agropecuariaterramax.firebaseio.com/clientes/" + $routeParams.id + '/valores');
	 		$this.load();
		},

		load: function(){
 			clientes = $firebaseObject(clientesFire);
		 	clientes.$loaded().then(function(){
				$scope.cliente = clientes[$routeParams.id];
		 		if(!$scope.cliente.hasOwnProperty('valores')){
		 			$scope.cliente['valores'] = [];
		 		}
		 	});
		 	$scope.valores = $firebaseArray(clienteValoresFire);
		},

		save: function(){
			clientes.$save().then(function(ref) {
			  	console.info('Suas alterações foram salvas com sucesso!');
			}, function(error) {
				alert('Problemas ao salvar este registro');
			  	console.error("Error:", error);
			});
	 	},

	 	addValor: function(){
			$scope.valores.$add($scope.produtoValor).then(function(){
				$scope.produtoValor = {};
			});
	 	},

	 	removeValor: function(obj){
	 		$scope.valores.$remove(obj).then(function(ref) {
			  if(ref.key() !== obj.$id){
			  	alert('Problemas ao remover este registro');
			  }
			});
	 	}
	};
	$this.main();

 	$scope.save = $this.save.bind($this);
 	$scope.addValor = $this.addValor.bind($this);
 	$scope.removeValor = $this.removeValor.bind($this);
});
