import {Collection} from '../lib/Collection';

export interface ICharacter {
    name: string;
    race: string;
    dndClass: ICharacterClass[];
    experience: number;
    background: string;
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
    name: string;
    level: number;
}

export interface ISource {
    races?: Collection;
    classes?: Collection;
    feats?: Collection;
    items?: Collection;
    backgrounds?: Collection;
}
