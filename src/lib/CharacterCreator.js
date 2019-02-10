"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var backgrounds_1 = require("../lists/backgrounds");
var dndClasses_1 = require("../lists/dndClasses");
var races_1 = require("../lists/races");
var Character_1 = require("./Character");
var RandomCharacter_1 = require("./RandomCharacter");
var CharacterCreator = /** @class */ (function () {
    function CharacterCreator() {
    }
    CharacterCreator["new"] = function (cmd) {
        return __awaiter(this, void 0, void 0, function () {
            var experience, playerName, name, race, className, dndClass, background, hitPoints, _a, stats;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        experience = 0;
                        return [4 /*yield*/, cmd.queryUser('Player Name: ')];
                    case 1:
                        playerName = _b.sent();
                        console.log('----------');
                        console.log('Lets build your character!');
                        console.log('----------');
                        return [4 /*yield*/, cmd.queryUser('Name: ')];
                    case 2:
                        name = _b.sent();
                        return [4 /*yield*/, cmd.queryUserOptions('Race: ', races_1.races)];
                    case 3:
                        race = _b.sent();
                        return [4 /*yield*/, cmd.queryUserOptions('Class: ', dndClasses_1.dndClasses)];
                    case 4:
                        className = _b.sent();
                        dndClass = { name: className, level: 1 };
                        return [4 /*yield*/, cmd.queryUserOptions('Background: ', backgrounds_1.backgrounds)];
                    case 5:
                        background = _b.sent();
                        _a = Number;
                        return [4 /*yield*/, cmd.queryUser('Health: ')];
                    case 6:
                        hitPoints = _a.apply(void 0, [_b.sent()]);
                        return [4 /*yield*/, CharacterCreator.statBlock(cmd)];
                    case 7:
                        stats = _b.sent();
                        return [2 /*return*/, new Character_1.Character(name, race, [dndClass], experience, background, playerName, hitPoints, stats)];
                }
            });
        });
    };
    CharacterCreator.statBlock = function (cmd) {
        return __awaiter(this, void 0, void 0, function () {
            var randomStats, strength, dexterity, constitution, intelligence, wisdom, charisma;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, cmd.queryUser('Randomly Generate Stats? (Y/n)\n')];
                    case 1:
                        randomStats = _a.sent();
                        if (!(randomStats === 'n')) return [3 /*break*/, 8];
                        return [4 /*yield*/, cmd.queryUser('Strength score: ')];
                    case 2:
                        strength = _a.sent();
                        return [4 /*yield*/, cmd.queryUser('Dexterity score: ')];
                    case 3:
                        dexterity = _a.sent();
                        return [4 /*yield*/, cmd.queryUser('Constitution score: ')];
                    case 4:
                        constitution = _a.sent();
                        return [4 /*yield*/, cmd.queryUser('Intelligence score: ')];
                    case 5:
                        intelligence = _a.sent();
                        return [4 /*yield*/, cmd.queryUser('Wisdom score: ')];
                    case 6:
                        wisdom = _a.sent();
                        return [4 /*yield*/, cmd.queryUser('Charisma score: ')];
                    case 7:
                        charisma = _a.sent();
                        return [2 /*return*/, {
                                charisma: Number(charisma),
                                constitution: Number(constitution),
                                dexterity: Number(dexterity),
                                intelligence: Number(intelligence),
                                strength: Number(strength),
                                wisdom: Number(wisdom)
                            }];
                    case 8: return [2 /*return*/, {
                            charisma: RandomCharacter_1.RandomCharacter.randomStat(),
                            constitution: RandomCharacter_1.RandomCharacter.randomStat(),
                            dexterity: RandomCharacter_1.RandomCharacter.randomStat(),
                            intelligence: RandomCharacter_1.RandomCharacter.randomStat(),
                            strength: RandomCharacter_1.RandomCharacter.randomStat(),
                            wisdom: RandomCharacter_1.RandomCharacter.randomStat()
                        }];
                }
            });
        });
    };
    return CharacterCreator;
}());
exports.CharacterCreator = CharacterCreator;
