const express = require("express");
const router = express.Router();
const filterController = require("../controllers/filterController");

router.post("/filter", filterController.filterApplicants);

module.exports = router;
