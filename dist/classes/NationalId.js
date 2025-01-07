import nationalIdData from "../data/national-id";
var NationalId = /** @class */ (function () {
    function NationalId(nationalIdData) {
        this.nationalIdData = nationalIdData;
    }
    // Method to get all provinces
    NationalId.prototype.getProvinces = function () {
        return this.nationalIdData;
    };
    // Method to find a city by its prefix
    NationalId.prototype.getCityByPrefix = function (prefix) {
        for (var _i = 0, _a = this.nationalIdData; _i < _a.length; _i++) {
            var province = _a[_i];
            var city = province.cities.find(function (city) { return city.prefix === prefix; });
            if (city)
                return city;
        }
        return undefined;
    };
    // Method to find a prefix by city name
    NationalId.prototype.getPrefixByCity = function (cityName) {
        for (var _i = 0, _a = this.nationalIdData; _i < _a.length; _i++) {
            var province = _a[_i];
            var city = province.cities.find(function (city) { return city.city === cityName; });
            if (city)
                return city.prefix;
        }
        return undefined;
    };
    return NationalId;
}());
var nationalIdInstance = new NationalId(nationalIdData);
export default nationalIdInstance;
