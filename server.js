const app = require("express")();
const express = require('express');
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const cors = require('cors');
const moment = require('moment');
const read = require("./modules/readData");
const update = require("./modules/updateData");
const _ = require('lodash');
const path = require('path');


app.use(cors());

let connectedUsers = {}

io.on('connection', (socket) => {
    socket.emit('message', 'Welcome to my Chat App');

    socket.on('getAllMessages', () => {
        const messageList = read();
        const data = _.orderBy(messageList, "time", "asc")
        socket.emit("getAllMessages", data);

        // Messages.list((data) => {
        //     // console.log('msgs', data);
        //     socket.emit("getAllMessages", data);
        // });
    })

    socket.on("newMessage", (message) => {
        // Messages.upsert(message);
        let prevData = read();
        prevData.push(message)
        update(prevData)
        // console.log(message);
        socket.broadcast.emit("receiveMessage", message);
    });

    socket.on('loginData', (data) => {
        connectedUsers[socket.id] = data;
        connectedUsers[socket.id]['visible'] = true
        io.emit('loginData', connectedUsers);
    })

    socket.on('visible', (data) => {
        connectedUsers[socket.id]['visible'] = data
        io.emit('loginData', connectedUsers)
    })

    socket.on('disconnect', () => {
        // io.emit('message', 'A user has left the chat')
        if (Object.keys(connectedUsers).includes(socket.id)) {
            delete connectedUsers[socket.id]
            io.emit('loginData', connectedUsers);
        } else {

        }
    })
})

app.use(express.static(path.join(__dirname, './client/build')))

app.get('*', (req, res) => res.sendFile(path.join(__dirname, './client/build/index.html')));

const PORT = process.env.PORT || 3001
http.listen(PORT, () => { console.log('Server is up 🚀🚀 on port', PORT) })