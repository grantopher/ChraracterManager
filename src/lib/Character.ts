import {ICharacter, ICharacterClass, IStatBlock} from '../Interfaces';

export class Character implements ICharacter {
    constructor(
        public name: string,
        public race: string,
        public dndClass: ICharacterClass[],
        public experience: number,
        public background: string,
        public playerName: string,
        public hitPoints: number,
        public stats: IStatBlock,
    ) {}
}
