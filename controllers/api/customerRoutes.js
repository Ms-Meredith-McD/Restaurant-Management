const express = require('express');
const router = express.Router();
const Customer = require('../../models/Customer');


router.post('/', (req, res) => {
    const newCustomerData = req.body;
    Customer.create(newCustomerData)
        .then(customer => res.status(201).json(customer))
        .catch(err => res.status(500).json({ error: err.message }));
});


router.get('/', (req, res) => {
    Customer.findAll()
        .then(customers => res.json(customers))
        .catch(err => res.status(500).json({ error: err.message }));
});


router.get('/:Id', (req, res) => {
    const customerId = req.params.customerId;
    Customer.findByPk(customerId)
        .then(customer => {
            if (!customer) {
                return res.status(404).json({ error: 'Customer not found' });
            }
            res.json(customer);
        })
        .catch(err => res.status(500).json({ error: err.message }));
});


router.put('/:Id', (req, res) => {
    const customerId = req.params.customerId;
    const updatedCustomerData = req.body;
    Customer.findByPk(customerId)
        .then(customer => {
            if (!customer) {
                return res.status(404).json({ error: 'Customer not found' });
            }
            return customer.update(updatedCustomerData);
        })
        .then(updatedCustomer => res.json(updatedCustomer))
        .catch(err => res.status(500).json({ error: err.message }));
});


router.delete('/customers/:Id', (req, res) => {
    const customerId = req.params.customerId;
    Customer.findByPk(customerId)
        .then(customer => {
            if (!customer) {
                return res.status(404).json({ error: 'Customer not found' });
            }
            return customer.destroy();
        })
        .then(() => res.status(204).end())
        .catch(err => res.status(500).json({ error: err.message }));
});

module.exports = router;

