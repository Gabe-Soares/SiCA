var app = angular.module("App", ['ngRoute']);

app.config(function($routeProvider){
  $routeProvider.when('/', {
    templateUrl: 'index.html',
    controller: 'appCtrl'
  })
  .when('/cadR', {
    templateUrl: 'pages/cadReserva/cadReserva.html'
  })
  .otherwise({redirectTo: '/'})
})