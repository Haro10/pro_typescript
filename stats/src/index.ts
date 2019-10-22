import { MatchReader } from './MatchReader';

const csvFileReader = new MatchReader('football.csv');
csvFileReader.read();
console.log(csvFileReader.data);
