"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var currency = { name: "Indian rupee" };
currency.code = "THB";
currency = "Baht";
function countryNameLength(value) {
    if (typeof value === "string") {
        console.log(value.length);
    }
}
countryNameLength("United States of America");
function throwCountryError(message) {
    throw new Error("Could not find country: ".concat(message));
}
throwCountryError("Narnia");
