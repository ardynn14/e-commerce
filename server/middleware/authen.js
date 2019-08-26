const { verifyToken } = require('../helper/jwt');
const Product = require('../model/product');

module.exports = {
    Authentication: (req, res, next) => {
        if (req.headers.token) {
            try {
                let decode = verifyToken(req.headers.token)
                req.decode = decode
                next()
            }
            catch(err){
                throw new Error({ status: 401, message: "invalid token", err: err })
            }
        }
        else {
            throw new Error({ status: 401, message: "please login first" })
        }
    }
    ,
    Authorization: (req, res, next) => {
        const user = req.decode;
        if(user.role === 'admin'){
            next()
        }else{
            next({status: 401, message:"Unauthorized action!"})
        }
    }
    // Authorization: (req, res, next) => {
    //     const _id = req.params.productId;
    //     const user = req.decode;
    //     Product.findById({
    //         _id
    //     })
    //         .then(function (product) {
    //             if(product.UserId == user._id){
    //                 next()
    //             } else {
    //                 next({status: 401, message:"Unauthorized action!"})
    //             }
    //         })
    //         .catch(next)
    // }
}