import * as fs from 'fs';
import * as path from 'path';
const basePath: string = '../data/src';
const distPath: string = '../data/dist';
const paths: string[] = [
    'races',
    'classes',
    'backgrounds',
];

paths.forEach((relpath: string) => {
    const finalList: string[] = getFromJSON(`${relpath}/${relpath}`).reduce((all: any[], itemPath: string) => {
        const baseItem: any = getFromJSON(`${relpath}/${itemPath}`);
        if (baseItem.extensions) {
            const extensions: any = handleExtensions(baseItem, relpath, itemPath);
            return [
                ...extensions,
                ...all
            ];
        } else {
            return [
                baseItem,
                ...all
            ];
        }
    }, []);
    writeJSONFile(relpath, finalList);
});

function handleExtensions(baseItem: any, relpath: string, itempath: string): any {
    return baseItem.extensions.reduce((all: any[], extensionName: string) => {
        const extension: any = getFromJSON(`${relpath}/${itempath}.${extensionName}`);
        const fullExtension: any = deepAssign(extension, baseItem);
        return [
            fullExtension,
            ...all,
        ];
    }, []);
}

function getFromJSON(relpath: string) {
    const fullPath: string = path.join(__dirname, `${basePath}/${relpath}.json`);
    return JSON.parse(String(fs.readFileSync(fullPath)));
}

function writeErrorCallback(e: any) {
    console.log(e);
    console.log('oh noooo!');
}

function deepAssign(target: any, from: any): any {
    const clone: any = Object.assign({}, from);
    for (const item in target) {
        if (target.hasOwnProperty(item)) {
            if (target[item] instanceof Array) {
                clone[item] = [
                    ...(clone[item] || []),
                    ...target[item]
                ];
            } else if (target[item] instanceof Object) {
                clone[item] = {
                    ...(target[item] || {}),
                    ...clone[item]
                };
            } else {
                clone[item] = target[item];
            }
        }
    }
    return clone;
}

function writeJSONFile(relpath: string, data: any): void {
    if (!fs.existsSync(path.join(__dirname, distPath))) {
        fs.mkdirSync(path.join(__dirname, distPath));
    }
    fs.writeFile(
        path.join(__dirname, `${distPath}/${relpath}.json`),
        JSON.stringify(data),
        writeErrorCallback
    );
}
