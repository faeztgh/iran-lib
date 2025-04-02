type TBank = {
    prefix: string;
    bankName: string;
};

type TProvinceAndCity = {
    id: number;
    provinceName: string;
    englishName: string;
    capital: string;
    cities: string[];
};

interface IUseBankData {
    getBankByPrefix?: string;
    getPrefixByBankName?: string;
}
declare const useBank: (props: IUseBankData) => {
    data: TBank[];
    specificBankByPrefix: TBank | null;
    specificPrefixByBankName: TBank | null;
};

interface IUseNationalIdData {
    getCityByPrefix?: string;
    getPrefixByCity?: string;
}
declare const useNationalId: (props: IUseNationalIdData) => {
    data: {
        province: string;
        cities: {
            prefix: string;
            city: string;
        }[];
    }[];
    specificCityByPrefix: null;
    specificPrefixByCity: null;
};

interface IUseIranProvincesAndCities {
    getCitiesByProvinceName?: string;
    getProvinceByCityName?: string;
}
declare const useIranProvincesAndCities: (props: IUseIranProvincesAndCities) => {
    data: TProvinceAndCity[];
    specificProvinceCities: TProvinceAndCity[] | null;
    specificCityOfProvince: TProvinceAndCity[] | null;
};

export { useBank, useIranProvincesAndCities, useNationalId };
