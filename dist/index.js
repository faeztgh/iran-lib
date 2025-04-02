"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(require("./classes/Bank.js"), exports);
__exportStar(require("./classes/NationalId.js"), exports);
__exportStar(require("./classes/Province.js"), exports);
__exportStar(require("./data/bank/index.js"), exports);
__exportStar(require("./data/national-id/index.js"), exports);
__exportStar(require("./data/province-and-cities/index.js"), exports);
__exportStar(require("./hooks/useBank.js"), exports);
__exportStar(require("./hooks/useNationalId.js"), exports);
__exportStar(require("./hooks/useIranProvincesAndCities.js"), exports);
