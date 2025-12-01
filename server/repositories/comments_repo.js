const con = require("../db/connection");

function fetchPostsComments(post_id) {
  const sql = `SELECT * FROM last_project_db.comments WHERE post_id= ? `;

  return new Promise((resolve, reject) => {
    con.query(sql, [post_id], (err, result) => {
      if (err) return reject(err);
      resolve(result);
    });
  });
}

module.exports = {
  fetchPostsComments,
};
