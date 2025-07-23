const { SuccessCodes, ServerErrorCodes, ClientErrorCodes } = require("../utils/error-codes")


const { CityService } = require('../services/index');

const cityService = new CityService();

// Create a city
const create = async (req, res) => {
    try {
        const city = await cityService.createCity(req.body);
        return res.status(SuccessCodes.CREATED).json({
            data: city,
            success: true,
            message: 'Successfully created a city.',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(ServerErrorCodes.INTERNAL_SERVER_ERROR).json({
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
        return res.status(SuccessCodes.OK).json({
            data: response,
            success: true,
            message: 'Successfully deleted the city.',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(ServerErrorCodes.INTERNAL_SERVER_ERROR).json({
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
        return res.status(SuccessCodes.OK).json({
            data: city,
            success: true,
            message: 'Successfully fetched the city.',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(ServerErrorCodes.INTERNAL_SERVER_ERROR).json({
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
            return res.status(ClientErrorCodes.NOT_FOUND).json({
                data: {},
                success: false,
                message: 'City not found or no changes applied.',
                err: {}
            });
        }

        return res.status(SuccessCodes.OK).json({
            data: updatedCity,
            success: true,
            message: 'Successfully updated the city.',
            err: {}
        });
    } catch (error) {
        return res.status(ServerErrorCodes.INTERNAL_SERVER_ERROR).json({
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
        return res.status(SuccessCodes.OK).json({
            data: cities,
            success: true,
            message: 'Successfully fetched all cities.',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(ServerErrorCodes.INTERNAL_SERVER_ERROR).json({
            data: {},
            success: false,
            message: 'Not able to fetch cities.',
            err: error
        });
    }
};


const getAirportsByCity = async (req, res) => {
    try {
        const cityId = req.params.id;
        const airports = await cityService.getAirportsByCity(cityId);
        return res.status(SuccessCodes.OK).json({
            data: airports,
            success: true,
            message: 'Successfully fetched airports for the city.',
            err: {},
        });
    } catch (error) {
        console.log(error);
        return res.status(ServerErrorCodes.INTERNAL_SERVER_ERROR).json({
            data: {},
            success: false,
            message: 'Failed to fetch airports for the city.',
            err: error,
        });
    }
};


module.exports = {
    create,
    destroy,
    get,
    update,
    getall,
    getAirportsByCity
};
