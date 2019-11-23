app.controller('incluirReservasCtrl', function($http){
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
        // cadastrarReserva(self.cadastro)// chamar api de cadastro de reservas
        self.cadastro = null
    }







    //Functions Consumindo Apis
    function buscarUfBrasil(){
        $http.get('http://servicodados.ibge.gov.br/api/v1/localidades/estados')
        .then(function(response){
            self.ufBrasil = response.data
        })
    }
    function cadastrarReserva(param){
        $http.post('/api/ReservaAmbiental/Cadastro/', param)
        .then(function(response){
            console.log(response)
        }, 
        function(response){
            console.log(response.status)
        })
    }
    function buscarReservas(){
        $http.get('/api/ReservaAmbiental/ConsultaTodos/').then(
            function(response){
                self.reservasAmbientais = response.data
            },
            function(response){

            }
        )
    }
    function buscarUserId(param){
        $http.post('/api/ReservaAmbiental/ConsultaId/', testee ).then(function(response){
            console.log(response)
        }, function(response){
            console.log(response)
        })
    }
    

    //Chamadas ao iniciar pagina
    buscarUfBrasil()
    })