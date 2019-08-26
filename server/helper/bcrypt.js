const bcryptjs = require('bcryptjs');

module.exports = {
    generatePassword: (password) => {
        const secret = bcryptjs.genSaltSync(10);
        const hash = bcryptjs.hashSync(password, secret);
        return hash;
    },

    comparePassword: (password, hash) => {
        return bcryptjs.compareSync(password, hash);
    }
}