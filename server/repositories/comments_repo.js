const con = require("../db/connection");

function fetchPostsComments(postId) {
  const sql = `SELECT * FROM last_project_db.comments WHERE post= ? `;

  return new Promise((resolve, reject) => {
    con.query(sql, [postId], (err, result) => {
      if (err) return reject(err);
      resolve(result);
    });
  });
}

module.exports = {
  fetchPostsComments,
};
