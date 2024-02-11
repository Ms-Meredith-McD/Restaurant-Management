const Menu = require('../models/Menu');

 const menuItems = [
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
      "menu_item": "Spicy Thai Peanut Noodles",
      "description": "Rice noodles with a spicy peanut sauce, topped with green onions and crushed peanuts.",
      "has_nuts": true,
      "has_dairy": false,
      "vegetarian": true,
      "gluten_free": true,
      "price": 14.99
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
      "menu_item": "Beef Burger",
      "description": "Grilled beef patty with lettuce, tomato, and onion on a toasted bun. Served with fries.",
      "has_nuts": false,
      "has_dairy": false,
      "vegetarian": false,
      "gluten_free": false,
      "price": 12.99
  },
  {
      "menu_item": "Chicken Caesar Wrap",
      "description": "Grilled chicken with Caesar salad wrapped in a flour tortilla.",
      "has_nuts": false,
      "has_dairy": true,
      "vegetarian": false,
      "gluten_free": false,
      "price": 10.99
  },
  {
      "menu_item": "Vegetable Stir Fry",
      "description": "A mix of stir-fried vegetables served over steamed rice.",
      "has_nuts": false,
      "has_dairy": false,
      "vegetarian": true,
      "gluten_free": true,
      "price": 10.99
  },
  {
      "menu_item": "Salmon with Dill Sauce",
      "description": "Grilled salmon fillet topped with a creamy dill sauce. Served with steamed vegetables.",
      "has_nuts": false,
      "has_dairy": true,
      "vegetarian": false,
      "gluten_free": true,
      "price": 10.99
  },
  {
      "menu_item": "Mushroom Risotto",
      "description": "Creamy risotto with sautéed mushrooms and Parmesan cheese.",
      "has_nuts": false,
      "has_dairy": true,
      "vegetarian": true,
      "gluten_free": false,
      "price": 10.99
  },
  {
      "menu_item": "Quinoa Tabbouleh",
      "description": "A refreshing salad of quinoa, parsley, mint, cucumber, and cherry tomatoes, dressed with lemon juice and olive oil.",
      "has_nuts": false,
      "has_dairy": false,
      "vegetarian": true,
      "gluten_free": true,
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
    "menu_item": "Shrimp Scampi",
    "description": "Succulent shrimp sautéed with garlic, lemon, and parsley, served over a bed of linguine.",
    "has_nuts": false,
    "has_dairy": true,
    "vegetarian": false,
    "gluten_free": false,
    "price": 10.99
},
{
    "menu_item": "Maple Glazed Salmon",
    "description": "A sweet and savory maple-glazed salmon fillet, grilled to perfection. Served with roasted sweet potatoes.",
    "has_nuts": false,
    "has_dairy": false,
    "vegetarian": false,
    "gluten_free": true,
    "price": 16.99
},
{
    "menu_item": "Chicken Tikka Masala",
    "description": "Tender chicken pieces in a creamy, spiced tomato sauce. Served with basmati rice and naan bread.",
    "has_nuts": false,
    "has_dairy": true,
    "vegetarian": false,
    "gluten_free": false,
    "price": 16.99
},
{
    "menu_item": "Falafel Wrap",
    "description": "Crispy falafel balls wrapped in a soft tortilla with tahini sauce, tomatoes, and cucumbers.",
    "has_nuts": false,
    "has_dairy": false,
    "vegetarian": true,
    "gluten_free": false,
    "price": 9.99
},
{
    "menu_item": "Spinach and Goat Cheese Salad",
    "description": "Fresh spinach leaves with goat cheese, strawberries, and walnuts, tossed in a balsamic vinaigrette.",
    "has_nuts": true,
    "has_dairy": true,
    "vegetarian": true,
    "gluten_free": true,
    "price": 8.99
},
{
    "menu_item": "BBQ Pork Ribs",
    "description": "Tender, slow-cooked pork ribs smothered in BBQ sauce. Served with coleslaw and cornbread.",
    "has_nuts": false,
    "has_dairy": false,
    "vegetarian": false,
    "gluten_free": false,
    "price": 15.99
},
{
    "menu_item": "Butternut Squash Soup",
    "description": "A creamy, comforting soup made with roasted butternut squash and a hint of nutmeg.",
    "has_nuts": false,
    "has_dairy": true,
    "vegetarian": true,
    "gluten_free": true,
    "price": 8.99
},
{
    "menu_item": "Eggplant Parmesan",
    "description": "Slices of breaded eggplant, baked with marinara sauce and mozzarella cheese. Served with spaghetti.",
    "has_nuts": false,
    "has_dairy": true,
    "vegetarian": true,
    "gluten_free": false,
    "price": 14.99
},
{
    "menu_item": "Lemon Herb Grilled Chicken",
    "description": "Grilled chicken breast marinated in lemon and herbs, served with a quinoa and vegetable salad.",
    "has_nuts": false,
    "has_dairy": false,
    "vegetarian": false,
    "gluten_free": true,
    "price": 14.99
},
{
  "menu_item": "Pesto Pasta Primavera",
  "description": "Penne pasta tossed with a fresh basil pesto, sun-dried tomatoes, and a variety of seasonal grilled vegetables.",
  "has_nuts": true,
  "has_dairy": true,
  "vegetarian": true,
  "gluten_free": false,
  "price": 14.99
},
{
  "menu_item": "Steak Frites",
  "description": "Juicy grilled steak served with a side of crispy fries and herbed butter.",
  "has_nuts": false,
  "has_dairy": true,
  "vegetarian": false,
  "gluten_free": true,
  "price" :17.99
},
{
  "menu_item": "Roasted Vegetable Quiche",
  "description": "A savory quiche filled with roasted zucchini, bell peppers, and onions, set in a flaky pastry crust.",
  "has_nuts": false,
  "has_dairy": true,
  "vegetarian": true,
  "gluten_free": false,
  "price": 10.99
},
{
  "menu_item": "Korean Bibimbap",
  "description": "A traditional Korean dish with rice, seasoned vegetables, spicy gochujang sauce, and a fried egg on top.",
  "has_nuts": false,
  "has_dairy": false,
  "vegetarian": false,
  "gluten_free": false,
  "price": 13.99
},
{
  "menu_item": "Lamb Gyro",
  "description": "Slices of seasoned lamb wrapped in a soft pita with tzatziki sauce, onions, and tomatoes.",
  "has_nuts": false,
  "has_dairy": true,
  "vegetarian": false,
  "gluten_free": false,
  "price": 9.99
}
]


const seedMenu = () => Menu.bulkCreate(menuItems);

module.exports = seedMenu;
