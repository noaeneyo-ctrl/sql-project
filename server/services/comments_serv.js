const { fetchPostsComments } = require("../repositories/comments_repo");

async function getPostsComments(postId) {
  const comments = await fetchPostsComments(postId);
  return comments;
}

module.exports = {
  getPostsComments,
};
