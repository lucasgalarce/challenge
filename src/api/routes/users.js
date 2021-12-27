const wrapThrow = require("express-async-handler");
const HttpStatus = require("http-status");
const { Router } = require("express");
const jwt = require("jsonwebtoken");
const config = require("../../config");
const { validateToken } = require("../middlewares");

const { validate, schemas } = require("../validations");
const { Op } = require("sequelize");

module.exports = ({ useCases }) => {
  const router = Router();

  router.get("/getusers", validateToken, async (req, res) => {
    const response = await useCases.user.getAll();
    res.status(HttpStatus.OK).json(response);
  });

  router.get("/getbyid", validateToken, async (req, res) => {

    try {
      const body = req.body;
      if (body.id === null || body.id === undefined) return res.status(400).json({ error: "id is required" });
      const response = await useCases.user.getAll({ id: body.id });
      res.status(HttpStatus.OK).json(response);
    }
    catch (error) {
      res.status(400).json({ error });
    }
  });

  router.post("/createuser",
    validateToken,
    validate(schemas.user.create),
    wrapThrow(async (req, res) => {
      const user = req.locals.sanitized.body;

      const response = await useCases.user.getAll({ [Op.or]: [ { email: user.email }, { username: user.username } ] });

      if (response.length > 0) return res.status(400).json({ error: "Email or username already exist" });
      const newUser = await useCases.user.create(user);
      res.status(HttpStatus.OK).json(newUser);
    })
  );

  /* Fake Login */
  router.post("/login", (req, res) => {

    const token = jwt.sign({
      usuario: "admin"
    }, config.API.SECRET);

    res.json({
      ok: true,
      token
    });
  });

  return router;
};
