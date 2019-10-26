import { CSVFileReader } from './CSVFileReader';
import { MathReader } from './MatchReader';

const csvFileReader = new CSVFileReader('football.csv');
const mathReader = new MathReader(csvFileReader);

csvFileReader.read();
console.log(mathReader.data);
