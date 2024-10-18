const express = require("express");
const app = express();
const { sequelize } = require("./models");
const cors = require("cors");
require("dotenv").config();
const drugs=require("./src/routes/drug.ts")
app.use(express.json());

app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "http://192.168.134.131:3000",
      "http://localhost:5173",
      "http://localhost:3001",
    ],
    credentials: true,
  })
);
app.use(express.static("public"));

app.use("/drugs",drugs)
sequelize.authenticate().then(() => {
  app.listen(5000, function () {
    console.log("Server is running on port 5000");
  });
});
