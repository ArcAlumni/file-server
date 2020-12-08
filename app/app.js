const express = require('express');
const app = express();
const filesapi = require('./routes/filesapi');
const uploads = require('./routes/uploads');
const websocket = require('./websocket');

app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use('/files', filesapi);
app.use('/uploads', uploads);

websocket.startServer();

app.get('/chatroomclients', (req, res) => {
    res.send(websocket.listClients());
})

const port = 9000;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});