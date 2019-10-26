import { CSVFileReader } from './CSVFileReader';
import { MathReader } from './MatchReader';
import { WinAnalysis } from './analyzers/WinAnalysis';
// import { ConsoleRepoter } from './reporters/ConsoleReport';
import { Summary } from './Summary';
import { HtmlReport } from './reporters/HtmlReport';

const csvFileReader = new CSVFileReader('football.csv');
const mathReader = new MathReader(csvFileReader);
mathReader.load();

const winAnalysisData = new WinAnalysis('Man United');
const htmlReport = new HtmlReport()
// const consoleReport = new ConsoleRepoter();
// const summary = new Summary(winAnalysisData, consoleReport);
const summary = new Summary(winAnalysisData, htmlReport);
summary.print(mathReader.data);

// console.log(mathReader.data);
