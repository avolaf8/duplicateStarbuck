"use strict";
const { hash } = require("../helpers/helper");
const fs = require("fs");
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
    let dummyUser = JSON.parse(
      fs.readFileSync("./data/user.json", "utf-8")
    ).map((el) => {
      el.createdAt = el.updatedAt = new Date();
      el.password = hash(el.password);
      el.role = "Admin";
      return el;
    });

    let dummyItem = JSON.parse(
      fs.readFileSync("./data/item.json", "utf-8")
    ).map((el) => {
      el.createdAt = el.updatedAt = new Date();
      return el;
    });

    let dummyCategory = JSON.parse(
      fs.readFileSync("./data/category.json", "utf-8")
    ).map((el) => {
      el.createdAt = el.updatedAt = new Date();
      return el;
    });

    await queryInterface.bulkInsert("Users", dummyUser, null);
    await queryInterface.bulkInsert("Categories", dummyCategory, null);
    await queryInterface.bulkInsert("Items", dummyItem, null);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Users", null, {});
    await queryInterface.bulkDelete("Categories", null, {});
    await queryInterface.bulkDelete("Items", null, {});
  },
};
