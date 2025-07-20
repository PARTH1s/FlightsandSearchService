const express = require('express');
const CityController = require('../../controllers/city-controller')
const AirportController = require('../../controllers/airport-controller');

const router = express.Router();

router.post('/city', CityController.create);
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

module.exports = router;