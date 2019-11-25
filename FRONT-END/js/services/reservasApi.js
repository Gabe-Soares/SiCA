angular.module('App').service('reservaApi', function($http){
    let self = this;
        
    self.getUfBr = () => {
        return $http.get('http://servicodados.ibge.gov.br/api/v1/localidades/estados')
    }
    self.getAllReservas = () => {
        return $http.post('/api/ReservaAmbiental/ConsultaId/', {})
    }
    self.getOneReservaId = (id) => {
        return $http.post('/api/ReservaAmbiental/ConsultaId/', id)
    }
    self.getOneReservaName = (name) => {
        return $http.post('/api/ReservaAmbiental/ConsultaNome/', name)
    }
    self.setReserva = (param) => {
        return $http.post('/api/ReservaAmbiental/Cadastro/', param)
    }
})