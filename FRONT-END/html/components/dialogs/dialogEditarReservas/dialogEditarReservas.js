app.controller('dialogEditarReservasCtrl', function(reservasFactory, $mdDialog, reservaApi){
    let self = this
    self.cadastro = {
        id: reservasFactory.getItem().id_reserva,
        usuario: 1,
        nome: reservasFactory.getItem().nome,
        local: reservasFactory.getItem().local,
        tamanho: reservasFactory.getItem().tamanho,
        tipo: reservasFactory.getItem().tipo_reserva,
        saude: reservasFactory.getItem().saude_reserva,

    }
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
    self.ufBrasil = []
    self.itemEscolhido = reservasFactory.getItem();
    self.cancel = () =>{
        $mdDialog.cancel()
    }
    console.log(self.itemEscolhido)


    self.finalizarCadastro = () =>{
        console.log(self.cadastro)
        reservaApi.updateReserva(self.cadastro).then(function(response){
            console.log(response)
            self.cancel()
        })
    }
    reservaApi.getUfBr().then(function(response){
        self.ufBrasil = response.data
    })
})