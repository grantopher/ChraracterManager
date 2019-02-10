import {CharacterCreator} from './lib/CharacterCreator';
import {Collection} from './lib/Collection';
import {CommandProgram} from './lib/CommandProgram';

const chars: CharacterData[] = [];

(async () => {
    const p = new CommandProgram();
    console.log('Loading...');
    const races: Collection = new Collection('races', '../../data/races');
    const classes: Collection = new Collection('classes', '../../data/classes');
    const backgrounds: Collection = new Collection('backgrounds', '../../data/backgrounds');
    console.log(races.getList());
    const response = await p.queryUser('Welcome to my game!');

    if (response === 'new') {
        const newChar = await CharacterCreator.new(
            p,
            races,
            classes,
            backgrounds,
        );
        console.log(newChar);
    }
})();
