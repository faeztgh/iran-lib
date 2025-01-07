interface IUseIranProvincesAndCities {
    getCitiesByProvinceName?: string;
    getProvinceByCityName?: string;
}
declare const useIranProvincesAndCities: (props: IUseIranProvincesAndCities) => {
    data: import("../data/province-and-cities").TProvinceAndCity[];
    specificProvinceCities: import("../data/province-and-cities").TProvinceAndCity[] | null;
    specificCityOfProvince: import("../data/province-and-cities").TProvinceAndCity[] | null;
};
export default useIranProvincesAndCities;
