const Menu = require('../models/Menu');

const menuItems = [
    {
        "menu_item": "Appetizer Combo",
        "description": "A selection of popular appetizers, including mozzarella sticks, chicken wings, and spinach artichoke dip.",
        "has_nuts": false,
        "has_dairy": true,
        "vegetarian": false,
        "gluten_free": false,
        "price": 15.99
    },
    {
        "menu_item": "Burger and Fries",
        "description": "A classic beef burger with lettuce, tomato, and onion, served with crispy golden fries.",
        "has_nuts": false,
        "has_dairy": false,
        "vegetarian": false,
        "gluten_free": false,
        "price": 12.99
    },
    {
        "menu_item": "Calamari",
        "description": "Crispy fried calamari rings served with marinara sauce for dipping.",
        "has_nuts": false,
        "has_dairy": false,
        "vegetarian": false,
        "gluten_free": false,
        "price": 11.99
    },
    {
        "menu_item": "Artichoke Dip",
        "description": "Creamy artichoke and spinach dip served with tortilla chips for dipping.",
        "has_nuts": false,
        "has_dairy": true,
        "vegetarian": true,
        "gluten_free": false,
        "price": 9.99
    },
    {
        "menu_item": "Margherita Pizza",
        "description": "Classic pizza with fresh mozzarella, tomatoes, and basil on a crispy crust.",
        "has_nuts": false,
        "has_dairy": true,
        "vegetarian": true,
        "gluten_free": false,
        "price": 13.99
    },
    {
        "menu_item": "Popcorn Shrimp",
        "description": "Crispy bite-sized shrimp, seasoned to perfection and served with a tangy cocktail sauce.",
        "has_nuts": false,
        "has_dairy": false,
        "vegetarian": false,
        "gluten_free": false,
        "price": 10.99
    },
    {
        "menu_item": "Turkey Deli Sandwich",
        "description": "Sliced turkey breast with lettuce, tomato, and mayonnaise on whole grain bread. Served with a side of coleslaw.",
        "has_nuts": false,
        "has_dairy": false,
        "vegetarian": false,
        "gluten_free": false,
        "price": 9.99
    },
    {
        "menu_item": "Wedge Salad with Breaded Chicken",
        "description": "Crisp iceberg lettuce wedge topped with breaded and fried chicken, blue cheese dressing, and bacon crumbles.",
        "has_nuts": false,
        "has_dairy": true,
        "vegetarian": false,
        "gluten_free": false,
        "price": 11.99
    },
    {
        "menu_item": "Garden Fresh Salad",
        "description": "A mix of fresh greens, cherry tomatoes, cucumbers, and carrots, served with a light vinaigrette.",
        "has_nuts": false,
        "has_dairy": false,
        "vegetarian": true,
        "gluten_free": true,
        "price": 7.99
    },
    {
        "menu_item": "Classic Caesar Salad",
        "description": "Romaine lettuce with Parmesan cheese, croutons, and Caesar dressing.",
        "has_nuts": false,
        "has_dairy": true,
        "vegetarian": true,
        "gluten_free": false,
        "price": 7.99
    },
    {
        "menu_item": "Grilled Portobello Burger",
        "description": "A juicy, grilled portobello mushroom cap served with lettuce, tomato, and a zesty aioli on a whole wheat bun.",
        "has_nuts": false,
        "has_dairy": false,
        "vegetarian": true,
        "gluten_free": false,
        "price": 11.99
    },
    {
        "menu_item": "Gianduja e Zabaione",
        "description": "Chocolate-hazelnut gianduja and creamy zabaione served together for a delightful dessert experience.",
        "has_nuts": true,
        "has_dairy": true,
        "vegetarian": true,
        "gluten_free": false,
        "price": 8.99
    }

];

const seedMenu = () => Menu.bulkCreate(menuItems);

module.exports = seedMenu;
