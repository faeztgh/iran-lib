"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  useBank: () => useBank_default,
  useIranProvincesAndCities: () => useIranProvincesAndCities_default,
  useNationalId: () => useNationalId_default
});
module.exports = __toCommonJS(index_exports);

// src/data/bank/index.ts
var bankData = [
  { prefix: "603799", bankName: "\u0645\u0644\u06CC " },
  { prefix: "603769", bankName: "\u0635\u0627\u062F\u0631\u0627\u062A" },
  { prefix: "610433", bankName: "\u0645\u0644\u062A" },
  { prefix: "585983", bankName: "\u062A\u062C\u0627\u0631\u062A" },
  { prefix: "589210", bankName: "\u0633\u067E\u0647" },
  { prefix: "603770", bankName: "\u06A9\u0634\u0627\u0648\u0631\u0632\u06CC" },
  { prefix: "628023", bankName: "\u0645\u0633\u06A9\u0646" },
  { prefix: "627648", bankName: "\u062A\u0648\u0633\u0639\u0647 \u0635\u0627\u062F\u0631\u0627\u062A \u0627\u06CC\u0631\u0627\u0646" },
  { prefix: "627961", bankName: "\u0635\u0646\u0639\u062A \u0648 \u0645\u0639\u062F\u0646" },
  { prefix: "627760", bankName: "\u067E\u0633\u062A\u200C\u0627\u06CC\u0631\u0627\u0646" },
  { prefix: "589463", bankName: "\u0631\u0641\u0627\u0647 \u06A9\u0627\u0631\u06AF\u0631\u0627\u0646" },
  { prefix: "502908", bankName: "\u062A\u0648\u0633\u0639\u0647 \u062A\u0639\u0627\u0648\u0646" },
  { prefix: "627412", bankName: "\u0627\u0642\u062A\u0635\u0627\u062F \u0646\u0648\u06CC\u0646" },
  { prefix: "622106", bankName: "\u067E\u0627\u0631\u0633\u06CC\u0627\u0646" },
  { prefix: "502229", bankName: "\u067E\u0627\u0633\u0627\u0631\u06AF\u0627\u062F" },
  { prefix: "621986", bankName: "\u0633\u0627\u0645\u0627\u0646" },
  { prefix: "639607", bankName: "\u0633\u0631\u0645\u0627\u06CC\u0647" },
  { prefix: "502938", bankName: "\u062F\u06CC" },
  { prefix: "504706", bankName: "\u0634\u0647\u0631" },
  { prefix: "639599", bankName: "\u0642\u0648\u0627\u0645\u06CC\u0646 (\u0645\u0644\u06CC)" },
  { prefix: "636949", bankName: "\u062D\u06A9\u0645\u062A \u0627\u06CC\u0631\u0627\u0646\u06CC\u0627\u0646" },
  { prefix: "606373", bankName: "\u0645\u0647\u0631 \u0627\u06CC\u0631\u0627\u0646" },
  { prefix: "627381", bankName: "\u0627\u0646\u0635\u0627\u0631" },
  { prefix: "505416", bankName: "\u06AF\u0631\u062F\u0634\u06AF\u0631\u06CC" },
  { prefix: "505785", bankName: "\u0627\u06CC\u0631\u0627\u0646 \u0632\u0645\u06CC\u0646" },
  { prefix: "636214", bankName: "\u0622\u06CC\u0646\u062F\u0647" },
  { prefix: "505809", bankName: "\u062E\u0627\u0648\u0631\u0645\u06CC\u0627\u0646\u0647" }
];
var bank_default = bankData;

// src/classes/Bank.ts
var Banks = class {
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
    const bank = this.banks.find((bank2) => bank2.bankName === bankName);
    return bank ? bank.prefix : void 0;
  }
};
var banksInstance = new Banks(bank_default);

