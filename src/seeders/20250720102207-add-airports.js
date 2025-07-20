'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert('Airports',[
    {
      name:'Indira Gandhi International Airport',
      cityId:3,
      createdAt:new Date(),
      upDatedAt:new Date()
    },
    {
      name:'Chhatrapati Shivaji Maharaj International Airport',
      cityId:5,
      createdAt:new Date(),
      upDatedAt:new Date()
    },
    {
      name:'Kempegowda International Airport ',
      cityId:9,
      createdAt:new Date(),
      upDatedAt:new Date()
    },
    {
      name:'Rajiv Gandhi International Airport',
      cityId:10,
      createdAt:new Date(),
      upDatedAt:new Date()
    }
   ],{});
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
