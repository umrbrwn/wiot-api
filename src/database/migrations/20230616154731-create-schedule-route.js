'use strict';

const { timestampCols } = require('../helpers/commons');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('operation_schedule_routes', {
      schedule_route_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      operation_schedule_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'operation_schedules',
          key: 'operation_schedule_id'
        },
        onDelete: 'CASCADE'
      },
      start_time: {
        allowNull: false,
        type: Sequelize.DATE
      },
      end_time: {
        allowNull: false,
        type: Sequelize.DATE
      },
      start_location: {
        allowNull: false,
        type: Sequelize.STRING
      },
      end_location: {
        allowNull: false,
        type: Sequelize.STRING
      },
      ...timestampCols(Sequelize)
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('operation_schedule_routes');
  }
};
