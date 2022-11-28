const express = require('express');
const parser = require('body-parser');
const passengerRoute = require('./routes/passengers');
const driverRoute = require('./routes/drivers');
const cabRoute = require('./routes/cabdetails');
const bookingRoute = require('./routes/booking');
const path = require('path');
const cookieSession = require('cookie-session');
const {engine} = require('express-handlebars');
const authMiddleware = require('./middlewares/authenticationMiddleware');

//creating an express app.
const app = express();

//configuring the app to use handlebars template engine
app.engine('handlebars',engine());
app.set('view engine','handlebars');

//configuring body parser.
app.use(parser.urlencoded({extended:true}));

//configuring static files middleware.
app.use("/static", express.static(path.join(__dirname,'static')));
// app.use(express.static(path.join(__dirname, 'static')))

app.use(cookieSession({
    name:'session',
    httpOnly : true,
    keys: ["zxcvbnmasdfghqwertyu"],
    maxAge: 24 * 60 * 60 * 1000
}));

app.use(authMiddleware);

app.use(passengerRoute);
app.use(driverRoute);
app.use(cabRoute);
app.use(bookingRoute);
app.listen(80);