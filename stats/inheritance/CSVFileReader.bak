import fs from 'fs';

export abstract class CSVFileReader<T> {
    data: T[] = [];
    constructor(public fileName: string) {}
    abstract transferData(data: string[]): T;
    read(): void {
        this.data = fs
            .readFileSync(this.fileName, {
                encoding: 'utf-8',
            })
            .split('\n')
            .map((row: string): string[] => {
                return row.split(',');
            })
            .map(this.transferData);
    }
}
