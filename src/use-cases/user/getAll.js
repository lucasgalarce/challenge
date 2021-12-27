module.exports = ({
  database: { models: { User } },
}) => async (query = {}) => {
  const users = await User.findAll({ where: query });
  return users;
};
