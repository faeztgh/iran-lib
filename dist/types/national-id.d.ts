export interface ICity {
    prefix: string;
    city: string;
}
export interface IProvince {
    province: string;
    cities: ICity[];
}
