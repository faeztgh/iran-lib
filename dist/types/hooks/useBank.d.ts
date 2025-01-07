interface IUseBankData {
    getBankByPrefix?: string;
    getPrefixByBankName?: string;
}
declare const useBank: (props: IUseBankData) => {
    data: import("../types/bank").TBank[];
    specificBankByPrefix: any;
    specificPrefixByBankName: any;
};
export default useBank;
