"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class rx_groups extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.doctors, { foreignKey: "doctor_id" });

      this.belongsToMany(models.drugs, {
        through: models.rx_drugs,
        foreignKey: "rx_group_id",
        otherKey: "drug_id",
      });
      this.hasMany(models.rx_drugs, { foreignKey: "rx_group_id" });
    }
  }

  // ref: drugs.id > rx_drugs.drug_id

  rx_groups.init(
    {
      name: DataTypes.STRING,
      doctor_id: DataTypes.INTEGER,
   
      is_active: {
        type:DataTypes.BOOLEAN,
        defaultValue:true
      },
      is_deleted: {
        type:DataTypes.BOOLEAN,
        defaultValue:false
      },
     
      created_by: DataTypes.STRING,
      updated_by: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "rx_groups",
    }
  );
  return rx_groups;
};
