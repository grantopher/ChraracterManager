import * as fs from 'fs';
import * as path from 'path';
import {races} from './lists/races';

const basePath: string = '../data/src';
const target: string = 'races';
const TESTING: boolean = true;

const template: any = getFromJSON(`${target}/${target}.template`);
races.forEach((item: any) => {
    if (item instanceof Object) {
        item.sub.forEach((subItem: string) => {
            const clone: any = {...template};
            clone.name = subItem;
            clone.id = subItem.replace(' ', '').toLowerCase();
        });
    } else {
        const clone: any = {...template};
        const fileName: string = item.replace(' ', '').toLowerCase();
        clone.name = item;
        clone.id = fileName;
        writeJSONFile(`${basePath}/${target}/${fileName}`, clone);
    }
});

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

