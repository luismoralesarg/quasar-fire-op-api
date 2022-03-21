const Router = require('express').Router();
const { processSignal } = require('../controllers');

Router.post('/', async (req, res) => {
    try {
        const r = await processSignal(req.body.satellites);
        res.json(r);
    } catch (e) {
        res.status(500).json(e);
    }
});

module.exports = Router;
