import * as readline from 'readline';
import {Interface} from 'readline';
import {Collection} from './Collection';

export class CommandProgram {
    private appInterface: Interface = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
        terminal: false,
    });

    public async queryUser(question: string): Promise<string> {
        return new Promise((resolve) => {
            this.appInterface.question(question,
                (answer: string) => {
                    resolve(answer);
                });
        });
    }
    public async queryUserCollection(question: string, collection: Collection): Promise<string> {
        let acceptable: boolean = false;
        while (!acceptable) {
            const answer: string = await this.queryUser(question);
            if (collection.hasItemWithProp(answer.toLowerCase(), 'name')) {
                acceptable = true;
                return collection.getID(answer.toLowerCase());
            }
            console.log('Not an available option. Listing your options:');
            console.log(
                collection.getList()
            );
            console.log('\n');
        }
    }

    public close(): void {
        this.appInterface.close();
    }
}
