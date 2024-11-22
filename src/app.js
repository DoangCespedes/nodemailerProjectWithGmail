const express = require('express');
const emailRoutes = require('./routes/emailRoutes');

require('dotenv').config();

const app = express();

// Middleware
app.use(express.json()); // Para parsear JSON

// Rutas
app.use('/api/emails', emailRoutes); // Prefijo para las rutas de correos

module.exports = app;
