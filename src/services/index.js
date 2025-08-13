// Centralized export for all services
const AirplaneService = require("./airplane-service");
const AirportService = require("./airport-service");
const CityService = require("./city-service");
const FlightService = require("./flight-service");

module.exports = {
  CityService,
  AirportService,
  AirplaneService,
  FlightService,
};
