// import { Sorter } from './Sort';
import { NumberCollection } from './NumbersCollection';
import { CharactorsCollection } from './CharactorsCollection';
import { LinkedList } from './LinkedList';

const numberCollection = new NumberCollection([10, 3, -5, 0]);
numberCollection.sort();
console.log('numberCollection: ', numberCollection.data);

const charsCollection = new CharactorsCollection('Kieu Minh Ha');
charsCollection.sort();
console.log('charsCollection: ', charsCollection.data);

const linkedList = new LinkedList();
linkedList.add(20);
linkedList.add(10);
linkedList.add(30);
linkedList.add(5);
// const sorter = new Sorter(linkedList);
linkedList.sort();
linkedList.print();
