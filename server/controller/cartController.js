const Cart = require('../model/cart');
const Product = require('../model/product');
const { ObjectId } = require('mongodb');

class CartController {

    static add(req, res, next) {
        const _id = req.decode.CartId;
        const item_id = req.body.id;
        Product.findById({
            _id: item_id
        })
            .then(function (product) {
                // console.log(product);
                return Cart.updateOne(
                    { _id },
                    { $push: { cartList: product } },
                );
            })
            .then(function () {
                res.status(200).json({
                    message: `Berhasil menambahkan produk ke keranjang`
                });
            })
            .catch(next)
    }

    static read(req, res, next) {
        const _id = req.decode.CartId;
        Cart.findById({
            _id
        })
            .then(function (data) {
                res.status(200).json(data);
            })
            .catch(next)
    }

    static delete(req, res, next) {
        const _id = req.decode.CartId;
        const item_id = req.params.id;
        Cart.update({ _id }, { "$pull": { "cartList": { "_id": ObjectId(item_id) } } }, { safe: true, multi: true })
            .then(function () {
                res.status(200).json({
                    message: `item telah di hilangkan dari keranjang`
                });
            })
            .catch(next)
    }

}

module.exports = CartController;