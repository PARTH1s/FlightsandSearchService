const { AirportRepository } = require("../repository");

class AirportService {
  constructor() {
    this.airportRepository = new AirportRepository();
  }

  // Create a new airport
  async createAirport(data) {
    try {
      return await this.airportRepository.createAirport(data);
    } catch (error) {
      console.error("Error in AirportService.createAirport:", error);
      throw error;
    }
  }

  // Update airport details
  async updateAirport(airportId, data) {
    try {
      return await this.airportRepository.updateAirport(airportId, data);
    } catch (error) {
      console.error("Error in AirportService.updateAirport:", error);
      throw error;
    }
  }

  // Delete an airport
  async deleteAirport(airportId) {
    try {
      return await this.airportRepository.deleteAirport(airportId);
    } catch (error) {
      console.error("Error in AirportService.deleteAirport:", error);
      throw error;
    }
  }

  // Get airport by ID
  async getAirport(airportId) {
    try {
      return await this.airportRepository.getAirport(airportId);
    } catch (error) {
      console.error("Error in AirportService.getAirport:", error);
      throw error;
    }
  }

  // Get all airports with optional filters (name, cityId)
  async getAllAirports(filter) {
    try {
      return await this.airportRepository.getAllAirports({
        name: filter?.name,
        cityId: filter?.cityId,
      });
    } catch (error) {
      console.error("Error in AirportService.getAllAirports:", error);
      throw error;
    }
  }
}

module.exports = AirportService;
