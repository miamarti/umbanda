'use strict';

/**
 * @ngdoc overview
 * @name umbanda
 * @description
 * # umbanda
 *
 * Main module of the application.
 */
angular.module('umbanda', [
  'ngAnimate',
  'ngAria',
  'ngCookies',
  'ngMessages',
  'ngResource',
  'ngRoute',
  'ngSanitize',
  'ngTouch',
  'firebase',
  'ngSasGrid'
]).config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/loading.html',
    })
    .when('/home', {
      templateUrl: 'views/main.html',
      controller: 'MainCtrl',
      controllerAs: 'main'
    })
    .when('/orixas', {
      templateUrl: 'views/orixas.html',
      controller: 'OrixasCtrl'
    })
    .when('/orixas/:key', {
      templateUrl: 'views/orixa.html',
      controller: 'OrixaCtrl'
    })
    .otherwise({
      redirectTo: '/home'
    });
});

angular.module('umbanda').run(function($rootScope, $firebaseAuth, $firebaseObject){

  $rootScope.getHashLocation = function(){
    return document.location.hash;
  };

  $rootScope.isHashLocation = function(hash){
    return document.location.hash === hash;
  };

  var menu = $firebaseObject(new Firebase("https://umbanda.firebaseio.com/menu"));
  menu.$loaded().then(function() {
    $rootScope.menu = menu;
  });

  var legioes = $firebaseObject(new Firebase("https://umbanda.firebaseio.com/legioes"));
  legioes.$loaded().then(function() {
    $rootScope.legioes = legioes;
    console.log($rootScope.legioes);
  });

  var orixas = $firebaseObject(new Firebase("https://umbanda.firebaseio.com/orixas"));
  orixas.$loaded().then(function() {
    $rootScope.orixas = orixas;
  });


});