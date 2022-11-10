const fs = require('fs');
const path = require('path');

const p = path.join(path.dirname(process.mainModule.filename),
'data', 
'cart.json'
);

module.exports = class Cart {

    static addProduct(id, productPrice) {


    // fetch previous cart from file
        fs.readFile(p, (err, fileContent) => {

            let cart = {products: [], totalPrice: 0};
            if(!err){

                cart = JSON.parse(fileContent);
            }
            const existingProductIndex = cart.products.findIndex(prod => prod.id === id);
            if(existingProductIndex !== -1){
                cart.products[existingProductIndex].qty += 1;
            }else{
                cart.products.push({id: id, qty: 1});
            }
            cart.totalPrice = cart.totalPrice + +productPrice;
            fs.writeFile(p, JSON.stringify(cart), err => {
                console.log(err);
            });
            

        });
    }
    
};     

         
// analyze the cart and look for duplicates

// add new product to cart