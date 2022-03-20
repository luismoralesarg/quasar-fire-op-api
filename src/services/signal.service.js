const SignalPoint = require('../models/signalPoint.model');

const add = async (sattelite) => {
    await SignalPoint.findOneAndUpdate({ name: sattelite.name }, { distance: sattelite.distance, message: sattelite.message }, { upsert: true });
};

const get = async () => {
    return await SignalPoint.find({});
};

const reset = async () => {
    await SignalPoint.deleteMany({});
};

module.exports = { add, get, reset };