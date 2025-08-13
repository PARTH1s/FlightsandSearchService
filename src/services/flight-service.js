const { FlightRepository, AirplaneRepository } = require("../repository");
const { compareTime } = require("../utils/helper");

class FlightService {
  constructor() {
    this.flightRepository = new FlightRepository();
    this.airplaneRepository = new AirplaneRepository();
  }

  // Create a new flight
  async createFlight(data) {
    try {
      if (!compareTime(data.arrivalTime, data.departureTime)) {
        throw new Error("Arrival time cannot be less than departure time.");
      }

      const airplane = await this.airplaneRepository.getAirplane(data.airplaneId);
      if (!airplane) {
        throw new Error(`Airplane with ID ${data.airplaneId} not found.`);
      }

      return await this.flightRepository.createFlight({
        ...data,
        totalSeats: airplane.capacity,
      });
    } catch (error) {
      console.error("Error in FlightService.createFlight:", error);
      throw error;
    }
  }

  // Get flight by ID
  async getFlight(flightId) {
    try {
      return await this.flightRepository.getFlight(flightId);
    } catch (error) {
      console.error("Error in FlightService.getFlight:", error);
      throw error;
    }
  }

  // Get all flights with optional filters
  async getAllFlights(filter) {
    try {
      return await this.flightRepository.getAllFlights(filter);
    } catch (error) {
      console.error("Error in FlightService.getAllFlights:", error);
      throw error;
    }
  }

  // Update flight details
  async updateFlight(flightId, data) {
    try {
      return await this.flightRepository.updateFlight(flightId, data);
    } catch (error) {
      console.error("Error in FlightService.updateFlight:", error);
      throw error;
    }
  }
}

module.exports = FlightService;
