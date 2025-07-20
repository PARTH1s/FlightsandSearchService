const { CityService } = require('../services/index');

const cityService = new CityService();  

// Create a city
const create = async (req, res) => {
    try {
        const city = await cityService.createCity(req.body);
        return res.status(201).json({
            data: city,
            success: true,
            message: 'Successfully created a city.',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to create a city.',
            err: error
        });
    }
};

// Delete a city
const destroy = async (req, res) => {
    try {
        const response = await cityService.deleteCity(req.params.id);
        return res.status(200).json({
            data: response,
            success: true,
            message: 'Successfully deleted the city.',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to delete the city.',
            err: error
        });
    }
};

// Get a city by ID
const get = async (req, res) => {
    try {
        const city = await cityService.getCity(req.params.id);
        return res.status(200).json({
            data: city,
            success: true,
            message: 'Successfully fetched the city.',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to fetch the city.',
            err: error
        });
    }
};

// Update a city
const update = async (req, res) => {
    try {
        const updatedCity = await cityService.updateCity(req.params.id, req.body);

        if (!updatedCity) {
            return res.status(404).json({
                data: {},
                success: false,
                message: 'City not found or no changes applied.',
                err: {}
            });
        }

        return res.status(200).json({
            data: updatedCity,
            success: true,
            message: 'Successfully updated the city.',
            err: {}
        });
    } catch (error) {
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to update the city.',
            err: error
        });
    }
};


// Get all cities
const getall = async (req, res) => {
    try {
        const cities = await cityService.getallCities(req.query);
        return res.status(200).json({
            data: cities,
            success: true,
            message: 'Successfully fetched all cities.',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to fetch cities.',
            err: error
        });
    }
};

module.exports = {
    create,
    destroy,
    get,
    update,
    getall
};
