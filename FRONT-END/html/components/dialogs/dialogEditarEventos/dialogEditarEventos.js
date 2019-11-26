app.controller('dialogEditarEventosCtrl', function(eventosApi, eventosFactory, $mdDialog){
    let self = this;
    self.dataAtual = new Date();
    self.reservaAll = []

    self.impactoEvento = [1,2,3,4,5,6,7,8,9,10]
    self.cadastro = {
        usuario: 1,
        id: eventosFactory.getItem().idEvento,
        causa: eventosFactory.getItem().causa,
        consequencia: eventosFactory.getItem().consequencia,
        impacto: eventosFactory.getItem().impacto,
        impacto_desc: eventosFactory.getItem().descImpacto,
        plano: eventosFactory.getItem().plano,
        tempo: eventosFactory.getItem().tempo,
        evento: eventosFactory.getItem().evento,
        reserva: eventosFactory.getItem().reserva,
        data: eventosFactory.getItem().data
        
    }
    self.cancel = () => {
        $mdDialog.cancel()
    }
    self.finalizarCadastro = function(){
        self.cadastro1 = {
            id: self.cadastro.id,
            usuario: self.cadastro.usuario,
            causa: self.cadastro.causa,
            consequencia: self.cadastro.consequencia,
            impacto: self.cadastro.impacto,
            impacto_desc: self.cadastro.impacto_desc,
            plano: self.cadastro.plano,
            tempo: self.cadastro.tempo,
            evento: self.cadastro.evento,
            reserva: self.cadastro.reserva,
            data: self.dataAtual.getFullYear() + "-" + self.dataAtual.getMonth() + "-" + self.dataAtual.getDate()
        }
        console.log(self.cadastro1);
        eventosApi.updateEvento(self.cadastro1).then(function(response){
            console.log(response);
            self.cancel()
        }, function(response){
            console.log(response)
        })
    }
    self.itemEscolhido = eventosFactory.getItem()
    console.log(self.itemEscolhido)
    
})