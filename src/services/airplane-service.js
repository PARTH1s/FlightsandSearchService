const { AirplaneRepository } = require("../repository");

class AirplaneService {
  constructor() {
    this.airplaneRepository = new AirplaneRepository();
  }

  // Create a new airplane
  async createAirplane(data) {
    try {
      return await this.airplaneRepository.createAirplane(data);
    } catch (error) {
      console.error("Error in AirplaneService.createAirplane:", error);
      throw error;
    }
  }

  // Update airplane details
  async updateAirplane(airplaneId, data) {
    try {
      return await this.airplaneRepository.updateAirplane(airplaneId, data);
    } catch (error) {
      console.error("Error in AirplaneService.updateAirplane:", error);
      throw error;
    }
  }

  // Delete an airplane
  async deleteAirplane(airplaneId) {
    try {
      return await this.airplaneRepository.deleteAirplane(airplaneId);
    } catch (error) {
      console.error("Error in AirplaneService.deleteAirplane:", error);
      throw error;
    }
  }

  // Get airplane by ID
  async getAirplane(airplaneId) {
    try {
      return await this.airplaneRepository.getAirplane(airplaneId);
    } catch (error) {
      console.error("Error in AirplaneService.getAirplane:", error);
      throw error;
    }
  }

  // Get all airplanes
  async getAllAirplanes() {
    try {
      return await this.airplaneRepository.getAllAirplanes();
    } catch (error) {
      console.error("Error in AirplaneService.getAllAirplanes:", error);
      throw error;
    }
  }
}

module.exports = AirplaneService;
