require('dotenv').config();
const mysql = require('mysql');

// Constante que lleva los datos de conexión a la base de datos.
const mysqlConnection = mysql.createConnection({
    port: process.env.DB_PORT,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_MYSQL
});

// Realizamos la conexión a la base de datos, verificando si fue satisfactoria la conexión.
mysqlConnection.connect(function (err){
    if(err){
        console.log(err);
        return;
    }else{
        console.log('Connection Successful');
    }
});

module.exports = mysqlConnection;