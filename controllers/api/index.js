const router = require('express').Router();
const customerRoutes = require('./customerRoutes');
const menuRoutes = require('./menuRoutes');
const orderRoutes = require('./orderRoutes');
const reservationsRoutes = require('./reservationRoutes');

router.use('/customers', customerRoutes);
router.use('/menu', menuRoutes);
router.use('/menu', orderRoutes);
router.use('/menu', reservationsRoutes);

module.exports = router;