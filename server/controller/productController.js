const Product = require('../model/product');

class ProductController {

    static create(req, res, next) {
        console.log(req.file);
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
                    message: `Sukses delete Product with ID: ${_id}`
                });
            })
            .catch(next)
    }

    static edit(req, res, next) {
        console.log(req.body);
        const data = {};
        req.body.name && (data.name = req.body.name);
        req.body.price && (data.price = req.body.price);
        req.body.stock && (data.stock = req.body.stock);
        req.body.description && (data.description = req.body.description);
        if (req.file) req.file.cloudStoragePublicUrl && (data.url = req.file.cloudStoragePublicUrl);
        console.log(data);
        const _id = req.params.id;
        Product.findByIdAndUpdate({
            _id
        },
            data,
            {
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

    static readOne(req, res, next) {
        const _id = req.params.id;
        Product.findOne({
            _id
        })
            .then(function (data) {
                res.status(200).json(data)
            })
            .catch(next)
    }
}

module.exports = ProductController;