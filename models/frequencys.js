'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class frequencys extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  frequencys.init({

    rx_drug_id: DataTypes.INTEGER,
    time: DataTypes.INTEGER,
    whenid: DataTypes.INTEGER,
    frequency_type_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'frequencys',
  });
  return frequencys;
};