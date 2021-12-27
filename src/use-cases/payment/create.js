module.exports = ({
  database: { models: { Payment } },
}) => async (payment) => {
  const newPayment = await Payment.create(payment);
  return newPayment.toJSON();
};
