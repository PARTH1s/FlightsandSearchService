const { Op } = require("sequelize");
const { City, Airport } = require("../models");

class CityRepository {
  // Create a new city
  async createCity({ name }) {
    try {
      return await City.create({ name });
    } catch (error) {
      console.error("Error creating city:", error);
      throw error;
    }
  }

  // Delete city by ID
  async deleteCity(cityId) {
    try {
      const deletedCount = await City.destroy({ where: { id: cityId } });
      return deletedCount > 0;
    } catch (error) {
      console.error("Error deleting city:", error);
      throw error;
    }
  }

  // Update city details
  async updateCity(cityId, data) {
    try {
      const city = await City.findByPk(cityId);
      if (!city) return null;

      if (data.name !== undefined) city.name = data.name;

      await city.save();
      return city;
    } catch (error) {
      console.error("Error updating city:", error);
      throw error;
    }
  }

  // Get city by ID
  async getCity(cityId) {
    try {
      return await City.findByPk(cityId);
    } catch (error) {
      console.error("Error fetching city:", error);
      throw error;
    }
  }

  // Get all cities (optional filter: name starts with)
  async getAllCities(filter) {
    try {
      const condition = {};

      if (filter?.name) {
        condition.name = { [Op.startsWith]: filter.name };
      }

      return await City.findAll({ where: condition });
    } catch (error) {
      console.error("Error fetching cities:", error);
      throw error;
    }
  }

  // Get all airports for a specific city
  async getAirportsByCity(cityId) {
    try {
      return await Airport.findAll({ where: { cityId } });
    } catch (error) {
      console.error("Error fetching airports for city:", error);
      throw error;
    }
  }
}

module.exports = CityRepository;
