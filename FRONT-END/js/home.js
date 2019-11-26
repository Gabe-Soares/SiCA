app.controller('homeCtrl', function(usuarioApi){
    let self = this;
    self.userLogado = usuarioApi.teste
    usuarioApi.updateLogout(true)
    console.log(self.userLogado)
    
    

})