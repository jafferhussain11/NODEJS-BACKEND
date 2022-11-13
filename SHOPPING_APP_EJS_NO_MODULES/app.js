const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const sequelize = require('./util/database'); //importing the sequelize object

const errorController = require('./controllers/error');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');


app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

sequelize.sync().then(result => {//this will create the tables in the database from all the models defined in the sequelize object

    app.listen(5000);
}).catch(err=>console.log(err));

