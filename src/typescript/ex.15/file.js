"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Currency = /** @class */ (function () {
    function Currency(name, code, symbol) {
        this.name = name;
        this.code = code;
        this.symbol = symbol;
    }
    Currency.prototype.describe = function () {
        var description = "The ".concat(this.name, " currency ");
        description += "has the code ".concat(this.code, " ");
        description += "and uses the symbol ".concat(this.symbol, ".");
        return description;
    };
    return Currency;
}());
var currencyNaira = new Currency("Naira", "NGN", "₦");
console.log(currencyNaira.describe());
var currencyUsDollar = new Currency("United States dollar", "USD", "$");
console.log(currencyUsDollar.describe());
