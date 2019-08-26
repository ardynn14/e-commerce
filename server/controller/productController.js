const Product = require('../model/product');

class ProductController {

    static create(req, res, next) {
        const { cloudStoragePublicUrl } = req.file;
        const { name, price, description, stock } = req.body;
        Product.create({
            url: cloudStoragePublicUrl,
            name,
            price,
            description,
            stock
        })
            .then(function (product) {
                res.status(201).json(product);
            })
            .catch(next);
    }

    static delete(req, res, next) {
        const _id = req.params.id;
        Product.findByIdAndDelete({
            _id
        })
            .then(function () {
                res.status(200).json({
                    message: `Sukses delete item with ID: ${_id}`
                });
            })
            .catch(next)
    }

    static edit(req, res, next) {
        const _id = req.params.id;
        const { name, price, description, stock } = req.body;
        Product.findByIdAndUpdate({
            _id
        }, {
                name,
                price,
                description,
                stock
            }, {
                new: true
            })
            .then(function (product) {
                res.status(200).json(product);
            })
            .catch(next)
    }

    static readAll(req, res, next) {
        Product.find({}, null, { sort: { createdAt: -1 } })
            .then(function (data) {
                res.status(200).json(data)
            })
            .catch(next)
    }
}

module.exports = ProductController;