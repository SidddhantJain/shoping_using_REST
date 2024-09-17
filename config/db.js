// server/config/db.js

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.DB_URL, {
    dialect: 'mysql'
});

module.exports = sequelize;
const mysql = require('mysql2');

// Create a connection pool
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root@localhost', // replace with your MySQL username
    password: 'siddhant', // replace with your MySQL password
    database: 'online_shop',
    connectionLimit: 10
});

module.exports = pool.promise();
