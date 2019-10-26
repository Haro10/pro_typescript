import { Analyzer } from '../Summary';
import { MatchData } from '../MathData';
import { MatchResults } from '../MatchResults';

export class WinAnalysis implements Analyzer {
    constructor(public teamName: string) {}
    analysis(matches: MatchData[]): number {
        let numberOfWins = 0;
        matches.forEach(match => {
            if (match[1] === this.teamName && match[5] === MatchResults.HomeWin) {
                numberOfWins++;
            } else if (match[2] === this.teamName && match[5] === MatchResults.AwayWin) {
                numberOfWins++;
            }
        });
        return numberOfWins;
    }
}
