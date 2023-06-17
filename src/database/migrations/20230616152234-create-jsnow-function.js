'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.sequelize.query(`
      CREATE OR REPLACE FUNCTION jsnow() RETURNS bigint AS $$
        SELECT ROUND(EXTRACT(EPOCH FROM now() AT TIME ZONE 'UTC') * 1000)::bigint;
      $$ language sql;`
    );
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.sequelize.query(`DROP FUNCTION IF EXISTS jsnow();`);
  }
};
