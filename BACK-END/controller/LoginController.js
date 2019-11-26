// Imports
var mysql = require('mysql');
var {Image} = require('image-js');

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

exports.insert = async function (req, res){
    conn = connect(res);

    if(req.body.login){
        let img = await calcCoeficient(req.body.imagem);

        var query = "INSERT INTO usuario (tipo_usuario, senha, imagem, login) VALUES ('" + req.body.tipo + "', '" + req.body.senha + "', " + img + ", '" + req.body.login + "')";

        conn.query(query, (err, result) => {
            if (err) {
                console.log("Failed to insert into usuario.");
                res.status(503);
                res.end();
                throw err;
            }
            else{
                console.log("Successfully inserted into usuario.");
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

exports.auth = async function (req, res){
    conn = connect(res);

    if((req.body.login) && (req.body.senha)){
        let img = await calcCoeficient(req.body.imagem);

        var query = "SELECT * FROM usuario WHERE login = '" + req.body.login + "' AND senha = '" + req.body.senha + "' AND imagem = " + img;
    
        conn.query(query, (err, result, fields) => {
            if (err) {
                console.log("Failed to select from usuario - Auth.");
                res.status(503);
                res.end();
                throw err;
            }
            else{
                console.log("Successfully selected data from usuario - Auth.");
                res.status(200);
                res.json(result);
            }
        });
    }
    else{
        console.log("JSON in the Request Body is empty.");
        res.status(503);
        res.end();
    }  
}

exports.selectLogin = function (req, res){
    conn = connect(res);

    if(req.body.login)
        var query = "SELECT * FROM usuario WHERE login LIKE '%" + req.body.login + "%'";
    else{
        var query = "SELECT * FROM usuario";
    }
        
    conn.query(query, (err, result, fields) => {
        if (err) {
            console.log("Failed to select from usuario.");
            res.status(503);
            res.end();
            throw err;
        }
        else{
            console.log("Successfully selected data from usuario.");
            res.status(200);
            res.json(result);
        }
    });
}

exports.selectId = function (req, res){
    conn = connect(res);

    if(req.body.id)
        var query = "SELECT * FROM usuario WHERE id_usuario = " + req.body.id;
    else{
        var query = "SELECT * FROM usuario";
    }
        
    conn.query(query, (err, result, fields) => {
        if (err) {
            console.log("Failed to select from usuario.");
            res.status(503);
            res.end();
            throw err;
        }
        else{
            console.log("Successfully selected data from usuario.");
            res.status(200);
            res.json(result);
        }
    });
}

exports.update = async function (req, res){
    conn = connect(res);

    if(req.body.id){
        let img = await calcCoeficient(req.body.imagem);

        var query = "UPDATE usuario SET tipo_usuario='" + req.body.tipo + "', senha='" + req.body.senha + "', imagem=" + img + ", login='" + req.body.login + "' WHERE id_usuario=" + req.body.id;

        conn.query(query, (err, result, fields) => {
            if (err) {
                console.log("Failed to update usuario.");
                res.status(503);
                res.end();
                throw err;
            }
            else{
                console.log("Successfully updated registry from usuario.");
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
        var query = "DELETE FROM usuario WHERE id_usuario = " + req.body.id;

        conn.query(query, (err, result, fields) => {
            if (err) {
                console.log("Failed to delete from usuario.");
                res.status(503);
                res.end();
                throw err;
            }
            else{
                console.log("Successfully deleted data from usuario.");
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

async function calcCoeficient(imagePath){
    const image = await Image.load(imagePath);

    let soma = arr => arr.reduce((a,b) => a + b, 0);

    let h = soma(image.getColorHistogram());
    let a = image.height;
    let l = image.width;
    let k = (h * (a + l))/31;
    let coeficient = (k.toFixed(4));

    return coeficient;
}