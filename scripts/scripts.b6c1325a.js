"use strict";angular.module("umbanda",["ngAnimate","ngAria","ngCookies","ngMessages","ngResource","ngRoute","ngSanitize","ngTouch","firebase","ngSasGrid","youtube-embed"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/loading.html"}).when("/home",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main"}).when("/orixas",{templateUrl:"views/orixas.html",controller:"OrixasCtrl"}).when("/orixas/:key",{templateUrl:"views/orixa.html",controller:"OrixaCtrl"}).otherwise({redirectTo:"/home"})}]),angular.module("umbanda").run(["$rootScope","$firebaseAuth","$firebaseObject",function(a,b,c){a.getHashLocation=function(){return document.location.hash},a.isHashLocation=function(a){return document.location.hash===a};var d=c(new Firebase("https://umbanda.firebaseio.com/menu"));d.$loaded().then(function(){a.menu=d});var e=c(new Firebase("https://umbanda.firebaseio.com/legioes"));e.$loaded().then(function(){a.legioes=e,console.log(a.legioes)});var f=c(new Firebase("https://umbanda.firebaseio.com/orixas"));f.$loaded().then(function(){a.orixas=f})}]);var Firebase=Firebase||{};angular.module("umbanda").controller("MainCtrl",["$rootScope","$scope",function(a,b){}]);var Firebase=Firebase||{};angular.module("umbanda").controller("OrixasCtrl",["$rootScope","$scope",function(a,b){b.open=function(a){document.location.hash="#/orixas/"+a.key}}]);var Firebase=Firebase||{};angular.module("umbanda").controller("OrixaCtrl",["$rootScope","$scope","$routeParams",function(a,b,c){b.key=c.key,b.voltar=function(){document.location.hash="#/orixas"},b.$on("youtube.player.ended",function(a,b){b.playVideo()})}]),angular.module("umbanda").run(["$templateCache",function(a){a.put("views/cliente.html",'<div class="row marketing"> <form class="form-horizontal" ng-submit="save()"> <div class="form-group"> <label class="col-sm-2 control-label" for="nome">Nome</label> <div class="col-sm-10"> <input type="text" ng-model="cliente.nome" class="form-control" id="nome" placeholder="Nome" required> </div> </div> <div class="form-group"> <label class="col-sm-2 control-label" for="fone">Telefone</label> <div class="col-sm-10"> <input type="text" ng-model="cliente.fone" class="form-control" id="fone" placeholder="Telefone"> </div> </div> <div class="form-group"> <label class="col-sm-2 control-label" for="email">Email</label> <div class="col-sm-10"> <input type="email" ng-model="cliente.email" class="form-control" id="email" placeholder="Email"> </div> </div> </form> </div> <hr> <div class="row marketing"> <ul class="nav nav-tabs"> <li role="presentation" class="active"><a>Valores Pré-Aprovados</a></li> <li role="presentation"><a>Produtos / Compras</a></li> </ul> <div id="valores" class="row marketing"> <form class="form-inline" ng-submit="addValor()"> <div class="form-group"> <label class="sr-only" for="fone">Nome</label> <input type="text" ng-model="produtoValor.nome" class="form-control" id="fone" placeholder="Nome" required> </div> <div class="form-group"> <label class="sr-only" for="valorVista">Valor Vista</label> <input type="number" step="any" ng-model="produtoValor.valorVista" class="form-control" id="valorVista" placeholder="Valor Vista" required> </div> <div class="form-group"> <label class="sr-only" for="valorPrazo">Valor Prazo</label> <input type="number" step="any" ng-model="produtoValor.valorPrazo" class="form-control" id="valorPrazo" placeholder="Valor Prazo" required> </div> <button type="submit" class="btn btn-default">Incluir</button> </form> </div> <div class="row marketing"> <table class="table table-striped"> <tbody> <tr ng-repeat="data in valores"> <td>{{data.nome}}</td> <td>{{data.valorVista}}</td> <td>{{data.valorPrazo}}</td> <td> <span class="glyphicon glyphicon-trash" ng-click="removeValor(data)"></span> </td> </tr> </tbody> </table> </div> </div> <hr> <div class="row marketing"> <button type="button" ng-click="save()" class="btn btn-default">Salvar</button> </div>'),a.put("views/clientes.html",'<div class="row marketing"> <form class="form-inline" ng-submit="add()"> <div class="form-group"> <label class="sr-only" for="nome">Nome</label> <input type="text" ng-model="cliente.nome" class="form-control" id="nome" placeholder="Nome" required> </div> <div class="form-group"> <label class="sr-only" for="fone">Telefone</label> <input type="text" ng-model="cliente.fone" class="form-control" id="fone" placeholder="Telefone"> </div> <div class="form-group"> <label class="sr-only" for="email">Email</label> <input type="email" ng-model="cliente.email" class="form-control" id="email" placeholder="Email"> </div> <button type="submit" class="btn btn-default">Incluir</button> </form> </div> <div class="row marketing"> <table class="table table-striped"> <thead> <tr> <th ng-repeat="key in getClientesThead()">{{$root.captions[key]}}</th> <th></th> </tr> </thead> <tbody> <tr ng-repeat="data in clientes"> <td class="click" ng-repeat="key in getClientesThead()" ng-click="edit(data)">{{data[key]}}</td> <td> <span class="glyphicon glyphicon-trash" ng-click="remove(data)"></span> </td> </tr> </tbody> </table> </div>'),a.put("views/gridTemplate.html","<td>{{$obj.nDoc}}</td> <td>{{$obj.tipoSeguro}}</td> <td>{{$obj.placa}}</td>"),a.put("views/header.html",'<div class="header"> <div class="navbar navbar-default" role="navigation"> <div class="container"> <div ng-include="\'views/menu.html\'"></div> </div> </div> </div>'),a.put("views/loading.html","<script>setTimeout(function(){\n	document.location.hash = '#/home';\n}, 2000);</script>"),a.put("views/main.html",'<div ng-include="\'views/header.html\'"></div> <!--\n<div class="jumbotron">\n  <h1></h1>\n  <p class="lead"></p>\n</div>\n-->'),a.put("views/menu.html",'<div class="navbar-header"> <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#js-navbar-collapse"> <span class="sr-only">Toggle navigation</span> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span> </button> <a href="#/"><img src="images/g3941-3-6-6.ceaa2a20.png" class="logo"></a> </div> <div class="collapse navbar-collapse" id="js-navbar-collapse"> <ul class="nav navbar-nav" style="height: 51px"> <li ng-repeat="data in $root.menu" ng-class="{\'active\': $root.isHashLocation(\'{{data.link}}\')}"> <a href="{{data.link}}">{{data.name}}</a> </li> </ul> </div>'),a.put("views/orixa.html",'<div ng-include="\'views/header.html\'"></div> <div class="jumbotron orixa"> <div class="orixa-name"> {{$root.orixas[key].name}} <div class="close" ng-click="voltar()">X</div> </div> <div class="orixa-foto"><img src="{{$root.orixas[key].img}}"></div> <div class="orixa-info">{{$root.orixas[key].info}}</div> <div class="orixa-info" ng-show="$root.orixas[key].legioes"> 7 Legiões: <ul> <li ng-repeat="data in $root.orixas[key].legioes" ng-show="data">{{data}}</li> </ul> </div> <div class="orixa-info" ng-show="$root.orixas[key].youtube"> Ponto Cantado: <div class="embed-responsive embed-responsive-16by9"> <youtube-video video-id="$root.orixas[key].youtube"></youtube-video> </div> </div> </div>'),a.put("views/orixas.html",'<div ng-include="\'views/header.html\'"></div> <div class="jumbotron"> <div style="text-align: left"> <h1>Os Sete Orixás</h1> </div> <div style="text-align: left"> <h2>Linhas ou Vibrações</h2> </div> <p class="lead"> <div class="card" ng-repeat="data in $root.orixas" ng-click="open(data)"> <div class="name">{{data.name}}</div> <div class="foto"><img src="{{data.img}}"></div> <hr> <div class="info">{{data.info}}</div> <div class="ref" ng-show="data.ref"> <a href="{{data.ref}}" target="_blank"> <span class="glyphicon glyphicon-link" aria-hidden="true"></span> </a> </div> </div> </p> </div>')}]);