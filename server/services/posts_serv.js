const {
  fetchAllPosts,
  fetchPostById,
  addPostToDb,
  deletePostInDb,
} = require("../repositories/posts_repo");

async function getAllPosts() {
  const posts = await fetchAllPosts();
  return posts;
}

async function getPostById(postId) {
  const posts = await fetchPostById(postId);
  return posts.length ? posts[0] : null;
}

async function addPost(body) {
  const posts = await addPostToDb(body);
  return posts;
}
async function deletePost(postId) {
  deletePostInDb(postId);
}
module.exports = {
  getAllPosts,
  getPostById,
  addPost,
  deletePost,
};
