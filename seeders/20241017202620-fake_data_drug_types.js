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
    await queryInterface.bulkInsert(
      "drugs_types",
      [
        {
          id: 1,
          name: "testing",
          is_active: true,
          is_deleted: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          created_by: "admin",
          updated_by: "admin",
        },
        {
          id: 2,
          name: "testing 2",
          is_active: true,
          is_deleted: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          created_by: "admin",
          updated_by: "admin",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("drugs_types", null, {});
  },
};
