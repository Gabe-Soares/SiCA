angular.module('App').factory('reservasFactory', function(){
    var teste = {}
    var addItem = function(id_reserva, nome, local, tamanho, tipo_reserva, saude_reserva){
         var item = {
             id_reserva: id_reserva,
             nome: nome,
             local: local,
             tamanho: tamanho,
             tipo_reserva,
             saude_reserva
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