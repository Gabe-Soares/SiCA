//  TODO:
//      - Tratamento de exceções

// Imports
var mysql = require('mysql');

class ReservaAmbientalController{
    
    constructor() {
        let $ = document.querySelector.bind(document);
        this._data_input = $('#data');
        this._qtde_input = $('#quantidade');
        this._valor_input = $('#valor');

        this._lista_negociacoes = new ListaNegociacoes();
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

    cadastra(){
        conn = this._connect();

        var query = "INSERT INTO customers (name, address) VALUES ('Company Inc', 'Highway 37')"
    }

    _limpaForm(){
        this._data_input.value = '';
        this._qtde_input.value = 1;
        this._valor_input.value = 0.0;

        this._data_input.focus();
    }
}