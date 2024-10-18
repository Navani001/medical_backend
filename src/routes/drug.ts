import express from "express";
const router = express.Router();
const controllers = require("../controllers/drug.ts");
router.get("/all_drugs", controllers.all_drugs);

module.exports = router;

