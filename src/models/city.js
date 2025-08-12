"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class City extends Model {
    /**
     * Define associations for the City model.
     * Called automatically by models/index.js.
     */
    static associate(models) {
      this.hasMany(models.Airport, {
        foreignKey: "cityId",
      });
    }
  }

  City.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "City",
      tableName: "Cities",  
      timestamps: true,  
    }
  );

  return City;
};
