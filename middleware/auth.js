const jwt = require("jsonwebtoken");
const config = require("config");

module.exports = function(req, res, next) {
  // Token from header
  const token = req.header("x-auth-token");

  // validation
  if (!token) {
    return res.status(401).json({ msg: "No token, authroization denied" });
  }

  // verifiy token
  try {
    const decde = jwt.verify(token, config.get("JWSecreat"));

    req.user = decde.user;
    next();
  } catch (err) {
    res.status(401).json({ msg: "Token is not valid" });
  }
};
