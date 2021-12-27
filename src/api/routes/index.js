const { Router } = require("express");
const createUserRoutes = require("./users");
const createPaymentRoutes = require("./payments");

module.exports = (dependencies) => {
  const userRoutes = createUserRoutes(dependencies);
  const paymentRoutes = createPaymentRoutes(dependencies);
  const router = Router();

  router.use("/users", userRoutes);
  router.use("/payments", paymentRoutes);
  return router;
};
