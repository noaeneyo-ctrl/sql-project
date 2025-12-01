const { fetchPostsComments } = require("../repositories/comments_repo");

async function getPostsComments(post_id) {
  const comments = await fetchPostsComments(post_id);
  return comments;
}

module.exports = {
  getPostsComments,
};
