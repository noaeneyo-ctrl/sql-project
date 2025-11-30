var express = require("express");
var router = express.Router();
const { getAllPosts } = require("../services/posts_serv");

router.get("/", async (req, res) => {
  try {
    const posts = await getAllPosts();
    res.json(posts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
