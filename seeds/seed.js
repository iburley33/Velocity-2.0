const { User } = require('../models');

const userData = [
  {
    username: 'Nick Nixon',
    password: 'Password123',
  },
  {
    username: 'Will Wilson',
    password: 'Password234',
  }
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;
