import provinceAndCitiesData from "../data/province-and-cities/index.js";

interface IUseIranProvincesAndCities {
    getCitiesByProvinceName?: string;
    getProvinceByCityName?: string;
}
const useIranProvincesAndCities = (props: IUseIranProvincesAndCities) => {
    const { getCitiesByProvinceName, getProvinceByCityName } = props;
    let specificProvinceCities, specificCityOfProvince;
    if (getCitiesByProvinceName) {
        specificProvinceCities = provinceAndCitiesData.filter(
            (provinceAndCity: { provinceName: string }) =>
                provinceAndCity.provinceName === getCitiesByProvinceName
        );
    }
    if (getProvinceByCityName) {
        specificCityOfProvince = provinceAndCitiesData.filter(
            (provinceAndCity: { cities: string[] }) =>
                provinceAndCity.cities.includes(getProvinceByCityName)
        );
    }
    return {
        data: provinceAndCitiesData,
        specificProvinceCities: specificProvinceCities ?? null,
        specificCityOfProvince: specificCityOfProvince ?? null,
    };
};

export default useIranProvincesAndCities;
