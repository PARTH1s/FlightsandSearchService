const { FlightRepository, AirplaneRepository } = require("../repository/index");
const { compareTime } = require("../utils/helper");

class FlightService {
    constructor() {
        this.flightRepository = new FlightRepository();
        this.airplaneRepository = new AirplaneRepository();
    }

    async createFlight(data) {
        try {
            if (!compareTime(data.arrivalTime, data.departureTime)) {
                throw { error: 'Arrival time cannot be less than departure time.' }
            }
            const airplane = await this.airplaneRepository.getAirplane(data.airplaneId);

            const flight = await this.flightRepository.createFlight({
                ...data,
                totalSeats: airplane.capacity
            });

            return flight;
        } catch (error) {
            console.log("Something went wrong in the service layer:", error);
            throw error;
        }
    }

    async getFlight(flightId) {
        try {
            const flight = await this.flightRepository.getFlight(flightId);
            return flight;
        } catch (error) {
            console.log("Something went wrong in service layer", error);
            throw { error };
        }
    }

    async getAllFlights(data) {
        try {
            const flights = await this.flightRepository.getAllFlights(data);
            return flights;
        } catch (error) {
            console.log("Something went wrong in service layer", error);
            throw { error };
        }
    }

    async updateFlight(flightId, data) {
        try {
            const updated = await this.flightRepository.updateFlight(flightId, data);
            return updated;
        } catch (error) {
            console.log("Something went wrong in service layer while updating flight", error);
            throw { error };
        }
    }

}

module.exports = FlightService;
