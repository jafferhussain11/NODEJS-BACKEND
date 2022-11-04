const express = require('express');
const path = require('path');

const rootDir = require('../Utils/path.js');

const router = express.Router(); //router is a mini express app // 


router.get('/',(req, res, next) => {
    
    res.sendFile(path.join(rootDir,'views','shop.html')); // __dirname is a global variable that gives us the absolute path to the current folder ie routes

});

module.exports = router;