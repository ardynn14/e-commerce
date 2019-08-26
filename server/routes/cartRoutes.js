const router = require('express').Router();
const CartController = require('../controller/cartController');
const { Authentication, Authorization } = require('../middleware/autho');

router.use(Authentication);
router.get('/', CartController.read);
router.use(Authorization);
router.post('/', CartController.add);
router.delete('/:id', CartController.delete);

module.exports = router;