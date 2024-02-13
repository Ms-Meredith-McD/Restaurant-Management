const { Order, Customer, Menu, OrderMenu } = require('../models');

// Helper function to fetch customer name by ID
const lookupCustomerName = async (customerId) => {
    const customer = await Customer.findByPk(customerId);
    return customer ? customer.name : null;
};

// Register the helper function with Handlebars
const handlebars = require('handlebars');
handlebars.registerHelper('lookupCustomerName', lookupCustomerName);