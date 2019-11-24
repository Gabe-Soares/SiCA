app.controller('incluirEventosCtrl', function(reservaApi, eventosApi){
    let self = this;
    self.impactoEvento = [1,2,3,4,5,6,7,8,9,10]
    self.reservasAll = []
    self.dataAtual = new Date();
    self.cadastro = {
        usuario: 1
    }
    self.finalizarCadastro = function(){
        self.cadastro1 = {
            usuario: self.cadastro.usuario,
            causa: self.cadastro.causa,
            consequencia: self.cadastro.consequencia,
            impacto: self.cadastro.impacto,
            impacto_desc: self.cadastro.impacto_desc,
            plano: self.cadastro.plano,
            tempo: self.cadastro.tempo,
            evento: self.cadastro.evento,
            reserva: self.cadastro.reserva,
            data: self.dataAtual.getFullYear()+"-"+(self.dataAtual.getMonth()+1)+"-"+self.dataAtual.getDate()
        }
        eventosApi.setEvento(self.cadastro1).then(function(response){
            console.log(response);
            self.cadastro1 = {}
            window.location.href = "#!/home";
        }, function(response){
            alert(response)
        })
    }

    reservaApi.getAllReservas().then(function(response){
        self.reservasAll = response.data
    })
})