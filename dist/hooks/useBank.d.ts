interface IUseBankData {
    getBankByPrefix?: string;
    getPrefixByBankName?: string;
}
declare const useBank: (props: IUseBankData) => {
    data: any;
    specificBankByPrefix: any;
    specificPrefixByBankName: any;
};
export default useBank;
//# sourceMappingURL=useBank.d.ts.map