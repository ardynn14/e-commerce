const { verifyToken } = require('../helper/jwt');
const Cart = require('../model/cart');

module.exports = {
    Authentication: (req, res, next) => {
        if (req.headers.token) {
            try {
                let decode = verifyToken(req.headers.token)
                req.decode = decode
                // console.log(req.decode);
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
        const _id = user.CartId;
        Cart.findById({
            _id
        })
            .then(function (cart) {
                if(cart._id == user.CartId){
                    next()
                } else {
                    next({status: 401, message:"Unauthorized action!"})
                }
            })
            .catch(next)
    }
}