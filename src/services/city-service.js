const { CityRepository } = require("../repository");

class CityService {
  constructor() {
    this.cityRepository = new CityRepository();
  }

  // Create a new city
  async createCity(data) {
    try {
      return await this.cityRepository.createCity(data);
    } catch (error) {
      console.error("Error in CityService.createCity:", error);
      throw error;
    }
  }

  // Update city details
  async updateCity(cityId, data) {
    try {
      return await this.cityRepository.updateCity(cityId, data);
    } catch (error) {
      console.error("Error in CityService.updateCity:", error);
      throw error;
    }
  }

  // Delete a city
  async deleteCity(cityId) {
    try {
      return await this.cityRepository.deleteCity(cityId);
    } catch (error) {
      console.error("Error in CityService.deleteCity:", error);
      throw error;
    }
  }

  // Get city by ID
  async getCity(cityId) {
    try {
      return await this.cityRepository.getCity(cityId);
    } catch (error) {
      console.error("Error in CityService.getCity:", error);
      throw error;
    }
  }

  // Get all cities with optional name filter
  async getAllCities(filter) {
    try {
      return await this.cityRepository.getAllCities({ name: filter?.name });
    } catch (error) {
      console.error("Error in CityService.getAllCities:", error);
      throw error;
    }
  }

  // Get all airports for a specific city
  async getAirportsByCity(cityId) {
    try {
      return await this.cityRepository.getAirportsByCity(cityId);
    } catch (error) {
      console.error("Error in CityService.getAirportsByCity:", error);
      throw error;
    }
  }
}

module.exports = CityService;
