const clustersAvailableModel = require('../models/clustersAvailableModel');

exports.getAllClusters = async (req, res) => {
    try {
        const clusters = await clustersAvailableModel.findAll();
        res.send(clusters);
    } catch (error) {
        res.send(error);
    }
}


exports.addCluster = async (req, res) => {
    try {
        console.log(req.body);
        const cluster = await clustersAvailableModel.create({
            name: req.body.name,
        });

        res.send({
            msg: cluster.name + ' created successfully',
            success: true,
        })
    } catch (error) {
        res.send(error);
    }
}