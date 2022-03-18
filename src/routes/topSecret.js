const Router = require('express').Router();
const processSignal = require('../controllers');

Router.post('/', async (req, res) => {
    console.log('what')
    try {
        const r = await processSignal(req.body.satellites);
        console.log(r)
        res.json(r);
    } catch (e) {
        res.status(500).json(e);
    }
});

module.exports = Router;
