const RouterSplit = require('express').Router();
const { addSignalPoint, getSignalPoints, resetSignalPoints } = require('../controllers');

RouterSplit.post('/:sattelite', async (req, res) => {
    try {
        const r = await addSignalPoint({ name: req.params.sattelite, distance: req.body.distance, message: req.body.message });
        res.json(r);
    } catch (e) {
        res.status(500).json(e);
    }
});

RouterSplit.get('/', async (req, res) => {
    try {
        const signals = await getSignalPoints();
        res.json(signals);
    } catch (e) {
        res.status(500).json(e);
    }
});

RouterSplit.delete('/', async (req, res) => {
    try {
        const r = await resetSignalPoints();
        res.json(r);
    } catch (e) {
        res.status(500).json(e);
    }
});

module.exports = RouterSplit;