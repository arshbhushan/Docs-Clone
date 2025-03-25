// server.js
const express = require('express');
const userRoutes = require('./routes/userRoutes');
const documentRoutes = require('./routes/documentRoutes');
// ...

const app = express();

// Register the routes
app.use('/users', userRoutes);
app.use('/documents', documentRoutes);