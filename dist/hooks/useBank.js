import bankData from "../data/bank";
var useBank = function (props) {
    var getBankByPrefix = props.getBankByPrefix, getPrefixByBankName = props.getPrefixByBankName;
    var specificBankByPrefix, specificPrefixByBankName;
    if (getBankByPrefix) {
        specificBankByPrefix = bankData.find(function (bank) { return bank.prefix === getBankByPrefix; });
    }
    if (getPrefixByBankName) {
        specificPrefixByBankName = bankData.find(function (bank) { return bank.bankName === getPrefixByBankName; });
    }
    return {
        data: bankData,
        specificBankByPrefix: specificBankByPrefix !== null && specificBankByPrefix !== void 0 ? specificBankByPrefix : null,
        specificPrefixByBankName: specificPrefixByBankName !== null && specificPrefixByBankName !== void 0 ? specificPrefixByBankName : null,
    };
};
export default useBank;
