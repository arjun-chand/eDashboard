const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/Ecommerce');
console.log("connected to MongoDB Database");