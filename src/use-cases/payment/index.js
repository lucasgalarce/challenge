const Create = require("./create");
const GetAll = require("./getAll");

module.exports = (dependencies) => ({
  create: Create(dependencies),
  getAll: GetAll(dependencies),
});
