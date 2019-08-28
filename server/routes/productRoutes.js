const router = require('express').Router();
const ProductController = require('../controller/productController');
const { Authentication, Authorization } = require('../middleware/authen');
const picture = require('../middleware/picture');


router.get('/', ProductController.readAll);
router.use(Authentication);
router.use(Authorization);
router.get('/:id', ProductController.readOne);
router.post('/', picture.multer.single('file'),
    picture.sendUploadToGCS, ProductController.create);
router.delete('/:id', ProductController.delete);
router.patch('/:id', picture.multer.single('file'),
    picture.sendUploadToGCS, ProductController.edit);

module.exports = router;