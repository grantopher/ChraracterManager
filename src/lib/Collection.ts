import * as fs from 'fs';
import * as path from 'path';
import {CommandProgram} from './CommandProgram';

export class Collection<ICollectionType extends IBaseCollection> {
    private static load(type: string) {
        return JSON.parse(
            String(fs.readFileSync(
                path.join(__dirname, `../../data/dist/${type}.json`),
            ))
        );
    }
    private readonly all: ICollectionType[];
    private readonly byID: {[key: string]: ICollectionType};
    private readonly idList: string[];

    constructor(
        private type: string,
        private cmd: CommandProgram,
        private question: string
    ) {
        this.all = Collection.load(type);
        this.byID = this.mapById();
        this.idList = this.all.map((col: ICollectionType) => col.id);
    }

    private mapById() {
        return this.all.reduce((all: ICollectionType[], item: ICollectionType) => {
                return {
                    [item.id]: item,
                    ...all
                };
            }, {});
    }

    public hasItemWithProp(match: string, prop: string) {
        return this.all.filter((item: any) => item[prop] && item[prop].toLowerCase() === match.toLowerCase());
    }

    public getID(id: string) {
        return this.byID[id];
    }

    public async selectFromAll(): Promise<ICollectionType> {
        const id: string =  await this.cmd.queryUserList(this.question, this.idList);
        return this.byID[id];
    }
}

interface IBaseCollection {
    name: string;
    id: string;
}
