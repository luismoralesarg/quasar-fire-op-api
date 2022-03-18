const express = require('express')
const cors = require('cors');
const app = express()

const PORT = process.env.PORT || 3000

app.use(cors());
app.use(express.json());

const Router = require('./routes');

app.use('/topsecret', Router);

app.listen(PORT, () => {
    console.log(`Decoding on: ${PORT}`);
});



