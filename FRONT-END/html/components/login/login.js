app.controller('loginCtrl', function(usuarioApi, usuarioFactory){
    let self = this;
    self.cadastro = {}
    self.authLogin = () => {
        self.cadastro1 = {
            imagem: 'C:/Users/Matheus/Desktop/APS/SiCA/FRONT-END/img/'+document.getElementById('image').files[0].name,
            login: self.cadastro.login,
            senha: self.cadastro.senha
        }
        usuarioApi.authUsuario(self.cadastro1).then(function(response){
            console.log(response)
        })
    }
})