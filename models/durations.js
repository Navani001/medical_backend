'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class durations extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  durations.init({
    
    rx_drug_id: DataTypes.INTEGER,
    duration: DataTypes.INTEGER,
    duration_type_id: DataTypes.INTEGER,
    custom: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'durations',
  });
  return durations;
};