# Iran-Lib

`iran-lib` is a TypeScript library providing a collection of utilities, data, and functionality related to Iran. It includes helpful modules for handling provinces and cities, bank information, and other general-purpose utilities for projects related to Iran.

---

## Installation

Install the library via npm or yarn:

```bash
npm install iran-lib
```

or

```bash
yarn add iran-lib
```

or

```bash
pnpm add iran-lib
```

---

## Features

- **Provinces and Cities**
  - Fetch provinces and their respective cities.
  - Find cities by province name or provinces by city name.

- **Bank Information**
  - Get information about Iranian banks, including bank prefixes and names.
  - Lookup bank names by prefixes or prefixes by bank names.

- **More to Come!**
  - This library is designed to expand with additional Iran-related utilities and datasets in the future.

---

## Usage

### Provinces and Cities

#### Using the Hook
```tsx
import { useIranProvincesAndCities } from "iran-lib";

const { data, specificProvinceCities } = useIranProvincesAndCities({
    getCitiesByProvinceName: "Tehran",
});

console.log(data); // Full provinces and cities data
console.log(specificProvinceCities); // Cities in Tehran province
```

#### Using the Class
```ts
import { Provinces } from "iran-lib";

const provincesInstance = new Provinces();

const allProvinces = provincesInstance.getProvinces();
const tehranCities = provincesInstance.getCitiesByProvince("Tehran");
const provinceOfCity = provincesInstance.getProvinceByCityName("Qom");

console.log(allProvinces);
console.log(tehranCities);
console.log(provinceOfCity);
```

### Bank Information

#### Using the Hook
```tsx
import { useBankData } from "iran-lib";

const { specificBankByPrefix } = useBankData({
    getBankByPrefix: "603799",
});

console.log(specificBankByPrefix); // { prefix: "603799", bankName: "\u0645\u0644\u06cc" }
```

#### Using the Class
```ts
import { Banks } from "iran-lib";

const banksInstance = new Banks();

const allBanks = banksInstance.getBanks();
const bank = banksInstance.getBankByPrefix("603799");
const prefix = banksInstance.getPrefixByBankName("\u0645\u0644\u06cc");

console.log(allBanks);
console.log(bank);
console.log(prefix);
```

---

## Data Sources

- **Province and City Data**: Comprehensive dataset of Iranian provinces and their respective cities.
- **Bank Data**: List of Iranian banks and their prefixes.

---

## Contributing

Contributions are welcome! If you have ideas or improvements, feel free to open an issue or submit a pull request.

---

## License

This project is licensed under the [MIT License](./LICENSE).

---

## Future Plans

- Adding support for postal codes and area codes.
- Utilities for national ID validation.
- Currency converters and date formatters for Iran.
- More datasets related to Iran's infrastructure and culture.

---

## Support

If you encounter any issues or have questions, feel free to open an issue on [GitHub](https://github.com/your-repo-link).
