// server/controllers/authController.js

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const { jwtSecret } = require('../config/config');

const signup = async (req, res) => {
    try {
       
        const { username, password, email, phone_number, role, adminKey } = req.body;

         // Check for existing user
        const existingUser = await User.findOne({ where: { username } });
        if (existingUser) {
            return res.status(400).json({ success: false, message: 'Username already exists' });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create new user
        const newUser = await User.create({
            username,
            password: hashedPassword,
            role,
            email,
            phone
        });

        res.status(201).json({ success: true, message: 'User created successfully' });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error signing up user' });
    }
};

const login = async (req, res) => {
    try {
        const { username, password } = req.body;

        // Find user
        const user = await User.findOne({ where: { username } });
        if (!user) {
            return res.status(400).json({ success: false, message: 'Invalid username or password' });
        }

        // Check password
        const match = await bcrypt.compare(password, user.password);
        if (!match) {
            return res.status(400).json({ success: false, message: 'Invalid username or password' });
        }

        // Create JWT token
        const token = jwt.sign({ id: user.id, role: user.role }, jwtSecret, { expiresIn: '1h' });

        res.json({ success: true, token });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Server error' });
    }
};
module.exports = { signup };
module.exports = {
    signUp,
    login
};
