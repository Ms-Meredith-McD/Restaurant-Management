
const router = require('express').Router();
const { Menu, Cocktail, Reservation, Order, Customer } = require('../models');
const withAuth = require('../utils/auth')

// GET homepage
router.get('/', async (req, res) => {
    const customerId = req.session.customer_id;
    const customerManager = await Customer.findByPk(customerId);
    const orderData = await Order.findAll({
        include: [{
            model: Customer,
        }]
    });
    const order = orderData.map(item => item.get({ plain: true }));
    const reservationData = await Reservation.findAll({
        include: [{ model: Customer}],
        order: [['reservation_datetime', 'ASC']],
    })
    const reservation = reservationData.map(item => item.get({ plain: true }));
    const customerData = await Customer.findAll();
    const customer = customerData.map(item => item.get({ plain: true }));
    if (req.session.customer_id && customerManager.is_manager) {
        res.render('manager', {
            order: order,
            reservation: reservation,
            customer: customer,
            logged_in: req.session.logged_in,
            is_manager: customerManager.is_manager
        });
    } else {
        res.render('homepage', {
            logged_in: req.session.logged_in,
            is_manager: customer.is_manager
        });
    }
});

// router.get('/', async (req, res) => {
//     res.render('homepage', {
//         logged_in: req.session.logged_in
//     });
// });

//GET about us page
router.get('/about-us', async (req, res) => {
    const customerId = req.session.customer_id;
    const customer = await Customer.findByPk(customerId);
    res.render('about-us', {
        logged_in: req.session.logged_in,
        is_manager: customer.is_manager
    });
});

router.get('/thank-you', async (req, res) => {
    const customerId = req.session.customer_id;
    const customer = await Customer.findByPk(customerId);
    const orderData = await Order.findOne({
        order: [['id', 'DESC']],
        include: [{
            model: Customer,
        }]
    });
    console.log(orderData)
    const order = orderData.get({ plain: true });
    res.render('thank-you', {
        order: order,
        logged_in: req.session.logged_in,
        is_manager: customer.is_manager
    })
});

//GET Manager hub
router.get('/manager', withAuth, async (req, res) => {
    const orderData = await Order.findAll({
        include: [{
            model: Customer,
        }]
    });
    const order = orderData.map(item => item.get({ plain: true }));
    const reservationData = await Reservation.findAll({
        order: [['reservation_datetime', 'ASC']],
    })
    const reservation = reservationData.map(item => item.get({ plain: true }));
    const customerData = await Customer.findAll();
    const customer = customerData.map(item => item.get({ plain: true }));
    res.render('manager', {
        order: order,
        reservation: reservation,
        customer: customer,
        logged_in: req.session.logged_in
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
    res.render('login', {
        logged_in: req.session.logged_in
    });
});

// // Profile page withAuth middleware to prevent access to route
// router.get('/profile', async (req, res) => {
//     try {
//         // Find the logged in user based on the session ID
//         //*********WILL NEED TO CHECK HOW SESSION IS STORING USER/CUSTOMER_ID */
//         const customerData = await Customer.findByPk(req.session.customer_id, {
//             attributes: { exclude: ['password'] },
//             include: [{ model: Order },
//             {
//                 model: Reservation,
//                 attributes: ['id', 'reservation_datetime']
//             },
//             {
//                 model: Menu,
//                 attributes: ['menu_item']
//             }
//             ],
//         });

//         const customer = customerData.get({ plain: true });

//         res.render('profile', {
//             ...customer,
//             logged_in: req.session.logged_in
//         });
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });

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
            menu: menu
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
        res.render('menu', {
            menu: menu
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// Order page, auth required, THIS PAGE SHOWS ALL ORDERS PLACED, NOT TO POST AN ORDER, THAT WILL BE DIFFERENT
router.get('/order', withAuth, async (req, res) => {

    try {
        const customerId = req.session.customer_id;
        const customer = await Customer.findByPk(customerId);
        //find all order items
        const orderData = await Menu.findAll();

        const order = orderData.map(item => item.get({ plain: true }));
        //*********logged in set to true, only logged in can see this
        //******THIS WILL NEED TO BE TESTED, order:order may cause issues since this is now an array */
        res.render('order', {
            order: order,
            logged_in: req.session.logged_in,
            is_manager: customer.is_manager
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

// GET one order item
router.get('/order/:id', withAuth, async (req, res) => {
    try {
        const orderData = await Order.findByPk(req.params.id);
        const customerId = req.session.customer_id;
        const customer = await Customer.findByPk(customerId);

        if (!orderData) {
            res.render('order', { error: "Order not found!" });
            return
        }

        const order = orderData.get({ plain: true });
        res.render('order', { order, logged_in: req.session.logged_in, is_manager: customer.is_manager });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// Customer page, auth required, THIS PAGE SHOWS ALL CUSTOMERS
router.get('/customer', withAuth, async (req, res) => {
    try {
        const customerId = req.session.customer_id;
        const customerManager = await Customer.findByPk(customerId);
        //find all customer items
        const customerData = await Customer.findAll();

        const customer = customerData.map(item => item.get({ plain: true }));
        //*********logged in set to true, only logged in can see this
        //******THIS WILL NEED TO BE TESTED, customer: customer may cause issues since this is now an array */
        res.render('customer', {
            customer: customer,
            logged_in: req.session.logged_in,
            is_manager: customerManager.is_manager
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

// GET one customer item
router.get('/customer/:id', withAuth, async (req, res) => {
    try {
        const customerId = req.session.customer_id;
        const customerManager = await Customer.findByPk(customerId);
        const customerData = await Customer.findByPk(req.params.id);

        if (!customerData) {
            res.render('customer', { error: "Customer not found!" });
            return
        }

        const customer = customerData.get({ plain: true });
        res.render('customer', {
            customer, logged_in: req.session.logged_in,
            is_manager: customerManager.is_manager
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// Reservation page, auth required, THIS PAGE SHOWS ALL RESERVATIONS, this will not post new reservations, that will be done on front end with fetch
router.get('/reservation', withAuth, async (req, res) => {
    try {
        const customerId = req.session.customer_id;
        const customer = await Customer.findByPk(customerId);
        //find all reservation items
        const reservationData = await Reservation.findAll();

        const reservation = reservationData.map(item => item.get({ plain: true }));
        //*********logged in set to true, only logged in can see this
        //******THIS WILL NEED TO BE TESTED, customer: customer may cause issues since this is now an array */
        res.render('reservation', {
            reservation: reservation,
            logged_in: req.session.logged_in,
            is_manager: customer.is_manager
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

// GET one reservation item
router.get('/reservation/:id', withAuth, async (req, res) => {
    try {
        const customerId = req.session.customer_id;
        const customer = await Customer.findByPk(customerId);
        const reservationData = await Reservation.findByPk(req.params.id);

        if (!reservationData) {
            res.render('reservation', { error: "Reservation not found!" });
            return
        }

        const reservation = reservationData.get({ plain: true });
        res.render('reservation', { reservation, logged_in: req.session.logged_in, is_manager: customer.is_manager });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.get('/cocktail', async (req, res) => {
    try {
     
        const cocktailData = await Cocktail.findAll({

        });

        const cocktail = cocktailData.map(item => item.get({ plain: true }));
        res.render('cocktail', {
            cocktail: cocktail
        });
    } catch (err) {
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