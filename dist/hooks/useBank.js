import bankData from "../data/bank/index";
const useBank = (props) => {
    const { getBankByPrefix, getPrefixByBankName } = props;
    let specificBankByPrefix, specificPrefixByBankName;
    if (getBankByPrefix) {
        specificBankByPrefix = bankData.find((bank) => bank.prefix === getBankByPrefix);
    }
    if (getPrefixByBankName) {
        specificPrefixByBankName = bankData.find((bank) => bank.bankName === getPrefixByBankName);
    }
    return {
        data: bankData,
        specificBankByPrefix: specificBankByPrefix !== null && specificBankByPrefix !== void 0 ? specificBankByPrefix : null,
        specificPrefixByBankName: specificPrefixByBankName !== null && specificPrefixByBankName !== void 0 ? specificPrefixByBankName : null,
    };
};
export default useBank;
