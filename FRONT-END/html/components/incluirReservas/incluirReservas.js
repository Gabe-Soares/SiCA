app.controller('incluirReservasCtrl', function($http, reservaApi){
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
            cadastrarReserva(self.cadastro)// chamar api de cadastro de reservas
            self.cadastro = null
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
    function cadastrarReserva(param){
        if(param){
            $http.post('/api/ReservaAmbiental/Cadastro/', param)
            .then(function(response){
                console.log(response)
                window.location.href = "#!/home";
            }, 
            function(response){
                console.log(response)
            })
        }
    }

    //Chamadas ao iniciar pagina
    buscarUfBrasil()
    })