// Declaração das variáveis.
var express = require('express'),
    app = express(),
    path =  require('path'),
    bodyParser = require('body-parser'),
    ReservaAmbientalController = require('../controller/ReservaAmbientalController');

// Declaração dos arquivos externos que o Express.js irá chamar.
app.use(bodyParser.json());
app.use('/js', express.static(path.join(__dirname, '../../FRONT-END/js')));
app.use('/html', express.static(path.join(__dirname, '../../FRONT-END/html')));
app.use('/css', express.static(path.join(__dirname, '../../FRONT-END/css')));
app.use('/cardHome', express.static(path.join(__dirname, '../../FRONT-END/html/components/cardHome')));

// Rota para chamada inicial do Front-End / home.
app.route('/index.html')
.get((req, res) => {
  res.sendFile(path.join(__dirname + '../../../FRONT-END/html/index.html'));
});

// Rota de redirecionamento para a home.
app.route('/')
.get((req, res) => {
  res.redirect('/index.html');
});

// Definição de rotas para as APIs.
app.route('/api/ReservaAmbiental/Cadastro/').post(ReservaAmbientalController.insert);
app.route('/api/ReservaAmbiental/ConsultaId/').post(ReservaAmbientalController.selectId);
app.route('/api/ReservaAmbiental/ConsultaNome/').post(ReservaAmbientalController.selectNome);

module.exports = app;