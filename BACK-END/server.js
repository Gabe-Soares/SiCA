// Imports
const http = require('http'),
    app = require('./config/routes');

// Declaração de variáveis
const port = 8080,
    ip = '127.0.0.1';

http.createServer(app).listen(port, ip, function() {
    console.log('Servidor rodando em: http://' + ip + ':' + this.address().port);
    console.log('Para parar o servidor: Ctrl + C');
});

