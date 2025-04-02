import nationalIdData from "../data/national-id/index.js";
const useNationalId = (props) => {
    const { getCityByPrefix, getPrefixByCity } = props;
    let specificCityByPrefix, specificPrefixByCity;
    if (getCityByPrefix) {
        nationalIdData.some((province) => {
            specificCityByPrefix = province.cities.find((city) => city.prefix === getCityByPrefix);
            return specificCityByPrefix;
        });
    }
    if (getPrefixByCity) {
        nationalIdData.some((province) => {
            specificPrefixByCity = province.cities.find((city) => city.city === getPrefixByCity);
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
