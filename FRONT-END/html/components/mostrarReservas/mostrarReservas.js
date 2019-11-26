app.controller('mostrarReservasCtrl', function(reservaApi){
    let self = this;
    self.reservasAll = []

    reservaApi.getAllReservas().then(function(response){
        console.log(response)
        self.reservasAll = response.data
        
    })

})