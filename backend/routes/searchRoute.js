const express = require("express");
const router = express.Router();
const { getDetails } = require("../controllers/searchController");

router.get("/", getDetails);

module.exports = router;
