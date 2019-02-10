import * as fs from 'fs';
import * as path from 'path';

export class Collection {
    private static getJSONFromPath(relpath: string): any {
        try {
            return JSON.parse(
                String(fs.readFileSync(
                    path.join(__dirname,
                        `${relpath}.json`
                    )
                ))
            );
        } catch (e) {
            console.warn(`could not find file at path: ${relpath}`);
        }
    }

    private static IDExists(item: IJSONCollection): void {
        if (!item.id) {
            throw new Error('All collection items must have ID');
        }
    }

    private static deepAssign(target: any, from: any): any {
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

    private all: any[];

    private byID: any;

    constructor(public name: string, private base: string) {
        const list: string[] = Collection.getJSONFromPath(`${base}/${name}`);
        this.all = list.reduce((all: any[], item: any) => {
            const baseItem: IJSONCollection = Collection.getJSONFromPath(`${base}/${item}`);
            if (!baseItem) {
                return all;
            }
            Collection.IDExists(baseItem);
            if (baseItem.extensions) {
                return [
                    ...baseItem.extensions.map((extension: any) => {
                        const extendedItem: any = Collection.getJSONFromPath(`${base}/${item}.${extension}`);
                        Collection.IDExists(extendedItem);
                        return Collection.deepAssign(extendedItem, baseItem);
                    }),
                    ...all
                ];
            }
            return [
                baseItem,
                ...all,
            ];
        }, []);
        this.byID = this.all.reduce((all: any, item: any) => {
            return {
                [item.id]: item,
                ...all
            };
        }, {});
    }

    public getKV(): string[] {
        return this.all.reduce((all, item) => {
            return {
                [item.id]: item.name,
                ...all,
            };
        }, {});
    }

    public getProp(id: string, prop: string): any {
        return this.byID[id] && this.byID[id][prop];
    }

    public hasItemWithProp(match: string, prop: string) {
        return this.all.filter((item: any) => item[prop] && item[prop].toLowerCase() === match.toLowerCase());
    }

    public getID(id: string) {
        return this.byID[id];
    }

    public getList(): string[] {
        return this.all.map((item) => item.name);
    }
}

interface IJSONCollection {
    extensions: string[];
    id: string;
}
