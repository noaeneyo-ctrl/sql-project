var express = require("express");
var router = express.Router();
const { getPostsComments } = require("../services/comments_serv");

<<<<<<< HEAD
router.get("posts/:postId", async (req, res) => {
  const postId = req.params.postId;
=======
router.get("/:post_id", async (req, res) => {
  const post_id = req.params.post_id;
>>>>>>> 8fec5d541a7b27ae19b3d7e644178568394fa63a
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
