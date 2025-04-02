"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_js_1 = __importDefault(require("../data/province-and-cities/index.js"));
const useIranProvincesAndCities = (props) => {
    const { getCitiesByProvinceName, getProvinceByCityName } = props;
    let specificProvinceCities, specificCityOfProvince;
    if (getCitiesByProvinceName) {
        specificProvinceCities = index_js_1.default.filter((provinceAndCity) => provinceAndCity.provinceName === getCitiesByProvinceName);
    }
    if (getProvinceByCityName) {
        specificCityOfProvince = index_js_1.default.filter((provinceAndCity) => provinceAndCity.cities.includes(getProvinceByCityName));
    }
    return {
        data: index_js_1.default,
        specificProvinceCities: specificProvinceCities !== null && specificProvinceCities !== void 0 ? specificProvinceCities : null,
        specificCityOfProvince: specificCityOfProvince !== null && specificCityOfProvince !== void 0 ? specificCityOfProvince : null,
    };
};
exports.default = useIranProvincesAndCities;
