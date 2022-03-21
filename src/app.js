const express = require('express')
const cors = require('cors');
const app = express()
const { database } = require('./config/database');
const { Router, RouterSplit } = require('./routes');
const PORT = process.env.PORT || 3000

app.use(cors());
app.use(express.json());

// Middleware

const Logging = require('./config/logging')

app.use('/topsecret', Logging, Router);
app.use('/topsecret_split', Logging, RouterSplit);

database(app);

app.listen(PORT, () => {
    console.log(`Quasar Fire Op on: ${PORT}`);
});



