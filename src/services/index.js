const getLocation = require('./location.service');
const getMessage = require('./message.service');
const { add, get, reset } = require('./signal.service');

module.exports = { getLocation, getMessage, add, get, reset };

