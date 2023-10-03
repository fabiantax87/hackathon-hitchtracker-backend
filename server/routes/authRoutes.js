const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");

router.get("/user/login", authController.login);

module.exports = router;
