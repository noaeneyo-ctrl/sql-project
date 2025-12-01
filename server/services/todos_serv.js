const {
  fetchAllTodos,
  fetchUserTodos,
  insertTodo,
  deleteTodoInDb,
} = require("../repositories/todos_respo");

async function getAllTodos() {
  const todos = await fetchAllTodos();
  return todos;
}
async function getUserTodos(userId) {
  const todos = await fetchUserTodos(userId);
  return todos;
}
async function addTodo(todoData) {
  const result = await insertTodo(todoData);
  return result;
}
async function deleteTodo(todo_id) {
  const result = await deleteTodoInDb(todo_id);
  return result;
}

module.exports = { getAllTodos, getUserTodos, addTodo, deleteTodo };
