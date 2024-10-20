'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const process = require('process');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.js')[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}


// const sequelize = new Sequelize("postgresql://navanihk:eMzz1iiHJANOGpEmPk6eUEdIgN9DBnyu@dpg-cs9o21i3esus739is9lg-a.oregon-postgres.render.com/testing_5eau", {
//   dialect: 'postgres',
//   dialectOptions: {
//     ssl: {
//       require: true, // Depending on your database settings, you may need this.
//       rejectUnauthorized: false // For self-signed certificates, set to false
//     }
//   }
// });

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (
      file.indexOf('.') !== 0 &&
      file !== basename &&
      file.slice(-3) === '.js' &&
      file.indexOf('.test.js') === -1
    );
  })
  .forEach(file => {
    try {
      const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
      if (!model || !model.name) {
        console.error(`Model defined in file ${file} is undefined or has no name property.`);
        return; // Skip this model
      }
      db[model.name] = model;
    } catch (error) {
      console.error(`Error loading model from file ${file}:`, error);
    }
  });


Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
