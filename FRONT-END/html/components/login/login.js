app.controller('loginCtrl', function(usuarioApi, usuarioFactory){
    let self = this;
    self.cadastro = {}
    self.authLogin = () => {
        self.cadastro1 = {
            imagem: 'C:/Users/gabri/Desktop/SiCA/DOCS/imagens/'+document.getElementById('image').files[0].name,
            login: self.cadastro.login,
            senha: self.cadastro.senha
        }
        usuarioApi.authUsuario(self.cadastro1).then(function(response){
            usuarioApi.teste = response.data[0]
            console.log(usuarioApi.teste)
            if(usuarioApi.teste){
                window.location.href = "#!/home";
            }else{
                alert('usuario incorreto')
            }
        })
    }
})