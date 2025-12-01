var express = require("express");
var router = express.Router();
const { getPostsComments } = require("../services/comments_serv");

router.get("posts/:postId", async (req, res) => {
  const postId = req.params.postId;
  try {
    const comments = await getPostsComments(postId);
    res.json(comments);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
