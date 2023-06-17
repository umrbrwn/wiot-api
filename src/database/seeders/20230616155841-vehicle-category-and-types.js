'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('vehicle_categories', [
      { vehicle_category_id: 1, category_name: 'STANDARD' },
      { vehicle_category_id: 2, category_name: 'STANDBY' },
      { vehicle_category_id: 3, category_name: 'WHEELCHAIR' }
    ]);

    await queryInterface.bulkInsert('vehicle_types', [
      { type_name: 'SUV', vehicle_category_id: 1, count: 15 },
      { type_name: 'Minivan', vehicle_category_id: 3, count: 6 },
      { type_name: 'Sedan', vehicle_category_id: 1, count: 9 },
      { type_name: 'Hatchback', vehicle_category_id: 2, count: 1 },
      { type_name: 'Compact', vehicle_category_id: 2, count: 1 }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('vehicle_types', null, {});
    await queryInterface.bulkDelete('vehicle_categories', null, {});
  }
};
