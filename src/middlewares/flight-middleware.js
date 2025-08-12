const { ClientErrorCodes } = require("../utils/error-codes");

/**
 * Middleware to validate request body for creating a flight.
 * Ensures all mandatory fields are present before proceeding.
 */
const validateCreateFlight = (req, res, next) => {
  const {
    flightNumber,
    airplaneId,
    departureAirportId,
    arrivalAirportId,
    arrivalTime,
    departureTime,
    price,
  } = req.body;

  // Check for missing mandatory fields
  if (
    !flightNumber ||
    !airplaneId ||
    !departureAirportId ||
    !arrivalAirportId ||
    !arrivalTime ||
    !departureTime ||
    !price
  ) {
    return res.status(ClientErrorCodes.BAD_REQUEST).json({
      data: {},
      success: false,
      message: "Invalid request body for create flight",
      err: "Missing mandatory properties to create a flight",
    });
  }

  // All validations passed, proceed to next middleware/controller
  next();
};

module.exports = {
  validateCreateFlight,
};
