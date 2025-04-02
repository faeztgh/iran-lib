interface IUseIranProvincesAndCities {
    getCitiesByProvinceName?: string;
    getProvinceByCityName?: string;
}
declare const useIranProvincesAndCities: (props: IUseIranProvincesAndCities) => {
    data: import("../types/province.js").TProvinceAndCity[];
    specificProvinceCities: import("../types/province.js").TProvinceAndCity[] | null;
    specificCityOfProvince: import("../types/province.js").TProvinceAndCity[] | null;
};
export default useIranProvincesAndCities;
