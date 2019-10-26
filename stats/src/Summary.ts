import { MatchData } from './MathData';
import { WinAnalysis } from './analyzers/WinAnalysis';
import { HtmlReport } from './reporters/HtmlReport';

export interface Analyzer {
    // teamName: string;
    // matches: MatchData[];
    analysis(matches: MatchData[]): number;
}

export interface Reporter {
    report(data: number): void;
}

export class Summary {
    static fromWinAnalysisAndHtmlReport(team: string): Summary {
        return new Summary(new WinAnalysis(team), new HtmlReport());
    }
    constructor(public analyzer: Analyzer, public consoleReport: Reporter) {}
    print(matches: MatchData[]): void {
        const analysisData = this.analyzer.analysis(matches);
        this.consoleReport.report(analysisData);
    }
}
