const mysql = require('mysql');

const mysqlConnection =  mysql.createPool({
    connectionLimit : 10,
    // host : 'localhost',
    // user : 'root',
    // password : '',
    // database : 'bhajiwaala',
    host: '107.178.108.59',
    user: 'techmyli_new',
    password: 'DX7@karan',
    database: 'techmyli_bhajiwaala',

    multipleStatements: true
});

// mysqlConnection.connect((err) => {
//     if (!err) {
//         console.log('connected to database');
//     } else {
//         console.log('database connection failed' + err);

//     }
// });

module.exports = mysqlConnection;