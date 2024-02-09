const  Customer  = require('../models/Customer');

const customerData = [
  {
    "name": "James Smith",
    "email": "customer1@example.com",
    "password": "oGbqX2tD",
    "is_manager": false
},
{
    "name": "Maria Garcia",
    "email": "customer2@example.com",
    "password": "wji5TOVx",
    "is_manager": true
},
{
    "name": "Chen Wei",
    "email": "customer3@example.com",
    "password": "m0bo3Ry1",
    "is_manager": false
},
{
    "name": "Aarav Patel",
    "email": "customer4@example.com",
    "password": "ocod66Mq",
    "is_manager": false
},
{
    "name": "Olivia Johnson",
    "email": "customer5@example.com",
    "password": "FONaHptT",
    "is_manager": false
},
{
    "name": "Liam Nguyen",
    "email": "customer6@example.com",
    "password": "KeqbFmeL",
    "is_manager": false
},
{
    "name": "Sophia Martinez",
    "email": "customer7@example.com",
    "password": "Wc0KAHg5",
    "is_manager": true
},
{
    "name": "Noah Kim",
    "email": "customer8@example.com",
    "password": "XGxv5wwS",
    "is_manager": false
},
{
    "name": "Emma Rodriguez",
    "email": "customer9@example.com",
    "password": "FVRLWNXs",
    "is_manager": false
},
{
    "name": "Amir Ali",
    "email": "customer10@example.com",
    "password": "8aTTofRj",
    "is_manager": false
}

];

const seedCustomer = () => Customer.bulkCreate(customerData);

module.exports = seedCustomer;
