app.component('cardHome', {
    bindings: {
        titulo: '@',
        txtBtn1: '@',
        txtBtn2: '@',
        routeBtn1: '@',
        routeBtn2: '@',
        routeNotAdm: "@"
    },
    templateUrl: '/components/cardHome/cardHome.template.html',
    controller: 'carHomeCtrl',
    controllerAs: 'ctrl'
})

app.controller('carHomeCtrl', function(usuarioApi){
    var self = this;  
    self.userLogado = usuarioApi.teste
    console.log(self.userLogado)  
})