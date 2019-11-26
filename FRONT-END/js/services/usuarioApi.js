angular.module('App').service('usuarioApi', function($http, usuarioFactory){
    let self = this;
    self.teste;
    self.logout = false;

    self.updateLogout = (param) =>{
        self.logout = param;
    }
    self.inserirUsuario = (usuario) =>{
        return $http.post('/api/Usuario/Cadastro/', usuario)
    }
    self.authUsuario = (usuario) =>{
        return $http.post('/api/Usuario/Auth/', usuario)
    }
    self.getAllUser = () => {
        return $http.post('/api/Usuario/ConsultaId/', {})
    }
})