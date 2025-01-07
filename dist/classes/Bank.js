import bankData from "../data/bank";
var Banks = /** @class */ (function () {
    function Banks(banks) {
        this.banks = banks;
    }
    // Method to get all banks
    Banks.prototype.getBanks = function () {
        return this.banks;
    };
    // Method to find a bank by its prefix
    Banks.prototype.getBankByPrefix = function (prefix) {
        return this.banks.find(function (bank) { return bank.prefix === prefix; });
    };
    // Method to find a prefix by the bank name
    Banks.prototype.getPrefixByBankName = function (bankName) {
        var bank = this.banks.find(function (bank) { return bank.bankName === bankName; });
        return bank ? bank.prefix : undefined;
    };
    return Banks;
}());
var banksInstance = new Banks(bankData);
export default banksInstance;
