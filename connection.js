const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'bhajiwaala',
    multipleStatements : true
});

mysqlConnection.connect((err)=>{
    if(!err){
                console.log('connected to database');
    }else{
        console.log('database connection failed'+ err);
        
    }
});

module.exports = mysqlConnection;