const { SuccessCodes, ServerErrorCodes, ClientErrorCodes } = require("../utils/error-codes")

const { AirplaneService } = require("../services");

const airplaneService = new AirplaneService();

const create = async (req, res) => {
  try {
    const airplane = await airplaneService.createAirplane(req.body);
    return res.status(SuccessCodes.CREATED).json({
      data: airplane,
      success: true,
      message: "Airplane created successfully",
      err: {},
    });
  } catch (error) {
    return res.status(ServerErrorCodes.INTERNAL_SERVER_ERROR).json({
      data: {},
      success: false,
      message: "Failed to create airplane",
      err: error,
    });
  }
};

const destroy = async (req, res) => {
  try {
    const result = await airplaneService.deleteAirplane(req.params.id);
    return res.status(SuccessCodes.OK).json({
      data: result,
      success: true,
      message: "Airplane deleted successfully",
      err: {},
    });
  } catch (error) {
    return res.status(ServerErrorCodes.INTERNAL_SERVER_ERROR).json({
      data: {},
      success: false,
      message: "Failed to delete airplane",
      err: error,
    });
  }
};

const update = async (req, res) => {
  try {
    const airplane = await airplaneService.updateAirplane(req.params.id, req.body);
    if (!airplane) {
      return res.status(ClientErrorCodes.BAD_REQUEST).json({
        data: {},
        success: false,
        message: "Airplane not found",
        err: {},
      });
    }
    return res.status(SuccessCodes.OK).json({
      data: airplane,
      success: true,
      message: "Airplane updated successfully",
      err: {},
    });
  } catch (error) {
    return res.status(ServerErrorCodes.INTERNAL_SERVER_ERROR).json({
      data: {},
      success: false,
      message: "Failed to update airplane",
      err: error,
    });
  }
};

const get = async (req, res) => {
  try {
    const airplane = await airplaneService.getAirplane(req.params.id);
    return res.status(SuccessCodes.OK).json({
      data: airplane,
      success: true,
      message: "Airplane fetched successfully",
      err: {},
    });
  } catch (error) {
    return res.status(ServerErrorCodes.INTERNAL_SERVER_ERROR).json({
      data: {},
      success: false,
      message: "Failed to fetch airplane",
      err: error,
    });
  }
};

const getAll = async (req, res) => {
  try {
    const airplanes = await airplaneService.getAllAirplanes();
    return res.status(SuccessCodes.OK).json({
      data: airplanes,
      success: true,
      message: "All airplanes fetched successfully",
      err: {},
    });
  } catch (error) {
    return res.status(ServerErrorCodes.INTERNAL_SERVER_ERROR).json({
      data: {},
      success: false,
      message: "Failed to fetch airplanes",
      err: error,
    });
  }
};

module.exports = {
  create,
  destroy,
  update,
  get,
  getAll,
};
