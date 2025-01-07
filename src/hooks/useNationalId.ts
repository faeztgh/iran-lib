import nationalIdData from "../data/national-id";

interface IUseNationalIdData {
    getCityByPrefix?: string;
    getPrefixByCity?: string;
}

const useNationalId = (props: IUseNationalIdData) => {
    const { getCityByPrefix, getPrefixByCity } = props;

    let specificCityByPrefix, specificPrefixByCity;

    if (getCityByPrefix) {
        nationalIdData.some((province) => {
            specificCityByPrefix = province.cities.find(
                (city) => city.prefix === getCityByPrefix
            );
            return specificCityByPrefix;
        });
    }

    if (getPrefixByCity) {
        nationalIdData.some((province) => {
            specificPrefixByCity = province.cities.find(
                (city) => city.city === getPrefixByCity
            );
            return specificPrefixByCity;
        });
    }

    return {
        data: nationalIdData,
        specificCityByPrefix: specificCityByPrefix ?? null,
        specificPrefixByCity: specificPrefixByCity ?? null,
    };
};

export default useNationalId;
