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




// UPDATE 
router.put('/:isbn', (req, res) => {
    Book.update(
        req.body,
        {
            where: {
                isbn: req.params.isbn,
            },
        }
    )
        .then((updatedBook) => {
            res.json(updatedBook);
        })
        .catch((err) => res.json(err));
});



// DELETE
router.delete('/:id', (req, res) => {
    Book.destroy({
        where: {
            id: req.params.id,
        },
    })
        .then((deletedBook) => {
            res.json(deletedBook);
        })
        .catch((err) => res.json(err));
});