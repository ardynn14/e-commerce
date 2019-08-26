const router = require('express').Router();
const ProductController = require('../controller/productController');
const { Authentication, Authorization } = require('../middleware/authen');
const picture = require('../middleware/picture');


router.get('/', ProductController.readAll);
router.use(Authentication);
router.use(Authorization);
router.post('/', picture.multer.single('file'),
    picture.sendUploadToGCS, ProductController.create);
router.delete('/:id', ProductController.delete);
router.patch('/:id', ProductController.edit);

module.exports = router;