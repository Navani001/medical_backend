'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class drugs_specs extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  drugs_specs.init({
    rx_drug_id: DataTypes.INTEGER,
    no_of_days: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
    time_to_take: DataTypes.INTEGER,
    comsumption_type: DataTypes.INTEGER,
    comsumption_day_type: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'drugs_specs',
  });
  return drugs_specs;
};