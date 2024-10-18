import express from "express";
const router = express.Router();
const controllers = require("../controllers/drug.ts");
router.get("/sample", controllers.sample);
module.exports = router;

