import { MatchResults } from './MatchResults';
import { dateStringToDate } from './utils';
import { MatchData } from './MathData';
import { CSVFileReader } from './CSVFileReader';

interface DataReader {
    read(): void;
    data: string[][];
}

export class MathReader {
    static fromCsvFile(fileName: string): MathReader {
        return new MathReader(new CSVFileReader(fileName));
    }
    data: MatchData[] = [];
    constructor(public reader: DataReader) {}
    load(): void {
        this.reader.read();
        this.data = this.reader.data.map(
            (row: string[]): MatchData => {
                return [
                    dateStringToDate(row[0]),
                    row[1],
                    row[2],
                    parseInt(row[3]),
                    parseInt(row[4]),
                    row[5] as MatchResults,
                    row[6],
                ];
            },
        );
    }
}
