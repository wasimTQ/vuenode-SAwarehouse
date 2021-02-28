const express = require("express");
const router = express.Router();

const clusterController = require("../controller/clusterController")

router.get("/", clusterController.getAllClusters);
router.post("/add", clusterController.addCluster);

module.exports = router;