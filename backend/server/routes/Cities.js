const express = require("express");
const router = express.Router();

const cityController = require("../controller/cityController")

router.get("/", cityController.getAllCities);
router.post("/add", cityController.addCity);

module.exports = router;