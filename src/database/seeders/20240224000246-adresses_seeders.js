'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
      await queryInterface.bulkInsert('addresses', [{
        user_id: 2,
        address: "Andrade 976",
        city: "San Maykel",
        province:"Bs As",
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        user_id: 3,
        address: "Andrade 1000",
        city: "San Maykel",
        province:"Bs As",
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        user_id: 1,
        address: "Andrade 1010",
        city: "San Maykel",
        province:"Bs As",
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        user_id: 2,
        address: "Andrade 1442",
        city: "San Maykel",
        province:"Bs As",
        createdAt: new Date,
        updatedAt: new Date
      }], {});
  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.bulkDelete('People', null, {});
    
  }
};
