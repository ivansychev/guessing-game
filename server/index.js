const utils = require('./utils')
const createBot = require("./bot")
const express = require('express');
const app = express();
const PORT = 4000;

const http = require('http').Server(app);
const cors = require('cors');

app.use(cors());

const socketIO = require('socket.io')(http, {
    cors: {
        origin: "http://localhost:3000"
    }
});

let mainBet = 0
const players = {}
const chatMessages = []

socketIO.on('connection', (socket) => {
    console.log(`⚡: ${socket.id} user just connected!`);

    socket.on('reqPlayers', () => {
        socket.emit('getPlayers', utils.getPlayersData(players))
    })

    socket.on('reqRanks', () => {
        socket.emit('getRanks', utils.getPlayersRanks(players))
    })

    socket.on('userJoinedGame', (data) => {
        players[data.socketID] = data.payload
        players[data.socketID].type = 'human'
        socketIO.emit('getPlayers', utils.getPlayersData(players))
        socketIO.emit('getRanks', utils.getPlayersRanks(players))
    });

    socket.on('message', (data) => {
        chatMessages.push(data)
        socketIO.emit('messageResponse', chatMessages);
    });

    socket.on('submitBet', (data) => {
        players[socket.id].bet = data.bet
        players[socket.id].multiplier = data.multiplier

        utils.createBetForBots(players)
        socketIO.emit('getPlayers', utils.getPlayersData(players))
        if(!utils.haveUnsubmittedPlayers(players)){
            mainBet = utils.getRandomInt(0, 1000) / 100
            socketIO.emit('mainBet', mainBet)
            utils.calcPointsLeft(players, mainBet)
            utils.unSubmitPlayers(players)
        }
    });

    socket.on("getPointsLeft", () => {
        socket.emit('resPointsLeft', players[socket.id].pointsLeft)
    })

    socket.on('disconnect', () => {
        console.log('🔥: A user disconnected');
        delete players[socket.id]
        socket.broadcast.emit('getPlayers', utils.getPlayersData(players))
        socket.broadcast.emit('getRanks', utils.getPlayersRanks(players))
    });
});

app.get('/api', (req, res) => {
    res.json({
        message: 'Hello world',
    });
});

http.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});

["CPU1", "CPU2", "CPU3", "CPU4"].forEach((str) => {
    createBot(str, socketIO, players, chatMessages)
})