// import models
const Customer = require('./Customer');
const Menu = require('./Menu');
const Order = require('./Order');
const Reservation = require('./Reservations');
const Cocktail = require('./Cocktails');


// Reservation belong to Customer
Reservation.belongsTo(Customer, {
  foreignKey: 'customer_id'
});

// Customer has many Reservations
Customer.hasMany(Reservation, {
  foreignKey: 'customer_id',
  onDelete: 'CASCADE'
});

Order.belongsTo(Customer,
  { foreignKey: 'customer_id' });

Customer.hasMany(Order,
  { foreignKey: 'customer_id' });


module.exports = {
  Customer,
  Menu,
  Order,  
  Reservation,
  Cocktail,
};