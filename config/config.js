require('dotenv').config();
console.log(process.env.PASSWORD)
module.exports = {
  development: {
    username: "postgres",
    password: process.env.PASSWORD,
    database: "medical",
    host: "localhost",
    dialect: "postgres",
    
  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "mysql",
  },
  production: {
    username: "root",
    password: null,
    database: "database_production",
    host: "127.0.0.1",
    dialect: "mysql",
  },
};
