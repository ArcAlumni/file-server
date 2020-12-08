const express = require('express');
const multer = require('multer');
const upload = multer({
  dest: 'uploaded_files/'
});

let router = express.Router();

router.post('/', upload.single('file-to-upload'), (req, res) => {
  res.redirect('/');
});

module.exports = router;