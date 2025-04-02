interface IUseNationalIdData {
    getCityByPrefix?: string;
    getPrefixByCity?: string;
}
declare const useNationalId: (props: IUseNationalIdData) => {
    data: any;
    specificCityByPrefix: null;
    specificPrefixByCity: null;
};
export default useNationalId;
//# sourceMappingURL=useNationalId.d.ts.map