const { User } = require('../models');

const userData = [
  {
    // name:
    username: 'Plain T-Shirt',
    // password: Password12345
    savedRoutes: ["San Francisco", "Petaluma", "San Jose"],
  }
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;
