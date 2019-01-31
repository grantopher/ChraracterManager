import {Db, MongoClient, MongoError} from 'mongodb';
import { Express } from 'express-serve-static-core';
import { ICharacter } from "./Interfaces";

const url: string = "mongodb://localhost:27017";


MongoClient.connect(url, async (error: MongoError, client: MongoClient) => {
    if (error) throw error;
    const db: Db = client.db('character-sheets');
    const char: ICharacter = genCharacter();
    await db.collection('Sheets').insertOne(char);
    return client.close();
});

function genCharacter(): ICharacter {
    return {
        name: "STEVE",
        race: "Dwarf",
        class: [{ name: 'cleric', level: 1}],
        experience: 300,
        background: 'wanderer',
        player_name: 'Derek',
        hit_points: 42,
        stats: {
            strength: 10,
            dexterity: 10,
            constitution: 10,
            intelligence: 10,
            wisdom: 10,
            charisma: 10
        }
    }
}
