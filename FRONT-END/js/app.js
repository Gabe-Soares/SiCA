var app = angular.module("App", ['ngRoute', 'ngMaterial', 'ngMessages']);
app.config(function($routeProvider, $mdThemingProvider){
  
  $mdThemingProvider.theme('default')
    .primaryPalette('teal')
    .accentPalette('orange');

  $routeProvider
    .when("/home", {
      templateUrl: '/static/html/home.html'
    })
    .when('/incluir-reserva', {
      templateUrl : '/components/incluirReservas/incluirReservas.template.html',
      controller: 'incluirReservasCtrl',
      controllerAs: 'ctrl'
    })
    .otherwise({redirectTo: '/home'});
});

app.controller('appCtrl', function($http){
  var self = this;
  self.nameAplication = 'S i C A'





})





