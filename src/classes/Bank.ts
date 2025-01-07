import bankData from "../data/bank";
import { TBank } from "../types/bank";

class Banks {
    private banks: TBank[];

    constructor(banks: TBank[]) {
        this.banks = banks;
    }

    // Method to get all banks
    getBanks(): TBank[] {
        return this.banks;
    }

    // Method to find a bank by its prefix
    getBankByPrefix(prefix: string): TBank | undefined {
        return this.banks.find((bank) => bank.prefix === prefix);
    }

    // Method to find a prefix by the bank name
    getPrefixByBankName(bankName: string): string | undefined {
        const bank = this.banks.find((bank) => bank.bankName === bankName);
        return bank ? bank.prefix : undefined;
    }
}

const banksInstance = new Banks(bankData);

export default banksInstance;
