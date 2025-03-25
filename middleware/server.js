// server.js
const express = require('express');
const logger = require('./middleware/logger');

const app = express();

// Apply the logger middleware globally
app.use(logger);

// Apply the logger middleware to specific routes
app.get('/users', logger, userController.getAllUsers);
app.post('/users', logger, userController.createUser);