const express = require("express");
const {
  getBlogs,
  createBlog,
  updateBlog,
  deleteBlog,
} = require("../controllers/blogController");

const auth = require("../middleware/auth");

const router = express.Router();
router.get("/", getBlogs);
router.post("/", auth, createBlog);
router.put("/:id", auth, updateBlog);
router.delete("/:id", auth, deleteBlog);

module.exports = router;
