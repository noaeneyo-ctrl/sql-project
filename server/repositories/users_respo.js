const con = require("../db/connection");

function fetchAllUsers() {
  const sql = `SELECT * FROM last_project_db.users`;

  return new Promise((resolve, reject) => {
    con.query(sql, (err, result) => {
      if (err) return reject(err);
      resolve(result);
    });
  });
}

function fetchUser(userId) {
  const sql = `SELECT * FROM last_project_db.users WHERE user_id= ? `;

  return new Promise((resolve, reject) => {
    con.query(sql, [userId], (err, result) => {
      if (err) return reject(err);
      resolve(result);
    });
  });
}

function addUserToDb(body) {
  const username = body.username;
  const sql = `INSERT INTO last_project_db.users (username)
VALUES (?);`;
  return new Promise((resolve, reject) => {
    con.query(sql, [username], (err, result) => {
      if (err) return reject(err);
      resolve({ user_id: result.insertId, username });
    });
  });
}

module.exports = {
  fetchAllUsers,
  fetchUser,
  addUserToDb,
};
