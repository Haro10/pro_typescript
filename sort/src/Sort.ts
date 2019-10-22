// interface Sortable {
//   length: number;
//   compare(leftNumber: number, rightNumber: number): boolean;
//   swap(leftNumber: number, rightNumber: number): void;
// }

export abstract class Sorter {
    // constructor(public collection: Sortable) {}
    abstract length: number;
    abstract compare(leftNumber: number, rightNumber: number): boolean;
    abstract swap(leftNumber: number, rightNumber: number): void;

    sort(): void {
        const length = this.length;
        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length - i - 1; j++) {
                if (this.compare(j, j + 1)) {
                    this.swap(j, j + 1);
                }
            }
        }
    }
}
