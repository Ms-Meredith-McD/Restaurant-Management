const router = require('express').Router();
const customerRoutes = require('./customerRoutes');
// const menuRoutes = require('./menuRoutes');
// const orderRoutes = require('./orderRoutes');
// const reservationRoutes = require('./reservationRoutes');

router.use('/customers', customerRoutes);
// router.use('/menu', menuRoutes);
// router.use('/order', orderRoutes);
// router.use('/reservations', reservationRoutes);

module.exports = router;