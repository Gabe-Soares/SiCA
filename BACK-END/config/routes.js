var express = require('express'),
    app = express(),
    path =  require('path');

  app.route('/')
    .get((req, res) => {
      res.sendFile(path.join(__dirname + '../../../FRONT-END/html/index.html'));
    });
module.exports = app;