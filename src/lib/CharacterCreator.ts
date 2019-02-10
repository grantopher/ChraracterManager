import {ICharacter, ICharacterClass, ISource, IStatBlock} from '../Interfaces';
import {dndClasses} from '../lists/dndClasses';
import {Character} from './Character';
import {Collection} from './Collection';
import { CommandProgram } from './CommandProgram';
import {RandomCharacter} from './RandomCharacter';

export class CharacterCreator {
    public static async new(
        cmd: CommandProgram,
        races: Collection,
        classes: Collection,
        backgrounds: Collection
    ): Promise<ICharacter> {
        // Predetermined:
        const experience: number = 0;
        const playerName = await cmd.queryUser('Player Name: ');
        console.log('--------------------------');
        console.log('Lets build your character!');
        console.log('--------------------------');
        const name: string = await cmd.queryUser('Name: ');
        const race: string = await cmd.queryUserCollection('Race: ', races);
        const className: string = await cmd.queryUserCollection('Class: ', classes);
        const dndClass: ICharacterClass = {name: className, level: 1};
        const background: string = await cmd.queryUserCollection('Background: ', backgrounds);
        const stats: IStatBlock = await CharacterCreator.statBlock(cmd);
        const hitPoints: number = classes.getProp(race.toLowerCase(), 'baseHealth');
        return new Character(
            name,
            race,
            [dndClass],
            experience,
            background,
            playerName,
            hitPoints,
            stats,
        );
    }

    private static async statBlock(cmd: CommandProgram): Promise<IStatBlock> {
        const randomStats: string = await cmd.queryUser('Randomly Generate Stats? (Y/n)\n');
        if (randomStats === 'n') {
            const strength = await cmd.queryUser('Strength score: ');
            const dexterity = await cmd.queryUser('Dexterity score: ');
            const constitution = await cmd.queryUser('Constitution score: ');
            const intelligence = await cmd.queryUser('Intelligence score: ');
            const wisdom = await cmd.queryUser('Wisdom score: ');
            const charisma = await cmd.queryUser('Charisma score: ');
            return {
                charisma: Number(charisma),
                constitution: Number(constitution),
                dexterity: Number(dexterity),
                intelligence: Number(intelligence),
                strength: Number(strength),
                wisdom: Number(wisdom),
            };
        }
        return {
            charisma: RandomCharacter.randomStat(),
            constitution: RandomCharacter.randomStat(),
            dexterity: RandomCharacter.randomStat(),
            intelligence: RandomCharacter.randomStat(),
            strength: RandomCharacter.randomStat(),
            wisdom: RandomCharacter.randomStat(),
        };
    }
}
