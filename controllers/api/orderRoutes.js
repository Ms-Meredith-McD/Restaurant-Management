//TODO GET is working but only has a single association.  Gotta revisit index.js

const router = require('express').Router();
const { Order, Customer, Menu } = require('../../models');

//GET all orders
router.get('/', async (req, res) => {
      try {
    const payload = await Order.findAll({
      include: [
        {
          model: Customer,
          foreignKey: "customer_id"
        },
        {
          model: Menu,
          through: OrderMenu
        },
      ],
    });

    res.json(payload);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

//GET order by id
router.get('/:id', async (req, res) => {
  const payload = await Order.findByPk(req.params.id,{
    include:
    [
        {
          model: Customer,
          foreignKey: "customer_id"
          
        },
        {
          model: Menu,
          foreignKey: "menu_id"
          
        },
      ],
  })
  res.json(payload);
});

//POST order
router.post('/', async (req, res) => {
  try {
      const orderData = req.body;
      // ... (customer_id logic)
      const customerId = req.session.customer_id;
      console.log(customerId);
      // Create a new order in the database
      const newOrder = await Order.create({
          customer_id: customerId,
          subtotal: parseFloat(orderData.subtotal),
          tax: parseFloat(orderData.tax),
          tip: parseFloat(orderData.tip),
          total: parseFloat(orderData.total),
          items: orderData.items,
      });

      // await newOrder.save();
      res.status(201).json({ message: 'Order placed successfully', order: newOrder.toJSON() });
  } catch (error) {
      console.error('Error placing order:', error);
      res.status(500).json({ error: 'Internal Server Error' });
  }
});

//DELETE order
router.delete('/:id', async (req, res) => {
  try {
    await Order.destroy(
      {
        where: {
          id: req.params.id
        }
      }
    )
    res.json({ status: "ok" })
  } catch( err ){
    res.status(500).json({ error: err.message })
  }
});

module.exports = router;




