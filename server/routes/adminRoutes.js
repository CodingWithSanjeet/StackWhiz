const express = require("express");

const {
  getDashboard,
  createPost,
  showCreatePostForm,
  showEditPostForm,
  updatedPost,
  deletePost,
} = require("../controllers/adminController");

const { authMiddleware } = require("../middlewares/auth");
const router = express.Router();

router.use(authMiddleware);


router.get("/dashboard", getDashboard);
router.get("/add-post", showCreatePostForm);
router.post("/add-post", createPost);
router.get("/edit-post/:postId", showEditPostForm);
router.post("/edit-post/:postId", updatedPost);
router.delete("/delete-post/:postId", deletePost);

module.exports = router;
