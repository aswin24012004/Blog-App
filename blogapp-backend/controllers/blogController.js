const Blog = require("../models/Blog");

exports.getBlogs = async (req, res) => {
  const blogs = await Blog.find().populate("author", "username");
  res.json(blogs);
};

exports.createBlog = async (req, res) => {
  const blog = new Blog({ ...req.body, author: req.userId });
  await blog.save();
  res.status(201).json(blog);
};

exports.updateBlog = async (req, res) => {
  const blog = await Blog.findById(req.params.id);
  if (blog.author.toString() !== req.userId)
    return res.status(403).json({ message: "Forbidden" });
  const updated = await Blog.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
};

exports.deleteBlog = async (req, res) => {
  const blog = await Blog.findById(req.params.id);
  if (blog.author.toString() !== req.userId)
    return res.status(403).json({ message: "Forbidden" });
  await Blog.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
};
