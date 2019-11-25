app.controller('editarEventosCtrl', function(eventosApi){
    let self = this;
    self.teste;
    self.eventosAll = []
    self.itemChosen = (item) =>{
        reservasFactory.addItem(item.id_reserva, item.nome, item.local,  item.tamanho, item.tipo_reserva, item.saude_reserva)
        console.log(item)
        self.showAdvanced()
    }
    self.showAdvanced = function(ev) {
        $mdDialog.show({
          templateUrl: '/components/dialogs/dialogEditarEventos/dialogEditarEvento.template.html',
          controller: 'dialogEditarEventosCtrl',
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

      eventosApi.getAllEventos().then(function(response){
        self.eventosAll = response.data  
        console.log(self.eventosAll)
    });



})