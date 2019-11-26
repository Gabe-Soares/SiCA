var app = angular.module("App", ['ngRoute', 'ngMaterial', 'ngMessages']);
app.config(function($routeProvider, $mdThemingProvider, $mdDateLocaleProvider){
  
  $mdThemingProvider.theme('default')
    .primaryPalette('teal');

    $mdDateLocaleProvider.formatDate = function (date) {
      return moment(date).format('DD/MM/YYYY');
  };
  $routeProvider
    .when("/home", {
      templateUrl: '/static/html/home.html',
      controller: 'homeCtrl',
      controllerAs: 'ctrl'
    })
    .when('/login', {
      templateUrl: '/components/login/login.template.html',
      controller: 'loginCtrl',
      controllerAs: 'ctrl'
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
    .when('/vizualizar-reservas', {
      templateUrl: '/components/mostrarReservas/mostrarReservas.template.html',
      controller: 'mostrarReservasCtrl',
      controllerAs: 'ctrl'
    })
    .when('/mostrar-eventos', {
      templateUrl: '/components/mostrarEventos/mostrarEventos.template.html',
      controller: 'mostrarEventosCtrl',
      controllerAs: 'ctrl'
    })
    .when('/vizualizar-usuarios', {
      templateUrl: '/components/mostrarUsuarios/mostrarUsuarios.template.html',
      controller: 'mostrarUsuariosCtrl',
      controllerAs: 'ctrl'
    })
    .when('/incluir-usuario', {
      templateUrl: '/components/incluirUsuario/incluirUsuario.template.html',
      controller: 'incluirUsuarioCtrl',
      controllerAs: 'ctrl'
    })
    .otherwise({redirectTo: '/login'});
});

app.controller('appCtrl', function($http){
  var self = this;
  self.nameAplication = 'S i C A'





})





