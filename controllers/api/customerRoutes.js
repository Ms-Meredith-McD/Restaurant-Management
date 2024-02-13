const express = require('express');
const router = express.Router();
const Customer = require('../../models/Customer');
const bcrypt = require('bcrypt');

router.post('/', async (req, res) => {
  try {
      const hashedPassword = await bcrypt.hash(req.body.password, 10);
      const customerData = await Customer.create({
          email: req.body.email,
          password: hashedPassword
      });

      req.session.save(() => {
          req.session.user_id = customerData.id;
          req.session.logged_in = true;

          res.status(200).json(customerData);
      });
  } catch (err) {
    res.status(400).json(err);
    console.log(err)
  }
});

router.post('/login', async (req, res) => {
  try {
    const customerData = await Customer.findOne({ where: { email: req.body.email } });

    if (!customerData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }
    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }
    req.session.save(() => {
      req.session.user_id = customerData.id;
      req.session.logged_in = true;
      
      res.json({ user: customerData, message: 'You are now logged in!' });
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/', async (req, res) => {
    try {
      const customerData = await Customer.create(req.body);
  
      req.session.save(() => {
        req.session.customer_id = customerData.id;
        req.session.logged_in = true;
        res.status(200).json(customerData);
      });
    } catch (err) {
      res.status(400).json(err);
      console.log(err)
    }
  });

router.post('/login', async (req, res) => {
    try {
      const customerData = await Customer.findOne({ where: { email: req.body.email } });
  
      if (!customerData) {
        res
          .status(400)
          .json({ message: 'Incorrect email or password, please try again' });
        return;
      }
      const validPassword = await customerData.checkPassword(req.body.password);
  
      if (!validPassword) {
        res
          .status(400)
          .json({ message: 'Incorrect email or password, please try again' });
        return;
      }
      req.session.save(() => {
        req.session.customer_id = customerData.id;
        req.session.logged_in = true;
        
        res.json({ user: customerData, message: 'You are now logged in!' });
      });
    } catch (err) {
      res.status(400).json(err);
    }
  });


router.get('/', (req, res) => {
    Customer.findAll()
        .then(customers => res.json(customers))
        .catch(err => res.status(500).json({ error: err.message }));
});


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