// src/data/national-id/index.ts
var nationalIdData = [
  {
    province: "\u0622\u0630\u0631\u0628\u0627\u06CC\u062C\u0627\u0646 \u0634\u0631\u0642\u06CC",
    cities: [
      {
        prefix: "169",
        city: "\u0622\u0630\u0631\u0634\u0647\u0631"
      },
      {
        prefix: "170",
        city: "\u0627\u0633\u06A9\u0648"
      },
      {
        prefix: "149-150",
        city: "\u0627\u0647\u0631"
      },
      {
        prefix: "171",
        city: "\u0628\u0633\u062A\u0627\u0646 \u0622\u0628\u0627\u062F"
      },
      {
        prefix: "168",
        city: "\u0628\u0646\u0627\u0628"
      },
      {
        prefix: "136-137-138",
        city: "\u062A\u0628\u0631\u06CC\u0632"
      },
      {
        prefix: "545",
        city: "\u062A\u0631\u06A9\u0645\u0627\u0646\u0686\u0627\u06CC"
      },
      {
        prefix: "505",
        city: "\u062C\u0644\u0641\u0627"
      },
      {
        prefix: "636",
        city: "\u0686\u0627\u0631\u0648\u0627\u06CC\u0645\u0627\u0642"
      },
      {
        prefix: "164-165",
        city: "\u0633\u0631\u0627\u0628"
      },
      {
        prefix: "172",
        city: "\u0634\u0628\u0633\u062A\u0631"
      },
      {
        prefix: "623",
        city: "\u0635\u0648\u0641\u06CC\u0627\u0646"
      },
      {
        prefix: "506",
        city: "\u0639\u062C\u0628 \u0634\u06CC\u0631"
      },
      {
        prefix: "519",
        city: "\u06A9\u0644\u06CC\u0628\u0631"
      },
      {
        prefix: "154-155",
        city: "\u0645\u0631\u0627\u063A\u0647"
      },
      {
        prefix: "567",
        city: "\u0648\u0631\u0632\u0642\u0627\u0646"
      },
      {
        prefix: "173",
        city: "\u0647\u0631\u06CC\u0633"
      },
      {
        prefix: "159-160",
        city: "\u0647\u0634\u062A\u0631\u0648\u062F"
      },
      {
        prefix: "604",
        city: "\u0647\u0648\u0631\u0627\u0646\u062F"
      }
    ]
  },
  {
    province: "\u0622\u0630\u0631\u0628\u0627\u06CC\u062C\u0627\u0646 \u063A\u0631\u0628\u06CC",
    cities: [
      {
        prefix: "274-275",
        city: "\u0627\u0631\u0648\u0645\u06CC\u0647"
      },
      {
        prefix: "295",
        city: "\u0627\u0634\u0646\u0648\u06CC\u0647"
      },
      {
        prefix: "637",
        city: "\u0627\u0646\u0632\u0644"
      },
      {
        prefix: "292",
        city: "\u0628\u0648\u06A9\u0627\u0646"
      },
      {
        prefix: "492",
        city: "\u067E\u0644\u062F\u0634\u062A"
      },
      {
        prefix: "289",
        city: "\u067E\u06CC\u0631\u0627\u0646\u0634\u0647\u0631"
      },
      {
        prefix: "677",
        city: "\u062A\u062E\u062A \u0633\u0644\u06CC\u0645\u0627\u0646"
      },
      {
        prefix: "294",
        city: "\u062A\u06A9\u0627\u0628"
      },
      {
        prefix: "493",
        city: "\u0686\u0627\u06CC\u067E\u0627\u0631\u0647"
      },
      {
        prefix: "279-280",
        city: "\u062E\u0648\u06CC"
      },
      {
        prefix: "288",
        city: "\u0633\u0631\u062F\u0634\u062A"
      },
      {
        prefix: "284-285",
        city: "\u0633\u0644\u0645\u0627\u0633"
      },
      {
        prefix: "638",
        city: "\u0633\u06CC\u0644\u0648\u0627\u0646\u0647"
      },
      {
        prefix: "291",
        city: "\u0633\u06CC\u0647 \u0686\u0634\u0645\u0647(\u0686\u0627\u0644\u062F\u0631\u0627\u0646)"
      },
      {
        prefix: "640",
        city: "\u0634\u0648\u0637"
      },
      {
        prefix: "293",
        city: "\u0634\u0627\u0647\u06CC\u0646 \u062F\u0698"
      },
      {
        prefix: "675",
        city: "\u06A9\u0634\u0627\u0648\u0631\u0632"
      },
      {
        prefix: "282-283",
        city: "\u0645\u0627\u06A9\u0648"
      },
      {
        prefix: "286-287",
        city: "\u0645\u0647\u0627\u0628\u0627\u062F"
      },
      {
        prefix: "296-297",
        city: "\u0645\u06CC\u0627\u0646\u062F\u0648\u0622\u0628"
      },
      {
        prefix: "290",
        city: "\u0646\u0642\u062F\u0647"
      }
    ]
  },
  {
    province: "\u0647\u0645\u062F\u0627\u0646",
    cities: [
      {
        prefix: "400-401",
        city: "\u0627\u0633\u062F\u0622\u0628\u0627\u062F"
      },
      {
        prefix: "404-405",
        city: "\u0628\u0647\u0627\u0631"
      },
      {
        prefix: "397",
        city: "\u062A\u0648\u06CC\u0633\u0631\u06A9\u0627\u0646"
      },
      {
        prefix: "398-399",
        city: "\u0631\u0632\u0646"
      },
      {
        prefix: "647",
        city: "\u0634\u0631\u0627\u0621 \u0648 \u067E\u06CC\u0634\u062E\u0648\u0627\u0631"
      },
      {
        prefix: "502",
        city: "\u0641\u0627\u0645\u0646\u06CC\u0646"
      },
      {
        prefix: "584",
        city: "\u0642\u0644\u0642\u0644 \u0631\u0648\u062F"
      },
      {
        prefix: "402-403",
        city: "\u06A9\u0628\u0648\u062F\u0631\u0622\u0647\u0646\u06AF"
      },
      {
        prefix: "392-393",
        city: "\u0645\u0644\u0627\u06CC\u0631"
      },
      {
        prefix: "395-396",
        city: "\u0646\u0647\u0627\u0648\u0646\u062F"
      },
      {
        prefix: "386-387",
        city: "\u0647\u0645\u062F\u0627\u0646"
      }
    ]
  },
  {
    province: "\u06CC\u0632\u062F",
    cities: [
      {
        prefix: "503",
        city: "\u0627\u0628\u0631\u06A9\u0648\u0647"
      },
      {
        prefix: "444",
        city: "\u0627\u0631\u062F\u06A9\u0627\u0646"
      },
      {
        prefix: "551",
        city: "\u0627\u0634\u06A9\u0630\u0631"
      },
      {
        prefix: "447",
        city: "\u0628\u0627\u0641\u0642"
      },
      {
        prefix: "561",
        city: "\u0628\u0647\u0627\u0628\u0627\u062F"
      },
      {
        prefix: "445",
        city: "\u062A\u0641\u062A"
      },
      {
        prefix: "718",
        city: "\u062F\u0633\u062A\u06AF\u0631\u062F\u0627\u0646"
      },
      {
        prefix: "083",
        city: "\u0637\u0628\u0633"
      },
      {
        prefix: "446",
        city: "\u0645\u0647\u0631\u06CC\u0632"
      },
      {
        prefix: "448",
        city: "\u0645\u06CC\u0628\u062F"
      },
      {
        prefix: "552",
        city: "\u0646\u06CC\u0631"
      },
      {
        prefix: "543",
        city: "\u0647\u0631\u0627\u062A \u0648 \u0645\u0631\u0648\u0633\u062A"
      },
      {
        prefix: "442-443",
        city: "\u06CC\u0632\u062F"
      }
    ]
  },
  {
    province: "\u0645\u0631\u06A9\u0632\u06CC",
    cities: [
      {
        prefix: "051",
        city: "\u0622\u0634\u062A\u06CC\u0627\u0646"
      },
      {
        prefix: "052-053",
        city: "\u0627\u0631\u0627\u06A9"
      },
      {
        prefix: "058",
        city: "\u062A\u0641\u0631\u0634"
      },
      {
        prefix: "055",
        city: "\u062E\u0645\u06CC\u0646"
      },
      {
        prefix: "617",
        city: "\u062E\u0646\u062F\u0627\u0628"
      },
      {
        prefix: "057",
        city: "\u062F\u0644\u06CC\u062C\u0627\u0646"
      },
      {
        prefix: "618",
        city: "\u0632\u0631\u0646\u062F \u0645\u0631\u06A9\u0632\u06CC"
      },
      {
        prefix: "059-060",
        city: "\u0633\u0627\u0648\u0647"
      },
      {
        prefix: "061-062",
        city: "\u0633\u0631\u0628\u0646\u062F"
      },
      {
        prefix: "544",
        city: "\u0641\u0631\u0627\u0647\u0627\u0646"
      },
      {
        prefix: "056",
        city: "\u0645\u062D\u0644\u0627\u062A"
      },
      {
        prefix: "571",
        city: "\u0648\u0641\u0633"
      },
      {
        prefix: "593",
        city: "\u0647\u0646\u062F\u0648\u062F\u0631"
      }
    ]
  },
  {
    province: "\u0647\u0631\u0645\u0632\u06AF\u0627\u0646",
    cities: [
      {
        prefix: "667",
        city: "\u0627\u0628\u0648\u0645\u0648\u0633\u06CC"
      },
      {
        prefix: "348",
        city: "\u0628\u0633\u062A\u06A9"
      },
      {
        prefix: "586",
        city: "\u0628\u0634\u0627\u06AF\u0631\u062F"
      },
      {
        prefix: "338-339",
        city: "\u0628\u0646\u062F\u0631\u0639\u0628\u0627\u0633"
      },
      {
        prefix: "343-344",
        city: "\u0628\u0646\u062F\u0631\u0644\u0646\u06AF\u0647"
      },
      {
        prefix: "346",
        city: "\u062C\u0627\u0633\u06A9"
      },
      {
        prefix: "337",
        city: "\u062D\u0627\u062C\u06CC \u0622\u0628\u0627\u062F"
      },
      {
        prefix: "554",
        city: "\u062E\u0645\u06CC\u0631"
      },
      {
        prefix: "469",
        city: "\u0631\u0648\u062F\u0627\u0646"
      },
      {
        prefix: "537",
        city: "\u0641\u06CC\u0646"
      },
      {
        prefix: "345",
        city: "\u0642\u0634\u0645"
      },
      {
        prefix: "470",
        city: "\u06AF\u0627\u0648\u0628\u0646\u062F\u06CC"
      },
      {
        prefix: "341-342",
        city: "\u0645\u06CC\u0646\u0627\u0628"
      }
    ]
  },
  {
    province: "\u0644\u0631\u0633\u062A\u0627\u0646",
    cities: [
      {
        prefix: "483-484",
        city: "\u0627\u0632\u0646\u0627"
      },
      {
        prefix: "557",
        city: "\u0627\u0634\u062A\u0631\u06CC\u0646\u0627\u0646"
      },
      {
        prefix: "418",
        city: "\u0627\u0644\u0634\u062A\u0631"
      },
      {
        prefix: "416-417",
        city: "\u0627\u0644\u06CC\u06AF\u0648\u062F\u0631\u0632"
      },
      {
        prefix: "412-413",
        city: "\u0628\u0631\u0648\u062C\u0631\u062F"
      },
      {
        prefix: "592",
        city: "\u067E\u0627\u067E\u06CC"
      },
      {
        prefix: "612",
        city: "\u0686\u063A\u0644\u0648\u0646\u062F\u06CC"
      },
      {
        prefix: "613",
        city: "\u0686\u06AF\u0646\u06CC"
      },
      {
        prefix: "406-407",
        city: "\u062E\u0631\u0645 \u0622\u0628\u0627\u062F"
      },
      {
        prefix: "421",
        city: "\u062F\u0648\u0631\u0648\u062F"
      },
      {
        prefix: "598",
        city: "\u0631\u0648\u0645\u0634\u06A9\u0627\u0646"
      },
      {
        prefix: "419",
        city: "\u06A9\u0648\u0647\u062F\u0634\u062A"
      },
      {
        prefix: "385",
        city: "\u0645\u0644\u0627\u0648\u06CC(\u067E\u0644\u062F\u062E\u062A\u0631)"
      },
      {
        prefix: "420",
        city: "\u0646\u0648\u0631\u0622\u0628\u0627\u062F(\u062F\u0644\u0641\u0627\u0646)"
      },
      {
        prefix: "528",
        city: "\u0648\u06CC\u0633\u06CC\u0627\u0646"
      },
      {
        prefix: "",
        city: "\u0645\u0627\u0632\u0646\u062F\u0631\u0627\u0646"
      },
      {
        prefix: "213-214",
        city: "\u0622\u0645\u0644"
      },
      {
        prefix: "205-206",
        city: "\u0628\u0627\u0628\u0644"
      },
      {
        prefix: "498",
        city: "\u0628\u0627\u0628\u0644\u0633\u0631"
      },
      {
        prefix: "568",
        city: "\u0628\u0646\u062F\u067E\u06CC"
      },
      {
        prefix: "711",
        city: "\u0628\u0646\u062F\u067E\u06CC \u0634\u0631\u0642\u06CC"
      },
      {
        prefix: "217-218",
        city: "\u0628\u0647\u0634\u0647\u0631"
      },
      {
        prefix: "221",
        city: "\u062A\u0646\u06A9\u0627\u0628\u0646"
      },
      {
        prefix: "582",
        city: "\u062C\u0648\u06CC\u0628\u0627\u0631"
      },
      {
        prefix: "483",
        city: "\u0686\u0627\u0644\u0648\u0633"
      },
      {
        prefix: "625",
        city: "\u0686\u0645\u0633\u062A\u0627\u0646"
      },
      {
        prefix: "576",
        city: "\u0686\u0647\u0627\u0631\u062F\u0627\u0646\u06AF\u0647"
      },
      {
        prefix: "578",
        city: "\u062F\u0648\u062F\u0627\u0646\u06AF\u0647"
      },
      {
        prefix: "227",
        city: "\u0631\u0627\u0645\u0633\u0631"
      },
      {
        prefix: "208-209",
        city: "\u0633\u0627\u0631\u06CC"
      },
      {
        prefix: "225",
        city: "\u0633\u0648\u0627\u062F\u06A9\u0648\u0647"
      },
      {
        prefix: "577",
        city: "\u0634\u06CC\u0631\u06AF\u0627\u0647"
      },
      {
        prefix: "712",
        city: "\u0639\u0628\u0627\u0633 \u0622\u0628\u0627\u062F"
      },
      {
        prefix: "215-216",
        city: "\u0642\u0627\u0626\u0645\u0634\u0647\u0631"
      },
      {
        prefix: "626",
        city: "\u06A9\u062C\u0648\u0631"
      },
      {
        prefix: "627",
        city: "\u06A9\u0644\u0627\u0631\u062F\u0634\u062A"
      },
      {
        prefix: "579",
        city: "\u06AF\u0644\u0648\u06AF\u0627\u0647"
      },
      {
        prefix: "713",
        city: "\u0645\u06CC\u0627\u0646\u062F\u0648\u0631\u0648\u062F"
      },
      {
        prefix: "499",
        city: "\u0646\u06A9\u0627\u0621"
      },
      {
        prefix: "222",
        city: "\u0646\u0648\u0631"
      },
      {
        prefix: "219-220",
        city: "\u0646\u0648\u0634\u0647\u0631"
      },
      {
        prefix: "500-501",
        city: "\u0647\u0631\u0627\u0632 \u0648 \u0645\u062D\u0645\u0648\u062F\u0622\u0628\u0627\u062F"
      }
    ]
  },
  {
    province: "\u06AF\u0644\u0633\u062A\u0627\u0646",
    cities: [
      {
        prefix: "623",
        city: "\u0622\u0632\u0627\u062F\u0634\u0647\u0631"
      },
      {
        prefix: "497",
        city: "\u0622\u0642 \u0642\u0644\u0627"
      },
      {
        prefix: "223",
        city: "\u0628\u0646\u062F\u0631\u062A\u0631\u06A9\u0645\u0646"
      },
      {
        prefix: "689",
        city: "\u0628\u0646\u062F\u0631\u06AF\u0632"
      },
      {
        prefix: "487",
        city: "\u0631\u0627\u0645\u06CC\u0627\u0646"
      },
      {
        prefix: "226",
        city: "\u0639\u0644\u06CC \u0622\u0628\u0627\u062F"
      },
      {
        prefix: "224",
        city: "\u06A9\u0631\u062F\u06A9\u0648\u06CC"
      },
      {
        prefix: "486",
        city: "\u06A9\u0644\u0627\u0644\u0647"
      },
      {
        prefix: "211-212",
        city: "\u06AF\u0631\u06AF\u0627\u0646"
      },
      {
        prefix: "628",
        city: "\u06AF\u0645\u06CC\u0634\u0627\u0646"
      },
      {
        prefix: "202-203",
        city: "\u06AF\u0646\u0628\u062F \u06A9\u0627\u0648\u0648\u0633"
      },
      {
        prefix: "531",
        city: "\u0645\u0631\u0627\u0648\u0647 \u062A\u067E\u0647"
      },
      {
        prefix: "488",
        city: "\u0645\u06CC\u0646\u0648\u062F\u0634\u062A"
      }
    ]
  },
  {
    province: "\u06AF\u06CC\u0644\u0627\u0646",
    cities: [
      {
        prefix: "261",
        city: "\u0622\u0633\u062A\u0627\u0631\u0627"
      },
      {
        prefix: "273",
        city: "\u0622\u0633\u062A\u0627\u0646\u0647"
      },
      {
        prefix: "630",
        city: "\u0627\u0645\u0644\u0634"
      },
      {
        prefix: "264",
        city: "\u0628\u0646\u062F\u0631\u0627\u0646\u0632\u0644\u06CC"
      },
      {
        prefix: "518",
        city: "\u062E\u0645\u0627\u0645"
      },
      {
        prefix: "631",
        city: "\u0631\u062D\u06CC\u0645 \u0622\u0628\u0627\u062F"
      },
      {
        prefix: "258-259",
        city: "\u0631\u0634\u062A"
      },
      {
        prefix: "570",
        city: "\u0631\u0636\u0648\u0627\u0646\u0634\u0647\u0631"
      },
      {
        prefix: "265",
        city: "\u0631\u0648\u062F\u0628\u0627\u0631"
      },
      {
        prefix: "268-269",
        city: "\u0631\u0648\u062F\u0633\u0631"
      },
      {
        prefix: "653",
        city: "\u0633\u0646\u06AF\u0631"
      },
      {
        prefix: "517",
        city: "\u0633\u06CC\u0627\u0647\u06A9\u0644"
      },
      {
        prefix: "569",
        city: "\u0634\u0641\u062A"
      },
      {
        prefix: "267",
        city: "\u0635\u0648\u0645\u0639\u0647 \u0633\u0631\u0627"
      },
      {
        prefix: "262-263",
        city: "\u0637\u0627\u0644\u0634"
      },
      {
        prefix: "593",
        city: "\u0639\u0645\u0627\u0631\u0644\u0648"
      },
      {
        prefix: "266",
        city: "\u0641\u0648\u0645\u0646"
      },
      {
        prefix: "693",
        city: "\u06A9\u0648\u0686\u0635\u0641\u0647\u0627\u0646"
      },
      {
        prefix: "271-272",
        city: "\u0644\u0627\u0647\u06CC\u062C\u0627\u0646"
      },
      {
        prefix: "694",
        city: "\u0644\u0634\u062A \u0646\u0634\u0627\u0621"
      },
      {
        prefix: "270",
        city: "\u0644\u0646\u06AF\u0631\u0648\u062F"
      },
      {
        prefix: "516",
        city: "\u0645\u0627\u0633\u0627\u0644 \u0648 \u0634\u0627\u0646\u062F\u0631\u0645\u0646"
      }
    ]
  },
  {
    province: "\u06A9\u0631\u0645\u0627\u0646\u0634\u0627\u0647",
    cities: [
      {
        prefix: "333-334",
        city: "\u0627\u0633\u0644\u0627\u0645 \u0622\u0628\u0627\u062F"
      },
      {
        prefix: "691",
        city: "\u0628\u0627\u06CC\u0646\u06AF\u0627\u0646"
      },
      {
        prefix: "323-322",
        city: "\u067E\u0627\u0648\u0647"
      },
      {
        prefix: "595",
        city: "\u062B\u0644\u0627\u062B \u0628\u0627\u0628\u0627\u062C\u0627\u0646\u06CC"
      },
      {
        prefix: "395",
        city: "\u062C\u0648\u0627\u0646\u0631\u0648\u062F"
      },
      {
        prefix: "641",
        city: "\u062D\u0645\u06CC\u0644"
      },
      {
        prefix: "596",
        city: "\u0631\u0648\u0627\u0646\u0633\u0631"
      },
      {
        prefix: "336",
        city: "\u0633\u0631\u067E\u0644 \u0630\u0647\u0627\u0628"
      },
      {
        prefix: "335",
        city: "\u0633\u0646\u0642\u0631"
      },
      {
        prefix: "496",
        city: "\u0635\u062D\u0646\u0647"
      },
      {
        prefix: "337",
        city: "\u0642\u0635\u0631\u0634\u06CC\u0631\u06CC\u0646"
      },
      {
        prefix: "324-325",
        city: "\u06A9\u0631\u0645\u0627\u0646\u0634\u0627\u0647"
      },
      {
        prefix: "394",
        city: "\u06A9\u0631\u0646\u062F"
      },
      {
        prefix: "330",
        city: "\u06A9\u0646\u06AF\u0627\u0648\u0631"
      },
      {
        prefix: "332",
        city: "\u06AF\u06CC\u0644\u0627\u0646\u063A\u0631\u0628"
      },
      {
        prefix: "331",
        city: "\u0647\u0631\u0633\u06CC\u0646"
      }
    ]
  },
  {
    province: "\u06A9\u0647\u06A9\u06CC\u0644\u0648\u06CC\u0647 \u0648 \u0628\u0648\u06CC\u0631\u0627\u062D\u0645\u062F",
    cities: [
      {
        prefix: "687",
        city: "\u0628\u0627\u0634\u062A"
      },
      {
        prefix: "422-423",
        city: "\u0628\u0648\u06CC\u0631\u0627\u062D\u0645\u062F(\u06CC\u0627\u0633\u0648\u062C)"
      },
      {
        prefix: "599",
        city: "\u0628\u0647\u0645\u0646\u06CC"
      },
      {
        prefix: "600",
        city: "\u0686\u0627\u0631\u0648\u0633\u0627"
      },
      {
        prefix: "688",
        city: "\u062F\u0631\u0648\u0647\u0627\u0646"
      },
      {
        prefix: "424-425",
        city: "\u06A9\u0647\u06A9\u06CC\u0644\u0648\u06CC\u0647(\u062F\u0647\u062F\u0634\u062A)"
      },
      {
        prefix: "426",
        city: "\u06AF\u0686\u0633\u0627\u0631\u0627\u0646(\u062F\u0648\u06AF\u0646\u0628\u062F\u0627\u0646)"
      },
      {
        prefix: "550",
        city: "\u0644\u0646\u062F\u0647"
      },
      {
        prefix: "697",
        city: "\u0645\u0627\u0631\u06AF\u0648\u0646"
      }
    ]
  },
  {
    province: "\u06A9\u0631\u062F\u0633\u062A\u0627\u0646",
    cities: [
      {
        prefix: "384",
        city: "\u0628\u0627\u0646\u0647"
      },
      {
        prefix: "377-378",
        city: "\u0628\u06CC\u062C\u0627\u0631"
      },
      {
        prefix: "558",
        city: "\u062F\u0647\u06AF\u0644\u0627\u0646"
      },
      {
        prefix: "385",
        city: "\u062F\u06CC\u0648\u0627\u0646\u062F\u0631\u0647"
      },
      {
        prefix: "646",
        city: "\u0633\u0631\u0648\u0622\u0628\u0627\u062F"
      },
      {
        prefix: "375-376",
        city: "\u0633\u0642\u0632"
      },
      {
        prefix: "372-373",
        city: "\u0633\u0646\u0646\u062F\u062C"
      },
      {
        prefix: "379-380",
        city: "\u0642\u0631\u0648\u0647"
      },
      {
        prefix: "(\u0646\u06CC\u0627\u0632\u0645\u0646\u062F \u062A\u0627\u06CC\u06CC\u062F \u062A\u0648\u0633\u0637 \u0628\u0627\u0632\u062F\u06CC\u062F\u06A9\u0646\u0646\u062F\u0647 \u0647\u0627)383",
        city: "\u06A9\u0627\u0645\u06CC\u0627\u0631\u0627\u0646"
      },
      {
        prefix: "674",
        city: "\u06A9\u0631\u0627\u0646\u06CC"
      },
      {
        prefix: "381-382",
        city: "\u0645\u0631\u06CC\u0648\u0627\u0646"
      },
      {
        prefix: "676",
        city: "\u0646\u0645\u0634\u06CC\u0631"
      }
    ]
  },
  {
    province: "\u06A9\u0631\u0645\u0627\u0646",
    cities: [
      {
        prefix: "722",
        city: "\u0627\u0631\u0632\u0648\u0646\u06CC\u0647"
      },
      {
        prefix: "542",
        city: "\u0627\u0646\u0627\u0631"
      },
      {
        prefix: "312-313",
        city: "\u0628\u0627\u0641\u062A"
      },
      {
        prefix: "317",
        city: "\u0628\u0631\u062F\u0633\u06CC\u0631"
      },
      {
        prefix: "310-311",
        city: "\u0628\u0645"
      },
      {
        prefix: "302-303",
        city: "\u062C\u06CC\u0631\u0641\u062A"
      },
      {
        prefix: "583",
        city: "\u0631\u0627\u0628\u0631"
      },
      {
        prefix: "321",
        city: "\u0631\u0627\u0648\u0631"
      },
      {
        prefix: "382",
        city: "\u0631\u0627\u06CC\u0646"
      },
      {
        prefix: "304-305",
        city: "\u0631\u0641\u0633\u0646\u062C\u0627\u0646"
      },
      {
        prefix: "536",
        city: "\u0631\u0648\u062F\u0628\u0627\u0631 \u06A9\u0647\u0646\u0648\u062C"
      },
      {
        prefix: "605",
        city: "\u0631\u06CC\u06AF\u0627\u0646"
      },
      {
        prefix: "308-309",
        city: "\u0632\u0631\u0646\u062F"
      },
      {
        prefix: "306-307",
        city: "\u0633\u06CC\u0631\u062C\u0627\u0646"
      },
      {
        prefix: "319",
        city: "\u0634\u0647\u062F\u0627\u062F"
      },
      {
        prefix: "313-314",
        city: "\u0634\u0647\u0631\u0628\u0627\u0628\u06A9"
      },
      {
        prefix: "606",
        city: "\u0639\u0646\u0628\u0631\u0622\u0628\u0627\u062F"
      },
      {
        prefix: "320",
        city: "\u0641\u0647\u0631\u062C"
      },
      {
        prefix: "698",
        city: "\u0642\u0644\u0639\u0647 \u06AF\u0646\u062C"
      },
      {
        prefix: "298-299",
        city: "\u06A9\u0631\u0645\u0627\u0646"
      },
      {
        prefix: "535",
        city: "\u06A9\u0648\u0647\u0628\u0646\u0627\u0646"
      },
      {
        prefix: "315-316",
        city: "\u06A9\u0647\u0646\u0648\u062C"
      },
      {
        prefix: "318",
        city: "\u06AF\u0644\u0628\u0627\u0641"
      },
      {
        prefix: "607",
        city: "\u0645\u0627\u0647\u0627\u0646"
      },
      {
        prefix: "608",
        city: "\u0645\u0646\u0648\u062C\u0627\u0646"
      }
    ]
  },
  {
    province: "\u0642\u0632\u0648\u06CC\u0646",
    cities: [
      {
        prefix: "508",
        city: "\u0622\u0628\u06CC\u06A9"
      },
      {
        prefix: "538",
        city: "\u0622\u0648\u062C"
      },
      {
        prefix: "728",
        city: "\u0627\u0644\u0628\u0631\u0632"
      },
      {
        prefix: "509",
        city: "\u0628\u0648\u0626\u06CC\u0646 \u0632\u0647\u0631\u0627"
      },
      {
        prefix: "438-439",
        city: "\u062A\u0627\u06A9\u0633\u062A\u0627\u0646"
      },
      {
        prefix: "580",
        city: "\u0631\u0648\u062F\u0628\u0627\u0631 \u0627\u0644\u0645\u0648\u062A"
      },
      {
        prefix: "590",
        city: "\u0631\u0648\u062F\u0628\u0627\u0631 \u0634\u0647\u0631\u0633\u062A\u0627\u0646"
      },
      {
        prefix: "559",
        city: "\u0636\u06CC\u0627\u0621\u0622\u0628\u0627\u062F"
      },
      {
        prefix: "588",
        city: "\u0637\u0627\u0631\u0645 \u0633\u0641\u0644\u06CC"
      },
      {
        prefix: "431-432",
        city: "\u0642\u0632\u0648\u06CC\u0646"
      }
    ]
  },
  {
    province: "\u0642\u0645",
    cities: [
      {
        prefix: "037-038",
        city: "\u0642\u0645"
      },
      {
        prefix: "702",
        city: "\u06A9\u0647\u06A9"
      }
    ]
  },
  {
    province: "\u0641\u0627\u0631\u0633",
    cities: [
      {
        prefix: "240-241",
        city: "\u0622\u0628\u0627\u062F\u0647"
      },
      {
        prefix: "670",
        city: "\u0622\u0628\u0627\u062F\u0647 \u0637\u0634\u06A9"
      },
      {
        prefix: "648",
        city: "\u0627\u0631\u0633\u0646\u062C\u0627\u0646"
      },
      {
        prefix: "252",
        city: "\u0627\u0633\u062A\u0647\u0628\u0627\u0646"
      },
      {
        prefix: "678",
        city: "\u0627\u0634\u06A9\u0646\u0627\u0646"
      },
      {
        prefix: "253",
        city: "\u0627\u0642\u0644\u06CC\u062F"
      },
      {
        prefix: "649",
        city: "\u0627\u0648\u0632"
      },
      {
        prefix: "513",
        city: "\u0628\u0648\u0627\u0646\u0627\u062A"
      },
      {
        prefix: "546",
        city: "\u0628\u06CC\u0636\u0627"
      },
      {
        prefix: "671",
        city: "\u062C\u0648\u06CC\u0645"
      },
      {
        prefix: "246-247",
        city: "\u062C\u0647\u0631\u0645"
      },
      {
        prefix: "654",
        city: "\u062D\u0627\u062C\u06CC \u0622\u0628\u0627\u062F(\u0632\u0631\u06CC\u0646 \u062F\u0634\u062A)"
      },
      {
        prefix: "548",
        city: "\u062E\u0631\u0627\u0645\u0647"
      },
      {
        prefix: "547",
        city: "\u062E\u0634\u062A \u0648 \u06A9\u0645\u0627\u0631\u062C"
      },
      {
        prefix: "655",
        city: "\u062E\u0641\u0631"
      },
      {
        prefix: "248-249",
        city: "\u062F\u0627\u0631\u0627\u0628"
      },
      {
        prefix: "253",
        city: "\u0633\u067E\u06CC\u062F\u0627\u0646"
      },
      {
        prefix: "514",
        city: "\u0633\u0631\u0648\u0633\u062A\u0627\u0646"
      },
      {
        prefix: "665",
        city: "\u0633\u0639\u0627\u062F\u062A \u0622\u0628\u0627\u062F"
      },
      {
        prefix: "673",
        city: "\u0634\u06CC\u0628\u06A9\u0648\u0647"
      },
      {
        prefix: "228-229-230",
        city: "\u0634\u06CC\u0631\u0627\u0632"
      },
      {
        prefix: "679",
        city: "\u0641\u0631\u0627\u0634\u0628\u0646\u062F"
      },
      {
        prefix: "256-257",
        city: "\u0641\u0633\u0627"
      },
      {
        prefix: "244-245",
        city: "\u0641\u06CC\u0631\u0648\u0632\u0622\u0628\u0627\u062F"
      },
      {
        prefix: "681",
        city: "\u0642\u0646\u0642\u0631\u06CC(\u062E\u0631\u0645 \u0628\u06CC\u062F)"
      },
      {
        prefix: "723",
        city: "\u0642\u06CC\u0631\u0648\u06A9\u0627\u0631\u0632\u06CC\u0646"
      },
      {
        prefix: "236-237",
        city: "\u06A9\u0627\u0632\u0631\u0648\u0646"
      },
      {
        prefix: "683",
        city: "\u06A9\u0648\u0627\u0631"
      },
      {
        prefix: "656",
        city: "\u06A9\u0631\u0627\u0634"
      },
      {
        prefix: "250-251",
        city: "\u0644\u0627\u0631\u0633\u062A\u0627\u0646"
      },
      {
        prefix: "515",
        city: "\u0644\u0627\u0645\u0631\u062F"
      },
      {
        prefix: "242 \u2013 243",
        city: "\u0645\u0631\u0648\u062F\u0634\u062A"
      },
      {
        prefix: "238-239",
        city: "\u0645\u0645\u0633\u0646\u06CC"
      },
      {
        prefix: "657",
        city: "\u0645\u0647\u0631"
      },
      {
        prefix: "255",
        city: "\u0646\u06CC \u0631\u06CC\u0632"
      }
    ]
  },
  {
    province: "\u0633\u0645\u0646\u0627\u0646",
    cities: [
      {
        prefix: "684",
        city: "\u0627\u06CC\u0648\u0627\u0646\u06A9\u06CC"
      },
      {
        prefix: "700",
        city: "\u0628\u0633\u0637\u0627\u0645"
      },
      {
        prefix: "642",
        city: "\u0628\u06CC\u0627\u0631\u062C\u0645\u0646\u062F"
      },
      {
        prefix: "457",
        city: "\u062F\u0627\u0645\u063A\u0627\u0646"
      },
      {
        prefix: "456",
        city: "\u0633\u0645\u0646\u0627\u0646"
      },
      {
        prefix: "458-459",
        city: "\u0634\u0627\u0647\u0631\u0648\u062F"
      },
      {
        prefix: "460",
        city: "\u06AF\u0631\u0645\u0633\u0627\u0631"
      },
      {
        prefix: "530",
        city: "\u0645\u0647\u062F\u06CC\u0634\u0647\u0631"
      },
      {
        prefix: "520",
        city: "\u0645\u06CC\u0627\u0645\u06CC"
      }
    ]
  },
  {
    province: "\u0633\u06CC\u0633\u062A\u0627\u0646 \u0648 \u0628\u0644\u0648\u0686\u0633\u062A\u0627\u0646",
    cities: [
      {
        prefix: "358-359",
        city: "\u0627\u06CC\u0631\u0627\u0646\u0634\u0647\u0631"
      },
      {
        prefix: "682",
        city: "\u0628\u0632\u0645\u0627\u0646"
      },
      {
        prefix: "703",
        city: "\u0628\u0645\u067E\u0648\u0631"
      },
      {
        prefix: "364-365",
        city: "\u0686\u0627\u0628\u0647\u0627\u0631"
      },
      {
        prefix: "371",
        city: "\u062E\u0627\u0634"
      },
      {
        prefix: "701",
        city: "\u062F\u0634\u062A\u06CC\u0627\u0631\u06CC"
      },
      {
        prefix: "720",
        city: "\u0631\u0627\u0633\u06A9"
      },
      {
        prefix: "366-367",
        city: "\u0632\u0627\u0628\u0644"
      },
      {
        prefix: "704",
        city: "\u0632\u0627\u0628\u0644\u06CC"
      },
      {
        prefix: "361-362",
        city: "\u0632\u0627\u0647\u062F\u0627\u0646"
      },
      {
        prefix: "369-370",
        city: "\u0633\u0631\u0627\u0648\u0627\u0646"
      },
      {
        prefix: "635",
        city: "\u0633\u0631\u0628\u0627\u0632"
      },
      {
        prefix: "668",
        city: "\u0633\u06CC\u0628 \u0648 \u0633\u0648\u0631\u0627\u0646"
      },
      {
        prefix: "533",
        city: "\u0634\u0647\u0631\u06A9\u06CC \u0648 \u0646\u0627\u0631\u0648\u0626\u06CC(\u0632\u0647\u06A9)"
      },
      {
        prefix: "705",
        city: "\u0634\u06CC\u0628 \u0622\u0628"
      },
      {
        prefix: "699",
        city: "\u0641\u0646\u0648\u062C"
      },
      {
        prefix: "669",
        city: "\u0642\u0635\u0631\u0642\u0646\u062F"
      },
      {
        prefix: "725",
        city: "\u06A9\u0646\u0627\u0631\u06A9"
      },
      {
        prefix: "597",
        city: "\u0644\u0627\u0634\u0627\u0631(\u0627\u0633\u067E\u06A9\u0647)"
      },
      {
        prefix: "611",
        city: "\u0645\u06CC\u0631\u062C\u0627\u0648\u0647"
      },
      {
        prefix: "525",
        city: "\u0646\u06CC\u06A9 \u0634\u0647\u0631"
      }
    ]
  },
  {
    province: "\u062E\u0648\u0632\u0633\u062A\u0627\u0646",
    cities: [
      {
        prefix: "181",
        city: "\u0622\u0628\u0627\u062F\u0627\u0646"
      },
      {
        prefix: "527",
        city: "\u0622\u063A\u0627\u062C\u0627\u0631\u06CC"
      },
      {
        prefix: "585",
        city: "\u0627\u0631\u0648\u0646\u062F\u06A9\u0646\u0627\u0631"
      },
      {
        prefix: "685",
        city: "\u0627\u0645\u06CC\u062F\u06CC\u0647"
      },
      {
        prefix: "663",
        city: "\u0627\u0646\u062F\u06CC\u06A9\u0627"
      },
      {
        prefix: "192-193",
        city: "\u0627\u0646\u062F\u06CC\u0645\u0634\u06A9"
      },
      {
        prefix: "174-175",
        city: "\u0627\u0647\u0648\u0627\u0632"
      },
      {
        prefix: "183-184",
        city: "\u0627\u06CC\u0630\u0647"
      },
      {
        prefix: "481",
        city: "\u0628\u0627\u063A \u0645\u0644\u06A9"
      },
      {
        prefix: "706",
        city: "\u0628\u0646\u062F\u0631 \u0627\u0645\u0627\u0645 \u062E\u0645\u06CC\u0646\u06CC"
      },
      {
        prefix: "194-195",
        city: "\u0628\u0646\u062F\u0631\u0645\u0627\u0647\u0634\u0647\u0631"
      },
      {
        prefix: "185-186",
        city: "\u0628\u0647\u0628\u0647\u0627\u0646"
      },
      {
        prefix: "182",
        city: "\u062E\u0631\u0645\u0634\u0647\u0631"
      },
      {
        prefix: "199-200",
        city: "\u062F\u0632\u0641\u0648\u0644"
      },
      {
        prefix: "198",
        city: "\u062F\u0634\u062A \u0622\u0632\u0627\u062F\u06AF\u0627\u0646"
      },
      {
        prefix: "662",
        city: "\u0631\u0627\u0645\u0634\u06CC\u0631"
      },
      {
        prefix: "190-191",
        city: "\u0631\u0627\u0645\u0647\u0631\u0645\u0632"
      },
      {
        prefix: "692",
        city: "\u0633\u0631\u062F\u0634\u062A"
      },
      {
        prefix: "189",
        city: "\u0634\u0627\u062F\u06AF\u0627\u0646"
      },
      {
        prefix: "707",
        city: "\u0634\u0627\u0648\u0648\u0631"
      },
      {
        prefix: "526",
        city: "\u0634\u0648\u0634"
      },
      {
        prefix: "187-188",
        city: "\u0634\u0648\u0634\u062A\u0631"
      },
      {
        prefix: "729",
        city: "\u06AF\u062A\u0648\u0646\u062F"
      },
      {
        prefix: "730",
        city: "\u0644\u0627\u0644\u06CC"
      },
      {
        prefix: "196-197",
        city: "\u0645\u0633\u062C\u062F\u0633\u0644\u06CC\u0645\u0627\u0646"
      },
      {
        prefix: "661",
        city: "\u0647\u0646\u062F\u06CC\u062C\u0627\u0646"
      },
      {
        prefix: "680",
        city: "\u0647\u0648\u06CC\u0632\u0647"
      }
    ]
  },
  {
    province: "\u062E\u0631\u0627\u0633\u0627\u0646 \u0631\u0636\u0648\u06CC",
    cities: [
      {
        prefix: "643",
        city: "\u0627\u062D\u0645\u062F\u0622\u0628\u0627\u062F"
      },
      {
        prefix: "562",
        city: "\u0628\u062C\u0633\u062A\u0627\u0646"
      },
      {
        prefix: "572",
        city: "\u0628\u0631\u062F\u0633\u06A9\u0646"
      },
      {
        prefix: "074",
        city: "\u062A\u0627\u06CC\u0628\u0627\u062F"
      },
      {
        prefix: "644",
        city: "\u062A\u062E\u062A \u062C\u0644\u06AF\u0647"
      },
      {
        prefix: "072-073",
        city: "\u062A\u0631\u0628\u062A \u062C\u0627\u0645"
      },
      {
        prefix: "069-070",
        city: "\u062A\u0631\u0628\u062A \u062D\u06CC\u062F\u0631\u06CC\u0647"
      },
      {
        prefix: "521",
        city: "\u062C\u063A\u062A\u0627\u06CC"
      },
      {
        prefix: "573",
        city: "\u062C\u0648\u06CC\u0646"
      },
      {
        prefix: "522",
        city: "\u0686\u0646\u0627\u0631\u0627\u0646"
      },
      {
        prefix: "724",
        city: "\u062E\u0644\u06CC\u0644 \u0622\u0628\u0627\u062F"
      },
      {
        prefix: "076",
        city: "\u062E\u0648\u0627\u0641"
      },
      {
        prefix: "077",
        city: "\u062F\u0631\u06AF\u0632"
      },
      {
        prefix: "650",
        city: "\u0631\u0634\u062A\u062E\u0648\u0627\u0631"
      },
      {
        prefix: "574",
        city: "\u0632\u0628\u0631\u062E\u0627\u0646"
      },
      {
        prefix: "078-079",
        city: "\u0633\u0628\u0632\u0648\u0627\u0631"
      },
      {
        prefix: "081",
        city: "\u0633\u0631\u062E\u0633"
      },
      {
        prefix: "084",
        city: "\u0641\u0631\u06CC\u0645\u0627\u0646"
      },
      {
        prefix: "651",
        city: "\u0641\u06CC\u0636 \u0622\u0628\u0627\u062F"
      },
      {
        prefix: "086-087",
        city: "\u0642\u0648\u0686\u0627\u0646"
      },
      {
        prefix: "089-090",
        city: "\u06A9\u0627\u0634\u0645\u0631"
      },
      {
        prefix: "553",
        city: "\u06A9\u0644\u0627\u062A"
      },
      {
        prefix: "091",
        city: "\u06AF\u0646\u0627\u0628\u0627\u062F"
      },
      {
        prefix: "092-093-094",
        city: "\u0645\u0634\u0647\u062F"
      },
      {
        prefix: "097",
        city: "\u0645\u0634\u0647\u062F \u0645\u0646\u0637\u0642\u06472"
      },
      {
        prefix: "098",
        city: "\u0645\u0634\u0647\u062F \u0645\u0646\u0637\u0642\u06473"
      },
      {
        prefix: "096",
        city: "\u0645\u0634\u0647\u062F \u0645\u0646\u0637\u0642\u06471"
      },
      {
        prefix: "105-106",
        city: "\u0646\u06CC\u0634\u0627\u0628\u0648\u0631"
      }
    ]
  },
  {
    province: "\u062E\u0631\u0627\u0633\u0627\u0646 \u0634\u0645\u0627\u0644\u06CC",
    cities: [
      {
        prefix: "063",
        city: "\u0627\u0633\u0641\u0631\u0627\u06CC\u0646"
      },
      {
        prefix: "067-068",
        city: "\u0628\u062C\u0646\u0648\u0631\u062F"
      },
      {
        prefix: "075",
        city: "\u062C\u0627\u062C\u0631\u0645"
      },
      {
        prefix: "591",
        city: "\u0631\u0627\u0632\u0648\u062C\u0631\u06A9\u0644\u0627\u0646"
      },
      {
        prefix: "082",
        city: "\u0634\u06CC\u0631\u0648\u0627\u0646"
      },
      {
        prefix: "635",
        city: "\u0641\u0627\u0631\u0648\u062C"
      },
      {
        prefix: "524",
        city: "\u0645\u0627\u0646\u0647 \u0648 \u0633\u0645\u0644\u0642\u0627\u0646"
      }
    ]
  },
  {
    province: "\u0686\u0647\u0627\u0631\u0645\u062D\u0627\u0644 \u0648 \u0628\u062E\u062A\u06CC\u0627\u0631\u06CC",
    cities: [
      {
        prefix: "468",
        city: "\u0627\u0631\u062F\u0644"
      },
      {
        prefix: "465",
        city: "\u0628\u0631\u0648\u062C\u0646"
      },
      {
        prefix: "461-462",
        city: "\u0634\u0647\u0631\u06A9\u0631\u062F"
      },
      {
        prefix: "467",
        city: "\u0641\u0627\u0631\u0633\u0627\u0646"
      },
      {
        prefix: "632",
        city: "\u0641\u0644\u0627\u0631\u062F"
      },
      {
        prefix: "555",
        city: "\u06A9\u0648\u0647\u0631\u0646\u06AF"
      },
      {
        prefix: "633",
        city: "\u06A9\u06CC\u0627\u0631"
      },
      {
        prefix: "629",
        city: "\u06AF\u0646\u062F\u0645\u0627\u0646"
      },
      {
        prefix: "466",
        city: "\u0644\u0631\u062F\u06AF\u0627\u0646"
      },
      {
        prefix: "696",
        city: "\u0645\u06CC\u0627\u0646\u06A9\u0648\u0647"
      }
    ]
  },
  {
    province: "\u062E\u0631\u0627\u0633\u0627\u0646 \u062C\u0646\u0648\u0628\u06CC",
    cities: [
      {
        prefix: "721",
        city: "\u0628\u0634\u0631\u0648\u06CC\u0647"
      },
      {
        prefix: "064-065",
        city: "\u0628\u06CC\u0631\u062C\u0646\u062F"
      },
      {
        prefix: "523",
        city: "\u062F\u0631\u0645\u06CC\u0627\u0646"
      },
      {
        prefix: "652",
        city: "\u0632\u06CC\u0631\u06A9\u0648\u0647"
      },
      {
        prefix: "719",
        city: "\u0633\u0631\u0627\u06CC\u0627\u0646"
      },
      {
        prefix: "716",
        city: "\u0633\u0631\u0628\u06CC\u0634\u0647"
      },
      {
        prefix: "085",
        city: "\u0641\u0631\u062F\u0648\u0633"
      },
      {
        prefix: "088",
        city: "\u0642\u0627\u0626\u0646\u0627\u062A"
      },
      {
        prefix: "563",
        city: "\u0646\u0647\u0628\u0646\u062F\u0627\u0646"
      }
    ]
  },
  {
    province: "\u0628\u0648\u0634\u0647\u0631",
    cities: [
      {
        prefix: "529",
        city: "\u0628\u0646\u062F\u0631 \u062F\u06CC\u0644\u0645"
      },
      {
        prefix: "353",
        city: "\u0628\u0646\u062F\u0631 \u06AF\u0646\u0627\u0648\u0647"
      },
      {
        prefix: "349-350",
        city: "\u0628\u0648\u0634\u0647\u0631"
      },
      {
        prefix: "355",
        city: "\u062A\u0646\u06AF\u0633\u062A\u0627\u0646"
      },
      {
        prefix: "609",
        city: "\u062C\u0645"
      },
      {
        prefix: "351-352",
        city: "\u062F\u0634\u062A\u0633\u062A\u0627\u0646"
      },
      {
        prefix: "354",
        city: "\u062F\u0634\u062A\u06CC"
      },
      {
        prefix: "732",
        city: "\u062F\u0644\u0648\u0627\u0631"
      },
      {
        prefix: "357",
        city: "\u062F\u06CC\u0631"
      },
      {
        prefix: "532",
        city: "\u0633\u0639\u062F \u0622\u0628\u0627\u062F"
      },
      {
        prefix: "610",
        city: "\u0634\u0628\u0627\u0646\u06A9\u0627\u0631\u0647"
      },
      {
        prefix: "356",
        city: "\u06A9\u0646\u06AF\u0627\u0646"
      }
    ]
  },
  {
    province: "\u062A\u0647\u0631\u0627\u0646",
    cities: [
      {
        prefix: "556",
        city: "\u0627\u0633\u0644\u0627\u0645\u0634\u0647\u0631"
      },
      {
        prefix: "658",
        city: "\u067E\u0627\u06A9\u062F\u0634\u062A"
      },
      {
        prefix: "001-002-003-004-005-006 007-008",
        city: "\u062A\u0647\u0631\u0627\u0646 \u0645\u0631\u06A9\u0632\u06CC"
      },
      {
        prefix: "011",
        city: "\u062A\u0647\u0631\u0627\u0646 \u062C\u0646\u0648\u0628"
      },
      {
        prefix: "020",
        city: "\u062A\u0647\u0631\u0627\u0646 \u0634\u0631\u0642"
      },
      {
        prefix: "025",
        city: "\u062A\u0647\u0631\u0627\u0646\u0634\u0645\u0627\u0644"
      },
      {
        prefix: "015",
        city: "\u062A\u0647\u0631\u0627\u0646 \u063A\u0631\u0628"
      },
      {
        prefix: "043",
        city: "\u062F\u0645\u0627\u0648\u0646\u062F"
      },
      {
        prefix: "666",
        city: "\u0631\u0628\u0627\u0637 \u06A9\u0631\u06CC\u0645"
      },
      {
        prefix: "489",
        city: "\u0633\u0627\u0648\u062C\u0628\u0644\u0627\u063A"
      },
      {
        prefix: "044-045",
        city: "\u0634\u0645\u06CC\u0631\u0627\u0646"
      },
      {
        prefix: "048-049",
        city: "\u0634\u0647\u0631\u0631\u06CC"
      },
      {
        prefix: "490-491",
        city: "\u0634\u0647\u0631\u06CC\u0627\u0631"
      },
      {
        prefix: "695",
        city: "\u0637\u0627\u0644\u0642\u0627\u0646"
      },
      {
        prefix: "659",
        city: "\u0641\u06CC\u0631\u0648\u0632\u06A9\u0648\u0647"
      },
      {
        prefix: "031-032",
        city: "\u06A9\u0631\u062C"
      },
      {
        prefix: "664",
        city: "\u06A9\u0647\u0631\u06CC\u0632\u06A9"
      },
      {
        prefix: "717",
        city: "\u0646\u0638\u0631\u0622\u0628\u0627\u062F"
      },
      {
        prefix: "041-042",
        city: "\u0648\u0631\u0627\u0645\u06CC\u0646"
      }
    ]
  },
  {
    province: "\u0627\u0645\u0648\u0631 \u062E\u0627\u0631\u062C\u0647",
    cities: [
      {
        prefix: "471-472",
        city: "\u0627\u0645\u0648\u0631 \u062E\u0627\u0631\u062C\u0647"
      }
    ]
  },
  {
    province: "\u0627\u06CC\u0644\u0627\u0645",
    cities: [
      {
        prefix: "454",
        city: "\u0622\u0628\u062F\u0627\u0646\u0627\u0646"
      },
      {
        prefix: "581",
        city: "\u0627\u0631\u06A9\u0648\u0627\u0632\u06CC(\u0645\u0644\u06A9\u0634\u0627\u0647\u06CC)"
      },
      {
        prefix: "449-450",
        city: "\u0627\u06CC\u0644\u0627\u0645"
      },
      {
        prefix: "616",
        city: "\u0627\u06CC\u0648\u0627\u0646"
      },
      {
        prefix: "534",
        city: "\u0628\u062F\u0631\u0647"
      },
      {
        prefix: "455",
        city: "\u062F\u0631\u0647 \u0634\u0647\u0631"
      },
      {
        prefix: "451",
        city: "\u062F\u0647\u0644\u0631\u0627\u0646"
      },
      {
        prefix: "726",
        city: "\u0632\u0631\u06CC\u0646 \u0622\u0628\u0627\u062F"
      },
      {
        prefix: "634",
        city: "\u0634\u06CC\u0631\u0648\u0627\u0646 \u0644\u0648\u0645\u0627\u0631"
      },
      {
        prefix: "453",
        city: "\u0634\u06CC\u0631\u0648\u0627\u0646 \u0648 \u0686\u0631\u062F\u0627\u0648\u0644"
      },
      {
        prefix: "727",
        city: "\u0645\u0648\u0633\u06CC\u0627\u0646"
      },
      {
        prefix: "452",
        city: "\u0645\u0647\u0631\u0627\u0646"
      }
    ]
  },
  {
    province: "\u0627\u0631\u062F\u0628\u06CC\u0644",
    cities: [
      {
        prefix: "145-146",
        city: "\u0627\u0631\u062F\u0628\u06CC\u0644"
      },
      {
        prefix: "731",
        city: "\u0627\u0631\u0634\u0642"
      },
      {
        prefix: "690",
        city: "\u0627\u0646\u06AF\u0648\u062A"
      },
      {
        prefix: "601",
        city: "\u0628\u06CC\u0644\u0647 \u0633\u0648\u0627\u0631"
      },
      {
        prefix: "504",
        city: "\u067E\u0627\u0631\u0633 \u0622\u0628\u0627\u062F"
      },
      {
        prefix: "163",
        city: "\u062E\u0644\u062E\u0627\u0644"
      },
      {
        prefix: "714",
        city: "\u062E\u0648\u0631\u0634 \u0631\u0633\u062A\u0645"
      },
      {
        prefix: "715",
        city: "\u0633\u0631\u0639\u06CC\u0646"
      },
      {
        prefix: "566",
        city: "\u0633\u0646\u062C\u0628\u062F(\u06A9\u0648\u062B\u0631)"
      },
      {
        prefix: "166-167",
        city: "\u0645\u0634\u06A9\u06CC\u0646 \u0634\u0647\u0631"
      },
      {
        prefix: "161-162",
        city: "\u0645\u063A\u0627\u0646"
      },
      {
        prefix: "686",
        city: "\u0646\u0645\u06CC\u0646"
      },
      {
        prefix: "603",
        city: "\u0646\u06CC\u0631"
      }
    ]
  },
  {
    province: "\u0627\u0635\u0641\u0647\u0627\u0646",
    cities: [
      {
        prefix: "619",
        city: "\u0622\u0631\u0627\u0646 \u0648 \u0628\u06CC\u062F\u06AF\u0644"
      },
      {
        prefix: "118",
        city: "\u0627\u0631\u062F\u0633\u062A\u0627\u0646"
      },
      {
        prefix: "127-128-129",
        city: "\u0627\u0635\u0641\u0647\u0627\u0646"
      },
      {
        prefix: "620",
        city: "\u0628\u0627\u063A \u0628\u0647\u0627\u062F\u0631\u0627\u0646"
      },
      {
        prefix: "621",
        city: "\u0628\u0648\u0626\u06CC\u0646 \u0648 \u0645\u06CC\u0627\u0646\u062F\u0634\u062A"
      },
      {
        prefix: "549",
        city: "\u062A\u06CC\u0631\u0627\u0646 \u0648 \u06A9\u0631\u0648\u0646"
      },
      {
        prefix: "564",
        city: "\u062C\u0631\u0642\u0648\u06CC\u0647"
      },
      {
        prefix: "575",
        city: "\u0686\u0627\u062F\u06AF\u0627\u0646"
      },
      {
        prefix: "113-114",
        city: "\u062E\u0645\u06CC\u0646\u06CC \u0634\u0647\u0631"
      },
      {
        prefix: "122",
        city: "\u062E\u0648\u0627\u0646\u0633\u0627\u0631"
      },
      {
        prefix: "540",
        city: "\u062E\u0648\u0631 \u0648 \u0628\u06CC\u0627\u0628\u0627\u0646\u06A9"
      },
      {
        prefix: "660",
        city: "\u062F\u0648\u0644\u062A \u0622\u0628\u0627\u062F"
      },
      {
        prefix: "120",
        city: "\u0633\u0645\u06CC\u0631\u0645"
      },
      {
        prefix: "512",
        city: "\u0633\u0645\u06CC\u0631\u0645 \u0633\u0641\u0644\u06CC (\u062F\u0647\u0627\u0642\u0627\u0646)"
      },
      {
        prefix: "510-511",
        city: "\u0634\u0627\u0647\u06CC\u0646 \u0634\u0647\u0631"
      },
      {
        prefix: "119",
        city: "\u0634\u0647\u0631\u0636\u0627"
      },
      {
        prefix: "115",
        city: "\u0641\u0631\u06CC\u062F\u0646"
      },
      {
        prefix: "112",
        city: "\u0641\u0631\u06CC\u062F\u0648\u0646\u0634\u0647\u0631"
      },
      {
        prefix: "110-111",
        city: "\u0641\u0644\u0627\u0648\u0631\u062C\u0627\u0646"
      },
      {
        prefix: "125-126",
        city: "\u06A9\u0627\u0634\u0627\u0646"
      },
      {
        prefix: "565",
        city: "\u06A9\u0648\u0647\u067E\u0627\u06CC\u0647"
      },
      {
        prefix: "121",
        city: "\u06AF\u0644\u067E\u0627\u06CC\u06AF\u0627\u0646"
      },
      {
        prefix: "116-117",
        city: "\u0644\u0646\u062C\u0627\u0646(\u0632\u0631\u06CC\u0646\u0634\u0647\u0631)"
      },
      {
        prefix: "541",
        city: "\u0645\u0628\u0627\u0631\u06A9\u0647"
      },
      {
        prefix: "622",
        city: "\u0645\u06CC\u0645\u0647"
      },
      {
        prefix: "124",
        city: "\u0646\u0627\u0626\u06CC\u0646"
      },
      {
        prefix: "108-109",
        city: "\u0646\u062C\u0641 \u0622\u0628\u0627\u062F"
      },
      {
        prefix: "123",
        city: "\u0646\u0637\u0646\u0632"
      },
      {
        prefix: "\u0645\u062A\u0641\u0631\u0642\u0647",
        city: "\u0645\u062A\u0641\u0631\u0642\u0647 \u0627\u0632 \u0647\u0645\u0647 \u0627\u0633\u062A\u0627\u0646 \u0647\u0627"
      },
      {
        prefix: "428 \u2013 427",
        city: "\u0632\u0646\u062C\u0627\u0646"
      },
      {
        prefix: "507",
        city: "\u0645\u0644\u06A9\u0627\u0646"
      },
      {
        prefix: "158",
        city: "\u0645\u0631\u0646\u062F"
      },
      {
        prefix: "615",
        city: "\u0627\u0628\u0647\u0631 \u0648 \u062E\u0631\u0645\u062F\u0631\u0647"
      },
      {
        prefix: "152 \u2013 153",
        city: "\u0645\u06CC\u0627\u0646\u0647"
      }
    ]
  }
];
var national_id_default = nationalIdData;

