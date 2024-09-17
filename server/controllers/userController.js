// server/controllers/userController.js

const User = require('../models/User');

const getUsers = async (req, res) => {
    try {
        const users = await User.findAll();
        res.json({ users });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Server error' });
    }
};

const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        await User.destroy({ where: { id } });
        res.json({ success: true, message: 'User deleted successfully' });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Server error' });
    }
};

module.exports = {
    getUsers,
    deleteUser
};
