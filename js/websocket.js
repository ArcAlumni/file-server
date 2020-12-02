const WebSocket = require('ws');

let clients = {};

module.exports = {

    startServer: function() {
        serverSocket = new WebSocket.Server({ port: 3000 })
        serverSocket.on('connection', (client) => onServer(serverSocket, client));
    },

    listClients: function() {
        let clients = [];
        serverSocket.clients.forEach(client => {
            clients.push(client);
        });
        return clients;
    }
}

function onServer(serverSocket, clientSocket) {
    onOpen(serverSocket, clientSocket);
    clientSocket.on('message', (message) => onMessage(serverSocket, clientSocket, message));
    clientSocket.on('close', (clientSocket) => onClose(serverSocket, clientSocket));
}

function onOpen(serverSocket, clientSocket) {
    console.log('client connected ' + clientSocket._socket.remoteAddress);
    clients[clientSocket._socket.remoteAddress] = clientSocket;
}

function onMessage(serverSocket, clientSocket, message) {
    clientSocket.send('response from server for message : ' + message);
}

function onMessageBroadcast(serverSocket, message) {
    socketServer.clients.forEach((clientSocket) => {
        if (clientSocket.readyState === WebSocket.OPEN) {
            clientSocket.send('response from server for message : ' + message);
        }
    });
}

function onClose(serverSocket, code) {
    console.log('client closed ' + code);

    let clientsFromServer = [];

    serverSocket.clients.forEach(client => {
        clientsFromServer.push(client._socket._peername.address);
    });

    for (key in clients) {
        if (!clientsFromServer.includes(key)) {
            delete clients[key];
        }
    }
}