const express = require("express");
const app = express();
const { sequelize } = require("./models");
const cors = require("cors");
require("dotenv").config();
const drugs=require("./src/routes/drug.ts")
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));

app.use("/drugs",drugs)
sequelize.authenticate().then(() => {
  app.listen(5000, function () {
    console.log("Server is running on port 5000");
  });
});
