const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductShcema = new Schema({
    url: {
        type: String,
        required: [true, `Please upload product image`]
    },
    name: {
        type: String,
        required: [true, `Product's name cannot be empty`]
    },
    price: {
        type: Number,
        required: [true, `Product's price cannot be empty`]
    }
    ,
    description: {
        type: String,
        required: [true, `Product's description cannot be empty`]
    },
    stock: {
        type: Number,
        required: [true,  `Product's stock cannot be empty`]
    }
},{
    timestamps: true,
    versionKey: false
})

const Product = mongoose.model('Product', ProductShcema);

module.exports = Product;
