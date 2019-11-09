var express = require('express'),
    app = express(),
    path =  require('path'),
    bodyParser = require('body-parser'),
    ReservaAmbientalController = require('../controller/ReservaAmbientalController');

  app.use(bodyParser.json());

  app.route('/')
    .get((req, res) => {
      res.sendFile(path.join(__dirname + '../../../FRONT-END/html/index.html'));
    });

app.route('/api/ReservaAmbiental/Cadastro/').post(ReservaAmbientalController.insert);  
  
module.exports = app;