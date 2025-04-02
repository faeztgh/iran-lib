"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const national_id_1 = __importDefault(require("../data/national-id"));
class NationalId {
    constructor(nationalIdData) {
        this.nationalIdData = nationalIdData;
    }
    // Method to get all provinces
    getProvinces() {
        return this.nationalIdData;
    }
    // Method to find a city by its prefix
    getCityByPrefix(prefix) {
        for (const province of this.nationalIdData) {
            const city = province.cities.find((city) => city.prefix === prefix);
            if (city)
                return city;
        }
        return undefined;
    }
    // Method to find a prefix by city name
    getPrefixByCity(cityName) {
        for (const province of this.nationalIdData) {
            const city = province.cities.find((city) => city.city === cityName);
            if (city)
                return city.prefix;
        }
        return undefined;
    }
}
const nationalIdInstance = new NationalId(national_id_1.default);
exports.default = nationalIdInstance;
