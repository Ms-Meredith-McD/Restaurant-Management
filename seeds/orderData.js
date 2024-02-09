const Order = require('../models/Order');

const orderData = [
  {
    "customer_id": 4,
    "menu_id": 20
},
{
    "customer_id": 1,
    "menu_id": 21
},
{
    "customer_id": 10,
    "menu_id": 9
},
{
    "customer_id": 2,
    "menu_id": 1
},
{
    "customer_id": 4,
    "menu_id": 16
}
];

const seedOrder = () => Order.bulkCreate(orderData);

module.exports = seedOrder;
