app.controller('editarEventosCtrl', function(eventosApi, eventosFactory, $mdDialog){
    let self = this;
    self.teste;
    self.eventosAll = []
    self.itemChosen = (item) =>{
        eventosFactory.addItem(item.id_evento, item.desc_evento, item.data_evento, item.eventos_id_reservas,  item.causa, item.impacto, item.desc_impacto, item.consequencia, item.plano_restauracao, item.tempo_restauracao)
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
            eventosApi.getAllEventos().then(function(response){
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