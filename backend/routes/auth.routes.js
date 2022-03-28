const express = require('express');
const router = express.Router();

const Users = require('../auth/auth.controller');

router.post('/register', Users.createUser);
router.post('/login', Users.loginUser);

module.exports = router;