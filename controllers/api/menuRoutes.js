const router = require('express').Router();
const Menu = require('../../models/Menu')

//GET all
router.get('/', async (req, res) => {
    try {
      const payload = await Menu.findAll()
      res.json(payload);
    } catch (err) {
      res.status(500).json({ error: err.message })
    }
  });

// GET BY ID
router.get("/:id", (req, res) => {
    Menu.findByPk(req.params.id).then((menuItem) => {
        res.json({status: "get by ID", menuItem});
    })
    .catch((err) => {
        res.json(err);
    });
});


// CREATE
router.post("/", (req, res) => {
    Menu.create(req.body)
    .then((newItem) => {
        res.json({status: "Created", newItem});
    })
    .catch((err) => {
        res.json(err);
    });
});

//MODIFY by id
router.put('/:id', async (req, res) => {
    try {
      await Menu.update(
        req.body, 
        {
          where: {
            id: req.params.id
          }
        }
      )
      const updatedItem = await Menu.findByPk(req.params.id);
      res.json({ message: 'Item Updated', updatedItem })
    } catch( err ){
      res.status(500).json({ error: err.message })
    }
  })

// DELETE
router.delete("/:id", (req, res) => {
    Menu.destroy({
        where: {
            id: req.params.id,
        },
    })
        .then((deletedItem) => {
            res.json({ status: "Menu item deleted", deletedItem});
        })
        .catch((err) => res.json(err));
})


module.exports = router;