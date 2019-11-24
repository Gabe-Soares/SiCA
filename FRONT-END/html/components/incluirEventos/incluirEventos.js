app.controller('incluirEventosCtrl', function(){
    let self = this;
    self.dataAtual = new Date()
    self.finalizarCadastro = function(){
        console.log(self.dataAtual.getDate()+"-"+self.dataAtual.getMonth()+"-"+self.dataAtual.getFullYear())
    }
    // Date.parse(self.cadastro.data)
    self.cadastro = {
    }
})