const WebSocket = require('ws');
let socketServer = undefined;

module.exports = {
    startServer: function() {
        socketServer = new WebSocket.Server({ port: 3000 })
        socketServer.on('connection', (client) => onServer(client));
    }
}

function onServer(client) {
    onOpen(client);
    client.on('message', (message) => onMessage(client, message));
    client.on('close', (client) => onClose(client));
}

function onOpen(client) {
    console.log('connected ' + client);
    console.log('client Set length: ', socketServer.clients.size);
}

function onMessage(client, message) {
    client.send('response from server for message : ' + message);
}

function onMessageBroadcast(message) {
    socketServer.clients.forEach((client) => {
        if (client.readyState === WebSocket.OPEN) {
            client.send('response from server for message : ' + message);
        }
    });
}

function onClose(client) {
    console.log('closed ' + client);
    console.log('Number of clients: ', socketServer.clients.size);
}