const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const sequelize = require('./util/database'); //importing the sequelize object
const Product = require('./models/product'); //importing the product model
const User = require('./models/user'); //importing the user model
const Cart = require('./models/cart'); //importing the cart model
const CartItem = require('./models/cart-item'); //importing the cart-item model

const errorController = require('./controllers/error');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');


app.use(bodyParser.urlencoded({ extended: false }));//
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => { //middleware that adds a user to the request object

    User.findByPk(1).then(user => {
        req.user = user;
        next();
    }).catch(err => console.log(err));
});

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

Product.belongsTo(User, {constraints: true, onDelete: 'CASCADE'}); //this is a sequelize method
User.hasMany(Product); //this is a sequelize method
User.hasOne(Cart); //one to one relationship between user and cart
Cart.belongsToMany(Product, {through: CartItem}); //many to many relationship between cart and product
Product.belongsToMany(Cart, {through: CartItem}); //many to many relationship between product and cart


//remove force: true in production
sequelize.sync()
         .then(result => {

            return User.findByPk(1);
            //app.listen(5000);
         })
        .then(user => {
            if(!user) {

                return User.create({name: 'Lulu', email:'luluthekingofcats@gmail.com'});
            }
            return user;
        })
        .then(user => {
            //console.log(user);
            return user.createCart();
            
        })
        .then(app.listen(5000))
        .catch(err=>console.log(err));

