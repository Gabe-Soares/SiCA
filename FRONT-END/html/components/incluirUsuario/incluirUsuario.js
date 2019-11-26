app.controller('incluirUsuarioCtrl', function(usuarioApi){
    let self = this;
    self.cadastro = {
    }
    self.tipoUser = [
        'adm',
        'nv1',
        'nv2'
    ]

    self.finalizarCadastro = () => {
        self.cadastro1 = {
            imagem: 'C:/Users/Matheus/Desktop/APS/SiCA/FRONT-END/img/'+document.getElementById('image').files[0].name,
            login: self.cadastro.login,
            senha: self.cadastro.senha,
            tipo: self.cadastro.tipo
        }
        
        console.log(self.cadastro1)
        usuarioApi.inserirUsuario(self.cadastro1).then(function(response){
            console.log(response)
            window.location.href = "#!/home";
        }, function(response){
            console.log(response)
        })
        
    }

})