import { TProvinceAndCity } from "../data/province-and-cities";
declare class Provinces {
    private provinces;
    constructor(provinces: TProvinceAndCity[]);
    getProvinces(): TProvinceAndCity[];
    getProvinceById(id: number): TProvinceAndCity | undefined;
    getCitiesByProvince(provinceName: string): string[] | undefined;
    getProvinceByCityName(cityName: string): TProvinceAndCity | undefined;
}
declare const provincesInstance: Provinces;
export default provincesInstance;
