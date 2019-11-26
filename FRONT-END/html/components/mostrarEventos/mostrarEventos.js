app.controller('mostrarEventosCtrl', function(eventosApi){
    let self = this
    self.eventosAll = []
    eventosApi.getAllEventos().then(function(response){
        self.eventosAll = response.data
    })

})