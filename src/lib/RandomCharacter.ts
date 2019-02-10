import {Dice} from './Dice';

export class RandomCharacter {
    public static randomStat(): number {
        const statRolls: number[] = [0, 0, 0, 0];
        const bestThree: number[] = statRolls
            .map(() => Dice.D(6))
            .sort();
        return bestThree[1] + bestThree[2] + bestThree[3];
    }

}
