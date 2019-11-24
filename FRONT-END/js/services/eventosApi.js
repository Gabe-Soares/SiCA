angular.module('App').service('eventosApi', function($http){
    let self = this;

    self.getAllEvntos = () => {
        return $http.post('/api/Eventos/ConsultaId/', {})
    }
    self.getOneEventoId = (id) => {
        return $http.post('/api/Eventos/ConsultaId/', id)
    }
    self.getOneEventoName = (name) => {
        return $http.post('/api/Eventos/ConsultaEvento/', name)
    }

    self.setEvento = (evento) => {
        return $http.post('/api/Eventos/Cadastro/', evento)
    }
})