const User = require("../../../db/models/User");
const bcrypt = require("bcrypt");

async function signUp(req, res) {

  const { username } = req.body;
  const password = await bcrypt.hash(req.body.password, 10);
  try {
    const findUser = await User.findOne({ where: { username: username } });

    if (findUser) {
      res.status(400).json({ message: "The user already exists" });
    } else {
      const user = await User.create({
        username,
        password,
      });
      res.send(user);
    }
  } catch (error) {
    res.status(500).send(error);
  }
}

module.exports = signUp;