const { City } = require('../models/index');

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
                    id: cityId
                }
            })
        } catch (error) {
            console.log("Error in deleting city", error);
            throw { error };
        }
    }

    async updateCity(cityId, data) {
        try {
            const city = await City.update(data, {
                where: {
                    id: cityId
                }
            })
            return city;
        } catch (error) {
            console.log("Error in deleting city", error);
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

    async getAllCities() {
        try {
            const cities = await City.findAll();
            return cities;
        } catch (error) {
            console.log("Error in getting all cities:", error);
            throw { error };
        }
    }
}

module.exports = CityRepository;