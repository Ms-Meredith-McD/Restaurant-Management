const router = require('express').Router();
const Reservations = require('../../models/Reservations');

// GET ALL
router.get('/', (req, res) => {
    Reservations.findAll().then((reservationData) => {
        res.json(reservationData);
    });
});


// CUSTOMIZED FIND 
router.get('/:id', (req, res) => {
    Reservations.findAll()

    }).then((reservationData) => {
        res.json(reservationData);
    });




// GET BY ID
router.get('/:id', (req, res) => {
    Book.findByPk(req.params.id).then((bookData) => {
        res.json(bookData);
    });
});




// CREATE
router.post('/', (req, res) => {
    Book.create(req.body)
        .then((newBook) => {
            res.json(newBook);
        })
        .catch((err) => {
            res.json(err);
        });
});
