require('dotenv').config()
const express = require('express');
const morgan = require('morgan');
const methodOverride = require('method-override')
const app = express();
const path = require('path');
const session = require('express-session');
const MongoConnect = require('connect-mongo');


// ==================
// CONFIGURE MONGOOSE
// ==================
require('./configs/database');


// ********************
//    MIDDLEWARE
// ********************

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method'));
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    store: MongoConnect.create({
        mongoUrl: process.env.MONGODB_URI
    }),
    cookie: { secure: process.env.NODE_ENV === 'Production', httpOnly: true }
}));

// Set EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static(path.join(__dirname, 'public')));

// ***************************
//      ROUTES 
// ***************************

// Seed Route
app.use('/', require('./routes/seed'));

// Auth Routes
app.use('/', require('./routes/auth'));

// Home Route
app.use('/', require('./routes/home'));

// Book Routes
app.use('/', require('./routes/book'));

// ********************
//    LISTENNER
// ********************


app.listen(process.env.PORT, () => {
    console.log(`🎧 Server is running on http://localhost:${process.env.PORT}`);
})