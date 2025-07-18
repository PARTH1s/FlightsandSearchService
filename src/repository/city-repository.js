const { where } = require('sequelize');
const {City} = require('../models/index');

class CityRepository {
    async createCity({name}){
        try {
            const city=await City.create({name});
            return city;
        } catch (error) {
            console.log("Error in creating city",error);
            throw {error}
        }
    }

    async deleteCity(cityId){
        try {
            await City.destroy({
                where:{
                    id:cityId
                }
            })
        } catch (error) {
            console.log("Error in deleting city",error);
            throw {error}
        }
    }
}

module.exports=CityRepository;