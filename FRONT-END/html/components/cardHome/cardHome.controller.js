app.component('cardHome', {
    bindings: {
        titulo: '@'
    },
    templateUrl: '/components/cardHome/cardHome.template.html',
    controller: 'carHomeCtrl',
    controllerAs: 'ctrl'
})

app.controller('carHomeCtrl', function(){
    var self = this;
    
})