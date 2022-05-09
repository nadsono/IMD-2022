'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Clientes', [{
      nome: 'Kenpachi Zaraki',
      email: 'elevensquadcap@mail.com',
      createdAt: new Date(),
      updatedAt: new Date()
    }])

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Clientes', {email: 'elevensquadcap@mail.com'}, {});
  }
};
