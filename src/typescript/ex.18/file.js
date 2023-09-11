"use strict";
// The `Currency` type doesn't work for the type of value in the
// `narniaCurrency` variable. Change the `Currency` type into a
// union type that works for both the variables.
//
// This should fix the type error on Line 15.
Object.defineProperty(exports, "__esModule", { value: true });
var indianCurrency = "Indian rupee";
var narniaCurrency = false;
function outputCountryData(country, data) {
    console.log("The data for ".concat(country, " is: ").concat(data));
}
outputCountryData("Italy", 60317116);
outputCountryData("Nigeria", "Naira");
outputCountryData("United States of America", "English");
outputCountryData("India", 1352642280);
