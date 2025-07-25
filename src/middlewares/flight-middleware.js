const { ClientErrorCodes } = require("../utils/error-codes")


const validatecreateFlight = (req, res, next) => {
    if (!req.body.flightNumber ||
        !req.body.airplaneId ||
        !req.body.departureAirportId ||
        !req.body.arrivalAirportId ||
        !req.body.arrivalTime ||
        !req.body.departureTime ||
        !req.body.price
    ) {
        return res.status(ClientErrorCodes.BAD_REQUEST).json({
            data: {},
            success: false,
            message: 'Invalid reuqest body for create flight',
            err: 'Missing mandatory properties to create a flight'
        });
    }
    next();
}
module.exports = {
    validatecreateFlight
}
