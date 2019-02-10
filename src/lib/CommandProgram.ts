import * as readline from 'readline';
import {Interface} from 'readline';

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
    public async queryUserList(question: string, list: string[]): Promise<string> {
        let acceptable: boolean = false;
        while (!acceptable) {
            const answer: string = await this.queryUser(question);
            if (list.indexOf(answer.toLowerCase()) >= 0) {
                acceptable = true;
                return answer.toLowerCase();
            }
            console.log('Not an available option. Listing your options:');
            console.log(list);
            console.log('\n');
        }
    }

    public close(): void {
        this.appInterface.close();
    }
}
