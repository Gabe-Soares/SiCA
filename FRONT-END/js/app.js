var app = angular.module("App", ['ngRoute', 'ngMaterial', 'ngMessages']);
app.config(function($routeProvider, $mdThemingProvider){
  
  $mdThemingProvider.theme('default')
    .primaryPalette('teal');

  $routeProvider
    .when("/home", {
      templateUrl: '/static/html/home.html'
    })
    .when('/incluir-reserva', {
      templateUrl : '/components/incluirReservas/incluirReservas.template.html',
      controller: 'incluirReservasCtrl',
      controllerAs: 'ctrl'
    })
    .when('/incluir-eventos', {
      templateUrl: '/components/incluirEventos/incluirEventos.template.html',
      controller: 'incluirEventosCtrl',
      controllerAs: 'ctrl'
    })
    .when('/editar-reserva', {
      templateUrl: '/components/editarReserva/editarReserva.template.html',
      controller: 'editarReservaCtrl',
      controllerAs: 'ctrl'
    })
    .when('/editar-eventos', {
      templateUrl: '/components/editarEventos/editarEventos.template.html',
      controller: 'editarEventosCtrl',
      controllerAs: 'ctrl'
    })
    .otherwise({redirectTo: '/home'});
});

app.controller('appCtrl', function($http){
  var self = this;
  self.nameAplication = 'S i C A'





})





