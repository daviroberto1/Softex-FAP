const mysql = require("mysql2");

const conn = mysql.createPool({
    host: 'localhost',
    port: 3006,
    user: 'root',
    password: '',
    database: 'fap_atividade'
});

module.exports = conn;