const router = require('express').Router();
const Book = require('../../models/Reservations');

// GET ALL
router.get('/', (req, res) => {
    Reservations.findAll().then((reservationData) => {
        res.json(reservationData);
    })
    .catch((err) => {
        res.json(err);
    });
});


// GET BY ID
router.get('/:id', (req, res) => {
    Reservations.findByPk(req.params.id).then((reservationData) => {
        res.json(reservationData);
    })
    .catch((err) => {
        res.json(err);
    });
});


// CREATE
router.post('/', (req, res) => {
    Reservations.create(req.body)
        .then((newReservation) => {
            res.json(newReservation);
        })
        .catch((err) => {
            res.json(err);
        });
});

// UPDATE 
router.put('/:id', (req, res) => {
    Reservations.update(
        req.body,
        {
            where: {
            id: req.params.isbn,
            },
        }
    )
        .then((updatedReservation) => {
            res.json(updatedReservation);
        })
        .catch((err) => res.json(err));
});



// DELETE
router.delete('/:id', (req, res) => {
    Reservation.destroy({
        where: {
            id: req.params.id,
        },
    })
        .then((deletedReservation) => {
            res.json(deletedReservation);
        })
        .catch((err) => res.json(err));
});
