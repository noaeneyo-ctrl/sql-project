var express = require("express");
var router = express.Router();
const { getUserTodos, addTodo } = require("../services/todos_serv");

router.get("/:id", async (req, res) => {
  const userId = req.params.id;

  try {
    const todos = await getUserTodos(userId);

    if (!todos || todos.length === 0) {
      return res.status(404).json({
        message: `User with ID ${userId} does not exist or has no todos.`,
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

module.exports = router;
