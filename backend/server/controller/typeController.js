const typesAvailableModel = require('../models/typesAvailableModel');

exports.getAllTypes = async (req, res) => {
    try {
        const types = await typesAvailableModel.findAll();
        res.send(types);
    } catch (error) {
        res.send(error);
    }
}

exports.addType = async (req, res) => {
    try {
        console.log(req.body);
        const type = await typesAvailableModel.create({
            name: req.body.name,
        });

        res.send({
            msg: type.name + ' created successfully',
            success: true,
        })
    } catch (error) {
        res.send(error);
    }
}