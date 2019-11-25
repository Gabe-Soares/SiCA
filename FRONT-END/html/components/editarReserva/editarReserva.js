app.controller('editarReservaCtrl', function(reservaApi, $mdDialog, reservasFactory){
    let self = this;
    self.teste;
    self.reservasAll = []
    self.itemChosen = (item) =>{
        reservasFactory.addItem(item.id_reserva, item.nome, item.local,  item.tamanho, item.tipo_reserva, item.saude_reserva)
        console.log(item)
        self.showAdvanced()
    }
    self.showAdvanced = function(ev) {
        $mdDialog.show({
          templateUrl: '/components/dialogs/dialogEditarReservas/dialogEditarReserva.template.html',
          controller: 'dialogEditarReservasCtrl',
          controllerAs: 'ctrl',
          parent: angular.element(document.body),
          targetEvent: ev,
          fullscreen: true
        })
        .then(function() {
          
        }, function() {
            reservaApi.getAllReservas().then(function(response){
                self.reservasAll = response.data  
            });
          console.log('Dialog cancelado.');
        });
      };

    reservaApi.getAllReservas().then(function(response){
        self.reservasAll = response.data  
    });



})