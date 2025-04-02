import provinceAndCitiesData from "../data/province-and-cities";
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
        specificProvinceCities: specificProvinceCities ?? null,
        specificCityOfProvince: specificCityOfProvince ?? null,
    };
};
export default useIranProvincesAndCities;
