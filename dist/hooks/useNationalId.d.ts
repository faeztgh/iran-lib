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
export default useNationalId;
