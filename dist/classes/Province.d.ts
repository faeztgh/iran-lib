import { TProvinceAndCity } from "../types/province";
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
//# sourceMappingURL=Province.d.ts.map