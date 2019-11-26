angular.module('App').factory('usuarioFactory', function(){
    var teste = {}
    var addItem = function(login, senha, imagem, tipo){
         var item = {
             login: login,
             senha: senha,
             imagem: imagem,
             tipo_usuario: tipo
         }
         teste = item
     }
     var getItem = function(){
         return teste
     }
     return {
         addItem: addItem,
         getItem: getItem
     }
})