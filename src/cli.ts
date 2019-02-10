import {ICharacterClass} from './Interfaces';
import {CharacterCreator} from './lib/CharacterCreator';
import {CommandProgram} from './lib/CommandProgram';

const chars: CharacterData[] = [];

(async () => {
    const p = new CommandProgram();
    const response = await p.queryUser('');
    if (response === 'new') {
        const newChar = await CharacterCreator.new(p);
        console.log(newChar);
    }
})();
