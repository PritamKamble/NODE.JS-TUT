const express = require('express');
const app = express();
const morgan = require('morgan');

const authRoutes = require('./apis/auth/auth.routes');

app.use(express.json());
app.use(morgan('dev'));

// routes to handle apis
app.use('/auth', authRoutes);

module.exports = app;

