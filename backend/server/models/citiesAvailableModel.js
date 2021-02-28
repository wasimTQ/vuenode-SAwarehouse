const Sequelize = require("sequelize");
const db = require("../connection");

const CitiessAvailable = db.define("cities", {
  name: {
    type: Sequelize.STRING,
  },
});

module.exports = CitiessAvailable;
