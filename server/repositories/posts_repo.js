const con = require("../db/connection");

function fetchAllPosts() {
  const sql = `SELECT * FROM last_project_db.posts`;

  return new Promise((resolve, reject) => {
    con.query(sql, (err, result) => {
      if (err) return reject(err);
      resolve(result);
    });
  });
}

function fetchUserPosts(userId) {
  const sql = `SELECT * FROM last_project_db.posts WHERE user_id= ? `;

  return new Promise((resolve, reject) => {
    con.query(sql, [userId], (err, result) => {
      if (err) return reject(err);
      resolve(result);
    });
  });
}

function addPostToDb(body) {
  const user_id = body.userId;
  const title = body.title;
  const content = body.content;
  const sql = `INSERT INTO last_project_db.posts (user_id, title, content)
VALUES (?, ?, ?);`;
  return new Promise((resolve, reject) => {
    con.query(sql, [user_id, title, content], (err, result) => {
      if (err) return reject(err);
      resolve(result);
    });
  });
}
function deletePostInDb(postId) {
  const sql = `DELETE FROM last_project_db.posts
WHERE post_id=?;`;
  return new Promise((resolve, reject) => {
    con.query(sql, [postId], (err, result) => {
      if (err) return reject(err);
      resolve(result);
    });
  });
}

module.exports = {
  fetchAllPosts,
  fetchUserPosts,
  addPostToDb,
  deletePostInDb,
};
