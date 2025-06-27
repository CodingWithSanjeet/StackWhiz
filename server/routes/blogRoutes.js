const express = require("express");
const router = express.Router();
const blogController = require("../controllers/blogController");

router.get("/", blogController.getHomePage);
router.get("/post/:postId", blogController.getPostById);
router.post("/search", blogController.searchPosts);
router.get("/about", blogController.getAboutPage);
router.get("/contact", blogController.getContactPage);

module.exports = router;
