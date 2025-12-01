const con = require("../db/connection");
function fetchUserTodos(userId) {
  const sql = `SELECT * FROM last_project_db.todos WHERE user_id= ? `;

  return new Promise((resolve, reject) => {
    con.query(sql, [userId], (err, result) => {
      if (err) return reject(err);
      resolve(result);
    });
  });
}

function insertTodo(todoData) {
  const sql = `INSERT INTO todos (user_id, content, status) VALUES (?,?,?);`;
  const values = [todoData.userId, todoData.content, 0]; // 0 = not done

  return new Promise((resolve, reject) => {
    con.query(sql, values, (err, result) => {
      if (err) return reject(err);
      resolve({
        todo_id: result.insertId,
        user_id: todoData.userId,
        content: todoData.content,
        status: 0,
      });
    });
  });
}
module.exports = { fetchUserTodos, insertTodo };
