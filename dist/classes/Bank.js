import bankData from "../data/bank";
class Banks {
    banks;
    constructor(banks) {
        this.banks = banks;
    }
    // Method to get all banks
    getBanks() {
        return this.banks;
    }
    // Method to find a bank by its prefix
    getBankByPrefix(prefix) {
        return this.banks.find((bank) => bank.prefix === prefix);
    }
    // Method to find a prefix by the bank name
    getPrefixByBankName(bankName) {
        const bank = this.banks.find((bank) => bank.bankName === bankName);
        return bank ? bank.prefix : undefined;
    }
}
const banksInstance = new Banks(bankData);
export default banksInstance;
