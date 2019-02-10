"use strict";
exports.__esModule = true;
var Character = /** @class */ (function () {
    function Character(name, race, dndClass, experience, background, playerName, hitPoints, stats) {
        this.name = name;
        this.race = race;
        this.dndClass = dndClass;
        this.experience = experience;
        this.background = background;
        this.playerName = playerName;
        this.hitPoints = hitPoints;
        this.stats = stats;
    }
    return Character;
}());
exports.Character = Character;
