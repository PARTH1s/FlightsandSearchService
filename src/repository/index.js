// Centralized export for all repositories
const AirplaneRepository = require("./airplane-repository");
const AirportRepository = require("./airport-repository");
const CityRepository = require("./city-repository");
const FlightRepository = require("./flight-repository");

module.exports = {
  CityRepository,
  AirportRepository,
  AirplaneRepository,
  FlightRepository,
};
