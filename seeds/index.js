const sequelize = require('../config/connection');
const seedCustomer = require('./customerData');
const seedMenu = require('./menuData');
const seedReservation = require('./reservationData');
const seedOrder = require('./orderData');
const seedCocktail = require('./cocktailData');
const  { OrderMenu } = require('../models')

const seedAll = async () => {
  await OrderMenu.sync({ force: true });
  await sequelize.sync({ force: true });

  await seedCustomer()

  await seedMenu()

  await seedReservation()
  
  await seedOrder()

  await seedCocktail()
  
  process.exit(0);
};

seedAll();
