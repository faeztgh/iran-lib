import iranProvincesAndCities from "../data/province-and-cities";
import { TProvinceAndCity } from "../types/province";

class Provinces {
    private provinces: TProvinceAndCity[];

    constructor(provinces: TProvinceAndCity[]) {
        this.provinces = provinces;
    }

    // Method to get all provinces
    getProvinces(): TProvinceAndCity[] {
        return this.provinces;
    }

    // Method to find a province by its ID
    getProvinceById(id: number): TProvinceAndCity | undefined {
        return this.provinces.find((province) => province.id === id);
    }

    // Method to get cities of a specific province
    getCitiesByProvince(provinceName: string): string[] | undefined {
        const province = this.provinces.find(
            (p) => p.provinceName === provinceName
        );
        return province ? province.cities : undefined;
    }

    getProvinceByCityName(cityName: string): TProvinceAndCity | undefined {
        const province = this.provinces.find((province) =>
            province.cities.includes(cityName)
        );
        return province;
    }
}

const provincesInstance = new Provinces(iranProvincesAndCities);

export default provincesInstance;
