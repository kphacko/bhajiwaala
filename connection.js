const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
    // host : 'localhost',
    // user : 'root',
    // password : '',
    // database : 'bhajiwaala',
    host: '107.178.102.117',
    user: 'techmyli_user',
    password: 'DX7@karan',
    database: 'techmyli_bhajiwaala',

    multipleStatements: true
});

mysqlConnection.connect((err) => {
    if (!err) {
        console.log('connected to database');
    } else {
        console.log('database connection failed' + err);

    }
});

module.exports = mysqlConnection;