const router = require('express').Router();
const UserController = require('../controller/userController');

router.post(`/sign-up`, UserController.create);
router.post(`/sign-in`, UserController.login);

module.exports = router;

