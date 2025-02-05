import { Sorter } from './Sort';

export class NumberCollection extends Sorter {
    constructor(public data: number[]) {
        super();
    }
    get length(): number {
        return this.data.length;
    }
    compare(leftIndex: number, rightIndex: number): boolean {
        let a = 123;
        return this.data[leftIndex] > this.data[rightIndex];
    }

    swap(leftIndex: number, rightIndex: number) {
        const temp = this.data[leftIndex];
        this.data[leftIndex] = this.data[rightIndex];
        this.data[rightIndex] = temp;
    }
}
