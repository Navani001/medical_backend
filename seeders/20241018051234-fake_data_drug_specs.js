"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    // await queryInterface.bulkInsert(
    //   "drugs_specs",
    //   [
    //     {
    //       id: 1,
    //       rx_drug_id: 1,
    //       no_of_days: 2,
    //       quantity: 2,
    //       time_to_take: 3,
    //       comsumption_type_id: 1,
    //       drug_time: 1,
    //       comsumption_day_type_id: 1,
    //       createdAt: new Date(),
    //       updatedAt: new Date(),
    //     },
    //   ],
    //   {}
    // );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("drugs_specs", null, {});
  },
};
