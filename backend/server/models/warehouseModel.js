const Sequelize = require("sequelize");
const db = require("../connection");

const TypesAvailable = require("./typesAvailableModel");
const ClustersAvailable = require("./clustersAvailableModel");
const CitiesAvailable = require("./citiesAvailableModel");

const Warehouse = db.define("warehouses", {
  name: {
    type: Sequelize.STRING,
  },
  code: {
    type: Sequelize.STRING,
  },
  space_available: {
    type: Sequelize.INTEGER,
  },
  type_id: {
    type: Sequelize.INTEGER,
  },
  cluster_id: {
    type: Sequelize.INTEGER,
  },
  city_id: {
    type: Sequelize.INTEGER,
  },
  is_registered: {
    type: Sequelize.BOOLEAN,
  },
  is_live: {
    type: Sequelize.BOOLEAN,
  },
});

Warehouse.belongsTo(TypesAvailable, {
  foreignKey: 'type_id'
});

Warehouse.belongsTo(ClustersAvailable, {
  foreignKey: 'cluster_id'
});

Warehouse.belongsTo(CitiesAvailable, {
  foreignKey: 'city_id'
});

module.exports = Warehouse;
