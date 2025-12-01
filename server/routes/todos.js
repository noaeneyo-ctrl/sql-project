var express = require("express");
var router = express.Router();
const {
  getAllTodos,
  getUserTodos,
  addTodo,
  deleteTodo,
} = require("../services/todos_serv");

router.get("/", async (req, res) => {
  try {
    const todos = await getAllTodos();
    res.json(todos);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get("/:id", async (req, res) => {
  const user_id = req.params.id;

  try {
    const todos = await getUserTodos(user_id);

    if (!todos || todos.length === 0) {
      return res.status(404).json({
        message: `User with ID ${user_id} does not exist or has no todos.`,
      });
    }

    res.json(todos);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
router.post("/", async (req, res) => {
  try {
    const newTodo = await addTodo(req.body);
    res.json(newTodo);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.delete("/:todo_id", async (req, res) => {
  const todo_id = req.params.todo_id;
  try {
    await deleteTodo(todo_id);
    res.json(`the todo with id ${todo_id} is deleted`);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
