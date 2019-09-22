export class CharactorsCollection {
  constructor(public data: string) {}

  get length(): number {
    return this.data.length;
  }

  compare(leftNumber: number, rightNumber: number): boolean {
    return (
      this.data[leftNumber].toLowerCase > this.data[rightNumber].toLowerCase
    );
  }

  swap(leftNumber: number, rightNumber: number): void {
    let tempArr = this.data.split('');
    const temp = tempArr[leftNumber];
    tempArr[leftNumber] = tempArr[rightNumber];
    tempArr[rightNumber] = temp;
    this.data = tempArr.join('');
  }
}
