const mysql = require('mysql');

const mysqlConnection =  mysql.createPool({
    connectionLimit : 100,
    // host : 'localhost',
    // user : 'root',
    // password : '',
    // database : 'bhajiwaala',
    host: '154.16.171.84',
    user: 'techmyli_new',
    password: 'DX7@karan',
    database: 'bhajiwaala',
    port:26112,

    multipleStatements: true
});



module.exports = mysqlConnection;