'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
      await queryInterface.bulkInsert('statuses', [{
        name: 'En proceso',
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        name: 'Finalizada',
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        name: 'Rechazada',
        createdAt: new Date,
        updatedAt: new Date
      }], {});    
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('statuses', null, {});
  }
};
