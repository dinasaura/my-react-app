"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Currency;
(function (Currency) {
    Currency[Currency["Euro"] = 0] = "Euro";
    Currency[Currency["Dollar"] = 1] = "Dollar";
})(Currency || (Currency = {}));
var countries = [
    {
        name: "France",
        currency: Currency.Euro,
    },
    {
        name: "United States of America",
        currency: Currency.Dollar,
    },
    {
        name: "Italy",
        currency: Currency.Euro,
    },
    {
        name: "New Zealand",
        currency: Currency.Dollar,
    },
];
var LanguageStatus;
(function (LanguageStatus) {
    LanguageStatus["Primary"] = "primary";
    LanguageStatus["Secondary"] = "secondary";
})(LanguageStatus || (LanguageStatus = {}));
var countryLanguages = [
    { language: "Spanish", status: LanguageStatus.Primary },
    { language: "English", status: LanguageStatus.Secondary },
];
console.log("Countries with Currency:");
countries.forEach(function (country) {
    console.log("".concat(country.name, ": ").concat(Currency[country.currency]));
});
console.log("\nCountry Languages:");
countryLanguages.forEach(function (language) {
    console.log("".concat(language.language, ": ").concat(language.status));
});
