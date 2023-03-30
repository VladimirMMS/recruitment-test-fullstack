require('dotenv').config();
const User = require("../../../db/models/User");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');

async function login(req, res) {
    const { username, password } = req.body;
    try {
      const user = await User.findOne({ where: { username: username } });
      if (user == null) {
        return res.status(400).send("Not found");
      }
      if (await bcrypt.compare(password, user.password)) {
        const token =jwt.sign(
          { userId: user.id },
          process.env.SECRET_KEY,
        );
        res.send({token})
      } else {
        res
          .status(400)
          .json({ message: "User/password not match"});
      }
    } catch(error) {

      res.status(500).send(error);
    }
  }

  module.exports = login;