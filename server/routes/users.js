var express = require("express");
var router = express.Router();
const { getAllUsers, getUser, addUser } = require("../services/users_serv");
router.get("/", async (req, res) => {
  try {
    const users = await getAllUsers();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
router.get("/:id", async (req, res) => {
  const userId = req.params.id;

  try {
    const users = await getUser(userId);

    if (!users || users.length === 0) {
      return res.status(404).json({
        message: `User with ID ${userId} does not exist`,
      });
    }

    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const newUser = await addUser(req.body);
    res.json(newUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
