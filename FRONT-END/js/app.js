var app = angular.module("App", ['ngRoute', 'ngMaterial', 'ngMessages']);
app.controller('appCtrl', function(){
  var self = this;
  self.nameAplication = 'S i C A'
  self.go = (path) => {
    $location.path(path)
  }
})
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

