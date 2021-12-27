const HttpStatus = require("http-status");
const { Router } = require("express");
const { validateToken } = require("../middlewares");

module.exports = ({ useCases }) => {
  const router = Router();

  router.get("/getpayments", validateToken, async (req, res) => {

    const response = await useCases.payment.getAll();
    res.status(HttpStatus.OK).json(response);
  });

  router.post("/createpayment", validateToken, async (req, res) => {
    const payment = req.body;

    const newPayment = await useCases.payment.create(payment);
    res.status(HttpStatus.OK).json(newPayment);
  });
  
  return router;
};
