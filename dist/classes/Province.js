"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const province_and_cities_1 = __importDefault(require("../data/province-and-cities"));
class Provinces {
    constructor(provinces) {
        this.provinces = provinces;
    }
    // Method to get all provinces
    getProvinces() {
        return this.provinces;
    }
    // Method to find a province by its ID
    getProvinceById(id) {
        return this.provinces.find((province) => province.id === id);
    }
    // Method to get cities of a specific province
    getCitiesByProvince(provinceName) {
        const province = this.provinces.find((p) => p.provinceName === provinceName);
        return province ? province.cities : undefined;
    }
    getProvinceByCityName(cityName) {
        const province = this.provinces.find((province) => province.cities.includes(cityName));
        return province;
    }
}
const provincesInstance = new Provinces(province_and_cities_1.default);
exports.default = provincesInstance;
