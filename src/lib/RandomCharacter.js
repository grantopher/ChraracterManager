"use strict";
exports.__esModule = true;
var backgrounds_1 = require("../lists/backgrounds");
var dndClasses_1 = require("../lists/dndClasses");
var names_1 = require("../lists/names");
var races_1 = require("../lists/races");
var Character_1 = require("./Character");
var Dice_1 = require("./Dice");
var RandomCharacter = /** @class */ (function () {
    function RandomCharacter() {
    }
    RandomCharacter.make = function () {
        var char = new Character_1.Character(RandomCharacter.randomString(names_1.names), RandomCharacter.randomString(races_1.races), [{
                level: 1,
                name: RandomCharacter.randomString(dndClasses_1.dndClasses)
            }], 0, this.randomString(backgrounds_1.backgrounds), 'Mark Hamill', 8, {
            charisma: RandomCharacter.randomStat(),
            constitution: RandomCharacter.randomStat(),
            dexterity: RandomCharacter.randomStat(),
            intelligence: RandomCharacter.randomStat(),
            strength: RandomCharacter.randomStat(),
            wisdom: RandomCharacter.randomStat()
        });
        return char;
    };
    RandomCharacter.randomString = function (list) {
        var randomIndex = Math.floor(list.length * Math.random());
        return list[randomIndex];
    };
    RandomCharacter.randomStat = function () {
        var statRolls = [0, 0, 0, 0];
        var bestThree = statRolls
            .map(function () { return Dice_1.Dice.D(6); })
            .sort();
        return bestThree[1] + bestThree[2] + bestThree[3];
    };
    return RandomCharacter;
}());
exports.RandomCharacter = RandomCharacter;
