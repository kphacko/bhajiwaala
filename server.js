const mysql = require('mysql');
const express = require('express');
const bodyParser = require('body-parser');
const Test = require('./routes/test');
const mysqlConnection = require('./connection');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/test',Test);

app.listen(3000,()=>{
console.log('heard on 30000');
});