const express = require("express");
const router = express.Router();

const warehouseController = require("../controller/warehouseController")

router.get("/", warehouseController.getAllWarehouses);
router.get("/details/:id", warehouseController.getWarehouseDetail);
router.get("/filterby", warehouseController.filterWarehouses);
router.get("/filtered_names", warehouseController.getFilteredNames);
router.post("/add", warehouseController.addWarehouse);
router.put("/update/:id", warehouseController.updateWarehouse);
router.delete("/:id", warehouseController.deleteWarehouse);

router.use('/clusters', require('./Clusters'));
router.use('/types', require('./Types'));
router.use('/cities', require('./Cities'));

module.exports = router;