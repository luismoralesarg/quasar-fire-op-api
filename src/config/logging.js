const logger = (req, res, next) => {
    const today = new Date();
    const timestamp = today.toISOString().substring(0, 19).replace('T',' ');
    console.log(timestamp + ' ' + req.method + ' ' + req.baseUrl);
    next();
};

module.exports = logger;