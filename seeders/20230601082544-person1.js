'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    queryInterface.bulkInsert('Studentinfos', [
      // {
      //   name: 'saikiran',
      //   course: 'blockchain',
      //   age: 22,
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      //   // feepaid: true,
      // },
      {
        name: 'suresh',
        course: 'blockchain',
        age: 22,
        createdAt: new Date(),
        updatedAt: new Date(),
        // feepaid: true,
      },
      {
        name: 'Ramesh',
        course: 'blockchain',
        age: 22,
        createdAt: new Date(),
        updatedAt: new Date(),
        // feepaid: true,
      },
    ]);
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
  },

  async down(queryInterface, Sequelize) {
    queryInterface.bulkDelete('Studentinfos', null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
