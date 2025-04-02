import nationalIdData from "../data/national-id";
class NationalId {
    constructor(nationalIdData) {
        this.nationalIdData = nationalIdData;
    }
    // Method to get all provinces
    getProvinces() {
        return this.nationalIdData;
    }
    // Method to find a city by its prefix
    getCityByPrefix(prefix) {
        for (const province of this.nationalIdData) {
            const city = province.cities.find((city) => city.prefix === prefix);
            if (city)
                return city;
        }
        return undefined;
    }
    // Method to find a prefix by city name
    getPrefixByCity(cityName) {
        for (const province of this.nationalIdData) {
            const city = province.cities.find((city) => city.city === cityName);
            if (city)
                return city.prefix;
        }
        return undefined;
    }
}
const nationalIdInstance = new NationalId(nationalIdData);
export default nationalIdInstance;
