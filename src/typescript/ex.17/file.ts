enum Currency {
    Euro,
    Dollar,
}

interface Country {
    name: string;
    currency: Currency;
}

const countries: Country[] = [
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

enum LanguageStatus {
    Primary = "primary",
    Secondary = "secondary",
}

const countryLanguages = [
    { language: "Spanish", status: LanguageStatus.Primary },
    { language: "English", status: LanguageStatus.Secondary },
];

console.log("Countries with Currency:");
countries.forEach((country) => {
    console.log(`${country.name}: ${Currency[country.currency]}`);
});

console.log("\nCountry Languages:");
countryLanguages.forEach((language) => {
    console.log(`${language.language}: ${language.status}`);
});

export {};

