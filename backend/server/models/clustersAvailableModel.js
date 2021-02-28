const Sequelize = require("sequelize");
const db = require("../connection");


const ClustersAvailable = db.define("clusters", {
  name: {
    type: Sequelize.STRING,
  },
});



module.exports = ClustersAvailable;
