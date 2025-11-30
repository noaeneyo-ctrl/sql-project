const { fetchAllPosts } = require("../repositories/posts_repo");

async function getAllPosts() {
  const posts = await fetchAllPosts();
  return posts;
}

module.exports = { getAllPosts };
