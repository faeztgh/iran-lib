import provinceAndCitiesData from "../data/province-and-cities";
var useIranProvincesAndCities = function (props) {
    var getCitiesByProvinceName = props.getCitiesByProvinceName, getProvinceByCityName = props.getProvinceByCityName;
    var specificProvinceCities, specificCityOfProvince;
    if (getCitiesByProvinceName) {
        specificProvinceCities = provinceAndCitiesData.filter(function (provinceAndCity) {
            return provinceAndCity.provinceName === getCitiesByProvinceName;
        });
    }
    if (getProvinceByCityName) {
        specificCityOfProvince = provinceAndCitiesData.filter(function (provinceAndCity) {
            return provinceAndCity.cities.includes(getProvinceByCityName);
        });
    }
    return {
        data: provinceAndCitiesData,
        specificProvinceCities: specificProvinceCities !== null && specificProvinceCities !== void 0 ? specificProvinceCities : null,
        specificCityOfProvince: specificCityOfProvince !== null && specificCityOfProvince !== void 0 ? specificCityOfProvince : null,
    };
};
export default useIranProvincesAndCities;
