var express = require('express'),
    app = express(),
    path =  require('path'),
    ReservaAmbientalController = require('../controller/ReservaAmbientalController');

  app.route('/')
    .get((req, res) => {
      res.sendFile(path.join(__dirname + '../../../FRONT-END/html/index.html'));
    });
<<<<<<< HEAD

app.route('/api/ReservaAmbiental/Cadastro/').post(ReservaAmbientalController.insert);  
  
=======
>>>>>>> 91600648d0003f97d93a516617a8585b223ac657
module.exports = app;