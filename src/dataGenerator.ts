import * as fs from 'fs';
import * as path from 'path';
import {races} from './lists/races';

const basePath: string = '../data/src';
const target: string = 'races';
const TESTING: boolean = false;

const template: any = getFromJSON(`${target}/${target}.template`);
const all: string[] = races.reduce((all: string[], item: any) => {
    if (item instanceof Object) {
        item.sub.forEach((subItem: string) => {
            const clone: any = {...template};
            const fileName: string = item.race.toLowerCase() + '.' + subItem.replace(' ', '').toLowerCase();
            clone.name = subItem;
            clone.id = fileName;
            delete clone.extensions;
            writeJSONFile(`${basePath}/${target}/${fileName}`, clone);
        });
        const bclone: any = {...template};
        const bfileName: string = item.race.replace(' ', '').toLowerCase();
        bclone.name = item.race;
        bclone.id = bfileName;
        bclone.extensions = item.sub;
        writeJSONFile(`${basePath}/${target}/${bfileName}`, bclone);
        return [
            bfileName,
            ...all,
        ];
    } else {
        const clone: any = {...template};
        const fileName: string = item.replace(' ', '').toLowerCase();
        clone.name = item;
        clone.id = fileName;
        delete clone.extensions;
        writeJSONFile(`${basePath}/${target}/${fileName}`, clone);
        return [
            fileName,
            ...all
        ];
    }
}, []);

writeJSONFile(`${basePath}/${target}/${target}`, all);

function writeJSONFile(relpath: string, data: any): void {
    if (TESTING) {
        return null;
    }
    fs.writeFile(path.join(__dirname, `${relpath}.json`),
        JSON.stringify(data),
        () => {
        console.log(`${relpath} has been completed`);
        });
};

function getFromJSON(relpath: string) {
    const fullPath: string = path.join(__dirname, `${basePath}/${relpath}.json`);
    return JSON.parse(String(fs.readFileSync(fullPath)));
}
