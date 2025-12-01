var express = require("express");
var router = express.Router();
const { getPostsComments } = require("../services/comments_serv");

router.get("/:post_id", async (req, res) => {
  const post_id = req.params.post_id;
  try {
    const comments = await getPostsComments(post_id);
    if (!comments || comments.length === 0) {
      return res.status(404).json({
        message: `Post with ID ${post_id} has no comments.`,
      });
    }
    res.json(comments);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
