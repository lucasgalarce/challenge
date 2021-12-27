module.exports = ({
  database: { models: { Payment } },
}) => async (query = {}) => {
  const payments = await Payment.findAll({ where: query });
  return payments;
};
