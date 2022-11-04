const express = require('express');
const path = require('path');

const rootDir = require('../Utils/path.js');

const router = express.Router();

router.get('/contact',(req, res, next) => {
    
    res.sendFile(path.join(rootDir,'views','contact.html'));
});

router.post('/contact',(req, res, next) => {

    res.sendFile(path.join(rootDir,'views','success.html'));
});
module.exports = router;