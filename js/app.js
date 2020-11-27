const express = require('express');
const app = express();
const files = require('./routes/files');
const uploads = require('./routes/uploads');


app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use('/files', files);
app.use('/uploads', uploads);


const port = process.env.port || 9000;
app.listen(port, () => {
	console.log(`Listening on port ${port}`);
});