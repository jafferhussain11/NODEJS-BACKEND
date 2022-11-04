const express = require('express');
const path = require('path');

const rootDir = require('../Utils/path.js');

const router = express.Router();

const productController = require('../controllers/products.js');

router.get('/contact',productController.getContact);

router.post('/contact',productController.postContact);
module.exports = router;