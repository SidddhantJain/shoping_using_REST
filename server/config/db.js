// server/config/db.js
const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root', // MySQL username
    password: 'siddhant', // MySQL password
    database: 'online_shop',
    connectionLimit: 10
});

module.exports = pool.promise();
