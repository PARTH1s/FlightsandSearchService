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

    //   async deleteCity(cityId) {
    //     try {
    //       await City.destroy({
    //         where: {
    //           id: cityId,
    //         },
    //       });
    //       return true;
    //     } catch (error) {
    //       console.log("Error in deleting city", error);
    //       throw { error };
    //     }
    //   }

    //   async updateCity(cityId, data) {
    //     try {
    //       // This below approach works but will not return updated Object.
    //       // If we are using pg then returning true can be used, else not
    //       // const [updatedCount] = await City.update(data, {
    //       //     where: { id: cityId }
    //       // });

    //       // if (updatedCount === 0) {
    //       //     return null;
    //       // }

    //       // const updatedCity = await City.findByPk(cityId);
    //       // return updatedCity;
    //       // for getting updated data in mysql we use below approach
    //       const city = await City.findByPk(cityId);
    //       city.name = data.name;
    //       await city.save();
    //       return city;
    //     } catch (error) {
    //       throw { error };
    //     }
    //   }

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


