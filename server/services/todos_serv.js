const { fetchUserTodos, insertTodo } = require("../repositories/todos_respo");

async function getUserTodos(userId) {
  const todos = await fetchUserTodos(userId);
  return todos;
}
async function addTodo(todoData) {
  const result = await insertTodo(todoData);
  return result;
}

module.exports = { getUserTodos, addTodo };
