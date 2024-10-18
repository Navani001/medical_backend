import express from "express";
const router = express.Router();
const controllers = require("../controllers/drug.ts");
router.get("/all_drugs", controllers.all_drugs);
router.get("/all_rx", controllers.all_rx);
router.post("/rename_rx/:id", controllers.rename_rx);
router.post("/rx_drug/:id", controllers.rx_drug);
router.post("/add_rx", controllers.add_rx);
router.post("/add_drug_rx/:id", controllers.add_drug_rx);
router.post("/changetakentime",controllers.changetakentime)
router.post("/change_comsumption_type",controllers.change_comsumption_type)
router.post("/change_comsumption_day_type",controllers.change_comsumption_day_type)
module.exports = router;
