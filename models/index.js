// import models
const Customer = require('./Customer');
const Menu = require('./Menu');
const Order = require('./Order');
const Reservations = require('./Reservations');

//reservation and customer w/ customer_id
//customer and menu through order

// Reservation belong to Customer
Reservations.belongsTo(Customer, {
  foreignKey: 'customer_id'
});

// Customer has many Reservations
Customer.hasMany(Reservations, {
  foreignKey: 'customer_id',
  onDelete: 'CASCADE'
})
// menu items belongs to many customers (through order)
Menu.belongsToMany(Customer, {
  through: {
    model: Order,
    unique: false
  },
  as: 'menu_customers'
});
// customers belong to many menu items (through order)
Customer.belongsToMany(Menu, {
  through: {
    model: Order,
    unique: false
  },
  as: 'customer_menu'
})

module.exports = {
  Customer,
  Menu,
  Order,
  Reservations,
};