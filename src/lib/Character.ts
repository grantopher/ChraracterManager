import {ICharacter, ICharacterClass, IStatBlock} from '../Interfaces';
import {IBackgrounds} from '../Interfaces/IBackgrounds';
import {IRace} from '../Interfaces/IRace';

export class Character implements ICharacter {
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
}
