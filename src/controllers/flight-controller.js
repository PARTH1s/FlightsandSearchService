const FlightService = require('../services/flight-service');

const flightService = new FlightService();

const create = async (req, res) => {
    try {
        const flight = await flightService.createFlight(req.body);
        return res.status(201).json({
            data: flight,
            success: true,
            message: 'Successfully created a flight.',
            err: {}
        });
    } catch (error) {
        console.error('Flight creation error:', error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to create a flight.',
            err: error
        });
    }
};

// Get a flight by ID
const get = async (req, res) => {
    try {
        const flight = await flightService.getFlight(req.params.id);
        return res.status(200).json({
            data: flight,
            success: true,
            message: 'Successfully fetched the flight.',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to fetch the flight.',
            err: error
        });
    }
};

// Get all flights
const getall = async (req, res) => {
    try {
        const flights = await flightService.getAllFlights(req.query);
        return res.status(200).json({
            data: flights,
            success: true,
            message: 'Successfully fetched all flights.',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to fetch flights.',
            err: error
        });
    }
};


module.exports = { create, get,getall };
