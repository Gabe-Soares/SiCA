//  TODO:
//      - Tratamento de exceções

// Imports
var mysql = require('mysql');

function connect(){
    var conn = mysql.createConnection({
        host: "localhost:3308",
        user: "root",
        password: "toor",
        database: "SiCA_DB"
    });

    conn.connect(err => {
        if (err) throw err;
        console.log("Successfully Connected to the MySQL Database.");
    });

    return(conn);
}

exports.insert = function (req, res){
    conn = connect();
    // console.log(req.body.name);
    // res.send(req.body);

    reserva = new ReservaAmbiental(req.body.usuario, req.body.nome, req.body.local, req.body.tamanho, req.body.tipo, req.body.saude);

    if(conn.state == 'disconnected'){
        console.log("Error ReservaAmbientalController.insert(): MySQL connection object state is disconnected.");
    }
    else{
        var query = "INSERT INTO reservas_ambientais (reservas_id_usuario, nome, local, tamanho, tipo_reserva, saude_reserva) VALUES (" + reserva.usuario() + ", " + reserva.nome() + ", " + reserva.local() + ", " + reserva.tamanho() + ", " + reserva.tipo() + ", " + reserva.saude() + ")"
        console.log(query);
        conn.query(query, (err, result) => {
            if (err) throw err;
            console.log("Successfully inserted into reservas_ambientais.");
        });
    }
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