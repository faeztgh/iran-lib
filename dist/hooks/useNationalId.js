import nationalIdData from "../data/national-id";
var useNationalId = function (props) {
    var getCityByPrefix = props.getCityByPrefix, getPrefixByCity = props.getPrefixByCity;
    var specificCityByPrefix, specificPrefixByCity;
    if (getCityByPrefix) {
        nationalIdData.some(function (province) {
            specificCityByPrefix = province.cities.find(function (city) { return city.prefix === getCityByPrefix; });
            return specificCityByPrefix;
        });
    }
    if (getPrefixByCity) {
        nationalIdData.some(function (province) {
            specificPrefixByCity = province.cities.find(function (city) { return city.city === getPrefixByCity; });
            return specificPrefixByCity;
        });
    }
    return {
        data: nationalIdData,
        specificCityByPrefix: specificCityByPrefix !== null && specificCityByPrefix !== void 0 ? specificCityByPrefix : null,
        specificPrefixByCity: specificPrefixByCity !== null && specificPrefixByCity !== void 0 ? specificPrefixByCity : null,
    };
};
export default useNationalId;
