const path = require('path');
const rootDir = require('../Utils/path.js');

exports.getAddProduct = (req, res, next) => {
    
    
    res.sendFile(path.join(rootDir,'views','add-product.html'));
    
}

exports.postAddProduct = (req, res, next) => {

    console.log(req.body);
    res.redirect('/shop');
}

exports.getContact = (req, res, next) => {
    
    res.sendFile(path.join(rootDir,'views','contact.html'));
}

exports.postContact = (req, res, next) => {

    res.sendFile(path.join(rootDir,'views','success.html'));
}

exports.getShopProducts = (req, res, next) => {
    
    res.sendFile(path.join(rootDir,'views','shop.html')); // __dirname is a global variable that gives us the absolute path to the current folder ie routes

}