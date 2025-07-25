const express = require('express');
const { FlightMiddlewares } = require('../../middlewares/index')
const CityController = require('../../controllers/city-controller')
const AirportController = require('../../controllers/airport-controller');
const AirplaneController = require('../../controllers/airport-controller');
const FlightController = require('../../controllers/flight-controller');

const router = express.Router();
/**
 * @swagger
 * tags:
 *   - name: City
 *     description: City management APIs
 *   - name: Airport
 *     description: Airport management APIs
 *   - name: Airplane
 *     description: Airplane management APIs
 */
router.post('/city', CityController.create);

// router.post('/city', CityController.create);
router.delete('/city/:id', CityController.destroy);
router.patch('/city/:id', CityController.update);
router.get('/city/:id', CityController.get);
router.get('/city', CityController.getall);
router.get('/city/:id/airports', CityController.getAirportsByCity);

router.post('/airport', AirportController.create);
router.delete('/airport/:id', AirportController.destroy);
router.patch('/airport/:id', AirportController.update);
router.get('/airport/:id', AirportController.get);
router.get('/airport', AirportController.getAll);

router.post("/airplane", AirplaneController.create);
router.delete("/airplane/:id", AirplaneController.destroy);
router.patch("/airplane/:id", AirplaneController.update);
router.get("/airplane/:id", AirplaneController.get);
router.get("/airplane", AirplaneController.getAll);

router.post('/flights', FlightMiddlewares.validatecreateFlight, FlightController.create);
router.get("/flights/:id", FlightController.get);
router.get("/flights", FlightController.getall);


module.exports = router;