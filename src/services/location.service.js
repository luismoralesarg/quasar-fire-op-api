
  const getLocation = async (distances) => {
    const SATTELITES = {
      kenobi: [-500, -200],
      skywalker: [100, -100],
      sato: [500, 100]
    };
    const [ kenobiX, kenobiY ] = SATTELITES.kenobi;
    const [ skywalkerX, skywalkerY ] = SATTELITES.skywalker;
    const [ satoX, satoY ] = SATTELITES.sato;
    const [{ kenobi: kenobiR }, { skywalker: skywalkerR }, { sato: satoR }] = distances;
  
    const distanceA = 2 * skywalkerX - 2 * kenobiX
    const distanceB = 2 * skywalkerY - 2 * kenobiY
    const distanceC = kenobiR ** 2 - skywalkerR ** 2 - kenobiX ** 2 + skywalkerX ** 2 - kenobiY ** 2 + skywalkerY ** 2
    const distanceD = 2 * satoX - 2 * skywalkerX
    const distanceE = 2 * satoY - 2 * skywalkerY
    const distanceF = skywalkerR ** 2 - satoR ** 2 - skywalkerX ** 2 + satoX ** 2 - skywalkerY ** 2 + satoY ** 2
    const posX = (distanceC * distanceE - distanceF * distanceB) / (distanceE * distanceA - distanceB * distanceD)
    const posY = (distanceC * distanceD - distanceA * distanceF) / (distanceB * distanceD - distanceA * distanceE)
    return { X: posX, Y: posY };
  };

  module.exports = getLocation;