app.controller("mostrarEventosCtrl", function(eventosApi){
    let self = this;
    self.eventosAll = [];
    eventosApi.getAllEventos().then(function(response){
        console.log(response);
    })
})