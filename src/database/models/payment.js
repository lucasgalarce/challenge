const Sequelize = require("sequelize");
const { DataTypes } = Sequelize;

module.exports = (sequelize) => {
  const Payment = sequelize.define("Payment",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      payment: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      type: {
        type: DataTypes.STRING,
        allowNull: false
      },
      amount: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
    },
    {
      tableName: "payments",
      timestamps: true,
    });

  return Payment;
};
