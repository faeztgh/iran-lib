import nationalIdData from "../data/national-id";
import { ICity, IProvince } from "../types/national-id";

class NationalId {
    private nationalIdData: IProvince[];

    constructor(nationalIdData: IProvince[]) {
        this.nationalIdData = nationalIdData;
    }

    // Method to get all provinces
    getProvinces(): IProvince[] {
        return this.nationalIdData;
    }

    // Method to find a city by its prefix
    getCityByPrefix(prefix: string): ICity | undefined {
        for (const province of this.nationalIdData) {
            const city = province.cities.find((city) => city.prefix === prefix);
            if (city) return city;
        }
        return undefined;
    }

    // Method to find a prefix by city name
    getPrefixByCity(cityName: string): string | undefined {
        for (const province of this.nationalIdData) {
            const city = province.cities.find((city) => city.city === cityName);
            if (city) return city.prefix;
        }
        return undefined;
    }
}

const nationalIdInstance = new NationalId(nationalIdData);

export default nationalIdInstance;
