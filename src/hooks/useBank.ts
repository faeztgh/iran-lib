import bankData from "../data/bank/index";

interface IUseBankData {
    getBankByPrefix?: string;
    getPrefixByBankName?: string;
}

const useBank = (props: IUseBankData) => {
    const { getBankByPrefix, getPrefixByBankName } = props;

    let specificBankByPrefix, specificPrefixByBankName;

    if (getBankByPrefix) {
        specificBankByPrefix = bankData.find(
            (bank: { prefix: string; }) => bank.prefix === getBankByPrefix
        );
    }

    if (getPrefixByBankName) {
        specificPrefixByBankName = bankData.find(
            (bank: { bankName: string; }) => bank.bankName === getPrefixByBankName
        );
    }

    return {
        data: bankData,
        specificBankByPrefix: specificBankByPrefix ?? null,
        specificPrefixByBankName: specificPrefixByBankName ?? null,
    };
};

export default useBank;
