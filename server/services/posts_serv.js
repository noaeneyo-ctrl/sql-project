const {
  fetchAllPosts,
  fetchUserPosts,
  addPostToDb,
  deletePostInDb,
} = require("../repositories/posts_repo");

async function getAllPosts() {
  const posts = await fetchAllPosts();
  return posts;
}

async function getUserPosts(userId) {
  const posts = await fetchUserPosts(userId);
  return posts;
}
async function addPost(body) {
  const posts = await addPostToDb(body);
  return posts;
}
async function deletePost(userId) {
  deletePostInDb(userId);
}
module.exports = { getAllPosts, getUserPosts, addPost, deletePost };
