import {ICharacter, ICharacterClass, IStatBlock} from '../Interfaces';

export class Character implements ICharacter{

    constructor(
        public name: string,
        public race: string,
        public dnd_class: ICharacterClass[],
        public experience: number,
        public background: string,
        public player_name: string,
        public hit_points: number,
        public stats: IStatBlock,
    ) {}
}