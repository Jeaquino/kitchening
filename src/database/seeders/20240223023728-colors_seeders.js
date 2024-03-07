'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('colors', [{
        name: 'Verder',
        createdAt : new Date,
        updatedAt : new Date,
      },
      {
        name: 'Azul',
        createdAt : new Date,
        updatedAt : new Date,
      },
      {
        name: 'Rojo',
        createdAt : new Date,
        updatedAt : new Date,
      },
      {
        name: 'Amarrillo',
        createdAt : new Date,
        updatedAt : new Date,
      },
      {
        name: 'Violeta',
        createdAt : new Date,
        updatedAt : new Date,
      },
      {
        name: 'Rosa',
        createdAt : new Date,
        updatedAt : new Date,
      }], {});
    
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
