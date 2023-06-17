const { timestampCols } = require('../helpers/commons');

'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('vehicle_categories', {
      vehicle_category_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      category_name: {
        type: Sequelize.STRING
      },
      ...timestampCols(Sequelize)
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('vehicle_categories');
  }
};
