'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return await queryInterface.addColumn('Posts', 'clienteID', {
      type: Sequelize.INTEGER, 
      references: {
        model: 'Clientes',
        key: 'id'
      },
      ondDelete: 'SET NULL'
    })
  },

  async down (queryInterface, Sequelize) {
    return await queryInterface.removeColumn('Posts', 'clienteID')
  }
};
