'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Airplane extends Model {
    /**
     * Define model associations here.
     * Called automatically by models/index.js.
     */
    static associate(models) {
      // Example: Airplane.hasMany(models.Flight);
    }
  }

  Airplane.init(
    {
      modelNumber: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      capacity: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 200,
      },
    },
    {
      sequelize,
      modelName: 'Airplane',
      tableName: 'Airplanes',  
      timestamps: true,        
    }
  );

  return Airplane;
};
