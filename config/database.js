const mongoose = require('mongoose');
const db = mongoose.connection;


mongoose.connect(process.env.MONGODB_URI);

db.on('connected', () => console.log('mongoDB connect'))
db.on('error', (err) => console.log(err.message, 'is mongoDB connected'))