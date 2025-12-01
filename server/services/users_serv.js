const {
  fetchAllUsers,
  fetchUser,
  addUserToDb,
} = require("../repositories/users_respo");
async function getAllUsers() {
  const users = await fetchAllUsers();
  return users;
}

async function getUser(userId) {
  const user = await fetchUser(userId);
  return user.length ? user[0] : null;
}

async function addUser(body) {
  if (!body.username || body.username.trim() === "") {
    throw new Error("Username is required");
  }

  const existingUsers = await fetchAllUsers();
  const exist = existingUsers.some(
    (user) => user.username.toLowerCase() === body.username.toLowerCase()
  );
  if (exist) {
    throw new Error("Username already exist");
  }
  const result = await addUserToDb(body);
  return { user_id: result.insertId, username: body.username };
}

module.exports = {
  getAllUsers,
  getUser,
  addUser,
};
