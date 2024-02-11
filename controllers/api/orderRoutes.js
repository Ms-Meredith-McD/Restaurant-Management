//TODO GET is working but only has a single association.  Gotta revisit index.js

const router = require('express').Router();
const { Order, Customer, Menu, OrderMenu } = require('../../models');

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
          as: "menu_order",
        },
      ],
    });

    res.json(payload);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});



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

// router.post('/', async (req, res) => {
//   const order = await Order.create(req.body);
//   let customerId = req.body.customer_id
//   // let orderId = order.id
//   if (req.body.menu_ids.length) {
//     const orderCustomerIdArr = req.body.menu_ids.map(menu_id => {
//       return {       
//         customer_id: customerId,
//         order_id: order.id,
//         menu_id,
//       }
//     })
//     const orderMenuRecords = await OrderMenu.bulkCreate(orderCustomerIdArr);
//     // const menuIds = orderMenuRecords.map(record => record.menu_id)
//       res.status(200).json(orderMenuRecords);
//   }
// })
 
// router.post('/', (req, res) => {
  
//   Order.create(req.body)
//     .then((order) => {
//       // if there's product tags, we need to create pairings to bulk create in the ProductTag model
//       if (req.body.itemIds.length) {
//         const itemArr = req.body.itemsIds.map((menu_id) => {
//           return {
//             customer_id,
//             menu_id,
//           };
//         });
//         return OrderMenu.bulkCreate(itemArr);
//       }
//       // if no product tags, just respond
//       res.status(200).json(order);
//     })
//     .then((menuItemIds) => res.status(200).json(menuItemIds))
//     .catch((err) => {
//       console.log(err);
//       res.status(400).json(err);
//     });
// });

// PUT update product
// router.put('/:id', (req, res) => {
//   update product data
//   Product.update(req.body, {
//     where: {
//       id: req.params.id,
//     },
//   })
//     .then((product) => {
//       if (req.body.tagIds && req.body.tagIds.length) {

//         ProductTag.findAll({
//           where: { product_id: req.params.id }
//         }).then((productTags) => {
//           // create filtered list of new tag_ids
//           const productTagIds = productTags.map(({ tag_id }) => tag_id);
//           const newProductTags = req.body.tagIds
//             .filter((tag_id) => !productTagIds.includes(tag_id))
//             .map((tag_id) => {
//               return {
//                 product_id: req.params.id,
//                 tag_id,
//               };
//             });

//           // figure out which ones to remove
//           const productTagsToRemove = productTags
//             .filter(({ tag_id }) => !req.body.tagIds.includes(tag_id))
//             .map(({ id }) => id);
//           // run both actions
//           return Promise.all([
//             ProductTag.destroy({ where: { id: productTagsToRemove } }),
//             ProductTag.bulkCreate(newProductTags),
//           ]);
//         });
//       }

//       return res.json(product);
//     })
//     .catch((err) => {

//       res.status(400).json(err);
//     });
// });

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





