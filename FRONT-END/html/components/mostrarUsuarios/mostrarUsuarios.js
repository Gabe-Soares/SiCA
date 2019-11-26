app.controller('mostrarUsuariosCtrl', function(usuarioApi){
    let self = this
    self.usuarioAll = []

    usuarioApi.getAllUser().then(function(response){
        console.log(response)
        self.usuarioAll = response.data
    })

})