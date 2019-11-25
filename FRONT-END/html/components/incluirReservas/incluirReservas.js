app.controller('incluirReservasCtrl', function(reservaApi){
    var self = this;
    self.saudeReserva = [
        {
            id: 1,
            descricao: 'Péssima'
        },
        {
            id: 2,
            descricao: 'Muito Ruim'
        },
        {
            id: 3,
            descricao: 'Ruim'
        },
        {
            id: 4,
            descricao: 'Semi-Ruim'
        },
        {
            id: 5,
            descricao: 'Regular'
        },
        {
            id: 6,
            descricao: 'Semi-Agradável'
        },
        {
            id: 7,
            descricao: 'Agradável'
        },
        {
            id: 8,
            descricao: 'Muito Agradável'
        },
        {
            id: 9,
            descricao: 'Semi-Perfeita'
        },
        {
            id: 10,
            descricao: 'Perfeita'
        }
    ]
    self.reservasAmbientais = []
    self.ufBrasil = []
    self.cadastro = {
        usuario: 1
    }
    self.tipoReservasBr = [
        'Parque Nacional',
        'Reserva Biológica',
        'Reserva Ecológica',
        'Estação Ecológica',
        'Áreas de Proteção Ambiental',
        'Área de Relevante Interesse Ecológico',
        'Floresta Nacional',
        'Refúgio de Vida Silvestre',
        'Reserva Extrativista',
        'Reserva da Fauna',
        'Reserva de Desenvolvimento Sustentável',
        'Reserva Particular do Patrimônio Natural'

    ]
    self.finalizarCadastro = () => {
        console.log(self.cadastro);
        reservaApi.setReserva(self.cadastro).then(function(response){
            console.log(response)
            self.cadastro = null
            window.location.href = "#!/home";
        }, 
        function(response){
            console.log(response)
        })
    }



    var teste = {
        nome: "Teste 5"
    }

    //Functions Consumindo Apis
    function buscarUfBrasil(){
        reservaApi.getUfBr()
        .then(function(response){
            self.ufBrasil = response.data
        })
    }

    //Chamadas ao iniciar pagina
    buscarUfBrasil()
    })