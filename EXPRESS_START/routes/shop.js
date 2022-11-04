const express = require('express');
const path = require('path');


const router = express.Router(); //router is a mini express app // 
const productController = require('../controllers/products.js');


router.get('/',productController.getShopProducts);

module.exports = router;