const express = require('express');
const WebSocket = require('ws');

const app = express();

const socketServer = new WebSocket.Server({port: 3000});

const messages = ['Start Chatting!'];

socketServer.on('connection', (socketClient) => {
	
  	console.log('connected');
  	console.log('client Set length: ', socketServer.clients.size);  

	socketClient.on('message', (message) => {
	    messages.push(message);
	    socketServer.clients.forEach((client) => {
	      if (client.readyState === WebSocket.OPEN) {
	        client.send('response from server for message : ' + message);
	      }
	    });
	 });

  	socketClient.on('close', (socketClient) => {
  		console.log('closed');
  		console.log('Number of clients: ', socketServer.clients.size);
  	});
});