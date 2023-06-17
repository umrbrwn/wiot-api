const timestampCols = (Sequelize) => ({
  created_at: {
    allowNull: false,
    type: Sequelize.BIGINT,
    defaultValue: Sequelize.literal('jsnow()')
  },
  updated_at: {
    allowNull: false,
    type: Sequelize.BIGINT,
    defaultValue: Sequelize.literal('jsnow()')
  }
});

module.exports = { timestampCols };
