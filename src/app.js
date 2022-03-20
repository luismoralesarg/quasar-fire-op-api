const express = require('express')
const cors = require('cors');
const app = express()

const PORT = process.env.PORT || 3000

app.use(cors());
app.use(express.json());

const Router = require('./routes');

// Middleware

const Logging = require('./config/logging')

app.use('/topsecret', Logging, Router);

app.listen(PORT, () => {
    console.log(`Decoding on: ${PORT}`);
});



