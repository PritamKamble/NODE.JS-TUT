const express = require('express');
const app = express();
const morgan = require('morgan');

const authRoutes = require('./apis/auth/auth.routes');
const empRoutes = require('./apis/employees/employee.routes');

app.use(express.json());
app.use(morgan('dev'));

// routes to handle apis
app.use('/auth', authRoutes);
app.use('/employee', empRoutes);

module.exports = app;

