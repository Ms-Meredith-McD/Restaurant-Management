const { Customer } = require('../models');

const customerData = [

];

const seedCustomer = () => Customer.bulkCreate(customerData);

module.exports = seedCustomer;
