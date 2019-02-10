import {ICharacter, ICharacterClass, IStatBlock} from '../Interfaces';
import {IBackgrounds} from '../Interfaces/IBackgrounds';
import {IRace} from '../Interfaces/IRace';

export enum stat {
    strength = 'strength',
    dexterity = 'dexterity',
    constitution = 'constitution',
    wisdom = 'wisdom',
    intelligence = 'intelligence',
    charisma = 'charisma',
}

export class Character implements ICharacter {
    private statModifier(statType: stat) {
        const s: number = this.getStat(statType);
        return Math.floor((s - 10) / 2);
    }
    constructor(
        public name: string,
        public race: IRace,
        public dndClass: ICharacterClass[],
        public experience: number,
        public background: IBackgrounds,
        public playerName: string,
        public hitPoints: number,
        public stats: IStatBlock,
    ) {}

    public getStat(statType: stat): number {
        return this.stats[statType] + (this.race.abilityScore[statType] || 0);
    }

    public getHP(): number {
        return this.hitPoints + this.statModifier(stat.constitution);
    }

    public statString(statType: stat) {
        const base: string = String(this.getStat(statType));
        return ' ' + (base.length > 1 ? '' : ' ') + base;
    }
}
