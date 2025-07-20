const { where, Op } = require("sequelize");
const { City,Airport } = require("../models/index");

class CityRepository {
  async createCity({ name }) {
    try {
      const city = await City.create({ name });
      return city;
    } catch (error) {
      console.log("Error in creating city", error);
      throw { error };
    }
  }

  async deleteCity(cityId) {
    try {
      await City.destroy({
        where: {
          id: cityId,
        },
      });
      return true;
    } catch (error) {
      console.log("Error in deleting city", error);
      throw { error };
    }
  }

  async updateCity(cityId, data) {
    try {
      // This below approach works but will not return updated Object.
      // If we are using pg then returning true can be used, else not
      // const [updatedCount] = await City.update(data, {
      //     where: { id: cityId }
      // });

      // if (updatedCount === 0) {
      //     return null;
      // }

      // const updatedCity = await City.findByPk(cityId);
      // return updatedCity;
      // for getting updated data in mysql we use below approach
      const city = await City.findByPk(cityId);
      city.name = data.name;
      await city.save();
      return city;
    } catch (error) {
      throw { error };
    }
  }

  async getCity(cityId) {
    try {
      const city = await City.findByPk(cityId);
      return city;
    } catch (error) {
      console.log("Error in getting city", error);
      throw { error };
    }
  }

  // async getAllCities() {
  //     try {
  //         const cities = await City.findAll();
  //         return cities;
  //     } catch (error) {
  //         console.log("Error in getting all cities:", error);
  //         throw { error };
  //     }
  // }
  async getAllCities(filter) {
    try {
      let cities;

      if (filter && filter.name) {
        cities = await City.findAll({
          where: {
            name: {
              [Op.startsWith]: filter.name,
            },
          },
        });
      } else {
        cities = await City.findAll();
      }

      return cities;
    } catch (error) {
      console.log("Error in getting all cities:", error);
      throw { error };
    }
  }

  async getAirportsByCity(cityId) {
    try {
      const airports = await Airport.findAll({
        where: { cityId: cityId },
      });
      return airports;
    } catch (error) {
      console.log("Error in fetching airports for city", error);
      throw { error };
    }
  }
}

module.exports = CityRepository;
