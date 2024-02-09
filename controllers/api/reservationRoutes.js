// PUT/UPDATE route does NOT work -- line 39

const router = require('express').Router();
const Reservations = require('../../models/Reservations');

// GET ALL
router.get('/', (req, res) => {
    Reservations.findAll().then((reservationData) => {
        res.json({status: "get all"});
    })
    .catch((err) => {
        res.json(err);
    });
});


// GET BY ID
router.get('/:id', (req, res) => {
    Reservations.findByPk(req.params.id).then((reservationData) => {
        res.json({status: "get by ID"});
    })
    .catch((err) => {
        res.json(err);
    });
});


// CREATE
router.post('/', (req, res) => {
    Reservations.create(req.body)
        .then((newReservation) => {
            res.json({status: "post"});
        })
        .catch((err) => {
            res.json(err);
})});


// UPDATE   - come back to this, so far there is a validation error when run in Postman, unknown why
// router.put('/:id', (req, res) => {
//     Reservations.update(
//         req.body,
//         {
//             where: {
//             id: req.params.isbn,
//             },
//         }
//     )
//         .then((updatedReservation) => {
//             res.json({status: "update"});
//         })
//         .catch((err) => res.json(err));
// });



// DELETE
router.delete('/:id', (req, res) => {
    Reservations.destroy({
        where: {
            id: req.params.id,
        },
    })
        .then((deletedReservation) => {
            res.json({ status: "bah-leeted"});
        })
        .catch((err) => res.json(err));
});

module.exports = router;