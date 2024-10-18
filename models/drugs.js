"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class drugs extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.drugs_types, { foreignKey: "drug_type_id" });
      this.belongsToMany(models.rx_groups, {
        through: models.rx_drugs,
        foreignKey: "drug_id",
        otherKey: "rx_groups_id",
      });
     
    }
  }
  drugs.init(
    {
      name: DataTypes.STRING,
      drug_type_id: DataTypes.INTEGER,
      is_active: DataTypes.BOOLEAN,
      is_deleted: DataTypes.BOOLEAN,
      created_by: DataTypes.STRING,
      updated_by: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "drugs",
    }
  );
  return drugs;
};
