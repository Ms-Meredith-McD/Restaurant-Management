const { Painting } = require('../models');

 


const seedPaintings = () => Painting.bulkCreate(paintingdata);

module.exports = seedPaintings;
