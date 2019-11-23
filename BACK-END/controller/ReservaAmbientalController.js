// Imports
var mysql = require('mysql');

function connect(res){
    var conn = mysql.createConnection({
        host: "127.0.0.1",
        port:'3306',
        user: "root",
        password: "",
        database: "sica_bd"
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

    var query = "INSERT INTO reservas_ambientais (reservas_id_usuario, nome, local, tamanho, tipo_reserva, saude_reserva) VALUES (" + req.body.usuario + ", " + req.body.nome + ", " + req.body.local + ", " + req.body.tamanho + ", " + req.body.tipo + ", " + req.body.saude + ")";

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

exports.selectId = function (req, res){
    conn = connect(res);

    if(req.body.id)
        var query = "SELECT * FROM reservas_ambientais WHERE id_reserva = " + req.body.id;

    conn.query(query, (err, result, fields) => {
        if (err) {
            console.log("Failed to select from reservas_ambientais.");
            res.status(503);
            res.end();
            throw err;
        }
        else{
            console.log("Successfully selected data from reservas_ambientais.");
            res.status(200);
            res.json(result);
        }
    });
}

exports.selectNome = function (req, res){
    conn = connect(res);

    var query = "SELECT * FROM reservas_ambientais WHERE nome LIKE %" + req.body.nome + "%";

    conn.query(query, (err, result, fields) => {
        if (err) {
            console.log("Failed to select from reservas_ambientais.");
            res.status(503);
            res.end();
            throw err;
        }
        else{
            console.log("Successfully selected data from reservas_ambientais.");
            res.status(200);
            res.json(result);
        }
    });
}

exports.selectAll = function (req, res){
    conn = connect(res);

    var query = "SELECT * FROM reservas_ambientais";

    conn.query(query, (err, result, fields) => {
        if (err) {
            console.log("Failed to select from reservas_ambientais.");
            res.status(503);
            res.end();
            throw err;
        }
        else{
            console.log("Successfully selected data from reservas_ambientais.");
            res.status(200);
            res.json(result);
        }
    });
}
