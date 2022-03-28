const express = require('express');
const router = express.Router();

const Calculator = require('../calculator/calculator.controller');

router.post('/suma', Calculator.getSuma);

module.exports = router;