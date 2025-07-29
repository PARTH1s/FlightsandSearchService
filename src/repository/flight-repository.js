const { Op } = require('sequelize');
const { Flight } = require('../models/index');


class FlightRepository {

    #createFilter(data) {
        let filter = {};

        if (data.arrivalAirportId) {
            filter.arrivalAirportId = data.arrivalAirportId;
        }

        if (data.departureAirportId) {
            filter.departureAirportId = data.departureAirportId;
        }

        if (data.minPrice) {
            filter.price = { [Op.gte]: data.minPrice };
        }

        if (data.maxPrice) {
            filter.price = {
                ...filter.price,
                [Op.lte]: data.maxPrice
            };
        }
        return filter;
    }


    async createFlight(data) {
        try {
            const flight = await Flight.create(data);
            return flight;
        } catch (error) {
            console.log("Error in creating flight", error);
            throw { error };
        }
    }

    async getFlight(flightId) {
        try {
            const flight = await Flight.findByPk(flightId);
            return flight;
        } catch (error) {
            console.log("Error in getting Flight", error);
            throw { error };
        }
    }

    async getAllFlights(filter) {
        try {
            const filterobjects = this.#createFilter(filter);
            const flights = await Flight.findAll({
                where: filterobjects
            });
            return flights;
        } catch (error) {
            console.log("Error in getting all flights:", error);
            throw { error };
        }
    }

    async updateFlight(flightId, data) {
        try {
            // Flight.update returns [numberOfAffectedRows, ...]
            const [updatedRows] = await Flight.update(data, {
                where: {
                    id: flightId
                }
            });

            if (updatedRows === 0) {
                throw new Error(`Flight with id ${flightId} not found or no changes applied.`);
            }

            return true;
        } catch (error) {
            console.error("Error updating flight:", error);
            throw error;
        }
    }

    //   async getAirportsByCity(cityId) {
    //     try {
    //       const airports = await Airport.findAll({
    //         where: { cityId: cityId },
    //       });
    //       return airports;
    //     } catch (error) {
    //       console.log("Error in fetching airports for city", error);
    //       throw { error };
    //     }
    //   }
}

module.exports = FlightRepository;


