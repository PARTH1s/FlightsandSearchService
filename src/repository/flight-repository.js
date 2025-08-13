const { Op } = require("sequelize");
const { Flight } = require("../models");

class FlightRepository {
  // Build dynamic filter for flight queries
  #createFilter(data) {
    const filter = {};

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
        [Op.lte]: data.maxPrice,
      };
    }

    return filter;
  }

  // Create a new flight
  async createFlight(data) {
    try {
      return await Flight.create(data);
    } catch (error) {
      console.error("Error creating flight:", error);
      throw error;
    }
  }

  // Get flight by ID
  async getFlight(flightId) {
    try {
      return await Flight.findByPk(flightId);
    } catch (error) {
      console.error("Error fetching flight:", error);
      throw error;
    }
  }

  // Get all flights with optional filters
  async getAllFlights(filter) {
    try {
      const filterObjects = this.#createFilter(filter);
      return await Flight.findAll({ where: filterObjects });
    } catch (error) {
      console.error("Error fetching flights:", error);
      throw error;
    }
  }

  // Update flight details
  async updateFlight(flightId, data) {
    try {
      const [updatedRows] = await Flight.update(data, { where: { id: flightId } });

      if (updatedRows === 0) {
        throw new Error(`Flight with ID ${flightId} not found or no changes applied.`);
      }

      return true;
    } catch (error) {
      console.error("Error updating flight:", error);
      throw error;
    }
  }
}

module.exports = FlightRepository;
