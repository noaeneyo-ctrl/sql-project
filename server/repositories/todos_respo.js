const con = require("../db/connection");
function fetchAllTodos() {
  const sql = `SELECT * FROM last_project_db.todos`;

  return new Promise((resolve, reject) => {
    con.query(sql, (err, result) => {
      if (err) return reject(err);
      resolve(result);
    });
  });
}

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
  const values = [todoData.user_id, todoData.content, 0]; // 0 = not done

  return new Promise((resolve, reject) => {
    con.query(sql, values, (err, result) => {
      if (err) return reject(err);
      resolve({
        todo_id: result.insertId,
        user_id: todoData.user_id,
        content: todoData.content,
        status: 0,
      });
    });
  });
}

function deleteTodoInDb(todo_id) {
  const sql = `DELETE FROM last_project_db.todos
WHERE todo_id=?;`;
  return new Promise((resolve, reject) => {
    con.query(sql, [todo_id], (err, result) => {
      if (err) return reject(err);
      resolve(result);
    });
  });
}
module.exports = { fetchAllTodos, fetchUserTodos, insertTodo, deleteTodoInDb };
