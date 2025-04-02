interface IUseIranProvincesAndCities {
    getCitiesByProvinceName?: string;
    getProvinceByCityName?: string;
}
declare const useIranProvincesAndCities: (props: IUseIranProvincesAndCities) => {
    data: any;
    specificProvinceCities: any;
    specificCityOfProvince: any;
};
export default useIranProvincesAndCities;
//# sourceMappingURL=useIranProvincesAndCities.d.ts.map