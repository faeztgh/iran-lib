import provinceAndCitiesData from "../data/province-and-cities/index.js";
const useIranProvincesAndCities = (props) => {
    const { getCitiesByProvinceName, getProvinceByCityName } = props;
    let specificProvinceCities, specificCityOfProvince;
    if (getCitiesByProvinceName) {
        specificProvinceCities = provinceAndCitiesData.filter((provinceAndCity) => provinceAndCity.provinceName === getCitiesByProvinceName);
    }
    if (getProvinceByCityName) {
        specificCityOfProvince = provinceAndCitiesData.filter((provinceAndCity) => provinceAndCity.cities.includes(getProvinceByCityName));
    }
    return {
        data: provinceAndCitiesData,
        specificProvinceCities: specificProvinceCities !== null && specificProvinceCities !== void 0 ? specificProvinceCities : null,
        specificCityOfProvince: specificCityOfProvince !== null && specificCityOfProvince !== void 0 ? specificCityOfProvince : null,
    };
};
export default useIranProvincesAndCities;
