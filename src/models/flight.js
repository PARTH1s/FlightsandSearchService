'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Flight extends Model {
    /**
     * Define associations for the Flight model.
     * Called automatically by models/index.js.
     */
    static associate(models) {
      // Example associations:
      // Flight.belongsTo(models.Airplane, { foreignKey: 'airplaneId' });
      // Flight.belongsTo(models.Airport, { as: 'DepartureAirport', foreignKey: 'departureAirportId' });
      // Flight.belongsTo(models.Airport, { as: 'ArrivalAirport', foreignKey: 'arrivalAirportId' });
    }
  }

  Flight.init(
    {
      flightNumber: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      airplaneId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      departureAirportId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      arrivalAirportId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      arrivalTime: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      departureTime: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      price: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      boardingGate: {
        type: DataTypes.STRING,
      },
      totalSeats: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'Flight',
      tableName: 'Flights',
      timestamps: true,
    }
  );

  return Flight;
};
