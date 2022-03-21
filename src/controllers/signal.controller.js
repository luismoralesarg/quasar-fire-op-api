const { getLocation, getMessage, add, get, reset } = require('../services');

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
    } catch (err) {
        return 'El mensaje no puede ser decodificado'
    }
};

const addSignalPoint = async (satellite) => {
    try {
        await add(satellite);
        return true;
    } catch (e) {
        throw e;
    }
    
};

const getSignalPoints = async () => {
    try {
        const satellites = await get();
        return await processSignal(satellites);
    } catch (err) {
        throw err;
    }
}

const resetSignalPoints = async () => {
    try {
        await reset();
        return true;
    } catch (e) {
        throw e;
    }

}

module.exports = { processSignal, addSignalPoint, getSignalPoints, resetSignalPoints };