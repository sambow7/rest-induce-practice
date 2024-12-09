require('dotenv').config()
const express = require('express');
const morgan = require('morgan');
const methodOverride = require('method-override')
const app = express();
const path = require('path');


// ==================
// CONFIGURE MONGOOSE
// ==================
require('./configs/database');


// ********************
//    MIDDLEWARE
// ********************

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(methodOverride('_method'))

// Set EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static(path.join(__dirname, 'public')))

// ***************************
//      ROUTES 
// ***************************

// Seed Route
app.use('/', require('./routes/seed'));

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