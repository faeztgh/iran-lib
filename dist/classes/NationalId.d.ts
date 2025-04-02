import { ICity, IProvince } from "../types/national-id";
declare class NationalId {
    private nationalIdData;
    constructor(nationalIdData: IProvince[]);
    getProvinces(): IProvince[];
    getCityByPrefix(prefix: string): ICity | undefined;
    getPrefixByCity(cityName: string): string | undefined;
}
declare const nationalIdInstance: NationalId;
export default nationalIdInstance;
//# sourceMappingURL=NationalId.d.ts.map