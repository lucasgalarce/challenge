module.exports = (models) => {
  const { User, Payment } = models;

  User.hasMany(Payment);
  Payment.belongsTo(User);
};
