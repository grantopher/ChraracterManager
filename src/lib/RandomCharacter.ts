import {Character} from "./Character";
import { names } from "../data/names";
import { races } from "../data/races";

export class RandomCharacter {
    constructor() {
        const char: Character = new Character(
            this.randomString(names),
            this.randomString(races),
            [{name:'ranger', level: 1}],
            0,
            'criminal',
            'Mark Hamill',
            8,
            {
                strength: 10,
                dexterity: 10,
                constitution: 10,
                intelligence: 10,
                wisdom: 10,
                charisma: 10,
            }
        )
    }

    private randomString(list: string[]): string {
        const random_index: number = Math.floor(list.length * Math.random());
        return list[random_index];
    }

}