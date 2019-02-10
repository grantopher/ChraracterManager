import {IBackgrounds} from './Interfaces/IBackgrounds';
import {IClass} from './Interfaces/IClass';
import {IRace} from './Interfaces/IRace';
import {stat} from './lib/Character';
import {CharacterCreator} from './lib/CharacterCreator';
import {Collection} from './lib/Collection';
import {CommandProgram} from './lib/CommandProgram';

const chars: CharacterData[] = [];

(async () => {
    const p = new CommandProgram();
    console.log('Loading...');
    const races: Collection<IRace> = new Collection<IRace>('races', p, 'Race: ');
    const classes: Collection<IClass> = new Collection<IClass>('classes', p, 'Class: ');
    const backgrounds: Collection<IBackgrounds> = new Collection<IBackgrounds>('backgrounds', p, 'Background: ');
    const response = await p.queryUser('Welcome to my game!');

    if (response === 'new') {
        const newChar = await CharacterCreator.new(
            p,
            races,
            classes,
            backgrounds,
        );
        console.log(`
${newChar.name} has been created!
Lets break it down:
| STR | DEX | CON | INT | WIS | CHA |
| ${newChar.statString(stat.strength)} | ${newChar.statString(stat.dexterity)} | ${newChar.statString(stat.constitution)} | ${newChar.statString(stat.intelligence)} | ${newChar.statString(stat.wisdom)} | ${newChar.statString(stat.charisma)} |

| -- HP -- |
| ${newChar.getHP()} |
        `);
    }
})();
