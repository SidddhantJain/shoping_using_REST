// server/config/db.js

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.DB_URL, {
    dialect: 'mysql'
});

module.exports = sequelize;
