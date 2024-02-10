// import models
const Customer = require('./Customer');
const Menu = require('./Menu');
const Order = require('./Order');
const OrderMenu = require('./OrderMenu');
const Reservation = require('./Reservations');


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

Menu.hasMany(Order,
  { foreignKey: 'menu_id' });

Order.hasMany(Menu,
    { foreignKey: 'menu_id' });
//testcode
    // Order.belongsToMany(Menu, { 
    //   through: {
    //     model: OrderMenu,
    //   unique: false }})

    //   Menu.belongsToMany(Order, { 
    //     through: {
    //       model: OrderMenu,
    //     unique: false }})
//testcode
    Menu.belongsToMany(Customer, {
  through: {
    model: OrderMenu,
    unique: false
  },
  as: 'menu_customers'
});
// // customers belong to many menu items (through order)
Customer.belongsToMany(Menu, {
  through: {
    model: OrderMenu,
    unique: false
  },
  as: 'customer_menu'
})

module.exports = {
  Customer,
  Menu,
  Order,
  Reservation,
  OrderMenu,
};