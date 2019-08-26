const User = require('../model/user');
const Cart = require('../model/cart');
const { comparePassword } = require('../helper/bcrypt');
const { generateToken } = require('../helper/jwt')
const { ObjectId } = require('mongodb')
class UserController {

    static create(req, res, next) {
        let rawUser = {};
        const { username, email, password } = req.body
        User.create({
            username,
            email,
            password,
            role: `user`
        })
            .then(function (userCreated) {
                rawUser = userCreated;
                return Cart.create({
                    UserId: ObjectId(rawUser._id)
                })
            })
            .then(function (cart) {
                return User.findByIdAndUpdate({
                    _id : rawUser._id
                },{
                    CartId: ObjectId(cart._id)
                },{
                    new: true
                })
            })
            .then(function(user){
                res.status(201).json(user);
            })
            .catch(next)
    }

    static login(req, res, next) {
        const { email, password } = req.body;
        User.findOne({
            email
        })
            .then(function (user) {
                if (user) {
                    if (comparePassword(password, user.password)) {
                        const payLoad = {
                            _id: user._id,
                            username: user.username,
                            email: user.email,
                            role: user.role,
                            CartId: user.CartId
                        };
                        const role = user.role;
                        const token = generateToken(payLoad);
                        res.status(200).json({ token, role });
                    } else {
                        next({
                            status: 400,
                            message: `Wrong username or password, please check again`
                        });
                    }
                } else {
                    next({
                        status: 400,
                        message: `Wrong username or password, please check again`
                    });
                }
            })
            .catch(next)
    }



}

module.exports = UserController;