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
    if(req.body.evento){
        var query = "INSERT INTO eventos_ambientais (eventos_id_usuario, eventos_id_reservas, desc_evento, data_evento, causa, impacto, desc_impacto, consequencia, plano_restauracao, tempo_restauracao) VALUES (" + req.body.usuario + ", " + req.body.reserva + ", '" + req.body.evento + "', '" + req.body.data + "', '" + req.body.causa + "', " + req.body.impacto + ", '" + req.body.impacto_desc + "', '" + req.body.consequencia + "', '" + req.body.plano + "', '" + req.body.tempo + "')";

        conn.query(query, (err, result) => {
            if (err) {
                console.log("Failed to insert into eventos_ambientais.");
                res.status(503);
                res.end();
                throw err;
            }
            else{
                console.log("Successfully inserted into eventos_ambientais.");
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
        var query = "SELECT * FROM eventos_ambientais WHERE id_evento = " + req.body.id;
    else{
        var query = "SELECT * FROM eventos_ambientais";
    }

    conn.query(query, (err, result, fields) => {
        if (err) {
            console.log("Failed to select from eventos_ambientais.");
            res.status(503);
            res.end();
            throw err;
        }
        else{
            console.log("Successfully selected data from eventos_ambientais.");
            res.status(200);
            res.json(result);
        }
    });
}

exports.selectEvento = function (req, res){
    conn = connect(res);

    if(req.body.evento)
        var query = "SELECT * FROM eventos_ambientais WHERE desc_evento LIKE '%" + req.body.evento + "%'";
    else{
        var query = "SELECT * FROM eventos_ambientais";
    }
        
    conn.query(query, (err, result, fields) => {
        if (err) {
            console.log("Failed to select from eventos_ambientais.");
            res.status(503);
            res.end();
            throw err;
        }
        else{
            console.log("Successfully selected data from eventos_ambientais.");
            res.status(200);
            res.json(result);
        }
    });
}

exports.update = function (req, res){
    conn = connect(res);

    if(req.body.id){
        var query = "UPDATE eventos_ambientais SET eventos_id_usuario=" + req.body.usuario + ", eventos_id_reservas=" + req.body.reserva + ", desc_evento='" + req.body.evento + "', data_evento='" + req.body.data + "', causa='" + req.body.causa + "', impacto=" + req.body.impacto + ", desc_impacto='" + req.body.impacto_desc + "', consequencia='" + req.body.consequencia + "', plano_restauracao='" + req.body.plano + "', tempo_restauracao='" + req.body.tempo + "' WHERE id_evento=" + req.body.id;

        conn.query(query, (err, result, fields) => {
            if (err) {
                console.log("Failed to update eventos_ambientais.");
                res.status(503);
                res.end();
                throw err;
            }
            else{
                console.log("Successfully updated registry from eventos_ambientais.");
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
        var query = "DELETE FROM eventos_ambientais WHERE id_evento = " + req.body.id;

        conn.query(query, (err, result, fields) => {
            if (err) {
                console.log("Failed to delete from eventos_ambientais.");
                res.status(503);
                res.end();
                throw err;
            }
            else{
                console.log("Successfully deleted data from eventos_ambientais.");
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