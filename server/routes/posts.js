var express = require("express");
var router = express.Router();
const {
  getAllPosts,
  getPostById,
  addPost,
  deletePost,
} = require("../services/posts_serv");

router.get("/", async (req, res) => {
  try {
    const posts = await getAllPosts();
    res.json(posts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
router.get("/:id", async (req, res) => {
  const postId = req.params.id;
  try {
    const post = await getPostById(postId);
    if (!post) {
      return res.status(404).json({
        message: `Post with ID ${postId} does not exist.`,
      });
    }
    res.json(post);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const newPost = await addPost(req.body);
    res.json(newPost);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.delete("/:postId", async (req, res) => {
  const postId = req.params.postId;
  try {
    await deletePost(postId);
    res.json(`the post with id ${postId} is deleted`);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
