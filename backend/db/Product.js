const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
        productName: String,
        price: String,
        category: String,
        userId: String,
        brand: String,
        description: String,
        color:String,
        imageSrc:String
        
})
module.exports = mongoose.model('products',productSchema)