const express = require('express');

const router = express.Router(); //router is a mini express app // 


router.get('/',(req, res, next) => {
    
    res.send('<h1>Hello from Express.js</h1>');

});

module.exports = router;