// src/classes/NationalId.ts
var NationalId = class {
  nationalIdData;
  constructor(nationalIdData2) {
    this.nationalIdData = nationalIdData2;
  }
  // Method to get all provinces
  getProvinces() {
    return this.nationalIdData;
  }
  // Method to find a city by its prefix
  getCityByPrefix(prefix) {
    for (const province of this.nationalIdData) {
      const city = province.cities.find((city2) => city2.prefix === prefix);
      if (city) return city;
    }
    return void 0;
  }
  // Method to find a prefix by city name
  getPrefixByCity(cityName) {
    for (const province of this.nationalIdData) {
      const city = province.cities.find((city2) => city2.city === cityName);
      if (city) return city.prefix;
    }
    return void 0;
  }
};
var nationalIdInstance = new NationalId(national_id_default);

// src/data/province-and-cities/index.ts
var iranProvincesAndCities = [
  {
    id: 1,
    provinceName: "\u0622\u0630\u0631\u0628\u0627\u06CC\u062C\u0627\u0646 \u0634\u0631\u0642\u06CC",
    englishName: "East Azerbaijan",
    capital: "\u062A\u0628\u0631\u06CC\u0632",
    cities: [
      "\u062A\u0628\u0631\u06CC\u0632",
      "\u0645\u0631\u0627\u063A\u0647",
      "\u0645\u0631\u0646\u062F",
      "\u0645\u06CC\u0627\u0646\u0647",
      "\u0627\u0647\u0631",
      "\u0628\u0646\u0627\u0628",
      "\u0627\u0633\u06A9\u0648",
      "\u0634\u0628\u0633\u062A\u0631",
      "\u0633\u0631\u0627\u0628",
      "\u0628\u0633\u062A\u0627\u0646\u200C\u0622\u0628\u0627\u062F",
      "\u0647\u0634\u062A\u0631\u0648\u062F",
      "\u0648\u0631\u0632\u0642\u0627\u0646",
      "\u062C\u0644\u0641\u0627",
      "\u06A9\u0644\u06CC\u0628\u0631",
      "\u0686\u0627\u0631\u0627\u0648\u06CC\u0645\u0627\u0642"
    ]
  },
  {
    id: 2,
    provinceName: "\u0622\u0630\u0631\u0628\u0627\u06CC\u062C\u0627\u0646 \u063A\u0631\u0628\u06CC",
    englishName: "West Azerbaijan",
    capital: "\u0627\u0631\u0648\u0645\u06CC\u0647",
    cities: [
      "\u0627\u0631\u0648\u0645\u06CC\u0647",
      "\u062E\u0648\u06CC",
      "\u0645\u06CC\u0627\u0646\u062F\u0648\u0622\u0628",
      "\u0645\u0647\u0627\u0628\u0627\u062F",
      "\u0628\u0648\u06A9\u0627\u0646",
      "\u0633\u0644\u0645\u0627\u0633",
      "\u0646\u0642\u062F\u0647",
      "\u067E\u06CC\u0631\u0627\u0646\u0634\u0647\u0631",
      "\u0634\u0627\u0647\u06CC\u0646\u200C\u062F\u0698",
      "\u0633\u0631\u062F\u0634\u062A",
      "\u0686\u0627\u06CC\u067E\u0627\u0631\u0647",
      "\u0645\u0627\u06A9\u0648",
      "\u0627\u0634\u0646\u0648\u06CC\u0647",
      "\u0686\u0627\u0644\u062F\u0631\u0627\u0646",
      "\u062A\u06A9\u0627\u0628"
    ]
  },
  {
    id: 3,
    provinceName: "\u0627\u0631\u062F\u0628\u06CC\u0644",
    englishName: "Ardabil",
    capital: "\u0627\u0631\u062F\u0628\u06CC\u0644",
    cities: [
      "\u0627\u0631\u062F\u0628\u06CC\u0644",
      "\u0645\u0634\u06AF\u06CC\u0646\u200C\u0634\u0647\u0631",
      "\u062E\u0644\u062E\u0627\u0644",
      "\u067E\u0627\u0631\u0633\u200C\u0622\u0628\u0627\u062F",
      "\u06AF\u0631\u0645\u06CC",
      "\u0628\u06CC\u0644\u0647\u200C\u0633\u0648\u0627\u0631",
      "\u0646\u0645\u06CC\u0646",
      "\u0646\u06CC\u0631",
      "\u06A9\u0648\u062B\u0631"
    ]
  },
  {
    id: 4,
    provinceName: "\u0627\u0635\u0641\u0647\u0627\u0646",
    englishName: "Isfahan",
    capital: "\u0627\u0635\u0641\u0647\u0627\u0646",
    cities: [
      "\u0627\u0635\u0641\u0647\u0627\u0646",
      "\u06A9\u0627\u0634\u0627\u0646",
      "\u062E\u0645\u06CC\u0646\u06CC\u200C\u0634\u0647\u0631",
      "\u0646\u062C\u0641\u200C\u0622\u0628\u0627\u062F",
      "\u0634\u0627\u0647\u06CC\u0646\u200C\u0634\u0647\u0631",
      "\u0641\u0644\u0627\u0648\u0631\u062C\u0627\u0646",
      "\u0632\u0631\u06CC\u0646\u200C\u0634\u0647\u0631",
      "\u0644\u0646\u062C\u0627\u0646",
      "\u0622\u0631\u0627\u0646 \u0648 \u0628\u06CC\u062F\u06AF\u0644",
      "\u0646\u0627\u06CC\u06CC\u0646",
      "\u0633\u0645\u06CC\u0631\u0645",
      "\u0646\u0637\u0646\u0632",
      "\u0641\u0631\u06CC\u062F\u0648\u0646\u200C\u0634\u0647\u0631",
      "\u0686\u0627\u062F\u06AF\u0627\u0646",
      "\u0628\u0648\u0626\u06CC\u0646 \u0648 \u0645\u06CC\u0627\u0646\u062F\u0634\u062A"
    ]
  },
  {
    id: 5,
    provinceName: "\u0627\u0644\u0628\u0631\u0632",
    englishName: "Alborz",
    capital: "\u06A9\u0631\u062C",
    cities: ["\u06A9\u0631\u062C", "\u0633\u0627\u0648\u062C\u0628\u0644\u0627\u063A", "\u0646\u0638\u0631\u0622\u0628\u0627\u062F", "\u0641\u0631\u062F\u06CC\u0633", "\u0627\u0634\u062A\u0647\u0627\u0631\u062F", "\u0637\u0627\u0644\u0642\u0627\u0646"]
  },
  {
    id: 6,
    provinceName: "\u0627\u06CC\u0644\u0627\u0645",
    englishName: "Ilam",
    capital: "\u0627\u06CC\u0644\u0627\u0645",
    cities: [
      "\u0627\u06CC\u0644\u0627\u0645",
      "\u062F\u0647\u0644\u0631\u0627\u0646",
      "\u0622\u0628\u062F\u0627\u0646\u0627\u0646",
      "\u0627\u06CC\u0648\u0627\u0646",
      "\u062F\u0631\u0647\u200C\u0634\u0647\u0631",
      "\u0645\u0647\u0631\u0627\u0646",
      "\u0628\u062F\u0631\u0647",
      "\u0686\u0631\u062F\u0627\u0648\u0644",
      "\u0645\u0644\u06A9\u0634\u0627\u0647\u06CC",
      "\u0647\u0644\u06CC\u0644\u0627\u0646"
    ]
  },
  {
    id: 7,
    provinceName: "\u0628\u0648\u0634\u0647\u0631",
    englishName: "Bushehr",
    capital: "\u0628\u0648\u0634\u0647\u0631",
    cities: [
      "\u0628\u0648\u0634\u0647\u0631",
      "\u062F\u0634\u062A\u0633\u062A\u0627\u0646",
      "\u062F\u0634\u062A\u06CC",
      "\u06A9\u0646\u06AF\u0627\u0646",
      "\u06AF\u0646\u0627\u0648\u0647",
      "\u062F\u06CC\u0644\u0645",
      "\u062C\u0645",
      "\u0639\u0633\u0644\u0648\u06CC\u0647",
      "\u062A\u0646\u06AF\u0633\u062A\u0627\u0646"
    ]
  },
  {
    id: 8,
    provinceName: "\u062A\u0647\u0631\u0627\u0646",
    englishName: "Tehran",
    capital: "\u062A\u0647\u0631\u0627\u0646",
    cities: [
      "\u062A\u0647\u0631\u0627\u0646",
      "\u0634\u0645\u06CC\u0631\u0627\u0646\u0627\u062A",
      "\u0627\u0633\u0644\u0627\u0645\u0634\u0647\u0631",
      "\u0631\u06CC",
      "\u0648\u0631\u0627\u0645\u06CC\u0646",
      "\u067E\u0631\u062F\u06CC\u0633",
      "\u062F\u0645\u0627\u0648\u0646\u062F",
      "\u0641\u06CC\u0631\u0648\u0632\u06A9\u0648\u0647",
      "\u0631\u0628\u0627\u0637\u200C\u06A9\u0631\u06CC\u0645",
      "\u0634\u0647\u0631\u06CC\u0627\u0631",
      "\u0628\u0647\u0627\u0631\u0633\u062A\u0627\u0646",
      "\u0645\u0644\u0627\u0631\u062F",
      "\u0642\u062F\u0633"
    ]
  },
  {
    id: 9,
    provinceName: "\u0686\u0647\u0627\u0631\u0645\u062D\u0627\u0644 \u0648 \u0628\u062E\u062A\u06CC\u0627\u0631\u06CC",
    englishName: "Chaharmahal and Bakhtiari",
    capital: "\u0634\u0647\u0631\u06A9\u0631\u062F",
    cities: [
      "\u0634\u0647\u0631\u06A9\u0631\u062F",
      "\u0628\u0631\u0648\u062C\u0646",
      "\u0641\u0627\u0631\u0633\u0627\u0646",
      "\u0644\u0631\u062F\u06AF\u0627\u0646",
      "\u06A9\u0648\u0647\u0631\u0646\u06AF",
      "\u06A9\u06CC\u0627\u0631",
      "\u0633\u0627\u0645\u0627\u0646",
      "\u0627\u0631\u062F\u0644"
    ]
  },
  {
    id: 10,
    provinceName: "\u062E\u0631\u0627\u0633\u0627\u0646 \u062C\u0646\u0648\u0628\u06CC",
    englishName: "South Khorasan",
    capital: "\u0628\u06CC\u0631\u062C\u0646\u062F",
    cities: [
      "\u0628\u06CC\u0631\u062C\u0646\u062F",
      "\u0642\u0627\u0626\u0646",
      "\u0637\u0628\u0633",
      "\u0641\u0631\u062F\u0648\u0633",
      "\u0646\u0647\u0628\u0646\u062F\u0627\u0646",
      "\u0633\u0631\u0627\u06CC\u0627\u0646",
      "\u0633\u0631\u0628\u06CC\u0634\u0647",
      "\u062F\u0631\u0645\u06CC\u0627\u0646",
      "\u0628\u0634\u0631\u0648\u06CC\u0647"
    ]
  },
  {
    id: 11,
    provinceName: "\u062E\u0631\u0627\u0633\u0627\u0646 \u0631\u0636\u0648\u06CC",
    englishName: "Razavi Khorasan",
    capital: "\u0645\u0634\u0647\u062F",
    cities: [
      "\u0645\u0634\u0647\u062F",
      "\u0646\u06CC\u0634\u0627\u0628\u0648\u0631",
      "\u0633\u0628\u0632\u0648\u0627\u0631",
      "\u062A\u0631\u0628\u062A\u200C\u062D\u06CC\u062F\u0631\u06CC\u0647",
      "\u062A\u0631\u0628\u062A\u200C\u062C\u0627\u0645",
      "\u06A9\u0627\u0634\u0645\u0631",
      "\u0642\u0648\u0686\u0627\u0646",
      "\u0686\u0646\u0627\u0631\u0627\u0646",
      "\u062E\u0648\u0627\u0641",
      "\u0633\u0631\u062E\u0633",
      "\u0641\u0631\u06CC\u0645\u0627\u0646",
      "\u0628\u062C\u0633\u062A\u0627\u0646",
      "\u0628\u0631\u062F\u0633\u06A9\u0646",
      "\u062F\u0631\u06AF\u0632",
      "\u062E\u0644\u06CC\u0644\u200C\u0622\u0628\u0627\u062F"
    ]
  },
  {
    id: 12,
    provinceName: "\u062E\u0631\u0627\u0633\u0627\u0646 \u0634\u0645\u0627\u0644\u06CC",
    englishName: "North Khorasan",
    capital: "\u0628\u062C\u0646\u0648\u0631\u062F",
    cities: [
      "\u0628\u062C\u0646\u0648\u0631\u062F",
      "\u0634\u06CC\u0631\u0648\u0627\u0646",
      "\u0627\u0633\u0641\u0631\u0627\u06CC\u0646",
      "\u0641\u0627\u0631\u0648\u062C",
      "\u06AF\u0631\u0645\u0647",
      "\u062C\u0627\u062C\u0631\u0645",
      "\u0631\u0627\u0632 \u0648 \u062C\u0631\u06AF\u0644\u0627\u0646"
    ]
  },
  {
    id: 13,
    provinceName: "\u062E\u0648\u0632\u0633\u062A\u0627\u0646",
    englishName: "Khuzestan",
    capital: "\u0627\u0647\u0648\u0627\u0632",
    cities: [
      "\u0627\u0647\u0648\u0627\u0632",
      "\u0622\u0628\u0627\u062F\u0627\u0646",
      "\u062E\u0631\u0645\u0634\u0647\u0631",
      "\u062F\u0632\u0641\u0648\u0644",
      "\u0645\u0627\u0647\u0634\u0647\u0631",
      "\u0627\u06CC\u0630\u0647",
      "\u0628\u0646\u062F\u0631 \u0627\u0645\u0627\u0645 \u062E\u0645\u06CC\u0646\u06CC",
      "\u0634\u0648\u0634",
      "\u0634\u0648\u0634\u062A\u0631",
      "\u0628\u0647\u0628\u0647\u0627\u0646",
      "\u0631\u0627\u0645\u0647\u0631\u0645\u0632",
      "\u0631\u0627\u0645\u0634\u06CC\u0631",
      "\u0627\u0646\u062F\u06CC\u0645\u0634\u06A9",
      "\u0627\u0645\u06CC\u062F\u06CC\u0647",
      "\u0647\u0646\u062F\u06CC\u062C\u0627\u0646",
      "\u0644\u0627\u0644\u06CC",
      "\u0645\u0633\u062C\u062F\u0633\u0644\u06CC\u0645\u0627\u0646"
    ]
  },
  {
    id: 14,
    provinceName: "\u0632\u0646\u062C\u0627\u0646",
    englishName: "Zanjan",
    capital: "\u0632\u0646\u062C\u0627\u0646",
    cities: [
      "\u0632\u0646\u062C\u0627\u0646",
      "\u0627\u0628\u0647\u0631",
      "\u062E\u0631\u0645\u062F\u0631\u0647",
      "\u0645\u0627\u0647\u200C\u0646\u0634\u0627\u0646",
      "\u0633\u0644\u0637\u0627\u0646\u06CC\u0647",
      "\u0637\u0627\u0631\u0645",
      "\u0627\u06CC\u062C\u0631\u0648\u062F"
    ]
  },
  {
    id: 15,
    provinceName: "\u0633\u0645\u0646\u0627\u0646",
    englishName: "Semnan",
    capital: "\u0633\u0645\u0646\u0627\u0646",
    cities: [
      "\u0633\u0645\u0646\u0627\u0646",
      "\u0634\u0627\u0647\u0631\u0648\u062F",
      "\u062F\u0627\u0645\u063A\u0627\u0646",
      "\u06AF\u0631\u0645\u0633\u0627\u0631",
      "\u0645\u0647\u062F\u06CC\u200C\u0634\u0647\u0631",
      "\u0622\u0631\u0627\u062F\u0627\u0646",
      "\u0645\u06CC\u0627\u0645\u06CC"
    ]
  },
  {
    id: 16,
    provinceName: "\u0633\u06CC\u0633\u062A\u0627\u0646 \u0648 \u0628\u0644\u0648\u0686\u0633\u062A\u0627\u0646",
    englishName: "Sistan and Baluchestan",
    capital: "\u0632\u0627\u0647\u062F\u0627\u0646",
    cities: [
      "\u0632\u0627\u0647\u062F\u0627\u0646",
      "\u0632\u0627\u0628\u0644",
      "\u0686\u0627\u0628\u0647\u0627\u0631",
      "\u0627\u06CC\u0631\u0627\u0646\u0634\u0647\u0631",
      "\u0633\u0631\u0627\u0648\u0627\u0646",
      "\u062E\u0627\u0634",
      "\u0646\u06CC\u06A9\u0634\u0647\u0631",
      "\u06A9\u0646\u0627\u0631\u06A9",
      "\u0645\u06CC\u0631\u062C\u0627\u0648\u0647",
      "\u0632\u0647\u06A9",
      "\u0647\u06CC\u0631\u0645\u0646\u062F",
      "\u062F\u0644\u06AF\u0627\u0646",
      "\u0641\u0646\u0648\u062C",
      "\u0642\u0635\u0631\u0642\u0646\u062F",
      "\u0633\u06CC\u0628 \u0648 \u0633\u0648\u0631\u0627\u0646",
      "\u0645\u0647\u0631\u0633\u062A\u0627\u0646",
      "\u0631\u0627\u0633\u06A9",
      "\u0628\u0645\u067E\u0648\u0631"
    ]
  },
  {
    id: 17,
    provinceName: "\u0641\u0627\u0631\u0633",
    englishName: "Fars",
    capital: "\u0634\u06CC\u0631\u0627\u0632",
    cities: [
      "\u0634\u06CC\u0631\u0627\u0632",
      "\u0645\u0631\u0648\u062F\u0634\u062A",
      "\u06A9\u0627\u0632\u0631\u0648\u0646",
      "\u062C\u0647\u0631\u0645",
      "\u0641\u0633\u0627",
      "\u0644\u0627\u0631\u0633\u062A\u0627\u0646",
      "\u062F\u0627\u0631\u0627\u0628",
      "\u0622\u0628\u0627\u062F\u0647",
      "\u0632\u0631\u06CC\u0646\u200C\u062F\u0634\u062A",
      "\u0627\u0642\u0644\u06CC\u062F",
      "\u0645\u0645\u0633\u0646\u06CC",
      "\u0641\u06CC\u0631\u0648\u0632\u0622\u0628\u0627\u062F",
      "\u0627\u0633\u062A\u0647\u0628\u0627\u0646",
      "\u0633\u067E\u06CC\u062F\u0627\u0646",
      "\u062E\u0646\u062C",
      "\u06AF\u0631\u0627\u0634",
      "\u0644\u0627\u0645\u0631\u062F",
      "\u0628\u0648\u0627\u0646\u0627\u062A",
      "\u0646\u06CC\u200C\u0631\u06CC\u0632",
      "\u0642\u06CC\u0631\u0648\u06A9\u0627\u0631\u0632\u06CC\u0646"
    ]
  },
  {
    id: 18,
    provinceName: "\u0642\u0632\u0648\u06CC\u0646",
    englishName: "Qazvin",
    capital: "\u0642\u0632\u0648\u06CC\u0646",
    cities: ["\u0642\u0632\u0648\u06CC\u0646", "\u0622\u0628\u06CC\u06A9", "\u0627\u0644\u0628\u0631\u0632", "\u0628\u0648\u0626\u06CC\u0646\u200C\u0632\u0647\u0631\u0627", "\u062A\u0627\u06A9\u0633\u062A\u0627\u0646", "\u0622\u0648\u062C"]
  },
  {
    id: 19,
    provinceName: "\u0642\u0645",
    englishName: "Qom",
    capital: "\u0642\u0645",
    cities: ["\u0642\u0645"]
  },
  {
    id: 20,
    provinceName: "\u06A9\u0631\u062F\u0633\u062A\u0627\u0646",
    englishName: "Kurdistan",
    capital: "\u0633\u0646\u0646\u062F\u062C",
    cities: [
      "\u0633\u0646\u0646\u062F\u062C",
      "\u0633\u0642\u0632",
      "\u0645\u0631\u06CC\u0648\u0627\u0646",
      "\u0628\u0627\u0646\u0647",
      "\u0642\u0631\u0648\u0647",
      "\u062F\u06CC\u0648\u0627\u0646\u062F\u0631\u0647",
      "\u0628\u06CC\u062C\u0627\u0631",
      "\u06A9\u0627\u0645\u06CC\u0627\u0631\u0627\u0646",
      "\u062F\u0647\u06AF\u0644\u0627\u0646"
    ]
  },
  {
    id: 21,
    provinceName: "\u06A9\u0631\u0645\u0627\u0646",
    englishName: "Kerman",
    capital: "\u06A9\u0631\u0645\u0627\u0646",
    cities: [
      "\u06A9\u0631\u0645\u0627\u0646",
      "\u0631\u0641\u0633\u0646\u062C\u0627\u0646",
      "\u062C\u06CC\u0631\u0641\u062A",
      "\u0633\u06CC\u0631\u062C\u0627\u0646",
      "\u0632\u0631\u0646\u062F",
      "\u0628\u0645",
      "\u06A9\u0647\u0646\u0648\u062C",
      "\u0628\u0631\u062F\u0633\u06CC\u0631",
      "\u0627\u0646\u0627\u0631",
      "\u0634\u0647\u0631\u0628\u0627\u0628\u06A9",
      "\u0631\u0648\u062F\u0628\u0627\u0631 \u062C\u0646\u0648\u0628",
      "\u0639\u0646\u0628\u0631\u0622\u0628\u0627\u062F",
      "\u0641\u0647\u0631\u062C",
      "\u0642\u0644\u0639\u0647\u200C\u06AF\u0646\u062C",
      "\u0631\u06CC\u06AF\u0627\u0646"
    ]
  },
  {
    id: 22,
    provinceName: "\u06A9\u0631\u0645\u0627\u0646\u0634\u0627\u0647",
    englishName: "Kermanshah",
    capital: "\u06A9\u0631\u0645\u0627\u0646\u0634\u0627\u0647",
    cities: [
      "\u06A9\u0631\u0645\u0627\u0646\u0634\u0627\u0647",
      "\u0627\u0633\u0644\u0627\u0645\u200C\u0622\u0628\u0627\u062F \u063A\u0631\u0628",
      "\u0633\u0646\u0642\u0631",
      "\u0647\u0631\u0633\u06CC\u0646",
      "\u0635\u062D\u0646\u0647",
      "\u06A9\u0646\u06AF\u0627\u0648\u0631",
      "\u0633\u0631\u067E\u0644 \u0630\u0647\u0627\u0628",
      "\u06AF\u06CC\u0644\u0627\u0646\u063A\u0631\u0628",
      "\u0642\u0635\u0631 \u0634\u06CC\u0631\u06CC\u0646",
      "\u062F\u0627\u0644\u0627\u0647\u0648",
      "\u062B\u0644\u0627\u062B \u0628\u0627\u0628\u0627\u062C\u0627\u0646\u06CC"
    ]
  },
  {
    id: 23,
    provinceName: "\u06A9\u0647\u06AF\u06CC\u0644\u0648\u06CC\u0647 \u0648 \u0628\u0648\u06CC\u0631\u0627\u062D\u0645\u062F",
    englishName: "Kohgiluyeh and Boyer-Ahmad",
    capital: "\u06CC\u0627\u0633\u0648\u062C",
    cities: [
      "\u06CC\u0627\u0633\u0648\u062C",
      "\u062F\u0648\u06AF\u0646\u0628\u062F\u0627\u0646",
      "\u062F\u0647\u062F\u0634\u062A",
      "\u0644\u06CC\u06A9\u06A9",
      "\u0628\u0627\u0634\u062A",
      "\u062F\u0646\u0627",
      "\u0686\u0631\u0627\u0645",
      "\u0628\u0647\u0645\u0626\u06CC",
      "\u0644\u0646\u062F\u0647"
    ]
  },
  {
    id: 24,
    provinceName: "\u06AF\u0644\u0633\u062A\u0627\u0646",
    englishName: "Golestan",
    capital: "\u06AF\u0631\u06AF\u0627\u0646",
    cities: [
      "\u06AF\u0631\u06AF\u0627\u0646",
      "\u06AF\u0646\u0628\u062F \u06A9\u0627\u0648\u0648\u0633",
      "\u0639\u0644\u06CC\u200C\u0622\u0628\u0627\u062F \u06A9\u062A\u0648\u0644",
      "\u0622\u0642\u200C\u0642\u0644\u0627",
      "\u06A9\u0631\u062F\u06A9\u0648\u06CC",
      "\u0628\u0646\u062F\u0631\u062A\u0631\u06A9\u0645\u0646",
      "\u0645\u06CC\u0646\u0648\u062F\u0634\u062A",
      "\u06A9\u0644\u0627\u0644\u0647",
      "\u0622\u0632\u0627\u062F\u0634\u0647\u0631",
      "\u0631\u0627\u0645\u06CC\u0627\u0646",
      "\u06AF\u0645\u06CC\u0634\u0627\u0646",
      "\u0645\u0631\u0627\u0648\u0647\u200C\u062A\u067E\u0647"
    ]
  },
  {
    id: 25,
    provinceName: "\u06AF\u06CC\u0644\u0627\u0646",
    englishName: "Gilan",
    capital: "\u0631\u0634\u062A",
    cities: [
      "\u0631\u0634\u062A",
      "\u0644\u0627\u0647\u06CC\u062C\u0627\u0646",
      "\u0627\u0646\u0632\u0644\u06CC",
      "\u0644\u0646\u06AF\u0631\u0648\u062F",
      "\u0622\u0633\u062A\u0627\u0631\u0627",
      "\u062A\u0627\u0644\u0634",
      "\u0635\u0648\u0645\u0639\u0647\u200C\u0633\u0631\u0627",
      "\u0631\u0648\u062F\u0633\u0631",
      "\u0641\u0648\u0645\u0646",
      "\u0645\u0627\u0633\u0627\u0644",
      "\u0634\u0641\u062A",
      "\u0631\u0648\u062F\u0628\u0627\u0631",
      "\u0627\u0645\u0644\u0634",
      "\u0631\u0636\u0648\u0627\u0646\u0634\u0647\u0631"
    ]
  },
  {
    id: 26,
    provinceName: "\u0644\u0631\u0633\u062A\u0627\u0646",
    englishName: "Lorestan",
    capital: "\u062E\u0631\u0645\u200C\u0622\u0628\u0627\u062F",
    cities: [
      "\u062E\u0631\u0645\u200C\u0622\u0628\u0627\u062F",
      "\u0628\u0631\u0648\u062C\u0631\u062F",
      "\u062F\u0648\u0631\u0648\u062F",
      "\u0627\u0644\u06CC\u06AF\u0648\u062F\u0631\u0632",
      "\u06A9\u0648\u0647\u062F\u0634\u062A",
      "\u0646\u0648\u0631\u0622\u0628\u0627\u062F",
      "\u067E\u0644\u062F\u062E\u062A\u0631",
      "\u0627\u0632\u0646\u0627",
      "\u0627\u0644\u0634\u062A\u0631",
      "\u0631\u0648\u0645\u0634\u06A9\u0627\u0646"
    ]
  },
  {
    id: 27,
    provinceName: "\u0645\u0627\u0632\u0646\u062F\u0631\u0627\u0646",
    englishName: "Mazandaran",
    capital: "\u0633\u0627\u0631\u06CC",
    cities: [
      "\u0633\u0627\u0631\u06CC",
      "\u0628\u0627\u0628\u0644",
      "\u0622\u0645\u0644",
      "\u0642\u0627\u0626\u0645\u200C\u0634\u0647\u0631",
      "\u0646\u0648\u0634\u0647\u0631",
      "\u0686\u0627\u0644\u0648\u0633",
      "\u062A\u0646\u06A9\u0627\u0628\u0646",
      "\u0631\u0627\u0645\u0633\u0631",
      "\u0628\u0627\u0628\u0644\u0633\u0631",
      "\u0646\u0648\u0631",
      "\u0645\u062D\u0645\u0648\u062F\u0622\u0628\u0627\u062F",
      "\u0641\u0631\u06CC\u062F\u0648\u0646\u200C\u06A9\u0646\u0627\u0631",
      "\u0628\u0647\u0634\u0647\u0631",
      "\u0646\u06A9\u0627",
      "\u062C\u0648\u06CC\u0628\u0627\u0631",
      "\u06A9\u0644\u0627\u0631\u062F\u0634\u062A"
    ]
  },
  {
    id: 28,
    provinceName: "\u0645\u0631\u06A9\u0632\u06CC",
    englishName: "Markazi",
    capital: "\u0627\u0631\u0627\u06A9",
    cities: [
      "\u0627\u0631\u0627\u06A9",
      "\u0633\u0627\u0648\u0647",
      "\u062E\u0645\u06CC\u0646",
      "\u0645\u062D\u0644\u0627\u062A",
      "\u0634\u0627\u0632\u0646\u062F",
      "\u062F\u0644\u06CC\u062C\u0627\u0646",
      "\u06A9\u0645\u06CC\u062C\u0627\u0646",
      "\u062A\u0641\u0631\u0634",
      "\u0622\u0634\u062A\u06CC\u0627\u0646"
    ]
  },
  {
    id: 29,
    provinceName: "\u0647\u0631\u0645\u0632\u06AF\u0627\u0646",
    englishName: "Hormozgan",
    capital: "\u0628\u0646\u062F\u0631\u0639\u0628\u0627\u0633",
    cities: [
      "\u0628\u0646\u062F\u0631\u0639\u0628\u0627\u0633",
      "\u0628\u0646\u062F\u0631 \u0644\u0646\u06AF\u0647",
      "\u0645\u06CC\u0646\u0627\u0628",
      "\u0642\u0634\u0645",
      "\u06A9\u06CC\u0634",
      "\u0631\u0648\u062F\u0627\u0646",
      "\u062D\u0627\u062C\u06CC\u200C\u0622\u0628\u0627\u062F",
      "\u0628\u0633\u062A\u06A9",
      "\u0633\u06CC\u0631\u06CC\u06A9",
      "\u067E\u0627\u0631\u0633\u06CC\u0627\u0646"
    ]
  },
  {
    id: 30,
    provinceName: "\u0647\u0645\u062F\u0627\u0646",
    englishName: "Hamedan",
    capital: "\u0647\u0645\u062F\u0627\u0646",
    cities: [
      "\u0647\u0645\u062F\u0627\u0646",
      "\u0645\u0644\u0627\u06CC\u0631",
      "\u0646\u0647\u0627\u0648\u0646\u062F",
      "\u062A\u0648\u06CC\u0633\u0631\u06A9\u0627\u0646",
      "\u06A9\u0628\u0648\u062F\u0631\u0622\u0647\u0646\u06AF",
      "\u0631\u0632\u0646",
      "\u0641\u0627\u0645\u0646\u06CC\u0646",
      "\u0627\u0633\u062F\u0622\u0628\u0627\u062F"
    ]
  },
  {
    id: 31,
    provinceName: "\u06CC\u0632\u062F",
    englishName: "Yazd",
    capital: "\u06CC\u0632\u062F",
    cities: [
      "\u06CC\u0632\u062F",
      "\u0645\u06CC\u0628\u062F",
      "\u0627\u0631\u062F\u06A9\u0627\u0646",
      "\u0628\u0627\u0641\u0642",
      "\u0645\u0647\u0631\u06CC\u0632",
      "\u0627\u0628\u0631\u06A9\u0648\u0647",
      "\u062E\u0627\u062A\u0645",
      "\u0627\u0634\u06A9\u0630\u0631",
      "\u062A\u0641\u062A"
    ]
  }
];
var province_and_cities_default = iranProvincesAndCities;

