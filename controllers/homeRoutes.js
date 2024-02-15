
const router = require('express').Router();
const { Menu, Cocktail, Reservation, Order, Customer } = require('../models');
const withAuth = require('../utils/auth')

// GET homepage
router.get('/', async (req, res) => { 
        res.render('homepage', {
            logged_in: req.session.logged_in,
            is_manager: req.session.is_manager
        })
    });
    
//GET about us page
router.get('/about-us', async (req, res) => {
    res.render('about-us', {
        logged_in: req.session.logged_in,
        is_manager: req.session.is_manager
    });
});

//GET thank you page
router.get('/thank-you', async (req, res) => {
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
        is_manager: req.session.is_manager
    })
});

// GET Manager hub
router.get('/manager', withAuth, async (req, res) => {
    const orderData = await Order.findAll({
        include: [{ model: Customer }]
    });
    const order = orderData.map(item => item.get({ plain: true }));
    const reservationData = await Reservation.findAll({
        include: [{ model: Customer }],
        order: [['reservation_datetime', 'ASC']],
    })
    const reservation = reservationData.map(item => item.get({ plain: true }));
    const customerData = await Customer.findAll();
    const customer = customerData.map(item => item.get({ plain: true }));
    console.log(req.session)
    if (req.session.is_manager) {
        res.render('manager', {
            order: order,
            reservation: reservation,
            customer: customer,
            logged_in: req.session.logged_in,
            is_manager: req.session.is_manager
        })
    } else {
        res.render('homepage', {
            logged_in: req.session.logged_in,
            is_manager: req.session.is_manager
        })
    }
})

//customer profile page, lists past reservations and orders
router.get('/login', (req, res) => {
    // If the user is already logged in, redirect the request to another route
    if (req.session.logged_in) {
        res.redirect('/');
        return;
    }
    res.render('login', {
        logged_in: req.session.logged_in
    });
});

// Menu page, auth not required, could add auth for our ordering system
router.get('/menu', async (req, res) => {
    try {
        //find all menu items
        const menuData = await Menu.findAll();
        const menu = menuData.map(item => item.get({ plain: true }));
        res.render('menu', {
            menu: menu,
            logged_in: req.session.logged_in,
            is_manager: req.session.is_manager
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
            menu: menu,
            logged_in: req.session.logged_in,
            is_manager: req.session.is_manager
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

//GET Order page
router.get('/order', withAuth, async (req, res) => {
    try {
        //find all order items
        const orderData = await Menu.findAll();
        const order = orderData.map(item => item.get({ plain: true }));
        res.render('order', {
            order: order,
            logged_in: req.session.logged_in,
            is_manager: req.session.is_manager
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

//GET Reservation page
router.get('/reservation', withAuth, async (req, res) => {
    try {
        //find all reservation items
        const reservationData = await Reservation.findAll();
        const reservation = reservationData.map(item => item.get({ plain: true }));
        res.render('reservation', {
            reservation: reservation,
            logged_in: req.session.logged_in,
            is_manager: req.session.is_manager
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

//GET cocktail route
router.get('/cocktail', async (req, res) => {
    try {
        const cocktailData = await Cocktail.findAll({
        });
        const cocktail = cocktailData.map(item => item.get({ plain: true }));
        res.render('cocktail', {
            cocktail: cocktail,
            logged_in: req.session.logged_in,
            is_manager: req.session.is_manager
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('*', (req, res) => {
    res.redirect('/')
}
);

module.exports = router;


