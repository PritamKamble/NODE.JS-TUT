const express = require('express');
const { login } = require('./auth.controller');
const router = express.Router();

router.post('/login', login);

router.post('/register', login);

module.exports = router;