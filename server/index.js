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

const chatMessages = []

//Add this before the app.get() block
socketIO.on('connection', (socket) => {
    console.log(`⚡: ${socket.id} user just connected!`);

    socket.on('message', (data) => {
        chatMessages.push(data)
        socketIO.emit('messageResponse', chatMessages);
    });

    socket.on('disconnect', () => {
        console.log('🔥: A user disconnected');
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

const botPhrases = require("./botPhrases")

const getRandomInt = (min, max) =>
    Math.floor(Math.random() * (max - min + 1) + min)

const createBot = (name) => {

    const saySomething = () => {
        setTimeout(() => {
            chatMessages.push({
                text: botPhrases[getRandomInt(0,botPhrases.length - 1)],
                id: name
            })
            socketIO.emit('messageResponse', chatMessages);
            setTimeout(saySomething, getRandomInt(5000, 15000))
        }, getRandomInt(5000, 15000))
    }

    saySomething();
}

["CPU1", "CPU2", "CPU3", "CPU4"].forEach((str) => {
    createBot(str)
})