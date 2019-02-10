import {backgrounds} from '../lists/backgrounds';
import {dndClasses} from '../lists/dndClasses';
import { names } from '../lists/names';
import { races } from '../lists/races';
import {Character} from './Character';
import {Dice} from './Dice';

export class RandomCharacter {
    public static make(): Character {
        const char: Character = new Character(
            RandomCharacter.randomString(names),
            RandomCharacter.randomString(races),
            [{
                level: 1,
                name: RandomCharacter.randomString(dndClasses),
            }],
            0,
            this.randomString(backgrounds),
            'Mark Hamill',
            8,
            {
                charisma: RandomCharacter.randomStat(),
                constitution: RandomCharacter.randomStat(),
                dexterity: RandomCharacter.randomStat(),
                intelligence: RandomCharacter.randomStat(),
                strength: RandomCharacter.randomStat(),
                wisdom: RandomCharacter.randomStat(),
            },
        );
        return char;
    }

    private static randomString(list: string[]): string {
        const randomIndex: number = Math.floor(list.length * Math.random());
        return list[randomIndex];
    }

    public static randomStat(): number {
        const statRolls: number[] = [0, 0, 0, 0];
        const bestThree: number[] = statRolls
            .map(() => Dice.D(6))
            .sort();
        return bestThree[1] + bestThree[2] + bestThree[3];
    }

}
