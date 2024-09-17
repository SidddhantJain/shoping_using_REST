const Product = require('../models/Product');

// Get all products
const getProducts = async (req, res) => {
    try {
        const products = await Product.findAll(); // Assuming `findAll` method is available
        res.json({ products });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Server error' });
    }
};

// Add a new product
const addProduct = async (req, res) => {
    try {
        const { name, price, image } = req.body;
        const newProduct = await Product.create({ name, price, image }); // Assuming `create` method is available
        res.status(201).json({ success: true, product: newProduct });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Server error' });
    }
};

// Delete a product by ID
const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        await Product.destroy({ where: { id } }); // Assuming `destroy` method is available
        res.json({ success: true, message: 'Product deleted successfully' });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Server error' });
    }
};

module.exports = {
    getProducts,
    addProduct,
    deleteProduct
};
