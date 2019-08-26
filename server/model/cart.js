const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CartSchema = new Schema({
    UserId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    cartList: []
})

const Cart = mongoose.model('Cart', CartSchema);

module.exports = Cart;