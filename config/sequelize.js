const { Sequelize } = require('sequelize');

// Initialize Sequelize with database URL from environment variables
const sequelize = new Sequelize(process.env.DB_URL, {
    dialect: 'mysql',
    logging: false // Optional: set to true for debugging SQL queries
});

module.exports = sequelize;
