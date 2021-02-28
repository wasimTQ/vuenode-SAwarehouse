const citiesAvailableModel = require('../models/citiesAvailableModel');

exports.getAllCities = async (req, res) => {
    try {
        const cities = await citiesAvailableModel.findAll();
        res.send(cities);
    } catch (error) {
        res.send(error);
    }
}

exports.addCity = async (req, res) => {
    try {
        console.log(req.body);
        const city = await citiesAvailableModel.create({
            name: req.body.name,
        });
        

        res.send({
            msg: city.name + ' created successfully',
            success: true,
        })
    } catch (error) {
        res.send(error);
    }
}