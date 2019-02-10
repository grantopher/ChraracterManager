export interface IRace {
    name: string;
    id: string;
    traits: string[];
    abilityScore: IAbilityScore;
    age: IAgeRange;
    spells?: ISpell[];
    size: INumberRange;
    speed: number;
    languages: string[];
}

interface INumberRange {
    min: number;
    max: number;
}

interface IAbilityScore {
    strength?: number;
    dexterity?: number;
    constitution?: number;
    intelligence?: number;
    wisdom?: number;
    charisma?: number;
}

interface IAgeRange {
    adult: number;
    max: number;
}

interface ISpell {
    level: number;
    uses: string | number;
    id: string;
}
