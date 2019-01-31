
export interface ICharacter {
    name: string;
    race: string;
    class: ICharacterClass[];
    experience: number;
    background: string;
    player_name: string;
    hit_points: number;
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
