const getMessage = async (messages) => {
    const [kenobi, skywalker, sato] = messages;
    if (kenobi.length !== skywalker.length || kenobi.length !== sato.length || skywalker.length !== sato.length) {
      throw { 'message': 'El mensaje no se puede decodificar' };
    }
  
    let messageDecoded = '';
    for (let i = 0; i < kenobi.length && i < skywalker.length && i < sato.length; i++) {
      messageDecoded += kenobi[i] ? `${kenobi[i]} ` : (skywalker[i] ? `${skywalker[i]} ` : (sato[i] ? `${sato[i]} ` : (function(){throw { 'message': 'This message is missing a part.' }}())));
    }
    
    return messageDecoded.trim();
  };

  module.exports = getMessage;