const { fetchAllPosts, fetchUserPosts } = require("../repositories/posts_repo");

async function getAllPosts() {
  const posts = await fetchAllPosts();
  return posts;
}
async function getUserPosts(userId) {
  const posts = await fetchUserPosts(userId);
  return posts;
}
module.exports = { getAllPosts, getUserPosts };
