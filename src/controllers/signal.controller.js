const { getLocation, getMessage } = require('../services');

const processSignal = async (satellites) => {
    try {
        
        let dists = [];
        let msgs = [];
        for (let i = 0; i < satellites.length; i++) {
            const sat = satellites[i];
            dists.push({ [sat.name]: sat.distance });
            msgs.push(sat.message);
        }
        const pos = await getLocation(dists);
        const msg = await getMessage(msgs);
        
        return { pos, msg };   

    } catch (e) {
        throw e;        
    }
};

module.exports = processSignal;