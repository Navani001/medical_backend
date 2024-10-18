'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class drugs_types extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.drugs, { foreignKey: "drug_type_id" });
    }
  }
  drugs_types.init({
    name: DataTypes.STRING,
    is_active: DataTypes.BOOLEAN,
    is_deleted: DataTypes.BOOLEAN,
    created_by: DataTypes.STRING,
    updated_by: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'drugs_types',
  });
  return drugs_types;
};