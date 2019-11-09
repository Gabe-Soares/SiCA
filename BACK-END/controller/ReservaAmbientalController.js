//  TODO:
//      - Tratamento de exceções

// Imports
var mysql = require('mysql');
require('../model/ReservaAmbiental');

function connect(res){
    var conn = mysql.createConnection({
        host: "127.0.0.1",
        port:'3308',
        user: "root",
        password: "toor",
        database: "sica"
    });

    conn.connect(err => {
        if (err){
            console.log("Connection to the MySQL Database failed.");
            res.status(503);
            res.end();
            throw err;
        }
        console.log("Successfully connected to MySQL Database."); 
    });

    return(conn);
}

exports.insert = function (req, res){
    conn = connect(res);

    // var query = "INSERT INTO reservas_ambientais (reservas_id_usuario, nome, local, tamanho, tipo_reserva, saude_reserva) VALUES (" + req.body.usuario + ", " + req.body.nome + ", " + req.body.local + ", " + req.body.tamanho + ", " + req.body.tipo + ", " + req.body.saude + ")"
    var query = "INSERT INTO teste values ( " + req.body.id + ")"

    conn.query(query, (err, result) => {
        if (err) {
            console.log("Failed to insert into reservas_ambientais.");
            res.status(503);
            res.end();
            throw err;
        }
        else{
            console.log("Successfully inserted into reservas_ambientais.");
            res.status(200);
            res.end();
        }
    });
}

exports.select = function (req, res){
    conn = connect();

    let id_select = $('#id').value;
    let usuario_select = $('#usuario').value;
    let nome_select = $('#nome').value;
    let local_select = $('#local').value;
    let tamanho_select = $('#tamanho').value;
    let tipo_select = $('#tipo').value;
    let saude_select = $('#saude').value;

    if(conn.state == 'disconnected'){
        console.log("Error ReservaAmbientalController.select(): MySQL connection object state is disconnected.");
    }
    else{
        // QUERY NÃO FINALIZADA
        var query = "SELECT * FROM reservas_ambientais WHERE )";
    
        conn.query(query, (err, result, fields) => {
            if (err) throw err;
            console.log("Successfully selected from reservas_ambientais.");
        });
    }
}