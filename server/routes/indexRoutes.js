const router = require('express').Router();
const productRoutes = require('./productRoutes');
const userRoutes = require('./userRoutes');
const cartRoutes = require('./cartRoutes');

router.use('/users', userRoutes);
router.use('/products', productRoutes);
router.use('/cart', cartRoutes);

module.exports = router;