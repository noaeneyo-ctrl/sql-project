const mysql = require("mysql2");

// Replace these values with your database info
const connection = mysql.createConnection({
  host: "localhost", // usually localhost
  user: "root", // your MySQL username
  password: "z10mz10m", // your MySQL password
  database: "last_project_db", // your database name
});

// Connect to the database
connection.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL:", err.message);
    return;
  }
  console.log("Connected to MySQL database");
});

module.exports = connection;
