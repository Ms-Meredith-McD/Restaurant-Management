const sequelize = require('../config/connection');
const seedCustomer = require('./customerData');
const seedMenu = require('./menuData');
const seedReservation = require('./reservationData');
const seedOrder = require('./orderData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedGallery();

  await seedPaintings();

  process.exit(0);
};

seedAll();
