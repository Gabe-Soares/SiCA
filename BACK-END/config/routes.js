var express = require('express'),
    app = express(),
    path =  require('path'),
    bodyParser = require('body-parser'),
    ReservaAmbientalController = require('../controller/ReservaAmbientalController');

  app.use(bodyParser.json());
  app.use('/js', express.static(path.join(__dirname, '../../FRONT-END/js')));
  app.use('/html', express.static(path.join(__dirname, '../../FRONT-END/html')));
  app.use('/css', express.static(path.join(__dirname, '../../FRONT-END/css')));

  app.route('/index.html')
  .get((req, res) => {
    res.sendFile(path.join(__dirname + '../../../FRONT-END/html/index.html'));
  });

  app.route('/')
  .get((req, res) => {
    res.redirect('/index.html');
  });

module.exports = app;