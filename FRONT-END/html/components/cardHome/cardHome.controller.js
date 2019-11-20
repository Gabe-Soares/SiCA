app.component('cardHome', {
    bindings: {
        titulo: '@',
        txtBtn1: '@',
        txtBtn2: '@',
        routeBtn1: '@',
        routeBtn2: '@'
    },
    templateUrl: '/components/cardHome/cardHome.template.html',
    controller: 'carHomeCtrl',
    controllerAs: 'ctrl'
})

app.controller('carHomeCtrl', function(){
    var self = this;
    
})