'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return await queryInterface.addColumn('Posts', 'foto', {
      type: Sequelize.STRING,
      ondDelete: 'SET NULL'
    })
  },

  async down (queryInterface, Sequelize) {
    return await queryInterface.removeColumn('Posts', 'foto')
  }
};
