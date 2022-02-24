import io from 'socket.io-client';
let socket;


export const init = () => {
    console.log('Connecting....');

    // socket = io('http://localhost:3001/', {
    //     transports: ['websocket']
    // });

    socket = io('/', {
        transports: ['websocket']
    });

    socket.on('connect', () => {
        console.log('Connection done!');
    })
}

export const getMessage = (callback) => {
    socket.on('message', (message) => {
        callback(message)
    })
}

export const sendMessage = (data) => {
    socket.emit('newMessage', data)
}

export const receiveMessage = (callback) => {
    socket.on('receiveMessage', (data) => {
        callback(data)
    })
}

export const sendLoginData = (data) => {
    socket.emit('loginData', data)
}

export const sendGetAllMessages = () => {
    socket.emit('getAllMessages', 'sa')
}

export const getAllMessages = (callback) => {
    socket.on('getAllMessages', (data) => {
        callback(data)
    })
}

export const sendVisibile = (data) => {
    socket.emit('visible', data);
}

export const getVisible = (callback) => {
    socket.on('visible', (data) => {
        callback(data)
    })
}

export const getLoginData = (callback) => {
    socket.on('loginData', (data) => {
        callback(data)
    })
}