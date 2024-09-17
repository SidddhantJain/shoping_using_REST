// server/models/Product.js

const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Product = sequelize.define('Product', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    image: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = Product;
const db = require('../config/db');

// Get all users
const getUsers = async () => {
    const [rows] = await db.query('SELECT * FROM users');
    return rows;
};

// Get a single user by ID
const getUserById = async (id) => {
    const [rows] = await db.query('SELECT * FROM users WHERE id = ?', [id]);
    return rows[0];
};

// Add a new user
const addUser = async (username, password, email, phone_number, role) => {
    const [result] = await db.query(
        'INSERT INTO users (username, password, email, phone_number, role) VALUES (?, ?, ?, ?, ?)',
        [username, password, email, phone_number, role]
    );
    return result.insertId;
};

// Delete a user by ID
const deleteUser = async (id) => {
    await db.query('DELETE FROM users WHERE id = ?', [id]);
};

module.exports = {
    getUsers,
    getUserById,
    addUser,
    deleteUser
};
