import iranProvincesAndCities from "../data/province-and-cities";
var Provinces = /** @class */ (function () {
    function Provinces(provinces) {
        this.provinces = provinces;
    }
    // Method to get all provinces
    Provinces.prototype.getProvinces = function () {
        return this.provinces;
    };
    // Method to find a province by its ID
    Provinces.prototype.getProvinceById = function (id) {
        return this.provinces.find(function (province) { return province.id === id; });
    };
    // Method to get cities of a specific province
    Provinces.prototype.getCitiesByProvince = function (provinceName) {
        var province = this.provinces.find(function (p) { return p.provinceName === provinceName; });
        return province ? province.cities : undefined;
    };
    Provinces.prototype.getProvinceByCityName = function (cityName) {
        var province = this.provinces.find(function (province) {
            return province.cities.includes(cityName);
        });
        return province;
    };
    return Provinces;
}());
var provincesInstance = new Provinces(iranProvincesAndCities);
export default provincesInstance;
