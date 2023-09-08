interface Country1 {
    name: string;
    code: string;
    population: number;
}

const countryData: Country1 = {
    name: "India",
    code: "IN",
    population: 1_352_642_280,
};

type Currency = {
    name: string;
    code: string;
    symbol: string;
}

const currencyData: Currency = {
    name: "Euro",
    code: "EUR",
    symbol: "€",
};
