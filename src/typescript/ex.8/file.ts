interface Country3 {
    name: string;
    code: string;
}


interface CountryWithPopulation extends Country3 {
    population: number;
}

const countryA: CountryWithPopulation = {
    name: "India",
    code: "IN",
    population: 1_352_642_280,
};

const countryB: Country3 = {
    name: "Italy",
    code: "IT",
};

const countryC: CountryWithPopulation = {
    name: "Spain",
    code: "ES",
    population: 47_450_795,
};

export { CountryWithPopulation };
   
