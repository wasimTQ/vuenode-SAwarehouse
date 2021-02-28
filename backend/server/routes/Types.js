const express = require("express");
const router = express.Router();

const typeController = require("../controller/typeController")

router.get("/", typeController.getAllTypes);
router.post("/add", typeController.addType);

module.exports = router;