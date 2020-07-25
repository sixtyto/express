const express = require("express");
const router = express.Router();

const lead = require("../controllers/lead");

/* GET lead listing. */
router.get("/:lead_id", lead.show_lead);

module.exports = router;
