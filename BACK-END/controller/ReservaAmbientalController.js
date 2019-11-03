//  TODO:
//      - Tratamento de exceções

// Imports
var mysql = require('mysql');

class ReservaAmbientalController{
    
    constructor() {
        this.$ = document.querySelector.bind(document);
        this._conn = this._connect();
        this._reserva = null;
    }

    _connect() {
        var conn = mysql.createConnection({
            host: "localhost",
            user: "yourusername",
            password: "yourpassword",
            database: "mydb"
        });

        con.connect(err => {
            if (err) throw err;
            console.log("Successfully Connected to the MySQL Database.");
        });

        return(conn);
    }

    insert(){
        this._reserva = new ReservaAmbiental($('#usuario').value, $('#nome').value, $('#local').value, $('#tamanho').value, $('#tipo').value, $('#saude').value);

        if(this._conn.state == 'disconnected'){
            console.log("Error ReservaAmbientalController.insert(): MySQL connection object state is disconnected.");
        }
        else{
            var query = "INSERT INTO reservas_ambientais (reservas_id_usuario, nome, local, tamanho, tipo_reserva, saude_reserva) VALUES (" + this._reserva.usuario() + ", " + this._reserva.nome() + ", " + this._reserva.local() + ", " + this._reserva.tamanho() + ", " + this._reserva.tipo() + ", " + this._reserva.saude() + ")"
        
            this._con.query(query, (err, result) => {
                if (err) throw err;
                console.log("Successfully inserted into reservas_ambientais.");
            });
        }
    }

    select(){
        let id_select = $('#id').value;
        let usuario_select = $('#usuario').value;
        let nome_select = $('#nome').value;
        let local_select = $('#local').value;
        let tamanho_select = $('#tamanho').value;
        let tipo_select = $('#tipo').value;
        let saude_select = $('#saude').value);

        if(this._conn.state == 'disconnected'){
            console.log("Error ReservaAmbientalController.select(): MySQL connection object state is disconnected.");
        }
        else{
            // QUERY NÃO FINALIZADA
            var query = "SELECT * FROM reservas_ambientais WHERE )";
        
            this._con.query(query, (err, result, fields) => {
                if (err) throw err;
                console.log("Successfully selected from reservas_ambientais.");
            });
        }
    }

    _preencheTela(){

    }

    update(){

    }
}