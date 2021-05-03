'use strict';
const faker = require('faker');
const bcrypt = require('bcryptjs');


module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkInsert('Users', [
     {
       firstName: "demo-man",
       lastName: "a drunk scottish cyclops",
       email: `demo@user.io`,
       username: `Demo-lition`,
       hashedPassword: bcrypt.hashSync('password'),
     },
     {
      firstName: "the-spy",
      lastName: "the best class",
       email: faker.internet.email(),
       username: `TesterFakeUser1`,
       hashedPassword: bcrypt.hashSync(faker.internet.password()),
     },
     {
      firstName: "the-heavy",
      lastName: "morbidly-obese",
      email: faker.internet.email(),
      username: `TesterFakeUser2`,
      hashedPassword: bcrypt.hashSync(faker.internet.password()),
    }
   ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
     const Op = Sequelize.Op;
   return queryInterface.bulkDelete('Users', {
     username: {
       [Op.in]: ['Demo-lition', 'TesterFakeUser1', `TesterFakeUser2`]
     }
   }, {});
  }
};
