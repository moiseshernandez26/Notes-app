const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const app = express();

// package
require('./config/');

// Settings
app.set("view engine","ejs");
app.engine("html",require('ejs').renderFile);
app.set("views",path.join(__dirname,'views'));


// Middlewares
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static(path.resolve(__dirname,'../public')));


// Routes
app.use(require('./routes/'));


// Server
const server = app.listen(process.env.PORT, () => {
    console.log(path.resolve(__dirname,'../public'));
    console.log(`Server on port ${process.env.PORT}`);
});