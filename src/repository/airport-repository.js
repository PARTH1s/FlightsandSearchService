const { Op } = require("sequelize");
const { Airport } = require("../models");

class AirportRepository {
  // Create a new airport
  async createAirport({ name, address, cityId }) {
    try {
      return await Airport.create({ name, address, cityId });
    } catch (error) {
      console.error("Error creating airport:", error);
      throw error;
    }
  }

  // Delete airport by ID
  async deleteAirport(airportId) {
    try {
      const deletedCount = await Airport.destroy({ where: { id: airportId } });
      return deletedCount > 0;
    } catch (error) {
      console.error("Error deleting airport:", error);
      throw error;
    }
  }

  // Update airport details
  async updateAirport(airportId, data) {
    try {
      const airport = await Airport.findByPk(airportId);
      if (!airport) return null;

      if (data.name !== undefined) airport.name = data.name;
      if (data.address !== undefined) airport.address = data.address;
      if (data.cityId !== undefined) airport.cityId = data.cityId;

      await airport.save();
      return airport;
    } catch (error) {
      console.error("Error updating airport:", error);
      throw error;
    }
  }

  // Get airport by ID
  async getAirport(airportId) {
    try {
      return await Airport.findByPk(airportId);
    } catch (error) {
      console.error("Error fetching airport:", error);
      throw error;
    }
  }

  // Get all airports with optional filters (name starts with, cityId)
  async getAllAirports(filter) {
    try {
      const condition = {};

      if (filter?.name) {
        condition.name = { [Op.startsWith]: filter.name };
      }
      if (filter?.cityId) {
        condition.cityId = filter.cityId;
      }

      return await Airport.findAll({ where: condition });
    } catch (error) {
      console.error("Error fetching airports:", error);
      throw error;
    }
  }
}

module.exports = AirportRepository;
