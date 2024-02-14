
const router = require('express').Router();
const Reservations = require('../../models/Reservations');
const Customers = require('../../models/Customer');
const nodemailer = require('../../config/nodemailerConfig');

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
router.post('/', async (req, res) => {
    try {
      const customerId = req.session.customer_id;
        // Create the reservation
      const newReservation = await Reservations.create(req.body);
      
      // Retrieve customer information associated with the reservation
      const customer = await Customers.findByPk(req.body.customer_id);
      console.log(customer.email);
      // Send email to the customer
      const customerMailOptions = {
        from: 'confirmreservation1@zohomail.com',
        to: customer.email,
        subject: 'Reservation Confirmation',
        text: `Thank you for your reservation of ${newReservation.party_size} at ${newReservation.reservation_datetime}. If you need to alter or cancel your reservation, please call us at 612-123-4567.`,
      };
  
      nodemailer.sendMail(customerMailOptions, (error, info) => {
        if (error) {
          console.error('Error sending email to customer:', error);
        } else {
          console.log('Email sent to customer:', info.response);
        }
      });
  
      // Send email to confirmreservation1@gmail.com
      const adminMailOptions = {
        from: 'confirmreservation1@zohomail.com',
        to: 'confirmreservation1@zohomail.com',
        subject: 'New Reservation',
        text: `New reservation of ${newReservation.party_size} at ${newReservation.reservation_datetime}.`,
      };
  
      nodemailer.sendMail(adminMailOptions, (error, info) => {
        if (error) {
          console.error('Error sending email to admin:', error);
        } else {
          console.log('Email sent to admin:', info.response);
        }
      });
  
      res.json(newReservation);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });


//Update reservation
router.put('/:id', (req, res) => {
    Reservations.update(
        req.body,
        {
            where: {
            id: req.params.id,
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
    Reservations.destroy({
        where: {
            id: req.params.id,
        },
    })
        .then((deletedReservation) => {
            res.json(deletedReservation);
        })
        .catch((err) => res.json(err));
});

module.exports = router;