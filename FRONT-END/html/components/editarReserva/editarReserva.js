app.controller('editarReservaCtrl', function($http, $mdDialog){
    let self = this;
    self.reservasAll = []
    self.reservaChosen = {}
    self.itemChosen = (item) =>{
        self.reservaChosen = item
        dialogEditar()
    }








    function dialogEditar(ev){
        $mdDialog.show({
            controller: 'editarReservaCtrl',
            templateUrl: '/static//html/dialogs/dialogEditarReserva/dialogEditarReserva.template.html',
            targetEvent: ev,
          })
          .then(function(answer) {
            console.log('You said the information was "' + answer + '".');
          }, function() {
            console.log('You cancelled the dialog.');
          });
    }

    function getReservas(){
        $http.get('/api/ReservaAmbiental/ConsultaTodos/')
        .then(function(response){
            console.log(response)
            self.reservasAll = response.data
            console.log(self.reservasAll)
        }, function(response){
            console.log(response)
        })
    }



    getReservas();
})
