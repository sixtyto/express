const express = require("express");
const router = express.Router();

const login = require("../controllers/login");

router.get("/login", login.show_login);
router.get("/signup", login.show_signup);
router.post("/login", login.login);
router.post("/signup", login.signup);

module.exports = router;
