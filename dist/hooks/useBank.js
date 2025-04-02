import bankData from "../data/bank";
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
        specificBankByPrefix: specificBankByPrefix ?? null,
        specificPrefixByBankName: specificPrefixByBankName ?? null,
    };
};
export default useBank;
