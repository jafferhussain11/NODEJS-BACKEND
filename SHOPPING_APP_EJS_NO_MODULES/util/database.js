const mysql = require('mysql2');

const pool = mysql.createPool({

host: 'localhost',
user : 'root',
database : 'node-complete',
password : 'Maria123#',

});

module.exports = pool.promise(); //this is a promise based version of the mysql2 package

