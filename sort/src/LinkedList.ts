import { Sorter } from './Sort';

class Node {
  next: Node | null = null;
  constructor(public data: number) {}
}

export class LinkedList extends Sorter {
  // next : Node | null =null;
  head: Node | null = null;
  // nextNode: Node | null = null;

  add(number: number): void {
    const addNode = new Node(number);
    if (!this.head) {
      this.head = addNode;
      return;
    }
    let tail = this.head;
    while (tail.next) {
      tail = tail.next;
    }
    tail.next = addNode;
  }

  get length(): number {
    if (!this.head) {
      return 0;
    }
    let length = 1;
    let node = this.head;
    while (node.next) {
      length++;
      node = node.next;
    }
    return length;
  }

  at(index: number): Node {
    if (!this.head) {
      throw new Error('The Linked List is empty');
    }
    let node: Node | null = this.head;
    let count = 0;
    while (node) {
      if (index === count) {
        return node;
      }
      count++;
      node = node.next;
    }
    throw new Error('the item is not exist');
  }
  compare(leftIndex: number, rightIndex: number): boolean {
    if (!this.head) {
      throw new Error('List is empty');
    }
    return this.at(leftIndex).data > this.at(rightIndex).data;
  }
  swap(leftIndex: number, rightIndex: number) {
    const leftNode = this.at(leftIndex);
    const rightNode = this.at(rightIndex);
    const temp = leftNode.data;
    leftNode.data = rightNode.data;
    rightNode.data = temp;
  }

  print(): void {
    if (!this.head) {
      return;
    }

    let node: Node | null = this.head;
    while (node) {
      console.log(node.data);
      node = node.next;
    }
  }
}
