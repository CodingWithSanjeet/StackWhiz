const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");

router.get("/admin", authController.showLoginForm);
router.post("/admin", authController.loginUser);
router.post("/register", authController.registerUser);
router.get("/logout", authController.logoutUser);

module.exports = router;
