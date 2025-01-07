interface IUseIranProvincesAndCities {
    getCitiesByProvinceName?: string;
    getProvinceByCityName?: string;
}
declare const useIranProvincesAndCities: (props: IUseIranProvincesAndCities) => {
    data: import("../types/province").TProvinceAndCity[];
    specificProvinceCities: import("../types/province").TProvinceAndCity[] | null;
    specificCityOfProvince: import("../types/province").TProvinceAndCity[] | null;
};
export default useIranProvincesAndCities;
