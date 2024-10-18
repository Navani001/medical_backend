import express from "express";
const router = express.Router();
const controllers = require("../controllers/drug.ts");
router.get("/all_drugs", controllers.all_drugs);
router.get("/all_rx", controllers.all_rx);

router.post("/rx_drug/:id", controllers.rx_drug);
module.exports = router;
