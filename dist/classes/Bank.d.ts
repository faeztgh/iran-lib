import { TBank } from "../types/bank";
declare class Banks {
    private banks;
    constructor(banks: TBank[]);
    getBanks(): TBank[];
    getBankByPrefix(prefix: string): TBank | undefined;
    getPrefixByBankName(bankName: string): string | undefined;
}
declare const banksInstance: Banks;
export default banksInstance;
//# sourceMappingURL=Bank.d.ts.map