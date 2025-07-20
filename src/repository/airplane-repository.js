const { Airplane } = require("../models");

class AirplaneRepository {
  async createAirplane(data) {
    try {
      const airplane = await Airplane.create(data);
      return airplane;
    } catch (error) {
      console.log("Error in creating airplane", error);
      throw { error };
    }
  }

  async deleteAirplane(id) {
    try {
      await Airplane.destroy({ where: { id } });
      return true;
    } catch (error) {
      console.log("Error in deleting airplane", error);
      throw { error };
    }
  }

  async updateAirplane(id, data) {
    try {
      const airplane = await Airplane.findByPk(id);
      if (!airplane) return null;

      if (data.modelNumber !== undefined) airplane.modelNumber = data.modelNumber;
      if (data.capacity !== undefined) airplane.capacity = data.capacity;

      await airplane.save();
      return airplane;
    } catch (error) {
      console.log("Error in updating airplane", error);
      throw { error };
    }
  }

  async getAirplane(id) {
    try {
      return await Airplane.findByPk(id);
    } catch (error) {
      console.log("Error in fetching airplane", error);
      throw { error };
    }
  }

  async getAllAirplanes() {
    try {
      return await Airplane.findAll();
    } catch (error) {
      console.log("Error in fetching all airplanes", error);
      throw { error };
    }
  }
}

module.exports = AirplaneRepository;
