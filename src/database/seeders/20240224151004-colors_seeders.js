'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
      await queryInterface.bulkInsert('colors', [{
        name: 'naranja',
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        name: 'rojo',
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        name: 'azul',
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        name: 'verde',
        createdAt: new Date,
        updatedAt: new Date
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('colors', null, {});
     */
  }
};
