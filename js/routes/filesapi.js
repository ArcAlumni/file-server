const express = require('express');
const Joi = require('joi');
const files = [
	{ id : 1, name : "file1" },
	{ id : 2, name : "file2" },
	{ id : 3, name : "file3" }
];

let router = express.Router();

router.route('/')
.get((req, res) => {
    res.send(files);
})
.post((req, res) => {
	const { error } = validate(req.body);
	if(error) return res.status(400).send(error.details[0].message);
	const file = {
		id : files.length + 1,
		name : req.body.name
	};
	files.push(file);
	res.send(file);
});

router.get('/:id', (req, res) => {
	const file = files.find(f => f.id === parseInt(req.params.id));
	if(!file) return res.status(404).send('File id does not exists');
	res.send(file);
});

function validate(file){
	const schema = {
		name : Joi.string().min(3).required()
	}
	return Joi.validate(file, schema);
}

module.exports = router;