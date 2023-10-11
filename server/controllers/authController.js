const db = require("../db");

/**
 * /user/login
 * Check login credentials if user exists and uses correct credentials
 */
exports.login = async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  try {
    data = await db.one("SELECT * FROM users WHERE email = $1 AND password = $2", [
      email,
      password,
    ]);
    res.send(data);
  } catch (error) {
    res.sendStatus(400);
  }
};

/**
 * /user/register
 * Create a new user in the database
 */
exports.register = async (req, res) => {
  const firstname = req.body.email;
  const lastname = req.body.lastname;
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;

  try {
    data = await db.one(`
      INSERT INTO users (firstname, lastname, username, email, password)
      VALUES ($1, $2, $3, $4, $5)
    `, [
      firstname,
      lastname,
      username,
      email,
      password
    ]);
  } catch (error) {
    res.sendStatus(400)
  }
}