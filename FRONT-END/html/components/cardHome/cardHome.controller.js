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

app.controller('carHomeCtrl', function(){
    var self = this;    
    self.user = {
        tipoUser: "adm"
    }

    if(self.user.tipoUser == "adm"){
        self.isAdm = true;
    }else{
        self.isAdm = false
    }
})