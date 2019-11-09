var app = angular.module("App", ['ngRoute']);
app.controller('appCtrl', function(){
  var self = this;
  self.nameAplication = 'S i C A'

})
app.config(function($routeProvider){
  $routeProvider
    .when("/home", {
      template: "<card-home/>"
    })
    .otherwise({redirectTo: '/'});
});