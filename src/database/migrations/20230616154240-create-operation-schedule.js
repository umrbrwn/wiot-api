'use strict';

const { timestampCols } = require('../helpers/commons');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('operation_schedules', {
      operation_schedule_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
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
      day_of_week: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      start_time: {
        allowNull: false,
        type: Sequelize.DATE
      },
      end_time: {
        allowNull: false,
        type: Sequelize.DATE
      },
      ...timestampCols(Sequelize)
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('operation_schedules');
  }
};
