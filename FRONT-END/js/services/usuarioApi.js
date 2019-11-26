angular.module('App').service('usuarioApi', function($http, usuarioFactory){
    let self = this;
    self.teste;

    self.inserirUsuario = (usuario) =>{
        return $http.post('/api/Usuario/Cadastro/', usuario)
    }
    self.authUsuario = (usuario) =>{
        return $http.post('/api/Usuario/Auth/', usuario)
    }
})