//TODO GET is working but only has a single association.  Gotta revisit index.js

const router = require('express').Router();
const { Order, Customer, Menu } = require('../../models');



// router.get('/', async (req, res) => {
//     const bookData = await Order.findAll()
//     res.json(bookData);
//   });

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
          foreignKey: "menu_id"
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

// // router.post('/', (req, res) => {
// //   Order.create(req.body)
// //     .then((order) => {
// //       if (req.body.order_items.length) {
// //         const orderItemArr = req.body.order_items.map((order_items) => {
// //           return {
// //             order_id: order.id,
// //             order_items,
// //           };
// //         });
// //         return OrderItems.bulkCreate(orderItemArr);
// //       }
// //       res.status(200).json(product);
// //     })
// //     .then((menuItemIds) => res.status(200).json(menuItemIds))
// //     .catch((err) => {
// //       console.log(err);
// //       res.status(400).json(err);
// //     });
// // });

// // // update product
// // router.put('/:id', (req, res) => {
// //   // update product data
// //   Product.update(req.body, {
// //     where: {
// //       id: req.params.id,
// //     },
// //   })
// //     .then((product) => {
// //       if (req.body.tagIds && req.body.tagIds.length) {

// //         ProductTag.findAll({
// //           where: { product_id: req.params.id }
// //         }).then((productTags) => {
// //           // create filtered list of new tag_ids
// //           const productTagIds = productTags.map(({ tag_id }) => tag_id);
// //           const newProductTags = req.body.tagIds
// //             .filter((tag_id) => !productTagIds.includes(tag_id))
// //             .map((tag_id) => {
// //               return {
// //                 product_id: req.params.id,
// //                 tag_id,
// //               };
// //             });

// //           // figure out which ones to remove
// //           const productTagsToRemove = productTags
// //             .filter(({ tag_id }) => !req.body.tagIds.includes(tag_id))
// //             .map(({ id }) => id);
// //           // run both actions
// //           return Promise.all([
// //             ProductTag.destroy({ where: { id: productTagsToRemove } }),
// //             ProductTag.bulkCreate(newProductTags),
// //           ]);
// //         });
// //       }

// //       return res.json(product);
// //     })
// //     .catch((err) => {

// //       res.status(400).json(err);
// //     });
// // });

// router.delete('/:id', async (req, res) => {
//   try {
//     await Order.destroy(
//       {
//         where: {
//           id: req.params.id
//         }
//       }
//     )
//     res.json({ status: "ok" })
//   } catch( err ){
//     res.status(500).json({ error: err.message })
//   }
// });

module.exports = router;





