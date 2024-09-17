// server/models/User.js

const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const User = sequelize.define('User', {
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    role: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    phone: {
        type: DataTypes.STRING
    }
});

module.exports = User;
const db = require('../config/db');

// Get all products
const getProducts = async () => {
    const [rows] = await db.query('SELECT * FROM products');
    return rows;
};

// Get a single product by ID
const getProductById = async (id) => {
    const [rows] = await db.query('SELECT * FROM products WHERE id = ?', [id]);
    return rows[0];
};

// Add a new product
const addProduct = async (name, price, image_url) => {
    const [result] = await db.query(
        'INSERT INTO products (name, price, image_url) VALUES (?, ?, ?)',
        [name, price, image_url]
    );
    return result.insertId;
};

// Delete a product by ID
const deleteProduct = async (id) => {
    await db.query('DELETE FROM products WHERE id = ?', [id]);
};

module.exports = {
    getProducts,
    getProductById,
    addProduct,
    deleteProduct
};
