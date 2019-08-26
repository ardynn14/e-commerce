const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { generatePassword } = require('../helper/bcrypt');

const UserSchema = new Schema({
    username: {
        type: String,
        required: [true, `Name can not be empty`]
    },
    email: {
        type: String,
        required: [true, `Email can not be empty`],
        validate: [{
            validator: function emailFormat(email) {
                let checkFormat = /\S+@\S+\.\S+/;
                return checkFormat.test(email);
            },
            message: props => `${props} is a invalid email format`
        }, {
            validator: function emailUnique(email) {
                return User.findOne({ email: this.email })
                    .then(function (user) {
                        if (user) {
                            return false;
                        } else {
                            return true;
                        }
                    })
                    .catch(function (err) {
                        return false;
                    })
            },
            message: props => `Email ${props.value} already registered by another user`
        }]
    },
    role: {
        type: String,
        required: [true, `Role cannot be empty`]
    },
    password: {
        type: String,
        required: [true, `Password cannot be empty`]
    },
    CartId: { type: Schema.Types.ObjectId, ref: 'Cart' }
}, {
        timestamps: true,
        versionKey: false
    });

UserSchema.pre('save', function (next) {
    this.password = generatePassword(this.password);
    next();
})

const User = mongoose.model('User', UserSchema);

module.exports = User;