app.controller('editarReservaCtrl', function(reservaApi){
    let self = this;
    self.reservasAll = []
    self.reservaChosen = {}
    self.itemChosen = (item) =>{
        self.reservaChosen = item
        console.log(self.reservaChosen)
    }
    reservaApi.getAllReservas().then(function(response){
        self.reservasAll = response.data   
        console.log(response)
    });
})
