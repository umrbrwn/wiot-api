'use strict';

const { timestampCols } = require('../helpers/commons');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('vehicle_types', {
      vehicle_type_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      type_name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      count: {
        allowNull: false,
        defaultValue: 0,
        type: Sequelize.INTEGER
      },
      vehicle_category_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'vehicle_categories',
          key: 'vehicle_category_id'
        }
      },
      ...timestampCols(Sequelize)
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('vehicle_types');
  }
};
