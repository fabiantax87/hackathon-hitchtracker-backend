const db = require("../db");

/**
 * /user/login
 * Check login credentials if user exists and uses correct credentials
 */
exports.login = async (req, res) => {
  let email = req.body.email;
  let password = req.body.password;

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
