const router = require('express').Router();
const Menu = require('../../models/Menu')

//TODO get / findall route
//TODO put route

// // Get
// router.get("/", (req, res) => {
//   res.json({ status: "good job getting!"});

// })



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

// // 
// router.put("/:id", (req, res) => {
//   res.json({ status: "put working!"});
// })

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