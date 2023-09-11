var populations = [
    1412600000,
    60317116,
    69950850,
    10678632,
];
var sumOfPopulations = populations.reduce(function (total, population) {
    return total + population;
}, 0);
console.log(sumOfPopulations);
