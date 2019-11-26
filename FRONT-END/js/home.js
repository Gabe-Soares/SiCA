app.controller('homeCtrl', function(usuarioApi){
    let self = this;
    self.userLogado = usuarioApi.teste
    console.log(self.userLogado)
    
    

})