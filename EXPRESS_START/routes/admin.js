const express = require('express');

const router = express.Router();

// /admin/add-product => GET
router.get('/add-product',(req, res, next) => {
    
    
    res.send('<form action="/admin/product" method ="POST"> <input type="text" name="title"><input type="number" name="size"><button type="submit">Add Product</button></form>');
    //res.send({name: 'Max', age: 29});
});

// /admin/add-product => POST
router.post('/product',(req, res, next) => {

    console.log(req.body);
    res.redirect('/');
});

module.exports = router;