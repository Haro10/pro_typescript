import { MathReader } from './MatchReader';
import { Summary } from './Summary';

const mathReader = MathReader.fromCsvFile('football.csv');
mathReader.load();

const summary = Summary.fromWinAnalysisAndHtmlReport('Man United');
summary.print(mathReader.data);
