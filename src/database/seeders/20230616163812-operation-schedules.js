'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('operation_schedules', [
      { operation_schedule_id: 1, vehicle_category_id: 1, day_of_week: 1, start_time: new Date('2023-06-19T08:00:00Z'), end_time: new Date('2023-06-19T18:00:00Z') }
    ]);

    await queryInterface.bulkInsert('operation_schedule_routes', [
      {
        operation_schedule_id: 1,
        start_time: new Date('2023-06-19T11:00:00Z'),
        end_time: new Date('2023-06-19T12:45:00Z'),
        start_location: 'Abu Dhabi',
        end_location: 'Dubai'
      },
      {
        operation_schedule_id: 1,
        start_time: new Date('2023-06-20T13:00:00Z'),
        end_time: new Date('2023-06-20T16:00:00Z'),
        start_location: 'Dubai',
        end_location: 'Abu Dhabi'
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('operation_schedules', null, {});
  }
};
