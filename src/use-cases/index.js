const User = require("./user");
const Payment = require("./payment");

module.exports = (dependencies) => {
  const user = User(dependencies);
  const payment = Payment(dependencies);

  return ({
    user,
    payment
  });
};
