// import models
const Customer = require('./Customer');
const Menu = require('./Menu');
const Order = require('./Order');
const Reservation = require('./Reservations');

//reservation and customer w/ customer_id
//customer and menu through order

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

Order.belongsTo(Menu,
  { foreignKey: 'menu_id' })

Customer.hasMany(Order,
  { foreignKey: 'customer_id' });

Menu.hasMany(Order,
  { foreignKey: 'menu_id' })

Menu.belongsToMany(Customer, {
  through: {
    model: Order,
    unique: false
  },
  as: 'menu_customers'
});
// // customers belong to many menu items (through order)
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
  Reservation,
};