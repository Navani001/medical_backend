'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class comsumption_day_types extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    this.hasMany(models.drugs_specs, {
        foreignKey: "comsumption_day_type_id",
      });
    }
  }
  comsumption_day_types.init({
    name: DataTypes.STRING,
    is_active: DataTypes.BOOLEAN,
    is_deleted: DataTypes.BOOLEAN,
    created_by: DataTypes.STRING,
    updated_by: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'comsumption_day_types',
  });
  return comsumption_day_types;
};