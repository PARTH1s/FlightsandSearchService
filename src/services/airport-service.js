const { AirportRepository } = require("../repository/index");

class AirportService {
  constructor() {
    this.AirportRepository = new AirportRepository();
  }

  async createAirport(data) {
    try {
      const airport = await this.AirportRepository.createAirport(data);
      return airport;
    } catch (error) {
      console.log("Something went wrong in service layer", error);
      throw { error };
    }
  }

  async updateAirport(airportId, data) {
    try {
      const airport = await this.AirportRepository.updateAirport(airportId, data);
      return airport;
    } catch (error) {
      console.log("Something went wrong in service layer", error);
      throw { error };
    }
  }

  async deleteAirport(airportId) {
    try {
      const response = await this.AirportRepository.deleteAirport(airportId);
      return response;
    } catch (error) {
      console.log("Something went wrong in service layer", error);
      throw { error };
    }
  }

  async getAirport(airportId) {
    try {
      const airport = await this.AirportRepository.getAirport(airportId);
      return airport;
    } catch (error) {
      console.log("Something went wrong in service layer", error);
      throw { error };
    }
  }

  async getAllAirports(filter) {
    try {
      const airports = await this.AirportRepository.getAllAirports({
        name: filter.name,
        cityId: filter.cityId,
      });
      return airports;
    } catch (error) {
      console.log("Something went wrong in service layer", error);
      throw { error };
    }
  }
}

module.exports = AirportService;
