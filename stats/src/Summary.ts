import { MatchData } from './MathData';

export interface Analyzer {
    // teamName: string;
    // matches: MatchData[];
    analysis(matches: MatchData[]): number;
}

export interface Reporter {
    report(data: number): void;
}

export class Summary {
    constructor(public analyzer: Analyzer, public consoleReport: Reporter) {}
    print(matches: MatchData[]): void {
        const analysisData = this.analyzer.analysis(matches);
        this.consoleReport.report(analysisData);
    }
}
