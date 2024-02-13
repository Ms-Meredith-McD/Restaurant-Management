//TODO 
//add /about route


const router = require('express').Router();
const { Menu, Reservation, Order, Customer } = require('../models');
const withAuth = require('../utils/auth')

// GET homepage
router.get('/', async (req, res) => {
    res.render('homepage');
});

//GET about us page
router.get('/about-us', async (req, res) => {
    res.render('about-us');
});

//GET Manager hub
router.get('/manager', async (req, res) => {
    const orderData = await Order.findAll({
        include: [{
            model: Customer,
            attributes: ['name']
        }]
    });
    
    const order = orderData.map(item => item.get({ plain: true }));
    const reservationData = await Reservation.findAll();
    const reservation = reservationData.map(item => item.get({ plain: true }));
    const customerData = await Customer.findAll();
    const customer = customerData.map(item => item.get({ plain: true }));
    res.render('manager', {
        order: order,
        reservation: reservation,
        customer: customer,
        logged_in: false
    })
});

//customer profile page, lists past reservations and orders
router.get('/login', (req, res) => {
    // If the user is already logged in, redirect the request to another route
    if (req.session.logged_in) {
        //*********REDIRECTS TO HOMEPAGE */
        res.redirect('/');
        return;
    }
    res.render('login');
});

// Profile page withAuth middleware to prevent access to route
router.get('/profile', async (req, res) => {
    try {
        // Find the logged in user based on the session ID
        //*********WILL NEED TO CHECK HOW SESSION IS STORING USER/CUSTOMER_ID */
        const customerData = await Customer.findByPk(req.session.customer_id, {
            attributes: { exclude: ['password'] },
            include: [{ model: Order },
            {
                model: Reservation,
                attributes: ['id', 'reservation_datetime']
            },
            {
                model: Menu,
                attributes: ['menu_item']
            }
            ],
        });

        const customer = customerData.get({ plain: true });

        res.render('profile', {
            ...customer,
            logged_in: true
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

// Menu page, auth not required, could add auth for our ordering system
router.get('/menu', async (req, res) => {
    try {
        //find all menu items
        const menuData = await Menu.findAll({

        });

        const menu = menuData.map(item => item.get({ plain: true }));
        //*********logged in set to false, ALL CAN SEE MENU NOW */
        //******THIS WILL NEED TO BE TESTED, menu: menu may cause issues since this is now an arraty */
        res.render('menu', {
            menu: menu,
            logged_in: false
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

// GET one menu item
router.get('/menu/:id', async (req, res) => {
    try {
        const menuData = await Menu.findByPk(req.params.id);

        if (!menuData) {
            res.render('menu', { error: "Menu item not found!" });
            return
        }

        const menu = menuData.get({ plain: true });
        res.render('menu', { menu });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// Order page, auth required, THIS PAGE SHOWS ALL ORDERS PLACED, NOT TO POST AN ORDER, THAT WILL BE DIFFERENT
router.get('/order', async (req, res) => {
    console.log(req.session.customer_id)
    try {
        //find all order items
        const orderData = await Menu.findAll();

        const order = orderData.map(item => item.get({ plain: true }));
        //*********logged in set to true, only logged in can see this
        //******THIS WILL NEED TO BE TESTED, order:order may cause issues since this is now an array */
        res.render('order', {
            order: order,
            logged_in: false
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

// GET one order item
router.get('/order/:id', async (req, res) => {
    try {
        const orderData = await Order.findByPk(req.params.id);

        if (!orderData) {
            res.render('order', { error: "Order not found!" });
            return
        }

        const order = orderData.get({ plain: true });
        res.render('order', { order });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// Customer page, auth required, THIS PAGE SHOWS ALL CUSTOMERS
router.get('/customer', async (req, res) => {
    try {
        //find all customer items
        const customerData = await Customer.findAll();

        const customer = customerData.map(item => item.get({ plain: true }));
        //*********logged in set to true, only logged in can see this
        //******THIS WILL NEED TO BE TESTED, customer: customer may cause issues since this is now an array */
        res.render('customer', {
            customer: customer,
            logged_in: true
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

// GET one customer item
router.get('/customer/:id', async (req, res) => {
    try {
        const customerData = await Customer.findByPk(req.params.id);

        if (!customerData) {
            res.render('customer', { error: "Customer not found!" });
            return
        }

        const customer = customerData.get({ plain: true });
        res.render('customer', { customer });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// Reservation page, auth required, THIS PAGE SHOWS ALL RESERVATIONS, this will not post new reservations, that will be done on front end with fetch
router.get('/reservation', async (req, res) => {
    try {
        //find all reservation items
        const reservationData = await Reservation.findAll();

        const reservation = reservationData.map(item => item.get({ plain: true }));
        //*********logged in set to true, only logged in can see this
        //******THIS WILL NEED TO BE TESTED, customer: customer may cause issues since this is now an array */
        res.render('reservation', {
            reservation: reservation,
            logged_in: false
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

// GET one reservation item
router.get('/reservation/:id', async (req, res) => {
    try {
        const reservationData = await Reservation.findByPk(req.params.id);

        if (!reservationData) {
            res.render('reservation', { error: "Reservation not found!" });
            return
        }

        const reservation = reservationData.get({ plain: true });
        res.render('reservation', { reservation });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;


/* DONE SIMPLY MEANS THAT THE BASIC CODE EXISTS, WILL NEED TO TEST

homepage--DONE? only renders homepage
login--DONE
profile--DONE
menu--DONE
orders--DONE
customers--DONE
reservation--DONE
manager
*/