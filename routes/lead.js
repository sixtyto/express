const express = require("express");
const router = express.Router();

const lead = require("../controllers/lead");

/* GET lead listing. */
router.get("/:lead_id", lead.show_lead);
router.get("/:lead_id/edit", lead.show_edit_lead);
router.post("/:lead_id/edit", lead.edit_lead);

module.exports = router;