// src/classes/Province.ts
var Provinces = class {
  provinces;
  constructor(provinces) {
    this.provinces = provinces;
  }
  // Method to get all provinces
  getProvinces() {
    return this.provinces;
  }
  // Method to find a province by its ID
  getProvinceById(id) {
    return this.provinces.find((province) => province.id === id);
  }
  // Method to get cities of a specific province
  getCitiesByProvince(provinceName) {
    const province = this.provinces.find(
      (p) => p.provinceName === provinceName
    );
    return province ? province.cities : void 0;
  }
  getProvinceByCityName(cityName) {
    const province = this.provinces.find(
      (province2) => province2.cities.includes(cityName)
    );
    return province;
  }
};
var provincesInstance = new Provinces(province_and_cities_default);

// src/hooks/useBank.ts
var useBank = (props) => {
  const { getBankByPrefix, getPrefixByBankName } = props;
  let specificBankByPrefix, specificPrefixByBankName;
  if (getBankByPrefix) {
    specificBankByPrefix = bank_default.find(
      (bank) => bank.prefix === getBankByPrefix
    );
  }
  if (getPrefixByBankName) {
    specificPrefixByBankName = bank_default.find(
      (bank) => bank.bankName === getPrefixByBankName
    );
  }
  return {
    data: bank_default,
    specificBankByPrefix: specificBankByPrefix ?? null,
    specificPrefixByBankName: specificPrefixByBankName ?? null
  };
};
var useBank_default = useBank;

