"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_js_1 = __importDefault(require("../data/national-id/index.js"));
const useNationalId = (props) => {
    const { getCityByPrefix, getPrefixByCity } = props;
    let specificCityByPrefix, specificPrefixByCity;
    if (getCityByPrefix) {
        index_js_1.default.some((province) => {
            specificCityByPrefix = province.cities.find((city) => city.prefix === getCityByPrefix);
            return specificCityByPrefix;
        });
    }
    if (getPrefixByCity) {
        index_js_1.default.some((province) => {
            specificPrefixByCity = province.cities.find((city) => city.city === getPrefixByCity);
            return specificPrefixByCity;
        });
    }
    return {
        data: index_js_1.default,
        specificCityByPrefix: specificCityByPrefix !== null && specificCityByPrefix !== void 0 ? specificCityByPrefix : null,
        specificPrefixByCity: specificPrefixByCity !== null && specificPrefixByCity !== void 0 ? specificPrefixByCity : null,
    };
};
exports.default = useNationalId;
