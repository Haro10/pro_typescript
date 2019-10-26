import { MathReader } from './MatchReader';
import { WinAnalysis } from './analyzers/WinAnalysis';
// import { ConsoleRepoter } from './reporters/ConsoleReport';
import { Summary } from './Summary';
import { HtmlReport } from './reporters/HtmlReport';

const mathReader = MathReader.fromCsvFile('football.csv');
mathReader.load();

// const winAnalysisData = new WinAnalysis('Man United');
// const htmlReport = new HtmlReport();
// const summary = new Summary(winAnalysisData, htmlReport);
const summary = Summary.fromWinAnalysisAndHtmlReport('Man United');
summary.print(mathReader.data);
