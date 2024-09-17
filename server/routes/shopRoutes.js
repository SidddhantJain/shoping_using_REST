// server/routes/shopRoutes.js

const express = require('express');
const router = express.Router();
const { getProducts, addProduct, deleteProduct } = require('../controllers/shopController');
const { getUsers, deleteUser } = require('../controllers/userController');

// Product Routes
router.get('/products', getProducts);
router.post('/products', addProduct);
router.delete('/products/:id', deleteProduct);

// User Routes
router.get('/users', getUsers);
router.delete('/users/:id', deleteUser);

module.exports = router;
