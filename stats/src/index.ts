import { CSVFileReader } from './CSVFileREader';

const csvFileREader = new CSVFileReader('football.csv');
csvFileREader.read();
console.log(csvFileREader.data);
