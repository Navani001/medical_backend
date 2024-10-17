'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class time_drugs extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  time_drugs.init({
    is_morning: DataTypes.BOOLEAN,
    is_evening: DataTypes.BOOLEAN,
    is_afternoon: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'time_drugs',
  });
  return time_drugs;
};