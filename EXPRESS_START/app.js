const http = require('http');
const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const app = express();


const adminRoutes = require('./routes/admin.js');
const shopRoutes = require('./routes/shop.js');
const contactusRoutes = require('./routes/contact.js');

app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname,'public')));// this is a built in middleware that serves static files
app.use('/admin',adminRoutes);
app.use('/shop',shopRoutes);
app.use(contactusRoutes);

app.use((req, res, next) => {
    
    res.status(404).sendFile(path.join(__dirname,'views','pageNotFound.html'));
});

app.listen(4000);