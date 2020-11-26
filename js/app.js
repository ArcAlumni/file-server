const express = require('express');
const app = express();
const files = require('./routes/files');
const uploads = require('./routes/uploads');


app.use(express.json());
app.use('/files', files);
app.use('/uploads', uploads);


app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});


const port = process.env.port || 9000;
app.listen(port, () => {
	console.log(`Listening on port ${port}`);
});