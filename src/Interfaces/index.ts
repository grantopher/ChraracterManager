import {IBackgrounds} from './IBackgrounds';
import {IClass} from './IClass';
import {IRace} from './IRace';

export interface ICharacter {
    name: string;
    race: IRace;
    dndClass: ICharacterClass[];
    experience: number;
    background: IBackgrounds;
    playerName: string;
    hitPoints: number;
    stats: IStatBlock;
}

export interface IStatBlock {
    strength: number;
    dexterity: number;
    constitution: number;
    intelligence: number;
    wisdom: number;
    charisma: number;
}

export interface ICharacterClass {
    class: IClass;
    level: number;
}
