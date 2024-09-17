

// app.js 
const express = require('express');
const app = express();
const authRoutes = require('./routes/authRoutes');

app.use(express.json());
app.use('/api', authRoutes);

// Other middleware and routes
const sequelize = require('./config/db');

sequelize.sync()
    .then(() => console.log('Database synchronized'))
    .catch((err) => console.error('Database synchronization failed:', err));
