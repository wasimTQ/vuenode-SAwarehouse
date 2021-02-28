const db = require("../connection");
const Op = require("sequelize").Op;

const warehouseModel = require("../models/warehouseModel");
const TypesAvailable = require("../models/typesAvailableModel");
const ClustersAvailable = require("../models/clustersAvailableModel");
const CitiesAvailable = require("../models/citiesAvailableModel");

exports.getAllWarehouses = async (req, res) => {
  try {
    const warehouses = await warehouseModel.findAll({
      include: [TypesAvailable, ClustersAvailable, CitiesAvailable],
    });

    res.send(warehouses);
  } catch (error) {
    res.send(error);
  }
};

exports.filterWarehouses = async (req, res) => {
  try {
    let whereStatement = {};
    let query = req.query;

    if (query.city_id) {
      whereStatement.city_id = query.city_id;
    }
    if (query.cluster_id) {
      whereStatement.cluster_id = query.cluster_id;
    }
    if (query.type_id) {
      whereStatement.type_id = query.type_id;
    }
    if (query.space) {
      whereStatement.space_available = {
        [Op.gte]: query.space,
      };
    }

    if (query.search) {
      whereStatement.name = {
        [Op.like]: `%${query.search}%`,
      };
    }

    const warehouses = await warehouseModel.findAll({
      where: whereStatement,
      include: [TypesAvailable, ClustersAvailable, CitiesAvailable],
    });

    res.send(warehouses);
  } catch (err) {
    res.status(400).send(err);
  }
};

exports.addWarehouse = async (req, res) => {
  try {
    const warehouse = await warehouseModel.create({
      name: req.body.name,
      code: req.body.code,
      space_available: req.body.space,
      city_id: req.body.selectedCityId,
      cluster_id: req.body.selectedClusterId,
      type_id: req.body.selectedTypeId,
      is_registered: req.body.isRegistered,
      is_live: req.body.isLive,
    });

    console.log(warehouse);

    res.send({
      msg: warehouse.name + " created successfully",
      success: true,
    });
  } catch (err) {
    res.status(400).send(err);
  }
};

exports.getFilteredNames = async (req, res) => {
  try {
    
    const warehouseNames = await warehouseModel.findAll({
      attributes: ["name"],
      where: {
        name: { [Op.iLike]: `%${req.query.search}%` },
      },
    });
    
    res.send(warehouseNames);
  } catch (error) {
    res.send(error);
  }
};

exports.getWarehouseDetail = async (req, res) => {
  try {
    const warehouseDetail = await warehouseModel.findOne({
      where: {
        id: req.params.id,
      },
      include: [TypesAvailable, ClustersAvailable, CitiesAvailable],
    });

    res.send(warehouseDetail);
  } catch (error) {
    res.send(error)
  }
}

exports.updateWarehouse = async (req, res) => {
  try {
    console.log(req.params.id);
    console.log(req.body);
  const warehouse = await warehouseModel.update(
    {
      name: req.body.name,
      code: req.body.code,
      space_available: req.body.space_available,
      cluster_id: req.body.cluster_id,
      type_id: req.body.type_id,
      city_id: req.body.city_id,
      is_registered: req.body.is_registered,
      is_live: req.body.is_live,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  );

  
  res.send({
    msg: warehouse.name + ' with ' + warehouse.id + ' edited successfully',
    success: true,
  });
  } catch (error) {
    res.send(error);
  }
};

exports.deleteWarehouse = async (req, res) => {
  console.log(req.params.id);
  const warehouse = await warehouseModel.destroy({
    where: {
      id: req.params.id,
    },
  });
  res.send({
    msg: req.params.id + ' deleted successfully',
    error: true,
  });
};
