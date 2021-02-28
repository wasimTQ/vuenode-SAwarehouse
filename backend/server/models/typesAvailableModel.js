const Sequelize = require("sequelize");
const db = require("../connection");

const TypesAvailable = db.define("types", {
  name: {
    type: Sequelize.STRING,
  },
});

module.exports = TypesAvailable;
