angular.module('App').factory('eventosFactory', function(){
    var teste = {}
    var addItem = function(idEvento, evento, data, reserva, causa, impacto, descImpacto, consequencia, plano, tempo){
          var item = {
            idEvento: idEvento,
            evento: evento, 
            data: data, 
            reserva: reserva, 
            causa: causa, 
            impacto: impacto, 
            descImpacto: descImpacto, 
            consequencia: consequencia, 
            plano: plano, 
            tempo: tempo
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