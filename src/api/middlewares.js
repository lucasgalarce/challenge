const jwt = require("jsonwebtoken");
const config = require("../config");

const validateToken = (req, res, next) => {

  if (!req.header("Token")) return res.status(401).send("401: Access Denied");

  try {

    jwt.verify(req.header("Token"), `${config.API.SECRET}`, (err) => {
      if (err) {
        return res.status(401).json({
          ok: false,
          err: {
            message: "Invalid token"
          }
        });
      }
      next();
    });

  } catch (error) {

    res.status(400).send(error);
  }
};

module.exports = {
  validateToken
};
