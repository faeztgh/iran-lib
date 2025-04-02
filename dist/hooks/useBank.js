"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("../data/bank/index"));
const useBank = (props) => {
    const { getBankByPrefix, getPrefixByBankName } = props;
    let specificBankByPrefix, specificPrefixByBankName;
    if (getBankByPrefix) {
        specificBankByPrefix = index_1.default.find((bank) => bank.prefix === getBankByPrefix);
    }
    if (getPrefixByBankName) {
        specificPrefixByBankName = index_1.default.find((bank) => bank.bankName === getPrefixByBankName);
    }
    return {
        data: index_1.default,
        specificBankByPrefix: specificBankByPrefix !== null && specificBankByPrefix !== void 0 ? specificBankByPrefix : null,
        specificPrefixByBankName: specificPrefixByBankName !== null && specificPrefixByBankName !== void 0 ? specificPrefixByBankName : null,
    };
};
exports.default = useBank;
