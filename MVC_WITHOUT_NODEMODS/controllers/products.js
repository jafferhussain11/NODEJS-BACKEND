const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
    res.render('add-product', {
      pageTitle: 'Add Product',
      path: '/admin/add-product',
      formsCSS: true,
      productCSS: true,
      activeAddProduct: true
    });
  }

  exports.postAddProduct = (req, res, next) => {
    
    const product = new Product(req.body.title);//req.body.title is the name of the input field in the form
    product.save();
    res.redirect('/');
  }

  exports.getProducts = (req, res, next) => {
    
    Product.fetchAll(products=>{

      res.render('shop', {
        prods: products,
        pageTitle: 'Shop',
        path: '/',
        hasProducts: products.length > 0,
        activeShop: true,
        productCSS: true
      });

    });//fetchAll is a static method in the Product class
    
  }