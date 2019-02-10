"use strict";
exports.__esModule = true;
var Dice = /** @class */ (function () {
    function Dice() {
    }
    Dice.D = function (sides) {
        return Math.ceil(Math.random() * sides);
    };
    return Dice;
}());
exports.Dice = Dice;
