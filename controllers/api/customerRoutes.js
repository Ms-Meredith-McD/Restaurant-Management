const express = require('express');
const router = express.Router();
const Customer = require('../../models/Customer');


//Sign up path
router.post('/', async (req, res) => {
  try {
      const customerData = await Customer.create({
          name: req.body.name,
          email: req.body.email,
          password: req.body.password,
          is_manager: req.body.is_manager
      });

      req.session.save(() => {
          req.session.customer_id = customerData.id;
          req.session.is_manager = customerData.is_manager;
          req.session.logged_in = true;
          res.status(200).json(customerData);
      });
  } catch (err) {
    res.status(400).json(err);
    console.log(err)
  }
});

//Login path
router.post('/login', async (req, res) => {
  console.log(req.body)
    try {
      const customerData = await Customer.findOne({ where: { email: req.body.email } });
      
      if (!customerData) {
        res
          .status(400)
          .json({ message: 'Incorrect email or password, please try again' });
        return;
      }
      const validPassword = await customerData.checkPassword(req.body.password);
      console.log(validPassword)
      if (!validPassword) {
        res
          .status(400)
          .json({ message: 'Incorrect email or password, please try again' });
        return;
      }
      req.session.save(() => {
        req.session.customer_id = customerData.id;
        req.session.is_manager = customerData.is_manager;
        req.session.logged_in = true;
        res.json({ user: customerData.name, message: 'You are now logged in!' });
      });
    } catch (err) {
      res.status(400).json(err);
    }
  });

  //Logout path
router.post('/logout', (req, res) => {
  // When the user logs out, the session is destroyed
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

//GET all customers
router.get('/', (req, res) => {
    Customer.findAll()
        .then(customers => res.json(customers))
        .catch(err => res.status(500).json({ error: err.message }));
});

//GET customer by id
router.get('/:Id', (req, res) => {
    const customerId = req.params.Id;
    Customer.findByPk(customerId)
        .then(customer => {
            if (!customer) {
                return res.status(404).json({ error: 'Customer not found' });
            }
            res.json(customer);
        })
        .catch(err => res.status(500).json({ error: err.message }));
});

//Modify customer by id
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

//DELETE customer by id
router.delete('/:Id', (req, res) => {
    const customerId = req.params.Id;
    console.log(customerId)
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

