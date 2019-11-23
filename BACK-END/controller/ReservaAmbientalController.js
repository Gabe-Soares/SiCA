// Imports
var mysql = require('mysql');

function connect(res){
    var conn = mysql.createConnection({
        host: "127.0.0.1",
        port:'3308',
        user: "root",
        password: "toor",
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
    if(req.body.nome){
        var query = "INSERT INTO reservas_ambientais (reservas_id_usuario, nome, local, tamanho, tipo_reserva, saude_reserva) VALUES (" + req.body.usuario + ", '" + req.body.nome + "', '" + req.body.local + "', " + req.body.tamanho + ", '" + req.body.tipo + "', " + req.body.saude + ")";

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
    else{
        console.log("JSON in the Request Body is empty.");
        res.status(503);
        res.end();
    }  
}

exports.selectId = function (req, res){
    conn = connect(res);

    if(req.body.id)
        var query = "SELECT * FROM reservas_ambientais WHERE id_reserva = " + req.body.id;
    else{
        var query = "SELECT * FROM reservas_ambientais";
    }

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

    if(req.body.nome)
        var query = "SELECT * FROM reservas_ambientais WHERE nome LIKE '%" + req.body.nome + "%'";
    else{
        var query = "SELECT * FROM reservas_ambientais";
    }
        
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

exports.update = function (req, res){
    conn = connect(res);

    if(req.body.id){
        var query = "UPDATE reservas_ambientais SET reservas_id_usuario=" + req.body.usuario + ", nome='" + req.body.nome + "', local='" + req.body.local + "', tamanho=" + req.body.tamanho + ", tipo_reserva='" + req.body.tipo + "', saude_reserva=" + req.body.saude + " WHERE id_reserva=" + req.body.id;
    
        conn.query(query, (err, result, fields) => {
            if (err) {
                console.log("Failed to update reservas_ambientais.");
                res.status(503);
                res.end();
                throw err;
            }
            else{
                console.log("Successfully updated registry from reservas_ambientais.");
                res.status(200);
                res.end();
            }
        });
    }
    else{
        console.log("JSON in the Request Body is empty.");
        res.status(503);
        res.end();
    }  
}

exports.delete = function (req, res){
    conn = connect(res);

    if(req.body.id){
        var query = "DELETE FROM reservas_ambientais WHERE id_reserva = " + req.body.id;

        conn.query(query, (err, result, fields) => {
            if (err) {
                console.log("Failed to delete from reservas_ambientais.");
                res.status(503);
                res.end();
                throw err;
            }
            else{
                console.log("Successfully deleted data from reservas_ambientais.");
                res.status(200);
                res.end();
            }
        });
    }
    else{
        console.log("JSON in the Request Body is empty.");
        res.status(503);
        res.end();
    }  
}