const Reservation = require('../models/Reservations');

const reservationData = [
  {
    "party_size": 3,
    "reservation_datetime": "2024-02-09 20:00:00",
    "notes": "Special request for reservation 1",
    "customer_id": 8
},
{
    "party_size": 5,
    "reservation_datetime": "2024-02-10 21:15:00",
    "notes": "Special request for reservation 2",
    "customer_id": 10
},
{
    "party_size": 1,
    "reservation_datetime": "2024-02-11 18:30:0",
    "notes": "Special request for reservation 3",
    "customer_id": 7
},
{
    "party_size": 4,
    "reservation_datetime": "2024-02-12 23:30:00",
    "notes": "Special request for reservation 4",
    "customer_id": 4
},
{
    "party_size": 5,
    "reservation_datetime": "2024-02-13 15:30:50",
    "notes": "Special request for reservation 5",
    "customer_id": 3
}
];

const seedReservations = () => Reservation.bulkCreate(reservationData);

module.exports = seedReservations;
