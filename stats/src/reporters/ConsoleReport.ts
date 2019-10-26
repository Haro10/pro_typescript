import { Reporter } from '../Summary';

export class ConsoleRepoter implements Reporter {
    report(data: number): void {
        console.log(`The team  won ${data} games`);
        // console.log(`The team ${teamName} won ${data} games`);
    }
}
