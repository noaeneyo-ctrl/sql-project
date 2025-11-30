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

module.exports = { fetchAllPosts };
