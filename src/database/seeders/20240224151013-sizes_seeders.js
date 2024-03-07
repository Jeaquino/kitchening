'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
  
      await queryInterface.bulkInsert('sizes', [{
        name: 'XL',
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        name: 'L',
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        name: 'M',
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        name: 'S',
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
     * await queryInterface.bulkDelete('sizes', null, {});
     */
  }
};
