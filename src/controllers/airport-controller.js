const { SuccessCodes, ServerErrorCodes, ClientErrorCodes } = require("../utils/error-codes");
const { AirportService } = require("../services/index");

const airportService = new AirportService();

/**
 * Create a new airport
 */
const create = async (req, res) => {
  try {
    const airport = await airportService.createAirport(req.body);
    return res.status(SuccessCodes.CREATED).json({
      data: airport,
      success: true,
      message: "Successfully created an airport.",
      err: {},
    });
  } catch (error) {
    console.error(error);
    return res.status(ServerErrorCodes.INTERNAL_SERVER_ERROR).json({
      data: {},
      success: false,
      message: "Not able to create an airport.",
      err: error,
    });
  }
};

/**
 * Delete an airport by ID
 */
const destroy = async (req, res) => {
  try {
    const response = await airportService.deleteAirport(req.params.id);
    return res.status(SuccessCodes.OK).json({
      data: response,
      success: true,
      message: "Successfully deleted the airport.",
      err: {},
    });
  } catch (error) {
    console.error(error);
    return res.status(ServerErrorCodes.INTERNAL_SERVER_ERROR).json({
      data: {},
      success: false,
      message: "Not able to delete the airport.",
      err: error,
    });
  }
};

/**
 * Get an airport by ID
 */
const get = async (req, res) => {
  try {
    const airport = await airportService.getAirport(req.params.id);
    return res.status(SuccessCodes.OK).json({
      data: airport,
      success: true,
      message: "Successfully fetched the airport.",
      err: {},
    });
  } catch (error) {
    console.error(error);
    return res.status(ServerErrorCodes.INTERNAL_SERVER_ERROR).json({
      data: {},
      success: false,
      message: "Not able to fetch the airport.",
      err: error,
    });
  }
};

/**
 * Update an airport by ID
 */
const update = async (req, res) => {
  try {
    const updatedAirport = await airportService.updateAirport(req.params.id, req.body);

    if (!updatedAirport) {
      return res.status(ClientErrorCodes.BAD_REQUEST).json({
        data: {},
        success: false,
        message: "Airport not found or no changes applied.",
        err: {},
      });
    }

    return res.status(SuccessCodes.OK).json({
      data: updatedAirport,
      success: true,
      message: "Successfully updated the airport.",
      err: {},
    });
  } catch (error) {
    console.error(error);
    return res.status(ServerErrorCodes.INTERNAL_SERVER_ERROR).json({
      data: {},
      success: false,
      message: "Not able to update the airport.",
      err: error,
    });
  }
};

/**
 * Get all airports with optional filters
 */
const getAll = async (req, res) => {
  try {
    const airports = await airportService.getAllAirports(req.query);
    return res.status(SuccessCodes.OK).json({
      data: airports,
      success: true,
      message: "Successfully fetched all airports.",
      err: {},
    });
  } catch (error) {
    console.error(error);
    return res.status(ServerErrorCodes.INTERNAL_SERVER_ERROR).json({
      data: {},
      success: false,
      message: "Not able to fetch airports.",
      err: error,
    });
  }
};

module.exports = {
  create,
  destroy,
  get,
  update,
  getAll,
};
