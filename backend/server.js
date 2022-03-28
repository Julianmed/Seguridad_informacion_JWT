'use strict'
const cors = require('cors');
const authRoutes = require('./routes/auth.routes');
const calculatorRoutes = require('./routes/calculator.routes');
const express = require('express');
const propierties = require('./config/properties');
const DB = require('./config/db');
// init DB
DB();

const app = express();
const router = express.Router();

const bodyParser = require('body-parser');
const bodyParserJSON = bodyParser.json();
const bodyParserURLEncoded = bodyParser.urlencoded({ extended: true });

app.use(bodyParserJSON);
app.use(bodyParserURLEncoded);

app.use(cors());
app.use(express.json());
//app.use('/api', router);

//authRoutes(router);
app.use('/api/calculator',require('./routes/calculator.routes'));
app.use('/api/auth', require('./routes/auth.routes'))
//calculatorRoutes(router);

app.use(router);
app.listen(propierties.PORT, () => console.log(`Server runing on port ${propierties.PORT}`));