router.post('/', (req, res) => {
    Order.create(req.body)
        .then((order) => {
          // if there's product tags, we need to create pairings to bulk create in the ProductTag model
          if (req.body.menuIds.length) {
            const menuIdsArr = req.body.menuIds.map((menu_id) => {
              return {
                order_id: order.id,
                customer_id,
                menu_id,
              };
            });
            return Menu.bulkCreate(menuIdsArr);
    
          }
          // res.status(200).json(order);
          res.json(menuTagIdsArr);
        })
        .then((menuTagIds) => res.status(200).json(menuTagIds))
        .catch((err) => {
          console.log(err);
          res.status(400).json(err);
        });
    });
    ﻿
    tyfighter8791
    tyfighter8791