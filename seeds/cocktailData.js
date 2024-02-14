const Cocktail = require('../models/Cocktails');

const cocktailItems = [
    {
        drink_name: 'Mojito',
        description: 'A refreshing Cuban cocktail with mint, lime, and rum.',
        price: 8.99,
    },
    {
        drink_name: 'Martini',
        description: 'A classic cocktail made with gin and vermouth.',
        price: 10.50,
    },
    {
        drink_name: "Old Fashioned",
        description: "A timeless concoction featuring bourbon or rye whiskey muddled with sugar, bitters, and a twist of orange zest. Served over ice.",
        price: 9.75
    },
    {
        drink_name: "Negroni",
        description: "The Negroni blends equal parts of gin, sweet vermouth, and Campari. Garnished with an orange slice, this bittersweet elixir provides a perfect balance of flavors in a vibrant, crimson-hued cocktail.",
        price: 11.25
    },
    {
        drink_name: "Cosmopolitan",
        "description": "This chic and fruity martini-style cocktail boasts vodka, triple sec, cranberry juice, and a splash of lime.",
        "price": 9.99
    },
    {
        drink_name: "Manhattan",
        description: "The Manhattan combines rye whiskey, sweet vermouth, and a dash of aromatic bitters. Garnished with a cherry.",
        price: 12.50
    },
    {
        drink_name: "Daiquiri",
        description: "The Daiquiri is a simple yet delightful blend of white rum, lime juice, and simple syrup.",
        price: 8.50
    },
    {
        drink_name: "Margarita",
        description: "Tequila, triple sec, and fresh lime juice. Served in a salt-rimmed glass.",
        price: 10.99
    }
    // Add more cocktails as needed
    // ...
];

const seedCocktail = () => Cocktail.bulkCreate(cocktailItems);

module.exports = seedCocktail;