// src/hooks/useNationalId.ts
var useNationalId = (props) => {
  const { getCityByPrefix, getPrefixByCity } = props;
  let specificCityByPrefix, specificPrefixByCity;
  if (getCityByPrefix) {
    national_id_default.some((province) => {
      specificCityByPrefix = province.cities.find(
        (city) => city.prefix === getCityByPrefix
      );
      return specificCityByPrefix;
    });
  }
  if (getPrefixByCity) {
    national_id_default.some((province) => {
      specificPrefixByCity = province.cities.find(
        (city) => city.city === getPrefixByCity
      );
      return specificPrefixByCity;
    });
  }
  return {
    data: national_id_default,
    specificCityByPrefix: specificCityByPrefix ?? null,
    specificPrefixByCity: specificPrefixByCity ?? null
  };
};
var useNationalId_default = useNationalId;

// src/hooks/useIranProvincesAndCities.ts
var useIranProvincesAndCities = (props) => {
  const { getCitiesByProvinceName, getProvinceByCityName } = props;
  let specificProvinceCities, specificCityOfProvince;
  if (getCitiesByProvinceName) {
    specificProvinceCities = province_and_cities_default.filter(
      (provinceAndCity) => provinceAndCity.provinceName === getCitiesByProvinceName
    );
  }
  if (getProvinceByCityName) {
    specificCityOfProvince = province_and_cities_default.filter(
      (provinceAndCity) => provinceAndCity.cities.includes(getProvinceByCityName)
    );
  }
  return {
    data: province_and_cities_default,
    specificProvinceCities: specificProvinceCities ?? null,
    specificCityOfProvince: specificCityOfProvince ?? null
  };
};
var useIranProvincesAndCities_default = useIranProvincesAndCities;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  useBank,
  useIranProvincesAndCities,
  useNationalId
});
