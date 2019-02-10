export interface IClass {
    name: string;
    id: string;
    baseHealth: number;
    hitDice: 'd6' | 'd8' | 'd10' | 'd12';
    proficiencies: string[];
    savingThrows: string[];
    skillChoices: string[];
    startingEquipment: string[] | IStartingOption[];
    abilities: IAbility;
}

interface IStartingOption {
    a: string;
    b: string;
}

interface IAbility {
    name: string;
    charges: string;
}
