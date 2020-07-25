const express = require("express");
const router = express.Router();

const leads = require("../controllers/leads");

/* GET leads listing. */
router.get("/", leads.show_leads);

module.exports = router;
