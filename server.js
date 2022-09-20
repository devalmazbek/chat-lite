const express = require('express');
const socketIO = require("socket.io");
const app = express();
const server = require('http').Server(app);

const io = socketIO(server);



const users = new Map();

app.get('/rooms', function(req, res) {
    res.json(users);
    console.log(req);
})

io.on('connection', (socket) => {
    console.log('user is connected', socket.id);
});

server.listen(9999, (err) => {
    if(err) {
        throw Error(err);
    }

    console.log('server is started');
});