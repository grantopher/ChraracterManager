"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const backgrounds_1 = require("../data/backgrounds");
const dndClasses_1 = require("../data/dndClasses");
const names_1 = require("../data/names");
const races_1 = require("../data/races");
const Character_1 = require("./Character");
const Dice_1 = require("./Dice");
class RandomCharacter {
    static make() {
        const char = new Character_1.Character(RandomCharacter.randomString(names_1.names), RandomCharacter.randomString(races_1.races), [{
                level: 1,
                name: RandomCharacter.randomString(dndClasses_1.dndClasses),
            }], 0, this.randomString(backgrounds_1.backgrounds), "Mark Hamill", 8, {
            charisma: RandomCharacter.randomStat(),
            constitution: RandomCharacter.randomStat(),
            dexterity: RandomCharacter.randomStat(),
            intelligence: RandomCharacter.randomStat(),
            strength: RandomCharacter.randomStat(),
            wisdom: RandomCharacter.randomStat(),
        });
        return char;
    }
    static randomString(list) {
        const randomIndex = Math.floor(list.length * Math.random());
        return list[randomIndex];
    }
    static randomStat() {
        const statRolls = [0, 0, 0, 0];
        const bestThree = statRolls
            .map(() => Dice_1.Dice.D(6))
            .sort();
        return bestThree[1] + bestThree[2] + bestThree[3];
    }
}
exports.RandomCharacter = RandomCharacter;
//# sourceMappingURL=RandomCharacter.js.map