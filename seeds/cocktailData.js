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
    // Add more cocktails as needed
    // ...
];

const seedCocktail = () => Cocktail.bulkCreate(cocktailItems);

module.exports = seedCocktail;

