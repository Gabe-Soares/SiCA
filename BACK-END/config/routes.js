var express = require('express'),
    app = express(),
    path =  require('path');

    app.use('/js', express.static(path.join(__dirname, '../../FRONT-END/js')));
    app.use('/html', express.static(path.join(__dirname, '../../FRONT-END/html')));
    // app.use('/components', express.static(path.join(__dirname, '../../FRONT-END/html/components')));
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