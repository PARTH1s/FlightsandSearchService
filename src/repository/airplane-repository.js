const { Airplane } = require("../models");

class AirplaneRepository {
  // Create a new airplane
  async createAirplane(data) {
    try {
      return await Airplane.create(data);
    } catch (error) {
      console.error("Error creating airplane:", error);
      throw error;
    }
  }

  // Delete airplane by ID
  async deleteAirplane(id) {
    try {
      const deletedCount = await Airplane.destroy({ where: { id } });
      return deletedCount > 0;
    } catch (error) {
      console.error("Error deleting airplane:", error);
      throw error;
    }
  }

  // Update airplane details
  async updateAirplane(id, data) {
    try {
      const airplane = await Airplane.findByPk(id);
      if (!airplane) return null;

      if (data.modelNumber !== undefined) airplane.modelNumber = data.modelNumber;
      if (data.capacity !== undefined) airplane.capacity = data.capacity;

      await airplane.save();
      return airplane;
    } catch (error) {
      console.error("Error updating airplane:", error);
      throw error;
    }
  }

  // Get airplane by ID
  async getAirplane(id) {
    try {
      return await Airplane.findByPk(id);
    } catch (error) {
      console.error("Error fetching airplane:", error);
      throw error;
    }
  }

  // Get all airplanes
  async getAllAirplanes() {
    try {
      return await Airplane.findAll();
    } catch (error) {
      console.error("Error fetching airplanes:", error);
      throw error;
    }
  }
}

module.exports = AirplaneRepository;
