var express = require("express");
var router = express.Router();
const {
  getAllPosts,
  getUserPosts,
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
  const userId = req.params.id;

  try {
    const posts = await getUserPosts(userId);

    if (!posts || posts.length === 0) {
      return res.status(404).json({
        message: `User with ID ${userId} does not exist or has no posts.`,
      });
    }

    res.json(posts);
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
