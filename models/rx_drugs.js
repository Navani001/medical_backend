'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class rx_drugs extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  rx_drugs.init({
    rx_group_id: DataTypes.INTEGER,
    drug_id: DataTypes.INTEGER,
    drug_time: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'rx_drugs',
  });
  return rx_drugs;
};