const { Op } = require("sequelize");
const { Airport } = require("../models/index");

class AirportRepository {
  async createAirport({ name, address, cityId }) {
    try {
      const airport = await Airport.create({ name, address, cityId });
      return airport;
    } catch (error) {
      console.log("Error in creating airport", error);
      throw { error };
    }
  }

  async deleteAirport(airportId) {
    try {
      await Airport.destroy({
        where: {
          id: airportId,
        },
      });
      return true;
    } catch (error) {
      console.log("Error in deleting airport", error);
      throw { error };
    }
  }

  async updateAirport(airportId, data) {
    try {
      const airport = await Airport.findByPk(airportId);

      if (!airport) {
        return null;
      }

      // Update fields if they exist in `data`
      if (data.name !== undefined) airport.name = data.name;
      if (data.address !== undefined) airport.address = data.address;
      if (data.cityId !== undefined) airport.cityId = data.cityId;

      await airport.save();
      return airport;
    } catch (error) {
      console.log("Error in updating airport", error);
      throw { error };
    }
  }

  async getAirport(airportId) {
    try {
      const airport = await Airport.findByPk(airportId);
      return airport;
    } catch (error) {
      console.log("Error in getting airport", error);
      throw { error };
    }
  }

  async getAllAirports(filter) {
    try {
      let condition = {};

      if (filter) {
        if (filter.name) {
          condition.name = {
            [Op.startsWith]: filter.name,
          };
        }
        if (filter.cityId) {
          condition.cityId = filter.cityId;
        }
      }

      const airports = await Airport.findAll({
        where: condition,
      });

      return airports;
    } catch (error) {
      console.log("Error in getting all airports", error);
      throw { error };
    }
  }
}

module.exports = AirportRepository;
