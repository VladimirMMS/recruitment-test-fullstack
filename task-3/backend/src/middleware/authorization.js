const jwt = require('jsonwebtoken');

module.exports = async (req, res, next) => {
  const token = req.headers.authorization;
  try {
    const authEntity = jwt.verify(token, process.env.SECRET_KEY);
    if(authEntity) {
        next();
    }
  } catch (error) {
    return res.status(401).send({
      message: 'The token is invalid or has not been provided.',
    });
  }
};