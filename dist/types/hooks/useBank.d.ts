interface IUseBankData {
    getBankByPrefix?: string;
    getPrefixByBankName?: string;
}
declare const useBank: (props: IUseBankData) => {
    data: import("../types/bank").TBank[];
    specificBankByPrefix: import("../types/bank").TBank | null;
    specificPrefixByBankName: import("../types/bank").TBank | null;
};
export default useBank;
