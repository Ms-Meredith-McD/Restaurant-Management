const router = require('express').Router();
const customerRoutes = require('./customerRoutes');
const menuRoutes = require('./menuRoutes');
const orderRoutes = require('./orderRoutes');
const reservationRoutes = require('./reservationRoutes');

router.use('/customer', customerRoutes);
router.use('/menu', menuRoutes);
router.use('/order', orderRoutes);
router.use('/reservation', reservationRoutes);

module.exports = router;