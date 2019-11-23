// Imports
var mysql = require('mysql');

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
