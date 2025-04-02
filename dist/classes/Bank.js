"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bank_1 = __importDefault(require("../data/bank"));
class Banks {
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
const banksInstance = new Banks(bank_1.default);
exports.default = banksInstance;
