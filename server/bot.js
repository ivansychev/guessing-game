const botPhrases = require("./botPhrases");
const utils = require("./utils")

const createBot = (name, socketIO, players, chatMessages) => {
    players[name] = {
        username: name,
        type: 'bot',
        bet: null,
        multiplier: null,
        pointsLeft: 1000
    }

    const saySomething = () => {
        setTimeout(() => {
            chatMessages.push({
                text: botPhrases[utils.getRandomInt(0,botPhrases.length - 1)],
                id: name
            })
            socketIO.emit('messageResponse', chatMessages);
            setTimeout(saySomething, utils.getRandomInt(5000, 15000))
        }, utils.getRandomInt(5000, 15000))
    }

    saySomething();
}

module.exports = createBot